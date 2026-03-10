'use client'
import Link from "next/link"
import { useState } from "react"
import {
  Building2, Mail, MapPin, Globe, User, Phone, Lock,
  Monitor, Tv, Wifi, Upload, Users, PlaySquare,
  ChevronLeft, ChevronRight, Check, Plus, X, ArrowRight,
  Store, Hotel, GraduationCap, Coffee, Zap, Settings,
} from "lucide-react"

/* ══════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════ */
type Step = 0 | 1 | 2 | 3 | 4

const STEP_CONFIG = [
  { label: "Company", icon: Building2 },
  { label: "Account", icon: User },
  { label: "Display", icon: Monitor },
  { label: "Content", icon: Upload },
  { label: "Team",    icon: Users },
]

const INDUSTRIES = [
  { id: "retail",     icon: Store,         label: "Retail"       },
  { id: "hotel",      icon: Hotel,         label: "Hospitality"  },
  { id: "corporate",  icon: Building2,     label: "Corporate"    },
  { id: "education",  icon: GraduationCap, label: "Education"    },
  { id: "food",       icon: Coffee,        label: "Food & Bev"   },
  { id: "healthcare", icon: Users,         label: "Healthcare"   },
]

const COUNTRIES = ["India", "UAE", "Singapore", "United Kingdom", "United States", "Australia", "Other"]
const ROLES     = ["Owner / Founder", "Operations Manager", "IT Manager", "Marketing", "Other"]

/* ══════════════════════════════════════════════
   STEP PROGRESS BAR  (matches inspiration UI)
══════════════════════════════════════════════ */
function StepProgress({ current }: { current: Step }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 0, marginBottom: 40 }}>
      {STEP_CONFIG.map((s, i) => {
        const done   = i < current
        const active = i === current
        const Icon   = s.icon
        return (
          <div key={i} style={{ display: "flex", alignItems: "flex-start" }}>
            {/* Step node */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, minWidth: 80 }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: done || active ? "linear-gradient(135deg,#2563eb,#1d4ed8)" : "#f1f5f9",
                boxShadow: active ? "0 0 0 5px rgba(37,99,235,0.15)" : done ? "0 4px 14px rgba(37,99,235,0.3)" : "none",
                transition: "all 0.35s ease",
              }}>
                {done
                  ? <Check size={20} color="#fff" strokeWidth={3} />
                  : <Icon size={20} color={active ? "#fff" : "#94a3b8"} />
                }
              </div>
              <span style={{
                fontSize: 12, fontWeight: active ? 700 : 500,
                color: active ? "#2563eb" : done ? "#374151" : "#9ca3af",
                fontFamily: "'Sora', sans-serif",
                textAlign: "center",
              }}>
                {s.label}
              </span>
            </div>
            {/* Connector line */}
            {i < STEP_CONFIG.length - 1 && (
              <div style={{
                height: 2, width: 64, marginTop: 23, flexShrink: 0,
                background: i < current
                  ? "linear-gradient(90deg,#2563eb,#1d4ed8)"
                  : "#e2e8f0",
                transition: "background 0.4s ease",
              }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ══════════════════════════════════════════════
   SHARED FORM COMPONENTS
══════════════════════════════════════════════ */
const baseInput: React.CSSProperties = {
  width: "100%", padding: "11px 14px",
  border: "1px solid #e5e7eb", borderRadius: 12,
  fontSize: 14, color: "#111827",
  fontFamily: "'DM Sans', sans-serif",
  background: "#fff", outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ElementType }) {
  const { icon: Icon, style, ...rest } = props
  return (
    <div style={{ position: "relative" }}>
      {Icon && <Icon size={15} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", pointerEvents: "none" }} />}
      <input
        {...rest}
        style={{ ...baseInput, paddingLeft: Icon ? 38 : 14, ...style }}
        onFocus={e => { e.target.style.borderColor = "#2563eb"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)" }}
        onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none" }}
      />
    </div>
  )
}

function Select({ children, icon: Icon, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { icon?: React.ElementType }) {
  return (
    <div style={{ position: "relative" }}>
      {Icon && <Icon size={15} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", pointerEvents: "none", zIndex: 1 }} />}
      <select
        {...props}
        style={{
          ...baseInput,
          paddingLeft: Icon ? 38 : 14,
          paddingRight: 36, cursor: "pointer",
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
        }}
        onFocus={e => { e.target.style.borderColor = "#2563eb"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)" }}
        onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none" }}
      >
        {children}
      </select>
    </div>
  )
}

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>
      {children}{required && <span style={{ color: "#2563eb", marginLeft: 2 }}>*</span>}
    </label>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      {children}
    </div>
  )
}

/* ── Section card (grey header + white body like inspiration) ── */
function StepCard({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden" }}>
      {/* Grey header */}
      <div style={{ padding: "20px 28px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#111827", fontFamily: "'Sora', sans-serif", letterSpacing: -0.4 }}>{title}</h2>
        <p style={{ fontSize: 13, color: "#6b7280", marginTop: 3, fontFamily: "'DM Sans', sans-serif" }}>{sub}</p>
      </div>
      {/* White body */}
      <div style={{ padding: "28px" }}>{children}</div>
    </div>
  )
}

/* ── Nav buttons (Previous / Step X of 5 / Next) ── */
function NavButtons({
  step, onBack, onNext, nextLabel = "Next", nextDisabled = false,
}: {
  step: Step; onBack: () => void; onNext: () => void;
  nextLabel?: string; nextDisabled?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 28, paddingTop: 20, borderTop: "1px solid #f3f4f6" }}>
      {/* Previous */}
      <button
        onClick={onBack} disabled={step === 0}
        style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 12, border: "1px solid #e5e7eb", background: "#fff", color: step === 0 ? "#d1d5db" : "#374151", fontSize: 14, fontWeight: 600, cursor: step === 0 ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }}
        onMouseEnter={e => { if (step > 0) { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.color = "#2563eb" } }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = step === 0 ? "#d1d5db" : "#374151" }}
      >
        <ChevronLeft size={16} /> Previous
      </button>

      {/* Step counter */}
      <span style={{ fontSize: 13, color: "#9ca3af", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
        Step {step + 1} of 5
      </span>

      {/* Next */}
      <button
        onClick={onNext} disabled={nextDisabled}
        style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 24px", borderRadius: 12, border: "none", background: nextDisabled ? "#e5e7eb" : "linear-gradient(135deg,#2563eb,#1d4ed8)", color: nextDisabled ? "#9ca3af" : "#fff", fontSize: 14, fontWeight: 700, cursor: nextDisabled ? "not-allowed" : "pointer", fontFamily: "'Sora', sans-serif", boxShadow: nextDisabled ? "none" : "0 4px 14px rgba(37,99,235,0.35)", transition: "all 0.2s" }}
        onMouseEnter={e => { if (!nextDisabled) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,99,235,0.45)" } }}
        onMouseLeave={e => { if (!nextDisabled) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,99,235,0.35)" } }}
      >
        {nextLabel} <ChevronRight size={16} />
      </button>
    </div>
  )
}

/* ══════════════════════════════════════════════
   STEP 0 — COMPANY
══════════════════════════════════════════════ */
function StepCompany({ onNext }: { onNext: () => void }) {
  const [name,     setName]     = useState("")
  const [email,    setEmail]    = useState("")
  const [industry, setIndustry] = useState("")
  const [country,  setCountry]  = useState("")
  const valid = name.trim() && email.trim() && industry && country

  return (
    <StepCard title="Company" sub="Organisation details">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <Field label="Company Name" required>
          <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your company" icon={Building2} />
        </Field>
        <Field label="Company Email" required>
          <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="company@example.com" icon={Mail} type="email" />
        </Field>
        <Field label="Industry" required>
          <Select value={industry} onChange={e => setIndustry(e.target.value)} icon={Zap}>
            <option value="">Select industry</option>
            {INDUSTRIES.map(i => <option key={i.id} value={i.id}>{i.label}</option>)}
          </Select>
        </Field>
        <Field label="Country" required>
          <Select value={country} onChange={e => setCountry(e.target.value)} icon={Globe}>
            <option value="">Select country</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </Select>
        </Field>
      </div>

      {/* Quick-pick industry tiles */}
      <div style={{ marginTop: 8 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 10, fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>Quick select</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
          {INDUSTRIES.map(({ id, icon: Icon, label }) => {
            const sel = industry === id
            return (
              <button key={id} onClick={() => setIndustry(id)}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, border: `1.5px solid ${sel ? "#2563eb" : "#e5e7eb"}`, background: sel ? "#eff6ff" : "#fff", color: sel ? "#2563eb" : "#6b7280", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.18s" }}
                onMouseEnter={e => { if (!sel) { e.currentTarget.style.borderColor = "#bfdbfe"; e.currentTarget.style.background = "#f8faff" } }}
                onMouseLeave={e => { if (!sel) { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fff" } }}
              >
                <Icon size={14} style={{ color: sel ? "#2563eb" : "#94a3b8", flexShrink: 0 }} />
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <NavButtons step={0} onBack={() => {}} onNext={onNext} nextDisabled={!valid} />
    </StepCard>
  )
}

/* ══════════════════════════════════════════════
   STEP 1 — ACCOUNT
══════════════════════════════════════════════ */
function StepAccount({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [role,  setRole]  = useState("")
  const [pass,  setPass]  = useState("")
  const [pass2, setPass2] = useState("")
  const passMatch = pass === pass2
  const valid = fname.trim() && lname.trim() && pass.length >= 8 && passMatch

  return (
    <StepCard title="Account" sub="Your personal account details">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="First Name" required>
          <Input value={fname} onChange={e => setFname(e.target.value)} placeholder="Aditya" icon={User} />
        </Field>
        <Field label="Last Name" required>
          <Input value={lname} onChange={e => setLname(e.target.value)} placeholder="Kapoor" />
        </Field>
        <Field label="Phone Number">
          <Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" icon={Phone} type="tel" />
        </Field>
        <Field label="Your Role">
          <Select value={role} onChange={e => setRole(e.target.value)} icon={Settings}>
            <option value="">Select role</option>
            {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
          </Select>
        </Field>
        <Field label="Password" required>
          <Input value={pass} onChange={e => setPass(e.target.value)} placeholder="Min. 8 characters" icon={Lock} type="password" />
        </Field>
        <Field label="Confirm Password" required>
          <Input
            value={pass2} onChange={e => setPass2(e.target.value)} placeholder="Repeat password" icon={Lock} type="password"
            style={{ borderColor: pass2 && !passMatch ? "#fca5a5" : "#e5e7eb" }}
          />
          {pass2 && !passMatch && <p style={{ fontSize: 12, color: "#ef4444", marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>Passwords don't match</p>}
        </Field>
      </div>
      <NavButtons step={1} onBack={onBack} onNext={onNext} nextDisabled={!valid} />
    </StepCard>
  )
}

/* ══════════════════════════════════════════════
   STEP 2 — DISPLAY
══════════════════════════════════════════════ */
function StepDisplay({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [screens, setScreens] = useState<{ name: string; loc: string }[]>([])
  const [sName,  setSName]  = useState("")
  const [sLoc,   setSLoc]   = useState("")
  const [adding, setAdding] = useState(false)

  const add = () => {
    if (!sName.trim()) return
    setScreens(p => [...p, { name: sName.trim(), loc: sLoc.trim() || "Not specified" }])
    setSName(""); setSLoc(""); setAdding(false)
  }

  return (
    <StepCard title="Display" sub="Connect your screens. You can always add more later.">
      {/* How-to steps */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
        {[
          { icon: Tv,      n: "1", title: "Connect screen",   desc: "Any TV or monitor" },
          { icon: Wifi,    n: "2", title: "Install FOXMEDIA",  desc: "Free app on device" },
          { icon: Monitor, n: "3", title: "Enter pair code",   desc: "Shown on your screen" },
        ].map(({ icon: Icon, n, title, desc }) => (
          <div key={n} style={{ padding: "14px 12px", borderRadius: 12, background: "#f8faff", border: "1px solid #eff6ff", textAlign: "center" }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", margin: "0 auto 8px", boxShadow: "0 4px 10px rgba(37,99,235,0.3)" }}>{n}</div>
            <Icon size={17} style={{ color: "#2563eb", margin: "0 auto 5px", display: "block" }} />
            <div style={{ fontSize: 12, fontWeight: 700, color: "#374151", fontFamily: "'DM Sans', sans-serif" }}>{title}</div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2, fontFamily: "'DM Sans', sans-serif" }}>{desc}</div>
          </div>
        ))}
      </div>

      {/* Added screens list */}
      {screens.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
          {screens.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 12, background: "#eff6ff", border: "1px solid #bfdbfe" }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Monitor size={15} color="#fff" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#1e40af", fontFamily: "'DM Sans', sans-serif" }}>{s.name}</p>
                <p style={{ fontSize: 11, color: "#6b7280", fontFamily: "'DM Sans', sans-serif" }}>{s.loc}</p>
              </div>
              <button onClick={() => setScreens(p => p.filter((_, j) => j !== i))} style={{ width: 26, height: 26, borderRadius: 8, background: "#fee2e2", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={12} color="#ef4444" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add form / dashed button */}
      {adding ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 16, borderRadius: 12, border: "2px dashed #2563eb", background: "#f8faff", marginBottom: 4 }}>
          <Input value={sName} onChange={e => setSName(e.target.value)} placeholder="Screen name (e.g. Lobby Display)" icon={Monitor} />
          <Input value={sLoc}  onChange={e => setSLoc(e.target.value)}  placeholder="Location (e.g. Mumbai HQ, Floor 1)" icon={MapPin} />
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={add} style={{ flex: 1, padding: "10px", borderRadius: 10, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora', sans-serif", boxShadow: "0 4px 12px rgba(37,99,235,0.3)" }}>
              Add Screen
            </button>
            <button onClick={() => setAdding(false)} style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", color: "#6b7280", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setAdding(true)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "11px", borderRadius: 12, border: "2px dashed #e5e7eb", background: "#fff", color: "#9ca3af", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s", marginBottom: 4 }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#93c5fd"; e.currentTarget.style.color = "#2563eb"; e.currentTarget.style.background = "#f8faff" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#9ca3af"; e.currentTarget.style.background = "#fff" }}
        >
          <Plus size={15} /> Add a Screen
        </button>
      )}

      <NavButtons step={2} onBack={onBack} onNext={onNext}
        nextLabel={screens.length === 0 ? "Skip for now" : `Continue (${screens.length} screen${screens.length > 1 ? "s" : ""})`} />
    </StepCard>
  )
}

/* ══════════════════════════════════════════════
   STEP 3 — CONTENT
══════════════════════════════════════════════ */
function StepContent({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [playlist, setPlaylist] = useState("")
  const [uploaded, setUploaded] = useState(false)

  return (
    <StepCard title="Content" sub="Set up your first playlist and upload media.">
      <div style={{ marginBottom: 16 }}>
        <Field label="Playlist Name">
          <Input value={playlist} onChange={e => setPlaylist(e.target.value)} placeholder="e.g. Morning Promotions" icon={PlaySquare} />
        </Field>
      </div>

      {/* Supported formats */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 10, fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>Supported formats</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
          {[
            { emoji: "🖼️", label: "Images",   fmt: "JPG, PNG, GIF, WebP" },
            { emoji: "🎬", label: "Videos",   fmt: "MP4, WebM"           },
            { emoji: "📄", label: "PDFs",     fmt: "PDF documents"        },
            { emoji: "🌐", label: "Web URLs", fmt: "Any live web page"    },
          ].map(ct => (
            <div key={ct.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 12, background: "#f8faff", border: "1px solid #eff6ff" }}>
              <span style={{ fontSize: 20 }}>{ct.emoji}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", fontFamily: "'DM Sans', sans-serif" }}>{ct.label}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>{ct.fmt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload zone */}
      <button onClick={() => setUploaded(true)}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "28px 20px", borderRadius: 14, border: `2px dashed ${uploaded ? "#2563eb" : "#e5e7eb"}`, background: uploaded ? "#eff6ff" : "#fafafa", cursor: "pointer", transition: "all 0.2s", marginBottom: 4 }}
        onMouseEnter={e => { if (!uploaded) { e.currentTarget.style.borderColor = "#93c5fd"; e.currentTarget.style.background = "#f8faff" } }}
        onMouseLeave={e => { if (!uploaded) { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fafafa" } }}
      >
        {uploaded ? (
          <>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(37,99,235,0.35)" }}>
              <Check size={20} color="#fff" strokeWidth={3} />
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#1e40af", fontFamily: "'DM Sans', sans-serif" }}>Content ready!</p>
            <p style={{ fontSize: 12, color: "#6b7280", fontFamily: "'DM Sans', sans-serif" }}>Click to upload more</p>
          </>
        ) : (
          <>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Upload size={20} color="#2563eb" />
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#374151", fontFamily: "'DM Sans', sans-serif" }}>Click to upload media</p>
            <p style={{ fontSize: 12, color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>or drag & drop your files here</p>
          </>
        )}
      </button>

      <NavButtons step={3} onBack={onBack} onNext={onNext} />
    </StepCard>
  )
}

/* ══════════════════════════════════════════════
   STEP 4 — TEAM
══════════════════════════════════════════════ */
function StepTeam({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [input,  setInput]  = useState("")
  const [emails, setEmails] = useState<string[]>([])
  const [error,  setError]  = useState("")

  const addEmail = () => {
    const e = input.trim().toLowerCase()
    if (!e) return
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) { setError("Enter a valid email address."); return }
    if (emails.includes(e)) { setError("This email is already added."); return }
    setEmails(p => [...p, e]); setInput(""); setError("")
  }

  return (
    <StepCard title="Team" sub="Invite teammates to collaborate on screens and content.">
      {/* Role pills */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {[
          { role: "Admin",  desc: "Full access",    bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
          { role: "Editor", desc: "Manage content", bg: "#f5f3ff", color: "#7c3aed", border: "#ddd6fe" },
          { role: "Viewer", desc: "View only",      bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
        ].map(r => (
          <div key={r.role} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 50, background: r.bg, border: `1px solid ${r.border}` }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: r.color, fontFamily: "'DM Sans', sans-serif" }}>{r.role}</span>
            <span style={{ fontSize: 11, color: "#9ca3af" }}>— {r.desc}</span>
          </div>
        ))}
      </div>

      {/* Email input */}
      <div style={{ marginBottom: 16 }}>
        <Field label="Invite by Email">
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <Input
                value={input}
                onChange={e => { setInput(e.target.value); setError("") }}
                onKeyDown={e => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addEmail() } }}
                placeholder="teammate@company.com"
                icon={Mail}
                style={{ borderColor: error ? "#fca5a5" : "#e5e7eb" }}
              />
            </div>
            <button onClick={addEmail}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "11px 18px", borderRadius: 12, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora', sans-serif", boxShadow: "0 4px 12px rgba(37,99,235,0.3)", flexShrink: 0, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,99,235,0.4)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(37,99,235,0.3)" }}
            >
              <Plus size={15} /> Invite
            </button>
          </div>
          {error
            ? <p style={{ fontSize: 12, color: "#ef4444", marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>{error}</p>
            : <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>Press Enter or comma to add multiple</p>
          }
        </Field>
      </div>

      {/* Invited list */}
      {emails.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", fontFamily: "'DM Sans', sans-serif" }}>{emails.length} invite{emails.length > 1 ? "s" : ""} queued</p>
          {emails.map(e => (
            <div key={e} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 12, background: "#f8faff", border: "1px solid #eff6ff" }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#2563eb,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: "'Sora', sans-serif", flexShrink: 0 }}>
                {e[0].toUpperCase()}
              </div>
              <span style={{ flex: 1, fontSize: 13, color: "#374151", fontFamily: "'DM Sans', sans-serif" }}>{e}</span>
              <button onClick={() => setEmails(p => p.filter(x => x !== e))} style={{ width: 26, height: 26, borderRadius: 8, background: "#fee2e2", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={12} color="#ef4444" />
              </button>
            </div>
          ))}
        </div>
      )}

      <NavButtons step={4} onBack={onBack} onNext={onNext}
        nextLabel={emails.length === 0 ? "Skip & Finish" : `Send ${emails.length} Invite${emails.length > 1 ? "s" : ""}`} />
    </StepCard>
  )
}

/* ══════════════════════════════════════════════
   DONE SCREEN
══════════════════════════════════════════════ */
function DoneScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "12px 0 24px" }}>
      {/* Big check */}
      <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 16px 40px rgba(37,99,235,0.35)", marginBottom: 24 }}>
        <Check size={38} color="#fff" strokeWidth={3} />
      </div>

      <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", letterSpacing: -0.6, fontFamily: "'Sora', sans-serif", marginBottom: 10 }}>
        You're all set! 🚀
      </h2>
      <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, maxWidth: 400, fontFamily: "'DM Sans', sans-serif", marginBottom: 28 }}>
        Your FOXMEDIA account is ready. Start managing screens like a pro — 14-day free trial, no card required.
      </p>

      {/* Summary list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 360, marginBottom: 28 }}>
        {["Account created", "Company info saved", "Screens configured", "Team invited"].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", borderRadius: 12, background: "#eff6ff", border: "1px solid #bfdbfe" }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Check size={11} color="#fff" strokeWidth={3} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#1e40af", fontFamily: "'DM Sans', sans-serif" }}>{t}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 360 }}>
        <Link href="/user/dashboard"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 24px", borderRadius: 14, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 700, fontFamily: "'Sora', sans-serif", boxShadow: "0 8px 24px rgba(37,99,235,0.4)", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(37,99,235,0.5)" }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.4)" }}
        >
          Go to Dashboard <ArrowRight size={17} />
        </Link>
        <Link href="/user/screens/new"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 24px", borderRadius: 14, border: "1px solid #e5e7eb", color: "#374151", textDecoration: "none", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.color = "#2563eb" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#374151" }}
        >
          <Monitor size={15} /> Add your first screen
        </Link>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════ */
export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(0)
  const [done, setDone] = useState(false)

  const next = () => {
    if (step === 4) { setDone(true); return }
    setStep(s => (s + 1) as Step)
  }
  const back = () => setStep(s => (s - 1) as Step)

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dbeafe 0%, #fff 65%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "40px 16px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: #9ca3af; }
        select option { font-family: 'DM Sans', sans-serif; }
        @media (max-width: 600px) {
          .onb-grid { grid-template-columns: 1fr !important; }
          .onb-stepper { gap: 0 !important; }
          .onb-stepper .connector { width: 20px !important; }
          .onb-step-label { font-size: 10px !important; }
          .onb-card-pad { padding: 20px !important; }
        }
      `}</style>

      {/* ── Logo ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, boxShadow: "0 6px 18px rgba(37,99,235,0.4)" }}>🦊</div>
        <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 22, color: "#111827", letterSpacing: -0.5 }}>
          FOX<span style={{ color: "#2563eb" }}>MEDIA</span>
        </span>
      </div>

      {/* ── Welcome text ── */}
      {!done && (
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: "clamp(22px,3vw,28px)", fontWeight: 800, color: "#0f172a", fontFamily: "'Sora', sans-serif", letterSpacing: -0.6 }}>
            Welcome to FOXMEDIA
          </h1>
          <p style={{ fontSize: 15, color: "#6b7280", marginTop: 7, fontFamily: "'DM Sans', sans-serif" }}>
            Let's get your digital signage up and running in 5 minutes
          </p>
        </div>
      )}

      {/* ── Step progress ── */}
      {!done && (
        <div style={{ width: "100%", maxWidth: 700, overflowX: "auto", paddingBottom: 4 }}>
          <StepProgress current={step} />
        </div>
      )}

      {/* ── Main card ── */}
      <div style={{
        width: "100%", maxWidth: done ? 500 : 700,
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #e5e7eb",
        boxShadow: "0 8px 40px rgba(37,99,235,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        overflow: "hidden",
      }}>
        {/* Progress bar */}
        {!done && (
          <div style={{ height: 4, background: "#e5e7eb" }}>
            <div style={{ height: "100%", width: `${((step + 1) / 5) * 100}%`, background: "linear-gradient(90deg,#2563eb,#1d4ed8)", transition: "width 0.4s ease" }} />
          </div>
        )}

        <div style={{ padding: done ? "36px 32px" : "0" }}>
          {!done && step === 0 && <StepCompany  onNext={next} />}
          {!done && step === 1 && <StepAccount  onNext={next} onBack={back} />}
          {!done && step === 2 && <StepDisplay  onNext={next} onBack={back} />}
          {!done && step === 3 && <StepContent  onNext={next} onBack={back} />}
          {!done && step === 4 && <StepTeam     onNext={next} onBack={back} />}
          {done && <DoneScreen />}
        </div>
      </div>

      {/* ── Footer ── */}
      {!done && (
        <p style={{ marginTop: 20, fontSize: 13, color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>Sign in →</Link>
        </p>
      )}
    </div>
  )
}