const slides = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1590644362807-8aba785e26f7?auto=format&fit=crop&w=2400&q=80",
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Featured">
      <div className="hero__slides" aria-hidden="true">
        {slides.map((url, i) => (
          <div
            key={url}
            className={"hero__slide" + (i === 0 ? " is-active" : "")}
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Exterior cleaning done right</p>
        <h1 className="hero__title">Restore your curb appeal—fast</h1>
        <p className="hero__lead">
          From soft-wash siding to spotless concrete, we help homes and businesses look sharp without harsh damage to
          surfaces.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#estimate">
            Schedule cleaning
          </a>
          <button type="button" className="btn btn--ghost" data-open-quote>
            Instant quote
          </button>
          <a className="btn btn--ghost" href="#services">
            View services
          </a>
        </div>
      </div>
      <div className="hero__dots" role="tablist" aria-label="Hero slides" />
    </section>
  );
}
