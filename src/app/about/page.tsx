import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Compass, Users, Heart } from "lucide-react";

export const metadata = {
    title: "About Us | Collective RCM",
    description: "Learn more about Collective RCM, our approach, our team, and our philanthropic mission.",
};

const subpages = [
    { href: "/about/our-approach", icon: Compass, title: "Our Approach", desc: "Discover the core values that guide us. We simplify the healthcare revenue cycle through service, technology, and process automation." },
    { href: "/about/our-team", icon: Users, title: "Our Team", desc: "Meet the experts with over 100 years of combined experience in managing revenue cycles and maximizing reimbursements." },
    { href: "/about/giving", icon: Heart, title: "1-1-1 Giving", desc: "Learn about our commitment to giving back to the community via 1% of services, 1% of time, and 1% of profits." },
];

export default function AboutPage() {
    return (
        <main>
            <PageHero
                title="About Us"
                description="We are a premium RCM service provider focusing on revenue-cycle improvement for middle and upper-market healthcare providers."
                badge="Who We Are"
            />

            <section className="section-padding">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                    <AnimatedSection>
                        <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>The Collective Wisdom</h2>
                        <p className="text-body" style={{ maxWidth: "800px" }}>
                            Our goal is to use the collective wisdom of our team and clients to simplify the healthcare revenue cycle. Through premium service, advanced technology, and process automation, we enable you to focus primarily on patient care.
                        </p>
                    </AnimatedSection>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        {subpages.map((s, i) => (
                            <AnimatedSection key={i} animation="zoom-in" delay={i * 150}>
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
