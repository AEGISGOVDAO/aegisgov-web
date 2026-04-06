import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RFP Breakdown: DoD Cybersecurity & CMMC Compliance — Aegis Gov AI',
  description: 'AI-generated compliance checklist, proposal outline, and win themes for a DoD CMMC cybersecurity support solicitation.',
}

const checklist = [
  'SAM.gov registration active with CAGE code, NAICS 541519 listed',
  'Size standard confirmed — 541519 ($30M avg annual receipts for small business)',
  'CMMC Level 2 or 3 certification (or active C3PAO assessment underway) documented',
  'CUI handling procedures documented per NIST SP 800-171',
  'DFARS 252.204-7012 Safeguarding compliance demonstrated',
  'Security Operations Center capability documented (24/7 or defined hours + escalation)',
  'Incident response plan current, tested within 12 months',
  'Key personnel hold DoD 8570/8140 certifications: CISSP, CISM, Security+ or equivalent',
  'Past performance includes at least 2 DoD cybersecurity contracts',
  'System Security Plan (SSP) template or prior SSP available as reference',
  'Subcontractor cybersecurity compliance verified if teaming',
  'Classified access procedures documented if contract involves CUI enclaves',
]

const volumes = [
  { title: 'Volume 1 — Technical Approach', items: [
    '1.0 Executive Summary — Mission Understanding (2 pp)',
    '1.1 Cyber Operations: SOC Architecture, Detection & Response Capabilities (10 pp)',
    '1.2 CMMC Level 2/3 Implementation: Gap Assessment Methodology & Roadmap (8 pp)',
    '1.3 NIST 800-171 / 800-53 Controls: Implementation & Continuous Monitoring (6 pp)',
    '1.4 Incident Response & Recovery: Playbooks, Escalation, Reporting to DISA (6 pp)',
    '1.5 Supply Chain Risk Management (SCRM) Approach (4 pp)',
  ]},
  { title: 'Volume 2 — Management & Past Performance', items: [
    '2.0 Program Management Approach (5 pp)',
    '2.1 Key Personnel: ISSM, SOC Lead, Compliance Manager (6 pp)',
    '2.2 Past Performance — 3 references with CPARS ratings (5 pp)',
    '2.3 Subcontracting & Teaming (if applicable) (3 pp)',
  ]},
  { title: 'Volume 3 — Price / Cost', items: [
    '3.0 Labor categories, rates, and hours by CLIN',
    '3.1 ODC breakdown and justification',
    '3.2 Cost narrative with should-cost analysis',
  ]},
]

const themes = [
  { title: 'CMMC Readiness Is a Differentiator Right Now', body: 'Most small GovCon IT firms are still unprepared for CMMC Level 2. If you have an active C3PAO assessment or a prior Level 2 certification, lead with it in your technical approach — evaluators will de-risk your proposal immediately.' },
  { title: 'Dedicated 24/7 SOC vs. "Best Effort" Competitors', body: 'Many small businesses propose a SOC but deliver 9-5 coverage with on-call. If your team can demonstrate continuous monitoring with <15 minute detection-to-alert SLA backed by historical data, quantify it. That specific metric appears in most DoD cyber RFPs.' },
  { title: 'DFARS 7012 Implementation History', body: 'Prior experience implementing and auditing DFARS 252.204-7012 for subcontractors in a prime/sub relationship is rare and explicitly valued. Show a case study of a supply chain security assessment you\'ve conducted.' },
  { title: 'Named ISSM With Active Clearance', body: 'DISA contracts almost always evaluate ISSM qualifications closely. A named individual with active Secret/TS, DoD 8570 IAM Level II or III certification, and prior DISA/DCSA coordination experience can make or break a proposal.' },
  { title: 'Proven Incident Response — Not Just a Plan', body: 'Reference a real incident (de-identified) where your team detected, contained, and reported a cyber incident to a federal agency. Story-based past performance showing detection vector, containment time, and post-incident report submission is far more convincing than a template IR plan.' },
]

const meta = [
  ['NAICS', '541519 — Other Computer Related Services'],
  ['Set-Aside Type', 'Small Business'],
  ['Contract Type', 'Firm Fixed Price'],
  ['Scope', 'SOC Operations + CMMC Implementation'],
]

export default function DOD2Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <Link href="/samples" className="text-blue-600 text-sm font-medium hover:underline">← Back to all samples</Link>
      <div className="mt-6 mb-2 inline-block px-3 py-1 bg-yellow-100 border border-yellow-300 rounded text-xs font-bold text-yellow-800 uppercase tracking-wider">Sample Breakdown</div>
      <h1 className="text-3xl font-extrabold mt-4 mb-2 leading-tight">Cybersecurity Operations & CMMC Compliance Support</h1>
      <p className="text-base text-gray-500 mb-4">Based on real federal solicitation structure — DoD Cybersecurity / Small Business</p>
      <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800 font-medium m-0">This is a sample generated to demonstrate analysis capabilities. We run this same process on your exact RFP.</p>
      </div>
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
