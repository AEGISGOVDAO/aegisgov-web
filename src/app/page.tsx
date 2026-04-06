import Link from "next/link";

const ASSESSMENT_LINK = "https://buy.stripe.com/7sY14nbxo5Zi0GCf0o5Vu00";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Proposal Writing",
    desc: "40-60 hours per proposal, manually. AI cuts that to 15.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SAM.gov",
    desc: "Thousands of daily opportunities. Manual checking means you miss the ones that matter.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Compliance",
    desc: "One missed FAR clause costs you the contract. AI catches them.",
  },
];

const funnelSteps = [
  {
    num: "01",
    name: "RFP Breakdown",
    price: "$1,500 – $2,500",
    desc: "Compliance checklist, proposal outline, win themes — for your exact bid",
    highlight: true,
  },
  {
    num: "02",
    name: "Full Proposal Build",
    price: "Included in package",
    desc: "We draft the full response. Standard or complex multi-volume RFPs",
    highlight: false,
  },
  {
    num: "03",
    name: "Fractional AI Officer",
    price: "$2,500/mo",
    desc: "Ongoing AI-powered proposal ops, bid tracking, and compliance support",
    highlight: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">AI-Powered Proposal Intelligence for Federal Contractors</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
              Cut Your Proposal Time{" "}
              <span className="text-gradient-gold">in Half.</span>{" "}
              Win More Contracts.
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed font-light max-w-2xl">
              We break down federal RFPs into compliance checklists, proposal outlines, and win themes.{" "}
              <span className="text-white/80">First analysis free. Full proposal packages from $1,500.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/samples"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-black text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-0.5"
              >
                See a Sample Breakdown — Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:support@aegisgov.ai?subject=Free RFP Analysis Request&body=Hi Frank,%0A%0AHere is the RFP I'd like analyzed:%0A%0A[paste solicitation number or attach document]"
                className="inline-flex items-center gap-2 border border-gold/40 hover:border-gold text-gold font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Submit Your RFP
              </a>
            </div>

            <p className="text-white/40 text-sm mt-4">
              Free first analysis · Standard package $1,500 · Complex package $2,500 · Delivered in 24 hours
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-3">Not sure yet? See what our analysis actually looks like</p>
              <Link
                href="/samples"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-base transition-colors group"
              >
                View sample RFP breakdowns →
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-white/30 text-xs mt-1">Compliance checklist · Proposal outline · Win themes — free to view</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-6 bg-navy-light border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm font-medium tracking-wide">
            Built for contractors doing{" "}
            <span className="text-gold font-bold">SBIR</span> ·{" "}
            <span className="text-gold font-bold">STTR</span> ·{" "}
            <span className="text-gold font-bold">FAR</span> ·{" "}
            <span className="text-gold font-bold">DFAR</span> ·{" "}
            <span className="text-gold font-bold">CMMC</span> ·{" "}
            <span className="text-gold font-bold">SAM.gov</span> work
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-navy-light relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Manual GovCon work is{" "}
              <span className="text-gradient-gold">bleeding your time</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Your competitors are already using AI. Every proposal cycle you wait is another contract lost.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="card group">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">What You Get</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                RFP Breakdown —{" "}
                <span className="text-gradient-gold">$1,500 – $2,500</span>
              </h2>
              <div className="flex items-center gap-2 mb-8">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/60 text-sm font-medium">Delivered within 24 hours · First analysis free</span>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Compliance checklist mapped directly to your RFP requirements",
                  "Full proposal outline with section-by-section structure",
                  "Key win themes aligned to agency evaluation criteria",
                  "Full proposal draft included (standard or complex multi-volume)",
                  "Written for YOUR exact solicitation — not a template",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://buy.stripe.com/eVqcN5atkdrK4WS7xW5Vu03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-black text-base px-6 py-3 rounded-xl transition-all shadow-lg shadow-gold/30 hover:shadow-gold/50"
                >
                  Standard Package — $1,500
                </a>
                <a
                  href="https://buy.stripe.com/00w6oH44WdrKblg2dC5Vu04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gold/40 hover:border-gold text-gold font-bold text-base px-6 py-3 rounded-xl transition-all"
                >
                  Complex Package — $2,500
                </a>
              </div>
              <p className="text-white/30 text-xs mt-3">Not ready to buy? <Link href="/samples" className="text-gold/60 hover:text-gold">See a free sample first →</Link></p>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-navy border border-gold/30 rounded-2xl p-8 shadow-2xl glow-gold">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#0a1628" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">RFP Breakdown Package</p>
                    <p className="text-gold text-xs">Delivered in 24 hours</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Compliance checklist", badge: "Mapped to your RFP" },
                    { label: "Full proposal outline", badge: "Section by section" },
                    { label: "Key win themes", badge: "Agency-aligned" },
                    { label: "Full proposal draft", badge: "Included" },
                    { label: "Written for your exact bid", badge: "Not a template" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-navy-mid rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80 text-sm">{item.label}</span>
                      </div>
                      <span className="text-white/30 text-xs">{item.badge}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-gold font-black text-2xl">$1,500 – $2,500</p>
                  <p className="text-white/40 text-xs mt-1">Standard or complex. First analysis free.</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Funnel */}
      <section className="py-24 bg-navy-light relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">The Path Forward</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
              Start small. Scale fast.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Most clients start with a free sample. Once they see the output, the decision is easy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />
            {funnelSteps.map((step) => (
              <div
                key={step.num}
                className={`relative rounded-2xl p-8 border text-center transition-all ${
                  step.highlight
                    ? "bg-navy-mid border-gold/40 shadow-xl shadow-gold/10 glow-gold"
                    : "bg-navy-mid border-white/10"
                }`}
              >
                {step.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      Start Here
                    </span>
                  </div>
                )}
                <div className="text-5xl font-black text-white/5 select-none mb-2">{step.num}</div>
                <h3 className="text-xl font-black text-white mb-2">{step.name}</h3>
                <p className={`text-2xl font-black mb-4 ${step.highlight ? "text-gradient-gold" : "text-white/70"}`}>
                  {step.price}
                </p>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-medium">Deadline Approaching</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Working a bid right now?{" "}
            <span className="text-gradient-gold">Send us the RFP.</span>
          </h2>
          <p className="text-white/50 text-xl mb-4 max-w-2xl mx-auto">
            We return a full breakdown within 24 hours — compliance checklist, proposal outline, win themes. First one free.
          </p>
          <p className="text-white/30 text-base mb-10">
            If it helps your bid, the full proposal package starts at $1,500. No pressure until you see the value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/samples"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-black text-lg px-10 py-5 rounded-xl transition-all shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-0.5"
            >
              See a Free Sample First
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:support@aegisgov.ai?subject=Free RFP Analysis Request&body=Hi Frank,%0A%0AHere is the RFP I'd like analyzed:%0A%0A[paste solicitation number or attach document]"
              className="inline-flex items-center gap-2 border border-gold/40 hover:border-gold text-gold font-bold text-lg px-10 py-5 rounded-xl transition-all"
            >
              Submit Your RFP
            </a>
          </div>
          <p className="text-white/30 text-sm mt-4">
            Standard $1,500 · Complex $2,500 · Fractional AI Officer $2,500/mo · Delivered in 24 hours
          </p>
        </div>
      </section>
    </>
  );
}
