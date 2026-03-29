export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <p className="top-bar__hours">
          <span className="visually-hidden">Office hours: </span>
          <span aria-hidden="true">Mon–Fri 7–6</span>
          <span className="top-bar__hours-sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <span aria-hidden="true">Sat 8–4</span>
          <span className="top-bar__hours-sep" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <span aria-hidden="true">Sun closed</span>
        </p>
        <div className="top-bar__actions">
          <a className="top-bar__cta" href="#estimate">
            Get estimate
          </a>
          <a className="top-bar__phone" href="tel:+15555551234">
            (555) 555-1234
          </a>
        </div>
      </div>
    </div>
  );
}
