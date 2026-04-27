import React from 'react';
import { motion } from 'framer-motion';

const visuals = [
  {
    title: "CI/CD Pipelines",
    image: "./cicd_pipeline.png",
    description: "Automated infinite deployment loops."
  },
  {
    title: "Cloud Infrastructure",
    image: "./cloud_servers.png",
    description: "Scalable, resilient data centers."
  },
  {
    title: "DevOps Security",
    image: "./devops_security.png",
    description: "Zero-trust network protection."
  }
];

export function VisualShowcase() {
  return (
    <section className="py-20 relative bg-slate-900 overflow-hidden text-white" id="interactive-visuals">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Interactive Models</h2>
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            Architecture at a Glance
          </h3>
          <p className="text-base md:text-lg text-slate-400">
            Hover over the models below to see the core pillars of my Cloud & DevOps philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {visuals.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Floating Image Container */}
              <motion.div 
                className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ rotate: 5 }}
                />
              </motion.div>
              
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-center text-sm px-4">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
