import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Server, Users, Activity, LineChart, Shield, Layers } from "lucide-react";

export const metadata = {
    title: "IT Consulting | Collective RCM",
    description:
        "Healthcare IT and revenue-cycle consulting: systems optimization, KPI alignment, M&A readiness, and executive decision support from MBAs, MDs, and CPAs.",
};

const focusAreas = [
    {
        icon: Server,
        title: "Systems & workflow optimization",
        body: "Map how data moves from registration through collections, then harden the integrations, access controls, and monitoring that keep billing stable at scale.",
    },
    {
        icon: LineChart,
        title: "Performance metrics that finance trusts",
        body: "Define KPIs, baselines, and reporting cadences so operations and finance agree on what “good” looks like—then track improvement with accountability, not noise.",
    },
    {
        icon: Activity,
        title: "Growth, M&A, and consolidation",
        body: "Support buy-side and sell-side diligence with revenue-cycle and technology lenses: AR quality, coding risk, platform overlap, and post-close integration sequencing.",
    },
    {
        icon: Shield,
        title: "Risk visibility",
        body: "Surface exposure across compliance, security posture, and operational single points of failure—prioritized so leadership can fund fixes in the right order.",
    },
    {
        icon: Layers,
        title: "Roadmaps that ship",
        body: "Translate strategy into sequenced initiatives with owners, dependencies, and success criteria—so initiatives don’t stall after the kickoff workshop.",
    },
    {
        icon: Users,
        title: "Executive & board-ready storytelling",
        body: "Clear narratives for CEOs, CFOs, and boards: what changed, what it cost, what it returned, and what still needs investment.",
    },
];

const phases = [
    { title: "Discover", body: "Interviews, data pulls, and workflow observation to ground recommendations in how the organization actually runs." },
    { title: "Diagnose", body: "Quantify gaps, benchmark peers where appropriate, and isolate root causes instead of treating symptoms." },
    { title: "Deliver", body: "Prioritized recommendations, implementation support, and follow-through until new operating habits stick." },
];

export default function ITConsultingPage() {
    return (
        <main>
            <PageHero
                title="Information Technology Consulting"
                description="We help healthcare administrators, CFOs, and CEOs tackle administrative, personnel, and technology challenges—with revenue integrity and sustainable operations at the center."
                badge="Consulting"
            />

            <section className="section-padding">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                    <AnimatedSection>
                        <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>Collective inspiration, grounded in operations</h2>
                        <div style={{ display: "grid", gap: "1.25rem", maxWidth: "820px" }}>
                            <p className="text-body" style={{ margin: 0 }}>
                                Our consultants take on the tedious organizational work that slows leadership down: benchmarking, variance analysis, incentive alignment, and staying ahead of regulatory and payer change. We connect IT investments to measurable reimbursement and efficiency outcomes—not slide decks that age on a share drive.
                            </p>
                            <p className="text-body" style={{ margin: 0 }}>
                                With MBAs, MDs, and CPAs at the table, we speak the languages of clinical operations, finance, and technology—so recommendations translate into decisions your teams can execute.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={100}>
                        <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Where we typically focus</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                            {focusAreas.map((item) => (
                                <div
                                    key={item.title}
                                    style={{
                                        padding: "1.75rem",
                                        background: "white",
                                        borderRadius: "1rem",
                                        border: "1px solid var(--border-color)",
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
                                        <item.icon size={24} style={{ color: "var(--primary-color)" }} />
                                    </div>
                                    <h3 className="heading-3" style={{ fontSize: "1.15rem", margin: 0, color: "var(--secondary-color)" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-body" style={{ fontSize: "0.98rem", margin: 0 }}>
                                        {item.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={160}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "start" }}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "var(--background-dark)" }}>
                                <h2 className="heading-2" style={{ marginBottom: "1rem", fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}>
                                    How engagements run
                                </h2>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1.25rem" }}>
                                    {phases.map((p, i) => (
                                        <li key={p.title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem", alignItems: "start" }}>
                                            <span
                                                style={{
                                                    width: "2rem",
                                                    height: "2rem",
                                                    borderRadius: "999px",
                                                    background: "var(--secondary-color)",
                                                    color: "#fff",
                                                    fontWeight: 800,
                                                    fontSize: "0.85rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {i + 1}
                                            </span>
                                            <div>
                                                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem", color: "var(--secondary-color)" }}>{p.title}</h3>
                                                <p className="text-body" style={{ fontSize: "0.95rem", margin: 0 }}>{p.body}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                                <h2 className="heading-2" style={{ marginBottom: "1rem", fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}>
                                    Better together with RCM delivery
                                </h2>
                                <p className="text-body" style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                                    Consulting recommendations land faster when paired with operators who can execute. Many clients pair IT consulting with{" "}
                                    <Link href="/services/rcm" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        Revenue Cycle Management
                                    </Link>{" "}
                                    or{" "}
                                    <Link href="/services/collective-air" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        CollectiveAI™
                                    </Link>{" "}
                                    so improvements show up in cash flow—not only in documentation.
                                </p>
                                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                    Tell us what decision you are trying to make this quarter—we will help you frame the metrics, risks, and sequencing to get there with confidence.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={220}>
                        <div
                            style={{
                                padding: "3rem 2rem",
                                borderRadius: "1rem",
                                background: "linear-gradient(135deg, var(--secondary-color), #1a1c29)",
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Start with a focused conversation</h2>
                            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "640px", margin: "0 auto 1.75rem", fontSize: "1.05rem", lineHeight: 1.65 }}>
                                Share your priorities—platform modernization, KPI alignment, transaction support, or operational turnaround—and we will propose a practical scope and timeline.
                            </p>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                Talk to our consultants <ArrowRight size={18} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
