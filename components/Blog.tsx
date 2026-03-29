export default function Blog() {
  return (
    <section className="section section--blog" id="blog">
      <div className="container">
        <header className="section-header" data-reveal="fade">
          <h2 className="section-title">From the blog</h2>
          <p className="section-intro">Quick reads on caring for siding, concrete, and outdoor wood.</p>
        </header>
        <div className="blog-row">
          <article className="blog-card" data-reveal="up">
            <a href="#blog">
              <div
                className="blog-card__img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <h3>When to choose soft wash vs. pressure</h3>
              <p>Matching the method to vinyl, brick, stucco, and wood.</p>
            </a>
          </article>
          <article className="blog-card" data-reveal="up">
            <a href="#blog">
              <div
                className="blog-card__img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <h3>How often should you wash your house?</h3>
              <p>Climate, shade, and tree cover all play a role.</p>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
