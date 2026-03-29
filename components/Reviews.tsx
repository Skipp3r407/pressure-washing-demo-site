export default function Reviews() {
  return (
    <section className="section section--reviews" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <header className="section-header" data-reveal="left">
          <h2 className="section-title" id="reviews-heading">
            Google reviews
          </h2>
          <p className="section-intro">
            Real reviews live on your Google Business Profile—use the buttons below to read or leave a review.
          </p>
        </header>
        <div className="reviews-google-actions">
          <a
            className="btn btn--primary reviews-google-actions__btn"
            data-reveal="left"
            data-apex-google="write"
            href="https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services+Your+City+ST"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Google review
          </a>
          <a
            className="btn btn--secondary reviews-google-actions__btn"
            data-reveal="right"
            data-apex-google="read"
            href="https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services+Your+City+ST"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all reviews on Google
          </a>
        </div>
        <div className="reviews-layout">
          <div className="reviews-embed" data-reveal="left">
            <iframe
              title="Business location on Google Maps"
              className="reviews-embed__iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Your+City+State&t=m&z=11&ie=UTF8&iwloc=&output=embed&hl=en"
            />
            <a
              className="reviews-embed__link"
              data-apex-google="read"
              href="https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services+Your+City+ST"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open listing in Google Maps
            </a>
          </div>
          <div className="reviews-widget" data-reviews-carousel data-reveal="right">
            <div className="reviews-widget__header">
              <span className="reviews-widget__brand" aria-hidden="true">
                <svg className="reviews-widget__g" viewBox="0 0 24 24" width="22" height="22" focusable="false">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </span>
              <div className="reviews-widget__rating">
                <span className="stars" aria-label="4.9 out of 5 stars">
                  ★★★★★
                </span>
                <span className="reviews-widget__score">4.9</span>
                <span className="reviews-widget__count">Demo highlights—sync counts with Google after you connect</span>
              </div>
            </div>
            <div className="reviews-widget__track-wrap">
              <button type="button" className="reviews-widget__arrow reviews-widget__arrow--prev" data-reviews-prev aria-label="Previous reviews">
                ‹
              </button>
              <div className="reviews-widget__track" data-reviews-track>
                <article className="review-card">
                  <div className="review-card__top">
                    <span className="review-card__avatar" aria-hidden="true">
                      JM
                    </span>
                    <div>
                      <strong>Jordan M.</strong>
                      <div className="review-card__stars">★★★★★</div>
                    </div>
                  </div>
                  <p className="review-card__text">
                    “Driveway and walkway look brand new. Crew was on time and careful around the landscaping.”
                  </p>
                  <time className="review-card__date" dateTime="2025-11-02">
                    2 weeks ago
                  </time>
                </article>
                <article className="review-card">
                  <div className="review-card__top">
                    <span className="review-card__avatar">SK</span>
                    <div>
                      <strong>Sam K.</strong>
                      <div className="review-card__stars">★★★★★</div>
                    </div>
                  </div>
                  <p className="review-card__text">
                    “Soft wash on our siding removed all the green algae. No damage to the paint—highly recommend.”
                  </p>
                  <time className="review-card__date" dateTime="2025-10-18">
                    1 month ago
                  </time>
                </article>
                <article className="review-card">
                  <div className="review-card__top">
                    <span className="review-card__avatar">AL</span>
                    <div>
                      <strong>Avery L.</strong>
                      <div className="review-card__stars">★★★★★</div>
                    </div>
                  </div>
                  <p className="review-card__text">“Quoted fast, fair price, and the deck brightened up more than we expected.”</p>
                  <time className="review-card__date" dateTime="2025-09-05">
                    2 months ago
                  </time>
                </article>
                <article className="review-card">
                  <div className="review-card__top">
                    <span className="review-card__avatar">TC</span>
                    <div>
                      <strong>Taylor C.</strong>
                      <div className="review-card__stars">★★★★★</div>
                    </div>
                  </div>
                  <p className="review-card__text">
                    “Storefront concrete was embarrassing before lunch rush—same-day service saved us.”
                  </p>
                  <time className="review-card__date" dateTime="2025-08-22">
                    3 months ago
                  </time>
                </article>
                <article className="review-card">
                  <div className="review-card__top">
                    <span className="review-card__avatar">RB</span>
                    <div>
                      <strong>Riley B.</strong>
                      <div className="review-card__stars">★★★★★</div>
                    </div>
                  </div>
                  <p className="review-card__text">
                    “Honest quote, showed up when they said they would, and the house looks incredible. Already booked for next
                    year.”
                  </p>
                  <time className="review-card__date" dateTime="2025-07-30">
                    4 months ago
                  </time>
                </article>
                <article className="review-card">
                  <div className="review-card__top">
                    <span className="review-card__avatar">MD</span>
                    <div>
                      <strong>Morgan D.</strong>
                      <div className="review-card__stars">★★★★☆</div>
                    </div>
                  </div>
                  <p className="review-card__text">
                    “Great job on gutters and siding. One stubborn rust spot remains but they explained why—still 5 stars for
                    communication.”
                  </p>
                  <time className="review-card__date" dateTime="2025-07-08">
                    5 months ago
                  </time>
                </article>
              </div>
              <button type="button" className="reviews-widget__arrow reviews-widget__arrow--next" data-reviews-next aria-label="Next reviews">
                ›
              </button>
            </div>
            <p className="reviews-widget__cta-row">
              <a
                className="text-link"
                data-apex-google="write"
                href="https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services+Your+City+ST"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share your experience on Google
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
