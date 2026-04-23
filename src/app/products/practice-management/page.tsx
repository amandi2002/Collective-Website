import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FileText, Monitor, Briefcase } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Practice Management Software | Collective RCM",
    description:
        "Cloud practice management and scheduling for physician groups: eligibility, charge entry, claims tracking, and collections visibility without expensive on-prem maintenance.",
};

const operations = [
    { title: "Front desk throughput", body: "Streamlined scheduling and registration workflows reduce bottlenecks at check-in while keeping patient information consistent across locations." },
    { title: "Revenue integrity at the source", body: "Eligibility and charge entry discipline improves downstream billing performance—fewer preventable denials and less rework for your billing team." },
    { title: "Visibility for leadership", body: "Claims tracking, payment posting, and collections signals in one place so operations and finance can respond to variance quickly." },
];

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
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
                                <div>
                                    <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Forget Expensive Systems</h2>
                                    <p className="text-body" style={{ marginBottom: "2rem" }}>
                                        Buying and maintaining traditional practice management software is painfully expensive. CollectivePractice changes the industry norm by offering a high-level solution without any of the ongoing maintenance or expensive upgrade costs.
                                    </p>
                                </div>
                                <div>
                                    <Image src="/collectivewebite/CollectivePractice.png" alt="CollectivePractice product interface" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
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

                        <AnimatedSection animation="fade-up" delay={220}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Operations software that pays for itself in discipline</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "1.75rem" }}>
                                CollectivePractice is built for organizations that want enterprise-grade scheduling and billing operations without enterprise-grade IT overhead. The value shows up in fewer missed charges, cleaner handoffs to billing, and a steadier rhythm across sites.
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
                                {operations.map((o) => (
                                    <div key={o.title} style={{ padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "#fff" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.5rem", color: "var(--secondary-color)" }}>{o.title}</h3>
                                        <p className="text-body" style={{ fontSize: "0.95rem", margin: 0 }}>{o.body}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={280}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white", maxWidth: "820px" }}>
                                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Extend into analytics and AI when you are ready</h3>
                                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                    As volumes grow, pair CollectivePractice with{" "}
                                    <Link href="/products/analytics" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        CollectiveIQ Analytics
                                    </Link>{" "}
                                    for deeper operational insight—or explore{" "}
                                    <Link href="/services/collective-air" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        CollectiveAI™
                                    </Link>{" "}
                                    for intelligent automation layered on top of disciplined workflows.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="zoom-in" delay={400}>
                            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                                <p className="text-body" style={{ maxWidth: "560px", margin: 0, textAlign: "center" }}>
                                    Tell us about your locations, specialties, and current PM challenges—we will tailor a demo around the workflows that matter most.
                                </p>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Demo the platform <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </section>
        </main>
    );
}
