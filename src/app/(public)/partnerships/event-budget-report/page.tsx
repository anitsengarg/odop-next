"use client";

import "@/styles/event-budget-report.css";
import { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";
import Counter from "@/components/Counter";
import {
  FaStore,
  FaVideo,
  FaFlag,
  FaMapPin,
  FaUsers,
  FaHandshake,
  FaStar,
  FaDesktop,
  FaPersonChalkboard,
  FaCertificate,
  FaTags,
  FaShip,
  FaBullhorn,
  FaTrademark,
  FaCoins,
  FaQrcode,
  FaRecycle,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa6";

// Register Chart.js components
Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  LineController,
  LineElement,
  PointElement
);

export default function EventBudgetReportPage() {
  const allocationChartRef = useRef<HTMLCanvasElement>(null);
  const monthlyTrendChartRef = useRef<HTMLCanvasElement>(null);
  const categoryCompareChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Shared font defaults
    Chart.defaults.font.family = "'Inter', 'Segoe UI', sans-serif";
    Chart.defaults.color = "#4A5568";

    const primaryColor = "#1B3C72";
    const orangeColor = "#E8562E";
    const purpleColor = "#7B5EA7";
    const greenColor = "#27AE60";
    const goldColor = "#F5A623";

    let allocationChart: Chart | null = null;
    let monthlyTrendChart: Chart | null = null;
    let categoryCompareChart: Chart | null = null;

    if (allocationChartRef.current) {
      allocationChart = new Chart(allocationChartRef.current, {
        type: "doughnut",
        data: {
          labels: [
            "National Trade Fairs",
            "International Exhibitions",
            "Workshops & Training",
            "Webinars & Digital",
          ],
          datasets: [
            {
              data: [15, 8, 6, 6],
              backgroundColor: [
                primaryColor,
                orangeColor,
                purpleColor,
                greenColor,
              ],
              borderWidth: 2,
              borderColor: "#ffffff",
              hoverOffset: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          cutout: "62%",
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) =>
                  ` ₹${ctx.parsed} Cr  (${Math.round(
                    (ctx.parsed / 35) * 100
                  )}%)`,
              },
            },
          },
        },
      });
    }

    if (monthlyTrendChartRef.current) {
      const months = [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
      ];
      const monthlySpend = [2, 3, 4, 1.5, 2, 3.5, 4.5, 3, 2.5, 1.5, 1.5, 1.5];
      const cumulative = monthlySpend.reduce((acc: number[], val, i) => {
        acc.push((acc[i - 1] || 0) + val);
        return acc;
      }, []);

      monthlyTrendChart = new Chart(monthlyTrendChartRef.current, {
        type: "bar",
        data: {
          labels: months,
          datasets: [
            {
              label: "Monthly Spend (₹ Cr)",
              data: monthlySpend,
              backgroundColor: [
                "rgba(27,60,114,0.5)",
                "rgba(27,60,114,0.6)",
                "rgba(27,60,114,0.75)",
                "rgba(27,60,114,0.4)",
                "rgba(27,60,114,0.5)",
                "rgba(27,60,114,0.65)",
                primaryColor,
                "rgba(27,60,114,0.7)",
                "rgba(27,60,114,0.6)",
                "rgba(27,60,114,0.45)",
                "rgba(27,60,114,0.45)",
                "rgba(27,60,114,0.45)",
              ],
              borderColor: primaryColor,
              borderWidth: 1,
              borderRadius: 6,
            },
            {
              label: "Cumulative Spend (₹ Cr)",
              data: cumulative,
              type: "line",
              borderColor: orangeColor,
              backgroundColor: "rgba(232,86,46,0.08)",
              borderWidth: 2.5,
              pointBackgroundColor: orangeColor,
              pointRadius: 4,
              tension: 0.4,
              fill: false,
              yAxisID: "y1",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          plugins: {
            legend: {
              position: "top",
              labels: { padding: 20, usePointStyle: true },
            },
            tooltip: {
              callbacks: {
                label: (ctx) => ` ${ctx.dataset.label}: ₹${ctx.parsed.y} Cr`,
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              position: "left",
              title: { display: true, text: "Monthly (₹ Cr)", font: { size: 11 } },
              grid: { color: "rgba(0,0,0,0.05)" },
              ticks: { callback: (v) => "₹" + v },
            },
            y1: {
              position: "right",
              title: {
                display: true,
                text: "Cumulative (₹ Cr)",
                font: { size: 11 },
              },
              grid: { drawOnChartArea: false },
              ticks: { callback: (v) => "₹" + v },
            },
          },
        },
      });
    }

    if (categoryCompareChartRef.current) {
      categoryCompareChart = new Chart(categoryCompareChartRef.current, {
        type: "bar",
        data: {
          labels: [
            "National Trade Fairs",
            "International Exhibitions",
            "Workshops & Training",
            "Webinars & Digital",
          ],
          datasets: [
            {
              label: "Allocated (₹ Cr)",
              data: [15, 8, 6, 6],
              backgroundColor: "rgba(27,60,114,0.75)",
              borderColor: primaryColor,
              borderWidth: 1,
              borderRadius: 6,
            },
            {
              label: "Spent (₹ Cr)",
              data: [12, 5, 4, 5],
              backgroundColor: "rgba(232,86,46,0.8)",
              borderColor: orangeColor,
              borderWidth: 1,
              borderRadius: 6,
            },
            {
              label: "Pending (₹ Cr)",
              data: [3, 3, 2, 1],
              backgroundColor: "rgba(245,166,35,0.75)",
              borderColor: goldColor,
              borderWidth: 1,
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: { padding: 20, usePointStyle: true },
            },
            tooltip: {
              callbacks: {
                label: (ctx) => ` ${ctx.dataset.label}: ₹${ctx.parsed.y} Cr`,
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              title: { display: true, text: "₹ Crore", font: { size: 11 } },
              grid: { color: "rgba(0,0,0,0.05)" },
              ticks: { callback: (v) => "₹" + v },
            },
          },
        },
      });
    }

    return () => {
      allocationChart?.destroy();
      monthlyTrendChart?.destroy();
      categoryCompareChart?.destroy();
    };
  }, []);

  return (
    <main className="main-content schemes-page about-static-page event-budget-report-page">
     <section className="page-hero events-report-hero">
    <div className="page-hero-overlay"></div>
    <div className="container page-hero-content">
      <h1 className="page-hero-title">ODOP Events &amp; Webinars Report<br/>FY 2025–26</h1>
      <p className="page-hero-subtitle">Budget Allocation, Utilization &amp; Impact Analysis – Events, Exhibitions
        &amp; Webinars under ODOP Schemes</p>
      <div className="report-hero-meta">
        <span className="report-hero-meta-item"><i className="fas fa-calendar-alt"></i> Financial Year: April 2025 – March 2026</span>
        <span className="report-hero-meta-item"><i className="fas fa-building"></i> ODOP Cell, Directorate of Industries, Uttar Pradesh</span>
      </div>
      <button className="report-print-btn" onClick={() => window.print()}>
        <i className="fas fa-print"></i> Print / Download Report
      </button>
    </div>
  </section>

      <div className="container">
        {/* SECTION 1 – FINANCIAL OVERVIEW */}
        <section className="report-section" aria-labelledby="overview-heading">
          <div className="section-header">
            <span className="eyebrow">Financial Overview</span>
            <h2 id="overview-heading">FY 2025-26 Budget Snapshot</h2>
            <p>
              Consolidated financial status of the Events &amp; Webinars budget
              as of March 2026.
            </p>
            <div className="divider">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="kpi-grid">
            <div className="kpi-card kpi-blue">
              <div className="kpi-icon">
                <FaCoins />
              </div>
              <div className="kpi-value">₹<Counter value="35.00" /> Cr</div>
              <div className="kpi-label">Total Allocated Budget</div>
            </div>
            <div className="kpi-card kpi-orange">
              <div className="kpi-icon">
                {/* <FaChartLine /> */}
              </div>
              <div className="kpi-value">₹<Counter value="26.00" /> Cr</div>
              <div className="kpi-label">Total Budget Utilized</div>
            </div>
            <div className="kpi-card kpi-green">
              <div className="kpi-icon">
                <FaHandshake />
              </div>
              <div className="kpi-value"><Counter value="74.2" />%</div>
              <div className="kpi-label">Utilization Rate</div>
            </div>
            <div className="kpi-card kpi-gold">
              <div className="kpi-icon">
                <FaFlag />
              </div>
              <div className="kpi-value">₹<Counter value="9.00" /> Cr</div>
              <div className="kpi-label">Remaining Balance</div>
            </div>
          </div>
        </section>

        {/* SECTION 2 – UTILIZATION TRENDS */}
        <section className="report-section" aria-labelledby="trends-heading">
          <div className="section-header">
            <span className="eyebrow">Financial Analytics</span>
            <h2 id="trends-heading">Utilization Trends</h2>
            <p>Analysis of monthly spending patterns and category-wise performance.</p>
            <div className="divider">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Monthly Trend Chart */}
          <div className="report-card">
            <div className="report-card-title">
              <FaChartLine /> Monthly Expenditure on Events &amp; Webinars (₹ Crore)
            </div>
            <div className="chart-wrap" style={{ height: "350px" }}>
              <canvas ref={monthlyTrendChartRef} id="monthlyTrendChart"></canvas>
            </div>
          </div>

          {/* Spent vs Allocated per category bar chart */}
          <div className="report-card">
            <div className="report-card-title">
              <FaChartLine /> Budget Allocated vs. Spent – By Category (₹ Crore)
            </div>
            <div className="chart-wrap" style={{ height: "350px" }}>
              <canvas ref={categoryCompareChartRef} id="categoryCompareChart"></canvas>
            </div>
          </div>
        </section>

        {/* SECTION 3 – EVENTS & WEBINARS BREAKDOWN */}
        <section className="report-section" aria-labelledby="breakdown-heading">
          <div className="section-header">
            <span className="eyebrow">Activity Details</span>
            <h2 id="breakdown-heading">Events &amp; Webinars Breakdown</h2>
            <p>Detailed activity metrics for physical events and digital webinars conducted during the year.</p>
            <div className="divider">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="breakdown-grid">
            {/* Physical Events */}
            <div className="report-card report-card-no-margin">
              <div className="report-card-title">
                <FaStore /> A. Physical Events
              </div>
              <ul className="event-info-list">
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaFlag />
                  </span>
                  <div className="eit-text">
                    <strong>Exhibitions Conducted</strong>
                    <span>68 physical exhibitions held across Uttar Pradesh and nationally</span>
                  </div>
                </li>
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaMapPin />
                  </span>
                  <div className="eit-text">
                    <strong>Locations Covered</strong>
                    <span>Lucknow, Delhi, Mumbai, Varanasi, Agra, Moradabad, Jaipur, Kolkata, Chennai</span>
                  </div>
                </li>
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaUsers />
                  </span>
                  <div className="eit-text">
                    <strong>Average Participation per Event</strong>
                    <span>240 participants per exhibition on average</span>
                  </div>
                </li>
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaHandshake />
                  </span>
                  <div className="eit-text">
                    <strong>B2B Meetings Facilitated</strong>
                    <span>3,200+ business-to-business meetings with buyers and distributors</span>
                  </div>
                </li>
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaStar />
                  </span>
                  <div className="eit-text">
                    <strong>Notable Events</strong>
                    <span>ODOP Expo Lucknow, Trade Fair Delhi, Craftopia Mumbai, UP MSME Expo Varanasi, One India Bazaar Agra</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Webinars / Digital Events */}
            <div className="report-card report-card-no-margin">
              <div className="report-card-title">
                <FaVideo /> B. Webinars &amp; Digital Events
              </div>
              <ul className="event-info-list">
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaDesktop />
                  </span>
                  <div className="eit-text">
                    <strong>Webinars Conducted</strong>
                    <span>52 online webinars and digital interaction sessions held</span>
                  </div>
                </li>
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaPersonChalkboard />
                  </span>
                  <div className="eit-text">
                    <strong>Average Attendees per Session</strong>
                    <span>310 registrants per webinar on average</span>
                  </div>
                </li>
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaCertificate />
                  </span>
                  <div className="eit-text">
                    <strong>Certificates Issued</strong>
                    <span>6,800+ digital certificates distributed to participants</span>
                  </div>
                </li>
                <li className="event-info-item">
                  <span className="eit-icon">
                    <FaTags />
                  </span>
                  <div className="eit-text">
                    <strong>Webinar Topics Covered</strong>
                    <span>Key areas addressed across all sessions:</span>
                  </div>
                </li>
              </ul>
              <div className="webinar-topics">
                <span className="webinar-topic-tag">
                  <FaShip className="webinar-topic-icon" /> Export Procedures
                </span>
                <span className="webinar-topic-tag">
                  <FaBullhorn className="webinar-topic-icon" /> Digital Marketing
                </span>
                <span className="webinar-topic-tag">
                  <FaTrademark className="webinar-topic-icon" /> Branding &amp; Packaging
                </span>
                <span className="webinar-topic-tag">
                  <FaCoins className="webinar-topic-icon" /> Finance &amp; Loans
                </span>
                <span className="webinar-topic-tag">
                  <FaQrcode className="webinar-topic-icon" /> E-Commerce Onboarding
                </span>
                <span className="webinar-topic-tag">
                  {/* <FaShieldAlt className="webinar-topic-icon" /> GI Tag Registration */}
                </span>
                <span className="webinar-topic-tag">
                  <FaChartLine className="webinar-topic-icon" /> MSME Policy Updates
                </span>
                <span className="webinar-topic-tag">
                  <FaRecycle className="webinar-topic-icon" /> Sustainable Practices
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
