import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Cloud, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Electronic Health Records - CollectiveRecords | Collective RCM",
    description: "A cloud-based electronic health record (EHR) system that runs on your existing devices without expensive servers.",
};

const benefits = [
    { icon: Cloud, title: "Cloud-Based", desc: "No expensive servers or full-time IT staff required. Runs on existing desktops, laptops, tablets, and phones." },
    { icon: Zap, title: "Immediate Use", desc: "Affordable monthly subscription with no setup or training fees, so you can adopt it instantly." },
    { icon: Smartphone, title: "Integrated Data", desc: "Integrates perfectly with CollectivePractice for consolidated data from the front desk all the way to the physician at the point of care." },
];

export default function EHRPage() {
    return (
        <main>
            <PageHero
                title="CollectiveRecords"
                description="A powerful cloud-based electronic health record (EHR) system designed for immediate, barrier-free access."
                badge="Product"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Access Medical Records Anytime, Anywhere</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                                CollectiveRecords enables your providers to see more patients securely, document interactions easily, and access critical medical records, diagnostic data, and prescriptions right at the point of care.
                            </p>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {benefits.map((b, i) => (
                                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
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

                        <AnimatedSection animation="zoom-in" delay={400}>
                            <div style={{ marginTop: "4rem", textAlign: "center" }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Request Product Demo <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
