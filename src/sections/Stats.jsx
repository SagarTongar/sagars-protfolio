import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: "500+",
    label: "CI/CD Pipelines Migrated",
    subLabel: "(Jenkins to GitLab & GitHub Actions)"
  },
  {
    value: "100+",
    label: "Projects Built with IaC",
    subLabel: "(Terraform, CloudFormation)"
  },
  {
    value: "100+",
    label: "Cloud Migrations",
    subLabel: "(On-Prem to AWS/Azure)"
  }
];

export function Stats() {
  return (
    <section className="relative z-20 -mt-16 mb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="glass-panel relative overflow-hidden bg-gradient-to-br from-blue-600/95 to-indigo-700/95 text-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] border border-blue-400/30"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-blue-400/30 text-center py-12 lg:py-16">
          
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="pt-8 md:pt-0 flex flex-col items-center justify-center group"
            >
              <div className="text-4xl md:text-6xl font-black tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200">
                  {stat.value}
                </span>
              </div>
              <div className="text-base md:text-lg font-bold text-blue-100 mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm font-medium text-blue-300/80">
                {stat.subLabel}
              </div>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}
