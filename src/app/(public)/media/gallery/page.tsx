import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Events & Media | ODOP UP",
  description: "ODOP UP Gallery — workshops, conclaves, press coverage and artisan success stories from One District One Product initiatives across Uttar Pradesh.",
};

export default function GalleryPage() {
  return (
    <main className="main-content gallery-page">
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="gallery-hero-badges">
            <span className="badge badge-gold"><i className="fas fa-camera-retro" aria-hidden="true" /> Event Archive</span>
            <span className="badge badge-success"><i className="fas fa-map-marked-alt" aria-hidden="true" /> 75 District Stories</span>
          </div>
          <h1 className="page-hero-title">ODOP Gallery &amp; Fair Highlights</h1>
          <p className="page-hero-subtitle">A curated view of workshops, conclaves, press moments and artisan success stories from One District One Product initiatives across Uttar Pradesh.</p>
        </div>
      </section>

      <section className="section gallery-content-section">
        <div className="container gallery-container">
          <div className="section-header gallery-page-intro">
            <span className="eyebrow">Photo &amp; Video Archive</span>
            <h2>ODOP Event and Media Archive</h2>
            <p>Explore workshops, conclaves, press coverage, financial outreach and entrepreneur success stories, all collected in the same gallery experience.</p>
            <div className="divider"><span /><span /><span /></div>
          </div>

          <div className="masonry-header mt-md-60 mt-30 mb-md-40 mb-20">
            <div className="mb-md-0 mb-10">
              <h3>Workshops &amp; Webinars</h3>
              <p>Engaging Sessions to Learn, Share, and Grow Together.</p>
            </div>
          </div>
          <section className="masonry-container">
            {[
              { district: "Agra", src: "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b971ba6aff1.jpeg" },
              { district: "Aligarh", src: "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b9723197a75.jpeg" },
              { district: "Ambedkar Nagar", src: "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b9721566983.jpeg" },
              { district: "Amethi", src: "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b971fa950c7.jpeg" },
              { district: "Amroha", src: "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b9734db6118.jpeg" },
              { district: "Agra", src: "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b9733411c12.jpeg" },
              { district: "Aligarh", src: "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b9710e86992.jpeg" },
            ].map(({ district, src }, i) => (
              <div key={i} className="pin-card" data-video="false" data-district={district} data-src={src}>
                <div className="media-container">
                  <img src={src} className="pin-image" alt={`ODOP workshop ${district}`} loading="lazy" />
                </div>
              </div>
            ))}
          </section>

          <div className="masonry-header mt-md-60 mt-30 mb-md-40 mb-20">
            <div className="mb-md-0 mb-10">
              <h3>UP Conclave (2025)</h3>
              <p>CMYuva Conclave 2025 - Innovation, Ideas &amp; Networking with Government Funding Support</p>
            </div>
          </div>
          <section className="masonry-container">
            {[
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/69ca0334bdec7.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/69c679cf2b3de.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/69ca02c440661.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/69ca03094fa85.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/69ca055e39fc5.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/69ca059dc7118.jpg",
            ].map((src, i) => (
              <div key={i} className="pin-card" data-video="false" data-src={src}>
                <div className="media-container">
                  <img src={src} className="pin-image" alt="ODOP UP Conclave 2025" loading="lazy" />
                </div>
              </div>
            ))}
          </section>

          <div className="masonry-header mt-md-60 mt-30 mb-md-40 mb-20">
            <div className="mb-md-0 mb-10"><h3>Press &amp; Media</h3></div>
          </div>
          <section className="masonry-container">
            {[
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68c2b237ec378.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68b93ec8859ae.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68c2afd7e395e.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68c2afe6f4236.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68c2b27e34dd4.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68c2b29a340ab.jpg",
            ].map((src, i) => (
              <div key={i} className="pin-card" data-video="false" data-src={src}>
                <div className="media-container">
                  <img src={src} className="pin-image" alt="ODOP Press Media" loading="lazy" />
                </div>
              </div>
            ))}
          </section>

          <div className="masonry-header mt-md-60 mt-30 mb-md-40 mb-20">
            <div className="mb-md-0 mb-10"><h3>Credit Camp</h3></div>
          </div>
          <section className="masonry-container">
            {[
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68bc16a56ece7.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68bc17211c9cd.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68bc16fd5079e.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68bc16d73e459.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68bc174ac7406.jpg",
              "https://scheme.cmyuva.org.in/public/uploads/cmyuva_gallery/68bc15471df48.jpg",
            ].map((src, i) => (
              <div key={i} className="pin-card" data-video="false" data-src={src}>
                <div className="media-container">
                  <img src={src} className="pin-image" alt="ODOP Credit Camp" loading="lazy" />
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
