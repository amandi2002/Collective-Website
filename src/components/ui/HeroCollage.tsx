"use client";

import { Video, Mic, PhoneOff, Calendar, Clock, Video as VideoIcon, User, MoreVertical, FileText } from "lucide-react";
import styles from "./HeroCollage.module.css";

export default function HeroCollage() {
    return (
        <div className={styles.container}>
            {/* Main Back Dashboard */}
            <div className={styles.mainDash}>
                <div className={styles.dashHeader}>
                    <div className={styles.dotGroup}>
                        <span className={styles.dot} style={{ background: "#ef4444" }}></span>
                        <span className={styles.dot} style={{ background: "#ffbd2e" }}></span>
                        <span className={styles.dot} style={{ background: "#27c93f" }}></span>
                    </div>
                    <div className={styles.dashMenu}>Dashboard</div>
                </div>
                <div className={styles.dashBody}>
                    <div className={styles.dashSidebar}>
                        {[1, 2, 3, 4, 5, 6, 7].map(i => <div key={i} className={styles.skeletonLine}></div>)}
                    </div>
                    <div className={styles.dashContent}>
                        {/* Top Stats */}
                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <div className={styles.statLabel}>TOTAL PROFIT</div>
                                <div className={styles.statValue}>13,760$</div>
                                <div className={styles.statBar}><div style={{ width: "70%", background: "#10b981" }}></div></div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statLabel}>NEW REVENUES</div>
                                <div className={styles.statValue} style={{ color: "#f59e0b" }}>1,349</div>
                                <div className={styles.statBar}><div style={{ width: "40%", background: "#f59e0b" }}></div></div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statLabel}>NEW ORDERS</div>
                                <div className={styles.statValue} style={{ color: "var(--primary-color)" }}>567</div>
                                <div className={styles.statBar}><div style={{ width: "85%", background: "var(--primary-color)" }}></div></div>
                            </div>
                        </div>
                        {/* Chart Area */}
                        <div className={styles.chartArea}>
                            <div className={styles.chartTitle}>SALES SUMMARY</div>
                            <div className={styles.chartMock}>
                                <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                                    <path d="M0,30 L0,20 C20,20 30,10 50,15 C70,20 80,5 100,10 L100,30 Z" fill="rgba(16, 185, 129, 0.2)" />
                                    <path d="M0,20 C20,20 30,10 50,15 C70,20 80,5 100,10" fill="none" stroke="#10b981" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Right Video Call */}
            <div className={styles.videoWidget}>
                <div className={styles.videoMain}>
                    <div className={styles.docVideo}></div>
                    <div className={styles.videoOverlay}>
                        <div className={styles.videoControls}>
                            <div className={styles.vBtn}><Mic size={12} /></div>
                            <div className={styles.vBtn}><VideoIcon size={12} /></div>
                            <div className={`${styles.vBtn} ${styles.vBtnRed}`}><PhoneOff size={12} /></div>
                        </div>
                    </div>
                </div>
                <div className={styles.videoThumbs}>
                    <div className={styles.vThumb} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&h=100')" }}></div>
                    <div className={styles.vThumb} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100')" }}></div>
                    <div className={styles.vThumb} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100')" }}></div>
                    <div className={styles.vThumb} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100')" }}></div>
                </div>
            </div>

            {/* Bottom Right Schedule Card */}
            <div className={styles.scheduleCard}>
                <div className={styles.scheduleHeader}>
                    <div>
                        <div className={styles.shTime}>09:30 AM - 10:15 AM</div>
                        <div className={styles.shTitle}>Patient <span className={styles.shSub}>06/08/1998 - Male</span></div>
                    </div>
                    <button className={styles.shBtn}>Schedule Now</button>
                </div>
                <div className={styles.scheduleBody}>
                    <div className={styles.sRow}>
                        <span className={styles.sLabel}>Resources</span>
                        <span className={styles.sValue}>Doctor Jalota</span>
                    </div>
                    <div className={styles.sRow}>
                        <span className={styles.sLabel}>Appointment Mode</span>
                        <span className={styles.sValue}><VideoIcon size={12} /> Telehealth</span>
                        <button className={styles.joinBtn}>Join</button>
                    </div>
                    <div className={styles.sRow}>
                        <span className={styles.sLabel}>Location</span>
                        <span className={styles.sValue}>Capital Regional Medical Center</span>
                    </div>
                    <div className={styles.sRow}>
                        <span className={styles.sLabel}>Visit Reason</span>
                        <span className={styles.sValue}>Counseling</span>
                    </div>
                </div>
                <div className={styles.scheduleFooter}>
                    <button className={styles.actionBtn}>Create Clinical Note</button>
                    <span className={styles.moreOptions}>More Options</span>
                </div>
            </div>

            {/* Bottom Left Appointment Details with Avatars */}
            <div className={styles.aptDetailsWidget}>
                <div className={styles.aptHead}>
                    <div className={styles.dotsGroup}>
                        <div className={styles.wDot}></div><div className={styles.wDot}></div><div className={styles.wDot}></div>
                    </div>
                </div>
                <div className={styles.aptBody}>
                    <div className={styles.aptSidebar}>
                        <div className={styles.skelBlock}></div>
                        <div className={styles.skelBlock}></div>
                    </div>
                    <div className={styles.aptContent}>
                        <div className={styles.aptCard}>
                            <div className={styles.aptCardTag}>Enric Horizon</div>
                            <div className={styles.aptCardDetails}>
                                <div className={styles.acTitle}>Appointment Details</div>
                                <div className={styles.acTime}>Tue May 12, 3:00 pm - 3:30 pm</div>
                                <div className={styles.acRow}><span>Provider</span><strong>Dr. Lorraine Cassels</strong></div>
                                <div className={styles.acRow}><span>Service</span><strong>Online</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating interconnected avatars */}
                <div className={styles.floatAvatar1}>
                    <div className={styles.avUser} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100')" }}></div>
                </div>
                <div className={styles.floatAvatar2}>
                    <div className={styles.avDoc} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100')" }}></div>
                </div>

                <svg className={styles.connectingLines} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
                    <path d="M 0 50 C 50 50, 80 100, 150 100" fill="none" stroke="#d90429" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
            </div>
        </div>
    );
}
