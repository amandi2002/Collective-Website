"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, ChevronRight } from "lucide-react";
import styles from "./Navbar.module.css";

type MegaLink = { name: string; href: string };

type MegaCategory = {
    name: string;
    href: string;
    links: MegaLink[];
};

type MegaConfig = {
    featuredTitle: string;
    featuredDescription: string;
    /** Public path e.g. /image.jpg — optional photo behind featured copy */
    featuredImage?: string;
    categories: MegaCategory[];
};

type NavEntry =
    | { name: string; href: string; mega: MegaConfig }
    | { name: string; href: string; mega?: undefined };

const navLinks: NavEntry[] = [
    {
        name: "Who We Help",
        href: "/services",
        mega: {
            featuredTitle: "Healthcare Empowered®",
            featuredDescription:
                "Enabling the power of data to improve healthcare outcomes and economics. Tailored support for organizations that need stronger revenue performance and operational clarity.",
            featuredImage: "/img.png",
            categories: [
                {
                    name: "Information Technology Consulting",
                    href: "/services/it-consulting",
                    links: [
                        { name: "IT Consulting Overview", href: "/services/it-consulting" },
                        { name: "Infrastructure & Security", href: "/services/it-consulting" },
                        { name: "Get Started", href: "/contact" },
                    ],
                },
                {
                    name: "Revenue Cycle Management",
                    href: "/services/rcm",
                    links: [
                        { name: "RCM Overview", href: "/services/rcm" },
                        { name: "Collections & AR", href: "/services/rcm" },
                        { name: "Schedule a Consultation", href: "/contact" },
                    ],
                },
                {
                    name: "Coding & Auditing",
                    href: "/services/coding-audits",
                    links: [
                        { name: "Coding & Audits Overview", href: "/services/coding-audits" },
                        { name: "Compliance & Documentation", href: "/services/coding-audits" },
                        { name: "Contact Us", href: "/contact" },
                    ],
                },
                {
                    name: "CollectiveAIR™",
                    href: "/services/collective-air",
                    links: [
                        { name: "CollectiveAIR Overview", href: "/services/collective-air" },
                        { name: "AI-Powered RCM", href: "/services/collective-air" },
                        { name: "Explore CollectiveAIR™", href: "/services/collective-air" },
                    ],
                },
            ],
        },
    },
    {
        name: "Products",
        href: "/products",
        mega: {
            featuredTitle: "Software Built for Healthcare",
            featuredDescription:
                "Analytics, EHR, and practice management tools that connect your clinical and financial workflows in one ecosystem.",
            featuredImage: "/pexels-tiger-lily-7109205.jpg",
            categories: [
                {
                    name: "CollectiveIQ",
                    href: "/products/analytics",
                    links: [
                        { name: "Analytics Overview", href: "/products/analytics" },
                        { name: "Reporting & Dashboards", href: "/products/analytics" },
                        { name: "Request a Demo", href: "/contact" },
                    ],
                },
                {
                    name: "CollectiveRecords",
                    href: "/products/ehr",
                    links: [
                        { name: "EHR Overview", href: "/products/ehr" },
                        { name: "Cloud Access", href: "/products/ehr" },
                        { name: "Learn More", href: "/products/ehr" },
                    ],
                },
                {
                    name: "CollectivePractice",
                    href: "/products/practice-management",
                    links: [
                        { name: "Practice Management Overview", href: "/products/practice-management" },
                        { name: "Scheduling & Eligibility", href: "/products/practice-management" },
                        { name: "Demo CollectivePractice", href: "/contact" },
                    ],
                },
            ],
        },
    },
    {
        name: "Our Company",
        href: "/about",
        mega: {
            featuredTitle: "The Collective Difference",
            featuredDescription:
                "We combine clinical insight, financial expertise, and technology to help healthcare organizations thrive.",
            featuredImage: "/img2.png",
            categories: [
                {
                    name: "Our Approach",
                    href: "/about/our-approach",
                    links: [
                        { name: "Methodology", href: "/about/our-approach" },
                        { name: "Why Collective", href: "/about/our-approach" },
                    ],
                },
                {
                    name: "Our Team",
                    href: "/about/our-team",
                    links: [{ name: "Leadership & Experts", href: "/about/our-team" }],
                },
                {
                    name: "1-1-1 Giving",
                    href: "/about/giving",
                    links: [
                        { name: "Community Impact", href: "/about/giving" },
                        { name: "Get Involved", href: "/about/giving" },
                    ],
                },
            ],
        },
    },
    {
        name: "Resources",
        href: "/about",
        mega: {
            featuredTitle: "Insights & Support",
            featuredDescription:
                "Stay current on revenue cycle trends, regulatory updates, and best practices from our team.",
            featuredImage: "/img3.png",
            categories: [
                {
                    name: "Knowledge Center",
                    href: "/about/our-approach",
                    links: [
                        { name: "Our Approach", href: "/about/our-approach" },
                        { name: "Services Overview", href: "/services" },
                    ],
                },
                {
                    name: "Get in Touch",
                    href: "/contact",
                    links: [
                        { name: "Contact Us", href: "/contact" },
                        { name: "Support", href: "/contact" },
                    ],
                },
            ],
        },
    },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMega, setOpenMega] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setActiveCategory(0);
    }, [openMega]);

    const currentEntry = navLinks.find((l) => l.name === openMega);
    const currentMega =
        currentEntry && "mega" in currentEntry && currentEntry.mega ? currentEntry.mega : null;

    return (
        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
            onMouseLeave={() => setOpenMega(null)}
        >
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarInner}`}>
                    <p className={styles.topMessage}>
                        Revenue cycle expertise for healthcare organizations—stronger collections, clearer visibility, and lasting financial performance.
                    </p>
                    <div className={styles.topLinks}>
                        <Link href="/contact">Support</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo_new.webp" alt="Collective RCM" className={styles.logoImage} />
                </Link>

                <nav className={styles.desktopNav} aria-label="Main">
                    <ul className={styles.navItems}>
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className={styles.navItem}
                                onMouseEnter={() => {
                                    if ("mega" in link && link.mega) setOpenMega(link.name);
                                    else setOpenMega(null);
                                }}
                            >
                                <Link href={link.href} className={styles.navLink}>
                                    {link.name}
                                    {"mega" in link && link.mega ? <ChevronDown size={14} className={styles.chevron} /> : null}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.searchBtn} aria-label="Search">
                        <Search size={16} />
                    </button>
                </div>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop mega menu — full width below header row */}
            {openMega && currentMega && (
                <div className={styles.megaPanel}>
                    <div className={styles.megaInner}>
                        <div
                            className={`${styles.megaFeatured} ${currentMega.featuredImage ? styles.megaFeaturedWithPhoto : ""}`}
                            style={
                                currentMega.featuredImage
                                    ? {
                                          backgroundImage: `linear-gradient(165deg, rgba(217, 4, 41, 0.58) 0%, rgba(120, 0, 18, 0.72) 50%, rgba(20, 6, 10, 0.65) 100%), url(${currentMega.featuredImage})`,
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                          backgroundRepeat: "no-repeat",
                                      }
                                    : undefined
                            }
                        >
                            <p className={styles.megaFeaturedKicker}>Collective RCM</p>
                            <h2 className={styles.megaFeaturedTitle}>{currentMega.featuredTitle}</h2>
                            <p className={styles.megaFeaturedDesc}>{currentMega.featuredDescription}</p>
                        </div>
                        <div className={styles.megaMiddle}>
                            <ul className={styles.megaCategoryList}>
                                {currentMega.categories.map((cat, idx) => (
                                    <li key={cat.name}>
                                        <button
                                            type="button"
                                            className={`${styles.megaCategoryBtn} ${idx === activeCategory ? styles.megaCategoryBtnActive : ""}`}
                                            onMouseEnter={() => setActiveCategory(idx)}
                                            onFocus={() => setActiveCategory(idx)}
                                        >
                                            <span>{cat.name}</span>
                                            <ChevronRight size={18} className={styles.megaCategoryChevron} aria-hidden />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.megaRight}>
                            <ul className={styles.megaDetailList}>
                                {currentMega.categories[activeCategory]?.links.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className={styles.megaDetailLink}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={currentMega.categories[activeCategory]?.href ?? "#"}
                                className={styles.megaViewAll}
                            >
                                View section
                            </Link>
                        </div>
                    </div>
                </div>
            )}

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
                                {"mega" in link && link.mega ? (
                                    <ul className={styles.mobileSubList}>
                                        {link.mega.categories.flatMap((cat) =>
                                            cat.links.map((sub) => (
                                                <li key={`${cat.name}-${sub.name}`}>
                                                    <Link
                                                        href={sub.href}
                                                        className={styles.mobileSubLink}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                ) : null}
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
