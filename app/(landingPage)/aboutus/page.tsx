'use client'
import { useState, useEffect, useRef, RefObject } from "react"

interface TeamMember { name: string; role: string; initials: string; color: string; bio: string }
interface Value { icon: string; title: string; desc: string }
interface Milestone { year: string; title: string; desc: string }
interface Stat { value: string; label: string }

function useInView(threshold = 0.15): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function useCounter(end: number, duration = 2000, start = false): number {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let t: number | null = null
    const step = (ts: number) => {
      if (!t) t = ts
      const p = Math.min((ts - t) / duration, 1)
      setCount(Math.floor(p * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])
  return count
}

function StatCard({ value, label, start }: { value: string; label: string; start: boolean }) {
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0
  const suffix = value.replace(/[0-9]/g, "")
  const count = useCounter(num, 2000, start)
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "clamp(32px,6vw,52px)", fontWeight: 800, color: "#fff", fontFamily: "'Sora', sans-serif", lineHeight: 1 }}>{count}{suffix}</div>
      <div style={{ color: "rgba(255,255,255,0.65)", marginTop: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
    </div>
  )
}

function ValueCard({ icon, title, desc, delay }: Value & { delay: number }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "28px 24px", transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", boxShadow: "0 4px 24px rgba(37,99,235,0.06)" }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#dbeafe,#bfdbfe)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 18 }}>{icon}</div>
      <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#111827", fontFamily: "'Sora', sans-serif" }}>{title}</h3>
      <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
    </div>
  )
}

function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 22, padding: "32px 24px", transition: `opacity 0.6s ${delay}ms, transform 0.6s ${delay}ms, box-shadow 0.3s`, opacity: inView ? 1 : 0, transform: inView ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(30px)", boxShadow: hovered ? "0 20px 48px rgba(37,99,235,0.15)" : "0 4px 20px rgba(0,0,0,0.05)", textAlign: "center" }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: member.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 22, fontFamily: "'Sora', sans-serif", margin: "0 auto 18px", boxShadow: "0 8px 24px rgba(37,99,235,0.25)", transition: "transform 0.3s", transform: hovered ? "scale(1.08)" : "scale(1)" }}>{member.initials}</div>
      <h3 style={{ fontWeight: 700, fontSize: 17, color: "#111827", marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>{member.name}</h3>
      <div style={{ fontSize: 13, color: "#2563eb", fontWeight: 600, marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>{member.role}</div>
      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{member.bio}</p>
    </div>
  )
}

function TimelineItem({ milestone, index, isMobile }: { milestone: Milestone; index: number; isMobile: boolean }) {
  const [ref, inView] = useInView(0.2)
  const isEven = index % 2 === 0
  if (isMobile) {
    return (
      <div ref={ref} style={{ display: "flex", gap: 16, marginBottom: 28, transition: `opacity 0.5s ${index * 100}ms, transform 0.5s ${index * 100}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "3px solid #fff", boxShadow: "0 0 0 3px #bfdbfe", flexShrink: 0, marginTop: 4 }} />
          {index < 5 && <div style={{ width: 2, flex: 1, background: "linear-gradient(to bottom,#bfdbfe,#e0e7ff)", marginTop: 4 }} />}
        </div>
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "18px 20px", boxShadow: "0 4px 16px rgba(37,99,235,0.06)", flex: 1, marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#2563eb", letterSpacing: 2, marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>{milestone.year}</div>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 6, fontFamily: "'Sora', sans-serif" }}>{milestone.title}</h3>
          <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{milestone.desc}</p>
        </div>
      </div>
    )
  }
  return (
    <div ref={ref} style={{ display: "flex", justifyContent: isEven ? "flex-start" : "flex-end", position: "relative", marginBottom: 40, transition: `opacity 0.6s ${index * 120}ms, transform 0.6s ${index * 120}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : `translateX(${isEven ? -30 : 30}px)` }}>
      <div style={{ position: "absolute", left: "50%", top: 24, transform: "translateX(-50%)", width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "3px solid #fff", boxShadow: "0 0 0 3px #bfdbfe", zIndex: 2 }} />
      <div style={{ width: "44%", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: "24px 28px", boxShadow: "0 4px 20px rgba(37,99,235,0.07)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#2563eb", letterSpacing: 2, marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>{milestone.year}</div>
        <h3 style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 8, fontFamily: "'Sora', sans-serif" }}>{milestone.title}</h3>
        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{milestone.desc}</p>
      </div>
    </div>
  )
}

export default function page() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [statsRef, statsInView] = useInView(0.3)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    setTimeout(() => setHeroVisible(true), 100)
    const onScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => { window.removeEventListener("resize", check); window.removeEventListener("scroll", onScroll) }
  }, [])

  const stats: Stat[] = [{ value: "2019", label: "Founded" }, { value: "500+", label: "Businesses Served" }, { value: "12000+", label: "Screens Managed" }, { value: "15+", label: "Team Members" }]
  const values: Value[] = [
    { icon: "🎯", title: "Customer First", desc: "Every decision starts with one question: how does this help our customers succeed?" },
    { icon: "⚡", title: "Relentless Simplicity", desc: "We believe powerful software doesn't have to be complicated. We obsess over making complex things feel effortless." },
    { icon: "🔒", title: "Trust & Reliability", desc: "Our customers depend on us 24/7. We take that seriously — 99.9% uptime, enterprise-grade security." },
    { icon: "🌱", title: "Always Improving", desc: "We ship fast, learn faster, and never stop iterating. Every week brings improvements from real customer feedback." },
    { icon: "🤝", title: "Built for India", desc: "Designed for the unique challenges of Indian businesses — from single outlets to nationwide retail chains." },
    { icon: "💡", title: "Transparent by Default", desc: "No hidden fees, no surprises. Honest communication with customers, partners, and each other." },
  ]
  const team: TeamMember[] = [
    { name: "Aditya Kapoor", role: "Co-Founder & CEO", initials: "AK", color: "linear-gradient(135deg,#2563eb,#1d4ed8)", bio: "Former product lead at a global SaaS company. Obsessed with making digital signage accessible to every business in India." },
    { name: "Sneha Iyer", role: "Co-Founder & CTO", initials: "SI", color: "linear-gradient(135deg,#7c3aed,#6d28d9)", bio: "10+ years in distributed systems and cloud infrastructure. Architect of FOXMEDIA's real-time screen control engine." },
    { name: "Rohan Desai", role: "Head of Product", initials: "RD", color: "linear-gradient(135deg,#0891b2,#0e7490)", bio: "UX-obsessed product thinker who has shipped products used by millions. Leads our zero-friction design philosophy." },
    { name: "Meera Nambiar", role: "Head of Sales", initials: "MN", color: "linear-gradient(135deg,#059669,#047857)", bio: "Built sales teams from ground up across hospitality, retail, and healthcare. Knows every industry we serve inside out." },
    { name: "Vikram Bhat", role: "Lead Engineer", initials: "VB", color: "linear-gradient(135deg,#dc2626,#b91c1c)", bio: "Full-stack wizard who loves performance optimization. Responsible for our sub-second screen update latency." },
    { name: "Priyanka Joshi", role: "Customer Success", initials: "PJ", color: "linear-gradient(135deg,#d97706,#b45309)", bio: "Champions our customers internally. Her team ensures every business gets the most out of FOXMEDIA." },
  ]
  const milestones: Milestone[] = [
    { year: "2019", title: "The Idea Sparks", desc: "Aditya and Sneha saw a hotel struggling to update their lobby screens manually. FOXMEDIA was born from that frustration." },
    { year: "2020", title: "First 10 Customers", desc: "Launched our beta with 10 hotels in Mumbai. Learned more in 3 months than we had in years of planning." },
    { year: "2021", title: "100 Screens Milestone", desc: "Crossed 100 screens managed — our first big validation that businesses truly needed what we were building." },
    { year: "2022", title: "Seed Funding & Growth", desc: "Raised ₹2.5Cr seed funding. Grew the team to 8 people and launched scheduling and analytics features." },
    { year: "2023", title: "1,000+ Screens & Series A", desc: "Hit 1,000 screens managed. Closed Series A and expanded across 12 cities in India." },
    { year: "2024", title: "12,000 Screens & Growing", desc: "Today, 500+ businesses trust FOXMEDIA to manage 12,000+ screens. We're just getting started." },
  ]
  const navLinks = ["Features", "Pricing", "Use Cases", "FAQ"]
  const sp = isMobile ? "60px 20px" : "100px 48px"

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes rotateSlow { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        .hero-badge { animation: fadeSlideUp 0.6s ease forwards; }
        .hero-title { animation: fadeSlideUp 0.7s 0.15s ease both; }
        .hero-sub   { animation: fadeSlideUp 0.7s 0.30s ease both; }
        .nav-link { color:#374151; text-decoration:none; font-size:15px; font-weight:500; transition:color 0.2s; }
        .nav-link:hover, .nav-link-active { color:#2563eb; }
        .mob-menu { animation: slideDown 0.25s ease; }
        .timeline-line-desktop { position:absolute; left:50%; top:0; bottom:0; width:2px; background:linear-gradient(to bottom,#bfdbfe,#e0e7ff); transform:translateX(-50%); z-index:1; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:#f9fafb; }
        ::-webkit-scrollbar-thumb { background:#bfdbfe; border-radius:10px; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: navScrolled || menuOpen ? "rgba(255,255,255,0.97)" : "transparent", backdropFilter: navScrolled ? "blur(16px)" : "none", borderBottom: navScrolled || menuOpen ? "1px solid rgba(229,231,235,0.8)" : "none", transition: "all 0.3s" }}>
        <div style={{ padding: isMobile ? "14px 20px" : navScrolled ? "12px 48px" : "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, boxShadow: "0 4px 12px rgba(37,99,235,0.4)" }}>🦊</div>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 19, color: "#111827", letterSpacing: -0.5 }}>FOX<span style={{ color: "#2563eb" }}>MEDIA</span></span>
          </a>
          {!isMobile && <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {navLinks.map(l => <a key={l} href={`/#${l.toLowerCase().replace(" ", "-")}`} className="nav-link">{l}</a>)}
            <a href="/about" className="nav-link" style={{ color: "#2563eb", fontWeight: 600 }}>About</a>
          </div>}
          {!isMobile && (
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button style={{ background: "none", border: "none", color: "#374151", fontWeight: 500, fontSize: 15, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Log in</button>
              <button style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff", border: "none", borderRadius: 12, padding: "10px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "'Sora', sans-serif", boxShadow: "0 4px 16px rgba(37,99,235,0.35)", transition: "transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}>Start Free Trial</button>
            </div>
          )}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 5, borderRadius: 8 }}>
              {[0, 1, 2].map(i => <div key={i} style={{ width: 24, height: 2, background: "#374151", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none", opacity: menuOpen && i === 1 ? 0 : 1 }} />)}
            </button>
          )}
        </div>
        {isMobile && menuOpen && (
          <div className="mob-menu" style={{ background: "#fff", borderTop: "1px solid #f3f4f6", padding: "12px 20px 20px" }}>
            {[...navLinks, "About"].map(l => <a key={l} href={l === "About" ? "/about" : `/#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 0", color: l === "About" ? "#2563eb" : "#374151", textDecoration: "none", fontSize: 16, fontWeight: l === "About" ? 600 : 500, fontFamily: "'DM Sans', sans-serif", borderBottom: "1px solid #f9fafb" }}>{l}</a>)}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
              <button style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: 12, padding: "12px", fontWeight: 500, fontSize: 15, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", color: "#374151" }}>Log in</button>
              <button style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff", border: "none", borderRadius: 12, padding: "12px", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>Start Free Trial</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: isMobile ? "65vh" : "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: isMobile ? "130px 20px 64px" : "140px 24px 80px", background: "radial-gradient(ellipse 80% 60% at 50% 0%, #dbeafe 0%, #fff 70%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 60, left: "5%", width: isMobile ? 150 : 300, height: isMobile ? 150 : 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(147,197,253,0.3),transparent 70%)", animation: "float 7s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 160, right: "5%", width: isMobile ? 100 : 200, height: isMobile ? 100 : 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(196,181,253,0.2),transparent 70%)", animation: "float 9s 2s ease-in-out infinite", pointerEvents: "none" }} />
        {!isMobile && <>
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 600, height: 600, borderRadius: "50%", border: "1px dashed rgba(37,99,235,0.1)", animation: "rotateSlow 40s linear infinite", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 800, height: 800, borderRadius: "50%", border: "1px dashed rgba(37,99,235,0.06)", animation: "rotateSlow 60s linear infinite reverse", pointerEvents: "none" }} />
        </>}
        <div className={heroVisible ? "hero-badge" : ""} style={{ opacity: 0 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 50, padding: "7px 16px", marginBottom: 24 }}>
            <span style={{ fontSize: 12 }}>🦊</span>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Our Story</span>
          </div>
        </div>
        <h1 className={heroVisible ? "hero-title" : ""} style={{ opacity: 0, fontSize: "clamp(28px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, color: "#0f172a", maxWidth: 820, fontFamily: "'Sora', sans-serif", marginBottom: 20 }}>
          We're on a mission to make<br />
          <span style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed,#2563eb)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 3s linear infinite" }}>every screen count</span>
        </h1>
        <p className={heroVisible ? "hero-sub" : ""} style={{ opacity: 0, color: "#64748b", fontSize: "clamp(14px,1.8vw,19px)", maxWidth: 560, lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif" }}>
          FOXMEDIA was built by a team frustrated by how hard it was to manage digital screens. We decided to fix that — for every business in India.
        </p>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: sp }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 18 }}>
              <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>How We Started</span>
            </div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px,3vw,40px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1, marginBottom: 20, lineHeight: 1.2 }}>A hotel lobby changed everything</h2>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>In 2019, our co-founder Aditya walked into a hotel in Mumbai and watched a staff member manually carry a USB drive to update every screen in the lobby. It took 45 minutes just to change a menu.</p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>He called Sneha that night. Within a week they had a prototype. Within a month, they had their first paying customer.</p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>Five years later, we manage over 12,000 screens across India.</p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ background: "linear-gradient(145deg,#1d4ed8,#2563eb)", borderRadius: 24, padding: isMobile ? "36px 28px" : "48px 40px", boxShadow: "0 24px 64px rgba(37,99,235,0.3)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>🦊</div>
                <blockquote style={{ fontFamily: "'Sora', sans-serif", fontSize: isMobile ? 18 : 21, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 24 }}>"If one hotel has this problem, every hotel does."</blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "'Sora', sans-serif" }}>AK</div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'Sora', sans-serif" }}>Aditya Kapoor</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>Co-Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
            {!isMobile && (
              <div style={{ position: "absolute", bottom: -18, left: -18, background: "#fff", borderRadius: 16, padding: "14px 18px", boxShadow: "0 12px 36px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📈</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "#111827", fontFamily: "'Sora', sans-serif" }}>12,000+</div>
                  <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "'DM Sans', sans-serif" }}>Screens Managed</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{ padding: isMobile ? "56px 20px" : "80px 48px", background: "linear-gradient(135deg,#1e3a5f,#1d4ed8)" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 32 : 48, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          {stats.map((s, i) => <StatCard key={i} value={s.value} label={s.label} start={statsInView} />)}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: sp }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 14 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Our Values</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1 }}>What we stand for</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(280px,1fr))", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {values.map((v, i) => <ValueCard key={i} {...v} delay={i * 80} />)}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: sp, background: "#f8faff" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 14 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Our Journey</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1 }}>From idea to 12,000 screens</h2>
        </div>
        <div style={{ maxWidth: isMobile ? 480 : 900, margin: "0 auto", position: "relative" }}>
          {!isMobile && <div className="timeline-line-desktop" />}
          {milestones.map((m, i) => <TimelineItem key={i} milestone={m} index={i} isMobile={isMobile} />)}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: sp }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 14 }}>
            <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>The Team</span>
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px,3.5vw,44px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1, marginBottom: 12 }}>The people behind FOXMEDIA</h2>
          <p style={{ color: "#6b7280", fontSize: 16, fontFamily: "'DM Sans', sans-serif", maxWidth: 480, margin: "0 auto" }}>A small but mighty team of builders, designers, and customer champions.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(280px,1fr))", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {team.map((member, i) => <TeamCard key={i} member={member} delay={i * 80} />)}
        </div>
      </section>

      {/* ── CULTURE ── */}
      <section style={{ padding: sp, background: "#f8faff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "#eff6ff", borderRadius: 50, padding: "6px 18px", marginBottom: 18 }}>
              <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>Life at FOXMEDIA</span>
            </div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px,3vw,40px)", fontWeight: 800, color: "#0f172a", letterSpacing: -1, marginBottom: 20, lineHeight: 1.2 }}>We're hiring people who care</h2>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>We're a remote-first team across Mumbai, Bangalore, and Delhi. We value ownership, speed, and kindness — in that order.</p>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.8, marginBottom: 28, fontFamily: "'DM Sans', sans-serif" }}>If you're excited about helping businesses communicate better through technology, we'd love to hear from you.</p>
            <button style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff", border: "none", borderRadius: 14, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora', sans-serif", boxShadow: "0 8px 24px rgba(37,99,235,0.35)", transition: "transform 0.2s", width: isMobile ? "100%" : "auto" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}>View Open Roles →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[{ icon: "🏠", title: "Remote-First", desc: "Work from anywhere in India" }, { icon: "📚", title: "Learning Budget", desc: "₹25K/year for courses & books" }, { icon: "🏥", title: "Health Insurance", desc: "Full family coverage included" }, { icon: "⏰", title: "Flexible Hours", desc: "Async-friendly, no micromanagement" }].map((perk, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "20px 16px", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{perk.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 5, fontFamily: "'Sora', sans-serif" }}>{perk.title}</div>
                <div style={{ fontSize: 12, color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>{perk.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ margin: isMobile ? "0 16px 60px" : "80px 48px", borderRadius: 24, background: "linear-gradient(135deg,#1d4ed8 0%,#2563eb 50%,#7c3aed 100%)", padding: isMobile ? "56px 24px" : "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 42, marginBottom: 14 }}>👋</div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px,3.5vw,44px)", fontWeight: 800, color: "#fff", marginBottom: 14, letterSpacing: -1 }}>Let's build something together</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 15 : 17, marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>Whether you're a customer, partner, investor, or future teammate — we'd love to connect.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "#fff", color: "#1d4ed8", border: "none", borderRadius: 14, padding: isMobile ? "13px 26px" : "16px 36px", fontSize: isMobile ? 15 : 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora', sans-serif", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", transition: "transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}>Start Free Trial →</button>
            <button style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 14, padding: isMobile ? "13px 22px" : "16px 32px", fontSize: isMobile ? 15 : 16, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", backdropFilter: "blur(4px)", transition: "transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)" }}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: isMobile ? "48px 20px 28px" : "64px 48px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? 28 : 48, marginBottom: 40 }}>
            <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🦊</div>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 17, color: "#fff" }}>FOX<span style={{ color: "#60a5fa" }}>MEDIA</span></span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 260, fontFamily: "'DM Sans', sans-serif" }}>The most powerful cloud-based digital signage platform for businesses across India.</p>
              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                {["𝕏", "in", "f"].map(s => (
                  <div key={s} style={{ width: 34, height: 34, borderRadius: 9, background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 13, color: "#94a3b8", transition: "background 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#2563eb" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#1e293b" }}>{s}</div>
                ))}
              </div>
            </div>
            {[{ title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] }, { title: "Company", links: ["About Us", "Blog", "Careers", "Contact"] }, { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"] }].map(col => (
              <div key={col.title}>
                <h4 style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 16 }}>{col.title}</h4>
                {col.links.map(l => (
                  <div key={l} style={{ marginBottom: 9 }}>
                    <a href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13, fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
                      onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = "#60a5fa" }}
                      onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = "#94a3b8" }}>{l}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #1e293b", paddingTop: 20, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: isMobile ? 6 : 0, textAlign: "center" }}>
            <span style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>© 2024 FOXMEDIA. All rights reserved.</span>
            <span style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>Made with ❤️ in India</span>
          </div>
        </div>
      </footer>
    </div>
  )
}