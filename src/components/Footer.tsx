import React from 'react';
import { ExternalLink, Heart, Shield, Phone } from 'lucide-react';

interface FooterProps {
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSupport }) => {
  return (
    <footer className="bg-[#241E1A] text-[#EDE6DE] border-t border-[#3A322C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#3E342D]">
          {/* Organization Bio & Legal Entity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#3B3028] border border-[#54453A] flex items-center justify-center text-[#E07A5F]">
                {/* Symbolic restored clay vessel mark */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4h14a1 1 0 0 1 1 1v1c0 3.866-2.686 7.155-6.382 8.01A4.002 4.002 0 0 1 10 18v2h6v2H8v-2h2v-2a4.002 4.002 0 0 1-3.618-3.99C2.686 13.155 0 9.866 0 6V5a1 1 0 0 1 1-1h4zm1 2H2v.5C2 9.54 4.46 12 7.5 12h.71A9.034 9.034 0 0 1 6 6zm10.79 6H17.5c3.04 0 5.5-2.46 5.5-5.5V6h-4.79c-.443 2.37-1.385 4.466-2.42 6zM8 6h8a7.002 7.002 0 0 1-4 6.325A7.002 7.002 0 0 1 8 6z" />
                </svg>
              </div>
              <span className="font-editorial text-xl font-bold tracking-tight text-white">
                House of Broken Vessels NPC
              </span>
            </div>

            <p className="text-sm text-[#BDB0A4] leading-relaxed max-w-md font-sans">
              A registered Non-Profit Company dedicated to healing and restoring the hearts of broken women. Creating protected, compassionate, and judgement-free safe spaces in Mid Ennerdale, South Africa.
            </p>

            {/* Required Legal Information Block */}
            <div className="p-4 bg-[#2C241F] rounded-xl border border-[#443830] text-xs space-y-1.5 text-[#C8BDB2]">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#E07A5F]" />
                Legal Statutory Registration
              </p>
              <p className="font-mono text-[11px] text-[#E5D7CA]">
                House of Broken Vessels NPC | Reg No: <strong>K2021582044</strong>
              </p>
              <p className="text-[11px] text-[#AFA297]">
                77 Skeleton Street, Mid Ennerdale, Johannesburg, 1830, South Africa
              </p>
            </div>
          </div>

          {/* Strategic Alliance Anchor */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07A5F] font-sans">
              Strategic Partner
            </p>
            <h4 className="font-editorial text-lg text-white font-medium">
              Changing Life Ministries
            </h4>
            <p className="text-xs text-[#B5A89C] leading-relaxed">
              Launched in formal partnership to provide pastoral oversight, spiritual grounding, and community-wide emergency assistance across Gauteng.
            </p>
            <a
              href="https://www.changinglifeministries.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E07A5F] hover:text-[#FFA07A] transition-colors underline underline-offset-4"
            >
              <span>www.changinglifeministries.co.za</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07A5F] font-sans">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs text-[#B5A89C]">
              <li>
                <a href="#vision" className="hover:text-white transition-colors">Our Vision</a>
              </li>
              <li>
                <a href="#focus" className="hover:text-white transition-colors">Core Focus Pillars</a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-white transition-colors">Strategic Partnership</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white transition-colors">Founders & Leadership</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Sanctuary Directions</a>
              </li>
              <li>
                <button
                  onClick={onOpenSupport}
                  className="text-left text-[#E07A5F] hover:text-[#FFA07A] font-semibold transition-colors cursor-pointer"
                >
                  Confidential Intake Form
                </button>
              </li>
            </ul>
          </div>

          {/* South Africa Crisis Hotlines */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07A5F] font-sans">
              South Africa Crisis Lines
            </p>
            <div className="space-y-2 text-xs text-[#B5A89C]">
              <div>
                <p className="font-medium text-white">GBV Command Centre</p>
                <a href="tel:0800428428" className="hover:text-amber-200 font-mono text-[11px]">0800 428 428 (24/7)</a>
              </div>
              <div>
                <p className="font-medium text-white">LifeLine South Africa</p>
                <a href="tel:0861322322" className="hover:text-amber-200 font-mono text-[11px]">0861 322 322</a>
              </div>
              <div>
                <p className="font-medium text-white">SADAG Suicide Crisis</p>
                <a href="tel:0800567567" className="hover:text-amber-200 font-mono text-[11px]">0800 567 567</a>
              </div>
              <div>
                <p className="font-medium text-white">SAPS Emergency</p>
                <a href="tel:10111" className="hover:text-amber-200 font-mono text-[11px]">10111</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Confidentiality note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8074]">
          <p>
            © {new Date().getFullYear()} House of Broken Vessels NPC (Reg: K2021582044). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Confidentiality Charter</span>
            <span>·</span>
            <span>POPIA Privacy Protection</span>
            <span>·</span>
            <span>Mid Ennerdale, South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
