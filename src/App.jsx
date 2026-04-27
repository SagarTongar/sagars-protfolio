import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './sections/Hero';
import { VisualShowcase } from './sections/VisualShowcase';
import { Stats } from './sections/Stats';
import { Services } from './sections/Services';
import { Clients } from './sections/Clients';
import { OpsCenter } from './sections/OpsCenter';
import { Projects } from './sections/Projects';
import { Posts } from './sections/Posts';
import { Certifications } from './sections/Certifications';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      
      {/* Global Animated Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation / Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass-panel border-t-0 border-x-0 bg-white/90">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 z-50 group">
            {/* Monogram Icon */}
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              S
            </div>
            {/* Text Logo */}
            <div className="font-black text-xl tracking-tight text-slate-900">
              Sagar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Tongar</span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#interactive-visuals" className="hover:text-blue-600 transition-colors">Models</a>
            <a href="mailto:sagartongar83@gmail.com" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 hover:-translate-y-0.5">
              Contact Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-blue-600">Overview</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-blue-600">Services</a>
            <a href="#interactive-visuals" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-blue-600">Models</a>
            <a href="mailto:sagartongar83@gmail.com" className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg bg-blue-600 text-white text-base font-bold text-center">
              Contact Me
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <Hero />
        <VisualShowcase />
        <Stats />
        <Services />
        <Clients />
        <OpsCenter />
        <Projects />
        <Posts />
        <Certifications />
      </main>

      <footer className="py-12 border-t border-slate-200/60 bg-white/50 backdrop-blur-md relative z-10 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Senior Cloud Architect. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-medium text-slate-600">
            <a href="https://github.com/SagarTongar/sagars-protfolio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sagar-tongar-b5065619a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="mailto:sagartongar83@gmail.com" className="hover:text-blue-600 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
