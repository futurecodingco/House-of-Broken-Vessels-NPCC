import React, { useState } from 'react';
import { Phone, ShieldAlert, LogOut, ChevronDown, ChevronUp } from 'lucide-react';

export const CrisisBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleQuickExit = () => {
    // Immediate redirect to a neutral, safe website (e.g. Google Search or Weather)
    // and replace history to protect user privacy
    window.location.replace('https://www.google.com/search?q=weather+johannesburg');
  };

  return (
    <aside aria-label="Crisis Helpline and Safety Navigation" className="bg-[#2D2A26] text-[#F3EFEA] text-xs border-b border-[#3E3A35] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Urgent Helpline indicator */}
        <div className="flex items-center gap-2 flex-wrap text-stone-300">
          <div className="flex items-center gap-1.5 text-amber-300 font-medium shrink-0">
            <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Immediate Safety:</span>
          </div>
          <span>In physical crisis? Call SA GBV Command Centre:</span>
          <a
            href="tel:0800428428"
            className="text-white font-semibold underline underline-offset-2 hover:text-amber-200 transition-colors"
          >
            0800 428 428
          </a>
          <span className="hidden md:inline text-stone-500">|</span>
          <span className="hidden md:inline">LifeLine SA:</span>
          <a
            href="tel:0861322322"
            className="hidden md:inline text-white font-medium underline underline-offset-2 hover:text-amber-200 transition-colors"
          >
            0861 322 322
          </a>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px] underline underline-offset-2 transition-colors ml-1 cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Less crisis lines' : 'More SA hotlines'}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Quick Exit Privacy Protection Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleQuickExit}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#8C3A27] hover:bg-[#A84530] text-white font-medium rounded transition-colors text-xs shadow-sm cursor-pointer"
            title="Quickly exit this site to Google Weather for your safety and privacy"
          >
            <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Quick Safe Exit</span>
          </button>
        </div>
      </div>

      {/* Expandable full hotline directory */}
      {isExpanded && (
        <div className="bg-[#23201D] border-t border-[#3E3A35] px-4 sm:px-6 lg:px-8 py-3 text-stone-300 text-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <p className="font-semibold text-white">SA Police Service (SAPS)</p>
              <p className="text-stone-400">Emergency Response</p>
              <a href="tel:10111" className="text-amber-300 hover:underline font-mono">10111</a>
            </div>
            <div>
              <p className="font-semibold text-white">GBV Command Centre</p>
              <p className="text-stone-400">Toll-free 24/7 or *120*7867#</p>
              <a href="tel:0800428428" className="text-amber-300 hover:underline font-mono">0800 428 428</a>
            </div>
            <div>
              <p className="font-semibold text-white">SADAG Mental Health</p>
              <p className="text-stone-400">Suicide & Crisis Helpline</p>
              <a href="tel:0800567567" className="text-amber-300 hover:underline font-mono">0800 567 567</a>
            </div>
            <div>
              <p className="font-semibold text-white">Tears Foundation</p>
              <p className="text-stone-400">GBV Free USSD Support</p>
              <span className="text-amber-300 font-mono">*134*7355#</span>
            </div>
          </div>
          <p className="text-[11px] text-stone-400 mt-2 italic">
            * House of Broken Vessels is a restorative counseling sanctuary. If you are experiencing an active emergency or immediate domestic violence, please reach out directly to the emergency services above.
          </p>
        </div>
      )}
    </aside>
  );
};
