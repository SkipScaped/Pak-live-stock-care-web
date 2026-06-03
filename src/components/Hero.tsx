import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Sparkles,
  ArrowRight,
  TrendingUp,
  MapPin,
  Activity,
  CheckCircle,
  Smartphone,
  Shield,
  Clock,
  Heart,
  Droplet
} from 'lucide-react';
import { WaitlistEntry } from '../types';

interface HeroProps {
  onJoinWaitlist: (email: string, role: string, location: string) => void;
  registeredUser: WaitlistEntry | null;
  totalCount: number;
}

// Pakistani districts/cities for form personalization
const PAKISTAN_REGIONS = [
  'Sargodha, Punjab',
  'Multan, Punjab',
  'Bahawalpur, Punjab',
  'Lahore, Punjab',
  'Faizalabad, Punjab',
  'Jhang, Punjab',
  'Sahiwal, Punjab',
  'Sukkur, Sindh',
  'Hyderabad, Sindh',
  'Mirpur Khas, Sindh',
  'Peshawar, KPK',
  'Mardan, KPK',
  'Swat, KPK',
  'Quetta, Balochistan',
  'Khuzdar, Balochistan',
  'Gilgit, Gilgit-Baltistan',
  'Muzaffarabad, Azad Kashmir',
  'Other / Islamabad'
];

export default function Hero({ onJoinWaitlist, registeredUser, totalCount }: HeroProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('farmer');
  const [location, setLocation] = useState('Multan, Punjab');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'health' | 'milk' | 'vet'>('health');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    onJoinWaitlist(email, role, location);
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-radial from-emerald-900 via-emerald-950 to-slate-950 text-white border-b border-emerald-900"
    >
      {/* Decorative Agri Background Vectors */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(4,120,87,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(4,120,87,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Animated Smart Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-1.5 bg-emerald-900/60 border border-emerald-700/50 text-amber-300 px-3 py-1.5 rounded-full text-xs font-mono mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
              <span>Free, Open-Source & AI-Driven for Pakistan</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-3.5xl sm:text-5xl lg:text-[54px] leading-[1.1] text-white tracking-tight mb-4"
              id="hero_headline"
            >
              The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300">Livestock Management</span> in Pakistan.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-emerald-100/90 text-md sm:text-lg max-w-xl mb-8 leading-relaxed font-sans"
            >
              Empowering farmers with AI herd monitoring, daily milk yield analytics, and instant local veterinary indexing. Available in English & Urdu to foster healthy herds and maximize regional agricultural profits.
            </motion.p>

            {/* CTA & Waitlist Form Component */}
            <div className="bg-emerald-950/60 border border-emerald-800/80 p-6 rounded-2xl max-w-xl shadow-xl backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {!registeredUser ? (
                  <motion.form
                    key="signup-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    id="waitlist-form"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-mono mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Join the Waitlist for Early Beta Access
                    </h3>

                    {/* Email Input */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email-input"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-emerald-950 border border-emerald-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3.5 text-white placeholder-emerald-600/70 text-sm focus:outline-none transition-all duration-200"
                      />
                      {errorMsg && (
                        <p className="text-red-400 text-xs mt-1 absolute left-2">{errorMsg}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {/* Role Selector */}
                      <div>
                        <label htmlFor="role-select" className="block text-[11px] text-emerald-300 uppercase font-mono font-medium mb-1">
                          Target Categories
                        </label>
                        <select
                          id="role-select"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full bg-emerald-950 border border-emerald-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                        >
                          <option value="farmer">Livestock Farmer</option>
                          <option value="agri-entrepreneur">Agri-Entrepreneur</option>
                          <option value="veterinarian">Veterinarian / Doctor</option>
                          <option value="developer">Open Source Contributor</option>
                          <option value="other">Agricultural Student / Other</option>
                        </select>
                      </div>

                      {/* District Picker */}
                      <div>
                        <label htmlFor="location-select" className="block text-[11px] text-emerald-300 uppercase font-mono font-medium mb-1">
                          Agricultural Region
                        </label>
                        <select
                          id="location-select"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full bg-emerald-950 border border-emerald-850 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                        >
                          {PAKISTAN_REGIONS.map((reg) => (
                            <option key={reg} value={reg}>
                              {reg}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        id="cta_submit_btn"
                        className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                      >
                        <span>Activate Free Early Access</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <a
                        href="https://github.com/SkipScaped/Pak-LiveStock-Care-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-900/40 hover:bg-emerald-900 border border-emerald-800 text-white font-semibold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                        id="hero_secondary_github_btn"
                      >
                        <Github className="h-4 w-4" />
                        <span>View Source</span>
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 text-center space-y-4"
                  >
                    <div className="inline-flex p-3 bg-amber-500/20 text-amber-400 rounded-full mb-1">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-xl text-amber-300">
                        خوش آمدید / You're on the Waitlist!
                      </h4>
                      <p className="text-emerald-200 text-xs mt-1 font-sans">
                        Thank you for registering. You are helping shape local Agri-Tech open source models!
                      </p>
                    </div>

                    <div className="bg-emerald-900/50 p-4 rounded-xl border border-emerald-800 text-left text-xs space-y-2">
                      <div className="flex justify-between border-b border-emerald-800/50 pb-1.5 font-mono">
                        <span className="text-emerald-400">Registered Email:</span>
                        <span className="text-white font-medium">{registeredUser.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-800/50 pb-1.5 font-mono">
                        <span className="text-emerald-400">Your Segment:</span>
                        <span className="text-white capitalize">{registeredUser.role}</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-800/50 pb-1.5 font-mono">
                        <span className="text-emerald-400">Agri Location:</span>
                        <span className="text-white">{registeredUser.location}</span>
                      </div>
                      <div className="flex justify-between pt-1 font-mono text-amber-300">
                        <span>Your Queue Position:</span>
                        <span className="font-bold">#{registeredUser.position + 342}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-emerald-400 italic">
                      I've reserved your spot. I will email you with credentials when public testing is live.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Trust proof / Stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-emerald-300 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>100% Free Public Software</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Supports Urdu Audio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Active 14 Districts</span>
              </div>
            </div>
          </div>

          {/* Right Column - Beautiful interactive high-fidelity Mobile Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
              
              {/* Phone Frame wrapper background shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-emerald-500/20 rounded-[44px] blur-2xl transform rotate-3" />

              {/* Physical phone outline */}
              <div className="relative bg-emerald-950 border-[6px] border-emerald-800 rounded-[40px] shadow-2xl overflow-hidden aspect-[9/19.5] flex flex-col justify-between">
                
                {/* Physical Notch */}
                <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-30">
                  <div className="bg-black w-24 h-4 rounded-b-xl flex items-center justify-between px-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    <div className="w-8 h-1 rounded-full bg-zinc-850" />
                  </div>
                </div>

                {/* Simulated Screen Body */}
                <div className="relative flex-1 bg-slate-900 pt-6 px-3 flex flex-col justify-between">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-emerald-400 font-mono px-1 py-1">
                    <span>9:41 AM</span>
                    <div className="flex items-center gap-1">
                      <Activity className="h-2.5 w-2.5 text-amber-400 animate-pulse" />
                      <span>PakLive v1.02</span>
                    </div>
                  </div>

                  {/* Dynamic Interactive Content based on selected layout Tab */}
                  <div className="flex-1 overflow-hidden mt-2 flex flex-col justify-between pb-2">
                    
                    {/* Header bar inside mock-app */}
                    <div className="bg-slate-950/80 border border-emerald-900 p-2.5 rounded-xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 bg-emerald-500/20 border border-emerald-600 rounded flex items-center justify-center">
                          <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white tracking-tight">پاک لائیو سٹاک کیئر</p>
                          <p className="text-[8px] text-emerald-300 font-mono font-medium -mt-1">Multan Hub</p>
                        </div>
                      </div>
                      <span className="text-[8px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider font-mono">
                        AI LIVE
                      </span>
                    </div>

                    {/* App SCREEN Tab Viewports */}
                    <div className="flex-1 flex flex-col justify-center my-3 relative h-[240px]">
                      <AnimatePresence mode="wait">
                        {activeTab === 'health' && (
                          <motion.div
                            key="health-tab"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-slate-950 border border-emerald-800 p-3 rounded-xl space-y-2.5 h-full flex flex-col justify-between"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] text-slate-400">Tag ID: PK-982-Saffron</span>
                              <span className="text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-850 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                                Active Watch
                              </span>
                            </div>

                            {/* Cow Mockup Display inside screen */}
                            <div className="bg-gradient-to-r from-emerald-950 to-slate-900 border border-slate-850 p-2.5 rounded-lg flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="text-xs font-bold text-emerald-100 font-display">Sahiwal Cow</p>
                                <p className="text-[9px] text-emerald-400">Lactating Phase-3</p>
                                <span className="text-[8px] text-amber-500 bg-amber-500/10 px-1 py-0.5 rounded font-mono font-medium flex items-center gap-1">
                                  <Heart className="h-2 w-2 text-red-500 fill-red-500" /> Pulse: 64 bpm
                                </span>
                              </div>
                              <div className="text-right">
                                <p className="text-[13px] font-bold text-emerald-300">Temp: OK</p>
                                <p className="text-[8px] text-slate-400 font-mono">38.7° C (Normal)</p>
                              </div>
                            </div>

                            {/* AI Diagnostics Advice */}
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-850 space-y-1">
                              <div className="flex items-center gap-1">
                                <Shield className="h-3 w-3 text-amber-400" />
                                <span className="text-[10px] font-bold text-amber-400">AI Health Assessment</span>
                              </div>
                              <p className="text-[9px] text-emerald-100 leading-tight">
                                "Mastitis risk index is 4% (Very Low). Recommended to optimize oat hay feed by 10% today to maintain dairy vigor."
                              </p>
                              <div className="flex justify-between items-center text-[7.5px] text-emerald-400 italic border-t border-slate-800/40 pt-1 mt-1">
                                <span>Urdu Audio ready 🔊</span>
                                <span>99% confidence margin</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === 'milk' && (
                          <motion.div
                            key="milk-tab"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-slate-950 border border-emerald-850 p-3 rounded-xl space-y-2.5 h-full flex flex-col justify-between"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] text-slate-400">Production Dashboard</span>
                              <span className="text-[8px] text-amber-400 font-mono font-bold">LITERS / DAY</span>
                            </div>

                            {/* Daily totals */}
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-emerald-950/40 border border-emerald-900 p-2 rounded-lg">
                                <span className="text-[8px] text-emerald-400 block uppercase font-mono">This Week Yield</span>
                                <span className="text-sm font-bold text-white flex items-center gap-1 font-display">
                                  1,420L <TrendingUp className="h-3 w-3 text-emerald-400" />
                                </span>
                              </div>
                              <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
                                <span className="text-[8px] text-amber-400 block uppercase font-mono">Avg Fat Content</span>
                                <span className="text-sm font-bold text-amber-300 font-display">4.21%</span>
                              </div>
                            </div>

                            {/* Simulated mini column graph */}
                            <div className="bg-slate-900 border border-slate-850 p-2 rounded-lg flex-1 flex flex-col justify-between">
                              <span className="text-[8px] text-emerald-300 block mb-1">Weekly Yield Histogram</span>
                              <div className="flex items-end justify-between gap-1 h-[70px] px-1 pt-2">
                                {[50, 75, 60, 95, 80, 110, 85].map((val, idx) => (
                                  <div key={idx} className="flex-1 flex flex-col items-center">
                                    <div
                                      style={{ height: `${val / 1.6}px` }}
                                      className={`w-full rounded-t-sm transition-all duration-300 ${
                                        idx === 5 ? 'bg-gradient-to-t from-amber-600 to-amber-400' : 'bg-gradient-to-t from-emerald-850 to-emerald-500'
                                      }`}
                                    />
                                    <span className="text-[6.5px] text-slate-500 font-mono mt-1">
                                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === 'vet' && (
                          <motion.div
                            key="vet-tab"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-slate-950 border border-emerald-850 p-3 rounded-xl space-y-2 h-full flex flex-col justify-between"
                          >
                            <div className="flex justify-between items-center border-b border-emerald-950 pb-1.5">
                              <span className="text-[9px] text-emerald-400 font-mono font-medium">Verified Regional Veterinarians</span>
                              <span className="text-[8px] text-slate-400 bg-slate-900 px-1 py-0.5 rounded">Multan Zone</span>
                            </div>

                            {/* Vet clinic listings */}
                            <div className="space-y-1.5 flex-1 overflow-y-auto max-h-[170px] scrollbar-hide py-1">
                              <div className="bg-slate-900/80 border border-slate-850 p-1.5 rounded-lg text-left">
                                <div className="flex justify-between items-start">
                                  <p className="text-[9px] font-bold text-white leading-tight">Dr. Tariq Mahmood</p>
                                  <span className="text-[7.5px] bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded font-mono">1.2 km</span>
                                </div>
                                <p className="text-[8px] text-emerald-300 leading-none">Cattle Specialist / DVM</p>
                                <p className="text-[7.5px] text-slate-500 font-mono mt-1">📞 Click to Video Call</p>
                              </div>

                              <div className="bg-slate-900/80 border border-slate-850 p-1.5 rounded-lg text-left">
                                <div className="flex justify-between items-start">
                                  <p className="text-[9px] font-bold text-white leading-tight">Dr. Ayesha Malik</p>
                                  <span className="text-[7.5px] bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded font-mono">3.4 km</span>
                                </div>
                                <p className="text-[8px] text-emerald-300 leading-none">Reproductive Health Expert</p>
                              </div>

                              <div className="bg-slate-900/80 border border-slate-850 p-1.5 rounded-lg text-left opacity-75">
                                <div className="flex justify-between items-start">
                                  <p className="text-[9px] font-bold text-white leading-tight">Multan Veterinary HQ</p>
                                  <span className="text-[7.5px] bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded font-mono">4.1 km</span>
                                </div>
                                <p className="text-[8px] text-emerald-300 leading-none">Govt Surgical Care Center</p>
                              </div>
                            </div>

                            <button className="w-full bg-emerald-900/60 hover:bg-emerald-800 text-[8.5px] font-bold text-emerald-300 py-1.5 rounded-lg border border-emerald-800 font-mono mt-1">
                              Map Indexing Active
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Interactive Simulated Bottom App Bar (clicking this switches screen tabs) */}
                    <div className="bg-slate-950 border border-emerald-950 p-1 rounded-xl grid grid-cols-3 gap-1 shadow-md">
                      <button
                        onClick={() => setActiveTab('health')}
                        className={`py-1.5 rounded-lg text-center flex flex-col items-center justify-center transition-all ${
                          activeTab === 'health'
                            ? 'bg-emerald-900/80 border border-emerald-700/50 text-white'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                        aria-label="Health AI screen"
                      >
                        <Heart className="h-3 w-3 mb-0.5" />
                        <span className="text-[7.5px] font-mono leading-none">Diagnostic</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('milk')}
                        className={`py-1.5 rounded-lg text-center flex flex-col items-center justify-center transition-all ${
                          activeTab === 'milk'
                            ? 'bg-emerald-900/80 border border-emerald-700/50 text-white'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                        aria-label="Yield statistics screen"
                      >
                        <Droplet className="h-3 w-3 mb-0.5" />
                        <span className="text-[7.5px] font-mono leading-none">Production</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('vet')}
                        className={`py-1.5 rounded-lg text-center flex flex-col items-center justify-center transition-all ${
                          activeTab === 'vet'
                            ? 'bg-emerald-900/80 border border-emerald-700/50 text-white'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                        aria-label="Veterinarians directory screen"
                      >
                        <MapPin className="h-3 w-3 mb-0.5" />
                        <span className="text-[7.5px] font-mono leading-none">Vet Index</span>
                      </button>
                    </div>

                  </div>
                </div>

                {/* Simulated Home Indicator bar */}
                <div className="bg-black py-1.5 flex justify-center items-center">
                  <div className="w-24 h-1 bg-zinc-750 rounded-full" />
                </div>
              </div>

              {/* Floating Interactive Micro Badge */}
              <div className="absolute -right-8 bottom-24 bg-slate-900/90 border border-emerald-800 p-3 rounded-2xl shadow-xl backdrop-blur-md max-w-[130px] hidden sm:block animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Droplet className="h-4 w-4 text-emerald-400 fill-emerald-400" />
                  <span className="text-[10px] font-mono font-bold tracking-tight">Yield Forecast</span>
                </div>
                <p className="text-[12px] font-extrabold text-white mt-0.5">+18% Milk</p>
                <p className="text-[8px] text-slate-400 font-medium">Optimal Feed Index</p>
              </div>

              {/* Floating Location indicator */}
              <div className="absolute -left-10 top-16 bg-slate-900/90 border border-emerald-800 p-2.5 rounded-xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                <div className="text-left">
                  <span className="text-[9px] font-mono block text-emerald-400 uppercase leading-none">Clinics Verified</span>
                  <span className="text-[11px] font-bold text-white block">312 Vets Punjab</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
