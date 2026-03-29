export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div data-reveal="up">
          <p className="footer-heading">Connect</p>
          <ul className="footer-social">
            <li>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="TikTok">
                TikTok
              </a>
            </li>
            <li>
              <a
                data-apex-google="read"
                href="https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services+Your+City+ST"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google reviews
              </a>
            </li>
            <li>
              <a
                data-apex-google="write"
                href="https://www.google.com/maps/search/?api=1&query=ApexWash+Exterior+Services+Your+City+ST"
                target="_blank"
                rel="noopener noreferrer"
              >
                Review us on Google
              </a>
            </li>
          </ul>
        </div>
        <div data-reveal="up">
          <p className="footer-heading">Payments we accept</p>
          <p className="footer-pay">Cash · Check · Major cards</p>
        </div>
        <div data-reveal="up">
          <p className="footer-heading">Our information</p>
          <ul className="footer-list">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="tel:+15555551234">(555) 555-1234</a>
            </li>
            <li>
              <a href="mailto:hello@apexwashexteriors.com">hello@apexwashexteriors.com</a>
            </li>
            <li>ApexWash Exterior Services — Your City, ST</li>
          </ul>
        </div>
        <div data-reveal="up">
          <p className="footer-heading">Business hours</p>
          <dl className="hours-list hours-list--footer">
            <div className="hours-list__row">
              <dt>Mon – Fri</dt>
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
          </dl>
          <p className="footer-hours-note">Voicemail & form replies on the next business day.</p>
        </div>
        <div data-reveal="up">
          <p className="footer-heading">Areas we serve</p>
          <ul className="footer-list footer-list--two">
            <li>Northside</li>
            <li>Lakeshore</li>
            <li>River district</li>
            <li>West suburbs</li>
            <li>East corridor</li>
            <li>Downtown & metro core</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © <span id="year" /> ApexWash Exterior Services. All rights reserved.
        </p>
        <a href="#">Privacy policy</a>
      </div>
    </footer>
  );
}
