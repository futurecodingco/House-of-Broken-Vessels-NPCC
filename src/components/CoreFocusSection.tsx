import React, { useState } from 'react';
import { Users, Heart, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, BookOpen } from 'lucide-react';
import { FocusPillar } from '../types';
import sanctuarySafeCircleImg from '../assets/images/sanctuary_safe_circle_1793870283666.jpg';
import healingHopeHandsImg from '../assets/images/healing_hope_hands_1793870283808.jpg';

interface CoreFocusSectionProps {
  onSelectPillar: (pillarTitle: string) => void;
}

export const CoreFocusSection: React.FC<CoreFocusSectionProps> = ({ onSelectPillar }) => {
  const [activeTab, setActiveTab] = useState<'safe_spaces' | 'heart_healing' | 'life_restoration'>('safe_spaces');

  const pillars: Record<string, FocusPillar> = {
    safe_spaces: {
      id: 'safe_spaces',
      title: 'Safe Spaces & Counseling Circles',
      tagline: 'Dedicated, confidential rooms and circles for unburdened sharing.',
      description:
        'A sacred physical and emotional space where women can lay down their burdens without fear of gossip, condemnation, or retaliation. Hosted in small groups of 6 to 8 women at our Mid Ennerdale sanctuary.',
      keyElements: [
        'Confidentiality Covenant: What is said in the circle stays forever within the circle',
        'Facilitated by trauma-informed, empathetic female mentors who understand recovery',
        'No pressure to speak—you are welcome to sit, listen, cry, or simply breathe',
        'Warm, comforting tea and restorative hospitality provided at every session'
      ],
      launchRoadmap: 'Phase 1 Launch: Weekly small circles beginning in Mid Ennerdale. Registration is currently open for inaugural group placements.',
      iconName: 'Users'
    },
    heart_healing: {
      id: 'heart_healing',
      title: 'Heart Healing & Emotional Guidance',
      tagline: 'Specialized spiritual and emotional recovery for women overcoming deep trauma.',
      description:
        'Trauma and abuse do not just cause circumstantial damage; they wound the spirit, destroy self-esteem, and create crippling anxiety. Our heart healing curriculum walks women through grief, forgiveness, releasing shame, and discovering unconditional worth.',
      keyElements: [
        'Personal one-on-one pastoral counseling in partnership with Changing Life Ministries',
        'Targeted trauma debriefing and emotional regulation coping mechanisms',
        'Rebuilding self-worth and dissolving the false guilt often imposed by abusers',
        'Grief and loss processing for mothers, daughters, and grieving sisters'
      ],
      launchRoadmap: 'Phase 1 Launch: Individual pastoral and emotional debriefing appointments scheduled discretely at mutually safe times.',
      iconName: 'Heart'
    },
    life_restoration: {
      id: 'life_restoration',
      title: 'Life Restoration & Independence',
      tagline: 'Practical frameworks to rebuild education, careers, and personal independence.',
      description:
        'Restoration is not complete until a woman has the practical confidence and autonomy to sustain her life and family. We connect healing hearts with actionable stepping stones toward financial self-reliance and education.',
      keyElements: [
        'Personal development roadmapping: Goal setting, boundary enforcement, and life planning',
        'Guidance on educational re-entry, matric completion, and vocational skills development',
        'CV preparation, interview practice, and job readiness mentoring',
        'Emergency resource navigation: Connecting vulnerable mothers with Gauteng welfare and legal rights support'
      ],
      launchRoadmap: 'Phase 2 Launch: Mentorship cohorts and practical independence workshops rolling out across Gauteng.',
      iconName: 'Sparkles'
    }
  };

  const currentPillar = pillars[activeTab];

  return (
    <section id="focus" className="py-16 sm:py-24 bg-[#F5EFE6] border-b border-[#E6DDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#9E3E26] font-semibold font-sans">
            Our Restorative Services Roadmap
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B231D] mt-2 tracking-tight">
            Our Three Core Focus Pillars
          </h2>
          <p className="text-base sm:text-lg text-[#554940] mt-4 leading-relaxed font-sans">
            As a newly registered Non-Profit Company preparing for launch, we have structured our foundational roadmap around three interconnected needs essential for long-term emotional restoration.
          </p>
        </div>

        {/* Interactive Segmented Control */}
        <div className="mt-10 flex flex-wrap gap-2 p-1.5 bg-[#EAE2D5] rounded-xl max-w-xl">
          <button
            onClick={() => setActiveTab('safe_spaces')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
              activeTab === 'safe_spaces'
                ? 'bg-white text-[#2B231D] shadow-xs'
                : 'text-[#65584E] hover:text-[#2B231D]'
            }`}
          >
            1. Safe Spaces
          </button>
          <button
            onClick={() => setActiveTab('heart_healing')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
              activeTab === 'heart_healing'
                ? 'bg-white text-[#2B231D] shadow-xs'
                : 'text-[#65584E] hover:text-[#2B231D]'
            }`}
          >
            2. Heart Healing
          </button>
          <button
            onClick={() => setActiveTab('life_restoration')}
            className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
              activeTab === 'life_restoration'
                ? 'bg-white text-[#2B231D] shadow-xs'
                : 'text-[#65584E] hover:text-[#2B231D]'
            }`}
          >
            3. Life Restoration
          </button>
        </div>

        {/* Active Pillar Card Breakdown */}
        <div className="mt-8 bg-[#FAF7F2] rounded-2xl border border-[#DFD3C4] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9E3E26] font-semibold">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Launch Roadmap Service</span>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#2B231D] font-medium">
                    {currentPillar.title}
                  </h3>
                  <p className="text-sm sm:text-base font-serif italic text-[#87402F] mt-1">
                    {currentPillar.tagline}
                  </p>
                </div>

                <p className="text-[#554940] leading-relaxed text-sm sm:text-base">
                  {currentPillar.description}
                </p>

                {/* Key Components */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs uppercase tracking-wider text-[#7A6B60] font-bold font-sans">
                    What This Service Provides:
                  </p>
                  <ul className="space-y-2.5">
                    {currentPillar.keyElements.map((elem, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#483C34]">
                        <CheckCircle2 className="w-4 h-4 text-[#446653] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Roadmap Status & CTA */}
              <div className="mt-8 pt-6 border-t border-[#EAE1D4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-[#6A5D53]">
                  <span className="font-semibold text-[#2C241E]">Current Status:</span> {currentPillar.launchRoadmap}
                </div>
                <button
                  onClick={() => onSelectPillar(currentPillar.title)}
                  className="px-5 py-2.5 bg-[#9E3E26] hover:bg-[#83311D] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Register Interest</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 bg-[#F1EAE0] border-t lg:border-t-0 lg:border-l border-[#DFD3C4] flex items-center justify-center p-6 lg:p-8">
              <div className="w-full space-y-4">
                <div className="overflow-hidden rounded-xl border border-[#D8CBBD] shadow-md bg-stone-100">
                  <img
                    src={
                      activeTab === 'safe_spaces'
                        ? sanctuarySafeCircleImg
                        : healingHopeHandsImg
                    }
                    alt={currentPillar.title}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-[#E3D7C9] text-xs text-[#5D5045]">
                  <p className="font-medium text-[#29221C]">
                    {activeTab === 'safe_spaces'
                      ? 'The Mid Ennerdale Sanctuary Room'
                      : 'Gentle, Trauma-Informed Pastoral Care'}
                  </p>
                  <p className="text-[11px] text-[#78695E] mt-0.5">
                    {activeTab === 'safe_spaces'
                      ? 'Intimate seating designed to foster trust and peace.'
                      : 'Every healing step is taken at your own comfortable pace.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Experience: What to Expect in Your First Circle */}
        <div className="mt-16 bg-[#FAF7F2] rounded-2xl border border-[#DED2C3] p-8 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#9E3E26] font-semibold">
              First-Time Visitor Reassurance
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#2B231D] font-medium mt-1">
              What to Expect at Your First Safe Circle
            </h3>
            <p className="text-sm sm:text-base text-[#5F5147] mt-2">
              We know walking into a new space when your heart is tender takes immense bravery. Here is what you will experience when you join us:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-[#F6EFEB] rounded-xl border border-[#E7DACD] space-y-2">
              <span className="font-editorial text-2xl font-bold text-[#9E3E26]">01</span>
              <h4 className="font-semibold text-sm text-[#2C241E]">Quiet Arrival & Tea</h4>
              <p className="text-xs text-[#5E5147] leading-relaxed">
                You will be warmly greeted at our Ennerdale sanctuary with warm tea or water. No forms to fill out in front of anyone; no invasive questioning.
              </p>
            </div>

            <div className="p-5 bg-[#F6EFEB] rounded-xl border border-[#E7DACD] space-y-2">
              <span className="font-editorial text-2xl font-bold text-[#9E3E26]">02</span>
              <h4 className="font-semibold text-sm text-[#2C241E]">The Privacy Covenant</h4>
              <p className="text-xs text-[#5E5147] leading-relaxed">
                Before any discussion begins, every participant verbally agrees to the strict confidentiality charter. Your story never leaves the room.
              </p>
            </div>

            <div className="p-5 bg-[#F6EFEB] rounded-xl border border-[#E7DACD] space-y-2">
              <span className="font-editorial text-2xl font-bold text-[#9E3E26]">03</span>
              <h4 className="font-semibold text-sm text-[#2C241E]">Sharing Is Voluntary</h4>
              <p className="text-xs text-[#5E5147] leading-relaxed">
                You are under zero obligation to speak. If you wish to simply sit, listen, and let your heart absorb the safety of the room, you are fully celebrated.
              </p>
            </div>

            <div className="p-5 bg-[#F6EFEB] rounded-xl border border-[#E7DACD] space-y-2">
              <span className="font-editorial text-2xl font-bold text-[#9E3E26]">04</span>
              <h4 className="font-semibold text-sm text-[#2C241E]">Follow-Up on Your Terms</h4>
              <p className="text-xs text-[#5E5147] leading-relaxed">
                You decide if and when you want to return or schedule an individual debriefing. We never send unsolicited follow-ups that could compromise your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
