
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
  DollarSign,
  BarChart2,
  FileText,
  Percent,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"

// ─── Animation Variants ────────────────────────────────────────────────────────

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

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────

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
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 28 }
      }
      transition={{
        duration: 0.6,
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
    icon: Percent,
    title: "Automated Commission Calculations",
    description:
      "Automatically calculate provider commissions, treatment-based incentives, service earnings, percentage payouts, and revenue-sharing structures with reduced manual work.",
  },

  {
    icon: BarChart2,
    title: "Provider & Staff Earnings Tracking",
    description:
      "Track staff performance, commission history, payouts, completed services, appointments, and revenue contributions using centralized dashboards.",
  },

  {
    icon: FileText,
    title: "Real-Time Financial Reporting",
    description:
      "Monitor staff incentives, revenue performance, payout summaries, operational analytics, and compensation reports from one integrated system.",
  },

  {
    icon: DollarSign,
    title: "Integrated Billing & Revenue Data",
    description:
      "Connect commissions directly with patient billing, invoices, payment collection, and healthcare financial workflows using Healthcare EHR Software.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Staff Commission Management Software?",
    a: "Staff Commission Management Software is a healthcare solution that helps clinics and healthcare providers manage provider incentives, commission tracking, payout calculations, and compensation workflows digitally.",
  },

  {
    q: "How does commission software improve healthcare operations?",
    a: "The software improves operations by automating commission calculations, reducing payroll errors, improving financial reporting, and simplifying compensation management.",
  },

  {
    q: "Can clinics create custom commission structures?",
    a: "Yes. Healthcare organizations can configure commissions based on treatments, appointments, memberships, procedures, products, or custom healthcare service categories.",
  },

  {
    q: "Does the software integrate with billing systems?",
    a: "Yes. Commission workflows connect directly with healthcare billing systems, invoices, patient payments, and operational financial data within the Healthcare EHR Software platform.",
  },

  {
    q: "Can providers track their earnings and commission history?",
    a: "Yes. Staff and providers can securely access commission summaries, earnings reports, payout history, and operational performance data.",
  },

  {
    q: "Is financial and payroll information stored securely?",
    a: "Yes. The platform uses secure cloud-based infrastructure to protect payroll records, financial reports, commission data, and healthcare operational information.",
  },

  {
    q: "Is this software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform is designed for clinics, healthcare groups, and multi-location medical organizations managing expanding teams and complex compensation workflows.",
  },

  {
    q: "Can administrators access reports and analytics remotely?",
    a: "Yes. Cloud-based Electronic Health Record Software allows authorized administrators to securely access financial reports, commission data, operational analytics, and workforce management tools from anywhere.",
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

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

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
              onClick={() =>
                setOpenIndex(isOpen ? -1 : index)
              }
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
                animate={{
                  rotate: isOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.3,
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
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
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

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const imageVariant = {
    hidden: {
      opacity: 0,
      x: imageLeft ? -32 : 32,
    },

    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  }

  const textVariant = {
    hidden: {
      opacity: 0,
      x: imageLeft ? 32 : -32,
    },

    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  }

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${
          !imageLeft
            ? "order-1 lg:order-2"
            : ""
        }`}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={imageVariant}
      >
        <img
          src="/commissions.png"
          alt="Healthcare Staff Commission Management Software Dashboard"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className={
          !imageLeft
            ? "order-2 lg:order-1"
            : ""
        }
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

        <p className="text-gray-500 leading-relaxed mb-6">
          {body}
        </p>

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
                hidden: {
                  opacity: 0,
                  x: -12,
                },

                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
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

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function StaffCommissions() {
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = "Healthcare Staff Commission Management Software | Healthcare EHR Software"

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute("name", name)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta(
      "description",
      "Manage staff commissions, provider incentives, payouts, billing workflows, and financial reporting using secure Healthcare Staff Commission Management Software and Healthcare EHR Software."
    )

    setMeta(
      "keywords",
      "Staff Commission Management Software, Healthcare EHR Software, Electronic Health Record Software, Healthcare Management Software, Clinic Management Software, Provider Incentive Software, Healthcare Billing Software, Workforce Management Software, Healthcare Workflow Automation, Medical Practice Management Software"
    )
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 40]
  )

  return (
    <div className="bg-white">

      {/* HERO */}

      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT */}

          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Healthcare Staff Commission Management Software for Accurate Incentives & Operational Efficiency
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Simplify staff commission tracking, provider incentives, payout calculations, treatment-based earnings, and compensation workflows using cloud-based Healthcare EHR Software.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Our Staff Commission Management Software helps healthcare organizations automate commission calculations, improve financial transparency, streamline payroll workflows, and strengthen workforce performance management from one centralized healthcare platform.
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
                <Button className="rounded-half px-10 h-11 cursor-pointer">
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
            initial={{
              opacity: 0,
              scale: 0.96,
              x: 32,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/commissions.png"
                alt="Healthcare Staff Commission Management Software Dashboard"
                className="w-full h-full object-cover"
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
              Trusted by healthcare organizations worldwide
            </p>
          </ScrollReveal>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-60px",
            }}
            variants={staggerContainer}
          >
            {LOGOS.map((name) => (
              <motion.span
                key={name}
                className="text-xl font-bold text-gray-400 tracking-tight"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 12,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
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
              Built for Modern Healthcare Compensation Management
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Manage provider incentives, commission structures, payroll reporting, revenue tracking, and compensation workflows from one centralized healthcare platform.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-80px",
            }}
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
                    boxShadow:
                      "0 12px 32px -4px rgba(0,0,0,0.10)",
                    transition: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>

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
            eyebrow="Compensation Management"
            heading="Automate Commission Tracking & Provider Incentives"
            body="Automatically calculate provider commissions, treatment-based payouts, and healthcare staff incentives using integrated Healthcare EHR Software."
            bullets={[
              "Automate payout calculations",
              "Track treatment-based earnings",
              "Improve payroll transparency",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Financial Reporting"
            heading="Monitor Revenue, Payouts & Workforce Performance"
            body="Access real-time commission reports, revenue analytics, provider earnings summaries, and operational financial data from one centralized system."
            bullets={[
              "Generate compensation reports",
              "Track revenue contribution",
              "Monitor operational performance",
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
          viewport={{
            once: true,
            margin: "-80px",
          }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-900"
            variants={fadeUp}
          >
            Ready to simplify healthcare staff commission management?
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            variants={fadeUp}
          >
            See how Staff Commission Management Software helps healthcare organizations automate payouts, improve financial transparency, and streamline compensation workflows.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
            >
              <Button className="rounded-half px-10 h-11 cursor-pointer">
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

    </div>
  )
}
