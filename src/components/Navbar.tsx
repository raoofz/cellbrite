"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Hem", href: "/" },
  { label: "Sök anstalt", href: "/sok-anstalt" },
  { label: "Godkända produkter", href: "/produkter" },
  { label: "Så fungerar det", href: "/sa-fungerar-det" },
  { label: "Nästa steg", href: "/nasta-steg" },
  { label: "Om Norvia", href: "/om-norvia" },
  { label: "Hjälpcenter", href: "/hjalpcenter" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4L12 20L20 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="8" r="2" fill="white"/>
            </svg>
          </div>
          <div className="leading-tight">
            <span className="text-[#1a1f2e] font-bold text-[22px] tracking-tight block">norvia</span>
            <span className="text-[8px] text-gray-400 tracking-[0.08em] uppercase block -mt-0.5">Godkänd leverans. Trygg förbindelse.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] text-gray-600 hover:text-[#1a1f2e] transition-colors whitespace-nowrap font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden xl:flex items-center gap-5 ml-auto">
          <button className="flex items-center gap-1.5 text-[13.5px] text-gray-600 hover:text-[#1a1f2e] font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            SV
            <ChevronDown size={12} />
          </button>
          <Link href="/logga-in" className="text-[13.5px] text-gray-600 hover:text-[#1a1f2e] font-medium">
            Logga in
          </Link>
          <Link
            href="/kom-igang"
            className="bg-[#1a1f2e] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#2a3040] transition-colors"
          >
            Kom igång
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-gray-600 hover:text-[#1a1f2e] border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 mt-2">
            <Link href="/logga-in" className="text-sm text-gray-600 font-medium">Logga in</Link>
            <Link href="/kom-igang" className="bg-[#1a1f2e] text-white text-sm px-5 py-2.5 rounded-lg font-medium">
              Kom igång
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
