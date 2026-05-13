import React from "react";
import { motion } from "framer-motion";
import { Settings, Users, Database, Shield, Bell, Plus, Search, Filter } from "lucide-react";

export default function Admin() {
  return (
    <div className="min-h-screen bg-brand-bg md:flex">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden md:flex w-64 border-r border-white/5 flex-col p-6 gap-8">
        <div className="mt-10 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-white/5 text-white flex items-center gap-3">
            <Database size={18} /> Systems
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-brand-secondary hover:bg-white/5 hover:text-white transition-all flex items-center gap-3">
            <Users size={18} /> Users
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-brand-secondary hover:bg-white/5 hover:text-white transition-all flex items-center gap-3">
            <Bell size={18} /> Logs
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl text-brand-secondary hover:bg-white/5 hover:text-white transition-all flex items-center gap-3">
            <Settings size={18} /> Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 lg:p-16">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-medium">Control Center</h1>
            <p className="text-brand-secondary text-sm">System-level management and configuration.</p>
          </div>
          <button className="px-5 py-2.5 bg-brand-accent text-white rounded-xl font-medium flex items-center gap-2">
            <Plus size={18} /> New Agent
          </button>
        </header>

        {/* Dynamic Table Section */}
        <div className="rounded-[2rem] glass border border-white/5 overflow-hidden">
          <div className="p-6 bg-white/5 flex items-center justify-between gap-4 border-b border-white/5">
            <div className="flex-1 max-w-md relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-secondary" />
              <input 
                placeholder="Search resources..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 outline-none focus:border-brand-accent transition-colors"
              />
            </div>
            <button className="p-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-brand-secondary">
              <Filter size={18} />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs uppercase tracking-widest text-brand-secondary border-b border-white/5 bg-white/5">
                  <th className="px-6 py-4 font-semibold">Instance ID</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Uptime</th>
                  <th className="px-6 py-4 font-semibold">Load</th>
                  <th className="px-6 py-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { id: "NX-88210", type: "Cleric LLM", status: "Active", uptime: "142h", load: "12%" },
                  { id: "NX-88211", type: "Relay Agent", status: "Active", uptime: "982h", load: "45%" },
                  { id: "NX-88212", type: "Vector Store", status: "Scaling", uptime: "24h", load: "88%" },
                  { id: "NX-88213", type: "Synthesizer", status: "Offline", uptime: "0h", load: "0%" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-mono text-sm">{row.id}</td>
                    <td className="px-6 py-5">
                       <span className="text-sm font-medium">{row.type}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${row.status === "Active" ? "bg-green-500" : row.status === "Scaling" ? "bg-blue-500" : "bg-red-500"}`} />
                        <span className="text-sm">{row.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-brand-secondary">{row.uptime}</td>
                    <td className="px-6 py-5">
                      <div className="w-full max-w-[100px] h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="bg-brand-accent h-full" style={{ width: row.load }} />
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right flex justify-end">
                      <button className="text-[10px] uppercase font-bold text-white/30 hover:text-white transition-colors">Configure</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
