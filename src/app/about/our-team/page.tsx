import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Quote, Stethoscope, LineChart, Cpu, Landmark } from "lucide-react";

export const metadata = {
    title: "Our Team | Collective RCM",
    description:
        "Leadership and delivery teams with deep healthcare revenue cycle, clinical, finance, and technology experience—supporting complex providers and health systems.",
};

const quotes = [
    { text: "Collective provided leadership and operational improvements across our multi-billion-dollar public company operations.", author: "Multi-billion-dollar public company" },
    { text: "Invaluable assistance with our ICD-10 planning and organizational transition.", author: "Regional health system" },
    { text: "Normalized our claim submission time from 45 days down to 2 days, and immediately improved cash velocity by 10%.", author: "Specialty practice group" },
];

const domains = [
    {
        icon: Stethoscope,
        title: "Clinical & operational fluency",
        body: "We work alongside clinicians and operations leaders—not around them—so revenue initiatives respect patient flow, documentation realities, and care delivery priorities.",
    },
    {
        icon: LineChart,
        title: "Finance-grade rigor",
        body: "MBA and CPA leadership helps translate RCM performance into language CFOs and boards expect: yield, margin risk, cash timing, and sensitivity to payer mix change.",
    },
    {
        icon: Cpu,
        title: "Technology without theatrics",
        body: "We implement automation and analytics where they strengthen controls and throughput—paired with training, QA, and governance so adoption sticks.",
    },
    {
        icon: Landmark,
        title: "Complex reimbursement environments",
        body: "Experience across specialties, hospital and professional billing, and multi-entity structures—where variance is the norm and cookie-cutter playbooks fail.",
    },
];

export default function OurTeamPage() {
    return (
        <main>
            <PageHero
                title="The Collective experience"
                description="Our leadership and delivery teams combine decades of healthcare revenue cycle, clinical, finance, and technology experience—organized to support middle- and upper-market complexity without losing speed."
                badge="Team"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3.5rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>A track record built in the work</h2>
                            <div style={{ display: "grid", gap: "1.25rem", maxWidth: "820px" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Over 20,000 physicians and thousands of organizations have relied on Collective consultants and operators through high-stakes transitions: payer pressure, growth, consolidation, platform changes, and reimbursement model shifts.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Our seasoned MBA, MD, and CPA executives focus on what leadership teams actually need: clear tradeoffs, measurable plans, and accountable execution—not generic benchmarks that ignore your specialty and market.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={100}>
                            <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>How our teams show up</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                                {domains.map((d) => (
                                    <div
                                        key={d.title}
                                        style={{
                                            padding: "1.75rem",
                                            borderRadius: "1rem",
                                            border: "1px solid var(--border-color)",
                                            background: "white",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.85rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "0.75rem",
                                                backgroundColor: "rgba(217, 4, 41, 0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <d.icon size={24} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <h3 className="heading-3" style={{ fontSize: "1.1rem", margin: 0, color: "var(--secondary-color)" }}>
                                            {d.title}
                                        </h3>
                                        <p className="text-body" style={{ fontSize: "0.98rem", margin: 0 }}>
                                            {d.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={160}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>What clients say</h2>
                            <p className="text-body" style={{ maxWidth: "720px", marginBottom: "2rem" }}>
                                Results vary by organization, but the themes are consistent: faster execution, clearer accountability, and leadership that stays engaged after the kickoff.
                            </p>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {quotes.map((q, i) => (
                                <AnimatedSection key={q.author} animation="fade-up" delay={i * 120}>
                                    <div className="glass" style={{ padding: "3rem", borderRadius: "1rem", height: "100%", border: "1px solid var(--border-color)", background: "white", position: "relative" }}>
                                        <div style={{ position: "absolute", top: "1rem", right: "1rem", color: "var(--primary-color)", opacity: 0.1 }}>
                                            <Quote size={80} fill="currentColor" />
                                        </div>
                                        <p className="text-body" style={{ fontSize: "1.125rem", fontStyle: "italic", marginBottom: "2rem", color: "var(--text-main)", position: "relative", zIndex: 10 }}>
                                            &ldquo;{q.text}&rdquo;
                                        </p>
                                        <div style={{ marginTop: "auto" }}>
                                            <strong style={{ display: "block", color: "var(--primary-dark)", fontSize: "0.9375rem" }}>— {q.author}</strong>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection animation="fade-up" delay={220}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "var(--background-dark)", maxWidth: "820px" }}>
                                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Culture and community</h3>
                                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                    Collective is also defined by how we invest outside client work. Learn about our{" "}
                                    <Link href="/about/giving" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        1-1-1 Giving program
                                    </Link>
                                    {" "}and how our teams direct service, time, and grants toward causes they care about.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={260}>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                                <Link href="/about/our-approach" className="btn btn-secondary" style={{ padding: "1rem 1.5rem" }}>
                                    Our approach
                                </Link>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                    Meet us on a working session <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
