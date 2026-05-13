import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Cpu, LayoutDashboard, MessageCircle, Settings, Menu, X, ArrowRight } from "lucide-react";

import { Chatbot } from "./components/Chatbot";

// Lazy load pages for performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Admin = lazy(() => import("./pages/Admin"));

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-bold tracking-tighter flex items-center gap-2 uppercase">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45"></div>
          </div>
          NEXUS
        </Link>
        <div className="hidden md:flex items-center gap-2 glass p-1 px-2 rounded-full">
          <Link to="/" className="nav-pill text-white/50 hover:text-white">Solutions</Link>
          <Link to="/services" className="nav-pill text-white/50 hover:text-white">Case Studies</Link>
          <Link to="/dashboard" className="nav-pill text-white">Dashboard</Link>
          <Link to="/services" className="nav-pill text-white/50 hover:text-white">Pricing</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/admin" className="text-sm text-white/60 hover:text-white transition-colors">Admin Login</Link>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white/90 transition-all">
            Get Started
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-brand-bg/95 backdrop-blur-2xl border-b border-white/5 px-6 py-10 flex flex-col gap-6"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-display">Solutions</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-2xl font-display">Enterprise</Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-2xl font-display">Dashboard</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        <Route path="/admin" element={<PageWrapper><Admin /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        <div className="mesh-bg"></div>
        <Navbar />
        <main className="pt-20">
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-brand-secondary font-display">NEXUS AI ...</div>}>
            <AppRoutes />
          </Suspense>
        </main>
        
        <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="stat-label opacity-40">© 2024 Nexus Intelligence Agency</div>
           <div className="flex gap-12 font-bold stat-label">
             <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
             <span className="cursor-pointer hover:text-white transition-colors">Twitter</span>
             <span className="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
           </div>
           <div className="stat-label opacity-40">Deployed to Mainnet-v4.2</div>
        </footer>

        {/* Chatbot */}
        <Chatbot />
      </div>
    </Router>
  );
}
