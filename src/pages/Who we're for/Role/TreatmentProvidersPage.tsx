import {
  Calendar,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";

// Refined Section with cleaner padding and no extra fluff
const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
 <section className={`py-14 md:py-24 px-5 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto">{children}</div>
);

export default function TreatmentProvidersPage() {
  return (
    <div className="bg-white text-slate-950 selection:bg-sky-100">
      {/* HERO - Using a subtle grid pattern or flat color */}
      <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-24 text-center px-6">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans mb-8 tracking-tight leading-[1.1]">
          Spend more time treating,
          <br />
          <span className="text-sky-600">not managing.</span>
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl mb-12 leading-relaxed">
          The all-in-one workspace for modern practitioners. Bookings, clinical
          notes, and payments—synchronized in one interface.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-sans hover:bg-slate-800 transition-colors">
            Book a demo
          </button>
          <button className="bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-xl font-sans hover:bg-slate-50 transition-colors">
            View pricing
          </button>
        </div>
      </div>

      {/* STATS / TRUST BAR - Replaced the boxes with a cleaner line-based layout */}
      <div className="border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 md:border-x border-slate-100">
            {[
              { label: "Automate", desc: "Bookings" },
              { label: "Organize", desc: "Schedules" },
              { label: "Secure", desc: "Client Records" },
              { label: "Instant", desc: "Payments" },
            ].map((item, i) => (
              <div key={i} className="p-8 text-center">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-sans mb-1">
                  {item.label}
                </p>
                <p className="font-sans text-slate-900">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* DAILY FLOW - High contrast layout */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar size={24} />
              </div>
           <h2 className="text-2xl md:text-4xl font-sans mb-6 tracking-tight">
                Know exactly what your day looks like
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Stop juggling tabs. Our unified interface gives you a birds-eye
                view of your clinical day, balancing appointments with prep time
                automatically.
              </p>
              <ul className="space-y-5">
                {[
                  "Visual calendar with real-time sync",
                  "Instant access to clinical history",
                  "Multi-location and service support",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 bg-emerald-50 text-emerald-600 rounded-full p-0.5">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-sans text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flat "Window" Preview */}
            <div className="bg-slate-100 border border-slate-200 rounded-3xl p-4">
              <div className="bg-white border border-slate-200 rounded-2xl aspect-[4/3] flex flex-col">
                <div className="border-b border-slate-100 p-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-slate-400 font-sans">
                    Calendar Interface
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CORE FEATURES - Clean Grid, no shadows */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="mb-16">
         <h2 className="text-2xl md:text-4xl font-sans tracking-tight">
              Clinical precision,{" "}
              <span className="text-slate-400">administrative ease.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Feature
              icon={<Layers size={20} />}
              title="Smart scheduling"
              desc="Set your availability and let the system handle the rest."
            />
            <Feature
              icon={<ClipboardList size={20} />}
              title="Structured notes"
              desc="HIPAA-compliant templates tailored to your specialty."
            />
            <Feature
              icon={<CreditCard size={20} />}
              title="Easy payments"
              desc="Automatic invoicing and integrated card processing."
            />
            <Feature
              icon={<Clock size={20} />}
              title="Automated follow-ups"
              desc="Reduce no-shows with smart SMS and email reminders."
            />
          </div>
        </Container>
      </Section>

      {/* CTA - Bold and flat */}
      <Section>
        <Container>
       <div className="bg-slate-950 text-white rounded-[2rem] p-8 md:p-16 text-center">
         <h2 className="text-2xl md:text-5xl font-sans mb-6 tracking-tight">
              Ready to simplify your practice?
            </h2>
          <p className="mb-10 text-slate-400 text-base md:text-xl max-w-xl mx-auto">
              Join 2,000+ providers who focus on people, not paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-sans hover:bg-primary transition-colors inline-flex items-center justify-center gap-2">
                Get started free <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border border-slate-700 text-white px-10 py-4 rounded-xl font-sans hover:bg-slate-900 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-sky-300 transition-colors">
      <div className="text-sky-600 mb-6 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-sans text-lg mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}
