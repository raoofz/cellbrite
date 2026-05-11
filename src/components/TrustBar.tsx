"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "100% transparens",
    description: "Vi är öppna med vår process och våra ansvar.",
  },
  {
    title: "Tusentals familjer",
    description: "Vi hjälper tusentals anhöriga varje dag med respekt.",
  },
  {
    title: "Strikta standarder",
    description: "Vi följer Kriminalvårdens regler och anstalternas krav.",
  },
  {
    title: "Lägre risk för avslag",
    description: "Vår process minskar risken för att ett paket nekas.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-10 md:py-12 bg-[#1a1f2e]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          {trustItems.map((item) => (
            <div key={item.title}>
              <h3 className="font-bold text-white text-[14px] mb-1">{item.title}</h3>
              <p className="text-[12px] text-[#8890a0] leading-relaxed">{item.description}</p>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-white text-[14px] mb-1">Behöver du hjälp?</h3>
            <p className="text-[12px] text-[#8890a0] mb-3">Vårt team finns här för att hjälpa dig.</p>
            <Link
              href="/kontakt"
              className="inline-block border border-[#c9a96e] text-[#c9a96e] text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#c9a96e]/10 transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
