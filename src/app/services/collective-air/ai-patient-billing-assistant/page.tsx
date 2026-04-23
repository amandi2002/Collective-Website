import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, CreditCard, MessageCircle, HandCoins, ShieldCheck, Star, BarChart2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "AI Patient Billing Assistant | CollectiveAI™",
  description:
    "A conversational AI tool that answers patient billing questions, negotiates payment plans, and processes payments — improving collections while enhancing the patient experience.",
};

const features = [
  {
    icon: MessageCircle,
    title: "Conversational Billing Support",
    desc: "Patients can ask plain-language questions about their bills — what's covered, why a balance remains, what their EOB means — and get instant, accurate answers 24/7 without waiting on hold.",
  },
  {
    icon: HandCoins,
    title: "AI-Negotiated Payment Plans",
    desc: "The assistant evaluates patient financial circumstances and proposes personalized payment plan options within your practice's policy parameters — closing more balances without staff involvement.",
  },
  {
    icon: CreditCard,
    title: "Secure In-Conversation Payments",
    desc: "Patients can pay their balance, set up a payment plan, or update payment methods directly within the conversation — reducing friction and increasing same-day collections.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Explanation Engine",
    desc: "Demystifies insurance terminology for patients — deductibles, coinsurance, out-of-pocket maximums — so they understand what they owe and why, reducing disputes and call volume.",
  },
  {
    icon: Star,
    title: "Patient Satisfaction by Design",
    desc: "A compassionate, clear communication style reduces billing-related anxiety and improves patient satisfaction scores — because financial experience is part of the care experience.",
  },
  {
    icon: BarChart2,
    title: "Collections Performance Analytics",
    desc: "Track self-pay collection rates, payment plan adherence, patient satisfaction scores, and AI resolution rates — all in a unified dashboard for your revenue cycle team.",
  },
];

const metrics = [
  { value: "38%", label: "Increase in patient self-pay collections" },
  { value: "65%", label: "Reduction in billing-related call volume" },
  { value: "4.8★", label: "Average patient billing satisfaction" },
];

export default function AIPatientBillingAssistantPage() {
  return (
    <main>
      <PageHero
        title="AI Patient Billing Assistant"
        description="A conversational billing tool that meets patients where they are — answering questions, arranging payment plans, and collecting balances without adding burden to your staff."
        badge="CollectiveAI™"
      />

      <section className="section-padding">
        <div className="container" style={{ display: "grid", gap: "3.5rem" }}>

          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                  Patient billing that doesn't frustrate patients
                </h2>
                <p className="text-body">
                  Confusing bills, long hold times, and impersonal collections calls are among the top drivers of patient dissatisfaction — and unpaid balances. The AI Patient Billing Assistant changes the equation by giving patients a simple, conversational way to understand their bill, ask questions, and pay on their terms. The result is higher self-pay collections and a better patient financial experience, all without additional staff hours.
                </p>
              </div>
              <div>
                <Image src="/collectivewebite/CollectiveIQ.png" alt="AI Patient Billing Assistant" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
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
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Patient financial engagement, upgraded</h3>
                <p className="text-body" style={{ fontSize: "0.98rem", marginBottom: "1rem" }}>
                  Strong fit when self-pay balances are growing, call volume is high, and patients need clearer answers and payment paths without overloading staff.
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.4rem" }}>Conversational support for balances, estimates, and payment plan options.</li>
                  <li style={{ marginBottom: "0.4rem" }}>Consistent policy explanations aligned to your organization’s rules.</li>
                  <li>Analytics on conversion, abandonment, and common patient questions.</li>
                </ul>
              </div>
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Guardrails we recommend</h3>
                <ol style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Brand</strong> — tone, disclosures, and escalation paths match your patient experience standards.</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Controls</strong> — payment handling follows your processor and compliance requirements.</li>
                  <li><strong style={{ color: "var(--secondary-color)" }}>Human handoff</strong> — complex accounts route cleanly to live staff with context.</li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={300}>
            <div style={{ borderRadius: "1rem", background: "linear-gradient(135deg, var(--secondary-color), #101625)", color: "white", padding: "3rem", textAlign: "center" }}>
              <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Transform your patient financial experience</h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 1.75rem" }}>
                See how the AI Patient Billing Assistant can increase self-pay collections while reducing the burden on your billing team.
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
