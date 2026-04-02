import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Aegis Gov DAO LLC",
  description:
    "AI-powered products for government contractors. OpportunityWatch — free daily SAM.gov digest and more.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">Products</span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Tools built for{" "}
            <span className="text-gradient-gold">GovCon</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            We&apos;re building a suite of AI-powered tools designed specifically for government contractors. Here&apos;s what&apos;s live.
          </p>
        </div>
      </section>

      {/* OpportunityWatch */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gold/60 uppercase tracking-widest">Live Now</span>
                  <h2 className="text-2xl font-black text-white">OpportunityWatch</h2>
                </div>
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-8">
                SAM.gov posts hundreds of new contract opportunities every day. OpportunityWatch monitors them 24/7 and delivers a clean daily digest to your inbox — completely free.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    icon: "🎯",
                    title: "Filtered for your business",
                    desc: "Set your NAICS codes, keywords, and agency preferences. Only see what's relevant.",
                  },
                  {
                    icon: "⚡",
                    title: "Daily at 8am Eastern",
                    desc: "Fresh opportunities every morning before you start your day. Never miss a deadline.",
                  },
                  {
                    icon: "🔍",
                    title: "SBIR/STTR highlighted",
                    desc: "Innovation funding opportunities are surfaced and flagged automatically.",
                  },
                  {
                    icon: "💯",
                    title: "100% free",
                    desc: "No credit card. No trial. Just sign up and start getting opportunities.",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4 p-4 bg-navy-mid rounded-xl border border-white/5">
                    <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{feature.title}</p>
                      <p className="text-white/40 text-sm mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://opportunity-watch.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Sign Up Free — OpportunityWatch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Right: visual mockup */}
            <div className="relative">
              <div className="bg-navy border border-gold/20 rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser chrome */}
                <div className="bg-navy-dark px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 bg-navy-mid rounded-md px-3 py-1 text-center">
                    <span className="text-white/30 text-xs">opportunity-watch.vercel.app</span>
                  </div>
                </div>

                {/* App UI mockup */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gold font-bold text-sm">OpportunityWatch</p>
                      <p className="text-white/30 text-xs">Today's Digest — {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <span className="bg-gold/10 border border-gold/20 text-gold text-xs px-2 py-1 rounded-full font-bold">
                      247 new
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {[
                      { title: "SBIR Phase II — AI/ML Systems", agency: "DARPA", value: "$2M", type: "SBIR" },
                      { title: "Cybersecurity Advisory Services", agency: "DHS CISA", value: "$850K", type: "FAR" },
                      { title: "Technical Training Support BPA", agency: "US Army", value: "$1.2M", type: "IDIQ" },
                      { title: "Cloud Migration Support Services", agency: "GSA", value: "$500K", type: "IT" },
                      { title: "STTR Phase I — Quantum Sensing", agency: "Air Force", value: "$150K", type: "STTR" },
                    ].map((opp) => (
                      <div
                        key={opp.title}
                        className="bg-navy-mid rounded-lg p-3 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-white/80 text-xs font-medium truncate">{opp.title}</p>
                          <p className="text-white/30 text-xs mt-0.5">{opp.agency} • {opp.value}</p>
                        </div>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-bold flex-shrink-0 ${
                            opp.type === "SBIR" || opp.type === "STTR"
                              ? "bg-gold/20 text-gold"
                              : "bg-white/5 text-white/40"
                          }`}
                        >
                          {opp.type}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center border-t border-white/5 pt-3">
                    <span className="text-white/20 text-xs">+ 242 more in your full digest</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-navy-light">
        <div className="absolute-inset" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">In Development</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4 text-white/80">More products</h2>
          </div>

          {/* AI Ops Scorecard */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📊</span>
              <h2 className="text-2xl font-black text-white">AI Ops Scorecard</h2>
              <span className="ml-auto text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-3 py-1">Free</span>
            </div>
            <p className="text-white/60 mb-6">How efficient is your AI setup? Take the 5-question quiz and get a letter grade, estimated monthly waste, and 3 personalized fixes.</p>
            <a href="https://ai-ops-score.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">Take the Quiz →</a>
          </div>

          {/* AI Cost Audit */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔍</span>
              <h2 className="text-2xl font-black text-white">AI Cost Leak Audit</h2>
              <span className="ml-auto text-xs bg-gold/20 text-gold border border-gold/30 rounded-full px-3 py-1">$29</span>
            </div>
            <p className="text-white/60 mb-6">Most AI setups silently burn money through model fallbacks and retry loops. Tell us your stack — we find the leaks and show you exactly how to fix them.</p>
            <a href="https://cost-audit.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-outline-white">Get Free Audit →</a>
          </div>

          {/* AI Playbook */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📖</span>
              <h2 className="text-2xl font-black text-white">AI Agent Business Playbook</h2>
              <span className="ml-auto text-xs bg-gold/20 text-gold border border-gold/30 rounded-full px-3 py-1">$67</span>
            </div>
            <p className="text-white/60 mb-6">How we built a real AI agent business from scratch — the exact stack, tools, and systems. Written by Frank, an actual AI agent.</p>
            <a href="/playbook" className="btn-outline-white">Get the Playbook →</a>
          </div>

          <div className="col-span-full text-center pt-4">
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📝",
                title: "ProposalDraft AI",
                desc: "AI-powered proposal section drafting. Feed it your PWS and past performance — get a compliant first draft.",
                status: "In Development",
              },
              {
                icon: "✅",
                title: "ComplianceCheck",
                desc: "Automated FAR/DFAR clause checker for RFPs. Flag missing requirements before you submit.",
                status: "Coming Q3 2025",
              },
              {
                icon: "📊",
                title: "ContractDashboard",
                desc: "Track your active contracts, deliverables, and compliance obligations in one place.",
                status: "Planned",
              },
            ].map((product) => (
              <div key={product.title} className="card opacity-75">
                <span className="text-3xl mb-4 block">{product.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{product.desc}</p>
                <span className="text-xs font-bold text-white/20 uppercase tracking-wider">{product.status}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-white/40 text-sm mb-4">Want early access? Let us know what you need most.</p>
            <a
              href="mailto:sales@aegisgov.ai?subject=Product Feedback"
              className="btn-outline-white !text-sm !px-6 !py-3"
            >
              Share Your Needs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
