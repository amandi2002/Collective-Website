import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, BrainCircuit, FileCheck2, RotateCcw, DollarSign } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Denial Prediction + Auto-Appeal Agent | CollectiveAIR™",
  description:
    "AI that predicts which claims are at risk of denial and automatically generates and routes appeal packages to maximize first-pass recovery.",
};

const features = [
  {
    icon: BrainCircuit,
    title: "Predictive Risk Scoring",
    desc: "Every claim receives a denial risk score before submission, calculated from historical payer behavior, coding patterns, diagnosis-procedure relationships, and specialty-specific trends.",
  },
  {
    icon: TrendingUp,
    title: "Payer Behavior Modeling",
    desc: "The AI learns each payer's denial patterns over time — surfacing which claim types, providers, and codes carry the highest risk so you can act before money is left on the table.",
  },
  {
    icon: FileCheck2,
    title: "Automated Appeal Generation",
    desc: "When a denial hits, the agent instantly builds a complete appeal package — letter, supporting documentation, and clinical rationale — tailored to the payer and denial reason code.",
  },
  {
    icon: RotateCcw,
    title: "Intelligent Appeal Routing",
    desc: "Appeals are automatically routed through the correct submission channel — portal, fax, or mail — with tracking and follow-up scheduling built in.",
  },
  {
    icon: Zap,
    title: "Pre-Submission Intervention",
    desc: "High-risk claims flagged before submission are queued for human review or auto-corrected, stopping denials from ever occurring in the first place.",
  },
  {
    icon: DollarSign,
    title: "Recovery Prioritization",
    desc: "Appeals are ranked by dollar value and overturn probability so your team always focuses energy on the opportunities with the greatest revenue impact.",
  },
];

const metrics = [
  { value: "34%", label: "Denial rate reduction" },
  { value: "72%", label: "Faster appeal resolution" },
  { value: "$2.4M", label: "Average annual revenue recovered" },
];

export default function DenialPredictionAutoAppealPage() {
  return (
    <main>
      <PageHero
        title="Denial Prediction + Auto-Appeal Agent"
        description="Stop denials before they happen. When they do occur, let AI build and submit the appeal — automatically."
        badge="CollectiveAIR™"
      />

      <section className="section-padding">
        <div className="container" style={{ display: "grid", gap: "3.5rem" }}>

          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                  The two-stage defense against denied revenue
                </h2>
                <p className="text-body">
                  Most organizations treat denials as inevitable — then spend weeks manually appealing them. The Denial Prediction + Auto-Appeal Agent takes a two-stage approach: first, it uses machine learning to score every claim for denial risk and intervene before submission. Second, when denials do occur, it automatically drafts, packages, and routes the appeal without a single manual step.
                </p>
              </div>
              <div>
                <Image src="/service/collectiveIQ.png" alt="Denial Prediction + Auto-Appeal Agent" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
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

          <AnimatedSection animation="zoom-in" delay={300}>
            <div style={{ borderRadius: "1rem", background: "linear-gradient(135deg, var(--secondary-color), #101625)", color: "white", padding: "3rem", textAlign: "center" }}>
              <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Start recovering denied revenue automatically</h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 1.75rem" }}>
                Connect your billing system and let the AI identify your highest-risk claim patterns in the first 30 days.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "0.9rem 1.5rem" }}>
                  Request a Demo <ArrowRight size={16} />
                </Link>
                <Link href="/services/collective-air" className="btn" style={{ padding: "0.9rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                  Back to CollectiveAIR™
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </main>
  );
}
