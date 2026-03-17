import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link2, LineChart, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Analytics - CollectiveIQ | Collective RCM",
    description: "A cloud-based analytics platform providing real-time financial insight.",
};

const features = [
    { icon: Link2, title: "Multi-Source Linking", desc: "Connect multiple data sources directly to the platform, ending manual report printing and raw data exports that slow down workflow." },
    { icon: LineChart, title: "Benchmarking", desc: "Set operational goals and benchmark against similar organizations locally, regionally, and nationally." },
    { icon: LayoutDashboard, title: "Real-Time Tracking", desc: "Track the financial health of the entire patient, payor, and provider base on a clear, real-time dashboard." },
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
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>How much insight does standard reporting actually deliver?</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "2rem" }}>
                                Typical practice management and hospital financial systems fail to provide true business intelligence. CollectiveIQ changes this by unifying your operational data securely in the cloud, giving you on-demand access to the information you need to identify key areas of concern and implement best practices instantly.
                            </p>
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
