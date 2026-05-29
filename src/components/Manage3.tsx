export const Manage3 = () => {
  return (
    <>
      {/* 4. Feature Showcase 2 (Calendar & Payments) */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
              Manage consultations, treatments, and follow-ups
            </h2>
            <p className="text-lg text-slate-600">
              Allow patients to book consultations, diagnostics, treatments, and
              follow-ups seamlessly{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Calendar Mockup */}
            <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-sans text-slate-800">Weekly Schedule</h3>
                <div className="px-3 py-1 bg-[#009689]/10 text-[#009689] text-xs font-sans rounded-full">
                  Fully Booked
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 h-64">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div key={day} className="flex flex-col gap-2">
                    <div className="h-full bg-white border border-slate-200 rounded-md p-2 flex flex-col gap-2">
                      <div
                        className={`h-12 rounded-sm ${day % 2 === 0 ? "bg-[#009689]/20 border border-[#009689]/30" : "bg-slate-100"}`}
                      ></div>
                      <div
                        className={`h-20 rounded-sm ${day % 3 === 0 ? "bg-[#009689]/20 border border-[#009689]/30" : "bg-slate-100"}`}
                      ></div>
                      <div className="h-10 rounded-sm bg-slate-100"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Terminal Mockup */}
            <div className="md:col-span-5 bg-slate-900 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#009689] rounded-full blur-[80px] opacity-40"></div>
              <h3 className="text-xl font-sans mb-8">Checkout Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <span className="text-slate-400">Initial Consultation</span>
                  <span className="font-semibold">$150.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <span className="text-slate-400">Treatment Plan</span>
                  <span className="font-semibold">$35.00</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-sans">Total</span>
                  <span className="text-lg font-sans text-[#00d2c0]">
                    $185.00
                  </span>
                </div>
              </div>
              <button className="w-full bg-[#009689] hover:bg-[#007a6e] text-white font-sans py-3 rounded-lg transition-colors">
                Charge Card on File
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
