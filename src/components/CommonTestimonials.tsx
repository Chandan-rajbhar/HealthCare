import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "HealVare has completely streamlined how we manage patients. Everything from records to appointments now lives in one place.",
    name: "Dr. Sarah Mitchell",
    role: "Clinic Director, London",
    initials: "SM",
  },
  {
    quote:
      "The platform is incredibly intuitive. Our team adopted it quickly and it improved how we deliver care to patients.",
    name: "Dr. Daniel Wong",
    role: "Dermatologist, Singapore",
    initials: "DW",
  },
  {
    quote:
      "We finally have a system that connects operations, patient records, and payments without complexity.",
    name: "Dr. Elena Petrova",
    role: "Aesthetic Clinic Owner, Berlin",
    initials: "EP",
  },
]

export default function CommonTestimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-14">
          Loved by healthcare teams
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 border shadow-sm flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}