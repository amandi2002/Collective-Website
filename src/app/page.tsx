import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  DollarSign,
  Activity,
  Zap,
  Sparkles,
  FileSearch,
  Layers,
  Cpu,
  Users,
  Link2,
  FileText,
  Calendar,
  ThumbsUp,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProductShowcase from "@/components/ui/ProductShowcase";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import InteractiveDashboard from "@/components/ui/InteractiveDashboard";
import styles from "./page.module.css";

const synergyImpactStats = [
  { icon: DollarSign, value: "98%", label: "New Collection" },
  { icon: FileText, value: "40", label: "Days In AR" },
  { icon: Calendar, value: "20%", label: "AR Over 90 Days" },
  { icon: ThumbsUp, value: "95%", label: "First Pass Clean Claim" },
] as const;

export default function Home() {
  const synergizeFeatures = [
    {
      icon: FileSearch,
      title: "Assess before you invest",
      body: "We baseline performance, payer mix, and workflow reality—then recommend a practical roadmap. You get clarity before commitments, not a vendor pitch disguised as discovery.",
    },
    {
      icon: Layers,
      title: "Full cycle or focused lanes",
      body: "Engage end-to-end RCM or start where the pain is loudest: denials, AR, coding, access—whatever matches your risk tolerance and internal capacity.",
    },
    {
      icon: Cpu,
      title: "Automation where it earns ROI",
      body: "RPA and AI are deployed to remove rework, accelerate follow-up, and surface the next best action—always paired with governance and accountable human oversight.",
    },
    {
      icon: Users,
      title: "Specialists who stay in the work",
      body: "Experienced operators and client leadership who understand specialty nuance, payer behavior, and how to keep finance, operations, and the front desk aligned.",
    },
    {
      icon: Link2,
      title: "Connects to your stack",
      body: "Work alongside your EHR, clearinghouse, and billing tools—so improvements land in production systems instead of living in slide decks.",
    },
  ];

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
                    <h4>CollectiveAI™</h4>
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

      {/* Why Collective — 3×2 feature grid (before stats strip) */}
      <section className={styles.synergizeSection} aria-labelledby="synergize-heading">
        <div className={`container ${styles.synergizeInner}`}>
          <div className={styles.synergizeGrid}>
            <div className={styles.synergizeHeadingCell}>
              <AnimatedSection animation="fade-up">
                <h2 id="synergize-heading" className={styles.synergizeHeading}>
                  One accountable partner for a faster, cleaner revenue cycle—with{" "}
                  <span className={styles.synergizeHeadingBrand}>Collective RCM</span>.
                </h2>
                <p className={styles.synergizeLead}>
                  From patient access through collections, we combine disciplined process, modern automation, and senior operators so cash flow improves—and stays measurable.
                </p>
              </AnimatedSection>
            </div>
            {synergizeFeatures.map((item, i) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={80 + i * 60}>
                <article className={styles.synergizeCard}>
                  <div className={styles.synergizeIconWrap} aria-hidden>
                    <item.icon className={styles.synergizeIcon} size={44} strokeWidth={1.35} />
                  </div>
                  <h3 className={styles.synergizeCardTitle}>{item.title}</h3>
                  <p className={styles.synergizeCardBody}>{item.body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats — RCM scale strip (before Service Offerings) */}
      <section className={styles.synergyStatsSection} aria-labelledby="synergy-stats-heading">
        <div className={styles.synergyStatsPattern} aria-hidden />
        <div className={`container ${styles.synergyStatsInner}`}>
          <AnimatedSection animation="fade-up">
            <p className={styles.synergyStatsEyebrow}>Proven measurable results</p>
            <h2 id="synergy-stats-heading" className={styles.synergyStatsHeading}>
              Revenue cycle outcomes at Collective scale—throughput, cash, and the teams that make it stick
            </h2>
            <div className={styles.synergyStatsGrid}>
              {synergyImpactStats.map((stat) => (
                <div key={stat.label} className={styles.synergyStat}>
                  <div className={styles.synergyStatIcon} aria-hidden>
                    <stat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <p className={styles.synergyStatValue}>{stat.value}</p>
                  <p className={styles.synergyStatLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

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
                <h3 className={`heading-3 ${styles.serviceTitle}`}>CollectiveAI™</h3>
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

      {/* Full RCM cycle — infographic */}
      <section className={styles.rcmCycleSection} aria-labelledby="rcm-cycle-heading">
        <div className={`container ${styles.rcmCycleContainer}`}>
          <div className={styles.rcmCycleLayout}>
            <div className={styles.rcmCycleCopy}>
              <AnimatedSection animation="fade-up">
                <h2 id="rcm-cycle-heading" className={styles.rcmCycleHeading}>
                  From full cycle operations to point solutions like denial management, you choose your RCM adventure
                </h2>
                <p className={styles.rcmCycleLead}>
                  Collective brings together deep billing expertise, disciplined process design, and modern automation—including
                  CollectiveAI™—so finance and operations leaders see the same truth, move faster, and recover more revenue
                  without adding chaos to the front desk.
                </p>
                <p className={styles.rcmCycleLead}>
                  Whether you need an end-to-end partner across the revenue cycle or targeted support in a single area, we align
                  our delivery model to your organization, your systems, and your growth goals.
                </p>
              </AnimatedSection>
            </div>

            <div className={styles.rcmCycleVisualWrap}>
              <AnimatedSection animation="fade-left" delay={120}>
                <figure className={styles.rcmCycleFigure}>
                  <Image
                    src="/service/rcm.png"
                    alt="Revenue cycle infographic: reporting, verification, coding and billing, claims, collections and appeals, denials, payment posting, and credentialing—centered on Collective RCM services with automation and AI."
                    width={900}
                    height={900}
                    className={styles.rcmCycleImage}
                    sizes="(max-width: 1023px) min(96vw, 660px) (max-width: 1279px) 56vw, (max-width: 1439px) 50vw, min(920px, 48vw)"
                  />
                </figure>
              </AnimatedSection>
            </div>
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

      {/* CollectiveAI — AI-Based RCM Section */}
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
                Introducing CollectiveAI™
              </h2>
              <p className="text-body" style={{ marginBottom: "2rem", color: "rgba(255,255,255,0.88)", maxWidth: "560px" }}>
                A next-generation AI Revenue Cycle platform designed to predict denials, automate claims workflows,
                and accelerate collections with intelligent product agents.
              </p>
              <Link href="/services/collective-air" className="btn btn-secondary">
                Explore CollectiveAI™ <ArrowRight size={16} />
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
