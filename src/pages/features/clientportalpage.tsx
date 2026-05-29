import { useEffect, useState } from "react"
import {
  ShieldCheck,
  CalendarDays,
  FileText,
  MessageSquare,
  Smartphone,
  Database,
  Clock,
  UserCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─────────────────────────────────────────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────────────────────────────────────────

const FEATURES = [
  "Secure Patient Login",
  "Appointment Management",
  "Digital Health Record Access",
  "Secure Patient Communication",
  "Online Payments & Forms",
]

// ─────────────────────────────────────────────────────────────────────────────
// PATIENT EXPERIENCE
// ─────────────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    icon: CalendarDays,
    title: "Appointment Access & Scheduling",
    description:
      "Allow patients to book, reschedule, and manage appointments online.",
  },
  {
    icon: FileText,
    title: "Medical Record Visibility",
    description:
      "Provide secure access to patient records, visit summaries, lab reports, and healthcare information.",
  },
  {
    icon: MessageSquare,
    title: "Secure Communication",
    description:
      "Support trusted messaging between patients and healthcare teams.",
  },
  {
    icon: Smartphone,
    title: "Payments & Digital Forms",
    description:
      "Simplify billing, forms, and patient onboarding through one digital portal.",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// HEALTHCARE WORKFLOW BENEFITS
// ─────────────────────────────────────────────────────────────────────────────

const WORKFLOW_BENEFITS = [
  "Improved Patient Engagement",
  "Reduced Administrative Workload",
  "Faster Communication Workflows",
  "Better Scheduling Coordination",
  "Stronger Operational Efficiency",
]

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTIVITY OUTCOMES
// ─────────────────────────────────────────────────────────────────────────────

const OUTCOMES = [
  {
    title: "Better Patient Accessibility",
    desc: "Give patients access to healthcare information anytime, from any device.",
  },
  {
    title: "Reduced Front-Desk Workload",
    desc: "Minimize phone calls, manual coordination, and repetitive administrative tasks.",
  },
  {
    title: "Stronger Patient Communication",
    desc: "Create faster, clearer communication between patients and providers.",
  },
  {
    title: "Improved Operational Visibility",
    desc: "Manage patient interactions, appointments, and workflows from one dashboard.",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Client Portal Software?",
    a: "Healthcare Client Portal Software is a secure digital platform that allows patients to access appointments, health records, forms, payments, and communication tools in one place.",
  },
  {
    q: "How does Patient Portal Software improve patient engagement?",
    a: "Patient Portal Software helps patients stay connected with healthcare providers by simplifying scheduling, record access, communication, and healthcare interactions.",
  },
  {
    q: "Can patients access medical records through the client portal?",
    a: "Yes. Patients can securely view healthcare information, visit summaries, reports, and other authorized medical records through the portal.",
  },
  {
    q: "Does the portal support online appointment management?",
    a: "Yes. Patients can schedule, update, reschedule, and manage appointments using integrated appointment management tools.",
  },
  {
    q: "Can Healthcare Client Portal Software reduce administrative workload?",
    a: "Yes. Digital workflows help reduce manual paperwork, front-desk coordination, and repetitive communication tasks.",
  },
  {
    q: "Does the portal integrate with Electronic Health Record Software?",
    a: "Yes. Many healthcare client portals connect with Electronic Health Record Software, billing systems, scheduling tools, and healthcare operations platforms.",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// FAQ ACCORDION
// ─────────────────────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={index}>
            <button
              className="w-full flex items-center justify-between py-6 text-left gap-4"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span
                className={`text-base font-semibold ${
                  isOpen ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {item.q}
              </span>

              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? "bg-primary text-white" : "text-gray-400"
                }`}
              >
                {isOpen ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </span>
            </button>

            {isOpen && (
              <p className="text-gray-500 text-sm leading-relaxed pb-6">
                {item.a}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function HealthcareClientPortal() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Healthcare Client Portal Software | Patient Portal Software for Clinics & Healthcare Providers"

    let descriptionMeta = document.querySelector('meta[name="description"]')

    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }

    descriptionMeta.setAttribute(
      "content",
      "Enable secure patient access, appointment scheduling, medical records, communication, and digital healthcare workflows using Healthcare Client Portal Software built for modern clinics and healthcare providers.",
    )
  }, [])

  return (
    <div className="bg-white">

      {/* ───────────────── HERO SECTION ───────────────── */}

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-primary font-medium mb-4">
              Healthcare Client Portal Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Healthcare Client Portal Software for Better Patient Access &
              Connected Care
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Give patients secure access to appointments, medical records,
              payments, clinical updates, and healthcare communication using an
              intelligent Healthcare Client Portal Software built for modern
              clinics and healthcare providers.
            </p>

            <div className="flex flex-wrap gap-4">

              <Button
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/free-trial")}
              >
                Start Free Trial
              </Button>

              <Button
                variant="outline"
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Schedule Live Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/clientportal.png"
                alt="Healthcare Client Portal Software"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── OVERVIEW SECTION ───────────────── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              One Secure Patient Portal for Appointments, Records &
              Communication
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Improve patient engagement with a connected Patient Portal
              Software that allows patients to manage appointments, access
              health information, complete digital forms, and communicate with
              healthcare providers from one centralized experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

            {FEATURES.map((item) => (
              <div
                key={item}
                className="bg-gray-50 border rounded-2xl p-6 text-center"
              >
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-4" />

                <p className="text-gray-800 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Patient portals help patients securely access records,
              appointments, payments, and provider communication from a single
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── PATIENT EXPERIENCE SECTION ───────────────── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Deliver a Modern Digital Experience for Every Patient
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Reduce administrative friction by giving patients the tools they
              need to schedule visits, review healthcare information, manage
              forms, and stay connected with providers through secure
              Healthcare Portal Software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {EXPERIENCE.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border p-8 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="max-w-5xl mx-auto text-center mt-14">
            <p className="text-lg text-gray-600 leading-relaxed">
              Modern patient portals commonly support records access, secure
              messaging, appointment management, and digital workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── WORKFLOW SECTION ───────────────── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Integrated Client Portal Software for Connected Healthcare
              Operations
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Connect patient interactions with Electronic Health Record
              Software, scheduling systems, billing workflows, and healthcare
              management operations through one unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

            {WORKFLOW_BENEFITS.map((item) => (
              <div
                key={item}
                className="border rounded-2xl p-6 text-center bg-gray-50"
              >
                <Database className="w-8 h-8 text-primary mx-auto mb-4" />

                <p className="text-gray-800 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto mt-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Integrated patient portals strengthen communication,
              scheduling, and EHR-connected workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── PRODUCTIVITY SECTION ───────────────── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Improve Patient Engagement While Reducing Administrative Burden
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Modern healthcare organizations need patient experiences that are
              simple, accessible, and connected. A secure Healthcare Client
              Portal Software solution helps teams improve communication,
              streamline workflows, and strengthen patient relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {OUTCOMES.map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── TESTIMONIALS ───────────────── */}

      <CommonTestimonials />

      {/* ───────────────── FAQ SECTION ───────────────── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ───────────────── FINAL CTA SECTION ───────────────── */}

      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-6">
            Modernize Patient Engagement with Healthcare Client Portal Software
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            Enable secure patient access, appointment management, healthcare
            communication, digital forms, and connected healthcare workflows
            using cloud-based Patient Portal Software built for modern clinics.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Book a Demo
            </Button>

            <Button
              variant="outline"
              className="border-white text-white bg-whitetext-black rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/free-trial")}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
