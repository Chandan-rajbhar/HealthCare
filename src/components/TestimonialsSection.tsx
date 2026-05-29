import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dr Jordan Faulkner",
    title: "Founder and Lead Injector  Alia Aesthetics",
    avatar: "https://pabau.com/wp-content/uploads/2024/09/Dr-Jordan-Faulkner.webp",
    quote: [
      "I was using a standard Excel sheet for bookings. As you can imagine, that meant that every single day I had to be totally conscious in terms of making those follow-ups and making sure that I didn’t let anyone down.",
      "I wanted to be able to sit back and know that that was automated and done for me, without patients feeling like they were let down."
    ],
    highlight: true,
  },
  {
    name: "Amish Patel",
    title: "Director & Owner, Intrigue Cosmetic Clinic",
    avatar: "https://pabau.com/wp-content/uploads/2024/06/Intrigue-Cosmetic-Case-Study-Amish-Patel-300x300.webp",
    quote: [
      "I send vouchers two weeks before a patient’s birthday. They’ll get an email to say, your birthday’s coming up. Here’s a £50 voucher. The thing I love is everything’s so automated."
    ],
    stars: 5,
  },
  {
    name: "Kirsty S",
    title: "",
    avatar: "https://pabau.com/wp-content/uploads/2024/07/capterra.webp",
    quote: [
      "We love the functionality, customization, communication, and patient experience that Pabau offers."
    ],
    stars: 5,
  },
  {
    name: "Susie G.",
    title: "",
    avatar: "https://pabau.com/wp-content/uploads/2024/07/g2.webp",
    quote: [
      "The automation of almost everything and customization for communication, ease of use, beautiful and clean design. It never stops surprising me of its capabilities!"
    ],
    stars: 5,
  },
  {
    name: "Dr J",
    title: "",
    avatar: "https://pabau.com/wp-content/uploads/2024/07/capterra.webp",
    quote: [
      "I like how Pabau encompasses all that you need for a clinic software system from appointment booking, deposit taking, notes and marketing."
    ],
    stars: 5,
  },
  {
    name: "Yobany V",
    title: "",
    avatar: "https://pabau.com/wp-content/uploads/2024/07/capterra.webp",
    quote: [
      "Comprehensive functionality. Pabau is described as an all-in-one software that integrates many features needed to run a clinic, including bookings, marketing and payments."
    ],
    stars: 5,
  },
];

const badges = [
  { src: "https://pabau.com/wp-content/uploads/2026/02/capterra-shortlist.svg", alt: "Capterra Shortlist", score: "4.7 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2026/02/software-advice-best-customer-support.svg", alt: "Best Customer Support", score: "4.7 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2026/02/software-advice-front-runners.svg", alt: "Front Runners", score: "4.7 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2025/01/g2.svg", alt: "G2", score: "4.8 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_BestResults_Total.svg", alt: "Best Results", score: null },
  { src: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_Leader_Leader.svg", alt: "Leader", score: null },
  { src: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_UsersMostLikelyToRecommend_Nps.svg", alt: "Users Most Likely To Recommend", score: null },
];

export function TestimonialsSection() {
  return (
    <section style={{ background: "#f7f8fa", padding: "48px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: "#23263b", textAlign: "center", marginBottom: 36 }}>
          Customer Reviews & Testimonials
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 24, marginBottom: 24 }}>
          <Card style={{ padding: 0, borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.04)", minHeight: 320 }}>
            <CardContent style={{ padding: 36, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Avatar style={{ width: 56, height: 56, marginBottom: 16 }}>
                <AvatarImage src={testimonials[0].avatar} alt={testimonials[0].name} />
              </Avatar>
              <p style={{ fontSize: 18, color: "#23263b", fontStyle: "italic", textAlign: "center", marginBottom: 24, marginTop: 0, lineHeight: 1.6 }}>
                “{testimonials[0].quote[0]}<br />{testimonials[0].quote[1]}”
              </p>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#23263b", marginBottom: 2 }}>{testimonials[0].name}</div>
              <div style={{ fontSize: 12, color: "#7b7b93" }}>{testimonials[0].title}</div>
            </CardContent>
          </Card>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
            <Card style={{ borderRadius: 12, minHeight: 120 }}>
              <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar style={{ width: 40, height: 40, marginBottom: 8 }}>
                  <AvatarImage src={testimonials[1].avatar} alt={testimonials[1].name} />
                </Avatar>
                <p style={{ fontSize: 14, color: "#23263b", textAlign: "center", margin: 0, marginBottom: 8, lineHeight: 1.5 }}>
                  “{testimonials[1].quote[0]}”
                </p>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#23263b" }}>{testimonials[1].name}</div>
                <div style={{ fontSize: 12, color: "#00b6dd", fontWeight: 600 }}>{testimonials[1].title}</div>
                <div style={{ color: "#00b6dd", fontSize: 16, marginTop: 4 }}>{'★'.repeat(testimonials[1].stars || 0)}</div>
              </CardContent>
            </Card>
            <Card style={{ borderRadius: 12, minHeight: 120 }}>
              <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar style={{ width: 40, height: 40, marginBottom: 8 }}>
                  <AvatarImage src={testimonials[2].avatar} alt={testimonials[2].name} />
                </Avatar>
                <p style={{ fontSize: 14, color: "#23263b", textAlign: "center", margin: 0, marginBottom: 8, lineHeight: 1.5 }}>
                  “{testimonials[2].quote[0]}”
                </p>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#23263b" }}>{testimonials[2].name}</div>
                <div style={{ color: "#00b6dd", fontSize: 16, marginTop: 4 }}>{'★'.repeat(testimonials[2].stars || 0)}</div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {testimonials.slice(3).map((t, i) => (
            <Card key={i} style={{ borderRadius: 12, minHeight: 120 }}>
              <CardContent style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar style={{ width: 40, height: 40, marginBottom: 8 }}>
                  <AvatarImage src={t.avatar} alt={t.name} />
                </Avatar>
                <p style={{ fontSize: 14, color: "#23263b", textAlign: "center", margin: 0, marginBottom: 8, lineHeight: 1.5 }}>
                  “{t.quote[0]}”
                </p>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#23263b" }}>{t.name}</div>
                {t.stars && <div style={{ color: "#00b6dd", fontSize: 16, marginTop: 4 }}>{'★'.repeat(t.stars)}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: "center", fontSize: 22, color: "#3d3163", fontWeight: 600, marginBottom: 24 }}>
          Trusted by 3500+ practices across the world
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 40, flexWrap: "wrap" }}>
          {badges.map((b, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={b.src} alt={b.alt} style={{ height: 64, marginBottom: 8 }} />
              {b.score && <div style={{ color: "#00b6dd", fontWeight: 600, fontSize: 15 }}>{b.score}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
