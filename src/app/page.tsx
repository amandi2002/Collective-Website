import Link from "next/link";
import { ArrowRight, BarChart3, DollarSign, Activity, Zap, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProductShowcase from "@/components/ui/ProductShowcase";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import InteractiveDashboard from "@/components/ui/InteractiveDashboard";
import styles from "./page.module.css";

export default function Home() {
  const airProducts = [
    { title: "Denial Management Chatbot", href: "/services/collective-air/denial-management-chatbot" },
    { title: "AI Claims Scrubber", href: "/services/collective-air/ai-claims-scrubber" },
    { title: "Denial Prediction + Auto-Appeal Agent", href: "/services/collective-air/denial-prediction-auto-appeal" },
    { title: "AI AR Follow-Up Agent", href: "/services/collective-air/ai-ar-followup-agent" },
    { title: "Intelligent Work Queue Prioritization", href: "/services/collective-air/intelligent-work-queue" },
    { title: "AI Patient Billing Assistant", href: "/services/collective-air/ai-patient-billing-assistant" },
  ];

  return (
    <div className={styles.page}>
      {/* Background glowing orbs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <video autoPlay muted loop playsInline className={styles.heroVideo}>
            <source src="/3141211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <AnimatedSection animation="fade-right">
              <h1 className={`heading-1 ${styles.heroHeading}`}>
                Healthcare Empowered<span className={styles.heroReg}></span>
              </h1>
              <p className={`text-body ${styles.heroDescription}`}>
                Enabling the power of data to improve healthcare outcomes and economics
              </p>
            </AnimatedSection>
          </div>

        </div>

        {/* Bottom service preview cards (Inovalon-style) */}
        <div className={styles.heroBottomCards}>
          <AnimatedSection animation="fade-up" delay={300}>
            <div className={`container ${styles.heroBottomInner}`}>
              <div className={styles.heroBottomGrid}>
                <Link href="/services/rcm" className={styles.heroBottomItem}>
                  <DollarSign size={22} className={styles.heroBottomIcon} />
                  <div className={styles.heroBottomText}>
                    <h4>Revenue Cycle Management</h4>
                    <p>A high-touch approach to collect more cash, improve operational efficiency, and establish precise visibility.</p>
                  </div>
                  <ArrowRight size={18} className={styles.heroBottomArrow} />
                </Link>
                <Link href="/services/it-consulting" className={styles.heroBottomItem}>
                  <Zap size={22} className={styles.heroBottomIcon} />
                  <div className={styles.heroBottomText}>
                    <h4>IT Consulting</h4>
                    <p>Optimize your infrastructure to support high-volume billing efficiently and securely.</p>
                  </div>
                  <ArrowRight size={18} className={styles.heroBottomArrow} />
                </Link>
                <Link href="/services/coding-audits" className={styles.heroBottomItem}>
                  <BarChart3 size={22} className={styles.heroBottomIcon} />
                  <div className={styles.heroBottomText}>
                    <h4>Coding &amp; Auditing</h4>
                    <p>Certified coders actively reduce errors, mitigate risks, and keep you fully compliant.</p>
                  </div>
                  <ArrowRight size={18} className={styles.heroBottomArrow} />
                </Link>
                <Link href="/services/collective-air" className={`${styles.heroBottomItem} ${styles.heroBottomItemAI}`}>
                  <Sparkles size={22} className={styles.heroBottomIcon} />
                  <div className={styles.heroBottomText}>
                    <h4>CollectiveAIR™</h4>
                    <p>AI-powered Revenue Cycle Management that learns, adapts, and maximizes collections autonomously.</p>
                  </div>
                  <ArrowRight size={18} className={styles.heroBottomArrow} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Infinite Marquee of Logos */}
      <InfiniteMarquee />

      {/* Featured Section — Product Showcase */}
      <ProductShowcase />

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
                <div className={styles.serviceIcon}><Activity size={28} /></div>
                <h3 className={`heading-3 ${styles.serviceTitle}`}>Information Technology Consulting</h3>
                <p className={`text-body ${styles.serviceDescription}`}>
                  Our consulting team helps you optimize infrastructure to support high-volume billing efficiently and securely.
                </p>
                <Link href="/services/it-consulting" className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><DollarSign size={28} /></div>
                <h3 className={`heading-3 ${styles.serviceTitle}`}>Revenue Cycle Management</h3>
                <p className={`text-body ${styles.serviceDescription}`}>
                  A high-touch approach to collect more cash, improve operational efficiency, and establish precise visibility.
                </p>
                <Link href="/services/rcm" className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><BarChart3 size={28} /></div>
                <h3 className={`heading-3 ${styles.serviceTitle}`}>Coding & Auditing</h3>
                <p className={`text-body ${styles.serviceDescription}`}>
                  Trained certified coders actively reduce coding errors, mitigate risks, and help to keep you fully compliant.
                </p>
                <Link href="/services/coding-audits" className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className={`${styles.serviceCard} ${styles.serviceCardAI}`}>
                <div className={styles.serviceIconAI}><Sparkles size={28} /></div>
                <h3 className={`heading-3 ${styles.serviceTitle}`}>CollectiveAIR™</h3>
                <p className={`text-body ${styles.serviceDescription}`}>
                  AI-powered Revenue Cycle Management that autonomously learns your workflows, predicts denials, and maximizes collections.
                </p>
                <Link href="/services/collective-air" className={styles.serviceLink}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tech Product Section — hidden */}
      <section className={`${styles.productSection} ${styles.bgDark}`} style={{ display: "none" }}>
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

      {/* CollectiveAIR — AI-Based RCM Section */}
      <section className={`${styles.productSection} ${styles.bgDark} ${styles.airSection}`}>
        <div className={styles.airBg}>
          <video autoPlay muted loop playsInline className={styles.airVideo}>
            <source src="/3141211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className={styles.airVideoOverlay}></div>
        </div>
        <div className={`container ${styles.airLayout}`}>
          <div className={styles.airIntro}>
            <AnimatedSection animation="fade-right">
              <div className={`${styles.badgeSolid} ${styles.badgeAI}`}>AI-Powered Innovation</div>
              <h2 className="heading-2" style={{ marginBottom: "1.25rem", marginTop: "1.25rem", color: "white" }}>
                Introducing CollectiveAIR™
              </h2>
              <p className="text-body" style={{ marginBottom: "2rem", color: "rgba(255,255,255,0.88)", maxWidth: "560px" }}>
                A next-generation AI Revenue Cycle platform designed to predict denials, automate claims workflows,
                and accelerate collections with intelligent product agents.
              </p>
              <Link href="/services/collective-air" className="btn btn-secondary">
                Explore CollectiveAIR™ <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
          <div className={styles.airBoxes}>
            <AnimatedSection animation="fade-left" delay={150}>
              <div className={styles.airBoxGrid}>
                {airProducts.map((product) => (
                  <Link key={product.title} href={product.href} className={styles.airBoxCard}>
                    <div className={styles.airBoxIcon}>
                      <Sparkles size={18} />
                    </div>
                    <h3>{product.title}</h3>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
