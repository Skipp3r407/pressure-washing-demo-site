export default function About() {
  return (
    <section className="section section--split" id="about">
      <div className="container split">
        <div className="split__content" data-reveal="left">
          <h2 className="section-title">Local experts in safe, effective exterior cleaning</h2>
          <p>
            Whether you are prepping to sell, hosting guests, or keeping your property investment in top shape, ApexWash
            delivers thorough results with methods matched to each surface. We prioritize low-pressure techniques where they
            belong and use professional-grade equipment everywhere else.
          </p>
          <p>
            <strong>Expect clear communication, on-time arrivals, and fair pricing</strong>—so you can enjoy a cleaner
            exterior without the stress.
          </p>
          <a className="btn btn--secondary" href="#estimate">
            Get a quote
          </a>
        </div>
        <div
          className="split__media"
          data-reveal="right"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80')",
          }}
          role="img"
          aria-label="Modern home exterior"
        />
      </div>
    </section>
  );
}
