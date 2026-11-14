import React from 'react';
import { Shield, Heart, Award, Users, MapPin } from 'lucide-react';
import { LeadershipMember } from '../types';

export const LeadershipSection: React.FC = () => {
  const leaders: LeadershipMember[] = [
    {
      name: 'Derick Michael Paul Swartz',
      role: 'Director & Community Restoration Advocate',
      credentials: 'Founding Director · House of Broken Vessels NPC',
      bio: 'Derick brings a relentless dedication to grassroots community empowerment across Gauteng. Recognizing the devastating toll that domestic breakdown and emotional isolation inflict on vulnerable women and children in Mid Ennerdale, he championed the legal establishment of House of Broken Vessels to ensure Ennerdale has an enduring, secure sanctuary backed by institutional integrity.',
      quote:
        'No woman in Mid Ennerdale should ever have to believe her suffering is unseen, or that brokenness is the final chapter of her story. We built this foundation to stand with you.'
    },
    {
      name: 'Leona Cassandra Naude',
      role: 'Director & Heart Restoration Lead',
      credentials: 'Founding Director · Trauma & Circle Facilitation Lead',
      bio: 'Leona leads the empathetic and restorative vision of House of Broken Vessels. With deep compassionate insight into women’s emotional healing, trauma recovery, and spiritual renewal, she oversees the design of our confidential counseling circles and personal debriefing frameworks. Her mission is to replace shame and grief with dignity and unstoppable hope.',
      quote:
        'When a woman mends her heart, she restores her family and inspires an entire community. Here, every tear is met with tenderness, and every broken vessel is given room to heal.'
    }
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-[#9E3E26] font-semibold font-sans">
            Governance & Heart
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B231D] mt-2 tracking-tight">
            Founders & Leadership
          </h2>
          <p className="text-base sm:text-lg text-[#554940] mt-4 leading-relaxed font-sans">
            House of Broken Vessels NPC is led by visionary servants dedicated to ethical governance, compassionate mentorship, and lasting community transformation in Mid Ennerdale and the wider Gauteng region.
          </p>
        </div>

        {/* Directors Profiles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-[#F6EFEB] border border-[#DFD3C4] rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md"
            >
              <div className="space-y-5">
                {/* Director Avatar / Monogram Lockup */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#EBDDD0] border border-[#D5C2B1] flex items-center justify-center text-[#7F321E] font-editorial text-xl font-bold shadow-xs">
                    {leader.name
                      .split(' ')
                      .filter((n) => !['Michael', 'Paul', 'Cassandra'].includes(n))
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#29221C]">
                      {leader.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#8C3A27] font-sans font-semibold mt-0.5">
                      {leader.role}
                    </p>
                    <p className="text-[11px] text-[#7A6B60] mt-0.5 font-sans">
                      {leader.credentials}
                    </p>
                  </div>
                </div>

                {/* Bio Prose */}
                <p className="text-sm sm:text-base text-[#4E4137] leading-relaxed">
                  {leader.bio}
                </p>

                {/* Director Personal Quote */}
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E2D5C6]">
                  <p className="font-editorial italic text-xs sm:text-sm text-[#3E332B] leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Registration & Legal Alignment */}
              <div className="mt-6 pt-4 border-t border-[#E3D6C7] flex items-center justify-between text-xs text-[#706156]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5 text-[#446653]" />
                  Fiduciary Director
                </span>
                <span className="font-mono text-[11px]">NPC K2021582044</span>
              </div>
            </div>
          ))}
        </div>

        {/* Board of Governance & Community Commitment Banner */}
        <div className="mt-14 bg-[#F2EDE4] rounded-2xl border border-[#DCCEC0] p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E3E26]">
                <Users className="w-4 h-4" />
                <span>Board Governance & Advisory Council</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#2B231D] font-medium">
                Our Commitment to Gauteng & Ennerdale
              </h3>
              <p className="text-sm sm:text-base text-[#52463D] leading-relaxed">
                As a registered Non-Profit Company under the Companies Act of South Africa, our board upholds strict fiduciary oversight, transparent record-keeping, and moral accountability. Every initiative is guided by community elders, pastoral advisors from Changing Life Ministries, and healthcare advocates to ensure safe, ethical stewardship of every life entrusted to us.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#63554B]">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#9E3E26]" />
                  77 Skeleton Street, Mid Ennerdale, 1830
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-3.5 h-3.5 text-[#3D5E4C]" />
                  Companies and Intellectual Property Commission (CIPC) Compliant
                </span>
              </div>
            </div>

            {/* Gauteng Dawn Landscape Image */}
            <div className="lg:col-span-4 overflow-hidden rounded-xl border border-[#D5C6B6] shadow-sm">
              <img
                src="/src/assets/images/ennerdale_landscape_hope_1793870284226.jpg"
                alt="Golden sunrise over the rolling hills of Gauteng symbolizing a new dawn for women in Mid Ennerdale"
                className="w-full h-48 sm:h-56 object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-3 bg-[#FAF7F2] border-t border-[#E5DACD] text-center">
                <p className="text-xs font-medium text-[#3D332B]">
                  A New Dawn for Mid Ennerdale
                </p>
                <p className="text-[11px] text-[#7B6D62] mt-0.5">
                  Restoring lives across Gauteng, one heart at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
