"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "./TestimonialCarousel.module.css";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
    {
        quote: "Collective provided leadership and operational improvements across our multi-billion-dollar public company operations.",
        author: "CFO, Multi-Billion-Dollar Public Company"
    },
    {
        quote: "Invaluable assistance with our ICD-10 planning and organizational transition. We simply wouldn't be where we are without their expertise.",
        author: "Director, Regional Health System"
    },
    {
        quote: "Normalized our claim submission time from 45 days down to 2 days, and immediately improved cash velocity by 10%.",
        author: "Partner, Specialty Practice Group"
    }
];

export default function TestimonialCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    return (
        <section className={styles.carouselSection}>
            <div className="container" style={{ position: "relative" }}>

                <AnimatedSection>
                    <div className={styles.header}>
                        <h2 className="heading-2" style={{ color: "white" }}>What Our Clients Say</h2>
                        <div className={styles.controls}>
                            <button onClick={prev} className={styles.navBtn}><ChevronLeft size={24} /></button>
                            <button onClick={next} className={styles.navBtn}><ChevronRight size={24} /></button>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="zoom-in" delay={200}>
                    <div className={styles.carouselViewport}>
                        <div
                            className={styles.carouselTrack}
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div key={i} className={styles.slide}>
                                    <div className={styles.card}>
                                        <div className={styles.quoteIconWrap}>
                                            <Quote size={64} fill="currentColor" />
                                        </div>
                                        <p className={styles.quoteText}>"{t.quote}"</p>
                                        <div className={styles.author}>
                                            <div className={styles.authorBadge}>{t.author.charAt(0)}</div>
                                            <span className={styles.authorName}>{t.author}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.dots}>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                            />
                        ))}
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
}
