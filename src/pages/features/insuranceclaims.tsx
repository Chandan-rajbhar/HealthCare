import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Settings,
  ChevronDown,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/pages/FooterPage/footerpage";
import CommonTestimonials from "@/components/CommonTestimonials";
import { useNavigate } from "react-router-dom";

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: FileCheck,
    title: "Digital claim management",
    description:
      "Create, organize, and manage healthcare insurance claims digitally from one centralized platform.",
  },
  {
    icon: Clock,
    title: "Faster reimbursement workflows",
    description:
      "Accelerate insurance processing with automated claim tracking and reimbursement coordination.",
  },
  {
    icon: ShieldCheck,
    title: "Secure healthcare records",
    description:
      "Protect patient records, insurance details, invoices, and healthcare documentation securely.",
  },
  {
    icon: Settings,
    title: "Integrated billing workflows",
    description:
      "Connect claims, patient billing, treatment plans, and financial operations seamlessly.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is Insurance Claims Management Software?",
    a: "Insurance Claims Management Software helps healthcare providers manage insurance claims, reimbursements, billing coordination, and claim tracking digitally.",
  },
  {
    q: "How does insurance claims software improve healthcare operations?",
    a: "The platform automates claims processing, reduces paperwork, improves billing accuracy, and streamlines reimbursement workflows.",
  },
  {
    q: "Can healthcare teams track claim status?",
    a: "Yes. Teams can monitor approvals, denied claims, pending reimbursements, submissions, and payment activity through centralized dashboards.",
  },
  {
    q: "Does the software integrate with billing and patient records?",
    a: "Yes. Insurance claims connect directly with patient records, treatment plans, invoices, and healthcare billing workflows.",
  },
  {
    q: "Is insurance and healthcare data stored securely?",
    a: "Yes. The platform uses secure cloud-based infrastructure to protect healthcare documentation, billing data, and insurance records.",
  },
];

const LOGOS = [
  "MediCare",
  "HealthFirst",
  "CareSync",
  "MedPlus",
  "ClinicHub",
  "WellCare",
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

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
                <ChevronDown size={16} />
              </span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-sm leading-relaxed pb-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─── Deep Dive Row ─────────────────────────────────────────────────────────────

function DeepDiveRow({
  imageLeft,
  eyebrow,
  heading,
  body,
  bullets,
}: {
  imageLeft: boolean;
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${
          !imageLeft ? "order-1 lg:order-2" : ""
        }`}
      >
        <img
          src="/insurance.png"
          alt="Insurance Claims"
          className="w-full h-full object-cover"
        />
      </div>

      <div className={!imageLeft ? "order-2 lg:order-1" : ""}>
        <p className="text-xs text-primary uppercase tracking-widest mb-3">
          {eyebrow}
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 mb-4">{heading}</h3>

        <p className="text-gray-500 leading-relaxed mb-6">{body}</p>

        <ul className="space-y-2 text-sm text-gray-600">
          {bullets.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function InsuranceClaims() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Insurance Claims Management Software | Healthcare EHR Software for Clinics";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Manage insurance claims, reimbursements, billing workflows, patient payments, and healthcare financial operations using secure Insurance Claims Management Software and Healthcare EHR Software for clinics.",
    );

    setMeta(
      "keywords",
      "Insurance Claims Management Software, Healthcare EHR Software, Electronic Health Record Software, Medical Billing Software, Healthcare Management Software, Clinic Management Software, Insurance Reimbursement Software, Healthcare Workflow Automation, Patient Billing Software, Revenue Cycle Management Software",
    );
  }, []);

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="w-full bg-gray-50 min-h-[700px] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Insurance Claims Management Software for Faster Healthcare
              Reimbursements
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              Simplify insurance claims processing, billing coordination,
              reimbursement tracking, and healthcare financial workflows.ions
              using secure cloud-based Healthcare EHR Software.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              HealVare Insurance Claims Management Software helps clinics
              streamline claims processing, improve billing accuracy, reduce
              administrative workload, and strengthen reimbursement management
              from one centralized healthcare platform.
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
                src="/insurance.png"
                alt="Insurance Claims Management"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}

      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
            Trusted by 500+ clinics worldwide
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale">
            {LOGOS.map((name) => (
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

      {/* ── FEATURES ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Built for modern healthcare reimbursement workflows
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Everything healthcare providers need to simplify claims processing,
            improve billing coordination, and strengthen reimbursement
            management.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;

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

                  <p className="mt-2 text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          <DeepDiveRow
            imageLeft
            eyebrow="Claims processing"
            heading="Manage insurance claims digitally"
            body="Create, organize, and process insurance claims directly from patient billing workflows and treatment records while reducing manual paperwork."
            bullets={[
              "Create digital insurance claims",
              "Attach billing and treatment details",
              "Reduce administrative workload",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Reimbursement tracking"
            heading="Monitor reimbursements and claim status"
            body="Track approvals, denied claims, pending reimbursements, and insurance payment activity using centralized reporting dashboards."
            bullets={[
              "Track claim approvals and denials",
              "Monitor pending reimbursements",
              "Improve revenue visibility",
            ]}
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}

      <CommonTestimonials />

      {/* ── FAQ ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Frequently asked questions
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Ready to simplify healthcare insurance claims?
          </h2>

          <p className="mt-4 text-gray-600">
            See how HealVare Insurance Claims Management Software helps clinics
            streamline reimbursements, improve billing workflows, and strengthen
            healthcare financial operations.
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
  );
}
