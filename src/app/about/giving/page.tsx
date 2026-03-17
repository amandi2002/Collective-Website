import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Heart, Globe, Building2, HandHeart } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "1-1-1 Giving Program | Collective RCM",
    description: "Learn about Collective's philanthropic giving program.",
};

const pillars = [
    { value: "1%", label: "Of Services", icon: Building2, desc: "We provide our services completely uncompensated to free clinics that do not accept insurance to help communities in need." },
    { value: "1%", label: "Of Employee Time", icon: HandHeart, desc: "We pay all our employees to use 1% of their annual working hours volunteering for causes they are passionate about." },
    { value: "1%", label: "Of Profits", icon: Globe, desc: "We donate a portion of our company profits in cash grants. These grants are entirely employee-directed to ensure everyone has a role." },
];

export default function GivingPage() {
    return (
        <main>
            <PageHero
                title="1-1-1 Giving Program"
                description="Our philanthropic commitment to give back to the communities that support our growth."
                badge="Community"
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>

                        <AnimatedSection>
                            <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Making a Difference Globally</h2>
                            <p className="text-body" style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                                We believe that healing should extend beyond healthcare providers to the local, national, and international communities. Our program dedicates a mandatory 1% of our services, employee time, and profits consistently towards charitable goals—primarily directed by our own employees.
                            </p>
                        </AnimatedSection>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {pillars.map((c, i) => (
                                <AnimatedSection key={i} animation="fade-up" delay={i * 200}>
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

                        <AnimatedSection animation="zoom-in" delay={400}>
                            <div style={{ marginTop: "4rem", padding: "4rem", backgroundColor: "rgba(217, 4, 41, 0.05)", borderRadius: "1rem", border: "1px solid rgba(217, 4, 41, 0.2)", textAlign: "center" }}>
                                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", color: "var(--primary-color)" }}>
                                    <Heart size={48} fill="currentColor" />
                                </div>
                                <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>Do you see an opportunity to help?</h2>
                                <p className="text-body" style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
                                    If you are part of an organization where our services, time, or grants could make a significant difference, please reach out to us.
                                </p>
                                <Link href="/contact" className="btn btn-primary btnLarge" style={{ padding: "1rem 2rem" }}>
                                    Contact Us Today <ArrowRight size={18} />
                                </Link>
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </section>
        </main>
    );
}
