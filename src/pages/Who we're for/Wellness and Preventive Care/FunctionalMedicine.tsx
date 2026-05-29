import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  LineChart,
  Pill,
  ChevronDown,
  CheckCircle2,
  Star,
  FileText,
  Shield,
  Users,
  ArrowRight,
  XCircle,
  ClipboardList,
  FolderOpen,
  UserCircle,
  CalendarCheck,
  BellRing,
  Repeat,
  ArrowUpRight,
} from "lucide-react";
import PricingTeaser from "@/components/PricingTeaser";

// --- 1. HERO SECTION ---
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
              Functional Medicine Software
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
              Grow your practice with software built for personalized care.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              The complete platform for root-cause medicine. Unify complex lab
              data, create personalized supplement plans, and save hours of
              administrative time every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/book-demo")}
                className="bg-[#009689] hover:bg-[#007a6e] text-white font-sans py-4 px-8 rounded-lg shadow-lg shadow-[#009689]/30 transition-all duration-300 text-lg"
              >
                Schedule a demo
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="bg-transparent border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-sans py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                See pricing
              </button>
            </div>
          </div>

          <div className="relative lg:ml-10 flex items-end justify-center">
            {/* Doctor Image */}
            <div className="relative flex items-end justify-center">
              {/* Glow behind doctor */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#009689]/10 blur-3xl pointer-events-none"></div>

              <img
                src="/doctor.webp"
                alt="Doctor"
                className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-2xl scale-100 origin-bottom translate-y-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="bg-white py-24 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
            Even the best functional medicine clinics hit a ceiling
            <br />
            <span className="text-slate-400 font-light italic">
              when systems can’t handle clinical depth.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Problem Side */}
          <div className="p-12 bg-slate-50/50">
            <header className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-slate-300" />
              <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                Challenges for Functional Medicine Clinics
              </p>
            </header>

            <ul className="space-y-8">
              {[
                "Patient histories spread across intake forms, notes, and disconnected lab systems",
                "Functional lab data difficult to interpret and track longitudinally",
                "Protocols managed manually across supplements, diet, and lifestyle changes",
                "Time lost connecting symptoms, root causes, and patient progress",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-slate-300 mt-0.5 stroke-[1.5px]" />
                  <span className="text-slate-500 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Side */}
          <div className="p-12 bg-white">
            <header className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#009689]" />
              <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#009689] font-semibold">
                With your functional medicine platform
              </p>
            </header>

            <ul className="space-y-8">
              {[
                "Complete patient timelines combining symptoms, lifestyle, and clinical data",
                "Clear visualization of functional labs and biomarkers over time",
                "Structured, repeatable protocols for supplements, nutrition, and interventions",
                "A single system to connect root causes, treatments, and outcomes",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#009689] mt-0.5 stroke-[2px]" />
                  <span className="text-slate-900 font-medium text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <button className="flex items-center gap-2 text-[#009689] text-sm font-sans uppercase tracking-wider group">
                See the platform in action
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. FEATURE SHOWCASE 1 (Patient Standard of Care) ---
const ShowcaseOne = () => {
  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative z-10">
              <div className="flex border-b border-slate-100 pb-4 mb-4 gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-sans">
                  EM
                </div>
                <div>
                  <h4 className="font-sans text-slate-900">Emily Mitchell</h4>
                  <p className="text-sm text-slate-500">
                    Gut Restoration Protocol
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#009689]/5 border border-[#009689]/20 p-4 rounded-xl">
                  <p className="font-semibold text-slate-800 mb-2">
                    Phase 1: Elimination
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Remove gluten, dairy, and processed sugars.</li>
                    <li>• Introduce L-Glutamine & Aloe Vera.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <p className="font-semibold text-slate-800 mb-2">
                    Recent Lab Upload
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#009689] font-medium">
                    <FileText className="w-4 h-4" /> Comprehensive Stool
                    Analysis
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6 leading-tight">
              Deliver a higher standard of care.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Empower your practitioners with clinical tools designed for deep
              analysis. Stop fighting with clunky software and spend more time
              educating and empowering your patients.
            </p>
            <ul className="space-y-5">
              {[
                "Consolidated clinical notes and timelines.",
                "Automated protocol delivery to patient portals.",
                "Direct messaging for high-touch concierge care.",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0 text-[#009689] bg-[#009689]/10 p-1.5 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700 text-lg font-medium">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. TRUST & STATS SECTION ---
const TrustStats = () => {
  return (
    <section className="bg-slate-900 py-24 text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#009689]/5 blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-700 mb-20">
          <div className="py-4 lg:py-0">
            <Shield className="w-10 h-10 text-[#009689] mx-auto mb-4" />
            <p className="text-5xl font-sans mb-2">100%</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
              HIPAA & GDPR Compliant
            </p>
          </div>
          <div className="py-4 lg:py-0">
            <Activity className="w-10 h-10 text-[#009689] mx-auto mb-4" />
            <p className="text-5xl font-sans mb-2">1M+</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
              Treatments Logged
            </p>
          </div>
          <div className="py-4 lg:py-0">
            <Users className="w-10 h-10 text-[#009689] mx-auto mb-4" />
            <p className="text-5xl font-sans mb-2">92%</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
              Patient Retention
            </p>
          </div>
          <div className="py-4 lg:py-0">
            <LineChart className="w-10 h-10 text-[#009689] mx-auto mb-4" />
            <p className="text-5xl font-sans mb-2">3.5x</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
              Avg. ROI Increase
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="flex justify-center text-yellow-500 mb-6 gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl leading-snug font-medium text-slate-200 mb-8 italic">
            "Implementing this platform transformed our clinical workflow—what
            once took hours of fragmented analysis is now a seamless,
            data-driven process that allows us to deliver deeper insights and
            truly personalized care at scale."
          </p>
          <div>
            <h4 className="font-sans text-xl text-white">Dr. Marcus Chen</h4>
            <p className="text-[#009689] font-medium">
              Functional Medicine Practitioner, London
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. FEATURE SHOWCASE 3 (Forms & Data) ---
// const ShowcaseThree = () => {
//   return (
//     <section className="bg-slate-50 py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="order-2 lg:order-1 relative">
//             <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
//               <h4 className="font-sans text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
//                 <FileText className="w-5 h-5 text-[#009689]" /> Comprehensive Intake
//               </h4>
//               <div className="space-y-5">
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 uppercase">Symptom Severity (1-10)</label>
//                   <div className="mt-2 h-2 bg-slate-100 rounded-full w-full overflow-hidden">
//                     <div className="h-full bg-[#009689] w-3/4"></div>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 uppercase">Toxic Exposures</label>
//                   <div className="mt-2 flex gap-2 flex-wrap">
//                     <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-medium">Mold</span>
//                     <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-medium">Heavy Metals</span>
//                   </div>
//                 </div>
//                 <div className="pt-4 border-t border-slate-50">
//                   <button className="w-full bg-[#009689]/10 text-[#009689] font-sans py-2 rounded-lg text-sm">View Full History</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="order-1 lg:order-2">
//             <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6 leading-tight">
//               In-depth data collection made easy.
//             </h2>
//             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//               Functional medicine demands vast amounts of context. Build incredibly detailed, automated intake questionnaires that patients complete before they ever sit down with you.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-[#009689] flex-shrink-0" />
//                 <span className="text-slate-700 font-medium">Drag-and-drop form builder.</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-[#009689] flex-shrink-0" />
//                 <span className="text-slate-700 font-medium">Automated consent signing & tracking.</span>
//               </li>
//                <li className="flex items-center gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-[#009689] flex-shrink-0" />
//                 <span className="text-slate-700 font-medium">Responses map directly into patient charts.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// --- 7. FAQ SECTION ---
const faqs = [
  {
    question: "Can I track complex longitudinal lab results over time?",
    answer:
      "Yes, our platform is built for this. You can upload results via direct integration or manually, and the system graphs biomarkers longitudinally so you can easily show patients their progress during consultations.",
  },
  {
    question: "How do personalized supplement recommendations work?",
    answer:
      "You can build protocol templates or customize specific supplement dosages, durations, and instructions for each patient. These are delivered directly to their secure patient portal.",
  },
  {
    question: "Does the scheduling handle varying appointment lengths?",
    answer:
      "Absolutely. Functional medicine requires flexibility. You can set 90-minute initial intakes, 15-minute follow-ups, and block off specific buffer times automatically.",
  },
  {
    question: "Is the platform secure and HIPAA/GDPR compliant?",
    answer:
      "Yes. From patient intake forms to messaging and charting, the entire system utilizes AES-256 encryption and adheres to strict global healthcare compliance regulations.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Answers to common questions from functional medicine practitioners.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "border-[#009689]/50 bg-[#009689]/5 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}
              >
                <button
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span
                    className={`font-sans text-lg md:text-xl pr-8 ${isOpen ? "text-[#009689]" : "text-slate-800"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 transition-transform duration-300 transform ${isOpen ? "rotate-180 text-[#009689]" : "text-slate-400"}`}
                  >
                    <div
                      className={`p-1.5 rounded-full ${isOpen ? "bg-[#009689]/10" : "bg-slate-100"}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- 8. BOTTOM CTA BANNER ---
const BottomCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden text-center z-10 border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-t from-[#009689]/10 to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-sans text-white mb-6 tracking-tight">
          Ready to scale your functional medicine practice?
        </h2>
        <p className="text-xl text-slate-300 mb-12 font-light">
          Join thousands of practitioners who are saving time, maximizing
          revenue, and delivering truly personalized root-cause care.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/book-demo")}
            className="cursor-pointer bg-[#009689] text-white font-sans py-5 px-12 rounded-xl  shadow-[#009689]/40 transition-all duration-300 text-lg md:text-xl hover:scale-105 active:scale-95"
          >
            Schedule a demo
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className="cursor-pointer bg-white text-slate-900 font-sans py-5 px-12 rounded-xl transition-all duration-300 text-lg md:text-xl hover:scale-105 active:scale-95"
          >
            See pricing
          </button>
        </div>
      </div>
    </section>
  );
};

const CoreFeatures = () => {
  const features = [
    {
      title: "Longitudinal Patient Timelines",
      description:
        "Map symptoms, lifestyle factors, and clinical events across a unified timeline. Identify root causes and uncover patterns that traditional EMRs miss.",
      icon: <LineChart className="w-8 h-8 text-[#009689]" />,
    },
    {
      title: "Functional Protocol Builder",
      description:
        "Design personalized care plans combining supplements, nutrition, detox protocols, and lifestyle interventions — tailored to each patient’s biology.",
      icon: <Pill className="w-8 h-8 text-[#009689]" />,
    },
    {
      title: "Integrated Lab & Biomarker Analysis",
      description:
        "Sync functional lab data and track biomarkers over time. Visualize trends, compare results, and translate complex data into clear patient insights.",
      icon: <Activity className="w-8 h-8 text-[#009689]" />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
            Built for root-cause medicine, not surface-level care.
          </h2>
          <p className="text-lg text-slate-600">
            Go beyond symptom management. Analyze complex patient histories,
            track functional biomarkers, and deliver truly personalized
            treatment plans — all in one unified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-[#009689]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-[#009689]">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-sans text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProdFeatures = () => {
  const features = [
    {
      icon: FileText,
      title: "Advanced Intake & Functional Assessments",
      desc: "Capture detailed patient histories, lifestyle factors, and symptom patterns with customizable intake forms tailored for root-cause analysis.",
    },
    {
      icon: FolderOpen,
      title: "Centralized Patient Records",
      desc: "Keep clinical notes, lab results, treatment plans, and patient communications organized in one secure, unified system.",
    },
    {
      icon: Activity,
      title: "Lab & Biomarker Tracking",
      desc: "Visualize lab results over time with clear graphs and timelines to identify patterns, track progress, and guide treatment decisions.",
    },
    {
      icon: LineChart,
      title: "Patient Health Timelines",
      desc: "Understand the full patient journey with longitudinal timelines that connect symptoms, lab data, and interventions in one view.",
    },
    {
      icon: ClipboardList,
      title: "Personalized Treatment Plans",
      desc: "Build structured protocols combining nutrition, lifestyle changes, and supplementation tailored to each patient’s needs.",
    },
    {
      icon: UserCircle,
      title: "Patient Portal & Engagement",
      desc: "Give patients access to their plans, notes, and progress to improve adherence and long-term outcomes.",
    },
    {
      icon: CalendarCheck,
      title: "Flexible Online Booking",
      desc: "Allow patients to book consultations and follow-ups with customizable appointment types and durations.",
    },
    {
      icon: BellRing,
      title: "Automated Reminders & Follow-ups",
      desc: "Reduce no-shows and keep care plans on track with automated reminders and follow-up workflows.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant Platform",
      desc: "Protect sensitive health data with enterprise-grade security and full HIPAA/GDPR compliance.",
    },
  ];

  return (
    <section className="bg-white py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#009689] font-medium mb-3">
            Platform Features
          </p>
          <h2 className="text-4xl text-slate-900 leading-tight mb-4">
            Everything you need to deliver
            <br />
            <em className="text-slate-400 font-normal">
              personalized, root-cause care.
            </em>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From intake and lab tracking to treatment plans and patient
            engagement — manage your entire functional medicine practice in one
            connected platform.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#009689]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#009689]" />
                </div>

                <div>
                  <h3 className="text-slate-900 font-semibold text-base mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const PlatformBenefits = () => {
  const [featureOpen, setFeatureOpen] = useState<number>(0);

  type PlatformCapability = {
    title: string;
    desc: string;
    cta?: string;
    icon: any;
  };

  const platformCapabilities: PlatformCapability[] = [
    {
      title: "Let patients book consultations and follow-ups 24/7",
      desc: "Patients can schedule initial consultations, deep-dive assessments, and follow-ups based on your real-time availability. Automated reminders reduce no-shows and keep your schedule optimized.",
      cta: "Explore Online Booking",
      icon: CalendarCheck,
    },
    {
      title: "Track labs and biomarkers in one unified timeline",
      desc: "Aggregate lab results into a visual patient timeline. Identify patterns, compare historical data, and clearly communicate progress during consultations.",
      cta: "View Lab Tracking",
      icon: LineChart,
    },
    {
      title: "Build personalized treatment plans with ease",
      desc: "Create structured protocols combining nutrition, lifestyle changes, and supplementation. Deliver clear, actionable plans tailored to each patient’s root cause.",
      icon: ClipboardList,
    },
    {
      title: "Manage programs, packages, and recurring care",
      desc: "Offer structured care programs and ongoing treatment plans with automated scheduling, billing, and tracking—without manual admin work.",
      icon: Repeat,
    },
    {
      title: "Coordinate the full patient journey",
      desc: "From intake to ongoing care, manage every touchpoint in one system. Track symptoms, labs, and interventions across the entire patient lifecycle.",
      icon: Activity,
    },
    {
      title: "Give patients visibility into their progress",
      desc: "Patients can access their lab results, treatment plans, and notes through a secure portal—helping them stay engaged and committed to their care plan.",
      cta: "Explore Patient Portal",
      icon: UserCircle,
    },
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT MOCKUP */}
        <div className="relative h-[420px] hidden lg:block">
          <div className="absolute left-0 top-8 w-56 bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <p className="text-xs font-sans text-slate-500 mb-5">ACCOUNT</p>

            <div className="space-y-4 text-sm">
              <div className="text-[#009689] font-semibold">Dashboard</div>
              <div className="text-slate-400">Personal Details</div>
              <div className="text-slate-400">Appointments</div>
              <div className="text-slate-400">Lab Results</div>
              <div className="text-slate-400">Treatment Plans</div>
            </div>
          </div>

          <div className="absolute left-36 top-16 w-80 bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-6">
            <p className="text-xs font-sans text-[#009689] mb-6">
              UPCOMING CONSULTATION
            </p>

            <h4 className="text-lg font-semibold text-slate-900">
              Dr. Marcus Chen
            </h4>

            <p className="text-slate-500 mb-6">
              Functional Medicine Practitioner
            </p>

            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <p className="text-xs uppercase">Session</p>
                <p>Follow-up Consultation</p>
              </div>

              <div>
                <p className="text-xs uppercase">Date</p>
                <p>Friday 17th April</p>
              </div>

              <div>
                <p className="text-xs uppercase">Time</p>
                <p>12:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="max-w-2xl mx-auto space-y-3">
          {platformCapabilities.map((item, i) => {
            const active = featureOpen === i;
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`transition-all duration-300 rounded-2xl border ${
                  active
                    ? "bg-white border-teal-100 shadow-[0_10px_30px_-10px_rgba(0,150,137,0.1)]"
                    : "bg-transparent border-transparent"
                }`}
              >
                <button
                  onClick={() => setFeatureOpen(active ? -1 : i)}
                  className="w-full flex items-center gap-5 py-5 px-6 text-left"
                >
                  {Icon && (
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                        active
                          ? "bg-teal-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                  )}

                  <div className="flex-1">
                    <span
                      className={`block text-lg ${
                        active ? "text-slate-900" : "text-slate-600 font-medium"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      active ? "rotate-180 text-teal-600" : "text-slate-400"
                    }`}
                    size={20}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 ml-[68px]">
                    <p className="text-slate-500 text-[15px] mb-4">
                      {item.desc}
                    </p>

                    {item.cta && (
                      <button className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm">
                        {item.cta}
                        <ArrowUpRight size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function FunctionalMedicine() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#009689]/30">
      <HeroSection />
      <Section2 />
      <CoreFeatures />
      {/* <CoreCapabilities /> */}
      <ShowcaseOne />
      <PlatformBenefits />
      <ProdFeatures />
      <PricingTeaser />
      <FaqSection />
      <TrustStats />

      <BottomCTA />
    </div>
  );
}
