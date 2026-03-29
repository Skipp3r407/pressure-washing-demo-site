export default function QuoteModal() {
  return (
    <div className="modal" id="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title" hidden>
      <div className="modal__backdrop" data-close-quote tabIndex={-1} />
      <div className="modal__dialog">
        <button type="button" className="modal__close" data-close-quote aria-label="Close">
          ×
        </button>
        <h2 className="modal__title" id="quote-modal-title">
          Instant quote estimator
        </h2>
        <p className="modal__lede">Ballpark only—final price after we see photos or the property.</p>
        <form id="quote-form" className="quote-form">
          <label>
            Service
            <select name="service" id="quote-service" required>
              <option value="">Choose…</option>
              <option value="house">House wash (siding)</option>
              <option value="driveway">Driveway / sidewalk</option>
              <option value="deck">Deck or fence</option>
              <option value="roof">Roof soft wash</option>
              <option value="commercial">Commercial exterior</option>
              <option value="bundle">House + driveway bundle</option>
            </select>
          </label>
          <label>
            Approx. area (sq ft)
            <select name="sqft" id="quote-sqft" required>
              <option value="">Choose…</option>
              <option value="1">Under 1,200</option>
              <option value="2">1,200 – 2,000</option>
              <option value="3">2,000 – 3,000</option>
              <option value="4">3,000 – 4,500</option>
              <option value="5">4,500+</option>
            </select>
          </label>
          <label>
            Stories (house / bundle)
            <select name="stories" id="quote-stories">
              <option value="1">1 story</option>
              <option value="2">2 stories</option>
              <option value="3">3+ stories</option>
            </select>
          </label>
          <label>
            Soil level
            <select name="soil" id="quote-soil" required>
              <option value="1">Light (maintenance)</option>
              <option value="2" selected>
                Medium (typical)
              </option>
              <option value="3">Heavy (years of buildup)</option>
            </select>
          </label>
          <button type="submit" className="btn btn--primary quote-form__submit">
            Calculate estimate
          </button>
        </form>
        <div id="quote-result" className="quote-result" hidden>
          <p className="quote-result__label">Estimated investment</p>
          <p className="quote-result__range" id="quote-range" />
          <p className="quote-result__note">Not a contract. Add-ons (rust, oil, gutter interiors) may apply.</p>
          <a className="btn btn--secondary" href="tel:+15555551234">
            Call to book
          </a>
          <button type="button" className="btn btn--ghost-modal" data-close-quote>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
