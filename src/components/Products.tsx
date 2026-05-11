"use client";

import { Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  { name: "Schampo", size: "200 ml", price: 29, image: "/images/products/shampoo.svg" },
  { name: "Tandkräm", size: "75 ml", price: 19, image: "/images/products/tandkram.svg" },
  { name: "Tandborste", size: "1 st", price: 15, image: "/images/products/tandborste.svg" },
  { name: "Deodorant", size: "150 ml", price: 29, image: "/images/products/deodorant.svg" },
  { name: "Strumpor (3-pack)", size: "Storlek 40-45", price: 49, image: "/images/products/strumpor.svg" },
  { name: "Kulpennor (2-pack)", size: "Blå streckt", price: 15, image: "/images/products/kulpennor.svg" },
  { name: "Skrivpapper", size: "A4 · 50 ark", price: 29, image: "/images/products/skrivpapper.svg" },
  { name: "Kuvert", size: "5 st", price: 19, image: "/images/products/kuvert.svg" },
];

export default function Products() {
  return (
    <section className="py-14 md:py-18 bg-[#f9fafb]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-1.5">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a1f2e]">
            Godkända produkter
          </h2>
          <Link
            href="/produkter"
            className="text-[13px] text-[#1a1f2e] font-semibold flex items-center gap-1 hover:underline"
          >
            Visa alla produkter
            <ArrowRight size={14} />
          </Link>
        </div>
        <p className="text-[14px] text-gray-500 mb-8">
          Endast produkter som vanligtvis accepteras på svenska anstalter.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl p-3 hover:shadow-lg transition-all group border border-gray-100"
            >
              <div className="bg-[#f5f6f8] rounded-lg aspect-square flex items-center justify-center mb-2.5 p-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={80}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[12.5px] font-semibold text-[#1a1f2e] truncate">{p.name}</h3>
              <p className="text-[11px] text-gray-400 mt-0.5">{p.size}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[13px] font-bold text-[#1a1f2e]">{p.price} kr</span>
                <button className="w-6 h-6 rounded-full bg-[#1a1f2e] text-white flex items-center justify-center hover:bg-[#2a3040] transition-colors opacity-70 group-hover:opacity-100">
                  <Plus size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-[12.5px] text-gray-500">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-500">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Endast vanligt förekommande produkter accepteras
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-amber-500">
              <path d="M12 9v2m0 4h.01M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kontrolleras mot anstaltens regler
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-500">
              <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 14l-4 8h8l-4-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kvalitetsprodukter och noggrann packning
          </div>
        </div>
      </div>
    </section>
  );
}
