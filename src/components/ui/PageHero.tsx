import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
    title: string;
    description: string;
    badge?: string;
    children?: ReactNode;
}

export default function PageHero({ title, description, badge, children }: PageHeroProps) {
    return (
        <section className="page-hero">
            <div className="container page-hero-content">
                <AnimatedSection animation="fade-up">
                    {badge && (
                        <div className="badge" style={{ marginBottom: "1rem" }}>
                            {badge}
                        </div>
                    )}
                    <h1 className="heading-1" style={{ marginBottom: "1.5rem" }}>
                        {title}
                    </h1>
                    <p className="text-body" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", fontSize: "1.25rem" }}>
                        {description}
                    </p>
                    {children}
                </AnimatedSection>
            </div>
        </section>
    );
}
