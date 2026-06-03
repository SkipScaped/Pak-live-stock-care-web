import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Languages, Volume2, Sparkles, AlertCircle, Heart } from 'lucide-react';

interface LocalizedMessage {
  id: string;
  enTitle: string;
  urTitle: string;
  enBody: string;
  urBody: string;
  enLabel: string;
  urLabel: string;
  time: string;
}

const SAMPLE_ALERTS: LocalizedMessage[] = [
  {
    id: "alert-1",
    enTitle: "AI Herd Alert",
    urTitle: "مصنوعی ذہانت الرٹ",
    enBody: "Keep the lactating cows sheltered during high humidity hours to prevent heat distress.",
    urBody: "شدید حبس کے دوران دودھ دینے والی گایوں کو ہیٹ اسٹروک سے بچانے کے لیے سائے دار جگہ پر رکھیں۔",
    enLabel: "AI Health Monitor",
    urLabel: "صحت کی نگرانی",
    time: "2 mins ago"
  },
  {
    id: "alert-2",
    enTitle: "Vaccination Reminder",
    urTitle: "حفاظتی ٹیکوں کی یاد دہانی",
    enBody: "Your cattle (Tag PK-208) is scheduled for Foot and Mouth Disease (FMD) vaccine booster within 4 days.",
    urBody: "آپ کے مویشی (ٹیگ PK-208) کو ۴ دن کے اندر منہ کھر کی بیماری کے حفاظتی ٹیکے لگنا لازمی ہیں۔",
    enLabel: "Govt Vaccine Cycle",
    urLabel: "سرکاری شیڈول",
    time: "Today"
  },
  {
    id: "alert-3",
    enTitle: "Milk Analytics Yield Peak",
    urTitle: "دودھ کی پیداوار کے اعداد و شمار",
    enBody: "Sargodha breed showed a peak yield of 28.5 Liters today. Recommend premium wheat straw ratio adjustment.",
    urBody: "سرگودھا نسل نے آج 28.5 لیٹر دودھ کی ریکارڈ پیداوار دی ہے۔ گندم کے بھوسے کا راشن بڑھانے کی تجویز ہے۔",
    enLabel: "Production optimization",
    urLabel: "دودھ کی پیداوار",
    time: "Yesterday"
  }
];

export default function LanguageTogglePreview() {
  const [lang, setLang] = useState<'en' | 'ur'>('ur');
  const [activeAlertIndex, setActiveAlertIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeMessage = SAMPLE_ALERTS[activeAlertIndex];

  // Simple simulated text-to-speech feedback
  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 2500);
  };

  return (
    <section id="language-preview" className="py-20 bg-emerald-950 text-white relative overflow-hidden border-t border-emerald-900 border-b border-emerald-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15),transparent_70%)]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Explanatory Copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 px-3 py-1 text-xs font-mono rounded-full">
              <Languages className="h-3.5 w-3.5" />
              <span>Broadening Agriculture Accessibility</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
              Bridging Language Gaps for Regional Farmers.
            </h2>
            <p className="text-emerald-250 text-sm sm:text-md leading-relaxed font-sans">
              Agritech becomes robust only when it speaks local languages. Pak LiveStock Care is completely translatable. Switch instantly between English and Urdu with simple toggles, plus integrated regional Urdu audio translation scripts to help every farmer understand essential diagnostics easily.
            </p>

            {/* Quick Feature highlights */}
            <div className="grid grid-cols-2 gap-4 text-left pt-4">
              <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800">
                <p className="text-xs font-bold text-amber-300 font-mono">100% RTL URDU SUPPORT</p>
                <p className="text-[11px] text-emerald-200 mt-1">Natively designed screens using localized fonts for absolute readability.</p>
              </div>
              <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-800">
                <p className="text-xs font-bold text-emerald-300 font-mono">AUDIO TRANSLATIONS</p>
                <p className="text-[11px] text-emerald-200 mt-1">Play audio read-outs of diagnostic health cards for low-literacy farmers.</p>
              </div>
            </div>

            {/* Simulated Language Switcher trigger button */}
            <div className="flex justify-center lg:justify-start pt-3">
              <div className="bg-emerald-900/80 border border-emerald-800 p-1.5 rounded-full inline-flex gap-1.5">
                <button
                  onClick={() => setLang('en')}
                  className={`px-5 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-amber-500 text-emerald-950 shadow-md'
                      : 'text-emerald-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('ur')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold font-urdu transition-all cursor-pointer ${
                    lang === 'ur'
                      ? 'bg-amber-500 text-emerald-950 shadow-md font-bold'
                      : 'text-emerald-300 hover:text-white'
                  }`}
                >
                  اردو (Urdu)
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Translation Device Frame Preview */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center">
            
            {/* The Outer Device Container Card */}
            <div className="bg-slate-900/90 border border-emerald-800 p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-xl backdrop-blur-md">
              
              {/* Header inside the simulator */}
              <div className="flex justify-between items-center border-b border-emerald-900 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-700">
                    <Globe className="h-4.5 w-4.5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-tight text-white flex items-center gap-1">
                      Interactive Screen Translation Preview 
                    </h3>
                    <p className="text-[10px] text-zinc-400 font-mono">Language Controller simulation</p>
                  </div>
                </div>

                {/* active status indicator list */}
                <div className="flex gap-1.5">
                  {SAMPLE_ALERTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveAlertIndex(idx);
                      }}
                      className={`w-7 py-1 text-[10px] rounded font-semibold font-mono ${
                        activeAlertIndex === idx
                          ? 'bg-amber-550 text-emerald-950 bg-amber-500'
                          : 'bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-850 text-emerald-300'
                      }`}
                      aria-label={`Demo Card ${idx + 1}`}
                    >
                      #0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* The Display Box - Animates during language state change */}
              <div className="min-h-[170px] flex flex-col justify-between" id="translation_viewport">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${lang}-${activeAlertIndex}`}
                    initial={{ opacity: 0, scale: 0.98, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className={`bg-slate-950 border border-emerald-800/80 p-5 rounded-2xl flex flex-col justify-between gap-5 relative overflow-hidden ${
                      lang === 'ur' ? 'text-right' : 'text-left'
                    }`}
                  >
                    
                    {/* Watermark Sprout */}
                    <div className={`absolute -right-6 -bottom-6 w-20 h-20 opacity-5 text-emerald-400 ${
                      lang === 'ur' ? 'right-auto -left-6' : '-right-6'
                    }`}>
                      <Sparkles className="w-full h-full" />
                    </div>

                    <div className="space-y-3">
                      {/* Badge and Time */}
                      <div className={`flex items-center justify-between gap-2 border-b border-emerald-950 pb-2 ${
                        lang === 'ur' ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <span className="text-[9px] font-mono font-bold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-2 py-0.5 rounded-full">
                          {lang === 'en' ? activeMessage.enLabel : activeMessage.urLabel}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1 select-none">
                          <AlertCircle className="w-3 h-3 text-emerald-500" />
                          {activeMessage.time}
                        </span>
                      </div>

                      {/* Content Title */}
                      <h4 className={`text-md font-bold text-white tracking-tight ${
                        lang === 'ur' ? 'font-urdu text-lg leading-relaxed pt-1' : 'font-display'
                      }`}>
                        {lang === 'en' ? activeMessage.enTitle : activeMessage.urTitle}
                      </h4>

                      {/* Content Body Text */}
                      <p className={`text-xs sm:text-sm text-emerald-100/90 leading-relaxed ${
                        lang === 'ur' ? 'font-urdu text-base leading-loose pt-1' : 'font-sans pt-0.5'
                      }`}>
                        {lang === 'en' ? activeMessage.enBody : activeMessage.urBody}
                      </p>
                    </div>

                    {/* Audio reader simulation bar */}
                    <div className={`flex items-center gap-3 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-900 mt-2 ${
                      lang === 'ur' ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      <button
                        onClick={handlePlayAudio}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                          isPlayingAudio
                            ? 'bg-amber-500 text-emerald-950 animate-pulse'
                            : 'bg-emerald-900 border border-emerald-800 text-amber-300 hover:text-white hover:bg-emerald-800'
                        }`}
                        id="play_simulate_audio_btn"
                        title="Simulate Audio Translation Speech"
                      >
                        <Volume2 className={`h-4.5 w-4.5 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                      </button>
                      <div className={`flex-1 text-xs text-left ${lang === 'ur' ? 'text-right' : ''}`}>
                        <p className="font-semibold text-white">
                          {lang === 'en' ? "Simulated Audio Guide" : "آڈیو گائیڈ کی آواز"}
                        </p>
                        <p className="text-[10px] text-zinc-400 font-mono">
                          {isPlayingAudio 
                            ? (lang === 'en' ? "♪ Playing Urdu diagnostic voice guide..." : "♪ ساہیوال گائے کی صحت کا آڈیو پیغام جاری ہے...")
                            : (lang === 'en' ? "Tap speaker to read livestock warning aloud." : "مویشیوں کی الرٹ آواز میں سننے کے لیے بٹن دبائیں۔")}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Interactive Notice */}
              <div className="mt-5 text-center">
                <span className="text-[10px] text-zinc-400 font-mono bg-zinc-950 p-2 rounded-lg border border-zinc-850 inline-block">
                  🔀 Try switching back and forth between <strong>English</strong> and <strong>Urdu</strong> above!
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
