const menuHighlights = [
  {
    title: 'Charred Citrus Sea Bass',
    description: 'Line-caught fish, fennel, preserved lemon, and herb oil.',
    price: '$34',
  },
  {
    title: 'Saffron Garden Risotto',
    description: 'Spring vegetables, aged parmesan, and toasted pine nuts.',
    price: '$27',
  },
  {
    title: 'Market Steak Frites',
    description: 'Dry-aged strip, brassica salad, pepper jus, and crisp potatoes.',
    price: '$39',
  },
];

const brandPrinciples = [
  'Seasonal ingredients',
  'Quiet hospitality',
  'Modern neighborhood dining',
];

function App() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Maison Verde home">
          <span className="brand-symbol">MV</span>
          <span>
            <strong>Maison Verde</strong>
            <small>Restaurant</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main menu">
          <a href="#menu">Menu</a>
          <a href="#experience">Experience</a>
          <a href="#visit">Visit</a>
        </nav>

        <a className="button button-primary" href="#visit">
          Reserve
        </a>
      </header>

      <section id="top" className="hero-section section-grid">
        <div className="hero-copy">
          <p className="section-label">Opening Summer 2026</p>
          <h1>Seasonal dining with a calm neighborhood rhythm.</h1>
          <p className="hero-text">
            A restaurant landing page foundation for polished storytelling,
            menu highlights, reservations, and location details.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#menu">
              View Menu
            </a>
            <a className="button button-secondary" href="#experience">
              Our Story
            </a>
          </div>
        </div>

        <div className="hero-media" aria-label="Styled restaurant table setting">
          <div className="plate plate-large" />
          <div className="plate plate-small" />
          <div className="stem stem-one" />
          <div className="stem stem-two" />
        </div>
      </section>

      <section id="menu" className="content-band">
        <div className="section-heading">
          <p className="section-label">Menu System</p>
          <h2>Reusable content cards for future menu sections.</h2>
        </div>

        <div className="menu-grid">
          {menuHighlights.map((item) => (
            <article className="menu-card" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="split-section">
        <div className="image-panel" aria-hidden="true">
          <div className="image-grain" />
        </div>
        <div className="section-heading">
          <p className="section-label">Brand Tokens</p>
          <h2>A refined palette, compact components, and responsive spacing.</h2>
          <ul className="principle-list">
            {brandPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="visit" className="reservation-panel">
        <div>
          <p className="section-label">Visit</p>
          <h2>Ready for reservations, hours, and location content.</h2>
        </div>
        <a className="button button-primary" href="mailto:reservations@example.com">
          Contact Host
        </a>
      </section>
    </main>
  );
}

export default App;
