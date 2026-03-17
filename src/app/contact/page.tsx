import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/home/ContactForm";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
    title: "Contact Us | Collective RCM",
    description: "Get in touch with Collective RCM for all your healthcare revenue cycle management needs.",
};

export default function ContactPage() {
    return (
        <main>
            <PageHero
                title="Contact Us"
                description="We are here to help your organization achieve financial excellence. Reach out to discuss how our solutions can integrate seamlessly with your healthcare system."
            />

            <section className="section-padding bg-light">
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>

                    <AnimatedSection animation="fade-right">
                        <h2 className="heading-2" style={{ marginBottom: "2rem" }}>Get In Touch</h2>
                        <p className="text-body" style={{ marginBottom: "2rem" }}>
                            Our expert team of MBAs, MDs, and CPAs is ready to build a premium, tailored RCM solution for your practice.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                <div style={{ color: "var(--primary-color)", marginTop: "0.25rem" }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: "1.125rem", marginBottom: "0.25rem" }}>Our Office</h4>
                                    <p className="text-body">2500 Dallas Parkway, Suite #500A<br />Plano, TX 75093</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                <div style={{ color: "var(--primary-color)", marginTop: "0.25rem" }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: "1.125rem", marginBottom: "0.25rem" }}>Call Us</h4>
                                    <a href="tel:9724680030" className="text-body" style={{ textDecoration: "none", color: "inherit" }}>(972) 468-0030</a>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                <div style={{ color: "var(--primary-color)", marginTop: "0.25rem" }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: "1.125rem", marginBottom: "0.25rem" }}>Email Us</h4>
                                    <a href="mailto:info@collectivercm.com" className="text-body" style={{ textDecoration: "none", color: "inherit" }}>info@collectivercm.com</a>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-left" delay={200}>
                        <div style={{ background: "white", padding: "3rem", borderRadius: "1rem", boxShadow: "var(--shadow-lg)" }}>
                            <ContactForm />
                        </div>
                    </AnimatedSection>

                </div>
            </section>
        </main>
    );
}
