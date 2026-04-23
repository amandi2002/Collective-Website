import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Heart, Globe, Building2, HandHeart, Users, Lightbulb } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "1-1-1 Giving Program | Collective RCM",
    description:
        "Collective’s 1-1-1 commitment: 1% of services, 1% of employee time, and 1% of profits to support communities—often employee-directed through grants and volunteering.",
};

const pillars = [
    { value: "1%", label: "Of services", icon: Building2, desc: "We provide our services completely uncompensated to free clinics that do not accept insurance—helping expand access where communities need it most." },
    { value: "1%", label: "Of employee time", icon: HandHeart, desc: "We pay employees to use 1% of annual working hours volunteering for causes they are passionate about—because impact should be personal, not performative." },
    { value: "1%", label: "Of profits", icon: Globe, desc: "We donate a portion of company profits in cash grants. Grants are employee-directed so everyone participates in where and how we give." },
];

const principles = [
    {
        icon: Users,
        title: "Employee-directed impact",
        body: "When people choose the causes closest to them, giving becomes a lived value—not a top-down checkbox. That is why grant decisions and volunteer time are anchored in our teams’ judgment.",
    },
    {
        icon: Lightbulb,
        title: "Practical generosity",
        body: "We prioritize initiatives where our services, time, or funding can change outcomes: clinics without insurance infrastructure, community health efforts, and organizations where a small lift creates outsized benefit.",
    },
];

export default function GivingPage() {
    return (
        <main>
            <PageHero
                title="1-1-1 Giving Program"
                description="A structured commitment to give back: 1% of services, 1% of employee time, and 1% of profits—directed toward communities and causes our teams believe in."
                badge="Community"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>Making a difference locally and globally</h2>
                            <div style={{ display: "grid", gap: "1.25rem", maxWidth: "820px" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    We believe healing extends beyond the walls of our client organizations. Healthcare is a human endeavor—and companies that benefit from healthier systems should reinvest in the communities that support them.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    The 1-1-1 model keeps giving proportional and consistent: it scales as we grow, stays accountable because it is public, and ensures philanthropy is part of how we operate—not an afterthought at year-end.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={100}>
                            <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Why we structured giving this way</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                                {principles.map((p) => (
                                    <div
                                        key={p.title}
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
                                            <p.icon size={24} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <h3 className="heading-3" style={{ fontSize: "1.1rem", margin: 0, color: "var(--secondary-color)" }}>
                                            {p.title}
                                        </h3>
                                        <p className="text-body" style={{ fontSize: "0.98rem", margin: 0 }}>
                                            {p.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={140}>
                            <h2 className="heading-2" style={{ marginBottom: "1rem", textAlign: "center" }}>The three commitments</h2>
                            <p className="text-body" style={{ maxWidth: "720px", margin: "0 auto 2rem", textAlign: "center" }}>
                                Each pillar is designed to be measurable, repeatable, and aligned with how Collective actually creates value in the world.
                            </p>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {pillars.map((c, i) => (
                                <AnimatedSection key={c.label} animation="fade-up" delay={i * 120}>
                                    <div className="glass" style={{ padding: "3rem", borderRadius: "1rem", height: "100%", border: "1px solid var(--border-color)", background: "white", textAlign: "center" }}>
                                        <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "var(--primary-color)", margin: "0 auto 2rem", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                                            <c.icon size={36} />
                                        </div>
                                        <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--secondary-color)", lineHeight: 1, marginBottom: "0.5rem" }}>
                                            {c.value}
                                        </div>
                                        <h3 className="heading-3" style={{ marginBottom: "1rem", color: "var(--text-main)" }}>{c.label}</h3>
                                        <p className="text-body" style={{ color: "var(--text-muted)" }}>{c.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>

                        <AnimatedSection animation="fade-up" delay={200}>
                            <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "var(--background-dark)", maxWidth: "820px", margin: "0 auto" }}>
                                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Stewardship and transparency</h3>
                                <p className="text-body" style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                                    We treat giving with the same seriousness as client delivery: clear intent, responsible use of resources, and respect for the organizations and people we support. If you represent a nonprofit or clinic and want to explore alignment with our program, we welcome a conversation.
                                </p>
                                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                                    For client partnerships and services, visit{" "}
                                    <Link href="/services" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        Services
                                    </Link>
                                    {" "}or learn more about{" "}
                                    <Link href="/about" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        our company
                                    </Link>
                                    .
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="zoom-in" delay={260}>
                            <div style={{ marginTop: "1rem", padding: "4rem 2rem", backgroundColor: "rgba(217, 4, 41, 0.05)", borderRadius: "1rem", border: "1px solid rgba(217, 4, 41, 0.2)", textAlign: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", color: "var(--primary-color)" }}>
                                    <Heart size={48} fill="currentColor" />
                                </div>
                                <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Do you see an opportunity to help?</h2>
                                <p className="text-body" style={{ maxWidth: "640px", margin: "0 auto 2rem" }}>
                                    If you are part of an organization where our services, volunteer time, or grants could make a meaningful difference, tell us about your mission and how we might partner.
                                </p>
                                <Link href="/contact" className="btn btn-primary btnLarge" style={{ padding: "1rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                    Contact us today <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
