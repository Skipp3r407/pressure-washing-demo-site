const items = [
  {
    id: "more-soft",
    title: "Soft wash",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "more-roof",
    title: "Roof cleaning",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: undefined,
    title: "Commercial exteriors",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "more-gutter",
    title: "Gutter brightening",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: undefined,
    title: "Pool decks & patios",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: undefined,
    title: "Rust & stain treatment",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AdditionalServices() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-header" data-reveal="fade">
          <h2 className="section-title">Additional services</h2>
          <p className="section-intro">
            Beyond the basics, we offer targeted treatments for roofs, gutters, storefronts, and more.
          </p>
        </header>
        <div className="mini-grid">
          {items.map((item) => (
            <article key={item.title} className="mini-card" {...(item.id ? { id: item.id } : {})} data-reveal="up">
              <a href="#estimate" className="mini-card__link">
                <div className="mini-card__img" style={{ backgroundImage: `url('${item.img}')` }} />
                <h3>{item.title}</h3>
                <span className="text-link">View service</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
