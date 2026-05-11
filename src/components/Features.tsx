"use client";

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Anstaltsspecifika regler",
    description: "Varje anstalt har unika regler. Vi gör det enkelt att förstå vad som gäller.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Mindre risk för avslag",
    description: "Vi kontrollerar produkterna mot gällande regler för att minska risken för avslag.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Säker och diskret hantering",
    description: "Dina paket packas professionellt och hanteras med högsta diskretion.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Stöd för anhöriga",
    description: "Vi finns här för att vägleda och stödja dig genom hela processen.",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f4ee] flex items-center justify-center mx-auto mb-5 text-[#1a1f2e]">
                {f.icon}
              </div>
              <h3 className="font-bold text-[15px] text-[#1a1f2e] mb-2">{f.title}</h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed max-w-[220px] mx-auto">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
