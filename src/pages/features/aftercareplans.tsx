import { useEffect, useState } from "react"
import {
  FileText,
  ShieldCheck,
  Clock,
  ClipboardCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── FEATURES ────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: "Personalized aftercare plans",
    description:
      "Create customized recovery plans, treatment instructions, medication guidance, and wellness recommendations tailored to individual patient needs.",
  },
  {
    icon: Clock,
    title: "Automated follow-up scheduling",
    description:
      "Simplify patient follow-ups with automated appointment reminders, recurring check-ins, and ongoing recovery monitoring workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Centralized patient communication",
    description:
      "Improve provider and patient communication through digital aftercare instructions, reminders, updates, and follow-up coordination tools.",
  },
  {
    icon: FileText,
    title: "Integrated patient records",
    description:
      "Connect aftercare plans directly with patient records, prescriptions, clinical notes, treatment histories, and healthcare documentation.",
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Aftercare Plan Management Software?",
    a: "Aftercare Plan Management Software helps healthcare providers manage patient recovery plans, follow-up workflows, post-treatment communication, and ongoing care coordination.",
  },
  {
    q: "How does aftercare software improve patient recovery?",
    a: "The platform improves patient recovery by organizing follow-up care, automating reminders, improving communication, and supporting consistent healthcare workflows.",
  },
  {
    q: "Can healthcare providers automate follow-up appointments?",
    a: "Yes. The software supports automated appointment scheduling, patient reminders, recurring follow-ups, and care coordination workflows.",
  },
  {
    q: "Does the platform integrate with patient records?",
    a: "Yes. Aftercare plans integrate directly with patient records, treatment histories, prescriptions, clinical notes, and healthcare documentation.",
  },
  {
    q: "Can providers access aftercare plans remotely?",
    a: "Yes. Cloud-based Healthcare EHR Software allows authorized healthcare teams to securely access aftercare plans and patient information remotely.",
  },
  {
    q: "Is this software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform is designed for clinics, specialists, wellness centers, and multi-provider healthcare organizations managing ongoing patient care.",
  },
  {
    q: "How does aftercare management improve patient engagement?",
    a: "Aftercare management improves engagement through personalized communication, recovery guidance, appointment reminders, and ongoing patient support.",
  },
  {
    q: "Is patient aftercare information stored securely?",
    a: "Yes. The platform uses secure cloud-based infrastructure to protect patient data, healthcare records, recovery documentation, and communication workflows.",
  },
]

// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────

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
                  isOpen
                    ? "bg-primary text-white"
                    : "text-gray-400"
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

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function AfterCarePlans() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Aftercare Plan Management Software | Healthcare EHR Software for Clinics"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage patient recovery plans, follow-ups, scheduling, communication, and post-treatment care using secure Aftercare Plan Management Software and Healthcare EHR Software for clinics.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute(
      "content",
      "Aftercare Plan Management Software, Healthcare EHR Software, Electronic Health Record Software, Patient Follow-Up Software, Healthcare Management Software, Clinic Management Software, Recovery Plan Software, Healthcare Workflow Automation, Patient Care Coordination Software, Appointment Scheduling Software",
    )
  }, [])

  return (
    <div className="bg-white">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="w-full bg-gray-50 min-h-[700px] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Aftercare Plan Management Software for Better Patient Recovery & Ongoing Care
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              Simplify patient follow-ups, recovery plans,
              post-treatment communication, and ongoing care
              management using cloud-based Healthcare EHR Software.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Improve patient outcomes, automate follow-up workflows,
              strengthen communication, and manage aftercare
              coordination from one centralized healthcare platform.
            </p>

            <Button
              className="rounded-full px-10 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Book a Demo
            </Button>

          </div>

          {/* Right */}
          <div className="relative h-full flex items-center">
            <div className="rounded-2xl overflow-hidden w-full aspect-[4/3] lg:h-[500px]">
              <img
                src="/aftercare.png"
                alt="Aftercare Plan Management Software"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── LOGOS ─────────────────────────────────── */}
      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">

          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
            Trusted by clinics and healthcare providers worldwide
          </p>

          <div className="flex flex-wrap justify-center text-black items-center gap-10 opacity-40 grayscale">
            {[
              "MediCare",
              "HealthFirst",
              "CareSync",
              "MedPlus",
              "ClinicHub",
              "WellCare",
            ].map((name) => (
              <span
                key={name}
                className="text-xl font-bold text-gray-400 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Key Features of Aftercare Plan Management Software
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            Manage recovery plans, patient communication,
            follow-up scheduling, and healthcare workflows
            through one connected Healthcare Management platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── PRODUCT SECTIONS ─────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">

          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/aftercare.png"
                alt="Patient Recovery Plans"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>

            <div>

              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Patient Recovery Management
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Simplify recovery plans and follow-up care
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Create personalized aftercare instructions,
                medication guidance, wellness recommendations,
                and post-treatment care plans that help improve
                patient recovery and treatment adherence.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Personalized recovery plans",
                  "Post-treatment care instructions",
                  "Automated follow-up reminders",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="order-2 lg:order-1">

              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Connected Healthcare Workflows
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Centralize patient communication and care coordination
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Connect aftercare plans with patient records,
                clinical notes, scheduling workflows, and
                healthcare documentation to improve operational
                efficiency and ongoing patient support.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Integrated patient record management",
                  "Centralized healthcare communication",
                  "Recovery progress tracking and monitoring",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>

            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/aftercare.png"
                alt="Healthcare Aftercare Coordination"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-3xl font-semibold text-gray-900">
              Improve Patient Outcomes with Smarter Aftercare Management
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Aftercare Plan Management Software helps clinics
              automate follow-up workflows, improve patient
              engagement, simplify ongoing care coordination,
              and reduce manual administrative tasks.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              "Improved patient recovery management",
              "Faster and more organized follow-up workflows",
              "Better patient communication and engagement",
              "Centralized healthcare documentation and care coordination",
              "Reduced administrative workload and manual scheduling",
              "Enhanced treatment adherence and monitoring",
              "Secure digital aftercare records and instructions",
              "Scalable systems for growing healthcare organizations",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />

                <p className="text-gray-700">
                  {item}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-3xl font-semibold text-gray-900">
            Built for Clinics, Specialists & Healthcare Providers
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our Aftercare Plan Management Software supports
            healthcare organizations managing long-term patient
            care, follow-up coordination, and recovery workflows.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {[
              "Medical Clinics",
              "Dental Practices",
              "Cosmetic Clinics",
              "Wellness Centers",
              "Surgical Centers",
              "Dermatology Clinics",
              "Orthopedic Practices",
              "Multi-Provider Organizations",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-xl p-5 bg-gray-50 text-gray-800 font-medium"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <CommonTestimonials />

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <FaqAccordion />

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-semibold text-gray-900">
            Centralize Follow-Up Care with Healthcare EHR Software
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover how HealVare helps healthcare organizations
            manage patient recovery plans, automate follow-up
            workflows, improve communication, and streamline
            ongoing care coordination from one connected platform.
          </p>

          <Button
            className="mt-8 rounded-full px-10 h-11 cursor-pointer"
            onClick={() => navigate("/book-demo")}
          >
            Schedule a Demo
          </Button>

        </div>
      </section>

    </div>
  )
}