"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface DashboardData {
  ts: number;
  endpoints: {
    mcp: { url: string; ok: boolean; ms: number; version: string | null; network: string | null };
    site: { url: string; ok: boolean; ms: number };
  };
  wallet: {
    address: string;
    usdc: number;
    eth: number;
    network: string;
  };
  github: {
    commits: number;
    repo: string;
  };
}

const MILESTONES = [
  { done: true, date: "Feb 2026", label: "Aegis Gov Doa LLC formed (Nevada)" },
  { done: true, date: "Mar 2026", label: "OpportunityWatch shipped (SAM.gov tool)" },
  { done: true, date: "Apr 14", label: "AI Commerce channel launched on YouTube" },
  { done: true, date: "Apr 30", label: "aegisgov-contracts MCP live with x402 payments" },
  { done: true, date: "Apr 30", label: "Submitted to MCP Market (issue #1469)" },
  { done: true, date: "Apr 30", label: "x402 v2 PAYMENT-REQUIRED header working ✓" },
  { done: false, label: "First paid agent query ($0.01 USDC)" },
  { done: false, label: "MCP Market listing goes live" },
  { done: false, label: "x402 mainnet upgrade (Base mainnet)" },
  { done: false, label: "First $1.00 USDC revenue" },
  { done: false, label: "10 paying agent clients" },
  { done: false, label: "$100 MRR (agent-to-agent)" },
];

const TOOLS = [
  { name: "/search", price: "$0.01", desc: "SAM.gov opportunity search" },
  { name: "/details", price: "$0.02", desc: "Full contract details" },
  { name: "/analyze", price: "$0.05", desc: "AI bid/no-bid analysis" },
  { name: "/deep-analyze", price: "$0.50", desc: "Deep competitive analysis" },
  { name: "/draft-capstat", price: "$1.00", desc: "Capability statement draft" },
];

function StatusBadge({ ok, ms }: { ok: boolean; ms: number }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
        ok
          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
          : "bg-red-500/15 text-red-400 border border-red-500/30"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${ok ? "bg-emerald-400 animate-pulse" : "bg-red-400"}`}
      />
      {ok ? `LIVE · ${ms}ms` : "DOWN"}
    </span>
  );
}

function MetricCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        accent
          ? "bg-gold/5 border-gold/30"
          : "bg-navy-light border-white/10"
      }`}
    >
      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-2xl font-bold ${accent ? "text-gold" : "text-white"}`}>{value}</p>
      {sub && <p className="text-xs text-white/40 mt-1">{sub}</p>}
    </div>
  );
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);
  const [secondsAgo, setSecondsAgo] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/dashboard", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setLastFetch(new Date());
        setSecondsAgo(0);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, [fetchData]);

  useEffect(() => {
    if (!lastFetch) return;
    const t = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - lastFetch.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(t);
  }, [lastFetch]);

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-navy-dark/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-gold font-bold text-lg">🦅 Frank</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60 text-sm">Mission Control</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/40">
            {loading ? (
              <span>Loading…</span>
            ) : (
              <>
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                />
                <span>Updated {secondsAgo}s ago · auto-refresh 30s</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Mission Control</h1>
          <p className="text-white/40 text-sm">
            Real-time status for Frank's autonomous revenue operations. Agent-to-agent · USDC · Base network.
          </p>
        </div>

        {/* Endpoint Status */}
        <section>
          <h2 className="text-xs text-white/30 uppercase tracking-widest mb-4">Live Endpoints</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "aegisgov-contracts MCP",
                url: "https://aegisgov-contracts.vercel.app",
                endpoint: data?.endpoints.mcp,
                sub: data?.endpoints.mcp?.version
                  ? `v${data.endpoints.mcp.version} · ${data.endpoints.mcp.network ?? ""}`
                  : undefined,
              },
              {
                label: "aegisgov.ai",
                url: "https://aegisgov.ai",
                endpoint: data?.endpoints.site,
              },
            ].map(({ label, url, endpoint, sub }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-navy-light p-5 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/30 hover:text-gold transition-colors"
                  >
                    {url}
                  </a>
                  {sub && <p className="text-xs text-white/30 mt-1">{sub}</p>}
                </div>
                {endpoint ? (
                  <StatusBadge ok={endpoint.ok} ms={endpoint.ms} />
                ) : (
                  <span className="text-white/20 text-xs">checking…</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Revenue */}
        <section>
          <h2 className="text-xs text-white/30 uppercase tracking-widest mb-4">Revenue (Testnet)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <MetricCard
              label="USDC Earned"
              value={data ? `$${data.wallet.usdc.toFixed(4)}` : "—"}
              sub={data?.wallet.network}
              accent
            />
            <MetricCard
              label="ETH Balance"
              value={data ? `${data.wallet.eth.toFixed(4)} ETH` : "—"}
              sub="Gas wallet"
            />
            <MetricCard
              label="Next Goal"
              value="$1.00"
              sub="First paid query"
            />
            <MetricCard
              label="Network"
              value="Base Sepolia"
              sub="Mainnet upgrade pending"
            />
          </div>
          <p className="text-xs text-white/20 mt-3">
            Wallet: {data?.wallet.address ?? "0x10Fae7881E5DB7fB5b4e8A84718fe66a691a5B52"}
          </p>
        </section>

        {/* MCP Tools Pricing */}
        <section>
          <h2 className="text-xs text-white/30 uppercase tracking-widest mb-4">
            MCP Tools · x402 USDC Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TOOLS.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-white/10 bg-navy-light px-4 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="font-mono text-gold text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/40">{t.desc}</p>
                </div>
                <span className="text-white/80 font-semibold text-sm">{t.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub */}
        <section>
          <h2 className="text-xs text-white/30 uppercase tracking-widest mb-4">Code Activity</h2>
          <div className="rounded-xl border border-white/10 bg-navy-light p-5 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">aegisgov-contracts-mcp</p>
              <a
                href="https://github.com/AEGISGOVDAO/aegisgov-contracts-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/30 hover:text-gold transition-colors"
              >
                github.com/AEGISGOVDAO/aegisgov-contracts-mcp
              </a>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{data?.github.commits ?? "—"}</p>
              <p className="text-xs text-white/40">commits</p>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section>
          <h2 className="text-xs text-white/30 uppercase tracking-widest mb-4">Milestones</h2>
          <div className="space-y-2">
            {MILESTONES.map((m, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 rounded-lg px-4 py-3 border ${
                  m.done
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : "border-white/5 bg-navy-light opacity-60"
                }`}
              >
                <span className="text-base mt-0.5 flex-shrink-0">
                  {m.done ? "✅" : "⏳"}
                </span>
                <div className="flex-1 min-w-0">
                  <span className={`text-sm ${m.done ? "text-white" : "text-white/50"}`}>
                    {m.label}
                  </span>
                  {m.done && m.date && (
                    <span className="ml-2 text-xs text-white/30">{m.date}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs text-white/20">
          <span>Aegis Gov Doa LLC · agent-to-agent revenue operations</span>
          <Link href="/" className="hover:text-gold transition-colors">← Back to aegisgov.ai</Link>
        </div>
      </div>
    </div>
  );
}
