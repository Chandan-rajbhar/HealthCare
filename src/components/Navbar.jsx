"use client";

import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FeaturesMenu from "./FeaturesMenu";
import WhoMenu from "./WhoMenu";
import WhyMenu from "./WhyMenu";
import ResourcesMenu from "./ResourcesMenu";
import HealthCareLogo from "../assets/HealthCareLogo.png";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  "Features",
  "Who we're for",
  "Why us",
  "Resources",
  "Pricing",
  "Blogs",
];

const MOBILE_FEATURE_ITEMS = [
  { label: "Clinic Management", route: "/clinic" },
  { label: "Staff Management", route: "/staff-management" },
  { label: "Commissions", route: "/commissions" },
  { label: "Timesheets", route: "/timesheets" },
  { label: "Compliance", route: "/compliance" },
  { label: "Growth Insights", route: "/growth-insights" },
];

const MOBILE_WHO_ITEMS = [
  { label: "Wellness and Preventive Care", route: "/wellness" },
  { label: "Medical Aesthetics", route: "/aesthetics" },
  { label: "Women's and Men's Health", route: "/health" },
];

const MOBILE_WHY_ITEMS = [{ label: "Healthcare", route: "/healthcare" }];
const MOBILE_RESOURCES_ITEMS = [
  { label: "Explore Resources", route: "/explore" },
];

const SUBMENU_MAP = {
  Features: MOBILE_FEATURE_ITEMS,
  "Who we're for": MOBILE_WHO_ITEMS,
  "Why us": MOBILE_WHY_ITEMS,
  Resources: MOBILE_RESOURCES_ITEMS,
};

const HAS_SUBMENU = new Set([
  "Features",
  "Who we're for",
  "Why us",
  "Resources",
]);

function NavBtn({ label, active, hasArrow, onClick, onMouseEnter }) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`relative flex items-center gap-1.5 px-4 py-5 text-[15px] font-medium transition-colors duration-200 cursor-pointer
        ${active ? "text-teal-600" : "text-slate-600 hover:text-teal-600"}`}
    >
      {label}
      {hasArrow && (
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${active ? "rotate-180" : "rotate-0"}`}
        />
      )}
      {/* Refined Sliding Underline */}
      <div
        className={`absolute bottom-[18px] left-4 right-4 h-0.5 rounded-full bg-teal-600 transition-all duration-300 transform 
        ${active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
      />
    </button>
  );
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 1200 : false,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMobileOpen(false);
      setOpenSubmenu(null);
    }
  }, [isMobile]);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const goTo = (route) => {
    navigate(route);
    setMobileOpen(false);
  };

  const handleNavItemClick = (item) => {
    if (item === "Pricing") {
      goTo("/pricing");
    }

    if (item === "Blogs") {
      goTo("/blogs");
    }
  };

  return (
    <nav
      ref={navRef}
      // onMouseLeave={() => setActiveMenu(null)}

      className="sticky top-0 z-[100] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div
          className="flex items-center shrink-0 transition-opacity hover:opacity-80 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={HealthCareLogo}
            alt="Logo"
            className={isMobile ? "h-9 w-auto" : "h-7 w-auto"}
          />
        </div>

        {isMobile ? (
          /* Mobile Toggle */
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 -mr-2 text-slate-900 transition-colors hover:bg-slate-50 rounded-lg"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <>
            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavBtn
                  key={item}
                  label={item}
                  active={activeMenu === item}
                  hasArrow={HAS_SUBMENU.has(item)}
                  onClick={() => {
                    if (HAS_SUBMENU.has(item)) {
                      setActiveMenu(activeMenu === item ? null : item);
                    } else {
                      handleNavItemClick(item);
                      setActiveMenu(null);
                    }
                  }}
                  onMouseEnter={() => {
                    clearTimeout(closeTimer.current);
                    if (HAS_SUBMENU.has(item)) {
                      setActiveMenu(item);
                    } else {
                      closeTimer.current = setTimeout(
                        () => setActiveMenu(null),
                        150,
                      );
                    }
                  }}
                />
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="flex items-center gap-3">
              <button
                className="px-5 py-2.5 text-[14px] font-medium text-slate-600 hover:text-teal-600 transition-colors cursor-pointer"
                onClick={() => navigate("/product-tour")}
              >
                Take tour
              </button>
              <button
                className="px-6 py-2.5 rounded-full bg-teal-600 text-[14px] font-medium text-white cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Book a demo
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {isMobile && mobileOpen && (
        <div className="absolute inset-x-0 top-full bg-white border-t border-slate-100 shadow-2xl flex flex-col px-6 pt-4 pb-8 z-[60] overflow-y-auto max-h-[calc(100vh-80px)] animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <div
                key={item}
                className="border-b border-slate-50 last:border-none"
              >
                <button
                  onClick={() => {
                    if (HAS_SUBMENU.has(item))
                      setOpenSubmenu(openSubmenu === item ? null : item);
                    else handleNavItemClick(item);
                  }}
                  className="flex w-full items-center justify-between py-4 text-[17px] font-medium text-slate-900"
                >
                  {item}
                  {HAS_SUBMENU.has(item) && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${openSubmenu === item ? "rotate-0" : "rotate-180"}`}
                    />
                  )}
                </button>

                {HAS_SUBMENU.has(item) && openSubmenu === item && (
                  <div className="flex flex-col gap-4 pb-4 pl-4 animate-in slide-in-from-left-2">
                    {SUBMENU_MAP[item]?.map((subItem) => (
                      <button
                        key={subItem.route}
                        onClick={() => goTo(subItem.route)}
                        className="text-left text-slate-500 font-medium hover:text-teal-600 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
              className="w-full py-4 rounded-xl bg-slate-50 text-slate-900 font-medium text-center transition-colors hover:bg-slate-100"
              onClick={() => goTo("/product-tour")}
            >
              Take product tour
            </button>
            <button
              className="w-full py-4 rounded-xl bg-teal-600 text-white font-medium text-center shadow-lg shadow-teal-600/20 active:scale-[0.98] transition-all"
              onClick={() => goTo("/book-demo")}
            >
              Book a demo
            </button>
          </div>
        </div>
      )}

      {/* Mega Menus (Desktop Only) */}
      <div
        onMouseEnter={() => clearTimeout(closeTimer.current)}
        onMouseLeave={() => {
          closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
        }}
      >
        {!isMobile && activeMenu === "Features" && <FeaturesMenu />}
        {!isMobile && activeMenu === "Who we're for" && <WhoMenu />}
        {!isMobile && activeMenu === "Why us" && <WhyMenu />}
        {!isMobile && activeMenu === "Resources" && <ResourcesMenu />}
      </div>
    </nav>
  );
}
