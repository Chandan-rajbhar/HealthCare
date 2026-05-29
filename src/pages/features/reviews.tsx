import { useState, useRef, useEffect } from "react"
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion"
import { ChevronDown, Star, MessageSquare, ThumbsUp, BarChart3, Mail, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import "@/pages/FooterPage/footerpage"
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
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── Features ──────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Star,
    title: "Automated review requests",
    description:
      "Send automated email and SMS review requests after patient appointments and healthcare visits.",
  },
  {
    icon: MessageSquare,
    title: "Patient feedback management",
    description:
      "Collect, monitor, and manage patient feedback from one centralized dashboard.",
  },
  {
    icon: ThumbsUp,
    title: "Improve online reputation",
    description:
      "Strengthen patient trust and healthcare credibility with positive online reviews.",
  },
  {
    icon: BarChart3,
    title: "Real-time review insights",
    description:
      "Track patient satisfaction, feedback trends, and healthcare reputation performance.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Reputation Management Software?",
    a: "Healthcare Reputation Management Software helps clinics collect patient reviews, monitor feedback, manage online reputation, and improve patient engagement through automated workflows.",
  },
  {
    q: "How do patient reviews help healthcare organizations grow?",
    a: "Positive reviews improve patient trust, strengthen online visibility, attract new patients, and support clinic growth.",
  },
  {
    q: "Can clinics automate patient review requests?",
    a: "Yes. The platform automatically sends review requests through email and SMS after appointments and healthcare visits.",
  },
  {
    q: "Does the software support online review monitoring?",
    a: "Absolutely. Clinics can monitor reviews, ratings, patient feedback, and online reputation performance from one dashboard.",
  },
  {
    q: "Can healthcare staff respond to patient reviews?",
    a: "Yes. The platform supports review response management to help clinics engage with patient feedback professionally.",
  },
  {
    q: "Does the software help improve patient satisfaction?",
    a: "Yes. Patient feedback insights help healthcare organizations improve communication, services, and patient experiences.",
  },
  {
    q: "Is Healthcare Reputation Management Software suitable for multi-location clinics?",
    a: "Yes. The platform supports clinics, hospitals, healthcare groups, and multi-provider organizations with scalable reputation management tools.",
  },
  {
    q: "Can the software integrate with healthcare management systems?",
    a: "Yes. Healthcare Reputation Management Software integrates with appointment scheduling systems, patient communication tools, and healthcare management platforms.",
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

// ─── Deep Dive Section ─────────────────────────────────────────────────────────

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
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
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
          src="/reviews.png"
          alt="Healthcare reputation management"
          className="w-full h-full max-w-full object-cover"
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
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Reviews() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Healthcare Reputation Management Software | Collect & Manage Patient Reviews"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Collect patient reviews, automate feedback requests, monitor online reputation, and improve patient trust using secure Healthcare Reputation Management Software for clinics and healthcare providers.",
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
      {/* HERO */}

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
              className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Collect & Manage Patient Reviews with Healthcare Reputation
              Management Software
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Improve online reputation, collect patient feedback, increase
              positive healthcare reviews, and strengthen patient trust using
              secure Healthcare Reputation Management Software designed for
              clinics and healthcare providers.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-6"
              variants={fadeUp}
            >
              <Button
                className="rounded-full px-8 h-11 cursor-pointer"
                onClick={() => navigate("/free-trial")}
              >
                Start Free Trial
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8 h-11 cursor-pointer"
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
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/reviews.png"
                alt="Healthcare Reputation Management Software"
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
              Trusted by healthcare providers worldwide
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
                variants={cardVariant}
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
              Simplify Patient Review Collection & Online Reputation Management
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Patient reviews influence healthcare decisions and clinic growth.
              Healthcare Review Management Software helps clinics automate
              review requests, monitor patient feedback, manage online
              reputation, and improve patient satisfaction from one centralized
              platform.
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

                  <p className="mt-2 text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* EMAIL & SMS FEEDBACK */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <ScrollReveal>
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Email & SMS Review Requests
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Automate patient review requests with email and SMS
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-gray-600 leading-relaxed mb-8">
                Reach patients after appointments with automated review requests through email and SMS to increase positive feedback and strengthen online reputation.
              </p>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Email review campaigns
                </h3>
                <p className="text-sm text-gray-600">
                  Send automated review requests via email after patient visits to collect feedback and build online reputation.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  SMS review reminders
                </h3>
                <p className="text-sm text-gray-600">
                  Notify patients via SMS to leave reviews, share feedback, and engage with your healthcare clinic.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
            <img
              src="/email.png"
              alt="Email and SMS patient review requests"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* DEEP DIVE */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          <DeepDiveRow
            imageLeft
            eyebrow="Patient Review Management"
            heading="Collect More Patient Reviews & Strengthen Healthcare Trust"
            body="Encourage patients to share feedback after appointments and healthcare visits using automated review collection workflows designed to improve online visibility and patient confidence."
            bullets={[
              "Automated patient review requests",
              "Email & SMS review campaigns",
              "Multi-platform review management",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Healthcare Reputation Growth"
            heading="Healthcare Reputation Management Software Built for Clinic Growth"
            body="Improve online visibility, attract new patients, and strengthen healthcare credibility using intelligent Patient Review & Reputation Management Software."
            bullets={[
              "Increase positive patient reviews",
              "Improve online healthcare reputation",
              "Strengthen patient trust and engagement",
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
            Strengthen Your Healthcare Reputation with Patient Review Management
            Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600 max-w-3xl mx-auto"
            variants={fadeUp}
          >
            Manage patient reviews, automate feedback collection, monitor online
            reputation, and improve patient engagement using secure,
            cloud-based Healthcare Reputation Management Software built for
            clinics and healthcare organizations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button
              className="rounded-full px-8 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Book a Live Demo
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-8 h-11 cursor-pointer"
              onClick={() => navigate("/free-trial")}
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