import {
  CheckCircle2,
  Calendar,
  BarChart3,
  Star,
  Zap,
  Sparkles,
  Smartphone,
  ShieldCheck,
  CreditCard,
  Clock,
  Heart,
} from "lucide-react";

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-12 md:py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto">{children}</div>
);

export default function SmallPracticePage() {
  return (
    <div className="bg-white text-slate-950 antialiased selection:bg-rose-100">
      
      {/* HERO SECTION */}
      <div className="bg-[#fff9f9] border-b border-rose-100 pt-24 md:pt-32 pb-16 md:pb-24 text-center px-6">

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-sans mb-6 md:mb-8 tracking-tight leading-[1.2] md:leading-[1.1] text-slate-900">
          Spend less time on admin,
          <br className="hidden md:block" />
          <span className="text-primary"> more time with patients</span>
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl mb-10 md:mb-12 leading-relaxed">
          The all-in-one toolkit designed for small teams who want to look like a premium clinic. 
          Automate your bookings, simplify your records, and grow your reputation without the burnout.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary hover:bg-primary-600 text-white px-10 py-4 rounded-xl font-sans transition-all shadow-md">
            Start free trial
          </button>
          <button className="bg-white border border-slate-200 text-slate-600 px-10 py-4 rounded-xl font-sans hover:bg-slate-50 transition-all">
            See pricing
          </button>
        </div>

        {/* SMALL TEAM BENEFITS */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto text-left">
          <h2 className="text-xl md:text-2xl font-sans text-center mb-10 text-slate-800 tracking-tight">Everything a small team needs to thrive:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Automate repetitive tasks to save 10+ hours a week",
              "Impress new clients with a high-end booking portal",
              "Keep all your patient records secure and paperless",
              "Get paid faster with integrated, simple payments",
              "Easily track your monthly growth and revenue"
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="bg-rose-100 text-primary rounded-full p-1 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-slate-600 font-sans text-base md:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CORE CAPABILITIES - ZIG ZAG */}
      <Section>
        <Container>
          {/* Feature 1: The Booking Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-24 md:mb-40">
            <div className="order-1">
              <h3 className="text-3xl md:text-4xl font-sans mb-6 text-slate-900 tracking-tight">Fill your calendar while you sleep</h3>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                Give your clients the convenience of 24/7 online booking. Our system handles the scheduling so you don't have to play phone tag between treatments.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock className="text-rose-500 shrink-0" />
                  <p className="text-slate-600">Smart reminders to cut no-shows by up to 70%.</p>
                </div>
                <div className="flex gap-3">
                  <CreditCard className="text-rose-500 shrink-0" />
                  <p className="text-slate-600">Collect deposits upfront to protect your time.</p>
                </div>
              </div>
            </div>
            <div className="order-2 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-4 shadow-sm">
               <div className="bg-white border border-slate-100 rounded-[2rem] aspect-square flex items-center justify-center">
                  <Calendar size={100} strokeWidth={1} className="text-primary" />
               </div>
            </div>
          </div>

          {/* Feature 2: Patient Love */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-20">
            <div className="order-2 md:order-1 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-4">
               <div className="bg-white border border-slate-100 rounded-[2rem] aspect-square flex items-center justify-center">
                  <Heart size={100} strokeWidth={1} className="text-primary" />
               </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-sans mb-6 text-slate-900 tracking-tight">Build relationships, not just records</h3>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                Keep every detail at your fingertips. From treatment history and consent forms to before-and-after photos, you’ll always be prepared for every patient.
              </p>
              <p className="text-slate-500 text-lg">Our streamlined EMR is built for speed, so you can finish your notes in seconds, not hours.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ESSENTIALS GRID - HIGH CONTRAST DARK */}
      <Section className="bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10 my-10">
        <Container>
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-sans mb-4 tracking-tight">Small Team Essentials</h2>
             <p className="text-slate-400">The tools you need to stay organized as you grow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={32}/>} 
              title="GDPR & HIPAA Ready" 
              desc="Full compliance without the headache. Your data is encrypted and safe." 
            />
            <FeatureCard 
              icon={<Zap size={32}/>} 
              title="Automated Follow-ups" 
              desc="Automatically check in on clients after treatments to ensure they're happy." 
            />
            <FeatureCard 
              icon={<Star size={32}/>} 
              title="Review Booster" 
              desc="Ask for reviews at the perfect moment and watch your Google rating climb." 
            />
            <FeatureCard 
              icon={<Smartphone size={32}/>} 
              title="Go Fully Mobile" 
              desc="Manage your clinic from your pocket with our dedicated iOS & Android app." 
            />
            <FeatureCard 
              icon={<BarChart3 size={32}/>} 
              title="Growth Insights" 
              desc="Simple reports that tell you exactly where your money is coming from." 
            />
            <FeatureCard 
              icon={<Sparkles size={32}/>} 
              title="Loyalty Programs" 
              desc="Reward your regulars and keep them coming back with points and offers." 
            />
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section className="text-center">
        <Container>
          <h2 className="text-4xl md:text-5xl font-sans mb-8 tracking-tight">Ready to simplify your <span className="text-primary">small practice?</span></h2>
          <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join over 1,500 small clinics that transitioned from messy spreadsheets to a professional, automated system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-sans hover:bg-slate-800 transition-all text-lg shadow-lg">
              Get Started for Free
            </button>
          </div>
          <p className="mt-6 text-slate-400 text-sm italic">No credit card required • 14-day free trial</p>
        </Container>
      </Section>

    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-8 rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all group">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <h3 className="font-sans text-xl mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}