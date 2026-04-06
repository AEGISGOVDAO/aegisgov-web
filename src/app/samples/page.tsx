import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sample RFP Breakdowns — Aegis Gov AI',
  description: 'See how Aegis Gov AI breaks down real federal RFPs: compliance checklists, proposal outlines, and win themes — generated in under 2 hours.',
}

const rfps = [
  {
    label: 'Sample #1',
    agency: 'Dept of Veterans Affairs',
    title: 'IT Infrastructure Modernization & Support Services',
    naics: '541512',
    setAside: 'SDVOSB',
    value: '$8.5M IDIQ',
    slug: 'va-it-infrastructure',
    pdf: '/samples/rfp-sample-va-it-infrastructure.pdf',
  },
  {
    label: 'Sample #2',
    agency: 'Dept of Defense — DISA',
    title: 'Cybersecurity Operations & CMMC Compliance Support',
    naics: '541519',
    setAside: 'Total Small Business',
    value: '$4.2M',
    slug: 'dod-cybersecurity',
    pdf: '/samples/rfp-sample-dod-cybersecurity.pdf',
  },
  {
    label: 'Sample #3',
    agency: 'HHS Office of Inspector General',
    title: 'Data Analytics & AI/ML Platform Services',
    naics: '541511',
    setAside: '8(a) Small Business',
    value: '$6.8M IDIQ',
    slug: 'hhs-data-analytics',
    pdf: '/samples/rfp-sample-hhs-data-analytics.pdf',
  },
]

export default function SamplesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <Link href="/" className="text-blue-600 text-sm font-medium hover:underline">← Back to Aegis Gov AI</Link>

      <div className="mt-6 mb-2 inline-block px-3 py-1 bg-yellow-100 border border-yellow-300 rounded text-xs font-bold text-yellow-800 uppercase tracking-wider">
        Sample RFP Breakdowns
      </div>

      <h1 className="text-4xl font-extrabold mt-4 mb-3 leading-tight">
        What our RFP analysis actually looks like.
      </h1>
      <p className="text-lg text-gray-500 mb-4 max-w-2xl">
        Each breakdown takes under 2 hours. Every sample includes a compliance checklist,
        full proposal outline, and key win themes — built from real federal solicitation structures.
      </p>
      <div className="mb-10 p-4 bg-amber-50 border border-amber-200 rounded-lg max-w-2xl">
        <p className="text-sm text-amber-800 font-medium m-0">
          <strong>Note:</strong> These are samples generated to demonstrate our analysis capabilities.
          We run this same process on your exact RFP.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {rfps.map((rfp) => (
          <div key={rfp.slug} className="border border-gray-200 rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{rfp.label}</span>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={rfp.pdf}
                  download
                  className="text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 font-semibold hover:bg-blue-100 transition-colors no-underline"
                >
                  ↓ Download PDF
                </a>
                <Link
                  href={`/samples/${rfp.slug}`}
                  className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1 font-semibold hover:bg-green-100 transition-colors no-underline"
                >
                  View Breakdown →
                </Link>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium mb-2">{rfp.agency}</div>
            <Link href={`/samples/${rfp.slug}`} className="no-underline">
              <h2 className="text-xl font-bold mb-4 text-gray-900 hover:text-blue-700 transition-colors">{rfp.title}</h2>
            </Link>
            <div className="flex gap-4 flex-wrap">
              <span className="text-sm text-gray-600">💰 {rfp.value}</span>
              <span className="text-sm text-gray-600">🏷️ {rfp.setAside}</span>
              <span className="text-sm text-gray-600">📋 NAICS {rfp.naics}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
        <h2 className="text-2xl font-extrabold mb-3">Working a live bid right now?</h2>
        <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
          Send us the RFP. We return a full breakdown within 24 hours — compliance checklist,
          proposal outline, win themes. First one is free.
        </p>
        <a
          href="mailto:support@aegisgov.ai?subject=Free RFP Analysis Request&body=Hi Frank,%0A%0AHere is the RFP I'd like analyzed:%0A%0A[paste solicitation number or attach document]"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-base no-underline transition-colors"
        >
          Request Free Analysis →
        </a>
        <p className="text-gray-500 text-sm mt-3">Or email: <a href="mailto:support@aegisgov.ai" className="text-blue-400">support@aegisgov.ai</a></p>
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-sm text-gray-500 mb-4">Ready to buy? Proposal packages available now:</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://buy.stripe.com/eVqcN5atkdrK4WS7xW5Vu03" className="inline-block bg-gray-800 text-gray-200 px-5 py-2.5 rounded-lg no-underline text-sm font-semibold border border-gray-600 hover:bg-gray-700 transition-colors">
              Standard Package — $1,500
            </a>
            <a href="https://buy.stripe.com/00w6oH44WdrKblg2dC5Vu04" className="inline-block bg-gray-800 text-gray-200 px-5 py-2.5 rounded-lg no-underline text-sm font-semibold border border-gray-600 hover:bg-gray-700 transition-colors">
              Complex Package — $2,500
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-400">
        <Link href="/" className="text-gray-500 hover:underline">Aegis Gov AI</Link> · <a href="mailto:support@aegisgov.ai" className="text-gray-500 hover:underline">support@aegisgov.ai</a>
      </p>
    </main>
  )
}
