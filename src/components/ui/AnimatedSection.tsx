"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in";
    delay?: number;
}

export default function AnimatedSection({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
}: AnimatedSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return "animate-fade-in-up";
            case "fade-left":
                return "animate-fade-in-left";
            case "fade-right":
                return "animate-fade-in-right";
            case "zoom-in":
                return "animate-zoom-in";
            default:
                return "animate-fade-in-up";
        }
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? getAnimationClass() : "opacity-0"}`}
            style={{
                animationDelay: isVisible ? `${delay}ms` : "0ms",
                animationFillMode: "forwards",
                opacity: isVisible ? undefined : 0,
            }}
        >
            {children}
        </div>
    );
}
