import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  Activity,
  Star,
  Shield,
  Users,
  LineChart,
  Pill,
  Clock,
} from "lucide-react";
import PricingTeaser from "@/components/PricingTeaser";
import { XCircle, ArrowRight } from "lucide-react";
// --- Local Components ---
import {
  Mic,
  ClipboardList,
  FolderOpen,
  Video,
  UserCircle,
  CalendarCheck,
  BellRing,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    category: "Clinical",
    title: "AI-Assisted Assessment Notes",
    desc: "Capture diagnostic interviews and clinical observations in real time. Notes are structured and ready before your next patient arrives — no after-hours write-ups.",
  },
  {
    icon: ClipboardList,
    category: "Clinical",
    title: "Digital Intake & Rating Scales",
    desc: "Send psychiatric history forms, consent documents, and tools like the ASRS or Vanderbilt scale automatically when patients book.",
  },
  {
    icon: FolderOpen,
    category: "Clinical",
    title: "Centralised Patient Records",
    desc: "Store assessment reports, diagnostic notes, treatment plans, and medication history securely in one place — accessible at every visit.",
  },
  {
    icon: Pill,
    category: "Clinical",
    title: "Medication & Follow-Up Tracking",
    desc: "Monitor stimulant and non-stimulant prescriptions, track titration progress, and schedule regular medication management check-ins.",
  },
  {
    icon: Video,
    category: "Clinical",
    title: "Telehealth for Remote Evaluations",
    desc: "Run virtual assessments, medication reviews, and parent coaching sessions through integrated video — no extra platform needed.",
  },
  {
    icon: UserCircle,
    category: "Patient",
    title: "Patient Portal",
    desc: "Patients and families can book appointments, access assessment reports, complete pre-visit forms, and message their clinician securely.",
  },
  {
    icon: CalendarCheck,
    category: "Scheduling",
    title: "Flexible Appointment Scheduling",
    desc: "Manage initial evaluations, follow-ups, and recurring medication reviews with automated booking and deposit collection.",
  },
  {
    icon: BellRing,
    category: "Scheduling",
    title: "Reminders & Waitlist Management",
    desc: "Automated reminders reduce missed slots. When cancellations happen, waitlisted patients are notified instantly.",
  },
  {
    icon: Smartphone,
    category: "Practice",
    title: "Manage Your Clinic On the Go",
    desc: "Check schedules, review patient notes, and update records from your mobile — whether you're between assessments or off-site.",
  },
  {
    icon: ShieldCheck,
    category: "Practice",
    title: "Secure & Fully Compliant",
    desc: "Built for sensitive diagnostic data with end-to-end encryption, role-based access, and HIPAA/GDPR compliance built in.",
  },
];

const faqs = [
  {
    question: "Is this software suitable for ADHD assessment clinics?",
    answer:
      "Yes. It supports clinicians running evaluations for children, adolescents, and adults — covering clinical documentation, scheduling, and patient engagement in one system.",
  },
  {
    question: "Can it handle ADHD rating scales and screening forms?",
    answer:
      "Yes. Digital forms capture intake details, psychiatric history, and screening tools before appointments. All completed forms are stored in the patient record for easy reference.",
  },
  {
    question: "How does it reduce documentation time for assessors?",
    answer:
      "AI-powered note capture transcribes clinical interviews in real time, so clinicians finish documentation during or right after evaluations — not late at night.",
  },
  {
    question: "Does it support telehealth for virtual ADHD evaluations?",
    answer:
      "Yes. Integrated video lets you run remote assessments and medication reviews without switching platforms, keeping all records in one place.",
  },
  {
    question:
      "Can patients access their reports for school or workplace accommodations?",
    answer:
      "Yes. The patient portal gives secure access to assessment documentation, which can support requests for education plans or workplace adjustments.",
  },
  {
    question: "Is it compliant with healthcare data protection requirements?",
    answer:
      "Yes. The platform supports HIPAA and GDPR compliance with role-based access, encryption, and full audit trails across every workflow.",
  },
];

const portalFeatures = [
  {
    title: "Let patients book and pay without calling your front desk",
    desc: "Round-the-clock online scheduling with upfront deposit collection means evaluations get confirmed outside office hours — no phone tag required.",
    cta: "Discover Online Bookings",
  },
  {
    title: "Cut no-shows before they drain your schedule",
    desc: "Automated SMS and email reminders go out ahead of every evaluation and follow-up so patients arrive prepared — or cancel with enough notice to rebook.",
  },
  {
    title: "Auto-fill cancellations from your waitlist",
    desc: "When a slot opens up, waitlisted patients are notified immediately and can claim it themselves — no manual calls needed.",
  },
  {
    title: "Guard your revenue with deposits and cancellation rules",
    desc: "Collect deposits at the time of booking and set clear cancellation policies so last-minute dropouts don't leave empty, unbillable slots.",
  },
  {
    title: "Give patients secure access to their assessment records",
    desc: "A private client portal lets patients view their reports, upcoming appointments, and intake documents — useful for school accommodations or workplace support requests.",
    cta: "Discover Client Portal",
  },
];
// --- Main Page Component ---

export default function ADHD() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [featureOpen, setFeatureOpen] = useState(0);
  const [active, _setActive] = useState("All");

  const filtered =
    active === "All" ? features : features.filter((f) => f.category === active);
  return (
    <div className="bg-white font-sans selection:bg-[#009689]/30">
      {/* 1. Hero Section (Dark Theme) */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
                Built for ADHD Assessment Clinics
              </div>
              <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
                The organised system your ADHD clinic actually needs.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                Manage ADHD assessments, rating scales, intake forms, and
                follow-up care — all from one connected platform built for
                evidence-based practice.{" "}
              </p>{" "}
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

      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
              Even the best ADHD clinics hit a wall
              <br />
              <span className="text-slate-400 font-light italic">
                when systems can't keep up.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Problem Side */}
            <div className="p-12 bg-slate-50/50">
              <header className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-slate-300" />
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                  Challenges for ADHD Clinics
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Nearly half of clinician time lost to documentation instead of patient interviews",
                  "Rating scales and psychiatric history forms arrive incomplete or are filled in-session",
                  "Assessment reports pile up after long evaluation days",
                  "Missed appointments disrupt tightly scheduled diagnostic slots",
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
                  With Functional
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Digital intake forms and symptom checklists completed before patients arrive",
                  "AI-assisted notes finished during appointments — not after hours",
                  "Automated reminders cut missed evaluations by up to 30%",
                  "Centralised records track diagnosis, treatment response, and all follow-ups",
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

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
              Everything you need to run and scale your mental health clinic
            </h2>
            <p className="text-lg text-slate-600">
              Automate workflows, improve patient outcomes, and increase
              retention — all from a platform built specifically for mental
              health clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock className="w-8 h-8 text-[#009689]" />,
                title: "Save time on documentation",
                description:
                  "Automate therapy notes, intake forms, and follow-ups so clinicians can focus more on sessions and less on admin work.",
                stat: "4.2 hrs",
                statLabel: "saved per clinician per week",
              },
              {
                icon: <Activity className="w-8 h-8 text-[#009689]" />,
                title: "Improve patient outcomes",
                description:
                  "Track therapy progress, session history, and treatment plans with clear timelines and structured insights.",
                stat: "89%",
                statLabel: "improved care visibility",
              },
              {
                icon: <LineChart className="w-8 h-8 text-[#009689]" />,
                title: "Increase retention & revenue",
                description:
                  "Reduce missed sessions and improve continuity of care with automated reminders, deposits, and recurring bookings.",
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

      {/* 3. Feature Showcase 1 (Paperless Consents & Medical Records) */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#009689]/10 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="bg-white border border-slate-200 p-2 rounded-2xl shadow-xl relative z-10">
                <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-8">
                  <div className="w-full max-w-sm bg-white shadow-sm border border-slate-100 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
                      <div>
                        <h4 className="text-lg font-sans text-slate-900">
                          Patient Chart
                        </h4>
                        <p className="text-sm text-slate-500">
                          Psychotherapy Treatment Plan
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                      <div className="h-4 bg-slate-100 rounded w-4/6"></div>
                    </div>
                    <button className="w-full mt-6 bg-[#009689]/10 text-[#009689] font-sans py-2 rounded-md">
                      View Complete Record
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-[#009689]/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#009689]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6">
                Complete assessment records, all in one place
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Capture every step of the evaluation journey — from screening
                forms to diagnostic interviews, reports, and ongoing medication
                management.
              </p>
              <ul className="space-y-5">
                {[
                  "Digital intake forms and standardised rating scales sent before appointments",
                  "Structured assessment notes, diagnostic reports, and treatment plans",
                  "Track patient progress across follow-up and medication management visits",
                  "Automated post-visit resources and long-term care tracking",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-[#009689]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT MOCKUP */}
          <div className="relative h-[420px] hidden lg:block">
            <div className="absolute left-0 top-8 w-56 bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <p className="text-xs font-sans text-slate-500 mb-5">ACCOUNT</p>

              <div className="space-y-4 text-sm">
                <div className="text-[#009689] font-semibold">Dashboard</div>
                <div className="text-slate-400">Personal Details</div>
                <div className="text-slate-400">Payments</div>
                <div className="text-slate-400">Appointments</div>
                <div className="text-slate-400">Therapy Notes</div>
              </div>
            </div>

            <div className="absolute left-36 top-16 w-80 bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-6">
              <p className="text-xs font-sans text-[#009689] mb-6">
                UPCOMING APPOINTMENT
              </p>

              <h4 className="text-lg font-semibold text-slate-900">
                Dr. Marcus Chen
              </h4>

              <p className="text-slate-500 mb-6">Clinical Psychologist</p>

              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="text-xs uppercase">Service</p>
                  <p>Mental Health Counseling</p>
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
          <div>
            {portalFeatures.map((item, i) => {
              const active = featureOpen === i;

              return (
                <div key={i} className="border-b border-slate-300">
                  <button
                    onClick={() => setFeatureOpen(active ? -1 : i)}
                    className={`w-full flex justify-between items-start text-left py-6 px-5 ${
                      active
                        ? "bg-white border border-[#009689] rounded-t-xl"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-xl leading-snug ${
                        active
                          ? "font-semibold text-slate-900"
                          : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </span>

                    <span className="text-[#009689] text-xl">
                      {active ? "−" : "+"}
                    </span>
                  </button>

                  {active && (
                    <div className="bg-white border border-[#009689] border-t-0 rounded-b-xl px-5 pb-6">
                      <p className="text-slate-600 leading-7 mb-4">
                        {item.desc}
                      </p>

                      {item.cta && (
                        <button className="text-[#009689] font-semibold">
                          {item.cta} ↗
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Feature Showcase 3 (Stock & Inventory Management) */}
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
            {filtered.map((feature, i) => {
              const Icon = feature.icon;
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

      <PricingTeaser />

      {/* 7. FAQ Section */}

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from ADHD clinic owners and assessors.
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

      {/* 5. Trust & Stats Section (Dark Theme) */}
      <section className="bg-slate-900 py-24 text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#009689]/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-700 mb-20">
            <div className="py-4 lg:py-0">
              <Shield className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">100%</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                HIPAA Compliant
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <Activity className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">1M+</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                Assessments Completed
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
              "Our clinicians used to spend evenings catching up on notes. Now
              documentation is done before the next patient walks in — it's
              changed how we run our entire practice."
            </p>
            <div>
              <h4 className="font-sans text-xl text-white">Dr. Marcus Chen</h4>
              <p className="text-[#009689] font-medium">
                Medical Director, Apex Longevity Institute
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden text-center pt-12">
        <div className="absolute inset-0 bg-gradient-to-t from-[#009689]/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
            Scale your ADHD clinic without the admin overload.
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            See how ADHD assessment clinics cut documentation time, reduce
            missed appointments, and grow their caseload — all from one
            platform.
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
    </div>
  );
}
