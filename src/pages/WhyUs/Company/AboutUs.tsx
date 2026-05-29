import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Zap,
  Users,
  Target,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Move fast, ship real things",
    desc: "We prioritize shipping useful features over endless planning. Progress beats perfection.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Stay close to users",
    desc: "We build with real clinics, not assumptions. Feedback drives everything we do.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Clarity over complexity",
    desc: "Simple, intuitive software always wins. We remove friction wherever possible.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Trust is non-negotiable",
    desc: "Healthcare data is sensitive. Security and reliability are built into everything.",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#009689]/20">
      {/* HERO SECTION - More whitespace and a soft gradient background */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#009689]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-sans tracking-tight leading-[1.1] max-w-4xl">
            Building software that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009689] to-[#007d72]">
              gives healthcare back its time
            </span>
          </h1>
          <p className="mt-8 text-slate-500 max-w-2xl leading-relaxed">
            Clinics spend too much time on paperwork. We're here to change that
            with tools that are fast, modern, and actually enjoyable to use.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Hours saved/month", value: "40k+" },
              { label: "Clinics onboarded", value: "1,200+" },
              { label: "Uptime SLA", value: "99.9%" },
              { label: "Patient interactions", value: "2M+" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-sans text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-sans tracking-tight mb-4">
              Focusing on the front lines
            </h2>
            <p className="text-slate-500 text-lg">
              We don't try to be everything for everyone. We build for the
              specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Therapists",
                tag: "Mobility Focus",
                desc: "Tools that track progress over time without the charting headache.",
              },
              {
                title: "Mental Health",
                tag: "Privacy First",
                desc: "Secure, compassionate interfaces designed for deep patient-provider trust.",
              },
              {
                title: "Private Clinics",
                tag: "Growth Ready",
                desc: "Automated scheduling and billing that scales as your practice grows.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-1 bg-slate-50 rounded-3xl transition-all hover:bg-gradient-to-br hover:from-[#009689] hover:to-blue-400"
              >
                <div className="bg-white p-8 rounded-[1.4rem] h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-sans mb-4 group-hover:bg-[#009689]/10 group-hover:text-[#009689] transition-colors">
                    {card.tag}
                  </span>
                  <h3 className="text-xl font-sans mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            {/* Big Feature Image/Card */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-200 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#009689]/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 text-white z-10">
                <h4 className="text-2xl font-sans">
                  Remote-first, <br />
                  Async-obsessed.
                </h4>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Quote Card */}
            <div className="md:col-span-2 bg-[#009689] rounded-3xl p-8 text-white flex flex-col justify-between">
              <p className="text-xl font-medium italic">
                "We value deep work over back-to-back meetings. Our best ideas
                happen when we have space to think."
              </p>
              <p className="text-sm opacity-80">— Engineering Lead</p>
            </div>

            {/* Benefits Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-[#009689] font-sans text-2xl mb-1">
                4 Day
              </div>
              <div className="text-slate-500 text-xs uppercase tracking-widest font-sans">
                Work Week (Monthly)
              </div>
            </div>

            {/* Learning Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-blue-500 font-sans text-2xl mb-1">$2k</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest font-sans">
                Annual L&D Stipend
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION - Card-in-Card layout for depth */}
      <section className="py-24 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="text-4xl font-sans tracking-tight mb-6">
              Reduce admin. <br />
              <span className="text-slate-400">Improve care.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Healthcare providers shouldn’t be buried in paperwork. Our mission
              is to simplify operations so clinics can focus on the patient
              experience, not the software.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#009689]/20 to-transparent blur-2xl opacity-50" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#009689] flex items-center justify-center mb-6 shadow-lg shadow-[#009689]/20">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                "We believe better tools lead to better care. Every feature we
                build is designed to remove friction and save hours."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - Modern Grid with Hover Scales */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <p className="text-[#009689] font-sans text-sm tracking-widest uppercase mb-3">
              Our values
            </p>
            <h2 className="text-4xl font-sans tracking-tight text-slate-900">
              The principles that guide our code.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#009689]/20 hover:shadow-xl hover:shadow-[#009689]/5 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 text-[#009689] flex items-center justify-center group-hover:bg-[#009689] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-sans mb-2 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY - Minimalist Focus */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#009689]/10 blur-[120px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#009689] font-sans text-sm tracking-widest uppercase mb-6">
            Our story
          </p>
          <h2 className="text-4xl md:text-5xl font-sans mb-8 tracking-tight">
            Built from real problems,{" "}
            <span className="text-slate-400">not ideas.</span>
          </h2>
          <div className="space-y-6 text-xl text-slate-300 leading-relaxed">
            <p>
              We saw how clinics struggled with outdated systems and fragmented
              tools. Instead of patching the problem, we started fresh.
            </p>
            <p>
              Today, we build for practitioners who value speed and clarity
              above all else.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - The "Glass" Card */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] border border-slate-100 p-12 md:p-20 text-center bg-gradient-to-b from-[#f6fffd] to-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#009689]/5 rounded-full blur-3xl" />

          <h2 className="text-4xl font-sans mb-4 tracking-tight">
            Ready to help us build?
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
            We're a small, obsessed team. If you care about meaningful work and
            high-quality craft, let's talk.
          </p>

          <Button
            onClick={() => navigate("/careers")}
            className="group h-14 px-8 rounded-2xl bg-[#009689] hover:bg-[#007d72] text-white text-lg font-sans transition-all hover:shadow-lg hover:shadow-[#009689]/20 active:scale-95"
          >
            View open roles
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
