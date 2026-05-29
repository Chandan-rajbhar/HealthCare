import {
  CheckCircle2,
  Calendar,
  Users,
  BarChart3,
  ArrowRight,
  Zap,
  PieChart,
  Layout,
} from "lucide-react";

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto">{children}</div>
);

export default function EnterprisePage() {
  return (
    <div className="bg-white text-slate-950 antialiased selection:bg-purple-50">
      
      {/* HERO */}
      <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-24 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans mb-8 tracking-tight leading-[1.1]">
          Enterprise practice management
          <br />
          <span className="text-slate-600">software for unmatched efficiency</span>
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-12 leading-relaxed">
          HealVare streamlines practice management for med spas, helping you automate workflows, 
          optimize patient care, and scale — all while maintaining complete control over your operations.
        </p>

        <button className="bg-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-sans">
          Book a demo
        </button>

        {/* TOP BENEFITS BOX */}
        <div className="mt-20 max-w-4xl mx-auto text-left">
          <h2 className="text-2xl font-sans text-center mb-10">Enterprises use HealVare every day to:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 gap-x-12 gap-y-8">
            {[
              "Keep detailed patient records, automate follow-ups, and personalize treatment plans.",
              "Convert more patients, automate payments, and use AI-powered agents to increase efficiency.",
              "Consolidate and centralize scheduling, CRM, marketing tools, and financials in one system.",
              "Manage multiple locations with standardized workflows and a clear view of all branches."
            ].map((text, i) => (
              <div key={i} className="flex gap-3 sm:gap-4 items-start">
                <div className="bg-sky-100 text-sky-600 rounded-full p-1 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-slate-600 font-sans leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCALE SECTION - MULTI-LOCATION */}
      <Section>
        <Container>
          <div className="text-center mb-20">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans tracking-tight">
               Scale your enterprise <br/>
               <span className="text-purple-500 italic font-sans">without limits</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center mb-32">
            <div>
              <h2 className="text-3xl font-sans mb-6">Multi-location management</h2>
              <div className="space-y-8">
                <SubFeature 
                  title="Seamless management" 
                  desc="Get a complete overview of all locations in one system." 
                />
                <SubFeature 
                  title="Consistent workflows" 
                  desc="Standardize workflows and ensure quality across all your businesses." 
                />
                <SubFeature 
                  title="Performance tracking" 
                  desc="Standardize clinic, patient, and staff management workflows." 
                />
              </div>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 relative">
               <div className="bg-white border border-slate-200 rounded-2xl aspect-video p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                     <div className="h-4 w-32 bg-slate-100 rounded-full"/>
                     <div className="flex gap-2">
                        <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100"/>
                        <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100"/>
                     </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-6">
                     <div className="space-y-3">
                        <div className="h-3 w-full bg-slate-50 rounded"/>
                        <div className="h-3 w-4/5 bg-slate-50 rounded"/>
                        <div className="h-3 w-2/5 bg-slate-50 rounded"/>
                     </div>
                     <div className="bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-center">
                        <PieChart className="text-sky-400" size={40} />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MARKETING SUITE */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl aspect-[4/5] p-8 flex flex-col">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                       <p className="text-[10px] font-sans text-slate-400 uppercase tracking-widest mb-1">Preview</p>
                       <p className="font-sans text-lg">Special Offers</p>
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-slate-200 overflow-hidden relative">
                       <div className="absolute top-4 right-4 bg-sky-500 text-white p-3 rounded-lg">
                          <p className="text-xs font-sans">187 Emails Sent</p>
                       </div>
                    </div>
                </div>
             </div>
             <div>
                <h2 className="text-3xl font-sans mb-6">Built-in comprehensive marketing suite</h2>
                <div className="space-y-8">
                  <SubFeature title="Automated campaigns" desc="Convert existing clients with cross-sell and upsell promotions." />
                  <SubFeature title="Personalized outreach" desc="Boost patient engagement and drive bookings with reminders, birthday offers, and VIP discounts." />
                  <SubFeature title="Measure what works" desc="Get detailed reports on campaign performance, client retention, and ROI." />
                </div>
             </div>
          </div>
        </Container>
      </Section>

      {/* KEY FEATURES GRID - DARK MODE */}
      <Section className="bg-[#111827] text-white">
        <Container>
          <div className="text-center mb-16">
             <h2 className="text-4xl font-sans mb-4">Key features for enterprise clinics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-3xl overflow-hidden">
            <FeatureItem icon={<Calendar/>} title="Online booking & scheduling" desc="Offer 24/7 appointment booking with real-time availability. Manage staff schedules and timesheets with ease." />
            <FeatureItem icon={<Layout/>} title="Custom packages & quotes" desc="Combine your service offerings into ready-to-use packages. Create personalized pricing for high-ticket treatments." />
            <FeatureItem icon={<Zap/>} title="Integrated product sales feature" desc="Sell skincare, supplements, and other products through a single POS. Manage your inventory of consumables, injectables, and retail products." />
            <FeatureItem icon={<ArrowRight/>} title="Deposits & payments" desc="Automate payment requests with HealVare's payment policies. Reduce no-shows and cancellations with customizable deposits." />
            <FeatureItem icon={<BarChart3/>} title="Advanced reporting" desc="Get top-level financial reports delivered automatically. Track marketing performance, revenue streams, and other key metrics." />
            <FeatureItem icon={<Users/>} title="Powerful integrations" desc="Ensure a unified workflow and connect HealVare with tools like Xero, Google, and Zapier. Send information or automated messages from HealVare to your existing systems with webhooks and HealVare's API." />
          </div>
        </Container>
      </Section>

      {/* PERSONALIZATION SECTION */}
      <Section>
        <Container>
          <div className="text-center mb-20">
             <h2 className="text-4xl font-sans">Personalize the entire <br/><span className="text-sky-500">client experience</span></h2>
          </div>

          {/* Workflow */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
             <div className="bg-slate-100 rounded-3xl p-8 aspect-video flex items-center justify-center">
                <div className="space-y-4 w-full max-w-sm">
                   {[
                     {t: "Appointment Confirmation", c: "bg-sky-500"},
                     {t: "Pre-care instructions", c: "bg-slate-800"},
                     {t: "Post-care instructions", c: "bg-slate-800"}
                   ].map((item, i) => (
                     <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
                        <div className={`w-3 h-3 rounded-full ${item.c}`} />
                        <span className="font-sans text-sm">{item.t}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div>
                <h3 className="text-2xl font-sans mb-4">Customizable workflows</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                  Customize everything from the online booking experience and treatment packages to gift cards and membership programs.
                </p>
                <p className="text-slate-500">Tailor each step of the patient journey to your and your clients' specific needs.</p>
             </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA BOX */}
      <Section className="pb-32">
        <Container>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 text-center">
             <h2 className="text-4xl md:text-5xl font-sans mb-8 tracking-tight">Explore more ways to use HealVare</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <button className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-sky-500 transition-colors group">
                   <Users className="mx-auto mb-4 text-slate-400 group-hover:text-sky-500" />
                   <p className="font-sans">For solo practices</p>
                </button>
                <button className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-sky-500 transition-colors group">
                   <Users className="mx-auto mb-4 text-slate-400 group-hover:text-sky-500" />
                   <p className="font-sans">For small teams</p>
                </button>
                <button className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-sky-500 transition-colors group">
                   <Users className="mx-auto mb-4 text-slate-400 group-hover:text-sky-500" />
                   <p className="font-sans">For large teams</p>
                </button>
             </div>
             <div className="border-t border-slate-200 pt-16">
                <p className="text-slate-400 font-sans uppercase tracking-widest text-xs mb-8">Trusted by 3500+ practices across the world</p>
                <div className="flex justify-center gap-8 opacity-50 grayscale">
                   <div className="h-12 w-24 bg-slate-300 rounded" />
                   <div className="h-12 w-24 bg-slate-300 rounded" />
                   <div className="h-12 w-24 bg-slate-300 rounded" />
                </div>
             </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}

function SubFeature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h4 className="font-sans text-slate-900 mb-1 text-lg">{title}</h4>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-[#1f2937] p-10 hover:bg-[#111827] transition-colors border border-slate-800">
      <div className="text-sky-400 mb-6">{icon}</div>
      <h3 className="font-sans text-xl mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}