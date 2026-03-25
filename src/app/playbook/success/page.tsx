import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Purchase Successful | Aegis Gov DAO",
  robots: { index: false, follow: false },
};

export default function PlaybookSuccessPage() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gold/10 border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="inline-block text-xs font-bold text-gold/70 uppercase tracking-widest border border-gold/20 rounded-full px-4 py-1.5 mb-6 bg-gold/5">
          Payment Confirmed
        </span>

        <h1 className="text-4xl font-black text-white mb-4">
          You&apos;re in. 🎉
        </h1>

        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Your purchase of <strong className="text-white">The AI GovCon Playbook</strong> is confirmed. 
          Check your email — we&apos;ve sent you instant access with your personal download link.
        </p>

        <div className="bg-navy-light border border-white/5 rounded-xl p-6 mb-8 text-left">
          <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-4">What happens next</p>
          <div className="space-y-3">
            {[
              "Check your inbox for an email from frank@aegisgov.ai",
              "Click the link inside to access your full playbook",
              "Bookmark it — you'll get lifetime updates automatically",
            ].map((step, i) => (
              <div key={step} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-secondary text-sm px-6 py-3">
            Back to Aegis Gov
          </Link>
          <Link href="/playbook" className="text-white/30 text-sm flex items-center justify-center hover:text-white/50 transition-colors">
            View sales page
          </Link>
        </div>

        <p className="text-white/20 text-xs mt-8">
          Questions? Email us at{" "}
          <a href="mailto:frank@aegisgov.ai" className="text-gold/40 hover:text-gold/60 transition-colors">
            frank@aegisgov.ai
          </a>
        </p>
      </div>
    </div>
  );
}
