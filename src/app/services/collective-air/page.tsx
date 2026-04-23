import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Clock, Activity, CheckCircle2, MessageSquareText, ShieldCheck, Zap, ListTodo, CreditCard } from "lucide-react";

export const metadata = {
  title: "CollectiveAI | Collective RCM",
  description:
    "AI-powered Revenue Cycle Management that predicts denials, automates remediation, and maximizes collections.",
};

const metrics = [
  { icon: TrendingUp, value: "34%", label: "Denial Rate Reduction" },
  { icon: DollarSign, value: "$2.4M", label: "Avg. Revenue Recovered" },
  { icon: Clock, value: "72%", label: "Faster Claim Resolution" },
  { icon: Activity, value: "99.8%", label: "Claim Accuracy" },
];

const capabilities = [
  {
    title: "Predictive Denial Prevention",
    desc: "AI models catch denial patterns before claim submission, dramatically cutting rejection rates.",
  },
  {
    title: "Autonomous Claim Remediation",
    desc: "Automatically corrects and resubmits denied claims to accelerate your cash flow.",
  },
  {
    title: "Real-Time Revenue Intelligence",
    desc: "Continuous learning from your payor mix, specialty, and clinical data for smarter decisions.",
  },
  {
    title: "Natural Language Prior Auth",
    desc: "AI handles prior authorization requests end-to-end, eliminating manual bottlenecks.",
  },
];

const airProducts = [
  {
    icon: MessageSquareText,
    title: "Denial Management Chatbot",
    href: "/services/collective-air/denial-management-chatbot",
    desc: "A conversational AI assistant that guides billing staff through denial research, response drafting, and appeal workflows — reducing time-per-denial and improving resolution rates.",
  },
  {
    icon: ShieldCheck,
    title: "AI Claims Scrubber",
    href: "/services/collective-air/ai-claims-scrubber",
    desc: "Pre-submission intelligence that automatically detects coding errors, missing modifiers, and payer-specific rule violations before a claim ever leaves your system.",
  },
  {
    icon: Zap,
    title: "Denial Prediction + Auto-Appeal Agent",
    href: "/services/collective-air/denial-prediction-auto-appeal",
    desc: "Predicts which claims are at risk of denial using historical payor behavior, then automatically generates and routes appeal packages to maximize first-pass recovery.",
  },
  {
    icon: Activity,
    title: "AI AR Follow-Up Agent",
    href: "/services/collective-air/ai-ar-followup-agent",
    desc: "An autonomous collections bot that prioritizes aged AR, contacts payors via automated outreach, and escalates high-value accounts — keeping cash flowing without adding headcount.",
  },
  {
    icon: ListTodo,
    title: "Intelligent Work Queue Prioritization",
    href: "/services/collective-air/intelligent-work-queue",
    desc: "AI-driven workflow engine that ranks and routes billing tasks by revenue impact, payer urgency, and deadline proximity so your team always works the highest-value items first.",
  },
  {
    icon: CreditCard,
    title: "AI Patient Billing Assistant",
    href: "/services/collective-air/ai-patient-billing-assistant",
    desc: "A conversational patient-facing tool that answers billing questions, negotiates payment plans, and processes payments — improving collections while enhancing the patient experience.",
  },
];

export default function CollectiveAIPage() {
  return (
    <main>
      <PageHero
        title="CollectiveAI™"
        description="Our next-generation AI-based Revenue Cycle Management platform trained on millions of claims."
        badge="AI-Powered Innovation"
      />

      <section className="section-padding">
        <div className="container" style={{ display: "grid", gap: "3rem" }}>
          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                  Intelligent Revenue Cycle Performance
                </h2>
                <p className="text-body">
                  CollectiveAI identifies denial patterns before they occur, automates complex billing workflows, and
                  continuously adapts to your payor mix and specialty-specific billing trends.
                </p>
              </div>
              <div>
                <Image src="/collectivewebite/CollectiveIQ.png" alt="CollectiveAI platform and analytics" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {metrics.map((metric, i) => (
              <AnimatedSection key={metric.label} animation="fade-up" delay={i * 120}>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--border-color)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    height: "100%",
                  }}
                >
                  <metric.icon size={22} style={{ color: "var(--primary-color)", marginBottom: "0.85rem" }} />
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-main)", lineHeight: 1.1 }}>{metric.value}</div>
                  <p className="text-body" style={{ fontSize: "0.95rem", marginTop: "0.45rem" }}>
                    {metric.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div
              style={{
                border: "1px solid var(--border-color)",
                borderRadius: "1rem",
                background: "white",
                padding: "2rem",
              }}
            >
              <h3 className="heading-3" style={{ marginBottom: "1.25rem", fontSize: "1.4rem" }}>
                Platform Capabilities
              </h3>
              <div style={{ display: "grid", gap: "1rem" }}>
                {capabilities.map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary-color)", flexShrink: 0, marginTop: "0.1rem" }} />
                    <div>
                      <h4 style={{ fontSize: "1rem", margin: 0, color: "var(--text-main)" }}>{item.title}</h4>
                      <p className="text-body" style={{ fontSize: "0.95rem", marginTop: "0.2rem" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={250}>
            <div id="collective-ai-products">
              <h3 className="heading-3" style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                CollectiveAI Product Suite
              </h3>
              <p className="text-body" style={{ maxWidth: "720px", marginBottom: "2rem" }}>
                Modular AI-powered tools that plug into your existing RCM workflows — each purpose-built to eliminate a specific revenue leak.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
                {airProducts.map((product, i) => (
                  <AnimatedSection key={product.title} animation="fade-up" delay={i * 80}>
                    <Link href={product.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                      <div
                        className="hover-card"
                        style={{
                          background: "white",
                          border: "1px solid var(--border-color)",
                          borderRadius: "1rem",
                          padding: "1.75rem",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                          cursor: "pointer",
                          transition: "all var(--transition-normal)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                          <div
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "0.75rem",
                              backgroundColor: "rgba(217, 4, 41, 0.08)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <product.icon size={22} style={{ color: "var(--primary-color)" }} />
                          </div>
                          <ArrowRight size={16} style={{ color: "var(--primary-color)", marginTop: "0.25rem" }} />
                        </div>
                        <h4 style={{ fontSize: "1rem", fontWeight: 700, margin: 0, color: "var(--secondary-color)" }}>
                          {product.title}
                        </h4>
                        <p className="text-body" style={{ fontSize: "0.93rem", margin: 0 }}>
                          {product.desc}
                        </p>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={260}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "start" }}>
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                <h3 className="heading-3" style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Designed for production RCM</h3>
                <p className="text-body" style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  CollectiveAI is built to sit beside your billing team—not replace governance. Models are tuned for healthcare claim and remittance behavior, with human escalation paths when policy judgment matters.
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.15rem", color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.5rem" }}>Modular agents: deploy one workflow, prove ROI, then expand.</li>
                  <li style={{ marginBottom: "0.5rem" }}>Audit-friendly logging for corrections, appeals, and automated outreach.</li>
                  <li>Integration-first posture with clearinghouse, EHR, and PM data flows.</li>
                </ul>
              </div>
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "#fff" }}>
                <h3 className="heading-3" style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Best results alongside disciplined operations</h3>
                <p className="text-body" style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                  AI accelerates what is already working—and exposes what is not. Organizations get the fastest lift when workflows, ownership, and KPI definitions are aligned before automation scales.
                </p>
                <p className="text-body" style={{ fontSize: "1rem", margin: 0 }}>
                  Pair CollectiveAI with{" "}
                  <Link href="/services/rcm" style={{ color: "var(--primary-color)", fontWeight: 600, textDecoration: "underline" }}>
                    Collective RCM services
                  </Link>{" "}
                  when you want end-to-end execution with the same leadership team accountable for outcomes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={300}>
            <div
              style={{
                borderRadius: "1rem",
                background: "linear-gradient(135deg, var(--secondary-color), #101625)",
                color: "white",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ display: "inline-flex", marginBottom: "1rem" }}>
                <Sparkles size={20} />
              </div>
              <h2 className="heading-2" style={{ marginBottom: "1rem" }}>
                Ready to transform your cash flow?
              </h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "680px", margin: "0 auto 1.75rem" }}>
                Walk through your denial profile, AR aging, and workflow bottlenecks—and we will recommend which CollectiveAI modules to pilot first.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "0.9rem 1.5rem" }}>
                Explore CollectiveAI™ <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
