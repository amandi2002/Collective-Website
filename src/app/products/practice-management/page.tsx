import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link2, LineChart, FileText, Monitor, Server, Briefcase } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Practice Management Software | Collective RCM",
    description: "Cloud-based practice management and scheduling software designed for physician groups without maintenance costs.",
};

const features = [
    { icon: Monitor, title: "Patient Scheduling", desc: "Easily register and schedule patients with real-time sync across connected locations." },
    { icon: Briefcase, title: "Eligibility & Charge Entry", desc: "Instantly verify eligibility avoiding surprises, coupled with streamlined charge entry." },
    { icon: FileText, title: "Claims & Collections", desc: "Monitor robust claims tracking, payment posting, and real-time collections updates." },
];

export default function PracticeManagementPage() {
    return (
        <main>
            <PageHero
                title="CollectivePractice"
                description="Streamlines workflows across the organization, improving front- and back-office operations to boost overall revenue."
                badge="Product"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Forget Expensive Systems</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                                Buying and maintaining traditional practice management software is painfully expensive. CollectivePractice changes the industry norm by offering a high-level solution without any of the ongoing maintenance or expensive upgrade costs.
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
                            <div style={{ marginTop: "4rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Demo the Platform <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </section>
        </main>
    );
}
