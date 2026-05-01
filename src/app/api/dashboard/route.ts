import { NextResponse } from "next/server";

const MCP_URL = "https://aegisgov-contracts.vercel.app";
const WALLET = "0x10Fae7881E5DB7fB5b4e8A84718fe66a691a5B52";
const BASE_SEPOLIA_RPC = "https://sepolia.base.org";
// USDC on Base Sepolia
const USDC_CONTRACT = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

async function checkEndpoint(url: string): Promise<{ ok: boolean; ms: number; data?: unknown }> {
  const start = Date.now();
  try {
    const res = await fetch(url, { next: { revalidate: 0 }, signal: AbortSignal.timeout(5000) });
    const ms = Date.now() - start;
    if (res.ok) {
      const data = await res.json().catch(() => null);
      return { ok: true, ms, data };
    }
    return { ok: false, ms };
  } catch {
    return { ok: false, ms: Date.now() - start };
  }
}

async function getUSDCBalance(): Promise<number> {
  try {
    // ERC20 balanceOf(address) selector: 0x70a08231
    const paddedAddr = WALLET.slice(2).toLowerCase().padStart(64, "0");
    const data = `0x70a08231${paddedAddr}`;
    const res = await fetch(BASE_SEPOLIA_RPC, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_call",
        params: [{ to: USDC_CONTRACT, data }, "latest"],
        id: 1,
      }),
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 0 },
    });
    const json = await res.json();
    if (json.result && json.result !== "0x") {
      const raw = BigInt(json.result);
      // USDC has 6 decimals
      return Number(raw) / 1_000_000;
    }
    return 0;
  } catch {
    return 0;
  }
}

async function getETHBalance(): Promise<number> {
  try {
    const res = await fetch(BASE_SEPOLIA_RPC, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_getBalance",
        params: [WALLET, "latest"],
        id: 2,
      }),
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 0 },
    });
    const json = await res.json();
    if (json.result) {
      const wei = BigInt(json.result);
      return Number(wei) / 1e18;
    }
    return 0;
  } catch {
    return 0;
  }
}

async function getGitHubCommits(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/AEGISGOVDAO/aegisgov-contracts-mcp/commits?per_page=1",
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 300 },
      }
    );
    const linkHeader = res.headers.get("link") || "";
    // Try to parse total from link header if present
    const match = linkHeader.match(/page=(\d+)>; rel="last"/);
    if (match) return parseInt(match[1]);
    const json = await res.json();
    return Array.isArray(json) ? json.length : 0;
  } catch {
    return 0;
  }
}

export async function GET() {
  const [mcpHealth, siteHealth, usdcBalance, ethBalance, ghCommits] =
    await Promise.all([
      checkEndpoint(`${MCP_URL}/health`),
      checkEndpoint("https://aegisgov.ai"),
      getUSDCBalance(),
      getETHBalance(),
      getGitHubCommits(),
    ]);

  const mcpData = mcpHealth.data as { version?: string; network?: string } | null;

  return NextResponse.json({
    ts: Date.now(),
    endpoints: {
      mcp: {
        url: MCP_URL,
        ok: mcpHealth.ok,
        ms: mcpHealth.ms,
        version: mcpData?.version ?? null,
        network: mcpData?.network ?? null,
      },
      site: {
        url: "https://aegisgov.ai",
        ok: siteHealth.ok,
        ms: siteHealth.ms,
      },
    },
    wallet: {
      address: WALLET,
      usdc: usdcBalance,
      eth: ethBalance,
      network: "Base Sepolia (testnet)",
    },
    github: {
      commits: ghCommits,
      repo: "AEGISGOVDAO/aegisgov-contracts-mcp",
    },
  });
}
