export default function Services() {
  return (
    <section className="section section--cards" id="services">
      <div className="container">
        <div className="card-row">
          <article className="service-card" id="services-house" data-reveal="up">
            <a
              className="service-card__media"
              href="#estimate"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80')",
              }}
            >
              <span className="service-card__label">House washing</span>
            </a>
            <div className="service-card__body">
              <h2 className="service-card__title">House washing</h2>
              <a className="text-link" href="#estimate">
                View service
              </a>
            </div>
          </article>
          <article className="service-card" id="services-driveway" data-reveal="up">
            <a
              className="service-card__media"
              href="#estimate"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1590644362807-8aba785e26f7?auto=format&fit=crop&w=900&q=80')",
              }}
            >
              <span className="service-card__label">Driveways & concrete</span>
            </a>
            <div className="service-card__body">
              <h2 className="service-card__title">Driveways & concrete</h2>
              <a className="text-link" href="#estimate">
                View service
              </a>
            </div>
          </article>
          <article className="service-card" id="services-deck" data-reveal="up">
            <a
              className="service-card__media"
              href="#estimate"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80')",
              }}
            >
              <span className="service-card__label">Decks & fences</span>
            </a>
            <div className="service-card__body">
              <h2 className="service-card__title">Decks & fences</h2>
              <a className="text-link" href="#estimate">
                View service
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
