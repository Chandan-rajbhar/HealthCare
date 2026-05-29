import {
  CheckCircle2,
  Users,
  Mail,
  Star,
  Gift,
  Share2,
  BarChart3,
  Bell,
  ArrowRight,
  RefreshCw,
  TrendingUp,
  Target,
  Zap,
  Award,
} from "lucide-react";

const MARKETER_BENEFITS = [
  {
    icon: CheckCircle2,
    text: "Attract new leads and convert them to customers",
  },
  { icon: CheckCircle2, text: "Improve retention and repeat customers" },
  { icon: CheckCircle2, text: "Promote loyalty and referral programs" },
  {
    icon: CheckCircle2,
    text: "Upsell treatments and products to increase revenue",
  },
];

const KEY_FEATURES = [
  {
    icon: Target,
    title: "Lead management pipeline",
    desc: "Attract and engage prospects across all channels, from one place.",
  },
  {
    icon: Mail,
    title: "Newsletter management",
    desc: "Send beautiful newsletters, promotions, and updates to your patient base.",
  },
  {
    icon: Star,
    title: "Smart surveys and reviews",
    desc: "Automatically ask clients to leave reviews and gather feedback at the right time.",
  },
  {
    icon: Bell,
    title: "Automatic client recalls",
    desc: "Automate your client recalls and reminders to encourage additional bookings.",
  },
  {
    icon: Gift,
    title: "Gift vouchers and Loyalty points",
    desc: "Create and manage gift vouchers and allow clients to purchase gift vouchers for friends.",
  },
  {
    icon: Share2,
    title: "Referral attribution system",
    desc: "Understand where your customers came from and maximise your most successful referral channels.",
  },
];

const PERSONALIZATION_FEATURES = [
  {
    title: "Regular, front of mind newsletters",
    desc: "Stay connected with your client base through beautiful, on-brand newsletters that keep your practice top of mind and drive repeat bookings automatically.",
  },
  {
    title: "Effortless email campaigns",
    desc: "Create stunning email campaigns in minutes with our drag-and-drop builder. Target the right patients at the right time with smart segmentation.",
  },
  {
    title: "Fully customised onboarding journeys",
    desc: "Deliver a personalised welcome experience for every new client with automated onboarding sequences tailored to each practice database.",
  },
];

const TESTIMONIALS = [
  {
    name: "Roxanne Merchant",
    role: "Practice Owner",
    text: "Since deploying Pabau, our operations have become a lot more efficient. We have much better productivity and we have a lot less wasted manpower hours. We've got a lot more visibility over our business, so we can see exactly what's happening at all times.",
    rating: 5,
    platform: "G2",
    featured: true,
  },
  {
    name: "Camron P.",
    role: "Practice Manager",
    text: "The reporting functions are a game changer. Pabau is intuitive, very friendly, and packed with features. We have assessed the top 10 practice administration software, and PABAU remains at the top.",
    rating: 5,
    platform: "Capterra",
    featured: false,
  },
  {
    name: "Natasha V.",
    role: "Clinic Director",
    text: "Particularly the flows feature has been key to my success, and order. I'm able to find 10 to 5-star reviews and achieve aesthetic medical.",
    rating: 5,
    platform: "Google",
    featured: false,
  },
];

const LEAD_FEATURES = [
  {
    icon: Target,
    title: "Capture leads straight from your website",
    desc: "Add Pabau forms to your site and automatically capture leads directly into your pipeline. Never miss an enquiry again.",
  },
  {
    icon: Zap,
    title: "Never lose a lead along the way",
    desc: "Automated follow-up sequences ensure every lead gets the attention they need, at every stage of the funnel, at all times.",
  },
  {
    icon: BarChart3,
    title: "Identify best performing campaigns and channels",
    desc: "See at a glance which campaigns are generating the most revenue and double down on the strategies that actually work.",
  },
];

const REVENUE_FEATURES = [
  {
    icon: Award,
    title: "Rewarding clients and delivering added value",
    desc: "Automatically reward your most loyal patients with points, perks and exclusive offers that keep them coming back.",
  },
  {
    icon: RefreshCw,
    title: "Automated recalls and re-bookings",
    desc: "Send perfectly timed recall messages via SMS or email so clients never fall off the radar, with zero manual effort.",
  },
  {
    icon: TrendingUp,
    title: "Incentives that drive sales",
    desc: "When you run promos, make it worth their while. Time-limited offers, loyalty rewards and referral bonuses make clients feel valued and incentivise action.",
  },
];

const PERSONA_LINKS = [
  { icon: Users, label: "Owners" },
  { icon: BarChart3, label: "Managers" },
  { icon: Zap, label: "Treatment providers" },
  { icon: Award, label: "Front of house" },
];

export default function MarketingPage() {
  return (
    <div className="bg-white text-slate-800 font-sans antialiased">
      {/* HERO */}
      <section className="bg-[#f0f8f9] pt-10 md:pt-16 pb-14 md:pb-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-sans text-slate-900 leading-tight max-w-3xl mx-auto mb-5">
          Multiple marketing options in one simple platform
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed mb-2">
          Fed up of paying for lots of marketing software, and struggling to get
          them all working together? With Pabau, you have all the core
          capabilities you need to display top marketing strategies for a local
          practice, or work on a lucrative franchise.
        </p>
        <p className="text-slate-600 max-w-xl mx-auto text-sm mb-8">
          All fits within one system, that has every bit of your data instantly
          accessible and working together seamlessly.
        </p>
        <button className="bg-[#09757a] hover:bg-[#075f63] text-white font-sans px-8 py-3 rounded-lg transition-colors text-sm">
          Book a demo
        </button>

        {/* Benefits grid */}
        <div className="mt-14 max-w-2xl mx-auto">
          <p className="font-sans text-slate-800 text-base mb-6">
            Marketers use Pabau everyday to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {MARKETER_BENEFITS.map((b) => (
              <div key={b.text} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-[#09757a] mt-0.5 shrink-0"
                />
                <span className="text-sm text-slate-700 leading-snug">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALISATION SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-3">
          <h2 className="text-2xl md:text-3xl font-sans text-slate-900 mb-3">
            Personalisation, without personal oversight
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Making sure every practice sends out effective marketing that's
            personalised to local audiences — without needing to check every
            single email — is almost impossible. Enter Pabau, with its per-set,
            customisable templates and automatic personalisation specific to
            each practice database.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-10">
            {PERSONALIZATION_FEATURES.map((f, i) => (
              <div key={i} className="border-l-2 border-[#09757a] pl-5">
                <h3 className="font-sans text-slate-800 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Mock UI */}
          <div className="hidden md:block bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm">
            <div className="bg-white rounded-xl border border-slate-100 p-4 mb-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#09757a]" />
                <div className="h-2 w-24 bg-slate-200 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded" />
                <div className="h-2 w-4/5 bg-slate-100 rounded" />
                <div className="h-2 w-3/5 bg-slate-100 rounded" />
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-7 w-20 bg-[#09757a] rounded" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Email", "SMS", "Recall"].map((t) => (
                <div
                  key={t}
                  className="bg-white rounded-lg border border-slate-100 p-3 text-center"
                >
                  <div className="w-6 h-6 bg-[#e0f2f3] rounded mx-auto mb-1.5" />
                  <p className="text-xs text-slate-500">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#0d9488] py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-sans text-white text-center mb-12">
            Key features for marketers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-2xl p-6"
              >
                <f.icon size={28} className="text-white mb-4" />
                <h3 className="font-sans text-white mb-2">{f.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MANAGEMENT */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans text-slate-900 mb-3">
          Lead management that needs little management effort
        </h2>
        <p className="text-slate-500 text-sm max-w-2xl mb-12 leading-relaxed">
          Attracting new leads in a competitive market is tough enough. Keeping
          track of how they're interacting with your marketing, monitoring
          conversions and following up is even tougher, especially if you have
          multiple tools and systems. With Pabau, all your leads — and
          everything you'll need to convert them — is all in one place.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mock dashboard */}
          <div className="hidden md:block bg-slate-50 rounded-2xl border border-slate-100 p-5">
            <div className="bg-white rounded-xl border border-slate-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="h-3 w-20 bg-slate-200 rounded" />
                <div className="flex gap-1">
                  {["bg-red-200", "bg-amber-200", "bg-[#09757a]/30"].map(
                    (c, i) => (
                      <div key={i} className={`h-2 w-12 ${c} rounded`} />
                    ),
                  )}
                </div>
              </div>
              <div className="space-y-2">
                {[80, 60, 90, 45, 70].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-slate-100 rounded" />
                    <div
                      className="h-2 bg-[#09757a]/40 rounded"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {LEAD_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 bg-[#e0f2f3] rounded-xl flex items-center justify-center shrink-0">
                  <f.icon size={18} className="text-[#09757a]" />
                </div>
                <div>
                  <h3 className="font-sans text-slate-800 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-sans text-slate-900 text-center mb-8 md:mb-12">
            Customer Reviews & Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className={`bg-white rounded-2xl p-6 border ${t.featured ? "border-[#09757a] shadow-md" : "border-slate-100"}`}
              >
                {t.featured && (
                  <div className="w-10 h-10 bg-[#09757a] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xs font-sans">RM</span>
                  </div>
                )}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                  <div>
                    <p className="font-sans text-sm text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                  <span className="text-xs font-sans text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {t.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE BOOSTING */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-sans text-slate-900 mb-3">
          Revenue boosting strategies that don't waste marketing efforts
        </h2>
        <p className="text-slate-500 text-sm max-w-2xl mb-12 leading-relaxed">
          It's no secret the hard work. And just as the time and effort you are
          investing in acquiring and converting leads, you are also spending
          money on the leads. Make sure you keep those clients for as long as
          possible, building loyalty and increasing their lifetime value. With
          Pabau, all the tools you need are at your fingertips.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mock cards */}
          <div className="relative h-56 hidden md:block">
            <div className="absolute left-0 top-4 w-52 bg-[#3b1f6e] text-white rounded-2xl p-4 shadow-lg">
              <p className="text-xs opacity-60 mb-1">GIFT CARD</p>
              <p className="text-2xl font-sans">£500</p>
              <p className="text-xs opacity-50 mt-2">Valid until Dec 2025</p>
            </div>
            <div className="absolute left-16 top-0 w-52 bg-[#09757a] text-white rounded-2xl p-4 shadow-xl">
              <p className="text-xs opacity-60 mb-1">LOYALTY POINTS</p>
              <p className="text-2xl font-sans">1,000</p>
              <p className="text-xs opacity-50 mt-2">
                3-month free subscription
              </p>
            </div>
            <div className="absolute left-8 bottom-0 w-52 bg-slate-800 text-white rounded-2xl p-4 shadow-md">
              <p className="text-xs opacity-60 mb-1">SMS RECALL</p>
              <p className="text-sm font-sans">600 credits</p>
              <div className="mt-2 h-1.5 bg-white/20 rounded-full">
                <div className="h-1.5 bg-white/60 rounded-full w-3/5" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {REVENUE_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 bg-[#e0f2f3] rounded-xl flex items-center justify-center shrink-0">
                  <f.icon size={18} className="text-[#09757a]" />
                </div>
                <div>
                  <h3 className="font-sans text-slate-800 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-sans text-slate-900 mb-8">
            Explore more ways to use Pabau
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PERSONA_LINKS.map((p) => (
              <div
                key={p.label}
                className="bg-white border border-slate-200 hover:border-[#09757a] rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-all group"
              >
                <div className="w-12 h-12 bg-[#e0f2f3] group-hover:bg-[#09757a] rounded-xl flex items-center justify-center transition-colors">
                  <p.icon
                    size={20}
                    className="text-[#09757a] group-hover:text-white transition-colors"
                  />
                </div>
                <span className="text-sm font-sans text-slate-700">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#0d9488] py-10 md:py-16 px-6 text-center">
        <h2 className="text-xl md:text-3xl font-sans text-white mb-6">
          Over 6,000 marketing managers use Pabau to increase practice revenue
        </h2>
        <button className="bg-white text-[#09757a] font-sans px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors text-sm inline-flex items-center gap-2">
          Book a demo <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
