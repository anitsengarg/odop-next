"use client";

import Link from "next/link";
import { FaQuestionCircle, FaSignInAlt } from "react-icons/fa";
import { FaChevronDown, FaGlobe, FaLandmark, FaPhone } from "react-icons/fa6";
import styles from "@/styles/Navbar.module.css";
import LoginModal from "@/components/ui/LoginModal";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

/** Matches responsive breakpoint used across the portal */
const MOBILE_MQ = "(max-width: 767px)";

function subscribeMobileMq(onStoreChange: () => void) {
    const mq = window.matchMedia(MOBILE_MQ);
    mq.addEventListener("change", onStoreChange);
    return () => mq.removeEventListener("change", onStoreChange);
}

function getMobileSnapshot() {
    return window.matchMedia(MOBILE_MQ).matches;
}

function getMobileServerSnapshot() {
    return false;
}

function useIsMobileViewport() {
    return useSyncExternalStore(subscribeMobileMq, getMobileSnapshot, getMobileServerSnapshot);
}

/** Aligns with https://odop-theta.vercel.app/index.html navigation */
type DropdownId =
    | "about"
    | "schemes"
    | "districts-marketplace"
    | "media"
    | "knowledge-hub"
    | "partnerships"
    | "resources";

function Navbar() {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedDropdown, setExpandedDropdown] = useState<DropdownId | null>(null);

    const pathname = usePathname();

    const isMobile = useIsMobileViewport();

    const closeMobileNav = useCallback(() => {
        setMobileMenuOpen(false);
        setExpandedDropdown(null);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            closeMobileNav();
        }
    }, [isMobile, closeMobileNav]);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((open) => {
            if (open) {
                setExpandedDropdown(null);
            }
            return !open;
        });
    };

    const onDropdownParentClick = (id: DropdownId) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isMobile) return;
        e.preventDefault();
        setExpandedDropdown((current) => (current === id ? null : id));
    };

    const onLeafNavClick = () => {
        if (isMobile) {
            closeMobileNav();
        }
    };

    const dropdownOpen = (id: DropdownId) => expandedDropdown === id;

    return (
        <>
            <div className={`${styles.topBar} top-bar`}>
                <div className="container">
                    <div className={styles.topBarLeft}>
                        <span><FaLandmark /> Government of Uttar Pradesh</span>
                        <span className={styles.topBarDivider}></span>
                        <a href="tel:18001805555"><FaPhone /> Helpline: 1800-180-5555</a>
                    </div>
                    <div className={styles.topBarRight}>
                        <a href="#"><FaGlobe />
                            &#2361;&#2367;&#2344;&#2381;&#2342;&#2368;
                        </a>
                        <span className={styles.topBarDivider}></span>
                        <a href="#" onClick={(e) => { e.preventDefault(); setLoginModalOpen(true); }}><FaSignInAlt /> Login / Register</a>
                        <span className={styles.topBarDivider}></span>
                        <a href="#"> <FaQuestionCircle />Help</a></div>
                </div>
            </div>

            <header className={`${styles.siteHeader} site-header`} id="site-header">
                {mobileMenuOpen && isMobile ? (
                    <button
                        type="button"
                        aria-label="Close navigation menu"
                        className="fixed inset-0 z-[10040] md:hidden bg-black/25"
                        onClick={closeMobileNav}
                    />
                ) : null}

                <nav className={`${styles.navbar} navbar relative z-[10055]`} aria-label="Primary">
                    <div className="container">
                        <div className="grid grid-cols-12 items-center gap-2 md:gap-4">
                            <div className="order-1 col-span-8 min-w-0 shrink md:order-1 md:col-span-2 flex items-center justify-start md:justify-center">
                                <Link href="/" className={`${styles.navLogo} nav-logo`}>
                                    <img src="/assets/img/logo.png" alt="ODOP UP Portal" className={`${styles.navLogoImage} nav-logo-image`} />
                                </Link>
                            </div>

                            <div className="order-3 col-span-12 md:order-2 md:col-span-9">
                                <ul
                                    className={`${styles.navMenu} nav-menu max-md:z-[10050] max-md:isolate ${mobileMenuOpen ? "open" : ""}`}
                                    id="nav-menu"
                                >
                                    {/* ===== ABOUT DROPDOWN ===== */}
                                    <li
                                        className={`${styles.navItemDropdown} nav-item-dropdown ${dropdownOpen("about") ? "is-open" : ""}`}
                                    >
                                        <Link
                                            href="/about"
                                            className={`${styles.navLink} nav-link`}
                                            onClick={onDropdownParentClick("about")}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen("about")}
                                            aria-controls="about-submenu"
                                        >
                                            About <FaChevronDown aria-hidden="true" />
                                        </Link>
                                        <ul
                                            id="about-submenu"
                                            role="list"
                                            className={`${styles.navSubmenu} nav-submenu`}
                                        >
                                            <li role="listitem"><Link href="/about" onClick={onLeafNavClick} aria-current={pathname === "/about" ? "page" : undefined}>Introduction</Link></li>
                                            <li role="listitem"><Link href="/about/chief-minister-message" onClick={onLeafNavClick} aria-current={pathname === "/about/chief-minister-message" ? "page" : undefined}>Chief Minister&apos;s Message</Link></li>
                                            <li role="listitem"><Link href="/about/minister-message" onClick={onLeafNavClick} aria-current={pathname === "/about/minister-message" ? "page" : undefined}>Minister&apos;s Message</Link></li>
                                            <li role="listitem"><Link href="/about/objective-mission-vision" onClick={onLeafNavClick} aria-current={pathname === "/about/objective-mission-vision" ? "page" : undefined}>Objective and Mission &amp; Vision</Link></li>
                                            <li role="listitem"><Link href="/about/achievements" onClick={onLeafNavClick} aria-current={pathname === "/about/achievements" ? "page" : undefined}>Achievements</Link></li>
                                            <li role="listitem"><Link href="/about/brand-odop" onClick={onLeafNavClick} aria-current={pathname === "/about/brand-odop" ? "page" : undefined}>Brand ODOP</Link></li>
                                            <li role="listitem"><Link href="/about/allotted-budget" onClick={onLeafNavClick} aria-current={pathname === "/about/allotted-budget" ? "page" : undefined}>Allotted Budget</Link></li>
                                            <li role="listitem"><Link href="/about/export-promotion-policy" onClick={onLeafNavClick} aria-current={pathname === "/about/export-promotion-policy" ? "page" : undefined}>Export Promotion Policy</Link></li>
                                            <li role="listitem"><Link href="/about/odop-cell" onClick={onLeafNavClick} aria-current={pathname === "/about/odop-cell" ? "page" : undefined}>ODOP Cell</Link></li>
                                            <li role="listitem"><Link href="/about/ministers-and-govt-officers-list" onClick={onLeafNavClick} aria-current={pathname === "/about/ministers-and-govt-officers-list" ? "page" : undefined}>Ministers&apos; &amp; Officers&apos; List</Link></li>
                                            <li role="listitem"><Link href="/about/directorate-officers-list" onClick={onLeafNavClick} aria-current={pathname === "/about/directorate-officers-list" ? "page" : undefined}>Directorate Officers&apos; List</Link></li>
                                            <li role="listitem"><Link href="/about/right-to-information" onClick={onLeafNavClick} aria-current={pathname === "/about/right-to-information" ? "page" : undefined}>Right to Information (RTI)</Link></li>
                                            <li role="listitem"><Link href="/about/minutes-of-meeting" onClick={onLeafNavClick} aria-current={pathname === "/about/minutes-of-meeting" ? "page" : undefined}>Minutes of Meeting</Link></li>
                                            <li role="listitem"><Link href="/about/government-orders" onClick={onLeafNavClick} aria-current={pathname === "/about/government-orders" ? "page" : undefined}>Government Orders</Link></li>
                                            <li role="listitem"><Link href="/about/frequently-asked-questions" onClick={onLeafNavClick} aria-current={pathname === "/about/frequently-asked-questions" ? "page" : undefined}>Frequently Asked Questions (FAQs)</Link></li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`${styles.navItemDropdown} nav-item-dropdown ${dropdownOpen("schemes") ? "is-open" : ""}`}
                                    >
                                        <Link
                                            href="/odop-schemes"
                                            className={`${styles.navLink} nav-link`}
                                            onClick={onDropdownParentClick("schemes")}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen("schemes")}
                                            aria-controls="schemes-submenu"
                                        >
                                            Schemes <FaChevronDown aria-hidden="true" />
                                        </Link>
                                        <ul id="schemes-submenu" role="list" className={`${styles.navSubmenu} nav-submenu`}>
                                            <li role="listitem"><Link href="/odop-schemes" onClick={onLeafNavClick} aria-current={pathname === "/odop-schemes" ? "page" : undefined}>ODOP Scheme</Link></li>
                                            <li role="listitem"><Link href="/assets/document/pdf-attachment/639126275519019895.pdf"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "/assets/document/pdf-attachment/639126275519019895.pdf" ? "page" : undefined}>Start-Up Schemes</Link></li>
                                            <li role="listitem"><Link href="/assets/document/pdf-attachment/Stand-up-India.pdf"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "/assets/document/pdf-attachment/Stand-up-India.pdf" ? "page" : undefined}>Stand-Up Schemes</Link></li>
                                            <li role="listitem"><Link href="https://cmyuva.org.in/"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://cmyuva.org.in/" ? "page" : undefined}>CMYUVA</Link></li>
                                            <li role="listitem"><Link href="https://msme1connect.up.gov.in/scheme-list/financial-assistance-scheme-for-one-district-one-product-(odop-margin-money-scheme)"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://msme1connect.up.gov.in/scheme-list/financial-assistance-scheme-for-one-district-one-product-(odop-margin-money-scheme)" ? "page" : undefined}>ODOP Margin Money Scheme</Link></li>
                                            <li role="listitem"><Link href="https://msme1connect.up.gov.in/scheme-list/odop-training-and-toolkit-scheme"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://msme1connect.up.gov.in/scheme-list/odop-training-and-toolkit-scheme" ? "page" : undefined}>ODOP Training and Toolkit Scheme</Link></li>
                                            <li role="listitem"><Link href="https://msme1connect.up.gov.in/registration"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://msme1connect.up.gov.in/registration" ? "page" : undefined}>Apply for Loan – ODOP Margin Money</Link></li>
                                            <li role="listitem"><Link href="https://bankofbaroda.bank.in/"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://bankofbaroda.bank.in/" ? "page" : undefined}>BOB PSB Loans in 59 Minutes</Link></li>
                                            <li role="listitem"><Link href="https://www.sidbi.in/en/"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://www.sidbi.in/en/" ? "page" : undefined}>SIDBI Loan Support</Link></li>
                                            <li role="listitem"><Link href="https://onlineloanappl.sidbi.in/OnlineApplication/"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://onlineloanappl.sidbi.in/OnlineApplication/" ? "page" : undefined}>SIDBI Online Loan Application</Link></li>
                                            <li role="listitem"><Link href="https://www.rxil.in/"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://www.rxil.in/" ? "page" : undefined}>MSME Financing – TReDS</Link></li>
                                            <li role="listitem"><Link href="https://udyamimitra.in/"  target="_blank" onClick={onLeafNavClick} aria-current={pathname === "https://udyamimitra.in/" ? "page" : undefined}>UdyamiMitra – Loan Facilitation</Link></li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`${styles.navItemDropdown} nav-item-dropdown ${dropdownOpen("districts-marketplace") ? "is-open" : ""}`}
                                    >
                                        <Link
                                            href="/suppliers"
                                            className={`${styles.navLink} nav-link`}
                                            onClick={onDropdownParentClick("districts-marketplace")}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen("districts-marketplace")}
                                            aria-controls="districts-marketplace-submenu"
                                        >
                                            Districts &amp; Marketplace <FaChevronDown aria-hidden="true" />
                                        </Link>
                                        <ul id="districts-marketplace-submenu" role="list" className={`${styles.navSubmenu} nav-submenu`}>
                                            <li role="listitem"><Link href="/districts" onClick={onLeafNavClick} aria-current={pathname === "/districts" ? "page" : undefined}>All 75 Districts</Link></li>
                                            <li role="listitem"><Link href="/suppliers?type=manufacturer" onClick={onLeafNavClick}>Supplier Directory</Link></li>
                                            <li role="listitem"><a href="https://apps.apple.com/in/app/udyam-sarthi/id1545330242" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>Udyam Sarthi App - Apple Store</a></li>
                                            <li role="listitem"><a href="https://play.google.com/store/apps/details?id=com.odop" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>Udyam Sarthi App - Google Play Store</a></li>
                                            <li role="listitem"><a href="https://niveshmitra.up.nic.in/" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>Nivesh Mitra</a></li>
                                            <li role="listitem"><a href="https://www.ondc.org/" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>ONDC</a></li>
                                            <li role="listitem"><a href="https://www.amazon.in/b/ref=s9_acss_bw_cg_kalapart_2d1_w?node=16204640031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-7&pf_rd_r=34RF0G7PF6H0KYR2J076&pf_rd_t=101&pf_rd_p=1ddc12b0-558b-4b5b-bb70-c018ea47f19f&pf_rd_i=15424266031" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>Amazon - Buyers</a></li>
                                            <li role="listitem"><a href="https://www.amazon.in/b/ref=s9_acss_bw_cg_kalapart_2d1_w?node=16204640031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-7&pf_rd_r=34RF0G7PF6H0KYR2J076&pf_rd_t=101&pf_rd_p=1ddc12b0-558b-4b5b-bb70-c018ea47f19f&pf_rd_i=15424266031" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>Amazon - Sellers</a></li>
                                            <li role="listitem"><a href="https://gem.gov.in/training/training_module" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>GeM Portal - Buyers and Sellers</a></li>
                                            <li role="listitem"><a href="https://www.ebay.in/" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>eBay</a></li>
                                            <li role="listitem"><a href="https://odopmart.up.gov.in/" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>ODOP Mart</a></li>
                                            <li role="listitem"><a href="https://www.flipkart.com/welcome-to-kumbh-mela-with-flipkart-store" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>ODOP Flipkart Store</a></li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`${styles.navItemDropdown} nav-item-dropdown ${dropdownOpen("media") ? "is-open" : ""}`}
                                    >
                                        <Link
                                            href="#"
                                            className={`${styles.navLink} nav-link`}
                                            onClick={onDropdownParentClick("media")}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen("media")}
                                            aria-controls="media-submenu"
                                        >
                                            Media <FaChevronDown aria-hidden="true" />
                                        </Link>
                                        <ul id="media-submenu" role="list" className={`${styles.navSubmenu} nav-submenu`}>
                                            <li role="listitem"><Link href="/media/gallery" onClick={onLeafNavClick} aria-current={pathname === "/media/gallery" ? "page" : undefined}>Gallery</Link></li>
                                            <li role="listitem"><Link href="/media/upcoming-events" onClick={onLeafNavClick} aria-current={pathname === "/media/upcoming-events" ? "page" : undefined}>Upcoming Events</Link></li>
                                            <li role="listitem"><Link href="/media/past-events" onClick={onLeafNavClick} aria-current={pathname === "/media/past-events" ? "page" : undefined}>Past Events</Link></li>
                                            <li role="listitem"><Link href="/media/event-reports" onClick={onLeafNavClick} aria-current={pathname === "/media/event-reports" ? "page" : undefined}>Event Reports</Link></li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`${styles.navItemDropdown} nav-item-dropdown ${dropdownOpen("knowledge-hub") ? "is-open" : ""}`}
                                    >
                                        <Link
                                            href="#"
                                            className={`${styles.navLink} nav-link`}
                                            onClick={onDropdownParentClick("knowledge-hub")}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen("knowledge-hub")}
                                            aria-controls="knowledge-hub-submenu"
                                        >
                                            Knowledge Hub <FaChevronDown aria-hidden="true" />
                                        </Link>
                                        <ul id="knowledge-hub-submenu" role="list" className={`${styles.navSubmenu} nav-submenu`}>
                                            <li role="listitem"><Link href="/knowledge-base/project-report" onClick={onLeafNavClick} aria-current={pathname === "/knowledge-base/project-report" ? "page" : undefined}>Project Report</Link></li>
                                            <li role="listitem"><Link href="/knowledge-base/documentary" onClick={onLeafNavClick} aria-current={pathname === "/knowledge-base/documentary" ? "page" : undefined}>Documentary</Link></li>
                                            <li role="listitem"><Link href="/knowledge-base/success-story" onClick={onLeafNavClick} aria-current={pathname === "/knowledge-base/success-story" ? "page" : undefined}>Success Story</Link></li>
                                            <li role="listitem"><Link href="/knowledge-base/project-video" onClick={onLeafNavClick} aria-current={pathname === "/knowledge-base/project-video" ? "page" : undefined}>Project Video</Link></li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`${styles.navItemDropdown} nav-item-dropdown ${dropdownOpen("partnerships") ? "is-open" : ""}`}
                                    >
                                        <Link
                                            href="#"
                                            className={`${styles.navLink} nav-link`}
                                            onClick={onDropdownParentClick("partnerships")}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen("partnerships")}
                                            aria-controls="partnerships-submenu"
                                        >
                                            Partnerships &amp; Reports <FaChevronDown aria-hidden="true" />
                                        </Link>
                                        <ul id="partnerships-submenu" role="list" className={`${styles.navSubmenu} nav-submenu`}>
                                            <li role="listitem"><Link href="/partnerships/mous-list" onClick={onLeafNavClick} aria-current={pathname === "/partnerships/mous-list" ? "page" : undefined}>MOUs/GOs</Link></li>
                                            <li role="listitem"><Link href="/partnerships/mous-list/amazon-flipkart-ecommerce-marketplace-mou" onClick={onLeafNavClick} aria-current={pathname === "/partnerships/mous-list/amazon-flipkart-ecommerce-marketplace-mou" ? "page" : undefined}>MOU Report</Link></li>
                                            <li role="listitem"><Link href="/partnerships/event-budget-report" onClick={onLeafNavClick} aria-current={pathname === "/partnerships/event-budget-report" ? "page" : undefined}>Budget Report</Link></li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`${styles.navItemDropdown} nav-item-dropdown ${dropdownOpen("resources") ? "is-open" : ""}`}
                                    >
                                        <Link
                                            href="#"
                                            className={`${styles.navLink} nav-link`}
                                            onClick={onDropdownParentClick("resources")}
                                            aria-haspopup="true"
                                            aria-expanded={dropdownOpen("resources")}
                                            aria-controls="resources-submenu"
                                        >
                                            Resources <FaChevronDown aria-hidden="true" />
                                        </Link>
                                        <ul id="resources-submenu" role="list" className={`${styles.navSubmenu} nav-submenu`}>
                                            <li role="listitem"><Link href="/resources/tenders" onClick={onLeafNavClick} aria-current={pathname === "/resources/tenders" ? "page" : undefined}>Tenders</Link></li>
                                            <li role="listitem"><Link href="/resources/cfc-list" onClick={onLeafNavClick} aria-current={pathname === "/resources/cfc-list" ? "page" : undefined}>List of CFCs</Link></li>
                                            <li role="listitem"><Link href="/resources/nabl-labs" onClick={onLeafNavClick} aria-current={pathname === "/resources/nabl-labs" ? "page" : undefined}>List of NABL Labs</Link></li>
                                            <li role="listitem"><a href="/assets/document/pdf-attachment/639126219125732430.pdf" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>ODOP Book</a></li>
                                            <li role="listitem"><a href="/assets/document/pdf-attachment/Coffee-Table-Book_040424.pdf" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>Coffee Table Book</a></li>
                                            <li role="listitem"><a href="/assets/document/pdf-attachment/639126231469087908.pdf" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>ODOP Registered Business Unit</a></li>
                                            <li role="listitem"><a href="/assets/document/pdf-attachment/639126232391758490.pdf" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>List of ODOP MM Beneficiaries</a></li>
                                            <li role="listitem"><a href="/assets/document/pdf-attachment/ODOP-Toolkit-list_050325.pdf" target="_blank" rel="noopener noreferrer" onClick={onLeafNavClick}>List of ODOP Training Toolkit Beneficiaries</a></li>
                                            <li role="listitem"><Link href="/resources/newsletter" onClick={onLeafNavClick} aria-current={pathname === "/resources/newsletter" ? "page" : undefined}>Newsletter</Link></li>
                                            <li role="listitem"><Link href="/resources/list-of-approvals" onClick={onLeafNavClick} aria-current={pathname === "/resources/list-of-approvals" ? "page" : undefined}>List of Approvals</Link></li>
                                            <li role="listitem"><Link href="/contact-us" onClick={onLeafNavClick} aria-current={pathname === "/contact-us" ? "page" : undefined}>Contact Us</Link></li>
                                            <li role="listitem"><Link href="#" onClick={onLeafNavClick}>Feedback</Link></li>
                                            <li role="listitem"><Link href="/resources/grievance-redressal" onClick={onLeafNavClick} aria-current={pathname === "/resources/grievance-redressal" ? "page" : undefined}>Grievance Redressal</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="order-2 col-span-4 shrink-0 md:order-3 md:col-span-1 md:col-start-12 flex justify-end">
                                <div className={`${styles.navActions} nav-actions`}>
                                    <div
                                        className={`${styles.navGovtLogos} nav-govt-logos hidden md:flex`}
                                        aria-label="Government partner logos"
                                    >
                                        <img src="/assets/img/up-mi-logo.png" alt="Make in India" className={`${styles.navGovtLogo} nav-govt-logo`} />
                                    </div>
                                    <button
                                        className={`${styles.navToggle} nav-toggle ${mobileMenuOpen ? "active" : ""}`}
                                        type="button"
                                        id="nav-toggle"
                                        aria-expanded={mobileMenuOpen}
                                        aria-controls="nav-menu"
                                        aria-label="Toggle Navigation"
                                        onClick={toggleMobileMenu}
                                    >
                                        <span></span><span></span><span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <LoginModal
                open={loginModalOpen}
                onClose={() => setLoginModalOpen(false)}
            />
        </>
    );
}

export default Navbar;
