import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, Briefcase } from "lucide-react";

export const metadata = {
    title: "Products | Collective RCM",
    description: "Cloud-based software products designed to run seamlessly.",
};

const products = [
    { href: "/products/analytics", icon: BarChart3, title: "CollectiveIQ Analytics", desc: "A cloud-based analytics platform linking to multiple data sources to provide real-time insight into financial operations." },
    { href: "/products/ehr", icon: Cloud, title: "CollectiveRecords EHR", desc: "A cloud-based electronic health record (EHR) system with no expensive servers or IT staff required." },
    { href: "/products/practice-management", icon: Briefcase, title: "CollectivePractice", desc: "Cloud-based practice management and scheduling software designed for physician groups without maintenance costs." },
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
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
                        {products.map((s, i) => (
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
