import Link from "next/link";

export default function SupplierRegistrationPage() {
  return (
    <main className="supplier-registration-page">
      <section className="page-hero supplier-registration-hero">
        <div className="container">
          <h1>
            <i className="fas fa-file-circle-plus form-page-title-icon"></i>
            Supplier Account Registration
          </h1>
          <p>
            Register with basic account details first. Complete the full
            profile, products, and operational information later from the
            supplier admin panel.
          </p>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="registration-main-grid">
            <div className="contact-form-panel">
              <div className="form-panel-header">
                <h2>
                  <i className="fas fa-id-card-clip"></i> Basic Supplier
                  Registration
                </h2>
                <p>
                  Submit only the essential onboarding details here. Detailed
                  business and product information can be updated after login.
                </p>
              </div>

              <form className="contact-form supplier-registration-form" noValidate>
                <div className="registration-section registration-section-intro">
                  <h3>1. Select Profile Type</h3>
                  <p className="registration-section-copy">
                    Choose the business role you want to register.
                  </p>
                  <div className="registration-type-grid">
                    <label className="registration-type-option">
                      <input
                        type="radio"
                        name="profileType"
                        value="manufacturer"
                        defaultChecked
                      />
                      <span className="registration-type-card">
                        <i className="fas fa-industry"></i>
                        <strong>Manufacturer</strong>
                        <small>Production details</small>
                      </span>
                    </label>
                    <label className="registration-type-option">
                      <input type="radio" name="profileType" value="wholesaler" />
                      <span className="registration-type-card">
                        <i className="fas fa-warehouse"></i>
                        <strong>Wholesaler</strong>
                        <small>Bulk stock details</small>
                      </span>
                    </label>
                    <label className="registration-type-option">
                      <input type="radio" name="profileType" value="distributor" />
                      <span className="registration-type-card">
                        <i className="fas fa-truck-fast"></i>
                        <strong>Distributor</strong>
                        <small>Territory coverage</small>
                      </span>
                    </label>
                    <label className="registration-type-option">
                      <input type="radio" name="profileType" value="shopkeeper" />
                      <span className="registration-type-card">
                        <i className="fas fa-shop"></i>
                        <strong>Shopkeeper</strong>
                        <small>Store details</small>
                      </span>
                    </label>
                    <label className="registration-type-option">
                      <input type="radio" name="profileType" value="artisan" />
                      <span className="registration-type-card">
                        <i className="fas fa-hands"></i>
                        <strong>Artisan</strong>
                        <small>Craft profile</small>
                      </span>
                    </label>
                    <label className="registration-type-option">
                      <input type="radio" name="profileType" value="exporter" />
                      <span className="registration-type-card">
                        <i className="fas fa-globe"></i>
                        <strong>Exporter</strong>
                        <small>Export details</small>
                      </span>
                    </label>
                  </div>
                </div>

                <div className="registration-section">
                  <h3>2. Basic Business Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Mobile Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="Enter registered mobile number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="business@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Password <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-input"
                        placeholder="Create password"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Confirm Password <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-input"
                        placeholder="Confirm password"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="registration-section">
                  <div className="form-group form-checkbox-group">
                    <label className="form-checkbox-label">
                      <input type="checkbox" required />
                      <span className="checkbox-custom"></span>I confirm that the
                      submitted registration details are accurate and I will
                      complete the remaining profile information from the
                      supplier admin panel after login.
                    </label>
                  </div>
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg form-submit-btn"
                    >
                      <i className="fas fa-file-circle-check"></i> Create
                      Supplier Account
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <aside className="registration-sidebar">
              <div className="contact-info-card">
                <div className="info-card-header">
                  <i className="fas fa-list-check"></i>
                  <h3>Registration Checklist</h3>
                </div>
                <div className="registration-sidebar-body">
                  <ul className="registration-note-list">
                    <li>Choose the correct supplier profile type</li>
                    <li>Enter business name and primary contact person</li>
                    <li>Provide mobile number, email, district and password</li>
                    <li>Complete remaining profile data after login</li>
                    <li>
                      Use the supplier dashboard for products and business
                      details
                    </li>
                  </ul>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-card-header">
                  <i className="fas fa-folder-open"></i>
                  <h3>Keep Ready</h3>
                </div>
                <div className="registration-sidebar-body">
                  <ul className="registration-note-list">
                    <li>Business contact details</li>
                    <li>Mobile number and email access</li>
                    <li>District and supplier type</li>
                    <li>Password for first login</li>
                    <li>
                      GST and product data for later profile completion
                    </li>
                  </ul>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-card-header">
                  <i className="fas fa-circle-info"></i>
                  <h3>Portal Note</h3>
                </div>
                <div className="registration-sidebar-body">
                  <p>
                    This page is now only for basic supplier account creation.
                    Full business profile, compliance, banner, product and
                    enquiry information should be completed after login from the
                    supplier admin panel.
                  </p>
                  <Link
                    href="/contact-us"
                    className="btn btn-outline-secondary w-100"
                  >
                    Need Registration Help
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
