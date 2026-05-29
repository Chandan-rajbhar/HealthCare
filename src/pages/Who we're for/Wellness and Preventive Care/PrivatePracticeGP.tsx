import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  FileText,
  Receipt,
  Repeat,
  ShieldCheck,
  Smartphone,
  Star,
  Stethoscope,
  UserCircle,
  UserRound,
  Video,
  XCircle,
} from "lucide-react";
import { Activity, LineChart, Shield, Users } from "lucide-react";
import PricingTeaser from "@/components/PricingTeaser";

const Prodfeatures = [
  {
    icon: Stethoscope,
    category: "Clinical",
    title: "Smart Consultation Notes",
    desc: "Create structured GP notes quickly with templates, history tracking, and faster documentation.",
  },
  {
    icon: FileText,
    category: "Clinical",
    title: "Centralised Patient Records",
    desc: "Access consultations, prescriptions, test results, referrals, and history in one secure place.",
  },
  {
    icon: UserRound,
    category: "Patient",
    title: "Patient Portal",
    desc: "Patients can view appointments, invoices, forms, and important updates anytime.",
  },
  {
    icon: Video,
    category: "Clinical",
    title: "Integrated Telehealth",
    desc: "Run secure virtual GP consultations with built-in video and seamless patient access.",
  },
  {
    icon: CalendarDays,
    category: "Scheduling",
    title: "24/7 Online Booking",
    desc: "Let patients book appointments anytime based on your live calendar availability.",
  },
  {
    icon: BellRing,
    category: "Scheduling",
    title: "Reminders & Follow-ups",
    desc: "Reduce missed appointments with automated SMS and email reminders.",
  },
  {
    icon: Receipt,
    category: "Billing",
    title: "Billing & Invoicing",
    desc: "Generate invoices instantly, track payments, and simplify private billing workflows.",
  },
  {
    icon: Repeat,
    category: "Practice",
    title: "Recurring Care Plans",
    desc: "Manage ongoing treatment plans, repeat visits, and scheduled follow-up care.",
  },
  {
    icon: Smartphone,
    category: "Practice",
    title: "Manage On the Go",
    desc: "Access schedules, patient notes, and updates from anywhere on any device.",
  },
  {
    icon: ShieldCheck,
    category: "Practice",
    title: "Secure & Fully Compliant",
    desc: "Protect patient data with enterprise-grade security and GDPR-ready compliance.",
  },
];

type PortalFeature = {
  title: string;
  desc: string;
  cta?: string;
  icon: any;
};

const portalFeatures: PortalFeature[] = [
  {
    title: "Let patients book appointments 24/7 without phone calls",
    desc: "Patients can view your real-time availability and book consultations anytime. Automated SMS and email reminders reduce no-shows and keep your schedule running smoothly.",
    cta: "Discover Online Bookings",
    icon: CalendarCheck,
  },
  {
    title: "Manage repeat prescriptions and chronic care plans",
    desc: "Create structured care plans for long-term conditions. Track reviews, medication renewals, and follow-ups automatically with full visibility into each patient's ongoing treatment.",
    icon: ClipboardList,
  },
  {
    title: "Streamline referrals and follow-up care",
    desc: "Issue referral letters, track specialist responses, and schedule follow-up appointments — all linked to the patient record with no manual chasing required.",
    icon: Repeat,
  },
  {
    title: "Run group health checks and wellness clinics",
    desc: "Organise group sessions such as NHS health checks or lifestyle clinics, manage attendance, and handle registrations alongside individual appointments from one system.",
    icon: Users,
  },
  {
    title: "Give patients visibility into their health journey",
    desc: "Patients can view consultation notes, upcoming appointments, test results, and shared resources — keeping them engaged and informed between visits.",
    cta: "Discover Patient Portal",
    icon: UserCircle,
  },
];

// --- HERO SECTION ---
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
              Private GP Practice Software
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
              Run your private practice without the admin overload.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Manage appointments, patient records, and billing in one place.
              Save hours every week and focus on delivering high-quality care —
              not admin work.
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
              GDPR Compliant
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
            "This platform completely transformed our clinic. Automated bookings
            and seamless records have saved our team over 15 hours a week — we
            can finally focus on patients instead of admin."
          </p>
          <div>
            <h4 className="font-sans text-xl text-white">Dr. Marcus Chen</h4>
            <p className="text-[#009689] font-medium">Private GP, London</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ SECTION ---
const faqs = [
  {
    question: "Is patient data secure and HIPAA/GDPR compliant?",
    answer:
      "Absolutely. We use bank-level encryption for data in transit and at rest. Our systems are built to support HIPAA, GDPR, and modern healthcare privacy standards.",
  },
  {
    question: "How long does onboarding and migration take?",
    answer:
      "Most private GP practices are fully set up within a few days. Our onboarding team helps migrate patient records, schedules, and workflows with minimal disruption.",
  },
  {
    question: "Can patients book appointments online?",
    answer:
      "Yes. Patients can book online 24/7 based on your real-time availability, helping reduce phone calls and admin workload.",
  },
  {
    question: "Does the platform support invoicing and payments?",
    answer:
      "Yes. Create invoices instantly, accept online payments, track balances, and simplify private billing from one system.",
  },
  {
    question: "Is this suitable for solo GPs and multi-doctor clinics?",
    answer:
      "Yes. Our platform scales from solo private practices to growing multi-provider clinics with shared calendars, permissions, and reporting.",
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
            Common questions from private GPs and practice owners.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "border-[#009689]/50 bg-[#009689]/10/30 shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
              >
                <button
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span
                    className={`font-sans text-lg md:text-xl pr-8 ${isOpen ? "text-[#007a6e]" : "text-slate-800"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 transition-transform duration-300 transform ${isOpen ? "rotate-180 text-[#009689]" : "text-slate-400"}`}
                  >
                    <div
                      className={`p-1.5 rounded-full ${isOpen ? "bg-[#009689]/20" : "bg-slate-100"}`}
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

// --- BOTTOM CTA BANNER ---
const BottomCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-[#009689]/10 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
          Ready to scale your private practice?
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Join thousands of modern practices delivering elevated patient care.
          Start your transition today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/book-demo")}
            className="bg-[#009689] hover:bg-[#007a6e] text-white font-sans py-4 px-10 rounded-lg shadow-lg shadow-[#009689]/30 transition-all duration-300 text-lg"
          >
            Schedule a demo
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className="bg-white hover:bg-slate-50 text-slate-900 font-sans py-4 px-10 rounded-lg transition-all duration-300 text-lg"
          >
            See pricing
          </button>
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <>
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
              Even the best private GPs hit a wall
              <br />
              <span className="text-slate-400 font-light italic">
                when admin work takes over.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Problem Side */}
            <div className="p-12 bg-slate-50/50">
              <header className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-slate-300" />
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                  Challenges for Private GP Practices
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Hours lost managing appointments, cancellations, and rescheduling manually",
                  "Patient records spread across paper files, emails, and disconnected systems",
                  "Billing delays and admin errors slowing down cash flow",
                  "Too much admin reducing time available for consultations and patient care",
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
                  With your all-in-one GP platform
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Appointments, cancellations, and reminders handled automatically",
                  "Secure digital patient records, notes, and history in one place",
                  "Faster invoicing, smoother payments, and stronger revenue flow",
                  "More time to focus on patients instead of administrative work",
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
                <button className="flex items-center gap-2 text-[#009689] text-sm font-sans font-sans uppercase tracking-wider group">
                  See the platform in action
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Section3 = () => {
  return (
    <>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
              Everything you need to run and scale your private GP practice
              without burnout.
            </h2>
            <p className="text-lg text-slate-600">
              From scheduling and patient management to clinical notes and
              billing — all the tools you need to grow your private GP practice
              without administrative overload.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock className="w-8 h-8 text-[#009689]" />,
                title: "Reduce admin workload",
                description:
                  "Automate bookings, patient intake, consultation notes, and follow-ups so your team spends less time on repetitive tasks.",
                stat: "4.2 hrs",
                statLabel: "saved per doctor per week",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#009689]" />,
                title: "Deliver safer patient care",
                description:
                  "Keep medical history, prescriptions, allergies, and consultation notes securely organised in one place.",
                stat: "89%",
                statLabel: "improved care visibility",
              },
              {
                icon: <LineChart className="w-8 h-8 text-[#009689]" />,
                title: "Grow revenue consistently",
                description:
                  "Reduce no-shows, streamline billing, and improve repeat bookings with reminders and smoother patient journeys.",
                stat: "3.1x",
                statLabel: "higher patient retention",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-[#009689]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-sans text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-2xl font-sans text-[#009689]">
                    {feature.stat}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mt-1">
                    {feature.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Features = () => {
  return (
    <>
      <section className="bg-white py-24 border-y border-slate-100">
        <style>{`

        .feat-card {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .feat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px -8px rgba(0,150,137,0.13);
        }
        .filter-btn {
          transition: background 0.15s, color 0.15s;
        }
       `}</style>

        <div
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#009689] font-medium mb-3">
              Platform Features
            </p>
            <h2
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="text-4xl text-slate-900 leading-tight mb-4"
            >
              One platform for your
              <br />
              <em className="text-slate-400 font-normal">
                entire clinic workflow.
              </em>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              From the first patient interaction to billing and compliance —
              everything your team needs is already here.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Prodfeatures.map((Prodfeature, i) => {
              const Icon = Prodfeature.icon;
              return (
                <div
                  key={i}
                  className="feat-card bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#009689]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#009689]" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-slate-900 font-semibold text-base mb-1.5">
                      {Prodfeature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {Prodfeature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureAccordion = () => {
  const [featureOpen, setFeatureOpen] = useState<number>(0);

  return (
    <>
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
   
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/private-practice.png"
              alt="Patient dashboard preview"
              className="w-full max-w-sm lg:max-w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* RIGHT ACCORDION */}
          <div className="max-w-2xl mx-auto space-y-3">
            {portalFeatures.map((item, i) => {
              const active = featureOpen === i;
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className={`transition-all duration-300 rounded-2xl border ${
                    active
                      ? "bg-white border-teal-100 shadow-[0_10px_30px_-10px_rgba(0,150,137,0.1)] shadow-teal-900/5"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setFeatureOpen(active ? -1 : i)}
                    className="w-full flex items-center gap-5 py-5 px-6 text-left"
                  >
                    {/* Icon Wrapper */}
                    {Icon && (
                      <div
                        className={`flex shrink-0 items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 ${
                          active
                            ? "bg-teal-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon size={24} strokeWidth={2} />
                      </div>
                    )}

                    <div className="flex-1">
                      <span
                        className={`block text-lg transition-colors duration-300 ${
                          active
                            ? "font-sans text-slate-900"
                            : "font-medium text-slate-600"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Animated Chevron */}
                    <ChevronDown
                      className={`transition-transform duration-300 text-slate-400 ${
                        active ? "rotate-180 text-teal-600" : ""
                      }`}
                      size={20}
                    />
                  </button>

                  {/* Content Area with smooth height feel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 ml-[68px]">
                      {" "}
                      {/* Aligns text with the title, skipping icon width */}
                      <p className="text-slate-500 leading-relaxed text-[15px] mb-4">
                        {item.desc}
                      </p>
                      {item.cta && (
                        <button className="group flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                          {item.cta}
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
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
    </>
  );
};

// --- MAIN PAGE COMPONENT ---
const PrivatePracticeGP = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Section2 />
      <Section3 />
      <FeatureAccordion />
      <Features />
      <PricingTeaser />
      <FaqSection />
      <TrustStats />
      <BottomCTA />
    </main>
  );
};

export default PrivatePracticeGP;
