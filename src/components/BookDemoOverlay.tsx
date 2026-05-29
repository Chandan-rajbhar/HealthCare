// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
//  "@/pages/FooterPage/footerpage"

// const POINTS = [
//   "Save over 2 hours every day by automating routine workflows",
//   "Cut appointment cancellations by up to 40%",
//   "Fill your calendar faster with 24/7 online booking",
//   "Replace paper records and manual tasks with a digital system",
//   "Maintain compliance while keeping patient safety at the forefront",
//   "Grow your practice revenue with memberships and service packages",
//   "Empower patients with self-service portals and easy scheduling",
// ];

// export default function BookDemoOverlay() {
//   return (
//     <div>
//       <section className="min-h-screen bg-white px-4 py-7 md:px-8 md:py-10 lg:py-14">
//         <div className="mx-auto max-w-6xl">
//           <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-12">

//             {/* Left Content */}
//             <section className="pt-4 text-gray-900 lg:pt-10">
//               <h1 className="mb-8 max-w-[640px] text-4xl font-semibold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl">
//                 Spend less time on paperwork. 
//                 <br />
//                 Focus more on delivering exceptional care.
//               </h1>

//               <ul className="space-y-2.5 text-gray-700">
//                 {POINTS.map((point) => (
//                   <li
//                     key={point}
//                     className="flex items-start gap-2.5 text-base leading-[1.45]"
//                   >
//                     <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-full bg-[#00d45a]" />
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>

//               <p className="mt-10 max-w-[580px] text-[18px] leading-[1.5] text-gray-500">
//                 Over 12,000 practitioners trust our platform to grow and streamline their practices.
//                 <br />
//                 Ready to see how it can transform yours?
//               </p>
//             </section>

//             {/* Demo Form Card */}
//             <Card className="rounded-2xl bg-[#f2f4f6] py-0 ring-0 lg:mt-10 lg:justify-self-end">
//               <CardContent className="space-y-3 p-5 sm:p-6">
//                 <h2 className="text-center text-[22px] font-semibold leading-[1.25] text-[#151515]">
//                   Discover a{" "}
//                   <span className="text-primary">better way to manage your practice</span>{" "}
//                   today
//                 </h2>

//                 <div className="space-y-2.5 pt-1">
//                   <Input
//                     type="email"
//                     placeholder="Work email address*"
//                     className="h-9 rounded-lg border-[#b7ccd5] bg-[#edf2f5] text-sm"
//                   />

//                   <Input
//                     type="text"
//                     placeholder="Clinic or practice name*"
//                     className="h-9 rounded-lg border-[#b7ccd5] bg-[#edf2f5] text-sm"
//                   />

//                   <div className="pt-1">
//                     <Button className="h-11 w-full rounded-full px-8 text-[15px] font-semibold">
//                       Schedule a demo
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>

//       <FooterPage showCtaSection={false} />
//     </div>
//   )
// }

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
 "@/pages/FooterPage/footerpage"

const POINTS = [
  "Recover 2+ hours each day by automating routine workflows",
  "Reduce appointment cancellations by up to 40%",
  "Fill your calendar faster with 24/7 online booking",
  "Replace paper records and manual tasks with a digital system",
  "Maintain compliance while keeping patient safety at the forefront",
  "Grow practice revenue with memberships and service packages",
  "Empower patients with self-service portals and scheduling",
];

export default function BookDemoOverlay() {
  return (
    <div className="bg-white">
      <section className="min-h-[80vh] px-6 py-12 md:px-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_440px] lg:items-center">

            {/* Left Content: Value Proposition */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Spend less time on paperwork.
                  <span className="block text-slate-400">Focus on delivering care.</span>
                </h1>
                <p className="max-w-[540px] text-lg leading-relaxed text-slate-500 font-normal">
                  Over 12,000 practitioners trust our platform to streamline their clinical operations and reclaim their time.
                </p>
              </div>

              <ul className="grid gap-4">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-4 text-[15px] leading-snug text-slate-600 font-normal">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content: Demo Form Card */}
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -inset-4 rounded-[2rem] bg-slate-50/50 -z-10" />
              
              <Card className="border border-slate-200 bg-white shadow-xl shadow-slate-200/40 rounded-2xl overflow-hidden">
                <div className="h-1.5 w-full bg-cyan-600" />
                <CardContent className="p-8 sm:p-10">
                  <div className="mb-8 space-y-2">
                    <h2 className="text-2xl font-medium tracking-tight text-slate-900">
                      See it in action
                    </h2>
                    <p className="text-sm text-slate-500 font-normal">
                      Join 12,000+ clinics management their practice better.
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium uppercase tracking-wider text-slate-400 ml-1">Work Email</label>
                      <Input
                        type="email"
                        placeholder="email@practice.com"
                        className="h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:ring-cyan-600/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium uppercase tracking-wider text-slate-400 ml-1">Clinic Name</label>
                      <Input
                        type="text"
                        placeholder="Your Practice Name"
                        className="h-12 rounded-xl border-slate-200 bg-slate-50/50 px-4 focus-visible:ring-cyan-600/20"
                      />
                    </div>

                    <div className="pt-4">
                      <Button className="cursor-pointer h-12 w-full rounded-xl bg-cyan-600 text-[15px] font-medium transition-all">
                        Schedule My Demo
                      </Button>
                    </div>
                    
                    <p className="text-center text-[11px] text-slate-400 font-normal">
                      By clicking, you agree to our terms and privacy policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>


    </div>
  )
}
