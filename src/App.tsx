/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle, Info, Heart, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LanguageTogglePreview from './components/LanguageTogglePreview';
import Footer from './components/Footer';
import { WaitlistEntry } from './types';

// Structured FAQ items to increase user confidence & explain the waitlist structure
interface FaqItem {
  q: string;
  urQ?: string;
  a: string;
  urA?: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Is 'Pak LiveStock Care' completely free?",
    urQ: "کیا یہ ایپ مکمل طور پر مفت ہے؟",
    a: "Yes. There are no paywalls, premium updates, or hidden transaction commissions anywhere in the software.",
    urA: "جی ہاں! یہ ایپ اپاچی لائسنس کے تحت بالکل مفت ہے۔ اس میں کوئی چارجز، اشتہارات یا خفیہ فیس شامل نہیں کی جائے گی۔"
  },
  {
    q: "How does the AI disease detection work offline?",
    urQ: "کیا یہ ایپ بغیر انٹرنیٹ (آف لائن) کام کر سکے گی؟",
    a: "The mobile app embeds a lightweight, highly optimized on-device deep learning framework. This compiles key indicators like heat stress levels and vaccination calendars inside the device without needing persistent 4G cellular networks.",
    urA: "جی ہاں، ایپ آف لائن موڈ کو مدنظر رکھتے ہوئے تیار کی جا رہی ہے۔ ضروری معلومات، ریکارڈ اور دیسی علاج کے ڈیٹا بیس بغیر انٹرنیٹ کے بھی آپ کے فون پر چلیں گے۔"
  },
  {
    q: "Can veterinarians utilize this platform?",
    urQ: "کیا ڈاکٹر حضرات بھی اس کا حصہ بن سکتے ہیں؟",
    a: "Absolutely. Verified veterinary doctors can register in the clinic index. This gives local cattle farmers immediate digital lookup routes to schedule checkups or telephone support, enhancing regional animal healthcare.",
    urA: "بالکل! مستند ڈاکٹرز اس پلیٹ فارم پر بطور فزیشن لسٹنگ حاصل کر سکیں گے تاکہ ضرورت پڑنے پر کسان براہِ راست ان سے ٹیلیفون، واٹس ایپ یا وڈیو کال پر رابطہ کر سکیں۔"
  }
];

export default function App() {
  const [registeredUser, setRegisteredUser] = useState<WaitlistEntry | null>(null);
  const [totalWaitlistCount, setTotalWaitlistCount] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sync state with localStorage on mount to persist waitlist status
  useEffect(() => {
    try {
      const cached = localStorage.getItem('pak_livestock_waitlist_user');
      if (cached) {
        setRegisteredUser(JSON.parse(cached));
      }

      const count = localStorage.getItem('pak_livestock_total_count');
      if (count) {
        setTotalWaitlistCount(parseInt(count, 10));
      } else {
        // Random standard starting value
        const initialCount = Math.floor(Math.random() * 45) + 38;
        setTotalWaitlistCount(initialCount);
        localStorage.setItem('pak_livestock_total_count', initialCount.toString());
      }
    } catch (e) {
      console.error('Error syncing localStorage state:', e);
    }
  }, []);

  // Handle a new waitlist registration
  const handleJoinWaitlist = (email: string, role: string, location: string) => {
    const newCount = totalWaitlistCount + 1;
    const entry: WaitlistEntry = {
      email,
      timestamp: new Date().toISOString(),
      position: newCount,
      role: role as any,
      location
    };

    try {
      localStorage.setItem('pak_livestock_waitlist_user', JSON.stringify(entry));
      localStorage.setItem('pak_livestock_total_count', newCount.toString());
    } catch (e) {
      console.error('Error saving waitlist state:', e);
    }

    setRegisteredUser(entry);
    setTotalWaitlistCount(newCount);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth selection:bg-emerald-200">
      
      {/* Top sticky nav */}
      <Header waitlistCount={totalWaitlistCount} />

      <main>
        {/* Hero Section + Waitlist CTA Form */}
        <Hero
          onJoinWaitlist={handleJoinWaitlist}
          registeredUser={registeredUser}
          totalCount={totalWaitlistCount}
        />

        {/* 3-Column Agri-Tech Features Grid */}
        <Features />

        {/* Dual Language English / Urdu interactive preview device */}
        <LanguageTogglePreview />

        {/* Localized FAQ Section */}
        <section id="faq" className="py-20 bg-slate-100 border-t border-b border-slate-150">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center mb-12">
              <span className="text-emerald-700 font-mono text-xs uppercase tracking-widest font-bold bg-emerald-50 px-3 py-1.5 rounded-full inline-block mb-3">
                Common Questions / اکثر پوچھے گئے سوالات
              </span>
              <h2 className="font-display font-extrabold text-2.5xl sm:text-3.5xl text-emerald-950 tracking-tight leading-none">
                Frequently Asked Inquiries
              </h2>
              <p className="text-slate-650 text-xs sm:text-sm mt-3">
                Everything you need to understand regarding the release timeline, diagnostic accuracy, and community roadmap.
              </p>
            </div>

            {/* Accordion Questions */}
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-emerald-200 shadow-md ring-1 ring-emerald-500/10'
                        : 'border-slate-150 shadow-sm hover:border-emerald-100'
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-4 sm:py-5 flex items-start justify-between gap-4 cursor-pointer"
                      id={`faq-btn-${idx}`}
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1 pr-2">
                        <p className="font-display font-bold text-sm sm:text-md text-emerald-950 leading-snug">
                          {faq.q}
                        </p>
                        <p className="text-[11px] font-medium font-urdu text-amber-700">
                          {faq.urQ}
                        </p>
                      </div>
                      <div className="text-slate-400 mt-1 shrink-0 bg-slate-50 border border-slate-100 p-1 rounded-lg">
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </button>

                    {/* Accordion Content Panel */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 border-t border-slate-100/50 pt-4 bg-emerald-50/15 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-650">
                            <div>
                              <p className="font-medium text-slate-700">{faq.a}</p>
                            </div>
                            <div className="border-l-2 border-emerald-500 pl-3 py-1 bg-emerald-100/20 rounded-r-lg">
                              <p className="text-xs font-urdu font-medium text-emerald-900 leading-loose rtl">
                                {faq.urA}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Quick callout inside section */}
            <div className="mt-12 bg-white border border-slate-150 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center shrink-0 border border-amber-200">
                <Info className="h-5.5 w-5.5" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-display font-bold text-sm text-emerald-950">
                  Are you an Agricultural researcher, public institution or DVM Doctor?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  I seek strategic collaborations to review clinical checklists. Send an email to contact@paklivestockcare.org.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Project About Background Context */}
        <section id="about" className="py-20 bg-emerald-950 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-amber-500 font-mono text-xs uppercase tracking-wider font-bold block mb-2">
                  Grassroots Agritech Evolution
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                  Strengthening Cattle Keepers Nationwide.
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-sans">
                  <p>
                    Livestock accounts for over 60% of Pakistan's total agricultural sector and contributes roughly 11% to the global national GDP. Yet millions of rural smallholders run herding configurations without digital medical index files, milk logging cycles, or verified clinic availability.
                  </p>
                  <p>
                    <strong>Pak LiveStock Care</strong> is drafted precisely to dismantle these communication barriers. By embedding local wisdom with highly refined predictive analytics checklists, I help farmers prevent catastrophic disease outbreaks, manage herd reproduction, and elevate milk sales.
                  </p>
                </div>
              </div>

              {/* Graphical card representing local statistics Punjab, Sindh, KPK, Balochistan */}
              <div className="bg-slate-900 border border-emerald-800 p-6 rounded-2xl space-y-4 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider font-mono border-b border-emerald-950 pb-2">
                  Target Demographics Tracker
                </h3>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono">
                      <span className="text-emerald-350">Punjab Zone (Sargodha, Multan, Jhang)</span>
                      <span className="text-amber-400 font-bold">52% Engagement Goal</span>
                    </div>
                    <div className="w-full bg-emerald-990 h-2 rounded-full overflow-hidden border border-emerald-950">
                      <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full" style={{ width: '52%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono">
                      <span className="text-emerald-350">Sindh Zone (Hyderabad, Sukkur)</span>
                      <span className="text-amber-400 font-bold">28% Engagement Goal</span>
                    </div>
                    <div className="w-full bg-emerald-990 h-2 rounded-full overflow-hidden border border-emerald-950">
                      <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full" style={{ width: '28%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono">
                      <span className="text-emerald-350">KPK & Balochistan Mountain Zones</span>
                      <span className="text-amber-400 font-bold">20% Engagement Goal</span>
                    </div>
                    <div className="w-full bg-emerald-990 h-2 rounded-full overflow-hidden border border-emerald-950">
                      <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full" style={{ width: '20%' }} />
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-950 p-3 rounded-xl border border-emerald-900 flex gap-2 text-[11px] text-emerald-200">
                  <span className="text-amber-400 font-bold">INFO:</span>
                  <span>My goal is to reach 10,000 active livestock farmers across major agro-ecological zones within the initial 6 months post public launch.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Repeated Footer with signup option */}
      <Footer onJoinWaitlist={handleJoinWaitlist} registeredUser={registeredUser} />

    </div>
  );
}
