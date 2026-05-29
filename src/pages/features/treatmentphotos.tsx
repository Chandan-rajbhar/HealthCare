import { useEffect, useState } from "react"
import {
  Camera,
  FileText,
  ShieldCheck,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── FEATURES ────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Camera,
    title: "Secure clinical photo storage",
    description:
      "Store treatment photos, diagnostic images, and patient progress records securely within one centralized healthcare system.",
  },
  {
    icon: ShieldCheck,
    title: "Before & after treatment tracking",
    description:
      "Track patient progress visually with organized before-and-after treatment records connected to patient histories.",
  },
  {
    icon: FileText,
    title: "Integrated patient records",
    description:
      "Connect treatment photos directly with patient records, clinical notes, prescriptions, and appointment histories.",
  },
  {
    icon: Clock,
    title: "Cloud-based accessibility",
    description:
      "Access treatment photos and healthcare documentation securely from anywhere using cloud-based Healthcare EHR Software.",
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Treatment Photo Management Software?",
    a: "Treatment Photo Management Software helps healthcare providers securely capture, store, organize, and manage clinical treatment photos and visual patient records.",
  },
  {
    q: "How do treatment photos improve healthcare workflows?",
    a: "Treatment photos help providers document patient progress, improve treatment planning, strengthen communication, and support accurate clinical documentation workflows.",
  },
  {
    q: "Can treatment photos be connected to patient records?",
    a: "Yes. Treatment photos integrate directly with patient records, treatment histories, clinical notes, and healthcare documentation workflows.",
  },
  {
    q: "Is treatment photo data stored securely?",
    a: "Yes. The software uses secure cloud-based infrastructure and healthcare-grade protection to keep patient images and healthcare records safe.",
  },
  {
    q: "Can providers access treatment photos remotely?",
    a: "Yes. Authorized healthcare teams can securely access treatment photos and patient records remotely using cloud-based Healthcare EHR Software.",
  },
  {
    q: "Who can use Treatment Photo Management Software?",
    a: "The platform is ideal for dental clinics, cosmetic clinics, dermatology centers, wellness clinics, specialty healthcare providers, and multi-provider organizations.",
  },
  {
    q: "Does the software improve team collaboration?",
    a: "Yes. Providers and healthcare staff can securely review, manage, and coordinate treatment documentation within one centralized platform.",
  },
  {
    q: "Can treatment images support patient engagement?",
    a: "Absolutely. Before-and-after treatment photos improve patient understanding, communication, and confidence throughout the treatment process.",
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
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
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

export default function TreatmentPhotos() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Treatment Photo Management Software | Healthcare EHR Software for Clinics"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage treatment photos, patient progress images, visual healthcare records, and clinical documentation using secure Treatment Photo Management Software and Healthcare EHR Software for clinics.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute(
      "content",
      "Treatment Photo Management Software, Healthcare EHR Software, Electronic Health Record Software, Clinical Photo Management, Patient Record Management Software, Healthcare Management Software, Medical Documentation Software, Clinic Management Software, Healthcare Workflow Automation, Before and After Treatment Photos",
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
              Treatment Photo Management Software for Clinics & Healthcare Providers
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              Securely capture, organize, and manage treatment photos,
              patient progress images, and clinical documentation using
              cloud-based Healthcare EHR Software.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Improve clinical documentation, treatment tracking,
              provider collaboration, and patient communication through
              centralized visual healthcare record management built for
              modern clinics and healthcare organizations.
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
                src="/phototreat.png"
                alt="Treatment Photo Management Software"
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

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale">
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
            Key Features of Treatment Photo Management Software
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            Manage treatment images, visual healthcare records,
            patient documentation, and clinical workflows using
            centralized Healthcare Management Software.
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
                src="/phototreat.png"
                alt="Clinical Photo Documentation"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>

            <div>
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Clinical Documentation
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Improve treatment tracking with visual healthcare records
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Organize treatment photos, patient progress images,
                and diagnostic documentation in one centralized
                healthcare platform designed to support accurate
                clinical workflows and better treatment visibility.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Before and after treatment photo tracking",
                  "Secure clinical image storage",
                  "Faster access to patient progress records",
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
                Centralize patient records and treatment photos
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Connect treatment images directly with patient
                records, appointment histories, clinical notes,
                and healthcare documentation workflows to improve
                operational efficiency and provider collaboration.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Integrated patient image management",
                  "Centralized healthcare documentation",
                  "Simplified provider collaboration",
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
                src="/phototreat.png"
                alt="Healthcare Patient Records"
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
              Improve Clinical Documentation & Patient Communication
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Treatment Photo Management Software helps healthcare
              organizations improve workflow efficiency, strengthen
              patient communication, and reduce disconnected image
              storage systems through centralized healthcare operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              "Centralized treatment photo management",
              "Improved patient progress tracking",
              "Faster access to visual healthcare records",
              "Better clinical documentation workflows",
              "Secure cloud-based healthcare image storage",
              "Simplified provider collaboration and communication",
              "Reduced administrative workload and manual file handling",
              "Enhanced patient engagement and treatment transparency",
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
            Built for Modern Healthcare Organizations
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our Treatment Photo Management Software supports clinics,
            specialty healthcare providers, and growing healthcare
            organizations with centralized clinical image management.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {[
              "Dental Clinics",
              "Cosmetic Clinics",
              "Dermatology Centers",
              "Orthopedic Practices",
              "Wellness Clinics",
              "Medical Practices",
              "Specialty Providers",
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
            Centralize Treatment Documentation with Healthcare EHR Software
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover how HealVare helps healthcare organizations
            securely manage treatment photos, patient records,
            healthcare workflows, and clinical documentation from
            one connected platform.
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