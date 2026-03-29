export default function Header() {
  return (
    <header className="site-header" id="header">
      <div className="container site-header__inner">
        <a className="logo" href="/">
          Apex<span>Wash</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded="false"
          aria-controls="site-nav"
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="site-nav" id="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            <li>
              <a href="#about">About</a>
            </li>
            <li className="has-sub">
              <button type="button" className="site-nav__sub-toggle" aria-expanded="false">
                Services
              </button>
              <ul className="site-nav__sub">
                <li>
                  <a href="#services-house">House washing</a>
                </li>
                <li>
                  <a href="#services-driveway">Driveways & concrete</a>
                </li>
                <li>
                  <a href="#services-deck">Decks & fences</a>
                </li>
                <li>
                  <a href="#more-soft">Soft wash</a>
                </li>
                <li>
                  <a href="#more-roof">Roof cleaning</a>
                </li>
                <li>
                  <a href="#more-gutter">Gutter brightening</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="site-nav__quote-li">
              <button type="button" className="site-nav__quote-link" id="open-quote-nav" data-open-quote>
                Instant quote
              </button>
            </li>
          </ul>
          <a className="btn btn--header" href="#estimate">
            Free estimate
          </a>
        </nav>
      </div>
    </header>
  );
}
