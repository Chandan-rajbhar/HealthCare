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
  Heart,
  Mail,
  MessageSquare,
  Bell,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { MarketingDemoCTA } from "@/components/MarketingDemoCTA"
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
    icon: Heart,
    title: "Automated engagement workflows",
    description:
      "Automate patient communication and retention workflows across every stage of care.",
  },
  {
    icon: MessageSquare,
    title: "Personalized communication",
    description:
      "Deliver customized healthcare updates, reminders, and follow-up communication.",
  },
  {
    icon: Bell,
    title: "Appointment reminders",
    description:
      "Reduce missed appointments using automated SMS and email reminders.",
  },
  {
    icon: Users,
    title: "Patient relationship management",
    description:
      "Manage patient engagement and long-term healthcare relationships from one platform.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Patient Engagement Software?",
    a: "Healthcare Patient Engagement Software helps clinics improve patient communication, automate engagement workflows, strengthen retention, and build long-term patient relationships.",
  },
  {
    q: "How does patient retention software help healthcare organizations?",
    a: "It improves patient satisfaction, increases repeat visits, automates follow-up communication, and supports stronger healthcare engagement strategies.",
  },
  {
    q: "Can clinics automate patient follow-up communication?",
    a: "Yes. The platform supports automated reminders, recall campaigns, wellness notifications, and follow-up messaging workflows.",
  },
  {
    q: "Does the software help improve patient loyalty?",
    a: "Absolutely. Personalized communication and ongoing engagement help clinics build trust and long-term patient relationships.",
  },
  {
    q: "Can patient engagement software reduce missed appointments?",
    a: "Yes. Automated reminders and communication workflows help improve appointment attendance and scheduling consistency.",
  },
  {
    q: "Is the platform suitable for hospitals and multi-location clinics?",
    a: "Yes. The software supports healthcare providers, clinics, hospitals, and growing medical organizations with scalable patient engagement tools.",
  },
  {
    q: "Can the software integrate with scheduling and EHR systems?",
    a: "Yes. Healthcare Patient Engagement Software integrates with Electronic Health Record Software, scheduling systems, and healthcare management platforms.",
  },
  {
    q: "How does patient engagement improve clinic growth?",
    a: "Stronger patient relationships, improved satisfaction, and better retention help healthcare organizations increase repeat appointments and support sustainable business growth.",
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
                  ease: [0.22, 1, 0.36, 1] as const,
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
                    ease: [0.22, 1, 0.36, 1] as const,
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
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const imageVariant = {
    hidden: { opacity: 0, x: imageLeft ? -32 : 32 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const textVariant = {
    hidden: { opacity: 0, x: imageLeft ? 32 : -32 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.1,
      },
    },
  }

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
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
          src="/loyalty.png"
          alt="Patient Engagement Software"
          className="w-full h-full max-w-full object-cover"
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
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.4 },
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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PatientLoyalty() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Healthcare Patient Engagement Software | Build Patient Loyalty & Retention"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Improve patient retention, automate follow-up communication, strengthen patient relationships, and increase healthcare engagement using secure Patient Engagement Software for clinics and healthcare providers.",
    )
  }, [])

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ── HERO ── */}

      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left */}

          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Build Patient Loyalty & Retention with Healthcare Patient
              Engagement Software
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Strengthen patient relationships, improve long-term retention,
              automate communication workflows, and deliver personalized
              healthcare experiences using secure Patient Engagement Software
              built for modern clinics and healthcare providers.
            </motion.p>

            <motion.p
              className="text-gray-500 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Improve patient satisfaction, automate engagement workflows, and
              create stronger healthcare relationships with intelligent patient
              retention management tools designed for clinics and healthcare
              organizations.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
            >
              <Button
                className="rounded-half px-10 h-11 cursor-pointer"
                onClick={() => navigate("/start-free-trial")}
              >
                Start Free Trial
              </Button>

              <Button
                variant="outline"
                className="rounded-half px-10 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Schedule a Live Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right */}

          <motion.div
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/loyalty.png"
                alt="Healthcare Patient Engagement Software"
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
              Trusted by healthcare providers worldwide
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
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
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
              Improve Patient Retention with Smarter Healthcare Communication
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Healthcare organizations need stronger patient engagement
              strategies to build trust and long-term loyalty. Healthcare
              Patient Retention Software helps clinics automate communication,
              improve patient experiences, and increase ongoing engagement
              through personalized healthcare workflows.
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

      {/* ── PRODUCT DEEP DIVE ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          <DeepDiveRow
            imageLeft
            eyebrow="Personalized engagement"
            heading="Create stronger patient relationships through personalized experiences"
            body="Patients expect convenient communication, timely follow-ups, and personalized healthcare interactions. Improve patient satisfaction and retention by delivering connected healthcare experiences across every stage of care."
            bullets={[
              "Personalized patient communication",
              "Automated follow-up workflows",
              "Preventive care & recall campaigns",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Retention management"
            heading="Increase patient loyalty with intelligent retention workflows"
            body="Strengthen healthcare communication, improve engagement, and encourage recurring visits using automated patient retention workflows and smart healthcare outreach campaigns."
            bullets={[
              "Smart patient recall campaigns",
              "Two-way patient communication",
              "Real-time engagement insights",
            ]}
          />
        </div>
      </section>

      {/* ── EMAIL & SMS ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <ScrollReveal>
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Email & SMS Communication
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Keep patients connected with automated email and SMS outreach
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-gray-600 leading-relaxed mb-8">
                Send reminders, follow-ups, and patient care updates through secure email and SMS workflows that boost retention and reduce no-shows.
              </p>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Email automation
                </h3>
                <p className="text-sm text-gray-600">
                  Automate confirmations, follow-up care instructions, and patient outreach without manual effort.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  SMS reminders
                </h3>
                <p className="text-sm text-gray-600">
                  Deliver appointment alerts, recall messages, and care reminders directly to patients’ phones.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white shadow-xl">
            <img
              src="/email.png"
              alt="Email and SMS patient communication"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}

      <CommonTestimonials />

      {/* ── FAQ ── */}

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
            Increase Patient Loyalty with Healthcare Patient Engagement Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            variants={fadeUp}
          >
            Manage patient communication, follow-up workflows, appointment
            reminders, and retention campaigns using secure, cloud-based
            Healthcare Patient Engagement Software built for clinics and
            healthcare organizations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button
              className="rounded-half px-10 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Book a Live Demo
            </Button>

            <Button
              variant="outline"
              className="rounded-half px-10 h-11 cursor-pointer"
              onClick={() => navigate("/start-free-trial")}
            >
              Start Free Trial
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <MarketingDemoCTA />
    </div>
  )
}