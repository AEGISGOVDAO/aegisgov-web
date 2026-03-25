import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Aegis Gov DAO LLC",
  description:
    "AI services for government contractors. Fractional AI Officer retainer, AI Readiness Assessment, and Proposal Automation Package.",
};

const services = [
  {
    name: "Fractional AI Officer",
    tagline: "Your embedded AI expert, without the full-time cost",
    price: "$2,500 – $4,000",
    period: "/month",
    badge: "Most Popular",
    badgeColor: "bg-gold text-navy",
    desc: "Get a dedicated AI officer who knows GovCon inside and out. We become part of your team — attending key meetings, auditing workflows, deploying tools, and keeping your AI strategy current as the landscape evolves.",
    includes: [
      "Monthly AI strategy sessions",
      "Workflow automation implementation",
      "Tool selection and vendor evaluation",
      "Proposal AI system setup and tuning",
      "Staff training and adoption support",
      "SAM.gov monitoring automation",
      "Compliance document templates",
      "Monthly ROI reporting",
    ],
    cta: "Talk to Us",
    ctaHref: "mailto:sales@aegisgov.ai?subject=Fractional AI Officer Inquiry",
    highlight: true,
  },
  {
    name: "AI Readiness Assessment",
    tagline: "Know exactly where AI can help you win more",
    price: "$97 – $347",
    period: " one-time",
    badge: "Start Here",
    badgeColor: "bg-white/10 text-white",
    desc: "Not sure where to start? We audit your current proposal workflow, compliance process, and business development operations — then deliver a prioritized roadmap showing exactly where AI saves you the most time and money.",
    includes: [
      "1-hour workflow audit call",
      "Proposal process analysis",
      "Compliance gap review",
      "Prioritized AI opportunity map",
      "Tool recommendations",
      "Implementation roadmap",
      "Written report delivered in 5 days",
    ],
    cta: "Get Assessed",
    ctaHref: "mailto:sales@aegisgov.ai?subject=AI Readiness Assessment",
    highlight: false,
  },
  {
    name: "Proposal Automation Package",
    tagline: "Cut proposal time in half — or more",
    price: "$2,000 – $5,000",
    period: " one-time",
    badge: "High ROI",
    badgeColor: "bg-white/10 text-white",
    desc: "We build you a custom AI-powered proposal system: past performance library, capability statement templates, compliance checkers, and section drafting tools — all tuned to your NAICS codes, contract vehicles, and agency targets.",
    includes: [
      "Past performance library build",
      "Capability statement AI templates",
      "Solicitation analysis tool setup",
      "Section-by-section AI draft system",
      "FAR/DFAR compliance checklist",
      "Win theme library",
      "Team training (2 hours)",
      "30 days of support",
    ],
    cta: "Get a Quote",
    ctaHref: "mailto:sales@aegisgov.ai?subject=Proposal Automation Package",
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">Services & Pricing</span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            AI services built for{" "}
            <span className="text-gradient-gold">GovCon</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Every service is designed specifically for small government contractors — not generic AI consulting repackaged.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                  service.highlight
                    ? "bg-navy-mid border-gold/40 shadow-xl shadow-gold/10 glow-gold"
                    : "bg-navy-mid border-white/10 hover:border-gold/20"
                }`}
              >
                {/* Badge */}
                <div className="mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-white mb-2">{service.name}</h2>
                <p className="text-white/50 text-sm mb-6">{service.tagline}</p>

                <div className="mb-8">
                  <span className="text-4xl font-black text-gradient-gold">{service.price}</span>
                  <span className="text-white/40 text-sm">{service.period}</span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-8">{service.desc}</p>

                <div className="flex-1 mb-8">
                  <p className="text-white/30 text-xs uppercase tracking-wider font-bold mb-4">Includes</p>
                  <ul className="space-y-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                        <svg
                          className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.ctaHref}
                  className={service.highlight ? "btn-primary text-center" : "btn-secondary text-center"}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Callout */}
      <section className="py-16 bg-navy-light">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Do I need technical expertise to use your services?",
                a: "No. We handle all the technical setup. Your team just needs to know how to use the tools — which we train you on.",
              },
              {
                q: "How quickly will I see results?",
                a: "Most clients see measurable time savings within the first 30 days. Proposal time reduction is typically the first and biggest win.",
              },
              {
                q: "Do you work with cleared facilities (SCIFs)?",
                a: "Yes. We're experienced with data handling requirements for cleared work and recommend appropriate tool configurations.",
              },
              {
                q: "What size contractor do you work with?",
                a: "Our sweet spot is $1M–$20M revenue, 1–50 employees. Small enough that everyone wears multiple hats. Large enough that the ROI is immediate.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-6">
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-6">
            Not sure which to start with?
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Start with the AI Readiness Assessment. It maps your opportunities and tells you exactly where to invest.
          </p>
          <a
            href="mailto:sales@aegisgov.ai?subject=AI Readiness Assessment"
            className="btn-primary text-lg"
          >
            Get Your Free AI Assessment →
          </a>
        </div>
      </section>
    </>
  );
}
