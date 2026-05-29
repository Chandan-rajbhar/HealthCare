import { useState } from "react";
import {
  Calendar,
  CreditCard,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  BarChart2,
  ShieldCheck,
  MessageSquare,
  ClipboardList,
  Package,
  Zap,
  Building2,
  UserCheck,
  Globe,
} from "lucide-react";

// ─── Layout helpers ───────────────────────────────────────────────────────────
const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-12 md:py-20 lg:py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto">{children}</div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const soloFeatures = [
  { text: "Schedule effortlessly with intuitive online booking." },
  { text: "Automate patient communication and marketing." },
  { text: "Go paperless with easy-to-use digital patient records." },
  { text: "Process payments seamlessly with various flexible options." },
];

const keyFeatures = [
  {
    icon: <Calendar size={24} />,
    title: "Appointment reminders",
    desc: "Automated SMS, email, and in-app reminders that dramatically reduce no-shows and keep your schedule full.",
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Calendars",
    desc: "Multi-provider calendars with colour-coded views, drag-and-drop rescheduling, and room/resource management.",
  },
  {
    icon: <UserCheck size={24} />,
    title: "Patient journey",
    desc: "Map every touchpoint from first enquiry to aftercare so patients feel supported every step of the way.",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Deposits",
    desc: "Collect deposits at the time of booking to protect your revenue and reduce last-minute cancellations.",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Integrated billing and invoicing",
    desc: "Raise invoices, track outstanding payments, and reconcile finances — all inside one platform.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Full EMR management and HIPAA compliance",
    desc: "Secure, cloud-based patient records that meet the highest data-protection standards worldwide.",
  },
];

const reviews = [
  {
    name: "Giana Botkin",
    role: "Solo practitioner",
    rating: 5,
    text: "It was just me. I was basically selling me and I needed to be everything to my company. Something I was going to start was posted, completely. The way I focus on my company, something I've never going to get to where I want is what I needed to see the only one that could really help.",
    source: "Google",
  },
  {
    name: "Angelica LHH",
    role: "Practice Manager",
    rating: 5,
    text: "Pabau is the friendliest and most intuitive practice management software I've used. The team is highly responsive and fast to resolve any issues. I couldn't recommend it more.",
    source: "Capterra",
  },
];

const faqs = [
  {
    q: "What are the benefits of using practice management software?",
    a: "Practice management software helps businesses by automating repetitive administrative tasks. They reduce admin burden and help staff focus on what matters most — delivering excellent care to patients.",
  },
  {
    q: "What are the main applications of practice management software?",
    a: "Key applications include appointment scheduling, patient record management, billing and invoicing, automated marketing, consent forms, inventory management, and reporting.",
  },
  {
    q: "How much does practice management software cost?",
    a: "Costs vary by provider and plan. Pabau offers tiered pricing suitable for solo practitioners all the way up to large enterprises. Contact the sales team for a quote tailored to your practice size.",
  },
];

const exploreCards = [
  { icon: <Users size={32} />, label: "For small teams" },
  { icon: <Building2 size={32} />, label: "For large teams" },
  { icon: <Globe size={32} />, label: "For enterprises" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-[#1e293b] p-8 md:p-10 hover:bg-[#111827] transition-colors border border-slate-800">
      <div className="text-sky-400 mb-4 md:mb-6">{icon}</div>
      <h3 className="font-sans text-lg md:text-xl mb-2 md:mb-3 text-white">{title}</h3>
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start text-left gap-4"
      >
        <span className="font-sans text-slate-800 text-base">{q}</span>
        {open ? (
          <ChevronUp size={20} className="text-sky-500 shrink-0 mt-0.5" />
        ) : (
          <ChevronDown size={20} className="text-slate-400 shrink-0 mt-0.5" />
        )}
      </button>
      {open && (
        <p className="mt-3 text-slate-500 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// ─── Mock UI components ───────────────────────────────────────────────────────
function MockCalendarUI() {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-3xl p-4 shadow-sm">
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="bg-[#0BBFBF] px-4 py-3 flex items-center justify-between">
          <span className="text-white font-sans text-sm">April 2024</span>
          <div className="flex gap-2">
            {["Day", "Week", "Month"].map((v) => (
              <span
                key={v}
                className={`text-xs px-2 py-0.5 rounded-full ${
                  v === "Week"
                    ? "bg-white text-[#0BBFBF] font-semibold"
                    : "text-white/80"
                }`}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4 space-y-2">
          {[
            { time: "09:00", name: "Sarah Mitchell", cls: "bg-teal-50 border-teal-400" },
            { time: "10:30", name: "James O'Brien", cls: "bg-blue-50 border-blue-400" },
            { time: "11:45", name: "Priya Kapoor", cls: "bg-purple-50 border-purple-400" },
            { time: "14:00", name: "Tom Wright", cls: "bg-amber-50 border-amber-400" },
          ].map((appt) => (
            <div
              key={appt.time}
              className={`flex items-center gap-3 p-2 rounded-lg border-l-4 ${appt.cls}`}
            >
              <span className="text-xs text-slate-400 w-10 shrink-0">{appt.time}</span>
              <span className="text-sm font-sans text-slate-700">{appt.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockFormUI() {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-3xl p-4">
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="bg-[#0A2540] px-4 py-3">
          <span className="text-white font-sans text-sm">Patient Intake Form</span>
        </div>
        <div className="p-4 space-y-3">
          {["Full Name", "Date of Birth", "Medical History"].map((label) => (
            <div key={label}>
              <label className="text-xs text-slate-400 font-sans block mb-1">{label}</label>
              <div className="h-8 bg-slate-100 rounded-lg border border-slate-200" />
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <CheckCircle2 size={14} className="text-[#0BBFBF]" />
            <span className="text-xs text-slate-500">HIPAA compliant & encrypted</span>
          </div>
          <button className="w-full py-2 rounded-lg bg-[#0BBFBF] text-white text-sm font-sans">
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
}

function MockMarketingUI() {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-3xl p-4">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
        {[
          { label: "Email open rate", val: 68, color: "bg-[#0BBFBF]" },
          { label: "SMS click-through", val: 42, color: "bg-blue-400" },
          { label: "Rebooking rate", val: 81, color: "bg-purple-400" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>{stat.label}</span>
              <span className="font-sans text-slate-700">{stat.val}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${stat.color} rounded-full`}
                style={{ width: `${stat.val}%` }}
              />
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          <MessageSquare size={14} className="text-[#0BBFBF]" />
          <span className="text-xs text-slate-400">Campaign sent to 342 clients</span>
        </div>
      </div>
    </div>
  );
}

function MockAutoEmailUI() {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-3xl p-4">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
        {[
          { label: "Pre-care sent", time: "48h before", status: "Delivered", cls: "bg-green-100 text-green-700" },
          { label: "Appointment reminder", time: "24h before", status: "Delivered", cls: "bg-green-100 text-green-700" },
          { label: "Post-care advice", time: "2h after", status: "Scheduled", cls: "bg-blue-100 text-blue-700" },
          { label: "Review request", time: "72h after", status: "Pending", cls: "bg-slate-100 text-slate-500" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between text-sm gap-2">
            <span className="text-slate-700 font-sans flex-1">{row.label}</span>
            <span className="text-xs text-slate-400">{row.time}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-sans ${row.cls}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockInventoryUI() {
  return (
    <div className="bg-slate-100 border border-slate-200 rounded-3xl p-4">
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
          <span className="font-sans text-slate-800 text-sm">Inventory</span>
          <span className="text-xs text-[#0BBFBF] font-sans">+ Add item</span>
        </div>
        {[
          { name: "Hyaluronic Filler 1ml", qty: 24, status: "ok" },
          { name: "Botox 50U Vials", qty: 7, status: "low" },
          { name: "Numbing Cream 30g", qty: 42, status: "ok" },
          { name: "Cannulas 22G", qty: 3, status: "critical" },
        ].map((item) => (
          <div
            key={item.name}
            className="px-4 py-2.5 flex items-center justify-between border-b border-slate-50 last:border-0"
          >
            <span className="text-sm text-slate-700">{item.name}</span>
            <span
              className={`text-xs font-sans px-2 py-0.5 rounded-full ${
                item.status === "ok"
                  ? "bg-green-100 text-green-700"
                  : item.status === "low"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.qty} left
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Solo() {
  return (
    <div className="bg-white text-slate-950 antialiased selection:bg-sky-100">

      {/* HERO */}
      <div className="bg-[#f0f9fa] border-b border-slate-200 pt-24 md:pt-32 pb-16 md:pb-24 text-center px-6">
        <p className="text-xs font-sans tracking-widest uppercase text-[#0BBFBF] mb-3">
          All-in-one practice management software
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-sans mb-6 md:mb-8 tracking-tight leading-[1.2] md:leading-[1.1] text-slate-900">
          All-in-one practice management
          <br className="hidden md:block" />
          <span className="text-slate-700"> software for your solo practice</span>
        </h1>
        <p className="text-slate-500 max-w-3xl mx-auto text-base md:text-xl mb-10 md:mb-12 leading-relaxed">
          As a solo practitioner, time and budget are everything. Pabau is a cost-effective
          all-in-one practice management solution that helps with everything — so you can do
          more, faster.
        </p>
        <button className="w-full sm:w-auto bg-[#46b1c9] hover:bg-[#3ba0b8] text-white px-8 md:px-10 py-4 rounded-xl font-sans transition-all shadow-sm">
          Start for free
        </button>

        {/* DAILY USE GRID */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto text-left">
          <h2 className="text-2xl md:text-3xl font-sans text-center mb-8 md:mb-12 text-slate-900">
            Solo practitioners use Pabau every day to:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10">
            {soloFeatures.map((f, i) => (
              <div key={i} className="flex gap-4 items-start md:items-center">
                <div className="bg-sky-500 text-white rounded-full p-1 shrink-0 mt-1 md:mt-0">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-slate-700 font-sans text-base md:text-lg">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ZIG-ZAG FEATURES */}
      <Section>
        <Container>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-2xl md:text-5xl font-sans tracking-tight leading-tight">
              Effortlessly manage your solo practice and{" "}
              <br className="hidden md:block" />
              <span className="text-purple-600">grow your business</span>
            </h2>
          </div>

          {/* Online booking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-20 md:mb-32">
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl font-sans mb-4 md:mb-6">
                Online booking that saves a lot of back-and-forth
              </h3>
              <p className="text-slate-500 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Stop losing time to phone tag. With Pabau's online booking, clients can schedule
                themselves 24/7 from any device — while you set the rules on availability,
                services, and providers.
              </p>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Give clients the freedom to book online at any time and turn your website into a
                booking engine that works while you sleep.
              </p>
            </div>
            <div className="order-2">
              <MockCalendarUI />
            </div>
          </div>

          {/* Digital records */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-20 md:mb-32">
            <div className="order-2 md:order-1">
              <MockFormUI />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-sans mb-4 md:mb-6">
                Say goodbye to paperwork with digital patient records and online forms
              </h3>
              <p className="text-slate-500 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Replace clipboards and filing cabinets with a secure, cloud-based record system.
                Build custom intake forms, consent forms, and treatment notes that are signed and
                stored automatically.
              </p>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Every document is encrypted, audit-trailed, and accessible from any device —
                keeping you HIPAA compliant without the admin burden.
              </p>
            </div>
          </div>

          {/* Marketing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-20 md:mb-32">
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl font-sans mb-4 md:mb-6">
                Complete marketing toolkit for growing your solo business
              </h3>
              <p className="text-slate-500 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Grow your client base with automated email campaigns, targeted SMS blasts, and an
                integrated loyalty programme — all built into the platform you already use to run
                your practice.
              </p>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Send the right message at the right moment, track results in real time, and watch
                your rebooking rate climb.
              </p>
            </div>
            <div className="order-2">
              <MockMarketingUI />
            </div>
          </div>
        </Container>
      </Section>

      {/* KEY FEATURES DARK GRID */}
      <Section className="bg-[#0f172a] text-white">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-sans mb-2">Key features for solo practices</h2>
            <p className="text-slate-400 text-sm md:text-base">
              Everything you need to run a modern, efficient practice
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-3xl overflow-hidden">
            {keyFeatures.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </Container>
      </Section>

      {/* EMPOWER / GROW SECTION */}
      <Section className="bg-[#f0f9fa]">
        <Container>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-sans">
              Empower your small business with{" "}
              <span className="text-sky-500">practice management software</span>{" "}
              that grows with you
            </h2>
            <p className="text-slate-500 mt-3 text-base">
              Tools designed to scale alongside your ambitions
            </p>
          </div>

          <div className="space-y-20 md:space-y-32">

            {/* Automated emails */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="order-1">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-sky-500" />
                  <span className="text-xs font-sans uppercase tracking-wider text-sky-500">
                    Automation
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-sans mb-4 md:mb-6">
                  Automated pre-care and post-care emails
                </h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                  Deliver the right information at the right time — from preparation instructions
                  to aftercare advice — without lifting a finger. Patients feel looked after, and
                  you save hours every week.
                </p>
              </div>
              <div className="order-2">
                <MockAutoEmailUI />
              </div>
            </div>

            {/* Inventory */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="order-2 md:order-1">
                <MockInventoryUI />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-2 mb-3">
                  <Package size={16} className="text-sky-500" />
                  <span className="text-xs font-sans uppercase tracking-wider text-sky-500">
                    Stock control
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-sans mb-4 md:mb-6">
                  Inventory management
                </h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                  Track stock levels in real time, set low-quantity alerts, and manage suppliers
                  without spreadsheets. Know exactly what you have, what you need, and when to
                  reorder.
                </p>
              </div>
            </div>

            {/* Consent forms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="order-1">
                <div className="flex items-center gap-2 mb-3">
                  <ClipboardList size={16} className="text-sky-500" />
                  <span className="text-xs font-sans uppercase tracking-wider text-sky-500">
                    Forms
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-sans mb-4 md:mb-6">
                  Customizable consent and intake forms
                </h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                  Build branded digital forms your clients complete before they arrive — fully
                  signed, stored, and retrievable in seconds. No paper, no scanning, no filing.
                </p>
              </div>
              <div className="order-2">
                <MockFormUI />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* REVIEWS */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-sans">Customer Reviews & Testimonials</h2>
            <p className="text-slate-500 mt-3 text-base">Loved by 3500+ practices around the world</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 text-sm md:text-base leading-relaxed">
                  "{r.text}"
                </p>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-sans text-slate-900">{r.name}</p>
                    <p className="text-xs text-slate-400 font-sans uppercase">{r.role}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-sans">
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-sky-50 border border-sky-100 rounded-2xl px-6 py-4">
              <div className="flex -space-x-2">
                {["bg-teal-400", "bg-blue-400", "bg-purple-400", "bg-amber-400"].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white`} />
                ))}
              </div>
              <p className="text-sm font-sans text-slate-700">
                Trusted by{" "}
                <span className="text-[#0BBFBF]">3500+</span> practices across the world
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* EXPLORE MORE */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-sans">Explore more ways to use Pabau</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {exploreCards.map((c, i) => (
              <button
                key={i}
                className="w-full p-6 md:p-10 bg-sky-50 border border-sky-100 rounded-2xl md:rounded-3xl hover:bg-sky-100 transition-all text-center flex flex-col items-center gap-3 text-[#0BBFBF]"
              >
                {c.icon}
                <p className="font-sans text-slate-800 text-base md:text-lg">{c.label}</p>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-sans uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-3 text-base">
              Everything you need to know about Practice Management Software
            </p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}