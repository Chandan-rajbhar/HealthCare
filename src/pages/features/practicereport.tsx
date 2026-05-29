import { useState, useRef, useEffect } from "react"
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion"

import {
  ChevronDown,
  BarChart3,
  FileText,
  LineChart,
  Activity,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─────────────────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
}

const staggerContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: "easeInOut",
    },
  },
}

// ─────────────────────────────────────────────────────────────
// Scroll Reveal
// ─────────────────────────────────────────────────────────────

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Features
// ─────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: BarChart3,

    title: "Real-Time Operational Reporting",

    description:
      "Generate real-time healthcare reports for appointments, patient activity, revenue performance, billing workflows, provider schedules, and clinic operations.",
  },

  {
    icon: LineChart,

    title: "Financial & Revenue Analytics",

    description:
      "Track healthcare revenue, patient payments, billing performance, insurance claims, invoices, and operational financial insights using centralized dashboards.",
  },

  {
    icon: FileText,

    title: "Patient & Appointment Reporting",

    description:
      "Monitor patient visits, scheduling trends, cancellations, follow-up activity, treatment workflows, and patient engagement performance.",
  },

  {
    icon: Activity,

    title: "Staff & Workforce Reporting",

    description:
      "Analyze provider productivity, staff attendance, operational efficiency, workforce utilization, and healthcare team performance.",
  },
]

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Practice Reporting Software?",

    a: "Practice Reporting Software is a healthcare solution that helps clinics and healthcare providers generate operational reports, financial analytics, patient insights, workforce reports, and healthcare performance dashboards.",
  },

  {
    q: "How does reporting software improve healthcare operations?",

    a: "The software improves healthcare operations by centralizing analytics, improving reporting accuracy, reducing manual processes, and helping organizations make data-driven decisions.",
  },

  {
    q: "Can clinics generate financial and billing reports?",

    a: "Yes. The platform supports financial reporting, revenue tracking, healthcare billing analytics, invoice monitoring, insurance claim reporting, and operational financial dashboards.",
  },

  {
    q: "Does the software provide patient and appointment analytics?",

    a: "Yes. Healthcare teams can monitor patient activity, appointment scheduling trends, cancellations, treatment workflows, and patient engagement insights.",
  },

  {
    q: "Can administrators create custom healthcare reports?",

    a: "Yes. The platform allows organizations to generate customized reports for operational workflows, healthcare performance, billing systems, workforce management, and patient records.",
  },

  {
    q: "Is reporting data stored securely?",

    a: "Yes. The software uses secure cloud-based infrastructure to protect healthcare reports, patient data, operational analytics, and financial information.",
  },

  {
    q: "Is this software suitable for growing healthcare organizations?",

    a: "Absolutely. The platform is designed for clinics, healthcare groups, and multi-location medical organizations managing increasing operational complexity and reporting requirements.",
  },

  {
    q: "Can healthcare teams access reports remotely?",

    a: "Yes. Cloud-based Electronic Health Record Software allows authorized users to securely access healthcare reports, analytics dashboards, patient insights, and operational tools from anywhere.",
  },
]

const LOGOS = [
  "MediCare",
  "HealthFirst",
  "CareSync",
  "MedPlus",
  "ClinicHub",
  "WellCare",
]

// ─────────────────────────────────────────────────────────────
// FAQ Accordion
// ─────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  })

  return (
    <motion.div
      ref={ref}
      className="divide-y divide-gray-200 border-t border-gray-200"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={staggerContainer}
    >
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <motion.div key={index} variants={cardVariant}>
            <button
              className="w-full flex items-center justify-between py-6 text-left gap-4 group"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span
                className={`text-base font-semibold transition-colors duration-200 ${
                  isOpen
                    ? "text-gray-900"
                    : "text-gray-600 group-hover:text-gray-800"
                }`}
              >
                {item.q}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isOpen
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-sm leading-relaxed pb-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Deep Dive Row
// ─────────────────────────────────────────────────────────────

function DeepDiveRow({
  imageLeft,
  eyebrow,
  heading,
  body,
  bullets,
}: {
  imageLeft: boolean
  eyebrow: string
  heading: string
  body: string
  bullets: string[]
}) {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${
          !imageLeft ? "order-1 lg:order-2" : ""
        }`}
        initial={{
          opacity: 0,
          x: imageLeft ? -32 : 32,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
              }
            : {}
        }
        transition={{ duration: 0.7 }}
      >
        <img
          src="/compliance.png"
          alt="Healthcare Reporting"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className={!imageLeft ? "order-2 lg:order-1" : ""}
        initial={{
          opacity: 0,
          x: imageLeft ? 32 : -32,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
              }
            : {}
        }
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
      >
        <p className="text-xs text-primary uppercase tracking-widest mb-3">
          {eyebrow}
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          {heading}
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6">
          {body}
        </p>

        <ul className="space-y-2 text-sm text-gray-600">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />

              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────

export default function PracticeReports() {
  const navigate = useNavigate()

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 40]
  )

  useEffect(() => {
    document.title =
      "Practice Reporting Software | Healthcare EHR Software for Clinics"

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement | null

      if (!el) {
        el = document.createElement("meta")
        el.setAttribute("name", name)
        document.head.appendChild(el)
      }

      el.setAttribute("content", content)
    }

    setMeta(
      "description",
      "Generate healthcare reports, financial analytics, patient insights, operational dashboards, and clinic performance tracking using secure Practice Reporting Software and Healthcare EHR Software."
    )

    setMeta(
      "keywords",
      "Practice Reporting Software, Healthcare EHR Software, Electronic Health Record Software, Healthcare Analytics Software, Healthcare Management Software, Clinic Management Software, Healthcare Workflow Automation, Medical Practice Management Software, Healthcare Reporting Dashboard, Appointment Scheduling Software"
    )
  }, [])

  return (
    <div className="bg-white">

      {/* HERO */}

      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Practice Reporting Software for Smarter Healthcare Analytics & Operational Insights
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Manage healthcare reports, operational analytics,
              financial insights, patient trends, staff performance,
              and clinic reporting workflows using cloud-based
              Healthcare EHR Software.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Improve decision-making, strengthen operational visibility,
              monitor clinic performance, and streamline reporting workflows
              from one centralized healthcare platform.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button
                className="rounded-full px-10 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/compliance.png"
                alt="Practice Reporting Software"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LOGOS */}

      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
              Trusted by modern healthcare organizations
            </p>
          </ScrollReveal>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {LOGOS.map((name) => (
              <motion.span
                key={name}
                className="text-xl font-bold text-gray-400"
                variants={fadeUp}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Key Features of Practice Reporting Software
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Centralize healthcare analytics, reporting workflows,
              operational dashboards, patient insights, and financial
              performance tracking using cloud-based Healthcare EHR Software.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                  variants={cardVariant}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* DEEP DIVE */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">

          <DeepDiveRow
            imageLeft
            eyebrow="Healthcare Analytics"
            heading="Track healthcare operations & clinic performance"
            body="Generate operational reports, patient analytics, appointment trends, provider schedules, billing workflows, and healthcare performance insights from one centralized reporting platform."
            bullets={[
              "Real-time operational reporting",
              "Appointment & patient analytics",
              "Healthcare workflow visibility",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Financial Insights"
            heading="Improve reporting accuracy & business planning"
            body="Monitor healthcare revenue, insurance claims, operational performance, workforce productivity, and financial reporting while improving long-term healthcare planning."
            bullets={[
              "Revenue & billing analytics",
              "Custom healthcare reporting",
              "Workforce performance insights",
            ]}
          />
        </div>
      </section>

      {/* TESTIMONIALS */}

      <CommonTestimonials />

      {/* FAQ */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-900"
            variants={fadeUp}
          >
            Centralize Healthcare Reporting with Healthcare EHR Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            variants={fadeUp}
          >
            Manage healthcare reports, patient records, billing systems,
            scheduling workflows, analytics dashboards, and operational
            performance from one secure healthcare platform.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <Button
              className="rounded-full px-10 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Schedule a Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}