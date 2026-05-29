import { useState, useRef } from "react"
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
  Package,
  ClipboardList,
  Warehouse,
  AlertTriangle,
  Truck,
  BarChart3,
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

// ─── Features ─────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Package,
    title: "Real-time inventory tracking",
    description:
      "Monitor medical supplies, treatment inventory, stock movement, and available quantities from one centralized dashboard.",
  },
  {
    icon: AlertTriangle,
    title: "Automated stock alerts",
    description:
      "Receive low-stock notifications, expiry reminders, and reorder alerts to avoid operational disruptions.",
  },
  {
    icon: Truck,
    title: "Purchase & supplier tracking",
    description:
      "Manage purchase orders, supplier information, procurement workflows, and inventory costs efficiently.",
  },
  {
    icon: BarChart3,
    title: "Usage & inventory reporting",
    description:
      "Analyze stock usage, inventory trends, operational costs, and supply performance with real-time reports.",
  },
  {
    icon: ClipboardList,
    title: "Product & supply management",
    description:
      "Manage healthcare products, medications, consumables, and treatment materials securely in one system.",
  },
  {
    icon: Warehouse,
    title: "Integrated healthcare operations",
    description:
      "Connect inventory workflows with billing systems, patient treatments, and appointment scheduling software.",
  },
]

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Stock Management Software?",
    a: "Healthcare Stock Management Software is a digital solution that helps clinics and healthcare providers manage medical inventory, stock tracking, supply workflows, purchase management, and operational inventory reporting.",
  },
  {
    q: "How does stock management software improve healthcare operations?",
    a: "The software improves healthcare operations by automating inventory tracking, reducing stock shortages, improving supply visibility, and simplifying inventory management workflows.",
  },
  {
    q: "Can clinics track medical supplies and treatment inventory in real time?",
    a: "Yes. The platform supports real-time inventory tracking for medical supplies, healthcare products, consumables, and treatment materials.",
  },
  {
    q: "Does the software provide automated stock alerts?",
    a: "Yes. Healthcare teams receive automated low-stock alerts, expiry reminders, reorder notifications, and inventory updates to help maintain operational continuity.",
  },
  {
    q: "Can healthcare providers manage suppliers and purchase orders?",
    a: "Yes. The platform supports supplier tracking, procurement workflows, purchase order management, inventory cost monitoring, and operational reporting.",
  },
  {
    q: "Does the software integrate with billing and patient workflows?",
    a: "Yes. Stock management connects directly with billing systems, patient treatments, scheduling workflows, and Healthcare EHR Software operations.",
  },
  {
    q: "Is this software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform is designed for clinics, hospitals, healthcare groups, and multi-location medical organizations managing increasing inventory and operational complexity.",
  },
  {
    q: "Can healthcare teams securely access inventory systems remotely?",
    a: "Yes. Cloud-based Electronic Health Record Software allows authorized users to securely access inventory data, operational dashboards, reports, and healthcare workflows from anywhere.",
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
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
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
                  transition={{ duration: 0.35 }}
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

  const imageVariant = {
    hidden: { opacity: 0, x: imageLeft ? -32 : 32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  }

  const textVariant = {
    hidden: { opacity: 0, x: imageLeft ? 32 : -32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.1 },
    },
  }

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${
          !imageLeft ? "order-1 lg:order-2" : ""
        }`}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={imageVariant}
      >
        <img
          src="/compliance.png"
          alt="Healthcare Stock Management"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className={!imageLeft ? "order-2 lg:order-1" : ""}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={textVariant}
      >
        <p className="text-xs text-primary uppercase tracking-widest mb-3">
          {eyebrow}
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          {heading}
        </h3>

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
                show: { opacity: 1, x: 0 },
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

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function StockManagement() {
  const navigate = useNavigate()

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left Content */}
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
            Healthcare Stock Management Software for Smarter Inventory Control & Clinic Operations
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Simplify medical inventory, stock tracking, and supply management
              using cloud-based Healthcare EHR Software designed for modern
              clinics and healthcare providers.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Improve inventory visibility, reduce supply shortages, automate
              stock tracking, and streamline operational efficiency from one
              centralized healthcare platform.
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="inline-block"
              >
                <Button
                  className="rounded-half px-10 h-11 cursor-pointer"
                  onClick={() => navigate("/book-demo")}
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
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
                alt="Healthcare Stock Management Software"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
              Trusted by healthcare organizations worldwide
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
                className="text-xl font-bold text-gray-400 tracking-tight"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
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
              Key Features of Healthcare Stock Management Software
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Manage healthcare inventory, monitor stock movement, automate
              inventory alerts, and streamline operational workflows using one
              centralized healthcare management platform.
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
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 32px -4px rgba(0,0,0,0.10)",
                  }}
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
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── DEEP DIVE ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">

          <DeepDiveRow
            imageLeft
            eyebrow="Inventory visibility"
            heading="Track healthcare inventory in real time"
            body="Monitor medical supplies, treatment inventory, consumables, medications, and stock movement using centralized inventory management tools designed for healthcare organizations."
            bullets={[
              "Real-time stock tracking",
              "Inventory movement monitoring",
              "Centralized healthcare inventory dashboard",
              "Accurate stock visibility across operations",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Operational efficiency"
            heading="Prevent shortages with automated inventory alerts"
            body="Receive automatic low-stock notifications, expiry reminders, reorder alerts, and inventory updates to reduce supply disruptions and strengthen operational continuity."
            bullets={[
              "Low-stock notifications",
              "Expiry and reorder reminders",
              "Reduced supply disruptions",
              "Improved inventory coordination",
            ]}
          />

          <DeepDiveRow
            imageLeft
            eyebrow="Supplier management"
            heading="Manage procurement and supplier workflows"
            body="Track supplier information, purchase orders, procurement costs, stock history, and inventory workflows more efficiently from one secure healthcare platform."
            bullets={[
              "Supplier management",
              "Purchase order tracking",
              "Inventory cost monitoring",
              "Procurement workflow automation",
            ]}
          />

        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Improve Inventory Visibility & Operational Efficiency
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              Manual inventory tracking and disconnected stock systems often
              create operational inefficiencies, supply shortages, and
              administrative burden. Healthcare Stock Management Software helps
              clinics automate inventory workflows, improve stock visibility,
              and strengthen operational control.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              "Real-time healthcare inventory visibility",
              "Reduced stock shortages and supply disruptions",
              "Automated inventory alerts and stock tracking",
              "Improved operational efficiency and inventory coordination",
              "Better supplier and procurement management",
              "Reduced administrative workload and manual inventory handling",
              "Centralized healthcare inventory reporting and analytics",
              "Scalable stock management systems for growing healthcare organizations",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />

                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORGANIZATIONS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Clinics, Medical Practices & Healthcare Organizations
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our Healthcare Stock Management Software supports private clinics,
              dental practices, wellness centers, hospitals, outpatient
              facilities, specialty healthcare providers, and growing healthcare
              organizations managing increasing inventory complexity.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              "Private Clinics",
              "Dental Practices",
              "Wellness Centers",
              "Hospitals",
              "Medical Practices",
              "Outpatient Facilities",
              "Healthcare Organizations",
              "Growing Healthcare Businesses",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-xl py-5 px-4 bg-gray-50 text-gray-800 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <CommonTestimonials />

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
              Frequently Asked Questions
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
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-900"
            variants={fadeUp}
          >
            Centralize inventory operations with Healthcare EHR Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600 leading-relaxed"
            variants={fadeUp}
          >
            Improve inventory control, strengthen operational planning, automate
            healthcare workflows, and support long-term clinic growth using
            cloud-based Healthcare Management Software.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 inline-block">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
            >
              <Button
                className="rounded-half px-10 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}