"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroCarousel.module.css";
import InteractiveDashboard from "./InteractiveDashboard";
import InteractiveEHR from "./InteractiveEHR";
import InteractivePractice from "./InteractivePractice";

const slides = [
    { id: "iq", component: <InteractiveDashboard />, label: "CollectiveIQ" },
    { id: "ehr", component: <InteractiveEHR />, label: "CollectiveRecords" },
    { id: "practice", component: <InteractivePractice />, label: "CollectivePractice" },
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                {slides.map((slide, index) => {
                    let position = "inactive";
                    if (index === currentIndex) position = "active";
                    else if (index === (currentIndex + 1) % slides.length) position = "next";
                    else if (index === (currentIndex - 1 + slides.length) % slides.length) position = "prev";

                    return (
                        <div key={slide.id} className={`${styles.slide} ${styles[position]}`}>
                            <div className={styles.componentWrapper}>
                                {/* Scale it and force it to fill the height precisely */}
                                <div className={styles.scalingDiv}>
                                    {slide.component}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Dots */}
            <div className={styles.controls}>
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to ${slide.label}`}
                    />
                ))}
            </div>
        </div>
    );
}
