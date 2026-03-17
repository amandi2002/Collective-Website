import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Brand/About */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <img src="/logo_new.webp" alt="Collective RCM" className={styles.logoImage} />
                        </Link>
                        <p className={styles.description}>
                            Collective is a premium RCM service provider that focuses on revenue cycle and operational
                            improvements for middle and upper market healthcare systems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksCol}>
                        <h3 className={styles.heading}>Company</h3>
                        <ul className={styles.list}>
                            <li><Link href="/about" className={styles.link}>About Us</Link></li>
                            <li><Link href="/services" className={styles.link}>Services</Link></li>
                            <li><Link href="/products" className={styles.link}>Products</Link></li>
                            <li><Link href="/about/giving" className={styles.link}>1-1-1 Giving</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.contactCol}>
                        <h3 className={styles.heading}>Contact</h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <MapPin size={20} className={styles.contactIcon} />
                                <span>
                                    2500 Dallas Parkway, Suite #500A<br />
                                    Plano, TX 75093
                                </span>
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

                    {/* Newsletter */}
                    <div className={styles.newsletterCol}>
                        <h3 className={styles.heading}>Newsletter</h3>
                        <p className={styles.newsletterText}>
                            Subscribe to our newsletter for news and special offers.
                        </p>
                        <form className={styles.form}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className={`input-field ${styles.input}`}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Collective RCM. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
