"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
    const footerRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!footerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.18 }
        );
        observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className={`${styles.footer} ${isVisible ? styles.revealVisible : ""}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <img src="/logo_new.webp" alt="Collective RCM" className={styles.logoImage} />
                        </Link>
                        <p className={styles.copyrightMain}>
                            &copy; {new Date().getFullYear()} Collective RCM. All rights reserved.
                        </p>
                        <div className={styles.legalLinks}>
                            <Link href="/terms" className={styles.inlineLink}>Terms of Use</Link>
                            <span className={styles.legalSep} aria-hidden="true">|</span>
                            <Link href="/privacy" className={styles.inlineLink}>Privacy Policy</Link>
                            <span className={styles.legalSep} aria-hidden="true">|</span>
                            <Link href="/cookies" className={styles.inlineLink}>Cookies Settings</Link>
                        </div>
                        <p className={styles.description}>
                            Collective is a premium RCM service provider that focuses on revenue cycle and operational
                            improvements for middle and upper market healthcare systems.
                        </p>

                        <div className={styles.supportBlock}>
                            <h3 className={styles.heading}>Support</h3>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <MapPin size={20} className={styles.contactIcon} />
                                    <span>2500 Dallas Parkway, Suite #500A<br />Plano, TX 75093</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <Phone size={20} className={styles.contactIcon} />
                                    <a href="tel:9724680030" className={styles.link}>(972) 468-0030</a>
                                </li>
                                <li className={styles.contactItem}>
                                    <Mail size={20} className={styles.contactIcon} />
                                    <a href="mailto:info@collectivercm.com" className={styles.link}>info@collectivercm.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.linksArea}>
                        <div className={styles.linksCol}>
                            <h3 className={styles.heading}>About Collective</h3>
                            <ul className={styles.list}>
                                <li><Link href="/about" className={styles.link}>Our Company</Link></li>
                                <li><Link href="/about/our-approach" className={styles.link}>Our Approach</Link></li>
                                <li><Link href="/about/our-team" className={styles.link}>Leadership Team</Link></li>
                                <li><Link href="/about/giving" className={styles.link}>1-1-1 Giving</Link></li>
                                <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linksCol}>
                            <h3 className={styles.heading}>How We Help</h3>
                            <ul className={styles.list}>
                                <li><Link href="/services/it-consulting" className={styles.link}>IT Consulting</Link></li>
                                <li><Link href="/services/rcm" className={styles.link}>Revenue Cycle Management</Link></li>
                                <li><Link href="/services/coding-audits" className={styles.link}>Coding & Audits</Link></li>
                                <li><Link href="/services/collective-air" className={styles.link}>CollectiveAIR™</Link></li>
                                <li><Link href="/products" className={styles.link}>Products Overview</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linksCol}>
                            <h3 className={styles.heading}>Products</h3>
                            <ul className={styles.list}>
                                <li><Link href="/products/analytics" className={styles.link}>CollectiveIQ Analytics</Link></li>
                                <li><Link href="/products/analytics#iq-modules" className={styles.link}>IDR Analytics Dashboard</Link></li>
                                <li><Link href="/products/ehr" className={styles.link}>CollectiveRecords EHR</Link></li>
                                <li><Link href="/products/practice-management" className={styles.link}>CollectivePractice</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linksCol}>
                            <h3 className={styles.heading}>AIR Products</h3>
                            <ul className={styles.list}>
                                <li><Link href="/services/collective-air/denial-management-chatbot" className={styles.link}>Denial Management Chatbot</Link></li>
                                <li><Link href="/services/collective-air/ai-claims-scrubber" className={styles.link}>AI Claims Scrubber</Link></li>
                                <li><Link href="/services/collective-air/denial-prediction-auto-appeal" className={styles.link}>Denial Prediction + Auto-Appeal Agent</Link></li>
                                <li><Link href="/services/collective-air/ai-ar-followup-agent" className={styles.link}>AI AR Follow-Up Agent</Link></li>
                                <li><Link href="/services/collective-air/intelligent-work-queue" className={styles.link}>Intelligent Work Queue Prioritization</Link></li>
                                <li><Link href="/services/collective-air/ai-patient-billing-assistant" className={styles.link}>AI Patient Billing Assistant</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.bottomCopy}>&copy; {new Date().getFullYear()} Collective RCM.</p>
                    <div className={styles.socials}>
                        <Link href="#" aria-label="Twitter" className={styles.socialLink}><Twitter size={18} /></Link>
                        <Link href="#" aria-label="Facebook" className={styles.socialLink}><Facebook size={18} /></Link>
                        <Link href="#" aria-label="LinkedIn" className={styles.socialLink}><Linkedin size={18} /></Link>
                        <Link href="#" aria-label="YouTube" className={styles.socialLink}><Youtube size={18} /></Link>
                        <Link href="#" aria-label="Instagram" className={styles.socialLink}><Instagram size={18} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
