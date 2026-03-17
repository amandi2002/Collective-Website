import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Server, Users, Activity } from "lucide-react";

export const metadata = {
    title: "IT Consulting | Collective RCM",
    description: "Identify performance metrics, align incentives, and improve efficiency.",
};

export default function ITConsultingPage() {
    return (
        <main>
            <PageHero
                title="Information Technology Consulting"
                description="We help healthcare administrators, CFOs, and CEOs tackle the toughest administrative, personnel, and technological challenges."
                badge="Consulting"
            />

            <section className="section-padding">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                    <AnimatedSection>
                        <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Collective Inspiration</h2>
                        <p className="text-body" style={{ maxWidth: "800px" }}>
                            Our consultants undertake tedious organizational work, initiate key performance metrics, align incentives, and keep you abreast of rapid industry changes. By benchmarking and continually monitoring your systems, our MBAs, MDs, and CPAs provide actionable insights to maximize reimbursements and improve organization-wide efficiency.
                        </p>
                    </AnimatedSection>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        <AnimatedSection animation="fade-right">
                            <div style={{ padding: "3rem", background: "white", borderRadius: "1rem", border: "1px solid var(--border-color)", height: "100%" }}>
                                <Server size={32} style={{ color: "var(--primary-color)", margin: "0 0 1.5rem 0" }} />
                                <h3 className="heading-3" style={{ marginBottom: "1rem" }}>Systems Optimization</h3>
                                <p className="text-body">Ensure your IT infrastructure supports high-volume billing effortlessly and securely without falling behind regulatory standards.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left" delay={200}>
                            <div style={{ padding: "3rem", background: "white", borderRadius: "1rem", border: "1px solid var(--border-color)", height: "100%" }}>
                                <Activity size={32} style={{ color: "var(--primary-color)", margin: "0 0 1.5rem 0" }} />
                                <h3 className="heading-3" style={{ marginBottom: "1rem" }}>Collective Growth Strategies</h3>
                                <p className="text-body">Acquisition and consolidation are common in healthcare. We bring tech platforms and financial acumen to analyze cash flow for buy-side and sell-side transactions.</p>
                            </div>
                        </AnimatedSection>
                    </div>

                </div>
            </section>
        </main>
    );
}
