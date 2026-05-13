import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls, PresentationControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play, Server, Zap, Shield, MessageCircle } from "lucide-react";

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <PresentationControls global rotation={[0, 0, 0]} polar={[-0.4, 0.2]} azimuth={[-0.4, 0.4]}>
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1.5, 64, 64]} scale={1.2}>
              <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.4}
                speed={4}
                roughness={0.1}
                metalness={0.9}
              />
            </Sphere>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroScene />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="indicator"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">Systems Online</span>
              </div>
              <h1 className="hero-text mb-8">
                Scale <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Beyond</span> <br/>
                <span className="font-serif italic font-light text-brand-accent">Human</span> Limits.
              </h1>
              <p className="text-lg text-white/50 max-w-md leading-relaxed mb-12">
                Hyper-automated workflows for the modern enterprise. Nexus replaces manual complexity with autonomous intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="glass p-5 px-8 flex flex-col gap-1">
                  <span className="text-2xl font-bold tracking-tight">12,402</span>
                  <span className="stat-label">Auto-Operations / Hr</span>
                </div>
                <div className="glass p-5 px-8 flex flex-col gap-1">
                  <span className="text-2xl font-bold tracking-tight">84%</span>
                  <span className="stat-label">Efficiency Gain</span>
                </div>
              </div>
              <div className="mt-12 flex gap-6">
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                  Initiate Scale <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Visual Panel Inspired by Design */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="glass w-full h-[540px] p-8 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Active Neural Nodes</span>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                
                <div className="space-y-10 flex-1">
                  <div className="flex items-end gap-3 h-32">
                    {[40, 60, 80, 50, 100, 70, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-brand-accent/40 rounded-t-lg transition-all hover:bg-brand-accent"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                      <span className="stat-label block mb-3">Lead Gen</span>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-accent w-[92%]"></div>
                      </div>
                      <span className="text-[10px] mt-3 block opacity-50 font-bold uppercase">92% Matched</span>
                    </div>
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                      <span className="stat-label block mb-3">CRM Sync</span>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[100%]"></div>
                      </div>
                      <span className="text-[10px] mt-3 block opacity-50 font-bold uppercase tracking-widest">Active</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-widest opacity-60">Recent Automations</span>
                      <span className="text-[10px] text-brand-accent animate-pulse font-bold uppercase tracking-widest">Live</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[11px] opacity-40">
                         <div className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center"><Zap size={10} /></div>
                           <span>Stripe Reconciliation</span>
                         </div>
                         <span>Just now</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] opacity-40">
                         <div className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center"><Server size={10} /></div>
                           <span>Client Data Pipeline</span>
                         </div>
                         <span>2m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent blur-[100px] opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-neutral-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { label: "Efficiency Boost", val: "400%" },
              { label: "AI Deployments", val: "850+" },
              { label: "Hours Saved/Mo", val: "12k+" },
              { label: "Enterprise Partners", val: "120" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-display font-bold mb-2">{stat.val}</div>
                <div className="text-sm text-brand-secondary uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Our Solutions</h2>
            <p className="text-brand-secondary max-w-2xl mx-auto text-lg leading-relaxed">
              We don't just use AI. We architect it to solve your most complex operational bottlenecks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Intelligent Workflows", icon: <Zap />, desc: "Automate cross-departmental tasks with predictive LLM agents." },
              { title: "Client Cog-Systems", icon: <MessageCircle />, desc: "Autonomous engagement systems that handle leads, support, and sales." },
              { title: "Data Architecture", icon: <Server />, desc: "High-performance vector databases for lightning-fast knowledge retrieval." },
            ].map((s, i) => (
              <div key={i} className="p-10 rounded-2xl border border-white/5 bg-brand-card hover:border-brand-accent/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 text-brand-accent group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">{s.title}</h3>
                <p className="text-brand-secondary mb-8 leading-relaxed italic text-sm">{s.desc}</p>
                <button className="flex items-center gap-1 text-sm font-semibold text-brand-accent group-hover:translate-x-2 transition-transform">
                  Learn more <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
