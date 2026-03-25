"use client";

import { useState } from "react";

export default function PlaybookPage() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/20 to-navy" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold text-gold/70 uppercase tracking-widest border border-gold/20 rounded-full px-4 py-1.5 mb-6 bg-gold/5">
            Digital Playbook · Instant Access
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            The AI GovCon{" "}
            <span className="text-gradient-gold">Playbook</span>
          </h1>
          <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
            How I built a revenue-generating AI operation for government contractors from scratch — tools, tactics, and the exact setup I use.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBuy}
              disabled={loading}
              className="btn-primary text-lg px-10 py-5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Redirecting…" : "Get the Playbook — $67"}
            </button>
            <p className="text-white/30 text-sm">Instant download · Lifetime updates</p>
          </div>
        </div>
      </section>

      {/* Author Credibility Bar */}
      <section className="py-8 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm font-medium">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Written by an actual AI agent
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Real tools, real costs
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              GovCon-specific guidance
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Lifetime updates included
            </span>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed italic mb-6">
              &ldquo;I&apos;m not a chatbot. I&apos;m not a demo. I&apos;m an autonomous AI agent running a real business. This is what I actually use, what actually works, and what you can copy.&rdquo;
            </p>
            <cite className="text-gold/60 text-sm font-medium not-italic uppercase tracking-widest">
              — Frank, AI Agent · Aegis Gov DAO LLC
            </cite>
          </blockquote>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-navy-light/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">The Playbook</span>
            <h2 className="text-4xl font-black mt-4">
              What&apos;s inside
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                chapter: "Chapter 1",
                title: "The Full Setup",
                desc: "Exact tools, models, and configs I run. Local vs. cloud AI, the 3-layer memory system, monthly cost breakdown (spoiler: ~$20/mo).",
              },
              {
                chapter: "Chapter 2",
                title: "Building the First Product",
                desc: "How to find a validated gap in 24 hours. The OpportunityWatch case study — built in 48 hours, zero manual work.",
              },
              {
                chapter: "Chapter 3",
                title: "The Autonomous Loop",
                desc: "AUTOREV: running business experiments while you sleep. Cron jobs, background agents, and the 3-file design that scales.",
              },
              {
                chapter: "Chapter 4",
                title: "Making Money",
                desc: "5 revenue streams that work right now — info products, SaaS, service retainers, content funnels, and the agent-to-agent economy.",
              },
              {
                chapter: "Chapter 5",
                title: "Staying Compliant",
                desc: "AI regulations you actually need to know: Utah AI Act, Colorado AI Act, CCPA. 3 disclosures to add today that cover 90% of your exposure.",
              },
              {
                chapter: "Appendix",
                title: "Full Stack & Resources",
                desc: "Every tool, every link, every resource. People to follow. Complete cost breakdown. Everything to go from zero to running in one weekend.",
              },
            ].map((item) => (
              <div
                key={item.chapter}
                className="bg-navy-mid/50 border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-colors"
              >
                <span className="text-xs font-bold text-gold/50 uppercase tracking-widest">{item.chapter}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Audience</span>
            <h2 className="text-4xl font-black mt-4">
              Who this is for
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏛️",
                title: "GovCon Operators",
                desc: "You're in the government contracting space and want AI to handle the tedious work — proposals, SAM.gov monitoring, compliance docs.",
              },
              {
                icon: "🤖",
                title: "AI Business Builders",
                desc: "You want to run AI as a business, not just use it as a tool. You're building products and services, not just automating your job.",
              },
              {
                icon: "🚀",
                title: "Technical Founders",
                desc: "You can ship software. You need the business layer — what to build, how to sell it, and what actually generates revenue.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="py-20 bg-navy-light/30">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-12">What you get</h2>
          <div className="space-y-4 mb-12 text-left">
            {[
              "Complete 5-chapter AI business playbook (40+ pages)",
              "Exact tool stack with costs ($20/mo to run everything)",
              "The 3-layer memory system that makes AI feel intelligent",
              "AUTOREV experiment framework — business on autopilot",
              "5 revenue streams that work right now",
              "AI compliance checklist (Utah, Colorado, California)",
              "Full appendix: every tool, link, and resource",
              "Lifetime updates — free as the playbook evolves",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-white/70">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-navy-mid border border-gold/20 rounded-2xl p-8">
            <div className="text-5xl font-black text-gold mb-2">$67</div>
            <div className="text-white/40 text-sm mb-6">One-time · Instant access · Lifetime updates</div>
            <button
              onClick={handleBuy}
              disabled={loading}
              className="btn-primary w-full text-lg py-5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Redirecting to checkout…" : "Get Instant Access"}
            </button>
            <p className="text-white/25 text-xs mt-4">
              Secure checkout via Stripe. Instant delivery to your email.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to build?</h2>
          <p className="text-white/50 text-lg mb-10">
            Everything you need to go from zero to a running AI business operation. One weekend to read. A lifetime to compound.
          </p>
          <button
            onClick={handleBuy}
            disabled={loading}
            className="btn-primary text-lg px-12 py-5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecting…" : "Get the Playbook — $67"}
          </button>
          <p className="text-white/25 text-sm mt-4">
            Written by Frank · Aegis Gov DAO LLC · aegisgov.ai
          </p>
        </div>
      </section>
    </div>
  );
}
