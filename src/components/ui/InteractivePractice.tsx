"use client";

import { Calendar, Users, DollarSign, Activity, FileText, CheckCircle2, Clock, AlertCircle, Plus, Mail } from "lucide-react";
import styles from "./InteractivePractice.module.css";
import { useState } from "react";

export default function InteractivePractice() {
    const [activeTab, setActiveTab] = useState("calendar");

    return (
        <div className={styles.practiceContainer}>
            <div className={styles.sidebar}>
                <div className={styles.brand}>
                    <div className={styles.brandIcon}>
                        <Calendar size={18} />
                    </div>
                    Schedule
                </div>

                <div className={styles.miniCalendar}>
                    <div className={styles.calHeader}>
                        <span>October 2023</span>
                    </div>
                    <div className={styles.calGrid}>
                        <div className={styles.calDay}>Su</div>
                        <div className={styles.calDay}>Mo</div>
                        <div className={styles.calDay}>Tu</div>
                        <div className={styles.calDay}>We</div>
                        <div className={styles.calDay}>Th</div>
                        <div className={styles.calDay}>Fr</div>
                        <div className={styles.calDay}>Sa</div>

                        <div className={styles.calDate}>8</div>
                        <div className={styles.calDate}>9</div>
                        <div className={styles.calDate}>10</div>
                        <div className={styles.calDate}>11</div>
                        <div className={styles.calDate}>12</div>
                        <div className={styles.calDate}>13</div>
                        <div className={styles.calDate}>14</div>

                        <div className={styles.calDate}>15</div>
                        <div className={styles.calDate}>16</div>
                        <div className={styles.calDate}>17</div>
                        <div className={styles.calDate}>18</div>
                        <div className={styles.calDate}>19</div>
                        <div className={styles.calDate}>20</div>
                        <div className={styles.calDate}>21</div>

                        <div className={styles.calDate}>22</div>
                        <div className={`${styles.calDate} ${styles.hasEvents}`}>23</div>
                        <div className={`${styles.calDate} ${styles.active}`}>24</div>
                        <div className={`${styles.calDate} ${styles.hasEvents}`}>25</div>
                        <div className={styles.calDate}>26</div>
                        <div className={styles.calDate}>27</div>
                        <div className={styles.calDate}>28</div>
                    </div>
                </div>

                <div className={styles.navMenu}>
                    <div className={`${styles.navItem} ${styles.active}`}>
                        <Calendar size={20} /> Daily View
                    </div>
                    <div className={styles.navItem}>
                        <Users size={20} /> Patient List
                    </div>
                    <div className={styles.navItem}>
                        <DollarSign size={20} /> Billing
                    </div>
                    <div className={styles.navItem}>
                        <FileText size={20} /> Reporting
                    </div>
                </div>
            </div>

            <div className={styles.mainPanel}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        <h2>Provider Schedule</h2>
                        <p>Tuesday, October 24, 2023</p>
                    </div>
                    <div className={styles.headerActions}>
                        <button className={styles.newBtn}>
                            <Mail size={16} /> Patient Inbox
                        </button>
                        <button className={`${styles.newBtn} ${styles.primary}`}>
                            <Plus size={16} /> New Appt
                        </button>
                    </div>
                </div>

                <div className={styles.scheduleArea}>

                    <div className={styles.timeSlot}>
                        <div className={styles.timeCol}>
                            09:00 AM
                        </div>
                        <div className={styles.appointmentsCol}>
                            <div className={`${styles.apptCard} ${styles.success}`}>
                                <div className={styles.apptInfo}>
                                    <div className={styles.patientName}>
                                        Marvin McKinney
                                        <span className={`${styles.statusPill} ${styles.checkedIn}`}>
                                            <CheckCircle2 size={12} /> Checked In
                                        </span>
                                    </div>
                                    <div className={styles.apptDet}>
                                        <span className={styles.apptDetItem}><Activity size={14} /> Annual Physical</span>
                                        <span className={styles.apptDetItem}><Clock size={14} /> 45 Min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timeSlot}>
                        <div className={styles.timeCol}>
                            10:00 AM
                        </div>
                        <div className={styles.appointmentsCol}>
                            <div className={`${styles.apptCard}`}>
                                <div className={styles.apptInfo}>
                                    <div className={styles.patientName}>
                                        Bessie Cooper
                                        <span className={`${styles.statusPill} ${styles.pending}`}>
                                            <Clock size={12} /> Pending
                                        </span>
                                    </div>
                                    <div className={styles.apptDet}>
                                        <span className={styles.apptDetItem}><Activity size={14} /> Follow-up Consultation</span>
                                        <span className={styles.apptDetItem}><Clock size={14} /> 30 Min</span>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.apptCard} ${styles.danger}`}>
                                <div className={styles.apptInfo}>
                                    <div className={styles.patientName}>
                                        Courtney Henry
                                        <span className={`${styles.statusPill} ${styles.delayed}`}>
                                            <AlertCircle size={12} /> Delayed 15m
                                        </span>
                                    </div>
                                    <div className={styles.apptDet}>
                                        <span className={styles.apptDetItem}><Activity size={14} /> Procedure</span>
                                        <span className={styles.apptDetItem}><Clock size={14} /> 60 Min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.timeSlot}>
                        <div className={styles.timeCol}>
                            11:30 AM
                        </div>
                        <div className={styles.appointmentsCol}>
                            <div className={`${styles.apptCard}`}>
                                <div className={styles.apptInfo}>
                                    <div className={styles.patientName}>
                                        Jerome Bell
                                        <span className={`${styles.statusPill} ${styles.pending}`}>
                                            <Clock size={12} /> Confirmed
                                        </span>
                                    </div>
                                    <div className={styles.apptDet}>
                                        <span className={styles.apptDetItem}><Activity size={14} /> New Patient Visit</span>
                                        <span className={styles.apptDetItem}><Clock size={14} /> 45 Min</span>
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
