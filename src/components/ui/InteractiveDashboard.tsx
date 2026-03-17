"use client";

import { useState, useEffect } from "react";
import {
    LayoutDashboard, Users, FileText, Settings, Bell, Search,
    DollarSign, TrendingUp, Clock, Activity, MoreHorizontal,
    ChevronDown, ArrowUpRight, ArrowDownRight, CheckCircle2,
    PieChart
} from "lucide-react";
import styles from "./InteractiveDashboard.module.css";

const kpis = [
    { label: "Total Revenue", value: "$2.4M", change: "+14.5%", icon: DollarSign, trend: "up" },
    { label: "Clean Claims", value: "96.4%", change: "+2.1%", icon: CheckCircle2, trend: "up" },
    { label: "Days in AR", value: "32 Days", change: "-8.4%", icon: Clock, trend: "down" }, // Down is good here
    { label: "Collections", value: "98.1%", change: "+0.5%", icon: TrendingUp, trend: "up" }
];

const payorData = [
    { name: "Medicare", claims: "1,245", revenue: "$845k", status: "Healthy" },
    { name: "Blue Cross", claims: "982", revenue: "$620k", status: "Healthy" },
    { name: "UnitedHealthcare", claims: "743", revenue: "$412k", status: "Review" },
    { name: "Aetna", claims: "412", revenue: "$280k", status: "Action Required" },
];

export default function InteractiveDashboard() {
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);
    const [activeMenu, setActiveMenu] = useState("dashboard");

    // Mock revenue chart data
    const revenueData = [45, 60, 40, 75, 55, 90, 85, 95, 80, 110, 90, 120];

    return (
        <div className={styles.dashContainer}>
            {/* Sidebar Mock */}
            <div className={styles.sidebar}>
                <div className={styles.logoMark}>
                    <Activity size={24} color="var(--primary-color)" />
                </div>
                <div className={styles.navItems}>
                    {["dashboard", "patients", "claims", "reports", "settings"].map((item) => (
                        <div
                            key={item}
                            className={`${styles.navItem} ${activeMenu === item ? styles.navActive : ""}`}
                            onClick={() => setActiveMenu(item)}
                        >
                            {item === "dashboard" && <LayoutDashboard size={20} />}
                            {item === "patients" && <Users size={20} />}
                            {item === "claims" && <FileText size={20} />}
                            {item === "reports" && <PieChart size={20} />}
                            {item === "settings" && <Settings size={20} />}
                        </div>
                    ))}
                </div>
                <div className={styles.avatarWrap}>
                    <div className={styles.avatar}>CR</div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={styles.mainContent}>
                {/* Top Header */}
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        <h3 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600 }}>Financial Overview</h3>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Updated just now</span>
                    </div>
                    <div className={styles.headerActions}>
                        <div className={styles.searchBar}>
                            <Search size={16} />
                            <input type="text" placeholder="Search..." disabled />
                        </div>
                        <div className={styles.iconBtn}>
                            <Bell size={18} />
                            <span className={styles.badge}></span>
                        </div>
                    </div>
                </div>

                <div className={styles.scrollArea}>
                    {/* KPI Row */}
                    <div className={styles.kpiGrid}>
                        {kpis.map((kpi, i) => (
                            <div key={i} className={styles.kpiCard}>
                                <div className={styles.kpiTop}>
                                    <div className={styles.kpiIcon}>
                                        <kpi.icon size={18} />
                                    </div>
                                    <div className={`${styles.kpiTrend} ${kpi.trend === "up" ? styles.trendUp : styles.trendDown}`}>
                                        {kpi.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                        {kpi.change}
                                    </div>
                                </div>
                                <div className={styles.kpiValue}>{kpi.value}</div>
                                <div className={styles.kpiLabel}>{kpi.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Row */}
                    <div className={styles.chartsRow}>
                        {/* Main Bar Chart */}
                        <div className={`${styles.chartCard} ${styles.mainChart}`}>
                            <div className={styles.cardHeader}>
                                <h4 style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600 }}>Revenue Year-to-Date</h4>
                                <div className={styles.dropdownBtn}>
                                    This Year <ChevronDown size={14} />
                                </div>
                            </div>
                            <div className={styles.barChartContainer}>
                                <div className={styles.chartBars}>
                                    {revenueData.map((val, i) => (
                                        <div
                                            key={i}
                                            className={styles.barWrap}
                                            onMouseEnter={() => setHoveredBar(i)}
                                            onMouseLeave={() => setHoveredBar(null)}
                                        >
                                            <div className={styles.bar} style={{ height: `${val}%` }}>
                                                <div className={styles.barLid}></div>
                                                {hoveredBar === i && (
                                                    <div className={styles.tooltip}>${(val * 1.5).toFixed(1)}k</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.chartXAxis}>
                                    <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span>
                                    <span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
                                </div>
                            </div>
                        </div>

                        {/* Doughnut Chart Mock */}
                        <div className={`${styles.chartCard} ${styles.sideChart}`}>
                            <div className={styles.cardHeader}>
                                <h4 style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600 }}>Denial Reasons</h4>
                                <MoreHorizontal size={16} color="var(--text-muted)" />
                            </div>
                            <div className={styles.doughnutWrap}>
                                <div className={styles.doughnutRing}>
                                    <div className={styles.doughnutHole}>
                                        <span className={styles.holeValue}>4.2%</span>
                                        <span className={styles.holeLabel}>Avg Denial</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.legend}>
                                <div className={styles.legendItem}>
                                    <span className={styles.dot} style={{ background: "var(--primary-light)" }}></span> Coding
                                </div>
                                <div className={styles.legendItem}>
                                    <span className={styles.dot} style={{ background: "#ffbd2e" }}></span> Eligibility
                                </div>
                                <div className={styles.legendItem}>
                                    <span className={styles.dot} style={{ background: "var(--border-color)" }}></span> Duplicate
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table Row */}
                    <div className={styles.tableCard}>
                        <div className={styles.cardHeader}>
                            <h4 style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600 }}>Top Payor Performance</h4>
                            <button className={styles.actionBtn}>Export</button>
                        </div>
                        <div className={styles.tableWrap}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Payor Name</th>
                                        <th>Total Claims</th>
                                        <th>Net Revenue</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payorData.map((row, i) => (
                                        <tr key={i}>
                                            <td style={{ fontWeight: 500 }}>{row.name}</td>
                                            <td>{row.claims}</td>
                                            <td>{row.revenue}</td>
                                            <td>
                                                <span className={`${styles.statusBadge} ${styles[row.status.replace(" ", "")]}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
