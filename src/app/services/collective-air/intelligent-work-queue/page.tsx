import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight, ListTodo, Target, Users, Clock, TrendingUp, LayoutDashboard } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Intelligent Work Queue Prioritization | CollectiveAI™",
  description:
    "AI-driven workflow engine that ranks and routes billing tasks by revenue impact, payer urgency, and deadline proximity so your team always works the highest-value items first.",
};

const features = [
  {
    icon: Target,
    title: "Revenue-Weighted Task Ranking",
    desc: "Every billing task — denial, follow-up, appeal, correction — is automatically scored and ranked by its potential dollar recovery, ensuring your team's time is always directed at the highest-impact work.",
  },
  {
    icon: Clock,
    title: "Deadline-Aware Scheduling",
    desc: "The system tracks timely filing limits, appeal deadlines, and authorization expiration dates across all payers and elevates time-sensitive tasks before they become write-offs.",
  },
  {
    icon: Users,
    title: "Role-Based Task Routing",
    desc: "Tasks are intelligently routed based on staff role, specialization, current workload, and skill level — eliminating bottlenecks and distributing work evenly across your team.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Reprioritization",
    desc: "As claim statuses change, new denials arrive, or payment windows tighten, the work queue automatically adjusts in real time — so the right task is always at the top.",
  },
  {
    icon: LayoutDashboard,
    title: "Manager Oversight Dashboard",
    desc: "Supervisors get a live view of team productivity, queue depth, task completion rates, and revenue at risk — with the ability to manually override or reassign at any time.",
  },
  {
    icon: ListTodo,
    title: "Audit & Accountability Logging",
    desc: "Every task assignment, status change, and action taken is logged automatically, creating a complete audit trail for compliance, performance reviews, and process improvement.",
  },
];

const metrics = [
  { value: "55%", label: "Increase in tasks completed per day" },
  { value: "90%", label: "Reduction in expired timely filing" },
  { value: "2×", label: "Revenue recovered per FTE" },
];

export default function IntelligentWorkQueuePage() {
  return (
    <main>
      <PageHero
        title="Intelligent Work Queue Prioritization"
        description="AI that makes sure your billing team is always working the right account at the right time — ranked by revenue impact, deadline urgency, and recovery probability."
        badge="CollectiveAI™"
      />

      <section className="section-padding">
        <div className="container" style={{ display: "grid", gap: "3.5rem" }}>

          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                  Stop working claims in the wrong order
                </h2>
                <p className="text-body">
                  Most billing teams default to FIFO queues or manually sorted worklists — which means high-value accounts age while low-priority tasks get worked first. Intelligent Work Queue Prioritization replaces guesswork with an AI-driven engine that continuously scores, ranks, and routes every billing task so your team's effort always flows to where it matters most.
                </p>
              </div>
              <div>
                <Image src="/collectivewebite/CollectiveIQ.png" alt="Intelligent Work Queue Prioritization" width={680} height={460} style={{ width: "100%", height: "auto", display: "block" }} />
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
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>When prioritization matters most</h3>
                <p className="text-body" style={{ fontSize: "0.98rem", marginBottom: "1rem" }}>
                  Best for teams juggling deadlines, high account volume, and constant interruptions—where “first come, first served” quietly burns revenue.
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.4rem" }}>Rank work by revenue impact, deadline risk, and payer behavior—not inbox order.</li>
                  <li style={{ marginBottom: "0.4rem" }}>Route tasks to the right skill level with clear context attached.</li>
                  <li>Leadership visibility into throughput, bottlenecks, and rework drivers.</li>
                </ul>
              </div>
              <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border-color)", background: "white" }}>
                <h3 className="heading-3" style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Rollout in practice</h3>
                <ol style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Baseline</strong> — map queues, SLAs, and current assignment logic.</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong style={{ color: "var(--secondary-color)" }}>Tune</strong> — calibrate scoring weights with managers and compliance.</li>
                  <li><strong style={{ color: "var(--secondary-color)" }}>Refine</strong> — weekly iteration until the queue matches how your best performers work.</li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={300}>
            <div style={{ borderRadius: "1rem", background: "linear-gradient(135deg, var(--secondary-color), #101625)", color: "white", padding: "3rem", textAlign: "center" }}>
              <h2 className="heading-2" style={{ marginBottom: "1rem" }}>Let AI direct your team's effort</h2>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 1.75rem" }}>
                See how Intelligent Work Queue Prioritization can double the revenue your team recovers without adding a single FTE.
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
