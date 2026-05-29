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
  TrendingUp,
  PieChart,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
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
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
}

// ─── Scroll Reveal ────────────────────────────────────────────────────────────

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
  const inView = useInView(ref, { once: true, margin: "-80px" })

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: BarChart3,
    title: "Real-Time Healthcare Dashboards",
    description:
      "Monitor appointments, patient activity, billing performance, revenue trends, provider productivity, and clinic operations from one centralized dashboard.",
  },
  {
    icon: TrendingUp,
    title: "Financial & Revenue Insights",
    description:
      "Analyze revenue growth, payment collection, billing workflows, insurance reimbursements, and operational financial performance.",
  },
  {
    icon: PieChart,
    title: "Patient & Treatment Analytics",
    description:
      "Track patient engagement, treatment performance, appointment trends, follow-up activity, and healthcare workflow insights.",
  },
  {
    icon: Activity,
    title: "Workforce & Provider Analytics",
    description:
      "Measure provider productivity, staff efficiency, attendance trends, scheduling utilization, and operational workforce performance.",
  },
  {
    icon: FileText,
    title: "Custom Reports & Metrics",
    description:
      "Generate customized healthcare reports and track operational metrics to support strategic planning and clinic growth.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Clinic Analytics Software?",
    a: "Clinic Analytics Software helps healthcare providers track operational performance, patient activity, financial metrics, scheduling trends, and healthcare workflow analytics.",
  },
  {
    q: "How does analytics software improve clinic operations?",
    a: "The software improves clinic operations by centralizing reporting, improving operational visibility, reducing manual analysis, and helping healthcare teams make data-driven decisions.",
  },
  {
    q: "Can clinics monitor financial and revenue performance?",
    a: "Yes. The platform supports revenue analytics, billing performance tracking, payment monitoring, insurance reimbursement insights, and operational financial reporting.",
  },
  {
    q: "Does the software provide patient and appointment analytics?",
    a: "Yes. Healthcare teams can monitor patient engagement, appointment scheduling trends, cancellations, treatment workflows, and follow-up performance.",
  },
  {
    q: "Can providers track workforce and staff performance?",
    a: "Yes. The platform includes workforce analytics, provider productivity tracking, attendance monitoring, scheduling utilization, and operational staff reporting.",
  },
  {
    q: "Does the software support custom healthcare reports?",
    a: "Yes. Organizations can create customized healthcare reports and operational dashboards based on clinic workflows, patient activity, financial performance, and business goals.",
  },
  {
    q: "Can healthcare teams securely access analytics remotely?",
    a: "Yes. Cloud-based Electronic Health Record Software allows authorized users to securely access dashboards, reports, analytics tools, and operational insights from anywhere.",
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

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

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
                  isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
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

// ─── Deep Dive Row ────────────────────────────────────────────────────────────

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
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${
          !imageLeft ? "order-1 lg:order-2" : ""
        }`}
        initial={{ opacity: 0, x: imageLeft ? -32 : 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/analytics.png"
          alt="Clinic Analytics"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className={!imageLeft ? "order-2 lg:order-1" : ""}
        initial={{ opacity: 0, x: imageLeft ? 32 : -32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="text-xs text-primary uppercase tracking-widest mb-3">
          {eyebrow}
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          {heading}
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6">{body}</p>

        <ul className="space-y-2 text-sm text-gray-600">
          {bullets.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Analytics() {
  const navigate = useNavigate()

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40])

  useEffect(() => {
    document.title =
      "Clinic Analytics Software | Healthcare EHR Software for Clinics"

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
      "Track clinic performance, patient trends, financial insights, scheduling activity, and operational workflows using secure Clinic Analytics Software and Healthcare EHR Software."
    )

    setMeta(
      "keywords",
      "Clinic Analytics Software, Healthcare EHR Software, Electronic Health Record Software, Healthcare Analytics Software, Healthcare Management Software, Clinic Management Software, Healthcare Workflow Automation, Medical Practice Management Software, Operational Reporting Software, Appointment Scheduling Software"
    )
  }, [])

  return (
    <div className="bg-white overflow-x-hidden">

      {/* HERO */}

      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Clinic Analytics Software for Smarter Healthcare Insights & Practice Growth
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Track clinic performance, patient trends, operational workflows,
              financial metrics, appointment activity, and healthcare insights
              using cloud-based Healthcare EHR Software.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Improve decision-making, optimize workflows, strengthen
              operational visibility, and support long-term clinic growth from
              one centralized healthcare platform.
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
            className="relative w-full"
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ y: heroImageY }}
            >
              <img
                src="/analytics.png"
                alt="Clinic Analytics Dashboard"
                className="w-full h-full object-cover max-h-[520px]"
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
              Powerful healthcare analytics & operational visibility
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Monitor clinic operations, patient activity, scheduling trends,
              workforce performance, and financial insights from one centralized
              analytics platform.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
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
            heading="Improve operational efficiency with data-driven insights"
            body="Healthcare organizations need accurate operational visibility to improve patient care, manage resources efficiently, and support sustainable growth."
            bullets={[
              "Real-time clinic performance monitoring",
              "Improved healthcare decision-making",
              "Reduced manual reporting workload",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Operational Visibility"
            heading="Centralize healthcare insights with Healthcare EHR Software"
            body="Manage analytics, patient records, billing workflows, provider schedules, and operational reporting from one secure environment."
            bullets={[
              "Financial & revenue analytics",
              "Appointment & scheduling insights",
              "Scalable reporting systems",
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
              Frequently asked questions
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
            Ready to improve healthcare analytics & clinic performance?
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            variants={fadeUp}
          >
            See how Clinic Analytics Software helps healthcare organizations
            improve operational visibility, monitor performance, and support
            smarter healthcare decisions.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
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