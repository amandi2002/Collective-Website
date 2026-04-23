import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Products | Collective RCM",
    description:
        "CollectiveIQ Analytics, CollectiveRecords EHR, and CollectivePractice—cloud software for analytics, clinical documentation, and practice operations without heavy IT overhead.",
};

const products = [
    { href: "/products/analytics", title: "CollectiveIQ Analytics", desc: "A cloud-based analytics platform linking to multiple data sources to provide real-time insight into financial operations.", image: "/collectivewebite/CollectiveIQ.png" as const },
    { href: "/products/ehr", title: "CollectiveRecords EHR", desc: "A cloud-based electronic health record (EHR) system with no expensive servers or IT staff required.", image: "/collectivewebite/CollectiveRecords.png" as const },
    { href: "/products/practice-management", title: "CollectivePractice", desc: "Cloud-based practice management and scheduling software designed for physician groups without maintenance costs.", image: "/collectivewebite/CollectivePractice.png" as const },
];

export default function ProductsPage() {
    return (
        <main>
            <PageHero
                title="Our Products"
                description="Deliver simple, effective software that makes healthcare better."
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
                        <AnimatedSection animation="fade-up">
                            <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Software that supports the full care and revenue journey</h2>
                            <div style={{ display: "grid", gap: "1rem", maxWidth: "820px" }}>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Our product suite is intentionally cloud-first: fewer servers to maintain, faster rollout, and a consistent experience for teams working across locations. Each product integrates with the others so scheduling, documentation, billing, and analytics stay aligned.
                                </p>
                                <p className="text-body" style={{ margin: 0 }}>
                                    Explore each product below for capabilities, modules, and demo options—or talk to us about how Collective products pair with{" "}
                                    <Link href="/services/rcm" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                                        managed RCM services
                                    </Link>.
                                </p>
                            </div>
                        </AnimatedSection>
                        {products.map((s, i) => (
                            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                                <Link href={s.href} style={{ textDecoration: "none", display: "block" }}>
                                    <div style={{ padding: "3rem", background: "white", borderRadius: "1rem", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "2rem", transition: "all var(--transition-normal)", cursor: "pointer", boxShadow: "var(--shadow-sm)" }} className="hover-card">
                                        <div style={{ width: "120px", height: "88px", borderRadius: "1rem", backgroundColor: "rgba(217, 4, 41, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", border: "1px solid var(--border-color)" }}>
                                            <Image src={s.image} alt={`${s.title} preview`} width={240} height={176} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
