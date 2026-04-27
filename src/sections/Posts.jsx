import React from 'react';
import { Card } from '../components/Card';
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const posts = [
  {
    content: "Being a DevOps Engineer has taught me one thing: Complexity is the enemy of Reliability.\n\nIf I had to build a production-ready, self-healing infrastructure today with $0 in license fees, here is my battle-tested stack:\n• The Brain: K3s / EKS (Spot Instances) – 80% cheaper, 100% resilient if architected correctly.\n• The Eyes: Prometheus + Grafana – Don't just watch CPU; build AIOps-driven alerts that predict failures before they happen.\n• The Hands: Terraform + ArgoCD – 'Click-Ops' is dead. If it's not in Git, it doesn't exist.\n• The Secret Sauce: KEDA – Event-driven scaling based on business metrics, not just RAM.\n\nThe Bottom Line: Anyone can build a 'complex' system. I focus on Resilient systems that expect failure and automate the recovery.",
    tags: ["#SRE_In_2026", "#DevOps", "#Kubernetes"],
    likes: "1,070",
    comments: "150",
  },
  {
    content: "Production DevOps Troubleshooting Guide – Real AWS & Kubernetes Incident Scenarios.\n\nMost DevOps interviews don't ask basic theory. They ask what you do when production is down. In my experience scaling systems, resolving real-world incidents requires a structured approach to tracing errors from the load balancer all the way to the pod level. It's about knowing exactly which metrics matter and automating the recovery before the next alert fires.",
    tags: ["#Troubleshooting", "#AWS", "#SRE"],
    likes: "420",
    comments: "45",
  }
];

export function Posts() {
  return (
    <section className="py-20 relative bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Industry Insights</h2>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Recent Activity
            </h3>
          </div>
          <a href="https://www.linkedin.com/in/sagar-tongar-b5065619a/recent-activity/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
            View on LinkedIn <Linkedin className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Card key={index} delay={index * 0.1} className="flex flex-col h-full bg-white group">
              <div className="flex items-center gap-3 mb-6">
                <img src="./profile_v2.png" alt="Sagar Tongar" className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">Sagar Tongar</h4>
                  <p className="text-xs text-slate-500">DevOps & Cloud Lead at Sopra Steria</p>
                </div>
              </div>
              
              <div className="text-slate-700 text-sm leading-relaxed mb-6 whitespace-pre-line flex-1">
                {post.content}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-blue-600 hover:underline cursor-pointer">{tag}</span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-slate-500 text-sm">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <MessageSquare className="w-4 h-4" /> {post.comments}
                  </button>
                </div>
                <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
