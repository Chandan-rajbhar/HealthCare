import { Card, CardContent } from "@/components/ui/card";
 "../FooterPage/footerpage";

type CaseStudy = {
  name: string;
  description: string;
  image?: string | null;
  bg?: string;
  logoText?: string;
};

const caseStudies = [
  {
    name: "Skin With Bea Esthetics",
    description:
      "Discover how Beatrice built a five-star solo practice by automating emails and forms, collecting reviews, and delivering exceptional patient service.",
    image: "https://pabau.com/wp-content/uploads/2025/08/skin-with-bae-esthetics-case-study-768x449.webp",
    bg: "#A7CDCF",
  },
  {
    name: "Esteem Life Medical Group",
    description:
      "This longevity clinic was searching for a versatile, all-in-one system to support both the clinical and operational sides of their practice.",
    image: "https://pabau.com/wp-content/uploads/2025/06/Esteem-Life-Medical-Group.webp",
    bg: "#A7CDCF",
  },
  {
    name: "Balanced Aesthetics",
    description:
      "Jamila Shafi, founder of Balanced Aesthetics by Jam, realized that managing bookings through DMs and relying on paper documentation wasn't sustainable as her practice grew.",
    image: "https://pabau.com/wp-content/uploads/2025/06/Balanced-Aesthtics-By-Jam-Jamila-Shafi.webp",
    bg: "#A7CDCF",
  },
  {
    name: "Kingswood Aesthetics",
    description:
      "Solo practitioner Emma Beider, owner and director of Kingswood Aesthetics, needed a system that would deliver value from day one for her practice.",
    image: "https://pabau.com/wp-content/uploads/2024/08/Kingswood-Aesthetics-768x449.webp",
    bg: "#A7CDCF",
  },
  {
    name: "River Aesthetics",
    description:
      "River Aesthetics uses a comprehensive lead management system to stay on top of booking inquiries and ensure a great experience for new patients.",
    image: null,
    logoText: "RIVER AESTHETICS",
    bg: "linear-gradient(135deg, #7ecfe0 0%, #4ab8d4 60%, #2da0c0 100%)",
  },
  {
    name: "London Face and Skin Clinic",
    description:
      "See how London Face and Skin Clinic streamlined their end-to-end patient management—from booking all the way to payments.",
    image: null,
    logoText: "LONDON FACE AND SKIN CLINIC",
    bg: "linear-gradient(135deg, #1a2340 0%, #263352 60%, #1a2340 100%)",
  },
  {
    name: "Secret Enhancements",
    description:
      "Secret Enhancements has transformed their online booking process. Owner Camille can now spend more time doing what she loves—treating patients.",
    image: null,
    logoText: "SECRET ENHANCEMENTS",
    bg: "linear-gradient(135deg, #7ecfe0 0%, #4ab8d4 60%, #2da0c0 100%)",
  },
  {
    name: "Intrigue Cosmetic Clinic",
    description:
      "The owner of Intrigue Cosmetic Clinic is using our platform to reclaim half an hour each day—meaning he can leave on time.",
    image: null,
    logoText: "INTRIGUE",
    bg: "linear-gradient(135deg, #7ecfe0 0%, #4ab8d4 60%, #2da0c0 100%)",
  },
  {
    name: "Allo Aesthetics",
    description:
      "Investing in practice management software early in his aesthetics career helped this former NHS doctor create a seamless patient experience at his clinic.",
    image: null,
    logoText: "ALLO AESTHETICS",
    bg: "linear-gradient(135deg, #a8dce8 0%, #7ecfe0 60%, #4ab8d4 100%)",
  },
  {
    name: "Bank MediSpa",
    description:
      "Bank MediSpa switched to digital patient records so they can securely access the information they need anytime, anywhere.",
    image: null,
    logoText: "BANK MEDISPA",
    bg: "linear-gradient(135deg, #7ecfe0 0%, #4ab8d4 60%, #2da0c0 100%)",
  },
  {
    name: "Juvea Medical",
    description:
      "Juvea Medical used our platform to transform their clinic's operations, giving them much clearer visibility over their practice performance.",
    image: null,
    logoText: "JUVEA",
    bg: "linear-gradient(135deg, #7ecfe0 0%, #4ab8d4 60%, #2da0c0 100%)",
  },
  {
    name: "Ageless Enhancements",
    description:
      "Ageless Enhancements med spas use our platform to save 10 minutes per patient and operate seamlessly across two locations.",
    image: null,
    logoText: "Ageless",
    bg: "linear-gradient(135deg, #a8dce8 0%, #7ecfe0 60%, #4ab8d4 100%)",
  },
  {
    name: "Dr. Leah Cosmetic Clinics",
    description:
      "Dr. Leah uses our online booking system to ensure her time-short, corporate professional patients can book easily and quickly.",
    image: null,
    logoText: "Dr. Leah",
    bg: "linear-gradient(135deg, #1a2340 0%, #263352 60%, #1a2340 100%)",
  },
  {
    name: "ESHO The Clinic",
    description:
      "ESHO uses our platform to securely store their patient database and provide easy access for staff across multiple clinic locations.",
    image: null,
    logoText: "ESHO.",
    bg: "linear-gradient(135deg, #7b5ea7 0%, #9b6ec7 60%, #7b5ea7 100%)",
  },
];

// Decorative blob SVG for the card background
const BlobBg = () => (
  <svg
    style={{ position: "absolute", bottom: 0, right: 0, width: "70%", opacity: 0.18, pointerEvents: "none" }}
    viewBox="0 0 200 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="130" cy="120" rx="100" ry="80" fill="white" />
    <ellipse cx="60" cy="150" rx="70" ry="50" fill="white" />
  </svg>
);

const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <Card
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: 12,
      overflow: "hidden",
      cursor: "pointer",
      transition: "box-shadow 0.18s, transform 0.18s",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      background: "#fff",
      width: 400,
      maxWidth: "100%",
      margin: "0 auto",
      minHeight: 340,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.12)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {/* Thumbnail with BG Color */}
    <div
      style={{
        position: "relative",
        height: 110,
        overflow: "hidden",
        background: study.bg || "#A7CDCF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BlobBg />
      {study.image ? (
        <img
          src={study.image}
          alt={study.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={e => {
            (e.target as HTMLImageElement).style.display = "none";
            ((e.target as HTMLImageElement).parentNode!.querySelector(".fallback-logo") as HTMLElement)!.style.display = "flex";
          }}
        />
      ) : null}
      {/* Logo card overlay */}
      <div
        className="fallback-logo"
        style={{
          display: study.image ? "none" : "flex",
          position: "absolute",
          inset: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: "16px 28px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            minWidth: 130,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              color: "#222",
              textTransform: "uppercase",
              lineHeight: 1.4,
              display: "block",
            }}
          >
            {study.logoText}
          </span>
        </div>
      </div>
    </div>

    {/* Text */}
    <CardContent style={{ padding: "12px 14px 16px" }}>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 8,
          lineHeight: 1.35,
        }}
      >
        {study.name}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: "#6b7280",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {study.description}
      </p>
    </CardContent>
  </Card>
);

const CaseStudies = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #e0f5fb 0%, #f4fbfd 160px, #ffffff 400px)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          paddingBottom: 80,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", padding: "56px 24px 40px" }}>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 14,
              letterSpacing: -0.5,
              lineHeight: 1.15,
            }}
          >
            Case Studies
          </h1>
          <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            See how practices like yours use our platform to save time, enhance patient experience, and grow their patient base.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(380px, 1fr))",
            gap: 28,
          }}
        >
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.name} study={study} />
          ))}
        </div>
      </div>
      <BadgesSection />

    </>
  );
};

export default CaseStudies;

const badges = [
  {
    img: "https://pabau.com/wp-content/uploads/2026/02/capterra-shortlist.svg",
    rating: "4.7 / 5",
  },
  {
    img: "https://pabau.com/wp-content/uploads/2026/02/software-advice-best-customer-support.svg",
    rating: "4.7 / 5",
  },
  {
    img: "https://pabau.com/wp-content/uploads/2026/02/software-advice-front-runners.svg",
    rating: "4.7 / 5",
  },
  {
    img: "https://pabau.com/wp-content/uploads/2025/01/g2.svg",
    rating: "4.8 / 5",
  },
  {
    img: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_BestResults_Total.svg",
    rating: null,
  },
  {
    img: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_Leader_Leader.svg",
    rating: null,
  },
  {
    img: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_UsersMostLikelyToRecommend_Nps.svg",
    rating: null,
  },
];

function BadgesSection() {
  return (
    <div style={{
      background: "#eaf7fb",
      padding: "32px 0 24px 0",
      textAlign: "center"
    }}>
      <div style={{
        fontWeight: 500,
        fontSize: 22,
        color: "#2d2c5a",
        marginBottom: 24,
        letterSpacing: 0.1,
      }}>
        Trusted by 3500+ practices across the world
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 44,
        flexWrap: "wrap",
        marginBottom: 12,
      }}>
        {badges.map((badge, i) => (
          <div key={i} style={{ minWidth: 90, textAlign: "center" }}>
            <Card style={{
              background: "transparent",
              boxShadow: "none",
              border: "none",
              padding: 0,
              marginBottom: 6,
            }}>
              <img
                src={badge.img}
                alt=""
                style={{ height: 60, margin: "0 auto", display: "block" }}
              />
            </Card>
            {badge.rating && (
              <div style={{
                color: "#00b386",
                fontWeight: 600,
                fontSize: 14,
                marginTop: 2,
                letterSpacing: 0.1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}>
                <span style={{ fontSize: 16, lineHeight: 1 }}>&#9679;</span> {badge.rating}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Dots navigation (static, for UI only) */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: 4, background: "#00bcd4", display: "inline-block" }}></span>
        <span style={{ width: 16, height: 2, background: "#00bcd4", display: "inline-block", borderRadius: 1 }}></span>
      </div>
    </div>
  );
}
