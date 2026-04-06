import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RFP Breakdown: VA IT Infrastructure Modernization — Aegis Gov AI',
  description: 'AI-generated compliance checklist, proposal outline, and win themes for VA IT Infrastructure Modernization solicitation.',
}

const checklist = [
  'SDVOSB certification current in SBA DSBS and VETS-4212 on file',
  'NAICS 541512 size standard met ($30M avg annual receipts)',
  'SAM.gov registration active — CAGE code, representations current',
  '3 past performance references of similar scope within past 5 years',
  'Key personnel resumes match minimum quals: PM, Technical Lead, Security Specialist',
  'FedRAMP Moderate authorization documented or in-progress',
  'NIST 800-53 controls implementation evidence available',
  'HIPAA/PII data handling procedures documented',
  'Cleared personnel pipeline — minimum Public Trust, some Secret required',
  'VAAR 852.219-9 SDVOSB performance requirements reviewed',
  'DR/COOP documentation current and tested within 12 months',
  'Price proposal includes detailed labor rates, indirects, cost realism support',
]

const volumes = [
  { title: 'Volume 1 — Technical Proposal (55 pages)', items: [
    '1.0 Executive Summary (3 pp)',
    '1.1 Infrastructure Modernization: Cloud migration to AWS GovCloud/Azure Gov (12 pp)',
    '1.2 Service Desk Operations: Tier 1-3 for 45,000+ VA end users (8 pp)',
    '1.3 Network Engineering: WAN/LAN across 2.3M sq ft of VA facilities (8 pp)',
    '1.4 Security & Compliance: FedRAMP, NIST 800-53, HIPAA framework (6 pp)',
    '1.5 Transition Plan: Phase-in with zero service disruption (4 pp)',
  ]},
  { title: 'Volume 2 — Management Proposal', items: [
    '2.0 Corporate Experience & Past Performance (10 pp)',
    '2.1 Key Personnel with resumes (6 pp)',
    '2.2 Management Plan & QA Program (5 pp)',
    '2.3 Subcontracting Plan — SB participation (3 pp)',
  ]},
  { title: 'Volume 3 — Price Proposal', items: [
    '3.0 Completed RFQ pricing workbook',
    '3.1 Price Narrative with supporting documentation (5 pp)',
  ]},
  { title: 'Volume 4 — Required Attachments', items: [
    'SDVOSB certification documentation',
    'Small Business subcontracting plan',
    'Representations & Certifications',
  ]},
]

const themes = [
  { title: 'Veteran-Centered Mission Alignment', body: 'SDVOSBs with genuine veteran employment initiatives and VA healthcare experience signal authentic mission fit. Quantify veteran hires and VA-adjacent community impact — evaluators can tell the difference between a mission contractor and a set-aside play.' },
  { title: 'Proven Cloud Migration Track Record', body: 'VA is mid-way through a 10-year IT modernization push. Past performance on AWS GovCloud or Azure Government migrations of similar scale (2,000+ endpoints, $5M+) is a direct differentiator. FedRAMP ATO transfer experience is specifically valued.' },
  { title: 'Uptime Guarantees Backed by Data', body: 'The 99.9% uptime requirement is non-negotiable. Show your 24/7 NOC capability with documented SLA history — <4 hour MTTR and 85%+ first-call resolution from prior contracts eliminates the evaluator\'s primary concern.' },
  { title: 'Cleared Personnel Bench Ready Now', body: 'Recruitment timelines kill proposals. Demonstrate you have a named, cleared technical bench — not "we will recruit." Even 3-4 named individuals with active clearances signals low risk to the evaluator.' },
  { title: 'Zero-Disruption Transition', body: 'VA cannot afford downtime. A detailed phase-in plan with parallel operations, user communication templates, and defined go/no-go gates demonstrates operational maturity. Most competitors submit a generic transition section — yours should show a specific 90-day plan.' },
]

const meta = [
  ['NAICS', '541512 — Computer Systems Design'],
  ['Set-Aside Type', 'SDVOSB'],
  ['Contract Type', 'IDIQ'],
  ['Scope', 'Infrastructure Modernization + Service Desk'],
]

export default function VA1Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <Link href="/samples" className="text-blue-600 text-sm font-medium hover:underline">← Back to all samples</Link>
      <div className="mt-6 mb-2 inline-block px-3 py-1 bg-yellow-100 border border-yellow-300 rounded text-xs font-bold text-yellow-800 uppercase tracking-wider">Sample Breakdown</div>
      <h1 className="text-3xl font-extrabold mt-4 mb-2 leading-tight">IT Infrastructure Modernization & Support Services</h1>
      <p className="text-base text-gray-500 mb-4">Based on real federal solicitation structure — IT Services / SDVOSB</p>
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
