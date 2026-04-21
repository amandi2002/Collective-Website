import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Clock, DollarSign, Activity, Shield, Zap, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroCarousel from "@/components/ui/HeroCarousel";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import InteractiveDashboard from "@/components/ui/InteractiveDashboard";
import InteractiveEHR from "@/components/ui/InteractiveEHR";
import InteractivePractice from "@/components/ui/InteractivePractice";
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
          <video autoPlay muted loop playsInline className={styles.heroVideo}>
            <source src="/3141211-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.gridOverlay}></div>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <AnimatedSection animation="fade-right">
              <h1 className={`heading-1 ${styles.heroHeading}`}>
                Healthcare Empowered<span className={styles.heroReg}>®</span>
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

      {/* CollectiveAIR — AI-Based RCM Section */}
      <section className={`${styles.productSection} ${styles.bgDark} ${styles.airSection}`}>
        <div className={`container ${styles.splitGridRev}`}>
          <div className={styles.splitImageCol}>
            <AnimatedSection animation="fade-right">
              <div className={styles.airVisual}>
                <div className={styles.airGlowBg}></div>
                <div className={styles.airMetrics}>
                  <div className={styles.airMetricItem}>
                    <TrendingUp size={24} />
                    <span className={styles.airMetricValue}>34%</span>
                    <span className={styles.airMetricLabel}>Denial Rate Reduction</span>
                  </div>
                  <div className={styles.airMetricItem}>
                    <DollarSign size={24} />
                    <span className={styles.airMetricValue}>$2.4M</span>
                    <span className={styles.airMetricLabel}>Avg. Revenue Recovered</span>
                  </div>
                  <div className={styles.airMetricItem}>
                    <Clock size={24} />
                    <span className={styles.airMetricValue}>72%</span>
                    <span className={styles.airMetricLabel}>Faster Claim Resolution</span>
                  </div>
                  <div className={styles.airMetricItem}>
                    <Activity size={24} />
                    <span className={styles.airMetricValue}>99.8%</span>
                    <span className={styles.airMetricLabel}>Claim Accuracy</span>
                  </div>
                </div>
                <div className={styles.airBadge}>
                  <Sparkles size={14} />
                  <span>Powered by Collective AI</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className={styles.splitText}>
            <AnimatedSection animation="fade-left" delay={200}>
              <div className={`${styles.badgeSolid} ${styles.badgeAI}`}>AI-Powered Innovation</div>
              <h2 className="heading-2" style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                Introducing <span style={{ color: "var(--text-main)" }}>CollectiveAIR™</span>
              </h2>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                CollectiveAIR is our next-generation AI-based Revenue Cycle Management platform. Trained on millions of claims, it identifies denial patterns before they occur, automates complex billing workflows, and continuously optimizes for your specific payor mix and clinical specialties.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                {[
                  { title: "Predictive Denial Prevention", desc: "AI models catch denial patterns before claim submission, dramatically cutting rejection rates." },
                  { title: "Autonomous Claim Remediation", desc: "Automatically corrects and resubmits denied claims to accelerate your cash flow." },
                  { title: "Real-Time Revenue Intelligence", desc: "Continuous learning from your payor mix, specialty, and clinical data for smarter decisions." },
                  { title: "Natural Language Prior Auth", desc: "AI handles prior authorization requests end-to-end, eliminating manual bottlenecks." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary-light)", flexShrink: 0, marginTop: "3px" }} />
                    <div>
                      <strong style={{ color: "var(--text-main)", fontSize: "0.9375rem" }}>{item.title}</strong>
                      <p style={{ margin: "0.2rem 0 0", color: "var(--text-muted)", fontSize: "0.875rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/services/collective-air" className="btn btn-secondary">
                Explore CollectiveAIR™ <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
