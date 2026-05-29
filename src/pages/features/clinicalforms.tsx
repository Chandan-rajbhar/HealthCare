import { useEffect, useState } from "react"
import {
  ShieldCheck,
  FileText,
  Database,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Clinical Forms Software?",
    a: "Clinical Forms Software helps healthcare providers create, manage, and automate digital intake forms, clinical documentation, assessments, and healthcare workflows.",
  },
  {
    q: "How does Healthcare Clinical Forms Software improve clinic operations?",
    a: "It reduces paperwork, improves documentation accuracy, streamlines patient intake, and supports more efficient healthcare workflows.",
  },
  {
    q: "Can clinics create custom medical forms?",
    a: "Yes. Healthcare teams can build customized forms for intake, assessments, clinical documentation, treatment records, and specialty-specific workflows.",
  },
  {
    q: "Does Clinical Forms Software support digital patient intake?",
    a: "Yes. Patients can complete healthcare forms digitally before appointments, helping reduce wait times and administrative work.",
  },
  {
    q: "Can Clinical Forms Software integrate with Electronic Health Record Software?",
    a: "Yes. Clinical forms can integrate with Electronic Health Record Software, patient records, scheduling systems, and healthcare management workflows.",
  },
  {
    q: "Is Clinical Forms Software suitable for clinics and healthcare organizations?",
    a: "Absolutely. The platform supports clinics, medical practices, specialists, and growing healthcare organizations that need scalable documentation workflows.",
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

export default function ClinicalFormsSoftware() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Clinical Forms Software | Digital Patient Intake & Healthcare Documentation"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Create digital patient intake forms, clinical assessments, consent forms, and healthcare documentation workflows using secure Clinical Forms Software designed for clinics and healthcare providers.",
    )
  }, [])

  return (
    <div className="bg-white">

      {/* ───────────────── HERO SECTION ───────────────── */}

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-primary font-medium mb-4">
              Clinical Forms Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Clinical Forms Software for Digital Patient Intake &
              Smarter Healthcare Documentation
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Create digital patient intake forms, clinical assessments,
              consent forms, and structured medical documentation using
              secure Clinical Forms Software built for modern clinics and
              healthcare providers.
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
                Schedule a Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/clinicalforms.png"
                alt="Clinical Forms Software"
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
              Simplify Clinical Documentation with Digital Healthcare Forms
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Reduce paperwork, improve patient data collection, and
              streamline healthcare workflows using customizable
              Healthcare Clinical Forms Software connected to your
              clinical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

            {[
              "Digital Patient Intake Forms",
              "Clinical Assessment Templates",
              "Medical Consent Forms",
              "Custom Healthcare Form Builder",
              "Structured Documentation Workflows",
            ].map((item) => (
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
              Digital forms help healthcare teams standardize documentation
              and reduce manual intake processes.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── CUSTOM FORMS SECTION ───────────────── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Create Clinical Forms That Match Your Healthcare Workflow
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Build customized forms for patient registration,
              consultations, assessments, treatment documentation,
              onboarding, and specialty-specific healthcare workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {[
              {
                title: "Custom Form Builder",
                desc: "Design healthcare forms tailored to your clinic, specialty, or provider requirements.",
              },
              {
                title: "Patient Intake & Registration Forms",
                desc: "Collect medical history, demographics, symptoms, and healthcare information digitally.",
              },
              {
                title: "Clinical Documentation Templates",
                desc: "Standardize notes, assessments, evaluations, and healthcare reporting.",
              },
              {
                title: "Consent & Healthcare Compliance Forms",
                desc: "Manage digital consent forms, acknowledgements, and documentation requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-primary" />
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

          <div className="max-w-5xl mx-auto text-center mt-14">
            <p className="text-lg text-gray-600 leading-relaxed">
              Healthcare teams increasingly use digital intake and
              customizable documentation forms integrated into EHR
              workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── CONNECTED WORKFLOW SECTION ───────────────── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Connect Clinical Forms with Electronic Health Record Software
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Integrate Clinical Forms Software with Electronic Health
              Record Software, appointment scheduling, patient management,
              and healthcare workflows to create one connected operational
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

            {[
              "Faster Patient Intake",
              "Reduced Administrative Work",
              "Better Data Accuracy",
              "Connected Healthcare Records",
              "Improved Clinical Coordination",
            ].map((item) => (
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
              Digital healthcare workflows improve documentation quality
              and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── PRODUCTIVITY SECTION ───────────────── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Improve Clinical Efficiency & Deliver Better Patient Experiences
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Modern healthcare teams need documentation tools that simplify
              work without creating complexity. Clinical Forms Software helps
              providers improve workflows while making healthcare interactions
              easier for patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {[
              {
                title: "Faster Check-In Experience",
                desc: "Allow patients to complete forms digitally before appointments.",
              },
              {
                title: "Reduced Manual Data Entry",
                desc: "Minimize repetitive paperwork and administrative workload.",
              },
              {
                title: "Better Documentation Accuracy",
                desc: "Capture structured healthcare information more consistently.",
              },
              {
                title: "Stronger Operational Productivity",
                desc: "Help teams manage intake, forms, and records more efficiently.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-primary" />
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

          <div className="max-w-4xl mx-auto text-center mt-14">
            <p className="text-lg text-gray-600 leading-relaxed">
              Digital forms often improve intake speed, reduce paperwork,
              and support smoother healthcare operations.
            </p>
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
            Modernize Documentation with Clinical Forms Software
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            Create digital intake forms, medical assessments, consent forms,
            and connected healthcare documentation workflows using secure,
            cloud-based Healthcare Clinical Forms Software designed for
            modern clinics.
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
