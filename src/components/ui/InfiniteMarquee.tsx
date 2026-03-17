"use client";

import styles from "./InfiniteMarquee.module.css";
import { Command, HeartPulse, Crosshair, Box, ActivitySquare, ShieldPlus } from "lucide-react";

const logos = [
    { icon: Command, name: "City Health System" },
    { icon: HeartPulse, name: "Regional Cardiovascular" },
    { icon: Crosshair, name: "Precision Surgery Center" },
    { icon: Box, name: "United Clinics" },
    { icon: ActivitySquare, name: "LifeCare Network" },
    { icon: ShieldPlus, name: "Secure Health Partners" },
];

export default function InfiniteMarquee() {
    return (
        <div className={styles.marqueeContainer}>
            <h3 className={styles.marqueeTitle}>Trusted by industry leading healthcare providers</h3>
            <div className={styles.marqueeTrack}>
                {/* Triple the logos for seamless infinite loop on wide screens */}
                {[...logos, ...logos, ...logos].map((logo, i) => (
                    <div key={i} className={styles.logoItem}>
                        <logo.icon size={28} className={styles.icon} />
                        <span className={styles.logoText}>{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
