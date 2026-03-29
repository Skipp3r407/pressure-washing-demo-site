export default function Gallery() {
  return (
    <section className="section section--gallery-tease" id="gallery">
      <div className="container">
        <div className="gallery-tease">
          <div className="gallery-tease__copy" data-reveal="left">
            <h2 className="section-title">See the difference</h2>
            <p>
              Browse recent jobs: clean concrete, refreshed siding, and bright trim lines. Every project is completed with
              the same attention to detail we would want on our own homes.
            </p>
            <a className="btn btn--secondary" href="#gallery-grid">
              View gallery
            </a>
          </div>
          <div className="gallery-tease__collage" id="gallery-grid" data-reveal="right">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                width={600}
                height={400}
                alt="Clean residential exterior"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1590644362807-8aba785e26f7?auto=format&fit=crop&w=600&q=80"
                width={600}
                height={400}
                alt="Concrete driveway"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                width={600}
                height={400}
                alt="Outdoor deck area"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80"
                width={600}
                height={400}
                alt="Modern home facade"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
