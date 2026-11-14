import React from 'react';
import { MapPin, Navigation, Bus, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const mapAddress = encodeURIComponent('77 Skeleton Street, Mid Ennerdale, Johannesburg, 1830');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapAddress}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F5EFE6] border-b border-[#E6DDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#9E3E26] font-semibold font-sans">
            Our Physical Sanctuary
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B231D] mt-2 tracking-tight">
            Located in Mid Ennerdale, Gauteng
          </h2>
          <p className="text-base sm:text-lg text-[#554940] mt-4 leading-relaxed font-sans">
            A peaceful, quiet haven nestled directly within our community, easily accessible to women across Ennerdale, Lawley, Lenasia South, and surrounding areas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Card */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl border border-[#DED3C4] p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#7C6E65] font-semibold">
                  Official Registered Address
                </span>
                <p className="font-editorial text-2xl text-[#2B231D] font-medium leading-snug">
                  77 Skeleton Street <br />
                  <span className="text-lg text-[#5D5046] font-sans">
                    Mid Ennerdale, Johannesburg, 1830
                  </span>
                </p>
                <p className="text-xs text-[#7B6E64]">
                  Gauteng Province, South Africa
                </p>
              </div>

              {/* Transit & Accessibility */}
              <div className="space-y-4 pt-4 border-t border-[#EAE0D3]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF0E6] border border-[#DECFBD] flex items-center justify-center text-[#9E3E26] shrink-0 mt-0.5">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C241E]">Transit & Road Access</h4>
                    <p className="text-xs text-[#5D5046] mt-0.5 leading-relaxed">
                      Conveniently located off the Golden Highway (R553) and Provincial route networks. Local taxis connect directly via Ennerdale central routes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF1EC] border border-[#C9DCCE] flex items-center justify-center text-[#3D5E4C] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C241E]">Private & Discreet Entry</h4>
                    <p className="text-xs text-[#5D5046] mt-0.5 leading-relaxed">
                      Our facility is intentionally understated from the exterior to protect participants from public scrutiny or unwanted attention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF3EA] border border-[#E9DAC8] flex items-center justify-center text-[#A66E22] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C241E]">Intake by Arrangement</h4>
                    <p className="text-xs text-[#5D5046] mt-0.5 leading-relaxed">
                      To ensure every counseling circle and one-on-one session remains undisturbed, in-person attendance is scheduled discreetly in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Directions Button */}
            <div className="pt-4 border-t border-[#EAE0D3]">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#2C241E] hover:bg-[#1E1814] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Sanctuary Visual / Map Canvas Card */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl border border-[#DED3C4] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#9E3E26] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Mid Ennerdale Geographic Sanctuary Guide
                </span>
                <span className="text-xs text-[#7B6E64] font-mono">1830 · JHB SOUTH</span>
              </div>

              {/* Styled SVG Map of Ennerdale layout */}
              <div className="relative w-full h-72 sm:h-80 bg-[#EFE8DF] rounded-xl overflow-hidden border border-[#D9CABE] flex items-center justify-center">
                <svg
                  className="w-full h-full text-[#D2C5B6]"
                  viewBox="0 0 600 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Stylized map showing 77 Skeleton Street in Mid Ennerdale"
                >
                  {/* Grid lines symbolizing roads */}
                  <path d="M0 60 H600" stroke="#DFD3C4" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M0 140 H600" stroke="#C8B8A6" strokeWidth="4" />
                  <text x="20" y="132" fill="#88786B" fontSize="11" fontFamily="sans-serif">Golden Highway (R553)</text>

                  <path d="M0 240 H600" stroke="#DFD3C4" strokeWidth="2" />
                  <text x="20" y="232" fill="#88786B" fontSize="11" fontFamily="sans-serif">Provincial Arterial</text>

                  <path d="M120 0 V360" stroke="#DFD3C4" strokeWidth="2" />
                  <path d="M260 0 V360" stroke="#C8B8A6" strokeWidth="5" />
                  <text x="268" y="40" fill="#88786B" fontSize="11" fontFamily="sans-serif">Poseidon / Katz Rd</text>

                  <path d="M420 0 V360" stroke="#DFD3C4" strokeWidth="3" />
                  <path d="M180 180 H460" stroke="#9E3E26" strokeWidth="3" />
                  <text x="185" y="172" fill="#9E3E26" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Skeleton Street</text>

                  {/* Sanctuary Marker Pin */}
                  <circle cx="340" cy="180" r="14" fill="#9E3E26" fillOpacity="0.2" className="animate-ping" />
                  <circle cx="340" cy="180" r="8" fill="#9E3E26" />
                  <circle cx="340" cy="180" r="3" fill="#FFFFFF" />

                  {/* Marker Label Box */}
                  <rect x="358" y="152" width="220" height="54" rx="8" fill="#FAF7F2" stroke="#9E3E26" strokeWidth="1.5" />
                  <text x="370" y="172" fill="#2B231D" fontSize="12" fontWeight="bold" fontFamily="sans-serif">House of Broken Vessels NPC</text>
                  <text x="370" y="190" fill="#6A5C52" fontSize="10" fontFamily="sans-serif">77 Skeleton St, Mid Ennerdale</text>
                  <text x="370" y="200" fill="#9E3E26" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Safe Restorative Sanctuary</text>
                </svg>

                {/* Floating safety reminder overlay */}
                <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs border border-[#D7C9BB] rounded-lg px-3 py-2 text-[11px] text-[#5A4E44] shadow-xs">
                  <span>Close to Mid Ennerdale Civic nodes & Changing Life Ministries networks</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#6B5E55] mt-4 leading-relaxed">
              Visiting instructions: When arriving for your appointed circle or individual debriefing, please ring the designated sanctuary buzzer. You will be received by our team in quiet serenity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
