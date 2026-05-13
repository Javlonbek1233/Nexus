import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { LayoutDashboard, Users, Zap, TrendingUp, ArrowUpRight, Activity } from "lucide-react";

const mockData = [
  { name: "Mon", efficiency: 65, tasks: 450 },
  { name: "Tue", efficiency: 72, tasks: 520 },
  { name: "Wed", efficiency: 68, tasks: 480 },
  { name: "Thu", efficiency: 85, tasks: 610 },
  { name: "Fri", efficiency: 92, tasks: 750 },
  { name: "Sat", efficiency: 88, tasks: 450 },
  { name: "Sun", efficiency: 95, tasks: 380 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-bg p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-display font-medium mb-2">Systems Overview</h1>
            <p className="text-brand-secondary">Real-time performance analytics for your AI infrastructure.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 glass rounded-lg text-sm font-medium flex items-center gap-2">
              <Activity size={14} className="text-green-500" /> Live Updates
            </div>
            <button className="px-5 py-2 bg-white text-black rounded-lg text-sm font-medium">Export Report</button>
          </div>
        </header>

        {/* Analytics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Active Agents", val: "124", sub: "+12.5%", icon: <Zap /> },
            { label: "Lead Throughput", val: "1.2M", sub: "+40%", icon: <Users /> },
            { label: "System Health", val: "99.98%", sub: "Stable", icon: <TrendingUp /> },
          ].map((card, i) => (
            <div key={i} className="p-8 glass rounded-[2rem] flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent">
                  {card.icon}
                </div>
                <ArrowUpRight size={20} className="opacity-20" />
              </div>
              <div className="text-3xl font-display font-bold mb-1 tracking-tight">{card.val}</div>
              <div className="flex items-center justify-between">
                <span className="stat-label">{card.label}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent uppercase tracking-widest">
                  {card.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl glass border border-white/5 h-[400px]">
            <h3 className="text-xl mb-8 font-display">Automation Efficiency</h3>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Area type="monotone" dataKey="efficiency" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorEff)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="p-8 rounded-3xl glass border border-white/5 h-[400px]">
            <h3 className="text-xl mb-8 font-display">Task Throughput</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                />
                <Bar dataKey="tasks" fill="rgba(255,255,255,0.1)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
