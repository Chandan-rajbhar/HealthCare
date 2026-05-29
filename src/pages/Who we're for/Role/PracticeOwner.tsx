import {
  CheckCircle2,
  Calendar,
  Settings,
  Users,
  BarChart3,
  Star,
  ArrowRight,
} from "lucide-react";

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-20 px-6 md:px-12 lg:px-20 ${className}`}>
    {children}
  </section>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto">{children}</div>
);

export default function PracticeOwner() {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      {/* HERO */}
      <div className="bg-slate-50 py-24 px-6 text-center border-b border-slate-200">
        <h1 className="text-5xl md:text-7xl font-sans tracking-tight mb-6">
          Run a smarter practice,
          <br />
          <span className="text-teal-500">without the chaos.</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          From bookings to billing, manage every part of your clinic in one
          place, so you can focus on delivering exceptional care, not juggling
          systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-sans hover:bg-teal-600 transition-colors">
            Book a free demo
          </button>
          <button className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded-full font-sans hover:bg-slate-50 transition-colors">
            View pricing
          </button>
        </div>
      </div>

      {/* BENEFITS - FLAT CARDS WITH BORDERS */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-sans mb-4">Focus on what matters</h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Cut admin time dramatically",
              "Automate daily operations",
              "Increase revenue visibility",
              "Deliver a premium client experience",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 p-8 rounded-2xl bg-white flex flex-col items-center text-center"
              >
                <CheckCircle2 className="text-teal-500 mb-4" size={32} />
                <p className="font-sans text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ADMIN SECTION - ALTERNATING LAYOUT */}
      <Section className="bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white border border-slate-200 aspect-video rounded-3xl flex items-center justify-center p-8">
                {/* Placeholder for Product Screenshot */}
                <div className="w-full h-full bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center">
                  <span className="text-slate-400 font-sans italic">
                    App Dashboard Preview
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-sans mb-6 leading-tight">
                Be overjoyed with clients, not overwhelmed with admin
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    t: "Effortless Scheduling",
                    d: "Manage bookings, availability, and staff calendars with ease.",
                  },
                  {
                    t: "Smart Automation",
                    d: "Send reminders, confirmations, and follow-ups automatically.",
                  },
                  {
                    t: "Client-Centric Experience",
                    d: "Create seamless journeys that keep clients coming back.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-sans">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-sans text-slate-900">{item.t}</h4>
                      <p className="text-slate-600">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FEATURES - DARK GRID */}
      <Section className="bg-slate-900 text-white">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl font-sans mb-2">Power features</h2>
            <p className="text-slate-400">
              Everything you need to run a modern clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800 rounded-3xl overflow-hidden">
            <Feature
              icon={<Calendar />}
              title="Online booking"
              desc="Allow clients to book 24/7 on any device."
            />
            <Feature
              icon={<Settings />}
              title="No show protection"
              desc="Secure deposits and automated follow-ups."
            />
            <Feature
              icon={<BarChart3 />}
              title="Custom reporting"
              desc="Deep insights into your revenue and staff."
            />
            <Feature
              icon={<Users />}
              title="Integrations"
              desc="Sync with Xero, Mailchimp, and more."
            />
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS - BORDER ACCENTS */}
      <Section>
        <Container>
          <h2 className="text-3xl font-sans text-center mb-12">
            Trusted by 20,000+ owners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="p-8 border-l-4 border-teal-500 bg-slate-50 rounded-r-2xl"
              >
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">
                  "Pabau has completely transformed how we handle our patient
                  records. The transition was seamless."
                </p>
                <div className="flex items-center gap-3">
                  
                  <div>
                    <p className="font-sans text-sm">Alex Rivers</p>
                    <p className="text-xs text-slate-500">
                      Skin Clinic Director
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <div className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-teal-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-sans mb-6">
            Ready to streamline your practice?
          </h2>
          <p className="text-teal-100 mb-10 text-lg max-w-xl mx-auto">
            Join the community of health professionals growing their business
            with Pabau.
          </p>
          <button className="bg-white text-teal-600 px-10 py-4 rounded-full font-sans text-lg hover:bg-teal-50 transition-colors inline-flex items-center gap-2">
            Get Started Now <ArrowRight size={20} />
          </button>
        </div>
      </div>
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
    <div className="bg-slate-900 p-10 hover:bg-slate-800 transition-colors">
      <div className="text-teal-400 mb-6">{icon}</div>
      <h3 className="text-xl font-sans mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
