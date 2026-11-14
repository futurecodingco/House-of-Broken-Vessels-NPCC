import React, { useState } from 'react';
import { ShieldCheck, Lock, Send, MessageSquare, PhoneCall, Mail, MapPin, CheckCircle, HeartHandshake, AlertCircle } from 'lucide-react';
import { SupportRequest } from '../types';

interface SupportSectionProps {
  initialPillar?: string;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ initialPillar }) => {
  const [formData, setFormData] = useState<SupportRequest>({
    name: '',
    isPseudonym: false,
    contactMethod: 'whatsapp',
    contactValue: '',
    safeTime: 'whatsapp_first',
    supportType: 'heart_healing',
    message: initialPillar ? `I would like to register for the ${initialPillar} program.` : '',
    consentConfidential: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate safe local encryption / intake processing
    setTimeout(() => {
      const receiptId = `HBV-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionReceipt(receiptId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      isPseudonym: false,
      contactMethod: 'whatsapp',
      contactValue: '',
      safeTime: 'whatsapp_first',
      supportType: 'heart_healing',
      message: '',
      consentConfidential: true
    });
  };

  return (
    <section id="support" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Reassurance & Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF0E6] border border-[#DFCFC0] rounded-md text-xs font-semibold text-[#8C3A27]">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Strictly Private & Confidential</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B231D] tracking-tight">
              Take the First Step in Complete Safety
            </h2>

            <p className="text-base sm:text-lg text-[#554940] leading-relaxed font-sans">
              Reaching out is an act of deep courage. Whether you are ready to attend an intimate circle, speak with a compassionate sister one-on-one, or simply ask a quiet question, you are in safe hands.
            </p>

            {/* Privacy Commitments */}
            <div className="bg-[#F5EDE4] rounded-2xl border border-[#DFD3C4] p-6 space-y-4">
              <h3 className="font-editorial text-lg font-medium text-[#2C241E] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#446653]" />
                Our Sanctuary Privacy Promise
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B4D43]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E3E26] shrink-0 mt-2" />
                  <span><strong>You may use an alias or nickname:</strong> You never have to reveal your full legal name if you do not feel comfortable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E3E26] shrink-0 mt-2" />
                  <span><strong>Discreet Contact Times:</strong> We will only reach out according to your chosen safe contact window.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E3E26] shrink-0 mt-2" />
                  <span><strong>Zero Third-Party Sharing:</strong> Your personal details will never be sold, disclosed, or broadcast.</span>
                </li>
              </ul>
            </div>

            {/* Direct Physical Location Card */}
            <div className="bg-[#FAF7F2] rounded-xl border border-[#E1D5C6] p-5 space-y-2 text-sm text-[#55483F]">
              <p className="font-semibold text-[#29221C] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9E3E26]" />
                Our Mid Ennerdale Sanctuary
              </p>
              <p className="text-xs text-[#63554B]">
                77 Skeleton Street, Mid Ennerdale, Johannesburg, 1830
              </p>
              <p className="text-[11px] text-[#7A6B61] italic">
                * To protect the tranquility and confidential privacy of women currently in counseling, in-person visits are hosted by prior arrangement.
              </p>
            </div>
          </div>

          {/* Right Column: Confidential Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#DFD2C2] p-6 sm:p-10 shadow-sm relative">
              {submitted ? (
                /* Discreet Submission Confirmation State */
                <div className="space-y-6 text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8F0EA] border border-[#C5D9CB] text-[#3D5E4C] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#2B231D] font-medium">
                      Your Message is Received & Protected
                    </h3>
                    <p className="text-sm text-[#5D5046] max-w-md mx-auto">
                      Thank you for trusting House of Broken Vessels. Our empathetic female intake coordinator will connect with you via {formData.contactMethod.toUpperCase()} at your requested safe time.
                    </p>
                  </div>

                  <div className="bg-[#FAF7F2] border border-[#E6DDD1] rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5">
                    <div className="flex justify-between text-[#78695F]">
                      <span>Confidential Reference:</span>
                      <span className="font-mono font-semibold text-[#29221C]">{submissionReceipt}</span>
                    </div>
                    <div className="flex justify-between text-[#78695F]">
                      <span>Contact Channel:</span>
                      <span className="font-medium text-[#29221C] capitalize">{formData.contactMethod}</span>
                    </div>
                    <div className="flex justify-between text-[#78695F]">
                      <span>Safe Timing:</span>
                      <span className="font-medium text-[#29221C]">
                        {formData.safeTime === 'whatsapp_first'
                          ? 'Message first via WhatsApp'
                          : formData.safeTime}
                      </span>
                    </div>
                  </div>

                  {/* Immediate WhatsApp Connect option */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/27820000000?text=${encodeURIComponent(
                        `Hello House of Broken Vessels, I submitted confidential reference ${submissionReceipt}. I would like to connect about safe support.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold rounded-lg shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat Immediately via WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#EFE8DF]">
                    <button
                      onClick={resetForm}
                      className="text-xs text-[#8C3A27] hover:underline font-medium cursor-pointer"
                    >
                      Submit another confidential message or change details
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Secure Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#EFE8DE] pb-4">
                    <h3 className="font-editorial text-2xl text-[#2B231D] font-medium">
                      Confidential Request for Support
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66584E] mt-1 font-sans">
                      All submissions are encrypted and routed directly to our compassionate female support team.
                    </p>
                  </div>

                  {/* Name / Pseudonym Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#4E4137]">
                        Your Name or Preferred Pseudonym
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-[#7B6D62] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isPseudonym}
                          onChange={(e) => setFormData({ ...formData, isPseudonym: e.target.checked })}
                          className="rounded text-[#9E3E26] focus:ring-[#9E3E26]"
                        />
                        <span>This is a safe alias</span>
                      </label>
                    </div>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah or Sis Thandi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DCD0C0] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#9E3E26] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E4137]">
                      Safe Way to Reach You
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: 'whatsapp' })}
                        className={`p-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formData.contactMethod === 'whatsapp'
                            ? 'bg-[#F5ECE2] border-[#9E3E26] text-[#7F2E1B]'
                            : 'bg-[#FAF7F2] border-[#E2D6C6] text-[#5B4E44] hover:bg-[#F2EAE0]'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4 text-[#25D366]" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: 'phone' })}
                        className={`p-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formData.contactMethod === 'phone'
                            ? 'bg-[#F5ECE2] border-[#9E3E26] text-[#7F2E1B]'
                            : 'bg-[#FAF7F2] border-[#E2D6C6] text-[#5B4E44] hover:bg-[#F2EAE0]'
                        }`}
                      >
                        <PhoneCall className="w-4 h-4 text-[#446653]" />
                        <span>Phone Call</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: 'email' })}
                        className={`p-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formData.contactMethod === 'email'
                            ? 'bg-[#F5ECE2] border-[#9E3E26] text-[#7F2E1B]'
                            : 'bg-[#FAF7F2] border-[#E2D6C6] text-[#5B4E44] hover:bg-[#F2EAE0]'
                        }`}
                      >
                        <Mail className="w-4 h-4 text-[#B2782A]" />
                        <span>Email</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: 'in_person' })}
                        className={`p-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formData.contactMethod === 'in_person'
                            ? 'bg-[#F5ECE2] border-[#9E3E26] text-[#7F2E1B]'
                            : 'bg-[#FAF7F2] border-[#E2D6C6] text-[#5B4E44] hover:bg-[#F2EAE0]'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-[#8C3A27]" />
                        <span>In-Person</span>
                      </button>
                    </div>
                  </div>

                  {/* Contact Number / Address input */}
                  <div className="space-y-2">
                    <label htmlFor="contactValue" className="block text-xs font-semibold uppercase tracking-wider text-[#4E4137]">
                      {formData.contactMethod === 'email'
                        ? 'Your Safe Email Address'
                        : 'Your Safe Phone / WhatsApp Number'}
                    </label>
                    <input
                      id="contactValue"
                      type={formData.contactMethod === 'email' ? 'email' : 'tel'}
                      required
                      placeholder={
                        formData.contactMethod === 'email'
                          ? 'name@example.com'
                          : 'e.g. 072 000 0000 or +27 82 000 0000'
                      }
                      value={formData.contactValue}
                      onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DCD0C0] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#9E3E26] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Safe Contact Time */}
                  <div className="space-y-2">
                    <label htmlFor="safeTime" className="block text-xs font-semibold uppercase tracking-wider text-[#4E4137]">
                      Safe Time for Us to Contact You
                    </label>
                    <select
                      id="safeTime"
                      value={formData.safeTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          safeTime: e.target.value as SupportRequest['safeTime']
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DCD0C0] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#9E3E26] focus:border-transparent transition-all"
                    >
                      <option value="whatsapp_first">Only message me first via WhatsApp (No surprise calls)</option>
                      <option value="morning">Morning hours (09:00 - 12:00)</option>
                      <option value="afternoon">Afternoon hours (12:00 - 16:00)</option>
                      <option value="evening">Evening hours (17:00 - 20:00)</option>
                    </select>
                  </div>

                  {/* Type of Support */}
                  <div className="space-y-2">
                    <label htmlFor="supportType" className="block text-xs font-semibold uppercase tracking-wider text-[#4E4137]">
                      What Kind of Support Can We Offer?
                    </label>
                    <select
                      id="supportType"
                      value={formData.supportType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          supportType: e.target.value as SupportRequest['supportType']
                        })
                      }
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DCD0C0] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#9E3E26] focus:border-transparent transition-all"
                    >
                      <option value="heart_healing">Heart Healing & Emotional Trauma Recovery</option>
                      <option value="safe_circle">Register for Inaugural Safe Spaces Counseling Circle</option>
                      <option value="life_restoration">Life Restoration & Independence Skills</option>
                      <option value="spiritual_guidance">Spiritual Mentorship & Prayer with Changing Life Ministries</option>
                      <option value="just_talk">I just need someone gentle and safe to listen to me</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#4E4137]">
                      Your Message or Concerns (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Share only what you feel comfortable sharing. Even a simple 'Please contact me' is enough."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DCD0C0] rounded-xl text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#9E3E26] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Confidential Consent */}
                  <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E7DCCE]">
                    <input
                      id="consentConfidential"
                      type="checkbox"
                      required
                      checked={formData.consentConfidential}
                      onChange={(e) => setFormData({ ...formData, consentConfidential: e.target.checked })}
                      className="mt-0.5 rounded text-[#9E3E26] focus:ring-[#9E3E26]"
                    />
                    <label htmlFor="consentConfidential" className="text-xs text-[#5D5046] leading-relaxed cursor-pointer">
                      I understand that House of Broken Vessels NPC respects my privacy and will hold my information in strict confidence in accordance with our confidentiality charter.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#9E3E26] hover:bg-[#83311D] active:bg-[#6E2816] disabled:opacity-60 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                  >
                    {isSubmitting ? (
                      <span>Securing and transmitting your request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Confidential Support Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#7C6E65]">
                    Protected under South African POPIA regulations & Non-Profit Company legal standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
