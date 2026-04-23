import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Activity, Server, Target, Sparkles } from "lucide-react";

export const metadata = {
    title: "Services | Collective RCM",
    description:
        "RCM, IT consulting, coding and audits, and CollectiveAI™—premium services for middle- and upper-market healthcare organizations focused on cash flow and operational clarity.",
};

const services = [
    { href: "/services/it-consulting", icon: Server, title: "Information Technology Consulting", desc: "Our consulting team of MBAs, MDs, and CPAs helps clients achieve goals in revenue cycle, coding, and practice performance metrics." },
    { href: "/services/rcm", icon: Activity, title: "Revenue Cycle Management", desc: "Our consultative approach collects more of your money, improves operational efficiency, and delivers visibility into revenue streams." },
    { href: "/services/coding-audits", icon: Target, title: "Coding & Audits", desc: "Certified coders trained on the latest updates handle your coding logic while mitigating your exposure to penalties." },
    { href: "/services/collective-air", icon: Sparkles, title: "CollectiveAI™", desc: "Our next-generation AI-based Revenue Cycle Management platform — featuring denial prediction, autonomous claim remediation, AI-powered chatbots, and intelligent workflow automation trained on millions of claims." },
];

export default function ServicesPage() {
    return (
        <main>
            <PageHero
                title="Our Services"
                description="Premium solutions built strategically to improve operations and drive revenue for upper market healthcare systems."
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
                        <AnimatedSection animation="fade-up">
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Built for complex healthcare operations</h2>
                            <div style={{ display: "grid", gap: "1rem", maxWidth: "820px" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Middle- and upper-market providers face a different class of problem: multi-site variance, specialty nuance, payer aggression, and systems that were never designed to produce finance-grade truth. Our services are structured to connect strategy, technology, and day-to-day revenue execution.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Choose a lane below—consulting, managed RCM, coding integrity, or AI-powered automation—or combine them so recommendations translate into measurable cash performance.
                                </p>
                            </div>
                        </AnimatedSection>
                        {services.map((s, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <Link href={s.href} style={{ textDecoration: "none", display: "block" }}>
                                    <div style={{ padding: "3rem", background: "white", borderRadius: "1rem", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "2rem", transition: "all var(--transition-normal)", cursor: "pointer", boxShadow: "var(--shadow-sm)" }} className="hover-card">
                                        <div style={{ width: "80px", height: "80px", borderRadius: "1rem", backgroundColor: "rgba(217, 4, 41, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <s.icon size={40} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h2 className="heading-3" style={{ color: "var(--secondary-color)", marginBottom: "0.5rem" }}>{s.title}</h2>
                                            <p className="text-body">{s.desc}</p>
                                        </div>
                                        <div>
                                            <ArrowRight size={24} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Adding a small global style for hover card */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(217, 4, 41, 0.3);
        }
      `}} />
        </main>
    );
}
