"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  plattform: [
    { label: "Sök anstalt", href: "/sok-anstalt" },
    { label: "Godkända produkter", href: "/produkter" },
    { label: "Så fungerar det", href: "/sa-fungerar-det" },
    { label: "Nästa steg", href: "/nasta-steg" },
    { label: "Hjälpcenter", href: "/hjalpcenter" },
  ],
  omNorvia: [
    { label: "Om oss", href: "/om-norvia" },
    { label: "Våra värderingar", href: "/varderingar" },
    { label: "Integritetspolicy", href: "/integritetspolicy" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  resurser: [
    { label: "Kriminalvårdens regler", href: "/regler" },
    { label: "Vanliga frågor", href: "/faq" },
    { label: "Förpackningsguide", href: "/forpackningsguide" },
    { label: "Leveransinformation", href: "/leveransinfo" },
  ],
};

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "facebook":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      );
    case "instagram":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      );
    case "youtube":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#111318] text-gray-400 pt-14 pb-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4L12 20L20 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="8" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">norvia</span>
            </Link>
            <p className="text-[11.5px] leading-relaxed mb-5 text-[#7a8194]">
              Norvia är en privat och oberoende plattform som hjälper anhöriga att skicka godkända paket till svenska anstalter.
            </p>
            <div className="flex items-center gap-3">
              {["facebook", "instagram", "youtube", "linkedin"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-[#7a8194] hover:text-white hover:bg-white/[0.12] transition-colors"
                  aria-label={social}
                >
                  <SocialIcon type={social} />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold text-[13px] mb-4">Plattform</h4>
            <ul className="space-y-2.5">
              {footerLinks.plattform.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[12.5px] text-[#7a8194] hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Om Norvia */}
          <div>
            <h4 className="text-white font-semibold text-[13px] mb-4">Om Norvia</h4>
            <ul className="space-y-2.5">
              {footerLinks.omNorvia.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[12.5px] text-[#7a8194] hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resurser */}
          <div>
            <h4 className="text-white font-semibold text-[13px] mb-4">Resurser</h4>
            <ul className="space-y-2.5">
              {footerLinks.resurser.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[12.5px] text-[#7a8194] hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-[13px] mb-4">Håll dig uppdaterad</h4>
            <p className="text-[12.5px] text-[#7a8194] mb-3">Få nyheter och uppdateringar:</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 min-w-0 bg-white/[0.06] text-[12.5px] text-white px-3 py-2.5 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#c9a96e] placeholder:text-[#5a6070] border border-white/[0.08] border-r-0"
              />
              <button className="bg-[#c9a96e] text-white px-3 py-2.5 rounded-r-lg hover:bg-[#b89960] transition-colors shrink-0">
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-wrap justify-between items-center gap-4 text-[11.5px] text-[#5a6070]">
          <p>© 2024 Norvia AB. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6">
            <Link href="/integritetspolicy" className="hover:text-white transition-colors">Integritetspolicy</Link>
            <Link href="/anvandarvillkor" className="hover:text-white transition-colors">Användarvillkor</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookieinställningar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
