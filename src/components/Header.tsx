import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Sprout, Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  waitlistCount: number;
}

export default function Header({ waitlistCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-emerald-950/90 backdrop-blur-md shadow-lg border-b border-emerald-850 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="bg-amber-500 text-amber-950 p-2 rounded-xl transition-all duration-300 group-hover:bg-amber-400 group-hover:scale-105 shadow-md shadow-amber-500/20">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                Pak LiveStock{' '}
                <span className="text-emerald-400 font-normal text-sm bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                  Care
                </span>
              </span>
              <p className="text-[10px] text-amber-400 tracking-wider uppercase font-medium -mt-1 hidden sm:block">
                Created by Aaliyan
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-emerald-100 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('language-preview')}
              className="text-emerald-100 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
            >
              Dual Language
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="text-emerald-100 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/SkipScaped/Pak-LiveStock-Care-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white font-medium text-xs px-4 py-2 rounded-xl transition-all border border-emerald-805 hover:border-emerald-700 shadow-sm"
              id="header_github_btn"
            >
              <Github className="h-4 w-4 text-emerald-400" />
              <span>View Source Code</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center gap-3">
            <span className="text-[11px] text-emerald-300 font-mono bg-emerald-900/50 px-2 py-1 rounded">
              {waitlistCount + 342} Join
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-emerald-900/50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-emerald-950 border-b border-emerald-800 px-4 py-4 space-y-3"
        >
          <button
            onClick={() => scrollToSection('features')}
            className="block w-full text-left text-emerald-100 hover:text-white py-2 text-sm font-medium"
          >
            Core Features
          </button>
          <button
            onClick={() => scrollToSection('language-preview')}
            className="block w-full text-left text-emerald-100 hover:text-white py-2 text-sm font-medium"
          >
            Dual Language Support
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left text-emerald-100 hover:text-white py-2 text-sm font-medium"
          >
            About Project
          </button>
          <div className="pt-3 border-t border-emerald-900 flex flex-col gap-3">
            <span className="text-xs text-emerald-300 font-mono bg-emerald-900/60 px-3 py-2 rounded-lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Waitlist
              </span>
              <span>{waitlistCount + 342} Users</span>
            </span>
            <a
              href="https://github.com/SkipScaped/Pak-LiveStock-Care-App"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white font-medium text-sm py-2.5 rounded-lg border border-emerald-800 transition-all"
            >
              <Github className="h-4 w-4" />
              <span>Source Code on GitHub</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
