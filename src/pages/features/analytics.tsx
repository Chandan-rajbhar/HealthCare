import { useState, useRef } from "react"
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion"
import { ChevronDown, BarChart3, FileText, TrendingUp, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
 "@/pages/FooterPage/footerpage"
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
} satisfies Variants

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} satisfies Variants

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
} satisfies Variants

// ─── Reusable scroll-triggered wrapper ────────────────────────────────────────

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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: BarChart3,
    title: "Real-time dashboards",
    description: "Monitor clinic performance with visual dashboards that update instantly.",
  },
  {
    icon: TrendingUp,
    title: "Revenue analytics",
    description: "Track revenue growth, billing performance, and financial trends.",
  },
  {
    icon: PieChart,
    title: "Patient insights",
    description: "Understand patient visits, appointment trends, and treatment activity.",
  },
  {
    icon: FileText,
    title: "Exportable reports",
    description: "Generate detailed reports for finance, management, and operations.",
  },
]
const FAQ_ITEMS = [
  {
    q: "What does HealVare Analytics track?",
    a: "HealVare Analytics tracks clinic performance including revenue, patient visits, appointment trends, and operational metrics.",
  },
  {
    q: "Can I monitor clinic revenue with analytics?",
    a: "Yes. HealVare provides revenue dashboards and financial performance insights for clinics.",
  },
  {
    q: "Are analytics dashboards updated in real time?",
    a: "Yes. Dashboards update automatically as new clinic data is recorded in the system.",
  },
  {
    q: "Can reports be exported for management?",
    a: "Yes. Clinics can export reports and share them with management or finance teams.",
  },
  {
    q: "Who can access analytics data?",
    a: "Authorized clinic managers and administrators can access analytics dashboards and reports.",
  },
]
const LOGOS = ["MediCare", "HealthFirst", "CareSync", "MedPlus", "ClinicHub", "WellCare"]

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

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
                  isOpen ? "text-gray-900" : "text-gray-600 group-hover:text-gray-800"
                }`}
              >
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
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
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-sm leading-relaxed pb-6">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

// ─── Deep Dive Row ─────────────────────────────────────────────────────────────

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

  const imageVariant = {
    hidden: { opacity: 0, x: imageLeft ? -32 : 32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const textVariant = {
    hidden: { opacity: 0, x: imageLeft ? 32 : -32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
    },
  }

  return (
    <div
      ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"

    >
      <motion.div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${!imageLeft ? "order-1 lg:order-2" : ""}`}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={imageVariant}
      >
        <img

                src="/analytics.png"          alt="Feature preview"
          className="w-full h-full max-w-full object-cover"
        />
      </motion.div>

      <motion.div
        className={!imageLeft ? "order-2 lg:order-1" : ""}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={textVariant}
      >
        <p className="text-xs text-primary uppercase tracking-widest mb-3">{eyebrow}</p>
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">{heading}</h3>
        <p className="text-gray-500 leading-relaxed mb-6">{body}</p>
        <motion.ul
          className="space-y-2 text-sm text-gray-600"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {bullets.map((item) => (
            <motion.li
              key={item}
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -12 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Analytics() {
  const navigate = useNavigate();
  // Subtle parallax on hero image
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
   <div className="bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="w-full bg-gray-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — staggered text reveal */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >

            <motion.h1
              className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
             Clinic Analytics & Performance Insights
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
         Understand how your clinic is performing with powerful analytics and real-time insights.
            </motion.p>

            <motion.p
              className="text-gray-500 mb-8 leading-relaxed"
              variants={fadeUp}
            >
           HealVare Analytics helps clinics track growth, monitor performance, and make data-driven operational decisions.
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block"
              >
                <Button className="rounded-half px-10 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — image with parallax */}
          <motion.div
             className="relative w-full max-w-full"
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ y: heroImageY }}
            >
              <img
                src="/analytics.png"
                alt="Practice reports dashboard"
                className="w-full h-full object-cover obejct-top max-h-96 "
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LOGOS BAR ── */}
      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
              Trusted by 500+ clinics worldwide
            </p>
          </ScrollReveal>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {LOGOS.map((name) => (
              <motion.span
                key={name}
                className="text-xl font-bold text-gray-400 tracking-tight"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Powerful analytics for modern clinics
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Gain visibility into clinic performance with clear, actionable analytics.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                  variants={cardVariant}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 32px -4px rgba(0,0,0,0.10)",
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT DEEP DIVE ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
<DeepDiveRow
  imageLeft
  eyebrow="Clinic analytics"
 heading="Track clinic performance in real time"
body="Visual dashboards show patient activity, revenue performance, and operational metrics in one place."
  bullets={[
  "Live clinic performance dashboards",
  "Revenue and billing analytics",
  "Patient visit and treatment trends",
]}
/>

<DeepDiveRow
  imageLeft={false}
  eyebrow="Business insights"
heading="Turn clinic data into insights"
body="Use analytics to identify growth opportunities, optimize operations, and improve patient services."
  bullets={[
  "Advanced analytics and visual charts",
  "Operational performance insights",
  "Exportable business reports",
]}
/>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <CommonTestimonials />

      {/* ── FAQ ── */}
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

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-900"
            variants={fadeUp}
          >
            Start making data-driven clinic decisions
          </motion.h2>
          <motion.p className="mt-4 text-gray-600" variants={fadeUp}>
       See how HealVare Analytics helps clinics understand performance and drive growth.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 inline-flex justify-center">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <Button className="rounded-half px-10 h-11 cursor-pointer" onClick={() => navigate("/book-demo")}>
                Schedule a demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
{/* <MarketingDemoCTA /> */}

    </div>
  )
}
