import React from 'react';
import { ExternalLink, ShieldCheck, HeartHandshake, Church, Sparkles, Check } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  return (
    <section id="partnership" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partnership Highlight Header */}
        <div className="bg-[#F4ECE3] border border-[#DCCEC0] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#E8DDD1] opacity-60 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Strategic Alliance Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-md text-xs font-semibold text-[#8C3A27]">
                <ShieldCheck className="w-4 h-4 text-[#446653]" aria-hidden="true" />
                <span>Verified Strategic Alliance</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B231D] tracking-tight">
                Proudly Partnered with <br />
                <span className="text-[#9E3E26] italic">Changing Life Ministries</span>
              </h2>

              <p className="text-base sm:text-lg text-[#554940] leading-relaxed font-sans">
                To guarantee that every woman who enters our doors is met with the highest standard of pastoral care, spiritual mentorship, and community protection, House of Broken Vessels NPC was launched in formal strategic alignment with Changing Life Ministries.
              </p>

              {/* Three Strategic Benefits */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E5EDE7] text-[#3D5E4C] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C241E]">Pastoral Oversight & Spiritual Counsel</h4>
                    <p className="text-xs sm:text-sm text-[#5B4E44] mt-0.5">
                      Direct access to experienced pastoral guidance for women seeking prayer, reconciliation, and deep spiritual renewal in God's grace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E5EDE7] text-[#3D5E4C] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C241E]">Unified Community Support Ecosystem</h4>
                    <p className="text-xs sm:text-sm text-[#5B4E44] mt-0.5">
                      Borrowing established ministry resources, emergency family aid, and wider Gauteng community outreach networks so no woman falls through the cracks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E5EDE7] text-[#3D5E4C] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2C241E]">Accountability & Ethical Governance</h4>
                    <p className="text-xs sm:text-sm text-[#5B4E44] mt-0.5">
                      Joint stewardship ensuring the utmost transparency, ethical counseling codes, and protection of every participant's confidentiality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Official Link Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.changinglifeministries.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#2D2621] hover:bg-[#1F1A16] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors"
                >
                  <span>Visit Changing Life Ministries</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                <span className="text-xs text-[#75665C]">
                  Official Website: www.changinglifeministries.co.za
                </span>
              </div>
            </div>

            {/* Right Column: Alliance Card & Mutual Commitment */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF7F2] border border-[#DECFBD] rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DDD1]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8C3A27]">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Joint Vision Statement</span>
                  </div>
                  <span className="text-[11px] text-[#7C6E64] font-medium">Gauteng, ZA</span>
                </div>

                <blockquote className="font-editorial italic text-base sm:text-lg text-[#3B3029] leading-relaxed">
                  "When the church and grassroots sanctuaries unite with pure hearts, healing flows into every cracked vessel in our community. We stand fully behind House of Broken Vessels in Mid Ennerdale."
                </blockquote>

                <div className="pt-2 text-xs text-[#5D5046] border-t border-[#E8DDD1] space-y-1">
                  <p className="font-semibold text-[#2B231D]">Changing Life Ministries Leadership</p>
                  <p>In strategic partnership with House of Broken Vessels NPC</p>
                </div>
              </div>

              {/* Trust Badge Grid */}
              <div className="p-4 bg-[#F8F3ED] rounded-xl border border-[#DFD4C6] grid grid-cols-2 gap-3 text-center">
                <div className="p-2 border-r border-[#E5DACD]">
                  <p className="text-xs uppercase tracking-wider text-[#7A6B60] font-bold">Registration</p>
                  <p className="font-mono text-xs font-semibold text-[#2A231D] mt-0.5">NPC K2021582044</p>
                </div>
                <div className="p-2">
                  <p className="text-xs uppercase tracking-wider text-[#7A6B60] font-bold">Network Reach</p>
                  <p className="text-xs font-semibold text-[#2A231D] mt-0.5">Ennerdale & Gauteng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
