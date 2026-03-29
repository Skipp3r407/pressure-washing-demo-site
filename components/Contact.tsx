export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container contact-grid">
        <div data-reveal="left">
          <h2 className="section-title">Contact</h2>
          <p>We serve homeowners and businesses throughout the metro and surrounding counties.</p>
          <ul className="contact-list">
            <li>
              <a href="tel:+15555551234">(555) 555-1234</a>
            </li>
            <li>
              <a href="mailto:hello@apexwashexteriors.com">hello@apexwashexteriors.com</a>
            </li>
            <li>
              ApexWash Exterior Services
              <br />
              Your City, ST 00000
            </li>
          </ul>
          <div className="contact-hours">
            <h3 className="contact-hours__title">Business hours</h3>
            <dl className="hours-list hours-list--contact">
              <div className="hours-list__row">
                <dt>Monday – Friday</dt>
                <dd>7:00 a.m. – 6:00 p.m.</dd>
              </div>
              <div className="hours-list__row">
                <dt>Saturday</dt>
                <dd>8:00 a.m. – 4:00 p.m.</dd>
              </div>
              <div className="hours-list__row">
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
              <div className="hours-list__row hours-list__row--note">
                <dt>After hours</dt>
                <dd>Leave a message or use the form—we return calls next business day.</dd>
              </div>
            </dl>
          </div>
          <p className="fine-print">
            Photos on this demo site are from{" "}
            <a href="https://unsplash.com" rel="noopener noreferrer">
              Unsplash
            </a>{" "}
            and are used for illustration only.
          </p>
        </div>
        <form className="contact-form" action="#" method="post" data-reveal="right">
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required placeholder="Tell us about surfaces to clean…" />
          </label>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
