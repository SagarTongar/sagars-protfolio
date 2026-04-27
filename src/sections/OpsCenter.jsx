import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Cloud, GitMerge, Activity, BrainCircuit } from 'lucide-react';

const skills = [
  {
    title: "Infrastructure & Cloud",
    icon: Cloud,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    image: "./infra_isometric.png",
    items: ["AWS / EKS", "Terraform", "Kubernetes", "Docker", "Helm", "K3s"],
    colSpan: "lg:col-span-2",
  },
  {
    title: "Automation & CI/CD",
    icon: GitMerge,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    image: "./cicd_pipeline.png",
    items: ["GitLab", "Jenkins", "GitHub Actions", "ArgoCD", "Azure DevOps", "GitOps"],
    colSpan: "lg:col-span-1",
  },
  {
    title: "Observability & DevSecOps",
    icon: Activity,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    image: "./observability_radar.png",
    items: ["Prometheus", "Grafana", "SonarQube", "Trivy", "Checkmarx", "Sysdig"],
    colSpan: "lg:col-span-1",
  },
  {
    title: "Leadership & Strategy",
    icon: BrainCircuit,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    image: "./leadership_brain.png",
    items: ["DevOps & Cloud Lead", "Resilient Architecture", "Zero-Dollar Gold Standard"],
    colSpan: "lg:col-span-2",
  }
];

export function OpsCenter() {
  return (
    <section className="py-20 relative bg-slate-50" id="ops-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Ops-Center
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Core Engineering Competencies
            </h3>
          </div>
          
          {/* Live System Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">All Systems Nominal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const isWide = skill.colSpan === "lg:col-span-2";
            return (
              <Card 
                key={index} 
                delay={index * 0.1} 
                className={`overflow-hidden relative group bg-slate-900 border-slate-800 p-0 ${skill.colSpan}`}
              >
                {/* Background ambient glow */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${skill.bgColor.replace('bg-', 'bg-').replace('-50', '-500')}`}></div>
                
                <div className={`p-8 grid ${isWide ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-8 relative z-10 h-full items-center`}>
                  
                  {/* Text Content Area */}
                  <div className="flex flex-col h-full justify-center">
                    <div className="flex items-start mb-6">
                      <div className={`p-3 rounded-xl bg-slate-800 border border-slate-700`}>
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-6 leading-tight">{skill.title}</h4>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {skill.items.map((item, i) => (
                        <motion.span 
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-xs font-bold text-slate-300 shadow-sm hover:border-blue-400 hover:text-white transition-colors cursor-pointer"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Image/Visual Area */}
                  <div className={`flex items-center justify-center h-full w-full ${!isWide ? 'order-first' : ''}`}>
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                      className="relative w-full aspect-square max-w-[200px] sm:max-w-[240px] flex items-center justify-center"
                    >
                      {/* Using mask-image to fade edges of black images into the dark background */}
                      <img 
                        src={skill.image} 
                        alt={skill.title} 
                        className="w-full h-full object-contain mix-blend-screen opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"
                      />
                    </motion.div>
                  </div>

                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
