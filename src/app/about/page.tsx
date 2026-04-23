import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Compass, Users, Heart, Target, Layers, Sparkles } from "lucide-react";

export const metadata = {
    title: "About Us | Collective RCM",
    description:
        "Collective RCM helps middle- and upper-market healthcare organizations improve revenue cycle performance through consulting, managed services, software, and AI—guided by clear values and experienced leadership.",
};

const subpages = [
    { href: "/about/our-approach", icon: Compass, title: "Our Approach", desc: "How we partner with clients: assessment-first delivery, accountable execution, and values that put patients and long-term relationships first." },
    { href: "/about/our-team", icon: Users, title: "Our Team", desc: "Deep experience across revenue cycle, clinical operations, finance, and technology—structured to support complex organizations and multi-site health systems." },
    { href: "/about/giving", icon: Heart, title: "1-1-1 Giving", desc: "Our commitment to communities: 1% of services, 1% of employee time, and 1% of profits directed toward impact our teams believe in." },
];

const commitments = [
    {
        icon: Target,
        title: "Outcomes you can measure",
        body: "We align work to cash, denial performance, days in AR, and integrity metrics—so finance and operations share one definition of progress.",
    },
    {
        icon: Layers,
        title: "Discipline across the cycle",
        body: "From access through collections, we connect process, people, and platforms so improvements do not collapse at the next handoff.",
    },
    {
        icon: Sparkles,
        title: "Modern automation, responsibly deployed",
        body: "AI and RPA where they reduce risk and rework—not novelty. Governance, auditability, and escalation paths stay part of the design.",
    },
];

export default function AboutPage() {
    return (
        <main>
            <PageHero
                title="About Us"
                description="We are a premium revenue cycle partner for middle- and upper-market healthcare—combining consulting depth, managed RCM execution, cloud products, and CollectiveAI™ so organizations can improve cash flow without sacrificing control."
                badge="Who we are"
            />

            <section className="section-padding">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                    <AnimatedSection>
                        <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>The Collective wisdom</h2>
                        <div style={{ display: "grid", gap: "1.25rem", maxWidth: "820px" }}>
                            <p className="text-body" style={{ margin: 0 }}>
                                Our name reflects how we work: we bring together specialists, client leaders, and technology to simplify one of healthcare’s hardest problems—getting paid fairly and on time, without burying clinicians and staff in administrative friction.
                            </p>
                            <p className="text-body" style={{ margin: 0 }}>
                                Whether you need strategic guidance, hands-on revenue cycle operations, coding integrity, or intelligent automation, the through-line is the same: clear accountability, transparent reporting, and recommendations you can defend inside your organization.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={100}>
                        <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>What clients should expect</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                            {commitments.map((c) => (
                                <div
                                    key={c.title}
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
                                        <c.icon size={24} style={{ color: "var(--primary-color)" }} />
                                    </div>
                                    <h3 className="heading-3" style={{ fontSize: "1.15rem", margin: 0, color: "var(--secondary-color)" }}>
                                        {c.title}
                                    </h3>
                                    <p className="text-body" style={{ fontSize: "0.98rem", margin: 0 }}>
                                        {c.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={160}>
                        <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Explore our company</h2>
                        <p className="text-body" style={{ maxWidth: "720px", marginBottom: "2rem" }}>
                            Learn how we think, who we are, and how we invest in communities—then connect with us if you want to discuss your organization’s priorities.
                        </p>
                    </AnimatedSection>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        {subpages.map((s, i) => (
                            <AnimatedSection key={s.href} animation="zoom-in" delay={i * 150}>
                                <Link href={s.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                                    <div className="hover-tile" style={{ padding: "3rem", background: "white", borderRadius: "1rem", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", gap: "1.5rem", transition: "all var(--transition-normal)", height: "100%", boxShadow: "var(--shadow-sm)" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "1rem", backgroundColor: "rgba(217, 4, 41, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <s.icon size={32} style={{ color: "var(--primary-color)" }} />
                                        </div>
                                        <div>
                                            <h3 className="heading-3" style={{ color: "var(--secondary-color)", marginBottom: "1rem" }}>{s.title}</h3>
                                            <p className="text-body">{s.desc}</p>
                                        </div>
                                        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-color)", fontWeight: 600 }}>
                                            Learn more <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection animation="fade-up" delay={220}>
                        <div
                            style={{
                                padding: "2.5rem 2rem",
                                borderRadius: "1rem",
                                border: "1px solid var(--border-color)",
                                background: "var(--background-dark)",
                                textAlign: "center",
                            }}
                        >
                            <h2 className="heading-2" style={{ marginBottom: "1rem", color: "var(--secondary-color)" }}>Ready to talk?</h2>
                            <p className="text-body" style={{ maxWidth: "560px", margin: "0 auto 1.5rem" }}>
                                Share your context—growth, consolidation, denial pressure, or system change—and we will help you map practical next steps across services and products.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "0.9rem 1.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                    Contact us <ArrowRight size={18} />
                                </Link>
                                <Link href="/services" className="btn btn-secondary" style={{ padding: "0.9rem 1.5rem" }}>
                                    View services
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .hover-tile:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-premium);
          border-color: rgba(217, 4, 41, 0.3);
        }
      `}} />
        </main>
    );
}
