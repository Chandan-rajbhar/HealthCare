
"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Calendar, 
  Globe, 
  FileText, 
  Zap, 
  CreditCard, 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const features = [
  {
    id: "calendar",
    label: "Smart Scheduling",
    icon: Calendar,
    title: "Master your clinic's rhythm",
    desc: "A lightning-fast calendar designed for complex medical shifts and multi-location management.",
    image: "/herodashboard.png", 
    color: "blue"
  },
  {
    id: "online-booking",
    label: "Online Booking",
    icon: Globe,
    title: "Open 24/7 for your patients",
    desc: "Seamless, white-labeled booking experience that integrates directly into your existing website.",
    image: "/appointment.png", 
    color: "cyan"
  },
  {
    id: "emr",
    label: "Digital EMR",
    icon: FileText,
    title: "Paperless patient journeys",
    desc: "Secure, compliant, and lightning-fast medical records with custom annotation tools.",
    image: "/emr.png",
    color: "indigo"
  },
  {
    id: "workflows",
    label: "Workflows",
    icon: Zap,
    title: "Automate the mundane",
    desc: "Trigger reminders, follow-ups, and post-care instructions without lifting a finger.",
    image: "/workflow.png",
    color: "orange"
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
    title: "Integrated financial suite",
    desc: "From deposits to memberships, manage every transaction in one unified checkout.",
    image: "/payments.jpg",
    color: "emerald"
  },
];

export default function FeatureCommandCenter() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoRotate = useRef(true);
  const isAdvancing = useRef(false);

  // Auto-rotation logic with progress bar
  useEffect(() => {
    const interval = setInterval(() => {
     if (autoRotate.current) {
  setProgress((prev) => {
    if (prev >= 100) {
      if (!isAdvancing.current) {
        isAdvancing.current = true;
        setActiveIdx((current) => (current + 1) % features.length);
        setTimeout(() => { isAdvancing.current = false; }, 100);
      }
      return 0;
    }
    const next = prev + (100 / (5000 / 30));
    return next > 100 ? 100 : next;
  });
}
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleManualSelection = (index: number) => {
    setActiveIdx(index);
    setProgress(0);
    autoRotate.current = false; // Stop auto-rotation after user interacts
  };

  return (
    <div className="w-full bg-[#f8fafc] py-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-slate-900 text-4xl md:text-5xl font-sans tracking-tight leading-tight mb-6">
            Everything your clinic needs,{" "}
            <span className="text-slate-400 font-sans">in one place.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Navigation Stack */}
          <div className="lg:col-span-4 flex flex-col gap-3 order-2 lg:order-1">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => handleManualSelection(i)}
                onMouseEnter={() => { autoRotate.current = false }}
                onMouseLeave={() => { autoRotate.current = true }}
                className={`relative p-5 rounded-xl text-left transition-all duration-300 group ${
                  activeIdx === i 
                    ? "bg-white shadow-md ring-1 ring-slate-200" 
                    : "hover:bg-white/70"
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`p-2.5 rounded-lg transition-colors duration-300 ${
                    activeIdx === i ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <f.icon size={18} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-sans text-sm transition-colors ${
                      activeIdx === i ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'
                    }`}>
                      {f.label}
                    </h3>
                  </div>
                </div>

                {/* Progress Bar (Active Only) */}
                {activeIdx === i && (
                  <div 
                    className="absolute bottom-0 left-0 h-[2px] bg-cyan-500 rounded-full transition-all duration-100 ease-linear" 
                    style={{ width: `${progress}%` }} 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: Cinematic Preview */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-white">
              
              {/* Window Controls Decorator */}
              <div className="absolute top-0 w-full h-10 bg-slate-50 flex items-center px-4 gap-1.5 z-20 border-b border-slate-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-4 text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  {features[activeIdx].label}
                </div>
              </div>

              {/* Image Transition Engine */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 pt-10"
                >
                  <img
                    // 3. Since 'image' can now be a static import object, 
                    // access '.src' to get the URL string
                    src={typeof features[activeIdx].image === 'string' ? features[activeIdx].image : features[activeIdx].image}
                    alt={features[activeIdx].title}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Visual Overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Feature Badge */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-10 left-10 max-w-sm"
                  >
                    <h4 className="text-white text-2xl font-sans mb-2">
                      {features[activeIdx].title}
                    </h4>
                    <div className="h-1 w-12 bg-cyan-500 rounded-full" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Subtle Scanning Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_5s_infinite] pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}