
import { useEffect, useState } from "react"
import {
  ShieldCheck,
  Clock,
  FileText,
  Database,
  ClipboardList,
  Activity,
  Stethoscope,
  Layers3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── AI DOCUMENTATION FEATURES ───────────────────────────────────────────────

const FEATURES = [
  {
    icon: ClipboardList,
    title: "AI-Generated Consult Notes",
    description:
      "Create structured consultation notes quickly using intelligent documentation workflows.",
    cta: "Explore AI Consult Notes",
  },
  {
    icon: FileText,
    title: "Structured Clinical Documentation",
    description:
      "Generate organized medical documentation for patient visits, treatment records, and clinical workflows.",
    cta: "View Documentation Features",
  },
  {
    icon: Activity,
    title: "Smart Patient Summaries",
    description:
      "Generate concise visit summaries for faster review, follow-ups, and care coordination.",
    cta: "Explore Patient Summaries",
  },
  {
    icon: Layers3,
    title: "Faster Documentation Workflows",
    description:
      "Reduce repetitive charting and manual healthcare documentation effort using AI-powered workflows.",
    cta: "Improve Clinical Efficiency",
  },
]

// ─── HEALTHCARE OPERATIONS ──────────────────────────────────────────────────

const OPERATIONS = [
  {
    title: "Improved Clinical Efficiency",
    desc: "Reduce documentation delays and support faster healthcare workflows.",
  },
  {
    title: "Reduced Documentation Burden",
    desc: "Minimize repetitive manual charting and healthcare administrative effort.",
  },
  {
    title: "Better Record Accuracy",
    desc: "Maintain organized and structured clinical documentation across workflows.",
  },
  {
    title: "Faster Patient Workflow Management",
    desc: "Support connected patient documentation and healthcare coordination.",
  },
]

// ─── PRODUCTIVITY BENEFITS ──────────────────────────────────────────────────

const BENEFITS = [
  {
    title: "Reduce Documentation Time",
    desc: "Minimize time spent on manual note writing and repetitive charting.",
  },
  {
    title: "Improve Provider Productivity",
    desc: "Help healthcare teams manage patient documentation more efficiently.",
  },
  {
    title: "Strengthen Record Quality",
    desc: "Maintain structured, searchable, and standardized healthcare documentation.",
  },
  {
    title: "Support Better Patient Experiences",
    desc: "Free up more time for patient conversations and care delivery.",
  },
]

// ─── INTEGRATIONS ───────────────────────────────────────────────────────────

const INTEGRATIONS = [
  "Electronic Health Record Software",
  "Patient Management Systems",
  "Appointment Scheduling Tools",
  "Healthcare Workflow Platforms",
  "Patient Records Systems",
  "Clinical Reporting Dashboards",
  "Healthcare Operations Tools",
]

// ─── FAQ ────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is AI Consult Notes Software?",
    a: "AI Consult Notes Software helps healthcare providers automatically create clinical notes, patient summaries, and medical documentation using intelligent healthcare automation.",
  },
  {
    q: "How does AI Clinical Documentation Software improve healthcare workflows?",
    a: "It reduces manual documentation effort, speeds up note creation, improves record organization, and supports more efficient healthcare operations.",
  },
  {
    q: "Can AI consult notes help reduce administrative workload?",
    a: "Yes. AI-powered documentation tools help minimize repetitive note writing, charting tasks, and manual healthcare documentation processes.",
  },
  {
    q: "Is AI Consult Notes Software suitable for clinics and healthcare practices?",
    a: "Absolutely. It is designed for clinics, healthcare organizations, medical practices, and providers that need faster and more efficient documentation workflows.",
  },
  {
    q: "Can AI consult notes integrate with Electronic Health Record Software?",
    a: "Yes. AI documentation systems can work alongside Electronic Health Record Software, patient records, scheduling tools, and healthcare workflow systems.",
  },
  {
    q: "What types of documentation can AI consult note software generate?",
    a: "It can support clinical notes, patient summaries, consultation documentation, treatment records, and structured medical reporting.",
  },
]

// ─── FAQ ACCORDION ──────────────────────────────────────────────────────────

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
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
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

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function Medipay() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "AI Consult Notes Software | AI Clinical Documentation Software for Healthcare Providers"

    let descriptionMeta = document.querySelector('meta[name="description"]')

    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }

    descriptionMeta.setAttribute(
      "content",
      "Generate clinical notes, patient summaries, and healthcare documentation faster using AI Consult Notes Software. Improve clinical workflows, reduce charting time, and streamline healthcare operations.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')

    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }

    keywordsMeta.setAttribute(
      "content",
      "AI Consult Notes Software, AI Clinical Documentation Software, Healthcare Documentation Software, AI Clinical Notes Software, AI Medical Documentation Software, Healthcare Workflow Automation, Clinical Documentation Platform, AI SOAP Notes Software, AI Healthcare Notes System, Healthcare AI Documentation Tools",
    )
  }, [])

  return (
    <div className="bg-white">

      {/* ── HERO SECTION ── */}

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-primary font-medium mb-4">
              AI Consult Notes Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              AI Consult Notes Software for Faster Clinical Documentation &
              Smarter Healthcare Workflows
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Automatically generate clinical notes, consultation summaries,
              patient documentation, and structured medical records using
              intelligent AI Consult Notes Software built for modern healthcare
              providers.
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
                Book a Live Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/aiconsult.png"
                alt="AI Consult Notes Software"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── AI DOCUMENTATION OVERVIEW ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
            Create Clinical Notes Faster with AI-Powered Healthcare Documentation
          </h2>

          <div className=" text-gray-600 leading-relaxed text-lg">

            <p>
              Reduce manual charting, administrative workload, and documentation
              time with intelligent AI Clinical Documentation Software designed
              for clinics, healthcare teams, and medical practices.
            </p>

            <p>
              AI medical tools can help automate note creation and structured
              clinical summaries, reducing documentation burden for providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14 text-left">

            {[
              "AI-Generated Consult Notes",
              "Structured Clinical Documentation",
              "Smart Patient Summaries",
              "Automated Medical Record Creation",
              "Faster Documentation Workflows",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border rounded-xl p-6 bg-gray-50"
              >
                <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINICAL NOTE GENERATION ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900">
            Generate Accurate Consult Notes Without Slowing Down Care Delivery
          </h2>

          <p className="text-center text-lg text-gray-600 leading-relaxed mt-6 max-w-4xl mx-auto">
            Turn consultations into organized medical documentation using
            AI-powered note generation that supports patient visits, treatment
            records, clinical observations, and healthcare reporting.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border p-8 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <button className="text-primary font-medium hover:underline cursor-pointer">
                    {feature.cta}
                  </button>
                </div>
              )
            })}
          </div>

          <p className="text-center text-gray-600 leading-relaxed mt-12 max-w-5xl mx-auto">
            AI healthcare note systems commonly generate structured SOAP-style
            notes, summaries, and clinical documentation workflows.
          </p>
        </div>
      </section>

      {/* ── HEALTHCARE WORKFLOW SECTION ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-6">
            Integrated AI Consult Notes for Connected Healthcare Operations
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-14">
            Connect AI-generated consult notes with Electronic Health Record
            Software, patient management workflows, appointment scheduling, and
            healthcare operations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {OPERATIONS.map((item) => (
              <div
                key={item.title}
                className="border rounded-2xl p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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

      {/* ── PRODUCTIVITY & PROVIDER IMPACT ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-6">
            Spend Less Time Documenting & More Time Caring for Patients
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-14">
            Healthcare teams need documentation tools that support productivity
            without adding complexity. AI-powered consult notes help providers
            improve efficiency while maintaining organized clinical records.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 leading-relaxed mt-12 max-w-5xl mx-auto">
            AI medical scribes are increasingly used to reduce clinician
            documentation workload and improve operational efficiency.
          </p>
        </div>
      </section>

      {/* ── SECURITY SECTION ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Secure Clinical Documentation & Healthcare Data Management
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Protect patient records, consult notes, clinical summaries, and
              healthcare documentation using secure cloud-based infrastructure.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Role-based access controls help providers and healthcare teams
              manage operational visibility while maintaining organized clinical
              documentation workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="border rounded-2xl p-8 text-center">
              <Database className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Secure Clinical Infrastructure
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Role-Based Access
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <Clock className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Faster Documentation Workflows
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <Stethoscope className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Connected Healthcare Operations
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            Integrate AI Consult Notes with Your Healthcare Workflow Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTEGRATIONS.map((item) => (
              <div
                key={item}
                className="border rounded-xl p-6 bg-white text-center"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}

      <CommonTestimonials />

      {/* ── FAQ ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ── */}

      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-6">
            Modernize Clinical Documentation with AI Consult Notes Software
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            Generate consult notes, patient summaries, structured clinical
            records, and healthcare documentation using secure, intelligent AI
            Healthcare Documentation Software built for modern medical practices.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Schedule a Demo
            </Button>

            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-half px-8 h-11 cursor-pointer"
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

