import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Aegis Gov AI",
  description:
    "AI-powered proposal intelligence for government contractors. RFP breakdowns from $1,500, or become a Fractional AI Officer client at $2,500/mo.",
};

const services = [
  {
    name: "RFP Breakdown — Standard",
    tagline: "Full analysis of your exact solicitation",
    price: "$1,500",
    period: " per RFP",
    badge: "Start Here",
    badgeColor: "bg-gold text-navy",
    desc: "Send us any federal IT services RFP. We return a compliance checklist, full proposal outline, and key win themes mapped directly to the solicitation — in 24 hours. First analysis free so you can see the output before you buy.",
    includes: [
      "Compliance checklist mapped to your RFP requirements",
      "Section-by-section proposal outline",
      "Key win themes aligned to agency evaluation criteria",
      "Full proposal draft (standard single-volume RFPs)",
      "Written for your exact solicitation — not a template",
      "Delivered within 24 hours",
    ],
    cta: "Get Standard Package — $1,500",
    ctaHref: "https://buy.stripe.com/eVqcN5atkdrK4WS7xW5Vu03",
    highlight: true,
  },
  {
    name: "RFP Breakdown — Complex",
    tagline: "Multi-volume RFPs, full proposal included",
    price: "$2,500",
    period: " per RFP",
    badge: "Complex Bids",
    badgeColor: "bg-white/10 text-white",
    desc: "For multi-volume, high-value solicitations. Full compliance matrix, all proposal volumes drafted, past performance formatted, and one revision round included.",
    includes: [
      "Full compliance matrix across all RFP sections",
      "All proposal volumes drafted (Technical, Management, Price)",
      "Past performance formatted to agency requirements",
      "Win theme development and discriminator identification",
      "One revision round included",
      "Delivered within 48 hours",
    ],
    cta: "Get Complex Package — $2,500",
    ctaHref: "https://buy.stripe.com/00w6oH44WdrKblg2dC5Vu04",
    highlight: false,
  },
  {
    name: "Fractional AI Officer",
    tagline: "Your embedded AI expert, without the full-time cost",
    price: "$2,500",
    period: "/month",
    badge: "Ongoing Support",
    badgeColor: "bg-white/10 text-white",
    desc: "Get a dedicated AI officer who knows GovCon inside and out. We become part of your team — handling proposal ops, SAM.gov monitoring, compliance tracking, and bid strategy on an ongoing basis.",
    includes: [
      "Unlimited RFP breakdowns (standard volume)",
      "Monthly AI strategy and bid pipeline review",
      "SAM.gov opportunity monitoring and alerts",
      "Compliance document templates and updates",
      "Proposal workflow automation setup",
      "Staff training and adoption support",
      "Monthly ROI reporting",
      "Priority 24-hour turnaround on all deliverables",
    ],
    cta: "Become a Fractional AI Officer Client",
    ctaHref: "https://buy.stripe.com/9B6cN5atkfzS2OK4lK5Vu02",
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
                  target="_blank"
                  rel="noopener noreferrer"
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
            Start with a free sample. See exactly what you&apos;d get before spending a dollar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/samples"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-black text-lg px-10 py-5 rounded-xl transition-all shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:-translate-y-0.5"
            >
              See a Free Sample →
            </a>
            <a
              href="mailto:support@aegisgov.ai?subject=Free RFP Analysis Request&body=Hi Frank,%0A%0AHere is the RFP I'd like analyzed:%0A%0A[paste solicitation number]"
              className="inline-flex items-center gap-2 border border-gold/40 hover:border-gold text-gold font-bold text-lg px-10 py-5 rounded-xl transition-all"
            >
              Submit Your RFP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
