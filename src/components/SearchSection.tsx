"use client";

import { Search } from "lucide-react";

const popularSearches = ["Kronoberg", "Hall", "Malmö", "Södertälje", "Österåker", "Hinseberg"];

export default function SearchSection() {
  return (
    <section className="py-14 md:py-16 bg-[#1a1f2e]">
      <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[26px] md:text-[30px] font-bold text-white mb-1.5">
          Hitta din anstalt
        </h2>
        <p className="text-[14px] text-[#8890a0] mb-7 leading-relaxed">
          Sök på anstaltens namn eller ort för att se vad
          som är tillåtet, regler för paket och leverans­information.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Sök på anstalt eller ort..."
            className="w-full bg-white rounded-xl px-5 py-4 pr-14 text-[15px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a96e] shadow-lg"
          />
          <button className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-[#1a1f2e] text-white p-2.5 rounded-lg hover:bg-[#2a3040] transition-colors">
            <Search size={18} />
          </button>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-[#6b7280] text-[13px]">Populära sökningar:</span>
          {popularSearches.map((s) => (
            <button
              key={s}
              className="text-[12.5px] text-[#c0c7d4] bg-white/[0.08] px-3.5 py-1.5 rounded-full hover:bg-white/[0.15] transition-colors border border-white/[0.08]"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
