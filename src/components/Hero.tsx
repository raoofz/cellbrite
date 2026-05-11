"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#1a1f2e] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Tryggt stöd.
              <br />
              <span className="text-[#c9a96e]">Godkända leveranser.</span>
            </h1>
            <p className="mt-6 text-[#9ca3b4] text-[17px] leading-relaxed max-w-md">
              Norvia hjälper dig att skicka paket som uppfyller
              Kriminalvårdens regler – med omtanke, tydlighet
              och full respekt för gällande bestämmelser.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sok-anstalt"
                className="inline-flex items-center gap-2.5 bg-white text-[#1a1f2e] px-6 py-3.5 rounded-lg font-semibold text-[14px] hover:bg-gray-100 transition-colors"
              >
                <Search size={16} />
                Sök anstalt
              </Link>
              <Link
                href="/produkter"
                className="inline-flex items-center gap-2.5 border border-white/25 text-white px-6 py-3.5 rounded-lg font-semibold text-[14px] hover:bg-white/5 transition-colors"
              >
                Se godkända produkter
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 text-[13px] text-[#8890a0]">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#c9a96e]">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Privat och oberoende plattform
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#c9a96e]">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Följer Kriminalvårdens regler
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#c9a96e]">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Fokus på säkerhet och respekt
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-worker.svg"
                alt="Norvia medarbetare"
                width={560}
                height={460}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            </div>
            {/* Floating info card */}
            <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-2xl max-w-[260px]">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-green-600">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11.5px] text-gray-700 font-medium leading-snug">
                    Vi följer Kriminalvårdens regler och anstalternas lokala bestämmelser.
                  </p>
                  <p className="text-[10.5px] text-gray-400 mt-1.5 leading-snug">
                    Slutligt godkännande av paket görs alltid av anstalten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
