import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Clock,
  Users,
  Rocket,
  Brain,
  Globe,
  ArrowRight,
  HeartHandshake,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  tag?: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Engineer (React)",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    tag: "Hiring fast",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Design",
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
  },
  {
    id: 4,
    title: "Product Intern",
    location: "Remote",
    type: "Internship",
    department: "Product",
    tag: "Students welcome",
  },
];

const perks = [
  {
    icon: <Rocket className="w-5 h-5 text-[#009689]" />,
    title: "Real Impact",
    desc: "Your work directly improves clinics and patient care.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#009689]" />,
    title: "Small Team",
    desc: "Work in a high-ownership, low-bureaucracy environment.",
  },
  {
    icon: <Brain className="w-5 h-5 text-[#009689]" />,
    title: "Fast Growth",
    desc: "Own real features and learn quickly.",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#009689]" />,
    title: "Flexible Work",
    desc: "Remote-friendly, async-first culture.",
  },
];

const values = [
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Patients first",
    desc: "Every decision traces back to better care. We build for the humans behind the charts.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Default to action",
    desc: "We ship, learn, and iterate. We don't wait for perfect — we build toward it.",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Radical transparency",
    desc: "Direct feedback, open roadmaps, honest tradeoffs. No surprises.",
  },
];

const hiringSteps = [
  { step: "01", label: "Apply", desc: "Submit your application. No cover letter required." },
  { step: "02", label: "Intro Call", desc: "30-min chat with the hiring manager." },
  { step: "03", label: "Take-home", desc: "A focused, paid async task — 2–3 hours max." },
  { step: "04", label: "Final Round", desc: "Meet the team. Ask us anything." },
];

const departmentColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-600",
  Design: "bg-purple-50 text-purple-600",
  Product: "bg-amber-50 text-amber-600",
};

const Careers = () => {
  const navigate = useNavigate();

  const scrollToJobs = () => {
    document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-24 relative">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #009689 0, #009689 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #009689 0, #009689 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#009689] bg-[#009689]/8 rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009689] animate-pulse" />
            We're hiring
          </div>

          <h1 className="text-5xl md:text-7xl font-sans leading-[1.08] tracking-tight max-w-3xl">
            Help us simplify{" "}
            <span className="text-[#009689] italic">healthcare software</span>{" "}
            for the people who need it most.
          </h1>

          <p className="mt-7 text-xl text-gray-400 max-w-xl leading-relaxed">
            We're building smarter tools for clinics — reducing admin so
            providers can focus on care.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              onClick={scrollToJobs}
              className="flex items-center gap-2 bg-[#009689] hover:bg-[#007a6e] text-white px-8 h-12 rounded-full text-sm font-sans cursor-pointer transition-all duration-200"
            >
              See open roles <ArrowRight size={15} />
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate("/about")}
              className="text-sm font-sans text-gray-500 hover:text-gray-900 px-7 h-12 cursor-pointer transition-colors duration-200"
            >
              Learn about the team →
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-10 pt-10 border-t border-gray-100">
            {[
              { value: "12", label: "Team members" },
              { value: "3", label: "Open roles" },
              { value: "100%", label: "Remote-friendly" },
              { value: "2021", label: "Founded" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-24 px-6 bg-[#f9fffe]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-sans tracking-widest uppercase text-[#009689]">
              Why join us
            </span>
            <div className="h-px w-12 bg-[#009689]/30" />
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {perks.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-[#009689]/40 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#009689]/8 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-sans tracking-widest uppercase text-[#009689]">
                  Our values
                </span>
                <div className="h-px w-12 bg-[#009689]/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-sans leading-tight tracking-tight text-gray-900">
                We care about the{" "}
                <span className="text-[#009689] italic">work</span> and the{" "}
                <span className="text-[#009689] italic">people</span> doing it.
              </h2>
              <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-sm">
                These aren't posters on a wall. They're how we make decisions day to day.
              </p>
            </div>

            <div className="space-y-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#009689]/30 transition-colors duration-200"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#009689]/8 flex items-center justify-center text-[#009689]">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-[15px]">
                      {v.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HIRE */}
      <section className="py-24 px-6 bg-[#f9fffe] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <span className="text-xs font-sans tracking-widest uppercase text-[#009689]">
              How we hire
            </span>
            <div className="h-px w-12 bg-[#009689]/30" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {hiringSteps.map((s, i) => (
              <div key={i} className="relative">
                {i < hiringSteps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-gray-200 z-0" style={{ width: "calc(100% - 2.5rem)", left: "2.5rem" }} />
                )}
                <div className="relative z-10">
                  <span className="text-3xl font-bold text-[#009689]/20 font-sans">
                    {s.step}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-2 mb-1">
                    {s.label}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section id="jobs" className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-3 mb-10">
            <h2 className="text-2xl font-sans text-gray-900">
              {jobs.length} open roles
            </h2>
            <span className="text-sm text-gray-400">— updated April 2025</span>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white divide-y divide-gray-50 overflow-hidden">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 py-5 hover:bg-[#f9fffe] transition-colors duration-150"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-medium text-gray-900">{job.title}</h3>
                    {job.tag && (
                      <span className="text-[10px] font-sans tracking-wide uppercase bg-[#009689]/10 text-[#009689] px-2.5 py-0.5 rounded-full">
                        {job.tag}
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-sans tracking-wide uppercase px-2.5 py-0.5 rounded-full ${
                        departmentColors[job.department] ?? "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {job.department}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {job.type}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => navigate(`/careers/${job.id}`)}
                  className="flex items-center gap-1.5 border-gray-200 text-gray-600 hover:border-[#009689] hover:text-[#009689] transition-all duration-200 rounded-full px-5 text-sm shrink-0"
                >
                  Apply <ArrowRight size={13} />
                </Button>
              </div>
            ))}
          </div>

          {/* No role match CTA */}
          <div className="mt-6 flex items-center justify-between px-6 py-5 rounded-2xl border border-dashed border-gray-200 bg-white">
            <div>
              <p className="font-medium text-gray-700 text-sm">
                Don't see a fit?
              </p>
              <p className="text-sm text-gray-400 mt-0.5">
                Send a note — we keep great candidates on file.
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "mailto:careers@yourcompany.com")}
              className="text-[#009689] text-sm hover:text-[#007a6e] px-4"
            >
              Get in touch →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;