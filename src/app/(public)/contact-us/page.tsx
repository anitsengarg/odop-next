import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ODOP UP - One District One Product",
  description:
    "Contact ODOP UP - Reach out for queries about the One District One Product portal, supplier registration, government schemes, and more.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* ===== PAGE HERO BANNER ===== */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Get in Touch</h1>
          <p className="page-hero-subtitle">
            Contact the ODOP support desk for registration guidance, scheme assistance, supplier-related queries, and
            other official programme matters.
          </p>
        </div>
      </section>

      {/* ===== QUICK CONTACT CARDS ===== */}
      <section className="quick-contact-section">
        <div className="container">
          <div className="quick-contact-grid">
            <div className="quick-contact-card">
              <div className="qc-icon qc-icon-orange">
                <i className="fas fa-phone-alt" aria-hidden="true" />
              </div>
              <div className="qc-content">
                <h3>Toll-Free Helpline</h3>
                <p>Available Monday - Saturday, 9 AM to 6 PM</p>
                <a href="tel:18001805246" className="qc-link">1800-180-5246</a>
              </div>
            </div>
            <div className="quick-contact-card">
              <div className="qc-icon qc-icon-blue">
                <i className="fas fa-envelope" aria-hidden="true" />
              </div>
              <div className="qc-content">
                <h3>Email Support</h3>
                <p>Responses are generally issued within 2 business days</p>
                <a href="mailto:odopup@gmail.com" className="qc-link">odopup@gmail.com</a>
              </div>
            </div>
            <div className="quick-contact-card">
              <div className="qc-icon qc-icon-green">
                <i className="fab fa-whatsapp" aria-hidden="true" />
              </div>
              <div className="qc-content">
                <h3>WhatsApp Support</h3>
                <p>Use WhatsApp for quick support desk communication</p>
                <a href="https://wa.me/917839400100" className="qc-link" target="_blank" rel="noopener noreferrer">
                  +91 78394-00100
                </a>
              </div>
            </div>
            <div className="quick-contact-card">
              <div className="qc-icon qc-icon-purple">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
              </div>
              <div className="qc-content">
                <h3>Head Office</h3>
                <p>Niryat Bhawan, Second Floor, 8 Cantt Road, Qaiserbagh, Lucknow</p>
                <a href="#map-section" className="qc-link">View Location</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTACT SECTION ===== */}
      <main className="main-content contact-page">
        <div className="container">
          <div className="contact-main-grid">

            {/* ===== CONTACT FORM ===== */}
            <div className="contact-form-panel">
              <div className="form-panel-header">
                <h2><i className="fas fa-paper-plane" aria-hidden="true" /> Submit an Official Enquiry</h2>
                <p>Submit the form below and the ODOP support team will respond within 2 business days.</p>
              </div>
              <form className="contact-form" id="contactForm" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contactName" className="form-label">Full Name <span className="required">*</span></label>
                    <input type="text" id="contactName" name="contactName" className="form-input" placeholder="Enter your full name" required />
                    <span className="form-error">Please enter your name</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactMobile" className="form-label">Mobile Number <span className="required">*</span></label>
                    <input type="tel" id="contactMobile" name="contactMobile" className="form-input" placeholder="10-digit mobile number" pattern="[0-9]{10}" required />
                    <span className="form-error">Enter a valid 10-digit number</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contactEmail" className="form-label">Email Address <span className="required">*</span></label>
                    <input type="email" id="contactEmail" name="contactEmail" className="form-input" placeholder="your@email.com" required />
                    <span className="form-error">Enter a valid email address</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactDistrict" className="form-label">District</label>
                    <select id="contactDistrict" name="contactDistrict" className="form-input form-select">
                      <option value="">-- Select Your District --</option>
                      {["Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya","Azamgarh","Badaun","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Budh Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Prayagraj","Rae Bareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"].map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contactSubject" className="form-label">Subject / Category <span className="required">*</span></label>
                  <select id="contactSubject" name="contactSubject" className="form-input form-select" required>
                    <option value="">-- Select Query Category --</option>
                    <option>Artisan / Supplier Registration</option>
                    <option>Government Scheme Query</option>
                    <option>Product Export Assistance</option>
                    <option>Bulk Purchase / Sourcing</option>
                    <option>GI Tag Registration</option>
                    <option>Financial Assistance / Loan</option>
                    <option>Skill Training Query</option>
                    <option>Digital Platform Listing</option>
                    <option>Portal Technical Issue</option>
                    <option>Media / Research Query</option>
                    <option>Other</option>
                  </select>
                  <span className="form-error">Please select a subject</span>
                </div>
                <div className="form-group">
                  <label htmlFor="contactOrganization" className="form-label">Organization / Business Name</label>
                  <input type="text" id="contactOrganization" name="contactOrganization" className="form-input" placeholder="Your company or craft unit name (optional)" />
                </div>
                <div className="form-group">
                  <label htmlFor="contactMessage" className="form-label">Your Message <span className="required">*</span></label>
                  <textarea id="contactMessage" name="contactMessage" className="form-input form-textarea" rows={5} placeholder="Describe your query or requirement in detail..." required />
                  <span className="form-error">Please enter your message</span>
                </div>
                <div className="form-group form-checkbox-group">
                  <label className="form-checkbox-label">
                    <input type="checkbox" id="contactConsent" name="contactConsent" required />
                    <span className="checkbox-custom" />
                    I agree that the ODOP UP team may contact me via phone/email regarding my query. I have read the{" "}
                    <a href="#">Privacy Policy</a>.
                  </label>
                  <span className="form-error">Please accept the terms to proceed</span>
                </div>
                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-lg form-submit-btn" id="contactSubmitBtn">
                    <i className="fas fa-paper-plane" aria-hidden="true" /> Submit Enquiry
                  </button>
                </div>
                <div className="form-success-message" id="contactFormSuccess">
                  <div className="success-icon"><i className="fas fa-check-circle" aria-hidden="true" /></div>
                  <h3>Thank You! Your message has been sent.</h3>
                  <p>Our team will respond within 2 business days. For urgent queries, call our helpline: <strong>1800-180-5246</strong></p>
                </div>
              </form>
            </div>

            {/* ===== CONTACT SIDEBAR ===== */}
            <aside className="contact-sidebar">
              {/* Regional Offices */}
              <div className="contact-info-card">
                <div className="info-card-header">
                  <i className="fas fa-building" aria-hidden="true" />
                  <h3>Regional Offices</h3>
                </div>
                <div className="regional-offices">
                  <div className="regional-office">
                    <div className="office-region-badge">Head Office</div>
                    <h4>Lucknow (State HQ)</h4>
                    <p><i className="fas fa-map-marker-alt" aria-hidden="true" /> Niryat Bhawan, Second Floor, 8 Cantt Road, Qaiserbagh, Lucknow - 226001</p>
                    <p><i className="fas fa-phone-alt" aria-hidden="true" /> 0522-2238202</p>
                    <p><i className="fas fa-clock" aria-hidden="true" /> Mon-Sat: 9:30 AM - 5:30 PM</p>
                  </div>
                  <div className="regional-office">
                    <div className="office-region-badge region-2">Zone - West</div>
                    <h4>Agra Regional Office</h4>
                    <p><i className="fas fa-map-marker-alt" aria-hidden="true" /> District Industries Centre, Agra - 282001</p>
                    <p><i className="fas fa-phone-alt" aria-hidden="true" /> 0562-2230451</p>
                  </div>
                  <div className="regional-office">
                    <div className="office-region-badge region-3">Zone - East</div>
                    <h4>Varanasi Regional Office</h4>
                    <p><i className="fas fa-map-marker-alt" aria-hidden="true" /> District Industries Centre, Varanasi - 221001</p>
                    <p><i className="fas fa-phone-alt" aria-hidden="true" /> 0542-2209876</p>
                  </div>
                  <div className="regional-office">
                    <div className="office-region-badge region-4">Zone - North</div>
                    <h4>Moradabad Regional Office</h4>
                    <p><i className="fas fa-map-marker-alt" aria-hidden="true" /> District Industries Centre, Moradabad - 244001</p>
                    <p><i className="fas fa-phone-alt" aria-hidden="true" /> 0591-2412345</p>
                  </div>
                </div>
              </div>

              {/* Key Contacts */}
              <div className="contact-info-card">
                <div className="info-card-header">
                  <i className="fas fa-user-tie" aria-hidden="true" />
                  <h3>Key Contacts</h3>
                </div>
                <div className="key-contacts-list">
                  {[
                    { name: "Shri Ramesh Kumar Sharma", role: "Director - ODOP, UP", email: "director.odop@up.gov.in" },
                    { name: "Smt. Priya Singh", role: "Joint Director - Export & Marketing", email: "export.odop@up.gov.in" },
                    { name: "Shri Ajay Verma", role: "IT Head - ODOP Digital Portal", email: "tech.odop@up.gov.in" },
                  ].map(({ name, role, email }) => (
                    <div key={email} className="key-contact">
                      <div className="key-contact-avatar"><i className="fas fa-user" aria-hidden="true" /></div>
                      <div className="key-contact-info">
                        <h4>{name}</h4>
                        <span className="key-contact-role">{role}</span>
                        <a href={`mailto:${email}`} className="key-contact-email">{email}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* ===== MAP SECTION ===== */}
      <section className="map-section" id="map-section">
        <div className="container">
          <div className="section-header centered-header">
            <h2 className="section-title">Find Us on the Map</h2>
            <p className="section-subtitle">
              ODOP UP Head Office - Niryat Bhawan, Second Floor, 8 Cantt Road, Qaiserbagh, Lucknow, Uttar Pradesh - 226001
            </p>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps?q=Niryat+Bhawan,+Second+Floor,+8+Cantt+Road,+Qaiserbagh,+Lucknow,+Uttar+Pradesh+226001,+India&output=embed"
                title="ODOP UP Head Office Location - Niryat Bhawan, Lucknow"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-embed"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}