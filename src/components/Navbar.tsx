import React, { useState } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSupport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (one line, display face) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A84530] rounded-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF0E6] border border-[#DECFBD] flex items-center justify-center text-[#9E3E26] shadow-xs group-hover:border-[#9E3E26] transition-colors">
              {/* Symbolic stylized clay vessel icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h14a1 1 0 0 1 1 1v1c0 3.866-2.686 7.155-6.382 8.01A4.002 4.002 0 0 1 10 18v2h6v2H8v-2h2v-2a4.002 4.002 0 0 1-3.618-3.99C2.686 13.155 0 9.866 0 6V5a1 1 0 0 1 1-1h4zm1 2H2v.5C2 9.54 4.46 12 7.5 12h.71A9.034 9.034 0 0 1 6 6zm10.79 6H17.5c3.04 0 5.5-2.46 5.5-5.5V6h-4.79c-.443 2.37-1.385 4.466-2.42 6zM8 6h8a7.002 7.002 0 0 1-4 6.325A7.002 7.002 0 0 1 8 6z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#2B231D]">
                House of Broken Vessels
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#7C6E65] font-sans font-medium">
                NPC · Reg: K2021582044
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#574C43]">
            <a
              href="#vision"
              className="hover:text-[#9E3E26] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-4"
            >
              Our Vision
            </a>
            <a
              href="#focus"
              className="hover:text-[#9E3E26] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-4"
            >
              Core Focus
            </a>
            <a
              href="#partnership"
              className="hover:text-[#9E3E26] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-4"
            >
              Strategic Partner
            </a>
            <a
              href="#leadership"
              className="hover:text-[#9E3E26] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-4"
            >
              Leadership
            </a>
            <a
              href="#location"
              className="hover:text-[#9E3E26] transition-colors whitespace-nowrap shrink-0 hover:underline hover:underline-offset-4"
            >
              Sanctuary
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSupport}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#9E3E26] hover:bg-[#83311D] active:bg-[#6E2816] rounded-md transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4" aria-hidden="true" />
              <span>Connect Confidentially</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#574C43] hover:text-[#2B231D] hover:bg-[#F0E9DF] rounded-md transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E7DFD5] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#463D36]">
            <a
              href="#vision"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE1] transition-colors"
            >
              Our Vision
            </a>
            <a
              href="#focus"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE1] transition-colors"
            >
              Core Focus Pillars
            </a>
            <a
              href="#partnership"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE1] transition-colors"
            >
              Changing Life Ministries Partnership
            </a>
            <a
              href="#leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE1] transition-colors"
            >
              Founders & Leadership
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE1] transition-colors"
            >
              Mid Ennerdale Sanctuary
            </a>
          </nav>
          <div className="pt-3 border-t border-[#E7DFD5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#9E3E26] hover:bg-[#83311D] rounded-md transition-colors cursor-pointer"
            >
              Request Safe Support
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
