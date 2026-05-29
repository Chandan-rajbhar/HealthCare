import { Button } from "@/components/ui/button";

export default function ReportsSection() {
  return (
    <section className="bg-white px-8 pt-10 pb-16">
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-start gap-3 mb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
            alt="Reports Icon"
            className="w-8 h-8 mt-1"
            style={{ minWidth: 32 }}
          />
          <div>
            <h2 className="text-[32px] font-semibold text-[#222] leading-tight mb-1">Simple, customizable reports</h2>
            <p className="text-[15px] text-[#6f7b89] max-w-[600px]">
  Make sense of your practice data with our powerful reporting toolkit, designed to help you unlock key insights about appointments, revenue, clinical outcomes, and overall practice performance.
</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="mt-6 mb-8 h-7 rounded-full border-[#bcc6d0] px-4 text-[10px] text-[#64748b] hover:bg-white"
        >
          BACK TO TOP
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
        <div className="mb-2 h-[2px] w-[24px] bg-[#09757a]" />
  <h3 className="text-[17px] font-semibold text-[#101828] mb-1">Fast access to all your key practice data</h3>
  <p className="text-[13px] text-[#6f7b89] mb-1">With our platform, you get 50+ pre-built reports covering appointments, patients, financials, and overall practice performance metrics.</p>
  <p className="text-[13px] text-[#6f7b89]">Customize these standard reports or create your own from scratch.</p>
</div>
          <div>
          <div className="mb-2 h-[2px] w-[24px] bg-[#09757a]" />
  <h3 className="text-[17px] font-semibold text-[#101828] mb-1">Practice intelligence at your fingertips</h3>
  <p className="text-[13px] text-[#6f7b89] mb-1">Tired of manually tracking data?</p>
  <p className="text-[13px] text-[#6f7b89]">With our platform, all your practice data is in one place and updated in real time—giving you a single source of truth about your operations.</p>
</div>
          <div>
            <div className="mb-2 h-[2px] w-[24px] bg-[#09757a]" />
  <h3 className="text-[17px] font-semibold text-[#101828] mb-1">Visualize your data with clarity</h3>
  <p className="text-[13px] text-[#6f7b89] mb-1">With our platform, data isn't just presented in spreadsheets.</p>
  <p className="text-[13px] text-[#6f7b89]">You can also view it visually using pie charts and graphs—making complex data more accessible and easier to interpret at a glance.</p>
</div>
          <div>
          <div className="mb-2 h-[2px] w-[24px] bg-[#09757a]" />
  <h3 className="text-[17px] font-semibold text-[#101828] mb-1">Simplify multi-location reporting</h3>
  <p className="text-[13px] text-[#6f7b89] mb-1">Managing multiple practice locations shouldn't mean multiple headaches.</p>
  <p className="text-[13px] text-[#6f7b89]">With our platform, you can review both organization-wide and individual location performance—all in one place.</p>
</div>
        </div>
      </div>
    </section>
  );
}

