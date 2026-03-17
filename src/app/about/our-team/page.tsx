import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

export const metadata = {
    title: "Our Team | Collective RCM",
    description: "Meet the experts managing revenue cycles, maximizing reimbursements, and reducing costs.",
};

const quotes = [
    { text: "Collective provided leadership and operational improvements across our multi-billion-dollar public company operations.", author: "Multi-Billion-Dollar Public Company" },
    { text: "Invaluable assistance with our ICD-10 planning and organizational transition.", author: "Regional Health System" },
    { text: "Normalized our claim submission time from 45 days down to 2 days, and immediately improved cash velocity by 10%.", author: "Specialty Practice Group" },
];

export default function OurTeamPage() {
    return (
        <main>
            <PageHero
                title="The Collective Experience"
                description="Our management team holds over 100 years of combined experience working specifically with providers and health systems."
                badge="Team"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>A Track Record of Success</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                                Over 20,000 physicians and thousands of businesses have relied entirely on Collective’s elite consultants. Our seasoned MBA, MD, and CPA executives navigate complex organizational challenges to deliver measurable increases in reimbursements, significantly reduce costs, and steadily increase cash flow across your organization.
                            </p>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {quotes.map((q, i) => (
                                <AnimatedSection key={i} animation="fade-up" delay={i * 200}>
                                    <div className="glass" style={{ padding: "3rem", borderRadius: "1rem", height: "100%", border: "1px solid var(--border-color)", background: "white", position: "relative" }}>
                                        <div style={{ position: "absolute", top: "1rem", right: "1rem", color: "var(--primary-color)", opacity: 0.1 }}>
                                            <Quote size={80} fill="currentColor" />
                                        </div>
                                        <p className="text-body" style={{ fontSize: "1.125rem", fontStyle: "italic", marginBottom: "2rem", color: "var(--text-main)", position: "relative", zIndex: 10 }}>
                                            "{q.text}"
                                        </p>
                                        <div style={{ marginTop: "auto" }}>
                                            <strong style={{ display: "block", color: "var(--primary-dark)", fontSize: "0.9375rem" }}>— {q.author}</strong>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
