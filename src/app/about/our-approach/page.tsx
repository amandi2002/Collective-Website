import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check, Shield } from "lucide-react";

export const metadata = {
    title: "Our Approach | Collective RCM",
    description: "Discover the core values that guide Collective RCM.",
};

const values = [
    "Deliver a service that creates a client for life.",
    "Deliver simple, effective software that makes healthcare better.",
    "Build open and honest relationships with clients and employees.",
    "Build a positive team that promotes collective unity.",
    "Be passionate and determined to improve every day.",
    "Create profit through ingenuity, diligence, and determination.",
    "Remember that healthcare is about healing people and everyone should play their part.",
];

export default function OurApproachPage() {
    return (
        <main>
            <PageHero
                title="Our Approach"
                description="Simplifying the healthcare revenue cycle through uncompromised service, intelligent technology, and exact process automation."
                badge="About"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Core Values</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                                At Collective, our name is a foundational belief. Our objective is to generate average 12% increases in cash flow through sheer revenue cycle improvements while adhering closely to a strict set of values.
                            </p>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", maxWidth: "800px" }}>
                            {values.map((v, i) => (
                                <AnimatedSection key={i} animation="fade-right" delay={i * 100}>
                                    <div className="glass" style={{ padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "var(--surface-color)", display: "flex", gap: "1rem", alignItems: "center", transition: "transform var(--transition-fast)" }}>
                                        <div style={{ background: "rgba(217, 4, 41, 0.1)", borderRadius: "50%", padding: "0.5rem", display: "flex", flexShrink: 0 }}>
                                            <Check size={24} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <p className="text-body" style={{ fontWeight: 500, margin: 0 }}>{v}</p>
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
