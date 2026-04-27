import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Server, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Global E-Commerce Infrastructure Migration",
    status: "Operational",
    uptime: "99.99%",
    problem: "Legacy monolithic architecture couldn't handle seasonal traffic spikes, resulting in downtime and revenue loss.",
    solution: "Architected and migrated to a microservices-based EKS cluster with auto-scaling, reducing infrastructure costs by 30% and eliminating downtime during peak events.",
    tech: ["AWS EKS", "Terraform", "ArgoCD", "Datadog"],
    sparkline: [30, 40, 35, 50, 49, 60, 70, 91, 100]
  },
  {
    title: "Automated Bioinformatics Data Pipeline",
    status: "Operational",
    uptime: "99.95%",
    problem: "Manual genomic data processing was slow, error-prone, and bottlenecked research timelines.",
    solution: "Built an event-driven serverless pipeline using AWS Step Functions and Lambda, integrating AI models to accelerate data classification by 400%.",
    tech: ["AWS Lambda", "Python", "Docker", "TensorFlow"],
    sparkline: [20, 25, 45, 30, 60, 65, 80, 85, 95]
  },
  {
    title: "Enterprise Observability Rollout",
    status: "Operational",
    uptime: "99.999%",
    problem: "Scattered logging and monitoring tools led to high MTTR (Mean Time To Recovery) during incidents.",
    solution: "Implemented a centralized Prometheus/Grafana stack with strict SLI/SLO definitions, reducing MTTR from 4 hours to 15 minutes.",
    tech: ["Prometheus", "Grafana", "Go", "PagerDuty"],
    sparkline: [95, 90, 98, 97, 99, 100, 98, 99, 100]
  }
];

// Simple SVG sparkline component
const Sparkline = ({ data }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  const padding = 10;
  const width = 100;
  const height = 40;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * (width - padding * 2) + padding;
    const y = height - padding - ((val - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <polyline
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        className="opacity-70"
      />
      <circle 
        cx={points.split(' ').pop().split(',')[0]} 
        cy={points.split(' ').pop().split(',')[1]} 
        r="3" 
        fill="#2563EB" 
      />
    </svg>
  );
};

export function Projects() {
  return (
    <section className="py-20 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">System Reports</h2>
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Architecture Case Studies
          </h3>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} delay={index * 0.1} className="flex flex-col lg:flex-row gap-8 overflow-hidden relative group">
              {/* Status Header for Mobile */}
              <div className="lg:w-1/4 shrink-0 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Server className="w-5 h-5 text-slate-400" />
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Report #{String(index + 1).padStart(3, '0')}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 leading-tight mb-4">{project.title}</h4>
                </div>
                
                <div className="space-y-3 mt-4 lg:mt-0">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">System Status</span>
                    <span className="flex items-center text-emerald-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Uptime SLA</span>
                    <Badge className="bg-blue-50 text-blue-700 border-blue-200">{project.uptime}</Badge>
                  </div>
                  <div className="pt-2">
                    <Sparkline data={project.sparkline} />
                  </div>
                </div>
              </div>

              {/* Problem/Solution Content */}
              <div className="flex-1 flex flex-col justify-center py-2 lg:pl-4">
                <div className="mb-6">
                  <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Challenge</h5>
                  <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Architecture Result</h5>
                  <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i}>{tech}</Badge>
                  ))}
                </div>
              </div>
              
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
