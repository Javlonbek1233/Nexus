import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Shield, Radio, Activity, Zap, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    title: "Autonomous Customer Support",
    desc: "AI agents that handle 90% of tickets with human-like precision and instant response times.",
    icon: <Globe />,
    features: ["24/7 Availability", "Multi-lingual Support", "CRM Syncing", "Sentiment Analysis"]
  },
  {
    title: "Hyper-Personalized Outreach",
    desc: "Lead generation systems that research, draft, and send context-aware emails that convert.",
    icon: <Zap />,
    features: ["Real-time Research", "Dynamic Personalization", "Auto-scaling Workflows", "A/B Logic Testing"]
  },
  {
    title: "AI Business Intelligence",
    desc: "Transform your company knowledge into a private LLM ecosystem for instant internal insights.",
    icon: <Database />,
    features: ["Vector Search", "Private Data Isolation", "Intuitive Chat Interface", "Cross-Silo Discovery"]
  },
  {
    title: "Process Optimization",
    desc: "End-to-end automation of recursive administrative tasks, freeing your team for high-value work.",
    icon: <Activity />,
    features: ["OCR & Data Extraction", "Self-healing Pipelines", "Priority Routing", "Custom Integration Hub"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-brand-bg pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="py-24 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-medium mb-8"
          >
            Intelligence <span className="font-serif italic text-brand-accent">as a Service.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/40 leading-relaxed font-light"
          >
            We don't offer generic tools. We deploy custom AI infrastructure that drives measurable ROI and operational transcendence.
          </motion.p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[2.5rem] glass hover:border-brand-accent/30 transition-all"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div className="stat-label border border-white/10 px-4 py-2 rounded-full font-bold opacity-60">
                  Tier 1 System
                </div>
              </div>
              <h2 className="text-3xl font-display font-medium mb-6">{s.title}</h2>
              <p className="text-brand-secondary mb-10 leading-relaxed text-lg">{s.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                {s.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-brand-secondary">
                    <CheckCircle2 size={16} className="text-brand-accent" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing/CTA */}
        <div className="mt-32 p-16 rounded-[3rem] bg-gradient-to-br from-brand-accent/20 to-transparent border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-6">Ready to scale your intelligence?</h2>
            <p className="text-brand-secondary mb-12 max-w-2xl mx-auto">
              Our enterprise solutions are tailored to your specific ecosystem. Book a consensus call with our architects today.
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Initiate Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
