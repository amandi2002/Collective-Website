import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle2, ShieldAlert, GraduationCap, FileSearch, Stethoscope, ClipboardList } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Coding & Audits | Collective RCM",
    description:
        "Professional and facility coding, documentation audits, education, and compliance support—built to improve clean claims and reduce audit exposure.",
};

const items = [
    { icon: GraduationCap, title: "Collective knowledge", desc: "Staff training curricula and best-practice playbooks so clinics stay aligned with federal guidance and payer policy shifts as fee schedules and edits change." },
    { icon: ShieldAlert, title: "Risk mitigation", desc: "Documentation and coding workflows designed to reduce audit triggers and penalties—especially where complexity is high (E/M, modifiers, infusion, surgical bundles)." },
    { icon: CheckCircle2, title: "Collective reasoning", desc: "Certified coders focused on accuracy and defensibility. We support outsourced coding, overflow coverage, and specialty-specific logic to protect reimbursement." },
];

const offerings = [
    {
        icon: FileSearch,
        title: "Prospective & retrospective reviews",
        body: "Targeted reviews before claims go out, plus look-backs where denial patterns or compliance risk signal a deeper documentation issue.",
    },
    {
        icon: ClipboardList,
        title: "Audit response support",
        body: "Structured responses for payer and government audits with clear narratives, evidence packaging, and corrective action plans to prevent repeat findings.",
    },
    {
        icon: Stethoscope,
        title: "Clinical documentation improvement (CDI) alignment",
        body: "Bridge coding, CDI, and provider education so what is documented supports what is billed—without creating unnecessary friction at the point of care.",
    },
];

const outcomes = [
    "Higher first-pass acceptance through cleaner encounter data and coding consistency.",
    "Fewer downgrades and denials tied to incomplete documentation or modifier gaps.",
    "A defensible audit trail: queries, rationale, and policy references your compliance team can stand behind.",
    "Education that sticks—coders and clinicians share the same definitions for “done correctly.”",
];

export default function CodingAuditsPage() {
    return (
        <main>
            <PageHero
                title="Coding & Audits"
                description="Comprehensive facility and professional coding services, coding audits, education, and ICD-10 expertise—so claims are accurate, compliant, and collectible."
                badge="Auditing"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3.5rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>Trustworthy coding partners</h2>
                            <div style={{ display: "grid", gap: "1.25rem", maxWidth: "820px" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Coding is never “set and forget.” Payer edits, annual code updates, and documentation expectations shift constantly—and the cost of being behind shows up as denials, takebacks, and audit exposure.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Our certified coders stay current on CPT and ICD-10-CM/PCS guidance and apply it with a practical lens: what will pass a payer edit, what will survive scrutiny, and what your team can sustain day to day.
                                </p>
                            </div>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {items.map((b, i) => (
                                <AnimatedSection key={b.title} animation="fade-up" delay={i * 150}>
                                    <div className="glass" style={{ padding: "2.5rem", borderRadius: "1rem", height: "100%", border: "1px solid var(--border-color)", background: "white" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "1rem", backgroundColor: "rgba(217, 4, 41, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                            <b.icon size={32} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <h3 className="heading-3" style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>{b.title}</h3>
                                        <p className="text-body" style={{ fontSize: "1rem" }}>{b.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection animation="fade-up" delay={120}>
                            <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>What we deliver</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                                {offerings.map((o) => (
                                    <div
                                        key={o.title}
                                        style={{
                                            padding: "1.75rem",
                                            borderRadius: "1rem",
                                            border: "1px solid var(--border-color)",
                                            background: "#fff",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.75rem",
                                        }}
                                    >
                                        <o.icon size={22} style={{ color: "var(--primary-color)" }} />
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0, color: "var(--secondary-color)" }}>{o.title}</h3>
                                        <p className="text-body" style={{ fontSize: "0.95rem", margin: 0 }}>{o.body}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={180}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Outcomes organizations measure</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "1.25rem" }}>
                                Programs differ by specialty and baseline, but strong coding partnerships consistently move a few levers that leadership can see in reporting and cash.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, maxWidth: "820px", display: "grid", gap: "0.75rem" }}>
                                {outcomes.map((t) => (
                                    <li
                                        key={t}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "auto 1fr",
                                            gap: "0.75rem",
                                            alignItems: "start",
                                            padding: "1rem 1.15rem",
                                            borderRadius: "0.75rem",
                                            border: "1px solid var(--border-color)",
                                            background: "white",
                                        }}
                                    >
                                        <CheckCircle2 size={20} style={{ color: "var(--primary-color)", marginTop: "0.15rem", flexShrink: 0 }} />
                                        <span className="text-body" style={{ fontSize: "1rem", margin: 0, color: "var(--text-main)" }}>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={220}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white", maxWidth: "820px" }}>
                                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Works alongside the rest of Collective</h3>
                                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                    Coding quality is inseparable from claim submission, denials, and AR. Many clients combine coding and audits with{" "}
                                    <Link href="/services/rcm" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        Revenue Cycle Management
                                    </Link>{" "}
                                    or front-end intelligence from{" "}
                                    <Link href="/services/collective-air/ai-claims-scrubber" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        AI Claims Scrubber
                                    </Link>{" "}
                                    so fixes upstream prevent rework downstream.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="zoom-in" delay={260}>
                            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                    Discuss your coding needs <ArrowRight size={18} />
                                </Link>
                                <Link href="/services/rcm" className="btn btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Explore RCM services
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
