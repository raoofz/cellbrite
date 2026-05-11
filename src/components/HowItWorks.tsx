"use client";

import Image from "next/image";

const steps = [
  {
    num: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "Sök anstalt",
    description: "Hitta anstalten och se regler och tillåtna produkter.",
  },
  {
    num: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: "Välj produkter",
    description: "Välj produkter som är tillåtna enligt anstaltens regler.",
  },
  {
    num: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Vi packar",
    description: "Vi packar ditt paket professionellt enligt reglerna.",
  },
  {
    num: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Leverans",
    description: "Paketet skickas tryggt till anstalten med korrekt information.",
  },
  {
    num: 5,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Stöd & uppföljning",
    description: "Vi finns här för dig före, under och efter leveransen.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-18 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a1f2e] mb-1.5">
          Så fungerar Norvia
        </h2>
        <p className="text-[14px] text-gray-500 mb-10">
          En enkel och trygg process från start till leverans.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Steps */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#f8f4ee] flex items-center justify-center mx-auto mb-3 relative text-[#1a1f2e]">
                  {s.icon}
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1a1f2e] rounded-full text-white text-[10px] flex items-center justify-center font-bold">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-bold text-[12.5px] text-[#1a1f2e] mb-1">{s.title}</h3>
                <p className="text-[11px] text-gray-500 leading-snug">{s.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="hidden lg:block rounded-2xl overflow-hidden">
            <Image
              src="/images/process-photo.svg"
              alt="Norvia leveransprocess"
              width={560}
              height={420}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
