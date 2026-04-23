import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Cloud, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Electronic Health Records - CollectiveRecords | Collective RCM",
    description:
        "Cloud EHR for secure documentation, e-prescribing, and mobile access—integrates with CollectivePractice for a connected front office to point-of-care workflow.",
};

const clinicalHighlights = [
    { title: "Point-of-care speed", body: "Structured documentation flows and quick access to history, diagnostics, and orders—so providers spend less time clicking and more time with patients." },
    { title: "Security & access", body: "Role-based access and cloud delivery reduce the operational burden of patching servers while keeping PHI boundaries clear for staff and contractors." },
    { title: "Continuity across sites", body: "Designed for groups that need a consistent record across locations without duplicating maintenance and upgrade projects per clinic." },
];

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
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
                                <div>
                                    <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Access Medical Records Anytime, Anywhere</h2>
                                    <p className="text-body" style={{ marginBottom: "2rem" }}>
                                        CollectiveRecords enables your providers to see more patients securely, document interactions easily, and access critical medical records, diagnostic data, and prescriptions right at the point of care.
                                    </p>
                                </div>
                                <div>
                                    <Image src="/collectivewebite/CollectiveRecords.png" alt="CollectiveRecords EHR product interface" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
                                </div>
                            </div>
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

                        <AnimatedSection animation="fade-up" delay={220}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Built for modern clinical workflows</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "1.75rem" }}>
                                CollectiveRecords is designed around the reality that providers work across desktops, laptops, and tablets—often moving between exam rooms, surgery schedules, and telehealth. The goal is immediate access to the information that drives safe, efficient care without a heavy IT footprint.
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
                                {clinicalHighlights.map((c) => (
                                    <div key={c.title} style={{ padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "#fff" }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.5rem", color: "var(--secondary-color)" }}>{c.title}</h3>
                                        <p className="text-body" style={{ fontSize: "0.95rem", margin: 0 }}>{c.body}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={280}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white", maxWidth: "820px" }}>
                                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Connect scheduling, billing, and the chart</h3>
                                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                    CollectiveRecords works best alongside{" "}
                                    <Link href="/products/practice-management" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        CollectivePractice
                                    </Link>{" "}
                                    so registration, eligibility, scheduling, and documentation stay aligned—reducing rework and improving claim readiness at the source.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="zoom-in" delay={400}>
                            <div style={{ marginTop: "2rem", textAlign: "center", display: "grid", gap: "1rem", justifyItems: "center" }}>
                                <p className="text-body" style={{ maxWidth: "560px", margin: 0 }}>
                                    Want a tailored walkthrough for your specialty and locations? We will map rollout, training, and integration steps with your team.
                                </p>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Request product demo <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
