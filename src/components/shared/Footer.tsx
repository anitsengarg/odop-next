import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter, FaYoutube } from "react-icons/fa6";
import styles from "@/styles/Footer.module.css";

function Footer() {
    return (
        <>
            <footer className={`${styles.siteFooter} site-footer`}>
                <div className={`${styles.footerTop} footer-top`}>
                    <div className="container">
                        <div className={`${styles.footerGrid} footer-grid`}>
                            <div className={`${styles.footerBrand} footer-brand`}>
                                <Link href="/" className={styles.footerLogo} aria-label="ODOP UP Portal">
                                    <div className={styles.footerLogoIcon}></div>
                                </Link>
                                <p>The ODOP UP Portal is the official digital platform of the Government of Uttar Pradesh to
                                    connect local artisans, manufacturers and wholesalers with buyers across India and the
                                    world.</p>
                                <div className={`${styles.footerSocial} footer-social`}>
                                    <Link href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebookF/></Link>
                                    <Link href="#" className={styles.socialLink} aria-label="Twitter"><FaXTwitter/></Link>
                                    <Link href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram/></Link>
                                    <Link href="#" className={styles.socialLink} aria-label="YouTube"><FaYoutube/></Link>
                                    <Link href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedinIn/></Link>
                                </div>
                            </div>
                            <div className={styles.footerCol}>
                                <h4>Quick Links</h4>
                                <ul className={styles.footerLinks}>
                                    <li>
                                        <Link href="/knowledge-base/project-report"><LuChevronRight /> Project Report</Link>
                                    </li>
                                    <li>
                                        <Link href="/knowledge-base/documentary"><LuChevronRight /> Documentary</Link>
                                    </li>
                                    <li>
                                        <Link href="/knowledge-base/success-story"><LuChevronRight /> Success Story</Link>
                                    </li>
                                    <li>
                                        <Link href="/knowledge-base/project-video"><LuChevronRight /> Product Video</Link>
                                    </li>
                                    <li>
                                        <Link href="/districts"><LuChevronRight /> Districts</Link>
                                    </li>
                                    <li>
                                        <Link href="/suppliers"><LuChevronRight /> Supplier Listing</Link>
                                    </li>
                                    <li>
                                        <Link href="/odop-schemes"><LuChevronRight /> Govt Schemes</Link>
                                    </li>
                                    <li>
                                        <Link href="/about"><LuChevronRight /> About ODOP</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us"><LuChevronRight /> Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.footerCol}>
                                <h4>Supplier Types</h4>
                                <ul className={styles.footerLinks}>
                                    <li>
                                        <Link href="/supplier-listing.html?type=manufacturer"><LuChevronRight />
                                            Manufacturers</Link>
                                    </li>
                                    <li>
                                        <Link href="/supplier-listing.html?type=wholesaler"><LuChevronRight />
                                            Wholesalers</Link>
                                    </li>
                                    <li>
                                        <Link href="/supplier-listing.html?type=distributor"><LuChevronRight />
                                            Distributors</Link>
                                    </li>
                                    <li>
                                        <Link href="/supplier-listing.html?type=shopkeeper"><LuChevronRight />Shopkeepers</Link>
                                    </li>
                                    <li>
                                        <Link href="/supplier-listing.html?type=artisan"><LuChevronRight />
                                            Artisans</Link>
                                    </li>
                                    <li>
                                        <Link href="/supplier-listing.html?type=exporter"><LuChevronRight />
                                            Exporters</Link></li>
                                </ul>
                            </div>
                            <div className={styles.footerCol}>
                                <h4>Contact Details</h4>
                                <div className={styles.footerContactList}>
                                    <div className={styles.footerContactItem}>
                                        <FaLocationDot  />
                                        <span>ODOP Cell,
                                        Niryat Bhawan, Second Floor, 8 Cantt Road, Qaiserbagh, Lucknow &ndash; 226001</span>
                                    </div>
                                    <div className={styles.footerContactItem}>
                                        <FaEnvelope  />
                                        <span>odop-up@nic.in</span>
                                    </div>
                                    <div className={styles.footerContactItem}>
                                        <FaClock  />
                                        <span>Mon &ndash; Sat: 9:00 AM
                                            &ndash;
                                        6:00 PM</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className="container">
                        <p>&copy; 2026 ODOP UP Portal. Government of Uttar Pradesh. All Rights Reserved.
                        </p>
                        <div className={`${styles.footerBottomLinks} footer-bottom-links`}>
                            <Link href="#">Privacy Policy</Link>
                            <Link href="#">Terms of Use</Link>
                            <Link href="#">Accessibility</Link>
                            <Link href="#">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <button id="back-to-top" aria-label="Back to top"><i
                className="fas fa-chevron-up"></i></button> */}
        </>
    )
}

export default Footer;
