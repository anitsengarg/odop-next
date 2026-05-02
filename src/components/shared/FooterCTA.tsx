import Link from "next/link";
import { FaInfoCircle, FaUserPlus } from "react-icons/fa";
import styles from "@/styles/FooterCTA.module.css";

function FooterCTA() {
    return (<>
        <section className="section">
            <div className="container">
                <div className={`${styles.ctaBanner} cta-banner`}>
                    <div className="container">
                        <h2>ODOP Portal Registration</h2>
                        <p>Join thousands of verified suppliers, manufacturers and artisans already growing their business
                            through the ODOP UP Portal.</p>
                        <div className={styles.ctaActions}>
                            <Link href="supplier-registration.html"
                                className="btn btn-outline-white btn-lg"><FaUserPlus /> Register as Supplier
                            </Link>
                            <Link href="about-odop.html" className="btn btn-gold btn-lg"><FaInfoCircle /> Learn About ODOP </Link></div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default FooterCTA;
