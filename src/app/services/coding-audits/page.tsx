import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle2, ShieldAlert, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Coding & Audits | Collective RCM",
    description: "Facility and professional coding services, audits, and best practices.",
};

const items = [
    { icon: GraduationCap, title: "Collective Knowledge", desc: "Our staff training curriculum and best practices ensure your clinic meets federal guidelines. With frequent updates to fee schedules, you need a partner who stays current." },
    { icon: ShieldAlert, title: "Risk Mitigation", desc: "Expertise in complex regulations makes the difference. We help create compliant coding documentation processes that minimize audit penalties." },
    { icon: CheckCircle2, title: "Collective Reasoning", desc: "Certified coders committed to accuracy and customer care. We handle your outsourced coding logic to maximize reimbursement." },
];

export default function CodingAuditsPage() {
    return (
        <main>
            <PageHero
                title="Coding & Audits"
                description="Comprehensive facility and professional coding services, extensive coding audits, and dedicated ICD-10 assistance."
                badge="Auditing"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Trustworthy Coding Partners</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                                Coding in the healthcare market is continuously evolving. Our certified coders are consistently updated on the newest CPT and ICD-10 regulations. By partnering with us, you reduce your exposure to penalties and improve initial claim acceptance rates.
                            </p>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {items.map((b, i) => (
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
                            <div style={{ marginTop: "4rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}>
                                    Discuss Your Coding Needs <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
