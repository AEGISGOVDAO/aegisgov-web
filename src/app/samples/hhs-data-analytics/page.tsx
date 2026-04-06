import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RFP Breakdown: HHS Data Analytics & AI/ML Platform — Aegis Gov AI',
  description: 'AI-generated compliance checklist, proposal outline, and win themes for an HHS OIG data analytics and AI/ML solicitation.',
}

const checklist = [
  'Active 8(a) certification with SBA — within program term, no graduation pending',
  'SAM.gov registration current — CAGE, reps & certs, 8(a) status reflected',
  'NAICS 541511 size standard confirmed ($30M avg annual receipts)',
  'HHS ATO process familiarity documented — FISMA Moderate or High system experience',
  'FedRAMP-compliant cloud platform identified (AWS GovCloud, Azure Gov, or GCP Public Sector)',
  'Data privacy compliance: HIPAA, Privacy Act of 1974, HHS information security policies',
  'AI/ML ethics and bias documentation approach defined',
  'Key personnel: Data Scientist (MS+), ML Engineer, Data Architect, ISSO',
  'Past performance includes federal data analytics or AI/ML deployment at similar scale',
  'Section 508 accessibility compliance approach documented for all deliverables',
  'Open-source software disclosure and approval process per HHS policy',
  'Data management plan: retention, backup, and destruction per federal standards',
]

const volumes = [
  { title: 'Volume 1 — Technical Approach', items: [
    '1.0 Executive Summary — Understanding of HHS OIG Mission (2 pp)',
    '1.1 Data Architecture: Ingestion, Storage, Processing Pipeline Design (10 pp)',
    '1.2 AI/ML Platform: Model Development, Training, Validation & Monitoring (10 pp)',
    '1.3 Analytics Dashboards & Reporting: Visualization & User Access Design (6 pp)',
    '1.4 Security & Privacy: FISMA, HIPAA, HHS security controls integration (6 pp)',
    '1.5 Implementation Roadmap: Phases, milestones, acceptance criteria (5 pp)',
    '1.6 Maintenance & Operations: Model retraining, drift detection, SLA (4 pp)',
  ]},
  { title: 'Volume 2 — Management & Past Performance', items: [
    '2.0 Program Management: Agile methodology, sprint cadence, stakeholder communication (5 pp)',
    '2.1 Key Personnel: Lead Data Scientist, ML Architect, ISSO (6 pp)',
    '2.2 Past Performance: 3 references — federal data/AI projects (5 pp)',
    '2.3 8(a) Compliance Documentation (2 pp)',
  ]},
  { title: 'Volume 3 — Price', items: [
    '3.0 Labor categories and loaded rates by CLIN and year',
    '3.1 Cloud/infrastructure costs with detailed assumptions',
    '3.2 Licensing and ODC schedule',
  ]},
]

const themes = [
  { title: 'OIG Mission = Fraud Detection', body: 'HHS OIG\'s core mandate is fraud, waste, and abuse detection. Frame every AI/ML capability in terms of anomaly detection, claims analysis, or audit trail automation. Generic "data analytics" won\'t win — "fraud pattern detection using ML on Medicare claims data" will.' },
  { title: 'FedRAMP-Authorized Platform, Day One', body: 'HHS will not accept a "we\'ll get FedRAMP authorization" answer. If your platform runs on AWS GovCloud, Azure Government, or GCP Public Sector with existing FedRAMP Moderate ATO, state it explicitly in your technical approach. It eliminates a major evaluator concern immediately.' },
  { title: 'Bias Mitigation and AI Ethics Documentation', body: 'Federal agencies are now explicitly evaluating AI fairness and explainability. Demonstrate a documented bias testing methodology — NIST AI RMF alignment is a differentiator. Most competitors skip or gloss over this section.' },
  { title: 'Section 508 Compliance From the Start', body: 'HHS enforces Section 508 strictly. Mention WCAG 2.1 AA compliance in your dashboard/reporting approach, and name the specific accessibility testing tool you use (e.g., Axe, Deque). Roughly 70% of proposals treat it as a checkbox — yours shouldn\'t.' },
  { title: 'Federal Agile — Not Just Commercial Agile', body: 'HHS OIG runs FITARA reviews and wants predictable sprint delivery with clear acceptance criteria. A documented Definition of Done that maps to FISMA control families — not just feature completion — signals you understand federal delivery maturity, not just Scrum vocabulary.' },
]

const meta = [
  ['Solicitation', 'HHS-OIG-IT-26-112'],
  ['NAICS', '541511'],
  ['Set-Aside', '8(a) Small Business'],
  ['Est. Value', '$6.8M IDIQ'],
  ['Deadline', 'May 30, 2026'],
]

export default function HHS3Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <Link href="/samples" className="text-blue-600 text-sm font-medium hover:underline">← Back to all samples</Link>
      <div className="mt-6 mb-2 inline-block px-3 py-1 bg-yellow-100 border border-yellow-300 rounded text-xs font-bold text-yellow-800 uppercase tracking-wider">Sample AI-Generated RFP Breakdown</div>
      <h1 className="text-3xl font-extrabold mt-4 mb-2 leading-tight">Data Analytics & AI/ML Platform Services</h1>
      <p className="text-base text-gray-500 mb-8">Dept of Health and Human Services — Office of Inspector General</p>
      <div className="flex gap-6 flex-wrap mb-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
        {meta.map(([label, val]) => (
          <div key={label}>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</div>
            <div className="text-sm font-semibold text-gray-900 mt-0.5">{val}</div>
          </div>
        ))}
      </div>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 pb-2 border-b-2 border-gray-200">✅ Compliance Checklist</h2>
        <div className="space-y-2.5">
          {checklist.map((item, i) => (
            <div key={i} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="text-gray-400 text-base shrink-0 mt-0.5">☐</span>
              <span className="text-sm leading-relaxed text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5 pb-2 border-b-2 border-gray-200">📄 Proposal Outline</h2>
        {volumes.map((vol, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-sm font-bold text-blue-700 bg-blue-50 px-3 py-2 rounded mb-3">{vol.title}</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              {vol.items.map((item, j) => <li key={j} className="text-sm text-gray-700 leading-relaxed">{item}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="mb-14">
        <h2 className="text-xl font-bold mb-5 pb-2 border-b-2 border-gray-200">🎯 Key Win Themes</h2>
        <div className="space-y-4">
          {themes.map((t, i) => (
            <div key={i} className="pl-5 border-l-4 border-blue-600 bg-gray-50 rounded-r-lg py-4 pr-5">
              <h3 className="text-sm font-bold text-blue-700 mb-2">{i + 1}. {t.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed m-0">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gray-900 text-white rounded-2xl p-10 text-center">
        <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">This analysis took under 2 hours</p>
        <h2 className="text-2xl font-extrabold mb-3">Working a live bid right now?</h2>
        <p className="text-gray-400 text-sm mb-7 max-w-sm mx-auto">Send us your RFP. We return a full breakdown within 24 hours — first one free.</p>
        <a href="mailto:support@aegisgov.ai?subject=Free RFP Analysis Request&body=Hi Frank,%0A%0AHere is the RFP I'd like analyzed:%0A%0A[paste solicitation number or attach document]"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg no-underline font-bold text-sm transition-colors">
          Request Free Analysis →
        </a>
        <div className="border-t border-gray-700 mt-7 pt-6 flex gap-3 justify-center flex-wrap">
          <a href="https://buy.stripe.com/eVqcN5atkdrK4WS7xW5Vu03" className="inline-block bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-lg no-underline text-sm font-semibold border border-gray-600 transition-colors">Standard Package — $1,500</a>
          <a href="https://buy.stripe.com/00w6oH44WdrKblg2dC5Vu04" className="inline-block bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-lg no-underline text-sm font-semibold border border-gray-600 transition-colors">Complex Package — $2,500</a>
        </div>
      </div>
      <p className="text-center mt-8 text-xs text-gray-400">
        <Link href="/" className="text-gray-500 hover:underline">Aegis Gov AI</Link> · <Link href="/samples" className="text-gray-500 hover:underline">All Samples</Link> · <a href="mailto:support@aegisgov.ai" className="text-gray-500 hover:underline">support@aegisgov.ai</a>
      </p>
    </main>
  )
}
