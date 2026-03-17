"use client";

import { Activity, Heart, Thermometer, Droplets, Clock, User, Search, FileText, CheckCircle2 } from "lucide-react";
import styles from "./InteractiveEHR.module.css";
import { useState } from "react";

export default function InteractiveEHR() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className={styles.ehrContainer}>
            <div className={styles.sidebar}>
                <div className={styles.logoBox}>
                    <Activity color="#fff" size={24} />
                </div>
                <div className={styles.navIcons}>
                    <div className={`${styles.navIcon} ${styles.active}`}><User size={20} /></div>
                    <div className={styles.navIcon}><FileText size={20} /></div>
                    <div className={styles.navIcon}><Clock size={20} /></div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.search}>
                        <Search size={16} color="#94a3b8" />
                        <input type="text" placeholder="Search records..." readOnly />
                    </div>
                    <div className={styles.patientProfile}>
                        <div className={styles.patientInfo}>
                            <span className={styles.patientName}>Sarah Jenkins</span>
                            <span className={styles.patientId}>ID: #892-441</span>
                        </div>
                        <div className={styles.avatar}>
                            SJ
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.welcomeBanner}>
                        <div className={styles.bannerText}>
                            <h3>Patient Overview</h3>
                            <p>Last updated today at 09:42 AM</p>
                        </div>
                        <div className={styles.statusBadge}>
                            <CheckCircle2 size={16} color="#059669" /> Stable Condition
                        </div>
                    </div>

                    <div className={styles.vitalsGrid}>
                        <div className={styles.vitalCard}>
                            <div className={styles.vitalIcon} style={{ background: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }}>
                                <Heart size={24} />
                            </div>
                            <div className={styles.vitalInfo}>
                                <span className={styles.vitalLabel}>Heart Rate</span>
                                <span className={styles.vitalValue}>82 <span>bpm</span></span>
                            </div>
                            <div className={styles.vitalChart}>
                                <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={styles.sparkline}>
                                    <path d="M0,15 L10,15 L15,5 L20,25 L25,15 L100,15" stroke="#ef4444" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <div className={styles.vitalCard}>
                            <div className={styles.vitalIcon} style={{ background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6" }}>
                                <Droplets size={24} />
                            </div>
                            <div className={styles.vitalInfo}>
                                <span className={styles.vitalLabel}>Blood Pressure</span>
                                <span className={styles.vitalValue}>118/76 <span>mmHg</span></span>
                            </div>
                            <div className={styles.vitalChart}>
                                <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={styles.sparkline}>
                                    <path d="M0,20 L20,15 L40,25 L60,10 L80,20 L100,20" stroke="#3b82f6" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <div className={styles.vitalCard}>
                            <div className={styles.vitalIcon} style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" }}>
                                <Thermometer size={24} />
                            </div>
                            <div className={styles.vitalInfo}>
                                <span className={styles.vitalLabel}>Temperature</span>
                                <span className={styles.vitalValue}>98.4 <span>°F</span></span>
                            </div>
                            <div className={styles.vitalChart}>
                                <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={styles.sparkline}>
                                    <path d="M0,15 L20,14 L40,16 L60,15 L80,14 L100,15" stroke="#f59e0b" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={styles.twoColumnGrid}>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h4>Recent Documents</h4>
                                <button className={styles.viewAll}>View All</button>
                            </div>
                            <div className={styles.documentList}>
                                <div className={styles.docItem}>
                                    <div className={styles.docIcon}><FileText size={18} /></div>
                                    <div className={styles.docDetails}>
                                        <span className={styles.docName}>Lab Results - Blood Work</span>
                                        <span className={styles.docDate}>Oct 24, 2023 • Dr. Michael Chen</span>
                                    </div>
                                    <button className={styles.downloadBtn}>View</button>
                                </div>
                                <div className={styles.docItem}>
                                    <div className={styles.docIcon}><FileText size={18} /></div>
                                    <div className={styles.docDetails}>
                                        <span className={styles.docName}>Visit Summary</span>
                                        <span className={styles.docDate}>Oct 12, 2023 • Dr. Sarah Jenkins</span>
                                    </div>
                                    <button className={styles.downloadBtn}>View</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <h4>Medications</h4>
                                <button className={styles.viewAll}>Add Med</button>
                            </div>
                            <div className={styles.medsList}>
                                <div className={styles.medItem}>
                                    <div className={styles.medIndicator} style={{ background: "#3b82f6" }}></div>
                                    <div className={styles.medDetails}>
                                        <span className={styles.medName}>Lisinopril</span>
                                        <span className={styles.medDose}>10mg • Daily</span>
                                    </div>
                                </div>
                                <div className={styles.medItem}>
                                    <div className={styles.medIndicator} style={{ background: "#10b981" }}></div>
                                    <div className={styles.medDetails}>
                                        <span className={styles.medName}>Metformin</span>
                                        <span className={styles.medDose}>500mg • Twice Daily</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
