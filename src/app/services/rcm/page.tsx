import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
    ArrowRight,
    BarChart,
    ClipboardCheck,
    Cpu,
    FileSearch,
    Landmark,
    Layers,
    LineChart,
    Receipt,
    Send,
    ShieldCheck,
    TrendingUp,
    Users,
    Wallet,
} from "lucide-react";

export const metadata = {
    title: "Revenue Cycle Management | Collective RCM",
    description:
        "End-to-end and modular RCM: eligibility through collections, denial management, reporting, and automation—delivered by specialists with measurable cash-flow outcomes.",
};

const benefits = [
    { icon: ShieldCheck, title: "Collective expertise", desc: "Our reimbursement strategies relieve you from the costs and headaches of managing billing operations, staffing churn, and bad-debt exposure." },
    { icon: BarChart, title: "Collective capacity", desc: "We combine people, process, and technology to scale quickly and build billing solutions tuned to your specialty, payor mix, and systems." },
    { icon: TrendingUp, title: "Collective return", desc: "Clients target high net collection rates and disciplined days in A/R—so cash arrives faster and revenue leakage is visible, not hidden." },
];

const cycleAreas = [
    {
        icon: FileSearch,
        title: "Access & eligibility",
        body: "Registration accuracy, benefit verification, and authorization tracking—so the claim is clean before the encounter is documented.",
    },
    {
        icon: ClipboardCheck,
        title: "Coding & charge integrity",
        body: "Documentation alignment, charge capture discipline, and coder collaboration to reduce preventable denials and compliance risk.",
    },
    {
        icon: Send,
        title: "Claims submission & edits",
        body: "Scrubbing, payer-specific edits, and timely filing with clear ownership when claims need correction or escalation.",
    },
    {
        icon: Receipt,
        title: "Payment posting & reconciliation",
        body: "ERA/EOB workflows, contractual adjustments, and tight reconciliation so your AR reflects reality—not drift.",
    },
    {
        icon: Landmark,
        title: "Denials, appeals & collections",
        body: "Root-cause denial management, appeal strategy, and follow-up that prioritizes dollars and deadlines—not busywork.",
    },
    {
        icon: LineChart,
        title: "Reporting & benchmarks",
        body: "Executive-ready KPIs, trend visibility, and operational accountability so finance and operations share one version of the truth.",
    },
];

const deliveryModels = [
    {
        title: "Full revenue cycle partnership",
        body: "We operate the end-to-end revenue cycle with defined SLAs, governance, and reporting—ideal when you want outcomes without building a large internal billing bench.",
    },
    {
        title: "Co-managed / hybrid support",
        body: "We embed alongside your team to stabilize high-variance areas (denials, AR, coding backlogs) while you retain control of selected functions.",
    },
    {
        title: "Point solutions",
        body: "Targeted programs for a single pain point—such as denial reduction, aged AR sweeps, or process redesign—without a full outsource commitment.",
    },
];

const outcomes = [
    "Cleaner front-end data that reduces preventable denials and rework.",
    "Faster identification of underpayments, denials, and stalled claims.",
    "Predictable operating cadence: queues, SLAs, and escalation paths your staff can follow.",
    "Transparency into performance by provider, location, payer, and denial category.",
];

export default function RCMPage() {
    return (
        <main>
            <PageHero
                title="Revenue Cycle Management"
                description="High-touch medical billing and reimbursement services designed to collect more cash, faster—while building the process discipline, visibility, and automation that keep improvements from slipping backward."
                badge="Core service"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>Maximize collections without losing control</h2>
                            <div style={{ display: "grid", gap: "1.25rem", maxWidth: "820px" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Revenue cycle work is detail-dense, time-sensitive, and expensive to get wrong. When eligibility, coding, billing, and follow-up drift out of sync, cash flow becomes volatile—and leadership gets stuck reconciling competing stories from disconnected systems.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Collective acts as your operating partner: we take on the execution load, standardize the workflows that drive reimbursement, and report in plain language what changed, what is at risk, and what to do next. You stay focused on patients; we stay accountable to metrics that finance can trust.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={100}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
                                <div>
                                    <h2 className="heading-2" style={{ marginBottom: "1rem" }}>The full cycle, one accountable team</h2>
                                    <p className="text-body" style={{ marginBottom: "1rem" }}>
                                        Whether you need end-to-end support or a modular engagement, we align delivery to the stages that matter most for your organization—without treating the revenue cycle as a disconnected set of tasks.
                                    </p>
                                    <p className="text-body" style={{ margin: 0 }}>
                                        Below is how we think about coverage from patient access through collections and analytics. In practice, your roadmap may emphasize certain lanes first; the important part is sequencing work so improvements stick.
                                    </p>
                                </div>
                                <figure style={{ margin: 0 }}>
                                    <Image
                                        src="/service/rcm.png"
                                        alt="Diagram of Collective RCM services across the revenue cycle: reporting, verification, coding and billing, claims, collections and appeals, denials, payment posting, and credentialing."
                                        width={900}
                                        height={900}
                                        sizes="(max-width: 767px) min(96vw, 520px) (max-width: 1199px) min(90vw, 560px) 480px"
                                        style={{ width: "100%", height: "auto", display: "block", borderRadius: "1rem", border: "1px solid var(--border-color)" }}
                                    />
                                </figure>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={140}>
                            <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Where we strengthen performance</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                                {cycleAreas.map((c) => (
                                    <div
                                        key={c.title}
                                        className="glass"
                                        style={{
                                            padding: "1.75rem",
                                            borderRadius: "1rem",
                                            border: "1px solid var(--border-color)",
                                            background: "white",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.85rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "0.75rem",
                                                backgroundColor: "rgba(217, 4, 41, 0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <c.icon size={24} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <h3 className="heading-3" style={{ fontSize: "1.15rem", margin: 0, color: "var(--secondary-color)" }}>
                                            {c.title}
                                        </h3>
                                        <p className="text-body" style={{ fontSize: "0.98rem", margin: 0 }}>
                                            {c.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={180}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "start" }}>
                                <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "var(--background-dark)" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                        <Layers size={26} style={{ color: "var(--primary-color)" }} />
                                        <h2 className="heading-2" style={{ margin: 0, fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}>
                                            Delivery models
                                        </h2>
                                    </div>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1.25rem" }}>
                                        {deliveryModels.map((m) => (
                                            <li key={m.title}>
                                                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem", color: "var(--secondary-color)" }}>
                                                    {m.title}
                                                </h3>
                                                <p className="text-body" style={{ fontSize: "0.98rem", margin: 0 }}>
                                                    {m.body}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                        <Cpu size={26} style={{ color: "var(--primary-color)" }} />
                                        <h2 className="heading-2" style={{ margin: 0, fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}>
                                            People, process &amp; automation
                                        </h2>
                                    </div>
                                    <p className="text-body" style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                                        We deploy proven automation and AI where it reduces risk and accelerates resolution—without replacing the judgment your organization still needs.
                                    </p>
                                    <p className="text-body" style={{ fontSize: "1rem", marginBottom: "1.25rem" }}>
                                        Explore{" "}
                                        <Link href="/services/collective-air" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                            CollectiveAI™
                                        </Link>{" "}
                                        for intelligent workflows, denial intelligence, and autonomous follow-up that complement a disciplined RCM operation.
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                                        <Users size={18} style={{ flexShrink: 0, color: "var(--primary-color)" }} />
                                        <span>Led by experienced client management and operational leadership—not black-box outsourcing.</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={220}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>What “better” looks like on your ledger</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "1.5rem" }}>
                                Targets vary by specialty, contract mix, and baseline performance—but strong programs share the same signals: fewer preventable denials, faster resolution of true denials, and AR that reflects what you expect to collect.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", maxWidth: "820px", display: "grid", gap: "0.85rem" }}>
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
                                            background: "var(--surface-color)",
                                        }}
                                    >
                                        <Wallet size={20} style={{ color: "var(--primary-color)", marginTop: "0.15rem", flexShrink: 0 }} />
                                        <span className="text-body" style={{ fontSize: "1rem", margin: 0, color: "var(--text-main)" }}>
                                            {t}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {benefits.map((b, i) => (
                                <AnimatedSection key={b.title} animation="fade-up" delay={i * 120}>
                                    <div className="glass" style={{ padding: "2.5rem", borderRadius: "1rem", height: "100%", border: "1px solid var(--border-color)", background: "white" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "1rem", backgroundColor: "rgba(217, 4, 41, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                            <b.icon size={32} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <h3 className="heading-3" style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
                                            {b.title}
                                        </h3>
                                        <p className="text-body" style={{ fontSize: "1rem" }}>
                                            {b.desc}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection animation="fade-up" delay={240}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                                <h2 className="heading-2" style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Related capabilities</h2>
                                <p className="text-body" style={{ fontSize: "1rem", marginBottom: "1.25rem", maxWidth: "800px" }}>
                                    Most engagements combine execution with advisory depth. Explore adjacent services that frequently pair with RCM delivery:
                                </p>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.65rem", fontSize: "1rem" }}>
                                    <li>
                                        <Link href="/services/coding-audits" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                            Coding &amp; audits
                                        </Link>
                                        {" — "}documentation integrity and defensible coding to protect reimbursement.
                                    </li>
                                    <li>
                                        <Link href="/services/it-consulting" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                            IT consulting
                                        </Link>
                                        {" — "}systems, KPI alignment, and transaction support when change is larger than billing alone.
                                    </li>
                                    <li>
                                        <Link href="/services/collective-air" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                            CollectiveAI™
                                        </Link>
                                        {" — "}intelligent automation for denials, AR, scrubbing, and workflow prioritization.
                                    </li>
                                    <li>
                                        <Link href="/products/analytics" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                            CollectiveIQ Analytics
                                        </Link>
                                        {" — "}executive-ready dashboards and benchmarking when visibility is the bottleneck.
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={260}>
                            <div style={{ marginTop: "1rem", padding: "4rem 2rem", background: "linear-gradient(135deg, var(--secondary-color), #1a1c29)", color: "white", borderRadius: "1rem", textAlign: "center" }}>
                                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>Ready to improve cash flow and visibility?</h2>
                                <p style={{ color: "rgba(255,255,255,0.82)", marginBottom: "2rem", maxWidth: "640px", margin: "0 auto 2rem", fontSize: "1.125rem", lineHeight: 1.6 }}>
                                    Tell us about your systems, volumes, and pain points. We will recommend a practical path—full cycle, hybrid, or targeted—grounded in how your organization actually operates.
                                </p>
                                <Link href="/contact" className="btn btn-primary btnLarge" style={{ padding: "1rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                    Schedule a consultation <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
