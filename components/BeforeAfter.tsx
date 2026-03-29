export default function BeforeAfter() {
  const img =
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85";
  return (
    <section className="section section--before-after" id="before-after" aria-labelledby="ba-heading">
      <div className="container">
        <header className="section-header section-header--left" data-reveal="fade">
          <h2 className="section-title" id="ba-heading">
            Before & after
          </h2>
          <p className="section-intro">
            Drag the handle to compare a treated wash (right) to a weathered, untreated look (left)—same property photo,
            professional editing simulation for demo.
          </p>
        </header>
        <div className="ba-slider" id="ba-slider" data-ba-slider data-reveal="up">
          <div className="ba-slider__labels" aria-hidden="true">
            <span>Before</span>
            <span>After</span>
          </div>
          <div className="ba-slider__viewport">
            <img
              className="ba-slider__after"
              src={img}
              width={1600}
              height={1067}
              alt="Home exterior after cleaning"
              decoding="async"
            />
            <div className="ba-slider__before-clip" data-ba-clip style={{ width: "50%" }}>
              <img
                className="ba-slider__before"
                src={img}
                width={1600}
                height={1067}
                alt="Home exterior before cleaning"
                decoding="async"
              />
            </div>
            <button
              type="button"
              className="ba-slider__handle"
              data-ba-handle
              aria-label="Drag to compare before and after"
              style={{ left: "50%" }}
            >
              <span className="ba-slider__grip" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
