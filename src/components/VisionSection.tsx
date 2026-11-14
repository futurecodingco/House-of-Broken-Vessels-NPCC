import React from 'react';
import { Shield, Sparkles, Sun, Compass } from 'lucide-react';

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#9E3E26] font-semibold font-sans">
            Our Calling & Foundation
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B231D] mt-2 tracking-tight">
            Why House of Broken Vessels Was Born in Mid Ennerdale
          </h2>
          <p className="text-base sm:text-lg text-[#5A4E45] mt-4 leading-relaxed font-sans">
            Across Mid Ennerdale and our surrounding Gauteng communities, countless women quietly endure traumatic wounds—heartbreak, domestic strain, abandonment, and emotional fatigue. Too often, they are forced to smile and survive in silence, with nowhere safe to fall apart and put themselves back together.
          </p>
        </div>

        {/* Narrative & Symbolic Exploration */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#453A32] leading-relaxed text-base">
            <div className="p-6 sm:p-8 bg-[#F5EDE4] rounded-2xl border border-[#DFD3C4] space-y-4">
              <h3 className="font-editorial text-2xl text-[#2B231D] font-medium">
                The Sacred Metaphor of the Broken Vessel
              </h3>
              <p className="text-[#51453C]">
                When an earthenware clay pot falls and fractures, the world sees only fragments to discard. But in the potter’s workshop, brokenness is never final. The pieces are cradled, cleaned, and lovingly rejoined with precious gold—a practice known as <em>Kintsugi</em>. The reformed vessel is not hidden away in shame; its restored golden fractures become its greatest beauty and evidence of survival.
              </p>
              <p className="text-[#51453C]">
                At <strong>House of Broken Vessels NPC</strong>, we believe every broken heart carries that exact divine promise. Trauma may have shattered your peace, but in a safe, compassionate sanctuary, your fractures become the very foundation of your renewed strength and purpose.
              </p>
            </div>

            {/* Editorial Drop Cap Reflection */}
            <div className="space-y-4 pt-2">
              <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#9E3E26]">
                We are launching not to offer quick platitudes, but to walk alongside women through real, restorative journeys. We provide the warm tea, the quiet room, the confidential listening ear, and the practical steps that enable a wounded woman to take her breath back.
              </p>
              <p>
                Mid Ennerdale deserves a beacon where no woman is judged for what she has endured. Whether you are recovering from a toxic relationship, grieving a devastating loss, or seeking the courage to start your career again, our sanctuary was registered and founded for you.
              </p>
            </div>
          </div>

          {/* Core Values / Sanctuary Tenets */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#DED3C6] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#FAF0E6] border border-[#DFCFC0] flex items-center justify-center text-[#9E3E26]">
                <Shield className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="font-editorial text-xl font-medium text-[#29221C]">
                Zero Judgement, Total Dignity
              </h4>
              <p className="text-sm text-[#5B4E44] leading-relaxed">
                You do not need to explain yourself, prove your worth, or perform strength. You are met with immediate warmth, respect, and unconditional love.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#DED3C6] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#EBF2EE] border border-[#CCDCD2] flex items-center justify-center text-[#3D5E4C]">
                <Sun className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="font-editorial text-xl font-medium text-[#29221C]">
                Holistic Heart Restoration
              </h4>
              <p className="text-sm text-[#5B4E44] leading-relaxed">
                True healing addresses the mind, the emotions, and the spirit. We blend empathetic emotional processing with faith-grounded hope and renewal.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#DED3C6] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#FBF5EC] border border-[#E9D9C3] flex items-center justify-center text-[#A66E22]">
                <Compass className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="font-editorial text-xl font-medium text-[#29221C]">
                Sustainable Independence
              </h4>
              <p className="text-sm text-[#5B4E44] leading-relaxed">
                Healing the heart gives you the energy to rebuild your life. We connect you with life skills, educational restart resources, and practical empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Pullquote */}
        <div className="mt-16 py-10 border-y border-[#E6DDD1] text-center max-w-4xl mx-auto px-4">
          <blockquote className="font-editorial italic text-2xl sm:text-3xl text-[#352B24] leading-snug">
            "Broken does not mean ruined. In the right sanctuary, your brokenness becomes the crucible of your deepest courage."
          </blockquote>
          <p className="text-xs uppercase tracking-widest text-[#7D6F64] mt-4 font-sans font-semibold">
            House of Broken Vessels · Guiding Philosophy
          </p>
        </div>
      </div>
    </section>
  );
};
