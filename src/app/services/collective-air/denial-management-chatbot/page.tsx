import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, MessageSquareText, Search, FileText, RefreshCcw, BarChart2, ArrowLeftRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Denial Management Chatbot | CollectiveAI™",
  description:
    "AI-powered conversational assistant that guides billing staff through denial research, response drafting, and appeal workflows.",
};

const features = [
  {
    icon: Search,
    title: "Instant Denial Research",
    desc: "Ask plain-language questions about any denied claim and get immediate answers — payer rules, denial reason codes, documentation gaps — without digging through portals.",
  },
  {
    icon: FileText,
    title: "Automated Appeal Drafting",
    desc: "The chatbot generates fully formatted appeal letters and supporting documentation packages based on the denial type, payer, and claim details.",
  },
  {
    icon: RefreshCcw,
    title: "Guided Remediation Workflows",
    desc: "Step-by-step guidance walks billing staff through corrective action for every denial category, reducing training time and human error.",
  },
  {
    icon: ArrowLeftRight,
    title: "Payer Policy Intelligence",
    desc: "Continuously updated with payer-specific LCD, NCD, and coverage policies so responses always reflect current rules — not outdated manuals.",
  },
  {
    icon: BarChart2,
    title: "Denial Pattern Insights",
    desc: "Surfaces recurring denial trends across providers, coders, and payers so leadership can address root causes, not just individual claims.",
  },
  {
    icon: MessageSquareText,
    title: "Seamless Staff Integration",
    desc: "Embedded directly into your existing billing workflow — no separate application to switch to. Staff get answers right where they work.",
  },
];

const metrics = [
  { value: "60%", label: "Reduction in time-per-denial" },
  { value: "3×", label: "Faster appeal turnaround" },
  { value: "40%", label: "Improvement in first-level overturn rate" },
];

export default function DenialManagementChatbotPage() {
  return (
    <main>
      <PageHero
        title="Denial Management Chatbot"
        description="A conversational AI assistant that guides your billing team through every denial — from research to resolution — in seconds, not hours."
        badge="CollectiveAI™"
      />

      <section className="section-padding">
        <div className="container" style={{ display: "grid", gap: "3.5rem" }}>

          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                  Stop letting denials pile up
                </h2>
                <p className="text-body">
                  Most billing teams spend hours per denial — researching payer rules, writing appeals, chasing down documentation. The Denial Management Chatbot compresses that work into a conversation. Your staff describes the denial, and the AI instantly returns the research, the remedy, and a ready-to-send appeal — built on your actual claim data and current payer policy.
                </p>
              </div>
              <div>
                <Image src={`/collectivewebite/${encodeURIComponent("denial management chatbot.png")}`} alt="Denial Management Chatbot" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {metrics.map((m, i) => (
              <AnimatedSection key={m.label} animation="fade-up" delay={i * 100}>
                <div style={{ background: "white", border: "1px solid var(--border-color)", borderRadius: "1rem", padding: "1.75rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--primary-color)", lineHeight: 1.1 }}>{m.value}</div>
                  <p className="text-body" style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>{m.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {features.map((f, i) => (
              <AnimatedSection key={f.title} animation="fade-up" delay={i * 80}>
                <div style={{ background: "white", border: "1px solid var(--border-color)", borderRadius: "1rem", padding: "2rem", height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "0.75rem", backgroundColor: "rgba(217, 4, 41, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <f.icon size={24} style={{ color: "var(--primary-color)" }} />
                  </div>
                  <h3 className="heading-3" style={{ fontSize: "1.1rem", margin: 0 }}>{f.title}</h3>
                  <p className="text-body" style={{ fontSize: "0.95rem", margin: 0 }}>{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={220}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "start" }}>
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "#fff" }}>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Built for billing teams under pressure</h3>
                <p className="text-body" style={{ fontSize: "0.98rem", marginBottom: "1rem" }}>
                  Ideal when denial volume is rising, payer policies are hard to keep current, and staff time is consumed by research instead of working accounts.
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.4rem" }}>Plain-language answers grounded in your denial context and payer rules.</li>
                  <li style={{ marginBottom: "0.4rem" }}>Appeal drafts and documentation checklists your team can edit and submit.</li>
                  <li>Trend visibility so leadership sees recurring denial themes—not only one-off tickets.</li>
                </ul>
              </div>
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Adoption path</h3>
                <ol style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Embed</strong> — connect to the workflow surfaces staff already use.</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Coach</strong> — short training on prompts, verification habits, and quality checks.</li>
                  <li><strong style={{ color: "var(--secondary-color)" }}>Measure</strong> — track time-to-resolution and overturn rates by denial category.</li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={300}>
            <div style={{ borderRadius: "1rem", background: "linear-gradient(135deg, var(--secondary-color), #101625)", color: "white", padding: "3rem", textAlign: "center" }}>
              <h2 className="heading-2" style={{ marginBottom: "1rem" }}>See it in action</h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 1.75rem" }}>
                Schedule a live demo and watch the Denial Management Chatbot resolve a real denial in under two minutes.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "0.9rem 1.5rem" }}>
                  Request a Demo <ArrowRight size={16} />
                </Link>
                <Link href="/services/collective-air" className="btn" style={{ padding: "0.9rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                  Back to CollectiveAI™
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </main>
  );
}
