import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const FooterPage = () => {
  // const productLinks = [
  //   "Online Booking",
  //   "Calendar",
  //   "Client Portal",
  //   "Before & After Photos",
  //   "Payment Processing",
  //   "Reports",
  //   "Stock Management",
  //   "Mobile App",
  // ];

  // const specialtiesLinks = [
  //   "General Practice",
  //   "Medical Aesthetics",
  //   "Cosmetic Surgery",
  //   "Dermatology",
  //   "Hair Transplant",
  //   "IV Therapy",
  //   "Weight Loss",
  //   "Mental Health",
  //   "Wellness",
  //   "Gynecology",
  //   "View all specialties",
  // ];

  // const discoverLinks = [
  //   "Blogs",
  //   "eBooks, Templates & Resources",
  //   "Guides",
  //   "Help Centre",
  //   "Client Services",
  //   "API Documentation",
  //   "Integrations",
  //   "Knowledgebase",
  // ];

  // const companyLinks = [
  //   "About us",
  //   "Careers",
  //   "Build with Us",
  //   "Refer a friend",
  //   "Referral Partner Program",
  //   "Measure  savings",
  //   "Security",
  //   "Product tour",
  //   "Book a demo",
  //   "Product Releases",
  //   "Pricing",
  //   "Compare",
  //   "Login",
  //   "Contact us",
  // ];

  const productLinks = [
    { label: "Online Booking", path: "/features/online-booking" },
    { label: "Calendar", path: "/features/calendar" },
    { label: "Client Portal", path: "/features/client-portal" },
    { label: "Before & After Photos", path: "/features/treatment-photos" },
    { label: "Payment Processing", path: "/features/billing-checkout" },
    { label: "Reports", path: "/features/practice-reports" },
    { label: "Stock Management", path: "/features/stock-management" },
    { label: "Mobile App", path: "/" },
  ];

  const specialtiesLinks = [
    { label: "General Practice", path: "/private-practice" },
    { label: "Medical Aesthetics", path: "/aesthetic-clinic" },
    { label: "Cosmetic Surgery", path: "/cosmetic-surgery" },
    { label: "Dermatology", path: "/dermatology" },
    { label: "Hair Transplant", path: "/hair-transplant-clinic" },
    { label: "IV Therapy", path: "/iv-therapy" },
    { label: "Weight Loss", path: "/weight-loss" },
    { label: "Mental Health", path: "/mental-health" },
    { label: "Wellness", path: "/wellness" },
    { label: "Gynecology", path: "/pelvic-health" },
    { label: "View all specialties", path: "/" },
  ];

  const discoverLinks = [
    { label: "Blogs", path: "/blogs" },
    { label: "eBooks, Templates & Resources", path: "/ebooks" },
    { label: "Guides", path: "/blogs" },
    { label: "Help Centre", path: "/client-services" },
    { label: "Client Services", path: "/client-services" },
    { label: "API Documentation", path: "/build-with-us" },
    { label: "Integrations", path: "/integration" },
    { label: "Knowledgebase", path: "/blogs" },
  ];

  const companyLinks = [
    { label: "About us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Build with Us", path: "/build-with-us" },
    { label: "Refer a friend", path: "/refer-friend" },
    { label: "Referral Partner Program", path: "/refer-friend" },
    { label: "Measure savings", path: "/revenue-growth-consultation" },
    { label: "Security", path: "/security-commitment" },
    { label: "Product tour", path: "/product-tour" },
    { label: "Book a demo", path: "/book-demo" },
    { label: "Product Releases", path: "/" },
    { label: "Pricing", path: "/pricing" },
    { label: "Compare", path: "/compare-clinic" },
    { label: "Login", path: "/" },
    { label: "Contact us", path: "/contact" },
  ];

  const socialIcons = [
    {
      label: "Instagram",
      icon: (
        <path d="M7 2h10c2.76 0 5 2.24 5 5v10c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3H7zm5 3c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm4.75-3c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" />
      ),
    },
    {
      label: "LinkedIn",
      icon: (
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.07h2.79v-4.67c0-.67.06-1.35.26-1.83.54-1.35 1.78-1.35 1.78 0v6.5h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.07H5.5v8.07h2.77z" />
      ),
    },
    {
      label: "X",
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.634l4.704 6.212 5.656-6.212zm-1.16 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      ),
    },
  ];

  return (
    <footer className="bg-[#052e36] text-white pt-20 pb-10 font-sans">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-medium tracking-tight">
                HealVare
              </span>
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed mb-8 max-w-sm font-normal">
              The operating system for modern clinics. We streamline patient
              care and practice growth through intelligent automation.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Specialties" links={specialtiesLinks} />
            <FooterColumn title="Resources" links={discoverLinks} />
            <FooterColumn title="Company" links={companyLinks} />
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[12px] text-slate-400 font-normal">
              © 2026 HealthCare Systems. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[12px] font-normal text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              GDPR
            </a>
            <a href="#" className="hover:text-white transition-colors">
              HIPAA
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
//   <div>
//     <h3 className="text-[#A7CDCF] text-[11px] font-medium uppercase tracking-[0.1em] mb-5">
//       {title}
//     </h3>
//     <ul className="space-y-2.5">
//       {links.map((link) => (
//         <li key={link}>
//           <a
//             href="#"
//             className="text-slate-200 text-[14px] font-normal hover:text-cyan-400 transition-colors duration-200 inline-block"
//           >
//             {link}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) => (
  <div>
    <h3 className="text-[#A7CDCF] text-[11px] font-medium uppercase tracking-[0.1em] mb-5">
      {title}
    </h3>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.path}
            className="text-slate-200 text-[14px] font-normal hover:text-cyan-400 transition-colors duration-200 inline-block"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default FooterPage;
