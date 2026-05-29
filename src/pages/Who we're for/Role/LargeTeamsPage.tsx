import {
  CheckCircle2,
  Calendar,
  Star,
  Zap,
  ShieldCheck,
  Layout,
  Globe,
  ClipboardCheck,
  Package,
  UserCheck,
  MousePointer2,
} from "lucide-react";

// Responsive Section Wrapper
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

export default function LargeTeamsPage() {
  return (
    <div className="bg-white text-slate-950 antialiased selection:bg-sky-100">
      
      {/* HERO SECTION */}
      <div className="bg-[#f0f9fa] border-b border-slate-200 pt-24 md:pt-32 pb-16 md:pb-24 text-center px-6">

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-sans mb-6 md:mb-8 tracking-tight leading-[1.2] md:leading-[1.1] text-slate-900">
          Practice management software
          <br className="hidden md:block" />
          <span className="text-slate-700"> designed for large teams</span>
        </h1>

        <p className="text-slate-500 max-w-3xl mx-auto text-base md:text-xl mb-10 md:mb-12 leading-relaxed">
          Big team? No problem. Take control, streamline operations, and watch your revenue soar. 
          Pabau is an all-in-one solution that grows as your business grows.
        </p>

        <button className="w-full sm:w-auto bg-[#46b1c9] hover:bg-[#3ba0b8] text-white px-8 md:px-10 py-4 rounded-xl font-sans transition-all shadow-sm">
          Book a demo
        </button>

        {/* DAILY USE GRID */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto text-left">
          <h2 className="text-2xl md:text-3xl font-sans text-center mb-8 md:mb-12 text-slate-900">Large teams use Pabau every day to:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10">
            {[
              "Wow clients with a professional booking experience",
              "Handle complex patient management needs",
              "Seamlessly manage, schedule, and motivate your team",
              "Use automations to simplify workflows",
              "Revenue tools to boost profitability"
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start md:items-center">
                <div className="bg-sky-500 text-white rounded-full p-1 shrink-0 mt-1 md:mt-0">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-slate-700 font-sans text-base md:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCALE SECTION - ZIG ZAG */}
      <Section>
        <Container>
          <div className="text-center mb-16 md:mb-24">
             <h2 className="text-2xl md:text-5xl font-sans tracking-tight leading-tight">
               Equip your large team with practice <br className="hidden md:block"/>
               management software <span className="text-purple-600">designed to grow</span>
             </h2>
          </div>

          {/* Feature 1: Scheduling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-20 md:mb-32">
            <div className="order-1">
              <h3 className="text-2xl md:text-3xl font-sans mb-4 md:mb-6">Easy online appointment scheduling and booking</h3>
              <p className="text-slate-500 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                No more phone tags or double-bookings — Pabau's intuitive scheduling system lets clients book online 24/7.
              </p>
              <p className="text-slate-500 text-base md:text-lg">Customize availability and reduce no-shows with automated reminders.</p>
            </div>
            <div className="order-2 bg-slate-100 border border-slate-200 rounded-3xl p-4 shadow-sm">
               <div className="bg-white border border-slate-200 rounded-2xl aspect-video flex items-center justify-center p-4">
                  <Calendar size={60} className="text-sky-100 md:w-[80px]" />
               </div>
            </div>
          </div>

          {/* Feature 2: Client Portal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-20 md:mb-32">
            <div className="order-2 md:order-1 bg-slate-100 border border-slate-200 rounded-3xl p-4">
               <div className="bg-white border border-slate-200 rounded-2xl aspect-video flex items-center justify-center">
                  <UserCheck size={60} className="text-sky-100 md:w-[80px]" />
               </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-sans mb-4 md:mb-6">Client portal for better client communication</h3>
              <p className="text-slate-500 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Provide your clients with an effortless experience with a self-service portal.
              </p>
              <p className="text-slate-500 text-base md:text-lg">Store thousands of records, photos, appointments, and billing history securely.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* KEY FEATURES GRID - DARK MODE */}
      <Section className="bg-[#0f172a] text-white">
        <Container>
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-sans mb-4">Key features for large practices</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-3xl overflow-hidden">
            <FeatureCard icon={<ShieldCheck/>} title="Staff permissions" desc="Control who can see and do what, from accessing schedules to editing shifts." />
            <FeatureCard icon={<MousePointer2/>} title="Comprehensive marketing suite" desc="Create targeted, high-converting campaigns using real client data — no third-party tools needed." />
            <FeatureCard icon={<Zap/>} title="Revenue-driving automation" desc="Grow smart with memberships, packages, gift cards, and loyalty programs." />
            <FeatureCard icon={<ClipboardCheck/>} title="Advanced patient records" desc="Keep everything secure, organized, and up to date — from treatment notes to photos." />
            <FeatureCard icon={<Package/>} title="Inventory management" desc="Track inventory and send low-stock alerts to keep your shelves full." />
            <FeatureCard icon={<Layout/>} title="Patient task management" desc="Assign, track, and complete tasks right from the client card." />
          </div>
        </Container>
      </Section>

      {/* REVENUE FEATURES */}
      <Section>
        <Container>
          <div className="text-center mb-12 md:mb-20">
             <h2 className="text-3xl md:text-4xl font-sans">Revenue features designed to <span className="text-sky-500">help you scale</span></h2>
          </div>

          <div className="space-y-20 md:space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
               <div className="order-2 md:order-1 bg-slate-100 rounded-3xl p-4">
                  <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center border border-slate-200">
                    <Globe size={80} className="text-slate-100 md:w-[100px]" />
                  </div>
               </div>
               <div className="order-1 md:order-2">
                  <h3 className="text-xl md:text-2xl font-sans mb-4 md:mb-6">Manage multiple locations</h3>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                    Change between locations in a single click. Coordinate staff schedules and view reports on performance per location.
                  </p>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans">Customer Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dr Ahmed El Houssieny", text: "I have a more medical role, so I'm able to access medical records and appointments easily.", role: "Medical Director" },
              { name: "Bernardo R.", text: "Excellent scheduling feature for multi-clinic operations. Very intuitive.", role: "Capterra Review" },
              { name: "Jess G.02", text: "I like how easy it is to add staff permissions. Training is fantastic.", role: "G2 Review" }
            ].map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6 text-sm md:text-base leading-relaxed">"{t.text}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-sans text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 font-sans uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* MOBILE OPTIMIZED PERSONA CARDS */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-sans">Explore more</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <PersonaCard title="For solo practices" />
            <PersonaCard title="For small teams" />
            <PersonaCard title="For enterprises" />
          </div>
        </Container>
      </Section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-[#1e293b] p-8 md:p-10 hover:bg-[#111827] transition-colors border border-slate-800">
      <div className="text-sky-400 mb-4 md:mb-6">{icon}</div>
      <h3 className="font-sans text-lg md:text-xl mb-2 md:mb-3">{title}</h3>
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function PersonaCard({ title }: { title: string }) {
  return (
    <button className="w-full p-6 md:p-10 bg-sky-50 border border-sky-100 rounded-2xl md:rounded-3xl hover:bg-sky-100 transition-all text-center">
       <p className="font-sans text-slate-800 text-base md:text-lg">{title}</p>
    </button>
  );
}