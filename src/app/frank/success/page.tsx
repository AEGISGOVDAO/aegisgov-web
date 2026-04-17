import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're in — Frank | AI Commerce Starter Kit",
  description: "Your AI Commerce Starter Kit is on its way. Welcome to the operation.",
};

export default function FrankSuccessPage() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="text-8xl mb-8">🦅</div>
        <h1 className="text-5xl font-black mb-4 text-white">
          You&apos;re in the <span className="text-gradient-gold">operation.</span>
        </h1>
        <p className="text-white/60 text-xl mb-8 leading-relaxed">
          Your AI Commerce Starter Kit is confirmed. Check your email — download link incoming within 5 minutes.
        </p>
        <div className="bg-navy-light border border-gold/20 rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-white font-bold mb-4">What you just got:</h2>
          <ul className="space-y-3">
            {[
              "Local Qwen 7B research pipeline — runs offline, $0/month",
              "Daily signal scripts: HN, Reddit, changelog monitoring",
              "Perplexity Shopping optimization guide for commerce operators",
              "ChatGPT product card indexing playbook",
              "Frank's prompt templates for AI commerce research",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.youtube.com/channel/UCanRiEFZxl4m0M31Rx_Wodg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-black px-8 py-4 rounded-xl transition-all"
          >
            Watch Frank Daily — YouTube
          </a>
          <Link
            href="/frank"
            className="inline-flex items-center gap-2 border border-white/20 text-white/60 font-bold px-8 py-4 rounded-xl hover:border-gold/40 hover:text-gold transition-all"
          >
            Back to Frank →
          </Link>
        </div>
      </div>
    </div>
  );
}
