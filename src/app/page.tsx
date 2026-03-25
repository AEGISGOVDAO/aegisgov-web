import Link from "next/link";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Proposal Writing",
    desc: "40–60 hours per proposal, manually formatting past performance, capability statements, and compliance matrices.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Compliance Docs",
    desc: "FAR and DFAR requirements demand constant attention. One missed clause can cost you the contract.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SAM.gov Monitoring",
    desc: "Thousands of opportunities daily. Checking manually means you'll miss the ones that matter most.",
  },
];

const solutions = [
  {
    step: "01",
    title: "Consult",
    desc: "We audit your current workflows, identify where AI creates the highest ROI, and build your custom AI roadmap.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Educate",
    desc: "Train your team on AI tools built for GovCon — proposal generation, compliance checking, reporting automation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Implement",
    desc: "We deploy AI systems into your existing stack. Proposal templates, SAM.gov alerts, compliance checklists — automated.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const badges = ["SBIR", "STTR", "FAR", "DFAR", "SAM.gov", "DoD", "GSA", "CMMC"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Fractional AI Officer for GovCon</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
              Your Fractional{" "}
              <span className="text-gradient-gold">AI Officer</span>{" "}
              for Government Contracting
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed font-light max-w-2xl">
              AI transformation for small government contractors.{" "}
              <span className="text-white/80">Consult. Educate. Implement.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:sales@aegisgov.ai?subject=Free AI Assessment" className="btn-primary text-lg">
                Get Your Free AI Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link href="/services" className="btn-outline-white text-lg">
                View Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-white/50 tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-navy-light relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Government contractors lose{" "}
              <span className="text-gradient-gold">40–60 hours</span>
              <br />
              per proposal to manual work
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Small GovCon firms are competing against large primes with dedicated BD teams — while your people are buried in paperwork.
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

      {/* Solution Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">How We Help</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Three phases. Real results.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            {solutions.map((s, i) => (
              <div key={s.step} className="relative card text-center group">
                <div className="absolute top-4 right-4 text-6xl font-black text-white/3 select-none">
                  {s.step}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6 group-hover:from-gold/30 transition-all">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">{s.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{s.desc}</p>
                {i < solutions.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <svg className="w-6 h-6 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OpportunityWatch Feature */}
      <section className="py-24 bg-navy-light relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Featured Product</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                Never miss a contract opportunity.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                <strong className="text-white">OpportunityWatch</strong> delivers a free daily SAM.gov digest directly to your inbox. 
                Hundreds of new contract opportunities every morning, filtered by what matters to you.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Free daily SAM.gov opportunity digest",
                  "Filtered for your NAICS codes and keywords",
                  "SBIR/STTR opportunities highlighted",
                  "No more manual SAM.gov browsing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://opportunity-watch.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Try OpportunityWatch Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Product card visual */}
            <div className="relative">
              <div className="bg-navy border border-gold/20 rounded-2xl p-6 shadow-2xl glow-gold">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-3 h-3 bg-red-500/60 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500/60 rounded-full" />
                  <div className="w-3 h-3 bg-green-500/60 rounded-full" />
                  <span className="text-white/30 text-xs ml-2">opportunity-watch.vercel.app</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold text-sm">OpportunityWatch</span>
                    <span className="text-white/30 text-xs">Daily Digest</span>
                  </div>
                  {[
                    { title: "SBIR Phase II — AI/ML Systems", agency: "DARPA", deadline: "Apr 15" },
                    { title: "Cybersecurity Services Contract", agency: "DHS", deadline: "Apr 22" },
                    { title: "Technical Training Support", agency: "Army", deadline: "Apr 28" },
                    { title: "Software Development IDIQ", agency: "GSA", deadline: "May 3" },
                  ].map((opp) => (
                    <div key={opp.title} className="flex items-start justify-between bg-navy-mid rounded-lg p-3">
                      <div>
                        <p className="text-white/80 text-xs font-medium">{opp.title}</p>
                        <p className="text-white/30 text-xs mt-1">{opp.agency}</p>
                      </div>
                      <span className="text-gold text-xs font-bold ml-3 flex-shrink-0">{opp.deadline}</span>
                    </div>
                  ))}
                  <div className="text-center pt-2">
                    <span className="text-white/20 text-xs">+ 247 more opportunities today</span>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-label mb-6">Built For</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white/80 max-w-3xl mx-auto leading-relaxed">
            Government contractors doing{" "}
            <span className="text-white">SBIR</span>,{" "}
            <span className="text-white">STTR</span>,{" "}
            <span className="text-white">FAR</span>, and{" "}
            <span className="text-white">DFAR</span> work — $1M to $20M in revenue, 1–50 employees, competing every day against larger primes.
          </h3>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-navy" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to see where AI{" "}
            <span className="text-gradient-gold">saves you time?</span>
          </h2>
          <p className="text-white/50 text-xl mb-10 max-w-xl mx-auto">
            Get a free AI assessment. We&apos;ll map your highest-ROI opportunities in 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@aegisgov.ai?subject=Free AI Assessment Request"
              className="btn-primary text-lg"
            >
              Get Your Free Assessment →
            </a>
            <Link href="/services" className="btn-outline-white text-lg">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
