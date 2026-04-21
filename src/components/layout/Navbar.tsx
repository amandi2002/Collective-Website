"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            name: "Who We Help",
            href: "/services",
            subItems: [
                { name: "Providers", href: "/services/rcm" },
                { name: "Payers", href: "/services/it-consulting" },
                { name: "Pharmacies", href: "/services/coding-audits" },
            ],
        },
        {
            name: "Products",
            href: "/products",
            subItems: [
                { name: "CollectiveIQ", href: "/products/analytics" },
                { name: "CollectiveRecords", href: "/products/ehr" },
                { name: "CollectivePractice", href: "/products/practice-management" },
            ],
        },
        {
            name: "Our Company",
            href: "/about",
            subItems: [
                { name: "Our Approach", href: "/about/our-approach" },
                { name: "Our Team", href: "/about/our-team" },
                { name: "1-1-1 Giving", href: "/about/giving" },
            ],
        },
        { name: "Resources", href: "/about" },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarInner}`}>
                    <p className={styles.topMessage}>Your CMS Proposed Rule Breakdown: Key Takeaways and What to Do Next</p>
                    <div className={styles.topLinks}>
                        <Link href="/contact">Support</Link>
                        <Link href="/about/our-team">Careers</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo_new.webp" alt="Collective RCM" className={styles.logoImage} />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navItems}>
                        {navLinks.map((link) => (
                            <li key={link.name} className={styles.navItem}>
                                <Link href={link.href} className={styles.navLink}>
                                    {link.name}
                                    {link.subItems && <ChevronDown size={14} className={styles.chevron} />}
                                </Link>
                                {link.subItems && (
                                    <div className={styles.dropdown}>
                                        <ul className={styles.dropdownList}>
                                            {link.subItems.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link href={subItem.href} className={styles.dropdownLink}>
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.searchBtn} aria-label="Search">
                        <Search size={16} />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <ul className={styles.mobileNavItems}>
                        {navLinks.map((link) => (
                            <li key={link.name} className={styles.mobileNavItem}>
                                <Link
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.subItems && (
                                    <ul className={styles.mobileSubList}>
                                        {link.subItems.map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link
                                                    href={subItem.href}
                                                    className={styles.mobileSubLink}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.mobileActions}>
                        <Link
                            href="/contact"
                            className="btn btn-primary"
                            style={{ width: "100%" }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get a Consultation
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
