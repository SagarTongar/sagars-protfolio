import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { 
  Code2, 
  UploadCloud, 
  CircleDollarSign, 
  Workflow, 
  ArrowRightLeft, 
  Network,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    title: "Infrastructure as Code (IaC)",
    description: "Automate and provision your entire infrastructure using Terraform, ensuring consistent, repeatable, and version-controlled environments.",
    icon: Code2,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "On-Prem to Cloud",
    description: "Modernize your legacy on-premise workloads by seamlessly transitioning them to scalable cloud-native architectures.",
    icon: UploadCloud,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Cloud Cost Optimization",
    description: "Identify resource wastage and architect cost-efficient solutions to dramatically reduce your monthly AWS or Azure billing.",
    icon: CircleDollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "CI/CD Services",
    description: "Build robust, automated deployment pipelines that accelerate your release cycles and eliminate manual errors in production.",
    icon: Workflow,
    color: "text-violet-600",
    bgColor: "bg-violet-50"
  },
  {
    title: "Cloud Migrations",
    description: "Zero-downtime migration strategies to move your databases, applications, and core services securely into the cloud.",
    icon: ArrowRightLeft,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    title: "Multi-Cloud Support",
    description: "Architect and manage resilient systems that span across AWS, Azure, and Google Cloud, preventing vendor lock-in.",
    icon: Network,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50"
  }
];

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle || "");
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 relative bg-white border-y border-slate-100" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Work With Me</h2>
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Enterprise-Grade Cloud Solutions
          </h3>
          <p className="text-lg text-slate-600">
            I help businesses scale securely, reduce infrastructure costs, and automate their operations. Let's build a resilient foundation for your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              delay={index * 0.1}
              className="flex flex-col h-full hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => openModal(service.title)}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bgColor} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <div className="inline-flex items-center text-sm font-semibold text-blue-600 mt-auto">
                Request Service <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => openModal("")}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 hover:-translate-y-1"
          >
            Hire Me For Your Next Project
          </button>
        </div>

      </div>

      {/* Booking Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request Consultation">
          <form action="https://formsubmit.co/sagartongar83@gmail.com" method="POST" className="space-y-4">
            <p className="text-sm text-slate-600 mb-4">
              Fill out the details below and I'll get back to you to discuss how we can scale your infrastructure securely.
            </p>
            
            <input type="hidden" name="_subject" value={"New Lead from Portfolio: " + selectedService} />
            <input type="hidden" name="_template" value="table" />
            
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="John Doe" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="john@company.com" />
              </div>
              <div className="space-y-1">
                <label htmlFor="contact" className="text-sm font-medium text-slate-700">Contact Number</label>
                <input type="tel" id="contact" name="contact" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="serviceType" className="text-sm font-medium text-slate-700">Service Required *</label>
              <select 
                id="serviceType" 
                name="serviceType"
                required 
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              >
                <option value="" disabled>Select a service...</option>
                {services.map(s => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
                <option value="General Consultation">General Consultation / Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="address" className="text-sm font-medium text-slate-700">Company / Address</label>
              <input type="text" id="address" name="address" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="Headquarters City, Country" />
            </div>

            <div className="space-y-1">
              <label htmlFor="details" className="text-sm font-medium text-slate-700">Project Details</label>
              <textarea id="details" name="details" rows="3" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none" placeholder="Briefly describe your infrastructure challenges or goals..."></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm">
                Submit Request
              </button>
            </div>
          </form>
      </Modal>
    </section>
  );
}
