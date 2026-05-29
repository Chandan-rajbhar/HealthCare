import { Button } from "@/components/ui/button";

export function MarketingDemoCTA() {
  return (
    <div className="w-full">

      {/* Bottom CTA Section: Sleek & Professional */}
      <section className="bg-[#393942] py-20 px-6 text-center relative overflow-hidden">
       

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-white font-light text-3xl md:text-4xl mb-8 leading-tight">
            Ready to see how our platform can<br className="hidden md:block" /> help your practice grow?
          </h2>
          <Button 
            className="bg-[#00b6dd] text-white hover:bg-[#00a5c9] font-semibold text-sm px-10 py-6 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Book a demo
          </Button>
        </div>
      </section>
    </div>
  );
}