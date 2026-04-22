import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, ShieldCheck, AlertTriangle, Code2, BookOpen, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "AI Claims Scrubber | CollectiveAIR™",
  description:
    "Pre-submission intelligence that automatically detects coding errors, missing modifiers, and payer-specific rule violations before claims leave your system.",
};

const features = [
  {
    icon: AlertTriangle,
    title: "Real-Time Error Detection",
    desc: "Scans every claim at submission time for ICD, CPT, and HCPCS coding errors, unbundling violations, and missing required fields — before the claim ever reaches the payer.",
  },
  {
    icon: Code2,
    title: "Modifier Intelligence",
    desc: "Automatically identifies missing, incorrect, or conflicting modifiers and suggests the correct combination based on the procedure, place of service, and payer rules.",
  },
  {
    icon: BookOpen,
    title: "Payer-Specific Rule Engine",
    desc: "Maintains a continuously updated library of payer-specific edits — commercial, Medicare, Medicaid, and managed care — so every claim meets that payer's exact requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Medical Necessity Validation",
    desc: "Cross-references diagnosis and procedure combinations against LCD and NCD guidelines to flag medical necessity issues before they become denials.",
  },
  {
    icon: Zap,
    title: "One-Click Corrections",
    desc: "Flagged issues come with AI-suggested fixes that billers can accept in a single click, slashing correction time without requiring deep coding expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Guardrails",
    desc: "Built-in audit trail and correction logging keeps your organization protected during payer audits and CMS compliance reviews.",
  },
];

const metrics = [
  { value: "97%+", label: "First-pass clean claim rate" },
  { value: "80%", label: "Reduction in front-end denials" },
  { value: "<1s", label: "Per-claim scrub time" },
];

export default function AIClaimsScrubberPage() {
  return (
    <main>
      <PageHero
        title="AI Claims Scrubber"
        description="Pre-submission intelligence that catches every error, modifier gap, and payer-specific rule violation before your claims leave the building."
        badge="CollectiveAIR™"
      />

      <section className="section-padding">
        <div className="container" style={{ display: "grid", gap: "3.5rem" }}>

          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                  Fix it before it costs you
                </h2>
                <p className="text-body">
                  A denied claim costs an average of $25–$118 to rework — and that's before you account for delayed cash flow and the risk of never collecting at all. The AI Claims Scrubber eliminates the front-end errors that drive the majority of preventable denials, running every claim through an intelligent rules engine that knows each payer's exact requirements and flags issues in real time.
                </p>
              </div>
              <div>
                <Image src="/service/collectiveIQ.png" alt="AI Claims Scrubber" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
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
              <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Ready to stop leaving money on the table?</h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 1.75rem" }}>
                See how the AI Claims Scrubber can push your clean claim rate above 97% from day one.
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
