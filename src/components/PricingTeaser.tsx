export default function PricingTeaser() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans text-white mb-4">
              Turn treatments into recurring revenue
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Offer packages, memberships, and follow-up plans to increase
              client retention and lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "68%", label: "of clients return with packages" },
              { value: "2.4x", label: "higher lifetime value" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6"
              >
                <p className="text-3xl font-sans text-[#00d2c0] mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-medium leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Solo",
              subtitle: "1 user • Unlimited patients",
              features: [
                "Operate full-time as a solo practitioner",
                "Manage high guest volume",
                "Run fully digital spa workflows",
                "Use a purpose-built spa management system",
              ],
            },
            {
              badge: "Most Popular",
              title: "Team",
              subtitle: "2–3 users • Unlimited patients",
              featured: true,
              features: [
                "Share calendars and treatment rooms",
                "Coordinate team access and permissions",
                "Centralize billing and payment workflows",
                "Utilize client retention tools",
              ],
            },
            {
              title: "Group",
              subtitle: "6–15 users • Unlimited patients",
              features: [
                "Operate with larger spa teams",
                "Manage inventory and supplies centrally",
                "Use cross-team reporting and analytics",
                "Connect with external systems and tools",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 border transition-all duration-300 ${
                plan.featured
                  ? "bg-white text-slate-900 border-[#009689] shadow-xl scale-[1.02]"
                  : "bg-slate-800 border-slate-700 hover:border-slate-500 text-white"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#009689] px-3 py-1 rounded-full shadow">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h4 className="text-xl font-sans mb-2">{plan.title}</h4>

              {/* Subtitle */}
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-slate-600" : "text-slate-400"
                }`}
              >
                {plan.subtitle}
              </p>

              {/* CTA */}
              <button
                className={`w-full mb-6 py-2.5 rounded-lg font-medium transition ${
                  plan.featured
                    ? "bg-[#009689] text-white hover:bg-[#007a6e]"
                    : "bg-transparent border border-slate-600 hover:bg-slate-700"
                }`}
              >
                Book a demo
              </button>

              {/* Features */}
              <ul className="space-y-3 text-sm">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-2 ${
                      plan.featured ? "text-slate-700" : "text-slate-400"
                    }`}
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#009689] flex-shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}