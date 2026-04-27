import React from 'react';
import { Card } from '../components/Card';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  { name: "Kubernetes CKA Certified", issuer: "Cloud Native Computing Foundation", date: "2023" },
  { name: "Red Hat Certified System Administrator", issuer: "Red Hat", date: "2023" },
  { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", date: "Jun 2022" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "May 2022" },
  { name: "Microsoft Certified: Azure Administrator Associate", issuer: "Microsoft", date: "May 2022" },
  { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", date: "May 2022" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "Apr 2022" }
];

export function Certifications() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Qualifications</h2>
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Licenses & Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} delay={index * 0.05} className="flex items-start gap-4 p-5 hover:-translate-y-1 transition-transform group">
              <div className="shrink-0 p-2 bg-blue-50 rounded-lg text-blue-600 mt-1 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 leading-tight mb-1">{cert.name}</h4>
                <p className="text-sm text-slate-600 mb-2">{cert.issuer}</p>
                <div className="flex items-center text-xs font-medium text-emerald-600">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Issued {cert.date}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
