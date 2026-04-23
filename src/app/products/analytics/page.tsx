import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link2, LineChart, LayoutDashboard, BarChart2, Activity } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Analytics - CollectiveIQ | Collective RCM",
    description:
        "Multi-source analytics, benchmarking, and real-time dashboards for revenue cycle and denial intelligence—including IDR analytics and CollectiveIQ RCM modules.",
};

const features = [
    { icon: Link2, title: "Multi-Source Linking", desc: "Connect multiple data sources directly to the platform, ending manual report printing and raw data exports that slow down workflow." },
    { icon: LineChart, title: "Benchmarking", desc: "Set operational goals and benchmark against similar organizations locally, regionally, and nationally." },
    { icon: LayoutDashboard, title: "Real-Time Tracking", desc: "Track the financial health of the entire patient, payor, and provider base on a clear, real-time dashboard." },
];

const iqModules = [
    {
        icon: BarChart2,
        title: "IDR Analytics Dashboard",
        desc: "A purpose-built dashboard for Improper Denial Rate (IDR) analysis. Surfaces denial trends by payor, provider, and code so your team can identify root causes and take corrective action fast.",
        imageSrc: `/collectivewebite/${encodeURIComponent("IDR analytics dashboard.png")}`,
        imageAlt: "IDR analytics dashboard preview",
    },
    {
        icon: Activity,
        title: "CollectiveIQ RCM Analytics",
        desc: "Deep revenue cycle analytics layered directly on top of your billing data. Track KPIs like clean claim rate, first-pass resolution, days in AR, and collection yield — all in one unified view.",
        imageSrc: "/collectivewebite/CollectiveIQ.png",
        imageAlt: "CollectiveIQ RCM analytics preview",
    },
];

export default function AnalyticsPage() {
    return (
        <main>
            <PageHero
                title="CollectiveIQ Analytics"
                description="Ditch manual reporting. Our advanced cloud-based analytics platform delivers real-time insight into your operations."
                badge="Product"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>

                        <AnimatedSection>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
                                <div>
                                    <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>How much insight does standard reporting actually deliver?</h2>
                                    <p className="text-body" style={{ marginBottom: "2rem" }}>
                                        Typical practice management and hospital financial systems fail to provide true business intelligence. CollectiveIQ changes this by unifying your operational data securely in the cloud, giving you on-demand access to the information you need to identify key areas of concern and implement best practices instantly.
                                    </p>
                                </div>
                                <div>
                                    <Image src="/collectivewebite/CollectiveIQ.png" alt="CollectiveIQ Analytics dashboard" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
                                </div>
                            </div>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {features.map((f, i) => (
                                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                                    <div className="glass" style={{ padding: "2.5rem", borderRadius: "1rem", height: "100%", border: "1px solid var(--border-color)", background: "white" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "1rem", backgroundColor: "rgba(217, 4, 41, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                            <f.icon size={32} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <h3 className="heading-3" style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>{f.title}</h3>
                                        <p className="text-body" style={{ fontSize: "1rem" }}>{f.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection animation="fade-up" delay={200}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>From reactive reporting to operational command</h2>
                            <div style={{ display: "grid", gap: "1rem", maxWidth: "820px", marginBottom: "2rem" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Most organizations do not lack data—they lack a single place where finance, operations, and revenue integrity can agree on definitions, trends, and accountability. CollectiveIQ is built to unify operational sources in the cloud so leaders can move from monthly PDFs to daily decisions.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Whether you are managing multi-site variance, tightening denial performance, or benchmarking against peers, the goal is the same: make performance visible early enough to act—before cash is left on the table.
                                </p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                                {[
                                    "CFO and finance teams needing consistent KPI definitions across entities.",
                                    "RCM leaders tracking denial root cause by payer, provider, and code family.",
                                    "Operations teams comparing locations, specialties, and workflow throughput.",
                                    "Executives who want benchmarking without exporting sensitive data to spreadsheets.",
                                ].map((t) => (
                                    <div key={t} style={{ padding: "1.25rem 1.35rem", borderRadius: "0.75rem", border: "1px solid var(--border-color)", background: "#fff", fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text-main)" }}>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={300}>
                            <div id="iq-modules">
                                <h3 className="heading-3" style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                                    Analytics Modules
                                </h3>
                                <p className="text-body" style={{ maxWidth: "720px", marginBottom: "2rem" }}>
                                    Specialized reporting layers that extend CollectiveIQ for revenue cycle and denial management intelligence.
                                </p>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                                    {iqModules.map((mod, i) => (
                                        <AnimatedSection key={mod.title} animation="fade-up" delay={i * 100}>
                                            <div
                                                style={{
                                                    background: "white",
                                                    border: "1px solid var(--border-color)",
                                                    borderRadius: "1rem",
                                                    padding: "2rem",
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "1rem",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "56px",
                                                        height: "56px",
                                                        borderRadius: "0.875rem",
                                                        backgroundColor: "rgba(217, 4, 41, 0.1)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <mod.icon size={28} style={{ color: "var(--primary-color)" }} />
                                                </div>
                                                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0, color: "var(--secondary-color)" }}>
                                                    {mod.title}
                                                </h4>
                                                <p className="text-body" style={{ fontSize: "0.95rem", margin: 0 }}>
                                                    {mod.desc}
                                                </p>
                                                <div style={{ marginTop: "1rem", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid var(--border-color)", background: "#fff" }}>
                                                    <Image src={mod.imageSrc} alt={mod.imageAlt} width={560} height={320} style={{ width: "100%", height: "auto", display: "block" }} />
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={360}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white", maxWidth: "820px" }}>
                                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Better outcomes when analytics connects to execution</h3>
                                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                    Pair CollectiveIQ with{" "}
                                    <Link href="/services/rcm" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        Collective RCM services
                                    </Link>{" "}
                                    so insights translate into worked accounts, denial remediation, and measurable cash—not another dashboard your team ignores.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="zoom-in" delay={400}>
                            <div style={{ marginTop: "3rem", padding: "4rem", backgroundColor: "#fff", borderRadius: "1rem", border: "1px solid var(--border-color)", textAlign: "center" }}>
                                <h2 className="heading-2" style={{ marginBottom: "1.5rem", color: "var(--secondary-color)" }}>Request a demo</h2>
                                <p className="text-body" style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
                                    Walk through your data sources, reporting gaps, and the KPIs you want leadership to trust—then see how CollectiveIQ modules map to your priorities.
                                </p>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Get started <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
