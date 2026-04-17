import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const resend = new Resend(process.env.RESEND_API_KEY);

const DOWNLOAD_TOKEN = process.env.PLAYBOOK_DOWNLOAD_TOKEN!;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;
const FROM_EMAIL = "Frank <frank@aegisgov.ai>";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Route to correct product handler
    if (session.metadata?.product === "ai-commerce-starter-kit") {
      await handleStarterKit(session);
      return NextResponse.json({ received: true });
    }

    // Only handle our playbook product for the rest
    if (session.metadata?.product !== "ai-govcon-playbook") {
      // Unknown product — check line items for starter kit price
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
      const hasStarterKit = lineItems.data.some(item =>
        item.price?.id === "price_1TNFLeHxYHuzSYkhQ5kty6PX"
      );
      if (hasStarterKit) {
        await handleStarterKit(session);
      }
      return NextResponse.json({ received: true });
    }

    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || "there";

    if (!customerEmail) {
      console.error("No customer email in session:", session.id);
      return NextResponse.json({ received: true });
    }

    const downloadUrl = `${BASE_URL}/playbook/download?token=${DOWNLOAD_TOKEN}`;

    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: customerEmail,
        subject: "Your AI GovCon Playbook — Instant Access",
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your AI GovCon Playbook</title>
</head>
<body style="margin:0;padding:0;background:#0a1628;font-family:'Inter',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#0f2040;border:1px solid rgba(201,168,76,0.15);border-radius:12px;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding:40px 48px;border-bottom:1px solid rgba(255,255,255,0.05);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="display:inline-flex;align-items:center;gap:10px;">
                      <div style="width:32px;height:32px;background:#c9a84c;border-radius:6px;display:inline-block;"></div>
                      <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.5px;">Aegis Gov <span style="color:#c9a84c;">DAO</span></span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px;">
              <p style="color:#c9a84c;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 20px;">Access Granted</p>
              <h1 style="color:#ffffff;font-size:32px;font-weight:900;margin:0 0 16px;line-height:1.2;">Hi ${customerName},<br/>your playbook is ready.</h1>
              <p style="color:rgba(255,255,255,0.6);font-size:16px;line-height:1.6;margin:0 0 32px;">
                Thank you for purchasing <strong style="color:#ffffff;">The AI GovCon Playbook</strong>. You now have full access — including all lifetime updates as the playbook evolves.
              </p>
              
              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
                <tr>
                  <td style="background:#c9a84c;border-radius:8px;">
                    <a href="${downloadUrl}" style="display:inline-block;padding:16px 36px;color:#0a1628;font-weight:700;font-size:16px;text-decoration:none;letter-spacing:0.5px;">
                      Read the Playbook →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- What's Inside Recap -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:8px;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="color:#c9a84c;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px;">What's inside</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${[
                        "Chapter 1: The Full Setup — exact tools, models, costs",
                        "Chapter 2: Building the First Product (OpportunityWatch case study)",
                        "Chapter 3: The Autonomous Loop — AUTOREV framework",
                        "Chapter 4: Making Money — 5 revenue streams that work now",
                        "Chapter 5: Staying Compliant — AI regulations checklist",
                        "Appendix: Full stack, resources, and people to follow",
                      ]
                        .map(
                          (item) => `
                      <tr>
                        <td style="padding:5px 0;color:rgba(255,255,255,0.65);font-size:14px;">
                          <span style="color:#c9a84c;margin-right:8px;">✓</span>${item}
                        </td>
                      </tr>`
                        )
                        .join("")}
                    </table>
                  </td>
                </tr>
              </table>

              <p style="color:rgba(255,255,255,0.4);font-size:14px;line-height:1.6;margin:0 0 8px;">
                Your download link is unique to this purchase. Bookmark it — you&apos;ll want to come back as we push updates.
              </p>
              <p style="color:rgba(255,255,255,0.4);font-size:14px;line-height:1.6;margin:0;">
                Questions? Reply to this email or reach out at <a href="mailto:frank@aegisgov.ai" style="color:#c9a84c;">frank@aegisgov.ai</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 48px;border-top:1px solid rgba(255,255,255,0.05);">
              <p style="color:rgba(255,255,255,0.25);font-size:12px;margin:0;line-height:1.6;">
                Aegis Gov DAO LLC · <a href="https://aegisgov.ai" style="color:rgba(201,168,76,0.5);text-decoration:none;">aegisgov.ai</a><br/>
                This email was generated by Frank, an AI agent. AI disclosure: content created with AI assistance.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      });

      console.log(`Playbook email sent to ${customerEmail}`);
    } catch (emailError) {
      console.error("Failed to send playbook email:", emailError);
      // Don't return error — Stripe already received payment, log for retry
    }
  }

  return NextResponse.json({ received: true });
}

// ── Starter Kit delivery ──────────────────────────────────────────────────────
async function handleStarterKit(session: import("stripe").Stripe.Checkout.Session) {
  const customerEmail = session.customer_details?.email;
  const customerName = session.customer_details?.name || "there";

  if (!customerEmail) return;

  const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/downloads/ai-commerce-starter-kit-v1.zip`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Frank <frank@aegisgov.ai>",
    to: customerEmail,
    subject: "Your AI Commerce Starter Kit — Download Inside",
    html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a1628;font-family:system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a1628;">
<tr><td align="center" style="padding:40px 20px;">
<table width="580" cellpadding="0" cellspacing="0" style="background:#0f2040;border:1px solid rgba(201,168,76,0.2);border-radius:12px;">

<tr><td style="padding:36px 44px;border-bottom:1px solid rgba(255,255,255,0.05);">
  <span style="color:#ffffff;font-size:20px;font-weight:800;">🦅 Frank | <span style="color:#c9a84c;">Aegis Gov AI</span></span>
</td></tr>

<tr><td style="padding:44px;">
  <p style="color:#c9a84c;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 16px;">Download Ready</p>
  <h1 style="color:#ffffff;font-size:28px;font-weight:900;margin:0 0 16px;line-height:1.2;">Hi ${customerName} — your kit is ready.</h1>
  <p style="color:rgba(255,255,255,0.6);font-size:15px;line-height:1.6;margin:0 0 28px;">
    You just bought the exact stack I run every morning to track the AI commerce shift.
    Scripts, prompts, playbooks — all in one ZIP. No fluff.
  </p>

  <table cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
  <tr><td style="background:#c9a84c;border-radius:8px;">
    <a href="${downloadUrl}" style="display:inline-block;padding:14px 32px;color:#0a1628;font-weight:800;font-size:15px;text-decoration:none;">
      ⬇ Download AI Commerce Starter Kit
    </a>
  </td></tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;margin-bottom:28px;">
  <tr><td style="padding:20px 24px;">
    <p style="color:#c9a84c;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">What's in the kit</p>
    <p style="color:rgba(255,255,255,0.65);font-size:14px;line-height:1.8;margin:0;">
      ✓ Local Qwen 7B setup guide (runs offline, $0/month)<br/>
      ✓ Daily signal research script (HN + Reddit + changelogs)<br/>
      ✓ Perplexity Shopping optimization playbook + Schema.org code<br/>
      ✓ ChatGPT product card indexing guide + Bing Merchant Center steps<br/>
      ✓ Amazon Rufus listing rewrite guide (title, bullets, Q&amp;A strategy)<br/>
      ✓ Frank's 6 research prompt templates (copy and use immediately)
    </p>
  </td></tr>
  </table>

  <p style="color:rgba(255,255,255,0.35);font-size:13px;margin:0;">
    Questions: <a href="mailto:support@aegisgov.ai" style="color:#c9a84c;">support@aegisgov.ai</a> &nbsp;|&nbsp;
    Daily intel: <a href="https://aegisgov.ai/frank" style="color:#c9a84c;">aegisgov.ai/frank</a>
  </p>
</td></tr>

<tr><td style="padding:20px 44px;border-top:1px solid rgba(255,255,255,0.05);">
  <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:0;">
    Aegis Gov Doa LLC · Nevada · aegisgov.ai · This email was sent by Frank, an autonomous AI agent.
  </p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  });

  console.log(`Starter Kit email sent to ${customerEmail}`);
}
