"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import styles from "./ProductShowcase.module.css";

const products = [
  {
    id: "iq",
    label: "CollectiveIQ",
    image: "/service/collectiveIQ.png",
    description:
      "Aggregates data from across multiple platforms to deliver high-quality, actionable, on-demand reporting and real-time revenue intelligence.",
    href: "/products/analytics",
  },
  {
    id: "ehr",
    label: "CollectiveRecords",
    image: "/service/CollectiveRecords.png",
    description:
      "Cloud-based EHR accessible instantly on any device — no expensive servers or IT staff required. See more patients from day one.",
    href: "/products/ehr",
  },
  {
    id: "practice",
    label: "CollectivePractice",
    image: "/service/collectivePM.png",
    description:
      "Easily register, schedule, and verify patient eligibility. Streamlined charge entry and robust claims tracking replace costly enterprise software.",
    href: "/products/practice-management",
  },
];

export default function ProductShowcase() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + products.length) % products.length);
  const next = () => setCurrent((c) => (c + 1) % products.length);
  const product = products[current];

  return (
    <section className={styles.section}>
      {/* LEFT — dark red-themed panel */}
      <div className={styles.left}>
        <div className={styles.leftInner}>
          <AnimatedSection animation="fade-right">
            <h2 className={styles.heading}>
              We do the tedious work, so you can focus on healing.
            </h2>
            <p className={styles.body}>
              Our team of MBAs, MDs, and CPAs actively tracks your performance
              metrics against national standards, aligning incentives to
              guarantee maximum collections.
            </p>
            <Link href="/about" className={styles.cta}>
              Discover our methodology <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </div>

      {/* RIGHT — light panel with product image */}
      <div className={styles.right}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous product">
          <ChevronLeft size={22} />
        </button>

        {products.map((p, i) => (
          <div key={p.id} className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}>
            <Image
              src={p.image}
              alt={p.label}
              fill
              className={styles.screenshot}
              sizes="(max-width: 768px) 100vw, 55vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Floating info card */}
        <div className={styles.floatingCard}>
          <p className={styles.cardTitle}>{product.label}</p>
          <p className={styles.cardDesc}>{product.description}</p>
          <Link href={product.href} className={styles.cardLink}>
            Learn More <ArrowRight size={14} />
          </Link>
        </div>

        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next product">
          <ChevronRight size={22} />
        </button>

        <div className={styles.dots}>
          {products.map((p, i) => (
            <button
              key={p.id}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${p.label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
