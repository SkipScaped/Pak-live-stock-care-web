import React, { useState } from 'react';
import { Github, Sprout, Mail, ArrowRight, Heart, Check } from 'lucide-react';
import { WaitlistEntry } from '../types';

interface FooterProps {
  onJoinWaitlist: (email: string, role: string, location: string) => void;
  registeredUser: WaitlistEntry | null;
}

export default function Footer({ onJoinWaitlist, registeredUser }: FooterProps) {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Email required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Invalid email');
      return;
    }
    setErrorMsg('');
    onJoinWaitlist(email, 'farmer', 'Online Portal');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-emerald-900 text-white pt-16 pb-8 position-relative overflow-hidden">
      
      {/* Wave Background Vector Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(4,120,87,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer grid: Waitlist repetition + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-emerald-950">
          
          {/* Column 1 - Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={scrollToTop}>
              <div className="bg-amber-500 text-amber-950 p-2 rounded-xl">
                <Sprout className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-lg text-white">Pak LiveStock Care</span>
            </div>
            <p className="text-emerald-250 text-xs sm:text-sm leading-relaxed max-w-sm">
              An offline-first, public agritech applet empowering standard cattle keepers, veterinarians, and dairy entrepreneurs in Pakistan. Developed openly with the love of researchers, farmers, and coders.
            </p>
            <div className="flex items-center gap-2.5 text-xs text-amber-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Free Software for Public Benefit</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Page Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-200 hover:text-amber-400 transition-colors block text-left"
                >
                  Core Agri Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('language-preview')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-200 hover:text-amber-400 transition-colors block text-left"
                >
                  Dual Language Translation
                </button>
              </li>

              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-emerald-200 hover:text-amber-400 transition-colors block text-left"
                >
                  Back to Hero Form
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Repeated Waitlist Form */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
              Join the Beta Channel
            </h4>
            <p className="text-emerald-350 text-xs leading-relaxed">
              Don't miss the initial launch. Provide your email below to reserve an invite directly.
            </p>

            <div>
              {!registeredUser ? (
                <form onSubmit={handleSubmit} className="relative">
                  <div className="flex gap-2 bg-emerald-990 border border-emerald-850 p-1.5 rounded-xl">
                    <input
                      type="email"
                      placeholder="farmer@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent px-3 py-2 text-xs text-white focus:outline-none placeholder-emerald-800"
                    />
                    <button
                      type="submit"
                      id="footer_submit_btn"
                      className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Join</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                  {errorMsg && (
                    <p className="text-red-400 text-[10px] mt-1 absolute left-2">{errorMsg}</p>
                  )}
                </form>
              ) : (
                <div className="bg-emerald-900/60 border border-emerald-800 p-3.5 rounded-xl flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-amber-300">Registered Spot #{registeredUser.position + 342}</h5>
                    <p className="text-[10px] text-emerald-250">{registeredUser.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Lower footer: copyright and prominent links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300 font-mono">
          
          {/* Copyright lines */}
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 Pak LiveStock Care. All rights reserved.</p>
          </div>

          {/* Socials / Proactive Links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://github.com/SkipScaped/Pak-LiveStock-Care-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-800/80 hover:border-emerald-700 hover:text-white text-white font-semibold py-2 px-4 rounded-xl transition-all"
              id="footer_github_deep_link"
            >
              <Github className="h-4 w-4 text-emerald-400" />
              <span>GitHub Repository</span>
            </a>
          </div>

        </div>

        <div className="mt-8 text-center border-t border-emerald-990 pt-6">
          <p className="text-[10px] text-slate-650 flex items-center justify-center gap-1">
            <span>Designed & Made by Aaliyan. Built for global public utility with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" />
            <span>for rural farming communities.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
