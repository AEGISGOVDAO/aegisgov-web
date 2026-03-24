import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-gold rounded-md flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
                    fill="#0a1628"
                  />
                </svg>
              </div>
              <span className="text-white font-bold">Aegis Gov <span className="text-gold">DAO</span></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Your Fractional AI Officer for Government Contracting. Helping small GovCon firms work smarter.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/50 hover:text-gold text-sm transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:admin@aegisgov.ai"
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  admin@aegisgov.ai
                </a>
              </li>
              <li>
                <a
                  href="https://opportunity-watch.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  OpportunityWatch →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Aegis Gov DAO LLC | Nevada | aegisgov.ai
          </p>
          <p className="text-white/20 text-xs">
            Built for contractors doing SBIR, STTR, FAR, and DFAR work
          </p>
        </div>
      </div>
    </footer>
  );
}
