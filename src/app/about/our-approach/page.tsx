import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Check, Cpu, Layers, LineChart, ListOrdered, Shield, Target, Users } from "lucide-react";

export const metadata = {
    title: "Our Approach | Collective RCM",
    description:
        "How Collective partners with providers: prescriptive process design, accountable delivery, automation and analytics, and values that put patients and clients first.",
};

const values = [
    "Deliver a service that creates a client for life.",
    "Deliver simple, effective software that makes healthcare better.",
    "Build open and honest relationships with clients and employees.",
    "Build a positive team that promotes collective unity.",
    "Be passionate and determined to improve every day.",
    "Create profit through ingenuity, diligence, and determination.",
    "Remember that healthcare is about healing people and everyone should play their part.",
];

const pillars = [
    {
        icon: Users,
        title: "Partnership, not paperwork theater",
        body: "We align incentives with outcomes. That means clear ownership, direct access to decision-makers, and communication your leadership team can actually use—not status meetings that recycle the same slides.",
    },
    {
        icon: Layers,
        title: "Process before patches",
        body: "Technology amplifies process. We map how work really flows, remove redundant touches, and standardize the exceptions that matter—so automation and AI strengthen a disciplined operation instead of masking chaos.",
    },
    {
        icon: Cpu,
        title: "Automation with accountability",
        body: "We deploy RPA and AI where they reduce risk and accelerate cash—not for novelty. Every workflow has controls, auditability, and a human escalation path when judgment is required.",
    },
];

const phases = [
    {
        title: "Assess & baseline",
        body: "We quantify performance across registration, coding, billing, denials, and AR—so priorities are grounded in data, not anecdotes.",
    },
    {
        title: "Design the operating model",
        body: "We define the target state: roles, handoffs, SLAs, and reporting. You get a roadmap that matches your systems, specialty, and payer mix.",
    },
    {
        title: "Implement with discipline",
        body: "Change is staged to protect cash flow. Training, QA checkpoints, and parallel-run validation reduce disruption while new habits take hold.",
    },
    {
        title: "Operate & stabilize",
        body: "We run the revenue cycle with transparent metrics—then tighten variance until performance is predictable week over week.",
    },
    {
        title: "Optimize continuously",
        body: "Payer rules shift. Volumes change. We iterate on edits, work queues, and analytics so improvements compound instead of decaying after go-live.",
    },
];

const commitments = [
    {
        icon: LineChart,
        title: "Reporting you can defend",
        body: "Dashboards and benchmarks tie to finance-ready definitions: clean claim rate, denial root cause, days in AR, and yield—not vanity metrics that break under scrutiny.",
    },
    {
        icon: Shield,
        title: "Compliance-minded delivery",
        body: "We respect PHI boundaries, segregation of duties, and payer policies. Controls are designed into workflows—not bolted on after the fact.",
    },
    {
        icon: Target,
        title: "Outcomes over activity",
        body: "We measure success by cash recovered, denial prevention, and cycle-time reduction—balanced against the burden placed on your clinical and administrative teams.",
    },
];

export default function OurApproachPage() {
    return (
        <main>
            <PageHero
                title="Our Approach"
                description="Simplifying the healthcare revenue cycle through uncompromised service, intelligent technology, and exact process automation—implemented with discipline, measured with integrity, and refined over time."
                badge="About"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>Diagnose first, then prescribe</h2>
                            <div style={{ display: "grid", gap: "1.25rem", maxWidth: "820px" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Many RCM engagements start with tools and end with finger-pointing. We start with truth: how claims move, where dollars leak, and which constraints are real—payer contracts, staffing, EHR limitations, and specialty nuance.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    From there we recommend a path forward before we implement. That keeps technology, outsourcing, and process redesign in service of a single objective: durable cash-flow improvement your organization can sustain.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={120}>
                            <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>How we work with your team</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                                {pillars.map((p, i) => (
                                    <div
                                        key={p.title}
                                        className="glass"
                                        style={{
                                            padding: "2rem",
                                            borderRadius: "1rem",
                                            border: "1px solid var(--border-color)",
                                            background: "white",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "52px",
                                                height: "52px",
                                                borderRadius: "0.875rem",
                                                backgroundColor: "rgba(217, 4, 41, 0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <p.icon size={26} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <h3 className="heading-3" style={{ fontSize: "1.25rem", margin: 0, color: "var(--secondary-color)" }}>
                                            {p.title}
                                        </h3>
                                        <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                            {p.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={160}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
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
                                    <ListOrdered size={24} style={{ color: "var(--primary-color)" }} />
                                </div>
                                <h2 className="heading-2" style={{ margin: 0 }}>Engagement to outcome</h2>
                            </div>
                            <p className="text-body" style={{ maxWidth: "820px", marginBottom: "2rem" }}>
                                Every client relationship is different, but the arc is consistent: stabilize, standardize, automate where it earns its keep, and keep leadership aligned on what “good” looks like.
                            </p>
                            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem", maxWidth: "880px" }}>
                                {phases.map((step, i) => (
                                    <li
                                        key={step.title}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "auto 1fr",
                                            gap: "1.25rem",
                                            alignItems: "start",
                                            padding: "1.35rem 1.5rem",
                                            borderRadius: "1rem",
                                            border: "1px solid var(--border-color)",
                                            background: "var(--surface-color)",
                                        }}
                                    >
                                        <span
                                            aria-hidden
                                            style={{
                                                width: "2.25rem",
                                                height: "2.25rem",
                                                borderRadius: "999px",
                                                background: "var(--secondary-color)",
                                                color: "#fff",
                                                fontWeight: 800,
                                                fontSize: "0.95rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {i + 1}
                                        </span>
                                        <div>
                                            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.35rem", color: "var(--secondary-color)" }}>
                                                {step.title}
                                            </h3>
                                            <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                                {step.body}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={200}>
                            <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Governance you can trust</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                                {commitments.map((c) => (
                                    <div
                                        key={c.title}
                                        style={{
                                            padding: "1.75rem",
                                            borderRadius: "1rem",
                                            border: "1px solid var(--border-color)",
                                            background: "var(--background-dark)",
                                        }}
                                    >
                                        <c.icon size={22} style={{ color: "var(--primary-color)", marginBottom: "0.85rem" }} />
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.5rem", color: "var(--secondary-color)" }}>
                                            {c.title}
                                        </h3>
                                        <p className="text-body" style={{ fontSize: "0.98rem", margin: 0 }}>
                                            {c.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={240}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Core values</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "2rem" }}>
                                At Collective, our name is a foundational belief. Our objective is to generate average 12% increases in cash flow through sheer revenue cycle improvements while adhering closely to a strict set of values.
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", maxWidth: "800px" }}>
                                {values.map((v, i) => (
                                    <AnimatedSection key={i} animation="fade-right" delay={i * 60}>
                                        <div
                                            className="glass"
                                            style={{
                                                padding: "1.5rem",
                                                borderRadius: "1rem",
                                                border: "1px solid var(--border-color)",
                                                background: "var(--surface-color)",
                                                display: "flex",
                                                gap: "1rem",
                                                alignItems: "center",
                                                transition: "transform var(--transition-fast)",
                                            }}
                                        >
                                            <div style={{ background: "rgba(217, 4, 41, 0.1)", borderRadius: "50%", padding: "0.5rem", display: "flex", flexShrink: 0 }}>
                                                <Check size={24} style={{ color: "var(--primary-color)" }} />
                                            </div>
                                            <p className="text-body" style={{ fontWeight: 500, margin: 0, color: "var(--text-main)" }}>
                                                {v}
                                            </p>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={280}>
                            <div
                                style={{
                                    marginTop: "1rem",
                                    padding: "3rem 2rem",
                                    borderRadius: "1rem",
                                    border: "1px solid var(--border-color)",
                                    background: "linear-gradient(135deg, rgba(217, 4, 41, 0.06) 0%, rgba(43, 45, 66, 0.04) 100%)",
                                    textAlign: "center",
                                }}
                            >
                                <h2 className="heading-2" style={{ marginBottom: "1rem", color: "var(--secondary-color)" }}>
                                    See how this shows up in delivery
                                </h2>
                                <p className="text-body" style={{ maxWidth: "560px", margin: "0 auto 1.75rem" }}>
                                    Meet the team behind the work, or start a conversation about your revenue cycle priorities.
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                                    <Link href="/about/our-team" className="btn btn-secondary" style={{ padding: "0.85rem 1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                        Our team <ArrowRight size={18} />
                                    </Link>
                                    <Link href="/about/giving" className="btn btn-secondary" style={{ padding: "0.85rem 1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                        1-1-1 Giving <ArrowRight size={18} />
                                    </Link>
                                    <Link href="/contact" className="btn btn-primary" style={{ padding: "0.85rem 1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                        Contact us <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </section>
        </main>
    );
}
