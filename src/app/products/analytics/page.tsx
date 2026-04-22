import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link2, LineChart, LayoutDashboard, BarChart2, Activity } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Analytics - CollectiveIQ | Collective RCM",
    description: "A cloud-based analytics platform providing real-time financial insight.",
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
    },
    {
        icon: Activity,
        title: "CollectiveIQ RCM Analytics",
        desc: "Deep revenue cycle analytics layered directly on top of your billing data. Track KPIs like clean claim rate, first-pass resolution, days in AR, and collection yield — all in one unified view.",
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
                                    <Image src="/service/collectiveIQ.png" alt="CollectiveIQ Analytics Dashboard" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
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
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="zoom-in" delay={400}>
                            <div style={{ marginTop: "3rem", padding: "4rem", backgroundColor: "var(--background-dark)", borderRadius: "1rem", border: "1px solid var(--border-color)", textAlign: "center" }}>
                                <h2 className="heading-2" style={{ marginBottom: "1.5rem", color: "var(--secondary-color)" }}>Request a Demo</h2>
                                <p className="text-body" style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
                                    See how CollectiveIQ can transform your healthcare organization's data today.
                                </p>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Get Started <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
