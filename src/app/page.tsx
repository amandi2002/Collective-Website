import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Clock, DollarSign, Activity, Users, Shield, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/home/ContactForm";
import HeroCollage from "@/components/ui/HeroCollage";
import HeroCarousel from "@/components/ui/HeroCarousel";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import InteractiveDashboard from "@/components/ui/InteractiveDashboard";
import InteractiveEHR from "@/components/ui/InteractiveEHR";
import InteractivePractice from "@/components/ui/InteractivePractice";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Background glowing orbs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.gridOverlay}></div>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>
        <div className={`container ${styles.heroContent} `}>
          <div className={styles.heroText}>
            <AnimatedSection animation="fade-right">

              <h1 className="heading-1">
                Increase revenue and <span className={styles.textHighlight}>cash flow.</span>
              </h1>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", maxWidth: "600px", fontSize: "1.25rem" }}>
                Track the financial health of your patient, payor, and provider base to identify key concerns and implement best practices.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/services/rcm" className={`btn btn - primary ${styles.btnLarge} `}>
                  Learn More <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className={`btn btn - white ${styles.btnLarge} `}>
                  Get Started
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-left" delay={200} className={`${styles.heroSecondaryCard}`}>
            <HeroCollage />
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics Section overlapping Hero */}
      <section className={styles.metricsWrapper} style={{ position: "relative", zIndex: 20 }}>
        <div className={`container`}>
          <AnimatedSection animation="fade-up" delay={400}>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricIconWrap}><DollarSign size={28} /></div>
                <div className={styles.metricValue}>98%</div>
                <div className={styles.metricLabel}>New Collection</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricIconWrap}><Clock size={28} /></div>
                <div className={styles.metricValue}>40 Days</div>
                <div className={styles.metricLabel}>Days in AR</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricIconWrap}><TrendingUp size={28} /></div>
                <div className={styles.metricValue}>20%</div>
                <div className={styles.metricLabel}>AR over 90 days</div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricIconWrap}><CheckCircle2 size={28} /></div>
                <div className={styles.metricValue}>95%</div>
                <div className={styles.metricLabel}>First pass clean claim</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Section (Text + Interactive Data Grid) */}
      <section className={styles.featuredSection}>
        <div className={`container ${styles.splitGrid} `}>
          <div className={styles.splitText}>
            <AnimatedSection animation="fade-right">
              <div className={styles.badgeSolid}>Premium RCM Services</div>
              <h2 className="heading-2" style={{ marginBottom: "1.5rem", marginTop: "1.5rem", color: "var(--secondary-color)" }}>
                We do the tedious work, so you can focus on healing.
              </h2>
              <p className="text-body" style={{ marginBottom: "2rem", fontSize: "1.125rem", color: "var(--text-main)" }}>
                Our team of MBAs, MDs, and CPAs actively tracks your performance metrics against national standards, aligning incentives to guarantee maximum collections.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ background: "rgba(217, 4, 41, 0.1)", color: "var(--primary-color)", padding: "1rem", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 0.25rem 0", color: "var(--secondary-color)" }}>Audit Protection</h4>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-muted)" }}>Defend against rigorous payor audits and clawbacks.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ background: "rgba(217, 4, 41, 0.1)", color: "var(--primary-color)", padding: "1rem", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 0.25rem 0", color: "var(--secondary-color)" }}>Rapid Execution</h4>
                    <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-muted)" }}>Streamline claim submissions and denial management.</p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn btn-primary">
                Discover our methodology <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
          <div className={styles.splitImageCol}>
            <AnimatedSection animation="fade-left" delay={200}>
              <HeroCarousel />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Infinite Marquee of Logos */}
      <InfiniteMarquee />

      {/* Services Section with glowing background */}
      <section className={styles.services}>
        <div className={styles.redBlobBg}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AnimatedSection animation="fade-up">
            <div className={styles.sectionHeader}>
              <h2 className="heading-2">Service Offerings</h2>
              <p className="text-body" style={{ maxWidth: "600px", margin: "0 auto" }}>
                Comprehensive, customized solutions tailored specifically for middle and upper market healthcare systems.
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.servicesGrid}>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Activity size={32} /></div>
                <h3 className="heading-3">Information Technology Consulting</h3>
                <p className="text-body" style={{ fontSize: "1rem", flex: 1 }}>
                  Our consulting team helps you optimize infrastructure to support high-volume billing efficiently and securely.
                </p>
                <Link href="/services/it-consulting" className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><DollarSign size={32} /></div>
                <h3 className="heading-3">Revenue Cycle Management</h3>
                <p className="text-body" style={{ fontSize: "1rem", flex: 1 }}>
                  A high-touch approach to collect more cash, improve operational efficiency, and establish precise visibility.
                </p>
                <Link href="/services/rcm" className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><BarChart3 size={32} /></div>
                <h3 className="heading-3">Coding & Auditing</h3>
                <p className="text-body" style={{ fontSize: "1rem", flex: 1 }}>
                  Trained certified coders actively reduce coding errors, mitigate risks, and help to keep you fully compliant.
                </p>
                <Link href="/services/coding-audits" className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tech Product Section */}
      <section className={`${styles.productSection} ${styles.bgDark}`}>
        <div className={`container ${styles.splitGridRev} `}>
          <div className={styles.splitImageCol}>
            <AnimatedSection animation="fade-right">
              <InteractiveDashboard />
            </AnimatedSection>
          </div>
          <div className={styles.splitText}>
            <AnimatedSection animation="fade-left" delay={200}>
              <div className={styles.badgeOutline}>Software Products</div>
              <h2 className="heading-2" style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                Real-Time Insights with CollectiveIQ
              </h2>
              <p className="text-body" style={{ marginBottom: "2rem" }}>
                Typical practice management and financial systems fail to provide deep intelligence. CollectiveIQ aggregates data from across multiple platforms to deliver high-quality, actionable, on-demand reporting.
              </p>
              <Link href="/products/analytics" className="btn btn-secondary">
                View our Analytics Dashboard <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* EHR Section */}
      <section className={`${styles.productSection} ${styles.bgWhite}`}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.splitText}>
            <AnimatedSection animation="fade-right">
              <div className={styles.badgeSolid} style={{ backgroundColor: "var(--primary-color)", color: "white" }}>EHR Platform</div>
              <h2 className="heading-2" style={{ marginBottom: "1.5rem", marginTop: "1.5rem", color: "var(--secondary-color)" }}>
                Cloud-based access with CollectiveRecords
              </h2>
              <p className="text-body" style={{ marginBottom: "2rem" }}>
                No expensive servers or full-time IT staff required. Runs on existing desktops, laptops, tablets, and phones. Accessible instantly without long integration periods so your providers can see more patients immediately.
              </p>
              <Link href="/products/ehr" className="btn btn-primary">
                Explore CollectiveRecords <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
          <div className={styles.splitImageCol}>
            <AnimatedSection animation="fade-left" delay={200}>
              <InteractiveEHR />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Practice Management Section */}
      <section className={`${styles.productSection} ${styles.bgLight}`}>
        <div className={`container ${styles.splitGridRev}`}>
          <div className={styles.splitImageCol}>
            <AnimatedSection animation="fade-right">
              <InteractivePractice />
            </AnimatedSection>
          </div>
          <div className={styles.splitText}>
            <AnimatedSection animation="fade-left" delay={200}>
              <div className={styles.badgeOutline} style={{ color: "var(--primary-color)", borderColor: "var(--primary-color)" }}>Practice Management</div>
              <h2 className="heading-2" style={{ marginBottom: "1.5rem", marginTop: "1.5rem", color: "var(--secondary-color)" }}>
                Streamlined Workflows with CollectivePractice
              </h2>
              <p className="text-body" style={{ marginBottom: "2rem", color: "var(--text-main)" }}>
                Easily register, schedule, and instantly verify patient eligibility avoiding surprises. Connected with streamlined charge entry and robust claims tracking, it replaces incredibly expensive enterprise software with an agile cloud solution.
              </p>
              <Link href="/products/practice-management" className="btn btn-primary">
                Demo CollectivePractice <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={`container ${styles.contactWrapper} `}>
          <div className={styles.contactInfo}>
            <AnimatedSection animation="fade-right">
              <h2 className="heading-2" style={{ color: "white", marginBottom: "1.5rem" }}>Ready to redefine your financial performance?</h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "3rem", fontSize: "1.125rem" }}>
                Start a conversation with our healthcare financial experts today. We build custom solutions designed to scale.
              </p>

              <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "white" }}>
                  <div style={{ padding: "1rem", background: "rgba(217, 4, 41, 0.4)", borderRadius: "50%" }}>
                    <Activity size={32} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Maximize Revenue</h4>
                    <p style={{ color: "rgba(255,255,255,0.7)" }}>Collect more cash smoothly.</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "white" }}>
                  <div style={{ padding: "1rem", background: "rgba(217, 4, 41, 0.4)", borderRadius: "50%" }}>
                    <Shield size={32} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Ensure Compliance</h4>
                    <p style={{ color: "rgba(255,255,255,0.7)" }}>Trustworthy auditing protocols.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className={styles.contactFormWrapper}>
            <AnimatedSection animation="fade-up" delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
