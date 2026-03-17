import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle2, TrendingUp, BarChart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Revenue Cycle Management | Collective RCM",
    description: "Collect more of your money, improve organizational efficiency, and gain visibility into your revenue streams.",
};

const benefits = [
    { icon: ShieldCheck, title: "Collective Expertise", desc: "Our reimbursement strategies relieve you from the costs and headaches of managing medical billing processes, personnel, and bad debt." },
    { icon: BarChart, title: "Collective Capacity", desc: "We combine people, processes, and advanced technology to scale quickly and build custom billing solutions that maximize collections." },
    { icon: TrendingUp, title: "Collective Return", desc: "Enjoy a 98+% net collection rate and low days in A/R to significantly improve your cash flow." },
];

export default function RCMPage() {
    return (
        <main>
            <PageHero
                title="Revenue Cycle Management"
                description="High-touch medical billing and reimbursement services designed to collect more cash, faster, while identifying ongoing ways to increase your revenue."
                badge="Core Service"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Maximize Your Collections</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                                We are revenue-cycle and business-process experts. By taking on the tedious organizational work and tracking key performance metrics, we allow you to focus entirely on patient care. Instead of struggling with personnel changes and bad debt, hand over your claims to a team proven to secure cleaner, faster passes.
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
                            <div style={{ marginTop: "4rem", padding: "4rem", background: "linear-gradient(135deg, var(--secondary-color), #1a1c29)", color: "white", borderRadius: "1rem", textAlign: "center" }}>
                                <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Ready to improve your cash flow?</h2>
                                <p className="text-body" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
                                    Join thousands of businesses relying on our consultants.
                                </p>
                                <Link href="/contact" className="btn btn-primary btnLarge" style={{ padding: "1rem 2rem" }}>
                                    Schedule a Consultation <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
