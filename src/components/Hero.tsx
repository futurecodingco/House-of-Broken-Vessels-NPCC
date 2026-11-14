import React from 'react';
import { ArrowDown, ExternalLink, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenSupport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSupport }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EAE3D9]">
      {/* Subtle organic warmth background decor */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#F3E8DD] opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E5ECE7] opacity-60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Strategic Partnership Trust Ribbon */}
        <div className="mb-8">
          <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2.5 bg-[#F2EDE4] border border-[#DECFBD] rounded-lg text-sm text-[#463D36]">
            <span className="font-semibold text-[#2C241E] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#446653]" aria-hidden="true" />
              Strategic Alliance:
            </span>
            <span>Proudly Partnered with</span>
            <a
              href="https://www.changinglifeministries.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#8C3A27] hover:text-[#5F2417] underline underline-offset-2 transition-colors"
            >
              Changing Life Ministries
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <span className="hidden sm:inline text-[#B5A89B]">|</span>
            <span className="text-xs text-[#6B5E55]">
              Unified Support Network in Gauteng
            </span>
          </div>
        </div>

        {/* 2-Column Split: Editorial Copy & Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata (Zero-Pill Discipline) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78695F] font-sans font-semibold">
              <span>Non-Profit Company</span>
              <span aria-hidden="true">·</span>
              <span>Reg: K2021582044</span>
              <span aria-hidden="true">·</span>
              <span>Mid Ennerdale, South Africa</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2B231D] leading-[1.15] text-balance">
              A Safe Space to Heal, <br />
              <span className="italic text-[#9E3E26]">Power to Begin Again.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-[#53473E] leading-relaxed max-w-2xl font-sans">
              Helping broken women mend their hearts, find their strength, and pick up where life left off.
              A protected, compassionate, and judgement-free sanctuary in Mid Ennerdale.
            </p>

            {/* Launch Status / Community Promise */}
            <div className="bg-[#F6EFEB] border border-[#E4D5C5] rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#2C241E]">
                <Heart className="w-4 h-4 text-[#9E3E26]" aria-hidden="true" />
                <span>Our Founding Promise for Mid Ennerdale</span>
              </div>
              <p className="text-sm text-[#5D5046] leading-relaxed">
                As a newly established NPC preparing to open our inaugural healing circles, our doors and hearts are dedicated to every woman carrying trauma, heartbreak, abuse, or quiet exhaustion. You do not have to carry the weight alone anymore.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenSupport}
                className="px-6 py-3.5 bg-[#9E3E26] hover:bg-[#83311D] active:bg-[#6E2816] text-white text-base font-semibold rounded-lg shadow-sm transition-colors text-center cursor-pointer"
              >
                Request Confidential Support
              </button>
              <a
                href="#focus"
                className="px-6 py-3.5 bg-transparent hover:bg-[#F2ECE1] text-[#3E342D] border border-[#D5C7B7] text-base font-medium rounded-lg transition-colors text-center"
              >
                Explore Launch Focus
              </a>
            </div>

            {/* Discrete Trust Markers */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E7DFD5] text-xs text-[#63554B]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#446653]" />
                <span>100% Confidential Care</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E3E26]" />
                <span>Zero Judgement Sanctuary</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B2782A]" />
                <span>Trauma-Informed Mentors</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Symbolic Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with Architectural Soft Shadow */}
              <div className="overflow-hidden rounded-2xl border border-[#DFD4C5] bg-[#F3ECE2] shadow-xl">
                <img
                  src="/src/assets/images/hero_restored_vessel_1793870282007.jpg"
                  alt="A handcrafted ceramic clay vessel with delicate golden kintsugi repair seams held tenderly in compassionate hands"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Editorial Caption */}
                <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DFD3]">
                  <p className="font-editorial italic text-sm text-[#463D36]">
                    "In pottery, when a clay vessel breaks, the golden mending makes it more resilient and beautiful than before. Your fractures are not the end—they are where the light enters."
                  </p>
                  <p className="text-[11px] text-[#7C6E65] uppercase tracking-wider mt-1.5 font-sans font-medium">
                    The House of Broken Vessels Covenant
                  </p>
                </div>
              </div>

              {/* Floated decorative badge on corner */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#FAF7F2] border border-[#D8CABE] rounded-lg p-3.5 shadow-md max-w-xs">
                <p className="text-xs font-semibold text-[#29221C] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B2782A]" aria-hidden="true" />
                  Mid Ennerdale Safe Haven
                </p>
                <p className="text-[11px] text-[#63554B] mt-0.5">
                  77 Skeleton Street, Johannesburg 1830
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
