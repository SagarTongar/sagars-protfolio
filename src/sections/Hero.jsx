import React from 'react';
import { motion } from 'framer-motion';

// Custom SVG Icons to avoid dependency issues
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export function Hero() {
  return (
    <section className="pt-28 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-3/5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm text-blue-600 text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
              Accepting New Clients
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Expert CI/CD & Cloud <br/> 
              <span className="text-gradient drop-shadow-sm">Infrastructure</span> Solutions.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Hi, I'm <span className="font-bold text-slate-900">Sagar Tongar</span>. Need robust <strong>CI/CD pipelines, Infrastructure as Code (IaC), or full Cloud Infrastructure Management</strong>? We can help you build and scale highly secure, automated, and self-healing cloud environments tailored to your exact business needs.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="mailto:sagartongar83@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1 hover:shadow-blue-600/40">
                Discuss Architecture
              </a>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href="https://github.com/SagarTongar/sagars-protfolio" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-500 hover:text-slate-900 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow hover:-translate-y-1">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/sagar-tongar-b5065619a/" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-500 hover:text-[#0A66C2] bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow hover:-translate-y-1">
                  <LinkedinIcon />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Soft blue glow pulse */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse transition-opacity group-hover:opacity-50" style={{ animationDuration: '4s' }}></div>
              
              {/* Rotating gradient border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400 rounded-full opacity-70 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Circular PNG Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full glass-panel border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden bg-slate-50 z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img src="/profile.png" alt="Sagar Tongar" className="w-full h-full object-cover relative z-10" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
