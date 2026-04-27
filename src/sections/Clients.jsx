import React from 'react';
import { Card } from '../components/Card';
import { Bot, Smartphone, ExternalLink, CheckCircle2 } from 'lucide-react';

const clients = [
  {
    name: "Botcadence",
    tagline: "AI Voice & Chat Agents for Sales & Support",
    url: "https://botcadence.com",
    icon: Bot,
    impact: "Architected high-availability infrastructure to process thousands of concurrent AI voice and chat interactions with sub-second latency.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    name: "Motobeans Productions",
    tagline: "Digital Agency & Flutter App Development",
    url: "https://motobeans.com/",
    icon: Smartphone,
    impact: "Designed and deployed a scalable, cost-optimized cloud environment to support their growing portfolio of web and mobile applications.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  }
];

export function Clients() {
  return (
    <section className="py-20 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Trusted By</h2>
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Happy Clients
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <Card key={index} delay={index * 0.1} className="flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative group">
              <a href={client.url} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 text-slate-400 hover:text-blue-600 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${client.bgColor} ${client.color}`}>
                <client.icon className="w-8 h-8" />
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-1">{client.name}</h4>
              <p className="text-sm font-medium text-slate-500 mb-6">{client.tagline}</p>
              
              <div className="bg-slate-50 p-4 rounded-lg mt-auto border border-slate-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Impact: </span>
                    {client.impact}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
