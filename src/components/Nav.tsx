"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gold rounded-md flex items-center justify-center shadow-lg group-hover:bg-gold-light transition-colors">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
              <path
                d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
                fill="#0a1628"
              />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Aegis Gov <span className="text-gold">DAO</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            Products
          </Link>
          <Link
            href="/playbook"
            className="text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            Playbook
          </Link>
          <a
            href="mailto:sales@aegisgov.ai"
            className="btn-primary !px-6 !py-2.5 !text-sm"
          >
            Get Your Free Assessment
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-navy-light px-6 py-4 flex flex-col gap-4">
          <Link
            href="/services"
            className="text-white/80 hover:text-white font-medium py-2"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-white/80 hover:text-white font-medium py-2"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/playbook"
            className="text-white/80 hover:text-white font-medium py-2"
            onClick={() => setMenuOpen(false)}
          >
            Playbook
          </Link>
          <a
            href="mailto:sales@aegisgov.ai"
            className="btn-primary !py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Your Free Assessment
          </a>
        </div>
      )}
    </nav>
  );
}
