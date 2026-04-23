import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Activity, Clock, PhoneCall, BarChart2, AlertCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "AI AR Follow-Up Agent | CollectiveAI™",
  description:
    "An autonomous collections bot that prioritizes aged AR, contacts payers via automated outreach, and escalates high-value accounts — keeping cash flowing without adding headcount.",
};

const features = [
  {
    icon: BarChart2,
    title: "Intelligent AR Prioritization",
    desc: "The agent continuously analyzes your AR bucket — aging, dollar value, payer type, and collectability — and builds a dynamic work queue ranked by recovery probability and revenue impact.",
  },
  {
    icon: PhoneCall,
    title: "Automated Payer Outreach",
    desc: "Initiates and tracks follow-up activity with payers through portal inquiries, automated status checks, and escalation triggers — without requiring staff to manually work each account.",
  },
  {
    icon: Clock,
    title: "Timely Filing Protection",
    desc: "Monitors filing deadlines and appeal windows across all payers and automatically surfaces accounts at risk of timely filing expiration before revenue is permanently lost.",
  },
  {
    icon: AlertCircle,
    title: "Smart Escalation",
    desc: "When automated outreach stalls or a high-value account requires human intervention, the agent immediately escalates with a complete history and recommended next steps for the billing team.",
  },
  {
    icon: CheckCircle2,
    title: "Claim Status Reconciliation",
    desc: "Automatically reconciles claim status responses from ERA/835 files and payer portals, reducing manual posting errors and ensuring accurate AR balance reporting.",
  },
  {
    icon: Activity,
    title: "AR Performance Dashboard",
    desc: "Real-time visibility into days in AR, collections by payer, follow-up activity volume, and recovery rates — giving leadership the data to continuously improve.",
  },
];

const metrics = [
  { value: "45%", label: "Reduction in days in AR" },
  { value: "3×", label: "More accounts worked per FTE" },
  { value: "28%", label: "Increase in AR recovery rate" },
];

export default function AIARFollowUpAgentPage() {
  return (
    <main>
      <PageHero
        title="AI AR Follow-Up Agent"
        description="An autonomous collections bot that works your aged AR around the clock — prioritizing accounts, contacting payers, and escalating what needs human eyes."
        badge="CollectiveAI™"
      />

      <section className="section-padding">
        <div className="container" style={{ display: "grid", gap: "3.5rem" }}>

          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                  Your AR never sleeps — now neither does your follow-up
                </h2>
                <p className="text-body">
                  Aging AR is one of the most expensive problems in healthcare billing — not because the money isn't there, but because there aren't enough hours in the day to chase it all. The AI AR Follow-Up Agent changes that equation entirely. It autonomously monitors your entire AR portfolio, initiates payer follow-up, tracks responses, and escalates the right accounts to your team — so your billers spend their time closing accounts, not searching for them.
                </p>
              </div>
              <div>
                <Image src={`/collectivewebite/${encodeURIComponent("AI AR followup agent.png")}`} alt="AI AR Follow-Up Agent" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
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
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "var(--background-dark)" }}>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Where AR automation earns its keep</h3>
                <p className="text-body" style={{ fontSize: "0.98rem", marginBottom: "1rem" }}>
                  Best for organizations with meaningful aged AR, payer portal fragmentation, or staffing constraints that delay status checks and follow-up documentation.
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.4rem" }}>Prioritized work queues ranked by dollar value and overturn probability.</li>
                  <li style={{ marginBottom: "0.4rem" }}>Escalations that arrive with context—not a blank task in the billing system.</li>
                  <li>Visibility into activity volume, payer response patterns, and recovery trends.</li>
                </ul>
              </div>
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Implementation notes</h3>
                <ol style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Scope</strong> — define payer classes, AR segments, and escalation rules with your leadership team.</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Pilot</strong> — start with a bounded AR bucket to validate recovery lift and staff adoption.</li>
                  <li><strong style={{ color: "var(--secondary-color)" }}>Scale</strong> — broaden coverage as playbooks stabilize and reporting proves ROI.</li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={300}>
            <div style={{ borderRadius: "1rem", background: "linear-gradient(135deg, var(--secondary-color), #101625)", color: "white", padding: "3rem", textAlign: "center" }}>
              <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Put your AR follow-up on autopilot</h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 1.75rem" }}>
                See how the AI AR Follow-Up Agent can cut your days in AR and recover more revenue without increasing headcount.
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
