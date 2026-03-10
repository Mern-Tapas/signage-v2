'use client'
import Link from "next/link"
import { useState, useEffect, useRef, RefObject } from "react"

// --- Types ---
interface FaqItemProps {
  q: string
  a: string
}

interface StatCardProps {
  value: number
  suffix: string
  label: string
  start: boolean
}

interface FeatureCardProps {
  icon: string
  title: string
  desc: string
  delay: number
}

interface PricingCardProps {
  plan: string
  price: string
  screens: string
  features: string[]
  highlight?: boolean
  delay: number
}

interface Feature {
  icon: string
  title: string
  desc: string
}

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

interface FaqEntry {
  q: string
  a: string
}

interface UseCase {
  icon: string
  name: string
  desc: string
}

interface FooterColumn {
  title: string
  links: string[]
}

// --- Animated Counter Hook ---
function useCounter(end: number, duration: number = 2000, start: boolean = false): number {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])
  return count
}

// --- Intersection Observer Hook ---
function useInView(threshold: number = 0.15): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState<boolean>(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// --- FAQ Item ---
function FaqItem({ q, a }: FaqItemProps) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: "20px 28px",
        cursor: "pointer",
        background: open ? "#f0f7ff" : "#fff",
        transition: "background 0.3s",
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 600, fontSize: 16, color: "#111827", fontFamily: "'Sora', sans-serif" }}>{q}</span>
        <span style={{
          fontSize: 22, color: "#2563eb", fontWeight: 700,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.3s",
          display: "inline-block"
        }}>+</span>
      </div>
      <div style={{
        maxHeight: open ? 200 : 0,
        overflow: "hidden",
        transition: "max-height 0.4s ease",
        color: "#6b7280",
        fontSize: 15,
        marginTop: open ? 12 : 0,
        lineHeight: 1.6
      }}>{a}</div>
    </div>
  )
}

// --- Stat Card ---
function StatCard({ value, suffix, label, start }: StatCardProps) {
  const count = useCounter(value, 2000, start)
  return (
    <div style={{ textAlign: "center" }}>
      <div className="text-white" style={{ fontSize: 48, fontWeight: 800, color: "#bbd0ff", fontFamily: "'Sora', sans-serif", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ color: "#f0f0f0", marginTop: 8, fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
    </div>
  )
}

// --- Feature Card ---
function FeatureCard({ icon, title, desc, delay }: FeatureCardProps) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 20,
      padding: "32px 28px",
      transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms`,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
      boxShadow: "0 4px 24px rgba(37,99,235,0.06)",
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, marginBottom: 20
      }}>{icon}</div>
      <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: "#111827", fontFamily: "'Sora', sans-serif" }}>{title}</h3>
      <p style={{ color: "#6b7280", fontSize: 14.5, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
    </div>
  )
}

// --- Pricing Card ---
function PricingCard({ plan, price, screens, features, highlight = false, delay }: PricingCardProps) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{
      background: highlight ? "linear-gradient(145deg,#1d4ed8,#2563eb)" : "#fff",
      border: highlight ? "none" : "1px solid #e5e7eb",
      borderRadius: 24, padding: "40px 32px",
      transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms`,
      opacity: inView ? 1 : 0,
      transform: inView ? (highlight ? "scale(1.05)" : "scale(1)") : "translateY(30px)",
      boxShadow: highlight ? "0 20px 60px rgba(37,99,235,0.35)" : "0 4px 24px rgba(0,0,0,0.06)",
      color: highlight ? "#fff" : "#111827",
      position: "relative", overflow: "hidden"
    }}>
      {highlight && <div style={{
        position: "absolute", top: -30, right: -30,
        width: 120, height: 120, borderRadius: "50%",
        background: "rgba(255,255,255,0.08)"
      }} />}
      {highlight && <div style={{
        position: "absolute", bottom: -20, left: -20,
        width: 80, height: 80, borderRadius: "50%",
        background: "rgba(255,255,255,0.06)"
      }} />}
      {highlight && (
        <div style={{
          display: "inline-block", background: "#fbbf24", color: "#111",
          fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20,
          marginBottom: 16, letterSpacing: 1
        }}>MOST POPULAR</div>
      )}
      <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, fontFamily: "'Sora', sans-serif" }}>{plan}</h3>
      <div style={{ fontSize: 44, fontWeight: 800, marginBottom: 6, fontFamily: "'Sora', sans-serif" }}>
        {price === "Custom" ? "Custom" : <>₹{price}<span style={{ fontSize: 16, fontWeight: 400, opacity: 0.7 }}>/mo</span></>}
      </div>
      <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>{screens}</div>
      <div style={{ borderTop: `1px solid ${highlight ? "rgba(255,255,255,0.2)" : "#f3f4f6"}`, paddingTop: 24 }}>
        {features.map((f: string, i: number) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontSize: 14.5, fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ color: highlight ? "#93c5fd" : "#2563eb", fontSize: 16 }}>✓</span> {f}
          </div>
        ))}
      </div>
      <button
        style={{
          width: "100%", marginTop: 24, padding: "14px 0", borderRadius: 14,
          fontWeight: 700, fontSize: 15, cursor: "pointer", border: "none",
          background: highlight ? "#fff" : "#2563eb",
          color: highlight ? "#2563eb" : "#fff",
          fontFamily: "'Sora', sans-serif",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.target as HTMLButtonElement
          el.style.transform = "translateY(-2px)"
          el.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)"
        }}
        onMouseLeave={(e) => {
          const el = e.target as HTMLButtonElement
          el.style.transform = "translateY(0)"
          el.style.boxShadow = "none"
        }}
      >
        Get Started
      </button>
    </div>
  )
}

// --- Main Component ---
export default function FoxMediaLanding() {
  const [heroVisible, setHeroVisible] = useState<boolean>(false)
  const [statsRef, statsInView] = useInView(0.3)
  const [navScrolled, setNavScrolled] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100)
    const handleScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features: Feature[] = [
    { icon: "🖥️", title: "Screen Management", desc: "Control unlimited screens remotely from a single, intuitive dashboard with real-time status." },
    { icon: "🎬", title: "Media Library", desc: "Store, organise and manage all your images, videos, and apps in one central cloud library." },
    { icon: "📅", title: "Smart Scheduling", desc: "Schedule playlists by time, day, or event — total control over what plays and when." },
    { icon: "📊", title: "Analytics & Reports", desc: "Track playback logs, uptime stats, and audience engagement with detailed reports." },
    { icon: "👥", title: "Team Access", desc: "Invite your team with role-based permissions so everyone has the right level of access." },
    { icon: "☁️", title: "Cloud Platform", desc: "Secure, 99.9% uptime cloud infrastructure accessible from anywhere in the world." },
  ]

  const testimonials: Testimonial[] = [
    { quote: "FOXMEDIA helped us manage 40+ screens across all our hotel properties seamlessly.", name: "Rajiv Sharma", role: "Operations Head, Horizon Hotels", avatar: "RS" },
    { quote: "Our restaurant menu updates now take seconds instead of hours. Incredible platform.", name: "Priya Nair", role: "Owner, Spice Garden Chain", avatar: "PN" },
    { quote: "The scheduling feature alone saved us 10 hours a week. Best investment we made.", name: "Arjun Mehta", role: "IT Manager, RetailX", avatar: "AM" },
  ]

  const faqs: FaqEntry[] = [
    { q: "Can I manage screens remotely?", a: "Yes! FOXMEDIA is a fully cloud-based platform. You can manage, update, and monitor all your screens from anywhere in the world using any device." },
    { q: "Is there a free trial?", a: "Absolutely. We offer a 14-day free trial with full access to all features — no credit card required." },
    { q: "What content formats are supported?", a: "We support images (JPG, PNG, GIF, WebP), videos (MP4, WebM), PDFs, HTML5 apps, and web URLs." },
    { q: "How many screens can I connect?", a: "Starter supports up to 5 screens, Professional up to 25, and Enterprise has no limits — we scale with you." },
    { q: "Is my data secure?", a: "Yes. All data is encrypted in transit and at rest. We use enterprise-grade cloud infrastructure with regular security audits." },
  ]

  const useCases: UseCase[] = [
    { icon: "🏨", name: "Hotels", desc: "Lobby displays, event info, room service menus" },
    { icon: "🍽️", name: "Restaurants", desc: "Digital menus, promos, and daily specials" },
    { icon: "🛒", name: "Retail Stores", desc: "Product showcases, offers, and branding" },
    { icon: "🏥", name: "Hospitals", desc: "Wayfinding, patient info, and schedules" },
    { icon: "🏢", name: "Corporate", desc: "Internal comms, KPIs, and announcements" },
    { icon: "🎓", name: "Education", desc: "Campus info, timetables, and events" },
    { icon: "✈️", name: "Airports", desc: "Flight info, advertising, and navigation" },
    { icon: "🏋️", name: "Fitness", desc: "Class schedules, motivation, and promo" },
  ]

  const footerColumns: FooterColumn[] = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
    { title: "Company", links: ["About Us", "Blog", "Careers", "Contact"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"] },
  ]

  const navLinks: string[] = ["Features", "Pricing", "Use Cases", "FAQ"]
  const marqueeItems: string[] = ["🏨 Hotels", "🍽️ Restaurants", "🏬 Shopping Malls", "🏥 Hospitals", "🏢 Corporates", "🛒 Retail Chains", "🎓 Education", "✈️ Airports"]
  const socialIcons: string[] = ["𝕏", "in", "f"]

  const sidebarItems: [string, string, string, string][] = [
    ["🖥️", "Dashboard", "#eff6ff", "#2563eb"],
    ["🎬", "Media Library", "", ""],
    ["📅", "Schedule", "", ""],
    ["📊", "Analytics", "", ""],
    ["⚙️", "Settings", "", ""],
  ]

  const statCards: [string, string, string, string][] = [
    ["12", "Active Screens", "#eff6ff", "#2563eb"],
    ["3", "Offline", "#fff7ed", "#f97316"],
    ["98%", "Uptime", "#f0fdf4", "#16a34a"],
  ]

  const screenItems: string[] = ["Lobby Screen - Mumbai", "Conference Room - Delhi", "Restaurant Menu - Pune"]

  const howItWorksSteps = [
    { n: "01", icon: "⬆️", title: "Upload Content", desc: "Upload images, videos, and HTML5 apps to your cloud media library instantly." },
    { n: "02", icon: "🎞️", title: "Create Playlist", desc: "Arrange your content into playlists with custom duration and transitions." },
    { n: "03", icon: "📡", title: "Schedule & Go Live", desc: "Schedule playlists to screens and control playback remotely — 24/7." },
  ]

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }

        .hero-badge { animation: fadeSlideUp 0.6s ease forwards; }
        .hero-title { animation: fadeSlideUp 0.7s 0.15s ease both; }
        .hero-sub { animation: fadeSlideUp 0.7s 0.3s ease both; }
        .hero-btns { animation: fadeSlideUp 0.7s 0.45s ease both; }
        .hero-preview { animation: fadeSlideUp 0.9s 0.6s ease both; }

        .nav-link { color:#374151; text-decoration:none; font-size:15px; font-weight:500; transition:color 0.2s; }
        .nav-link:hover { color:#2563eb; }

        .use-card { transition:all 0.3s; }
        .use-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(37,99,235,0.15) !important; }

        .testimonial-card { transition:all 0.3s; }
        .testimonial-card:hover { transform:translateY(-4px); }

        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:#f9fafb; }
        ::-webkit-scrollbar-thumb { background:#bfdbfe; border-radius:10px; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: navScrolled ? "12px 48px" : "20px 48px",
        background: navScrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: navScrolled ? "blur(16px)" : "none",
        borderBottom: navScrolled ? "1px solid rgba(229,231,235,0.8)" : "none",
        transition: "all 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, boxShadow: "0 4px 12px rgba(37,99,235,0.4)"
          }}>🦊</div>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 20, color: "#111827", letterSpacing: -0.5 }}>
            FOX<span style={{ color: "#2563eb" }}>MEDIA</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {navLinks.map((l: string) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="nav-link">{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href={'/user/dashboard'} style={{ background: "none", border: "none", color: "#374151", fontWeight: 500, fontSize: 15, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            Log in
          </Link>
          <button
            style={{
              background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff",
              border: "none", borderRadius: 12, padding: "10px 22px",
              fontWeight: 600, fontSize: 15, cursor: "pointer",
              fontFamily: "'Sora', sans-serif",
              boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLButtonElement
              el.style.transform = "translateY(-2px)"
              el.style.boxShadow = "0 8px 24px rgba(37,99,235,0.45)"
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLButtonElement
              el.style.transform = "translateY(0)"
              el.style.boxShadow = "0 4px 16px rgba(37,99,235,0.35)"
            }}
          >
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "120px 24px 80px",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #dbeafe 0%, #fff 70%)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: 80, left: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(147,197,253,0.35),transparent 70%)", animation: "float 7s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 200, right: "6%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle,rgba(196,181,253,0.2),transparent 70%)", animation: "float 9s 2s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 120, left: "15%", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle,rgba(167,243,208,0.25),transparent 70%)", animation: "float 6s 1s ease-in-out infinite", pointerEvents: "none" }} />

        <div className={heroVisible ? "hero-badge" : ""} style={{ opacity: 0 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 50, padding: "7px 18px", marginBottom: 32 }}>
            <span style={{ fontSize: 12 }}>✨</span>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Trusted by 500+ businesses across India</span>
          </div>
        </div>

        <h1 className={heroVisible ? "hero-title" : ""} style={{
          opacity: 0, fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: -2, color: "#0f172a",
          maxWidth: 800, fontFamily: "'Sora', sans-serif", marginBottom: 24
        }}>
          Manage Every Screen<br />
          <span style={{
            background: "linear-gradient(90deg,#2563eb,#7c3aed,#2563eb)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "shimmer 3s linear infinite"
          }}>From One Dashboard</span>
        </h1>

        <p className={heroVisible ? "hero-sub" : ""} style={{
          opacity: 0, color: "#64748b", fontSize: "clamp(16px,1.8vw,20px)",
          maxWidth: 560, lineHeight: 1.7, marginBottom: 40, fontFamily: "'DM Sans', sans-serif"
        }}>
          Upload media, create playlists, and control your digital signage screens from anywhere in the world — in real time.
        </p>

        <div className={heroVisible ? "hero-btns" : ""} style={{ opacity: 0, display: "flex", gap: 14, justifyContent: "center", marginBottom: 64, flexWrap: "wrap" }}>
          <button
            style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff", border: "none", borderRadius: 14, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora', sans-serif", boxShadow: "0 8px 24px rgba(37,99,235,0.4)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 14px 32px rgba(37,99,235,0.5)" }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 8px 24px rgba(37,99,235,0.4)" }}
          >
            Start Free Trial →
          </button>
          <button
            style={{ background: "#fff", color: "#374151", border: "1px solid #e5e7eb", borderRadius: 14, padding: "16px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 8, transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)" }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)" }}
          >
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#eff6ff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>▶</span>
            Watch Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className={heroVisible ? "hero-preview" : ""} style={{ opacity: 0, width: "100%", maxWidth: 900 }}>
          <div style={{ background: "#fff", borderRadius: 24, border: "1px solid #e5e7eb", boxShadow: "0 32px 80px rgba(37,99,235,0.15), 0 8px 24px rgba(0,0,0,0.08)", overflow: "hidden", animation: "float 8s 1s ease-in-out infinite" }}>
            <div style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fca5a5" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fcd34d" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#86efac" }} />
              <div style={{ flex: 1, height: 28, background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb", marginLeft: 12, display: "flex", alignItems: "center", paddingLeft: 12 }}>
                <span style={{ fontSize: 12, color: "#9ca3af" }}>app.foxmedia.in/dashboard</span>
              </div>
            </div>
            <div style={{ display: "flex", height: 340, background: "#f8faff" }}>
              <div style={{ width: 200, background: "#fff", borderRight: "1px solid #f0f4ff", padding: "20px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🦊</div>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#111", fontFamily: "'Sora', sans-serif" }}>FOXMEDIA</span>
                </div>
                {sidebarItems.map(([icon, label, bg, col]: [string, string, string, string]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 10, marginBottom: 4, background: bg || "transparent", cursor: "pointer" }}>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{ fontSize: 13, fontWeight: bg ? 600 : 400, color: col || "#6b7280", fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1, padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#111", fontFamily: "'Sora', sans-serif" }}>Screens Overview</span>
                  <div style={{ background: "#2563eb", color: "#fff", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>+ Add Screen</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
                  {statCards.map(([v, l, , col]: [string, string, string, string]) => (
                    <div key={l} style={{ background: "#fff", border: "1px solid #f0f4ff", borderRadius: 14, padding: "16px", textAlign: "center" }}>
                      <div style={{ fontSize: 26, fontWeight: 800, color: col, fontFamily: "'Sora', sans-serif" }}>{v}</div>
                      <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", border: "1px solid #f0f4ff", borderRadius: 14, padding: "14px 16px" }}>
                  {screenItems.map((s: string, i: number) => (
                    <div key={s} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < 2 ? "1px solid #f9fafb" : "none" }}>
                      <span style={{ fontSize: 12, color: "#374151", fontFamily: "'DM Sans', sans-serif" }}>🖥️ {s}</span>
                      <span style={{ fontSize: 11, background: i === 1 ? "#fff7ed" : "#f0fdf4", color: i === 1 ? "#f97316" : "#16a34a", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{i === 1 ? "Offline" : "Live"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{ padding: "24px 0", background: "#f8faff", borderTop: "1px solid #eff6ff", borderBottom: "1px solid #eff6ff", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 18s linear infinite", width: "max-content" }}>
          {[...Array(2)].map((_: undefined, rep: number) => (
            <div key={rep} style={{ display: "flex", alignItems: "center", gap: 64 }}>
              {marqueeItems.map((b: string) => (
                <span key={b} style={{ fontSize: 15, fontWeight: 600, color: "#94a3b8", whiteSpace: "nowrap", letterSpacing: 0.5, fontFamily: "'DM Sans', sans-serif", paddingRight: 64 }}>{b}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
          <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>How It Works</span>
        </div>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", marginBottom: 60, letterSpacing: -1 }}>
          Up and running in 3 simple steps
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 32, maxWidth: 900, margin: "0 auto" }}>
          {howItWorksSteps.map((step, i: number) => (
            <div key={i} style={{ position: "relative", textAlign: "left" }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20, boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}>{step.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: 2, marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>STEP {step.n}</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 12, color: "#111827" }}>{step.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ padding: "80px 48px", background: "linear-gradient(135deg,#1e3a5f,#1d4ed8)", textAlign: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 48, maxWidth: 800, margin: "0 auto" }}>
          <StatCard value={500} suffix="+" label="Businesses Trust Us" start={statsInView} />
          <StatCard value={12000} suffix="+" label="Screens Managed" start={statsInView} />
          <StatCard value={99} suffix="%" label="Platform Uptime" start={statsInView} />
          <StatCard value={24} suffix="/7" label="Customer Support" start={statsInView} />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "100px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Features</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1 }}>
            Everything you need to<br />run digital signage at scale
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
          {features.map((f: Feature, i: number) => <FeatureCard key={i} {...f} delay={i * 80} />)}
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" style={{ padding: "100px 48px", background: "#f8faff" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Industries</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1 }}>
            Perfect for every industry
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
          {useCases.map((u: UseCase, i: number) => (
            <div key={i} className="use-card" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "28px 24px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{u.icon}</div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#111827" }}>{u.name}</h3>
              <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "100px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Pricing</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1, marginBottom: 16 }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: "#6b7280", fontSize: 16, fontFamily: "'DM Sans', sans-serif" }}>No hidden fees. Cancel anytime. Start with a 14-day free trial.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, maxWidth: 1000, margin: "0 auto", alignItems: "center" }}>
          <PricingCard plan="Starter" price="999" screens="Up to 5 Screens" features={["Cloud media library", "Basic scheduling", "Email support", "Playback reports"]} delay={0} />
          <PricingCard plan="Professional" price="2999" screens="Up to 25 Screens" features={["Everything in Starter", "Advanced scheduling", "Team access", "Priority support", "Custom branding"]} highlight delay={150} />
          <PricingCard plan="Enterprise" price="Custom" screens="Unlimited Screens" features={["Everything in Pro", "Dedicated manager", "SLA guarantee", "Custom integrations", "On-site training"]} delay={300} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 48px", background: "#f8faff" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Testimonials</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1 }}>
            What our customers say
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
          {testimonials.map((t: Testimonial, i: number) => (
            <div key={i} className="testimonial-card" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "32px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 20 }}>
                {[...Array(5)].map((_: undefined, s: number) => <span key={s} style={{ color: "#fbbf24", fontSize: 18 }}>★</span>)}
              </div>
              <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontFamily: "'DM Sans', sans-serif", fontStyle: "italic" }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'Sora', sans-serif" }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", fontFamily: "'Sora', sans-serif" }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "100px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>FAQ</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1 }}>
            Frequently asked questions
          </h2>
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {faqs.map((f: FaqEntry, i: number) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section style={{ margin: "0 48px 80px", borderRadius: 28, background: "linear-gradient(135deg,#1d4ed8 0%,#2563eb 50%,#7c3aed 100%)", padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: -1 }}>
            Start Managing Your Screens Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, marginBottom: 36, fontFamily: "'DM Sans', sans-serif" }}>
            14-day free trial · No credit card required · Setup in minutes
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{ background: "#fff", color: "#1d4ed8", border: "none", borderRadius: 14, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora', sans-serif", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { const el = e.target as HTMLButtonElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 14px 32px rgba(0,0,0,0.25)" }}
              onMouseLeave={(e) => { const el = e.target as HTMLButtonElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)" }}
            >Start Free Trial →</button>
            <button
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 14, padding: "16px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", backdropFilter: "blur(4px)", transition: "transform 0.2s, background 0.2s" }}
              onMouseEnter={(e) => { const el = e.target as HTMLButtonElement; el.style.transform = "translateY(-3px)"; el.style.background = "rgba(255,255,255,0.25)" }}
              onMouseLeave={(e) => { const el = e.target as HTMLButtonElement; el.style.transform = "translateY(0)"; el.style.background = "rgba(255,255,255,0.15)" }}
            >Talk to Sales</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "64px 48px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦊</div>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>FOX<span style={{ color: "#60a5fa" }}>MEDIA</span></span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280, fontFamily: "'DM Sans', sans-serif" }}>
                The most powerful cloud-based digital signage platform for businesses across India.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                {socialIcons.map((s: string) => (
                  <div
                    key={s}
                    style={{ width: 36, height: 36, borderRadius: 10, background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "#94a3b8", transition: "background 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#2563eb" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1e293b" }}
                  >{s}</div>
                ))}
              </div>
            </div>
            {footerColumns.map((col: FooterColumn) => (
              <div key={col.title}>
                <h4 style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 20 }}>{col.title}</h4>
                {col.links.map((l: string) => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#60a5fa" }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "#94a3b8" }}
                    >{l}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>© 2024 FOXMEDIA. All rights reserved.</span>
            <span style={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>Made with ❤️ in India</span>
          </div>
        </div>
      </footer>
    </div>
  )
}