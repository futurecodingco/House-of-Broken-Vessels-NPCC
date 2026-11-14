/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CrisisBanner } from './components/CrisisBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisionSection } from './components/VisionSection';
import { CoreFocusSection } from './components/CoreFocusSection';
import { PartnershipSection } from './components/PartnershipSection';
import { LeadershipSection } from './components/LeadershipSection';
import { SupportSection } from './components/SupportSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPillar, setSelectedPillar] = useState<string>('');

  const scrollToSupport = (pillar?: string) => {
    if (pillar) {
      setSelectedPillar(pillar);
    }
    const element = document.getElementById('support');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B231D] selection:bg-[#EBDDD0] selection:text-[#7A2E1A]">
      {/* South Africa Crisis Helpline & Quick Exit Privacy Banner */}
      <CrisisBanner />

      {/* Strict Top Bar Contract Header */}
      <Navbar onOpenSupport={() => scrollToSupport()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Kintsugi Vessel & Changing Life Ministries Partnership Banner */}
        <Hero onOpenSupport={() => scrollToSupport()} />

        {/* 2. The Vision Snapshot: The Metaphor of the Vessel & Mid Ennerdale Community Purpose */}
        <VisionSection />

        {/* 3. Our Core Focus (Launch Services Roadmap: Safe Spaces, Heart Healing, Life Restoration) */}
        <CoreFocusSection onSelectPillar={(pillarTitle) => scrollToSupport(pillarTitle)} />

        {/* 4. Strategic Partnership Spotlight: Changing Life Ministries */}
        <PartnershipSection />

        {/* 5. Founders & Leadership: Derick Michael Paul Swartz, Leona Cassandra Naude, & Board */}
        <LeadershipSection />

        {/* 6. Connect & Get Support: The Primary Confidential Intake Action */}
        <SupportSection initialPillar={selectedPillar} />

        {/* 7. Physical Sanctuary Location & Transit Directions: 77 Skeleton Street, Mid Ennerdale */}
        <LocationSection />
      </main>

      {/* 8. Legal Footer with Reg No: K2021582044, Partners, and Hotlines */}
      <Footer onOpenSupport={() => scrollToSupport()} />
    </div>
  );
}
