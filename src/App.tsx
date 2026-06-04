import { useState, type FormEvent } from 'react';

const menuSections = [
  {
    category: 'Starters',
    items: [
      {
        title: 'Citrus Cured Hamachi',
        description: 'Fennel pollen, pink peppercorn, compressed cucumber.',
        price: '$18',
      },
      {
        title: 'Roasted Carrot Tartine',
        description: 'Seeded sourdough, whipped ricotta, herb oil.',
        price: '$15',
      },
    ],
  },
  {
    category: 'Mains',
    items: [
      {
        title: 'Charred Citrus Sea Bass',
        description: 'Line-caught fish, fennel, preserved lemon, and herb oil.',
        price: '$34',
      },
      {
        title: 'Market Steak Frites',
        description: 'Dry-aged strip, brassica salad, pepper jus, and crisp potatoes.',
        price: '$39',
      },
    ],
  },
  {
    category: 'Supper',
    items: [
      {
        title: 'Saffron Garden Risotto',
        description: 'Spring vegetables, aged parmesan, and toasted pine nuts.',
        price: '$27',
      },
      {
        title: 'Olive Oil Cake',
        description: 'Blood orange, creme fraiche, and toasted pistachio.',
        price: '$13',
      },
    ],
  },
];

const aboutStats = [
  { value: '24', label: 'seats in the dining room' },
  { value: '7', label: 'nearby farms and makers' },
  { value: '3', label: 'seasonal menu turns yearly' },
];

const brandPrinciples = [
  'Cook with what the market is carrying today.',
  'Keep service attentive, warm, and unhurried.',
  'Build a dining room that feels local before it feels formal.',
];

const testimonials = [
  {
    quote:
      'Siam Table feels composed without feeling distant. Every plate has a point of view.',
    name: 'Elena Park',
    detail: 'Neighborhood preview dinner',
  },
  {
    quote:
      'The room, the pacing, and the menu all have the same quiet confidence.',
    name: 'Marcus Bell',
    detail: 'Private tasting guest',
  },
  {
    quote:
      'A polished restaurant site foundation with room for real stories and reservations.',
    name: 'Studio Notes',
    detail: 'Launch content review',
  },
];

const hours = [
  { day: 'Wednesday-Thursday', time: '5:00 PM-10:00 PM' },
  { day: 'Friday-Saturday', time: '5:00 PM-11:00 PM' },
  { day: 'Sunday', time: '4:00 PM-9:00 PM' },
];

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Siam Table home">
          <span className="brand-symbol" aria-hidden="true">
            <svg viewBox="0 0 48 48" role="img">
              <path d="M24 5c5 5 8 10 8 16 0 7-4 12-8 16-4-4-8-9-8-16 0-6 3-11 8-16Z" />
              <path d="M13 13c6 1 11 4 14 9 3 6 2 12-1 17-6-1-11-4-14-9-3-6-2-12 1-17Z" />
              <path d="M35 13c-6 1-11 4-14 9-3 6-2 12 1 17 6-1 11-4 14-9 3-6-2-12-1-17Z" />
              <path d="M8 25c6-1 12 1 16 5 4 4 5 9 4 14-6 1-12-1-16-5-4-4-5-9-4-14Z" />
              <path d="M40 25c-6-1-12 1-16 5-4 4-5 9-4 14 6 1 12-1 16-5 4-4 5-9 4-14Z" />
            </svg>
          </span>
          <span>
            <strong>Siam Table</strong>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main menu">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
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
            <a className="button button-secondary" href="#about">
              Our Story
            </a>
          </div>
        </div>

        <div className="hero-media" aria-label="Styled restaurant table setting">
          <img
            src="/images/siam-table-hero-food.png"
            alt="A modern Thai dish plated with herbs and chili garnish"
          />
          <div className="hero-media-note" aria-hidden="true">
            <span>Dinner</span>
            <strong>Tue-Sun</strong>
          </div>
        </div>
      </section>

      <section id="about" className="split-section about-section">
        <div className="image-panel about-illustration" aria-hidden="true">
          <div className="image-grain" />
          <div className="table-card table-card-one" />
          <div className="table-card table-card-two" />
          <div className="table-card table-card-three" />
        </div>
        <div className="section-heading about-copy">
          <p className="section-label">About Us</p>
          <h2>A small dining room shaped by growers, cooks, and neighbors.</h2>
          <p>
            Siam Table is built around seasonal produce, carefully sourced
            proteins, and a service style that lets the evening breathe. The
            kitchen writes each menu around what is fresh, balanced, and worth
            gathering for.
          </p>
          <ul className="principle-list">
            {brandPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
          <div className="about-stats" aria-label="Restaurant highlights">
            {aboutStats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="content-band menu-section">
        <div className="section-heading menu-heading">
          <p className="section-label">Menu</p>
          <h2>Seasonal plates for slow dinners and easy celebrations.</h2>
          <p>
            The opening menu balances bright coastal dishes, garden-led plates,
            and richer supper classics. Prices and ingredients are sample
            content for the landing page preview.
          </p>
        </div>

        <div className="menu-board">
          {menuSections.map((section) => (
            <article className="menu-category" key={section.category}>
              <h3>{section.category}</h3>
              <div className="menu-items">
                {section.items.map((item) => (
                  <div className="menu-item" key={item.title}>
                    <div className="menu-item-heading">
                      <h4>{item.title}</h4>
                      <strong>{item.price}</strong>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band testimonials-section">
        <div className="section-heading testimonials-heading">
          <p className="section-label">Testimonials</p>
          <h2>Early guests describe a dining room with focus and warmth.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="visit" className="visit-section">
        <div className="visit-info">
          <div className="section-heading">
            <p className="section-label">Visit</p>
            <h2>Hours, location, and a direct line to the host stand.</h2>
            <p>
              Plan an opening-season dinner, ask about private tables, or send
              the team a note about dietary needs before your reservation.
            </p>
          </div>

          <div className="info-grid">
            <article className="info-panel">
              <h3>Location</h3>
              <p>
                1427 Garden Street
                <br />
                Portland, OR 97205
              </p>
              <a href="https://maps.google.com/?q=1427+Garden+Street+Portland+OR+97205">
                Open map
              </a>
            </article>

            <article className="info-panel">
              <h3>Hours</h3>
              <dl className="hours-list">
                {hours.map((entry) => (
                  <div key={entry.day}>
                    <dt>{entry.day}</dt>
                    <dd>{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-heading">
            <p className="section-label">Contact</p>
            <h3>Send a reservation note.</h3>
          </div>

          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>

          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>

          <label>
            Occasion
            <select name="occasion" defaultValue="Dinner reservation">
              <option>Dinner reservation</option>
              <option>Private dining</option>
              <option>Press or partnership</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Preferred date, party size, dietary notes, or questions."
              required
            />
          </label>

          <button className="button button-primary" type="submit">
            Send Message
          </button>

          {isSubmitted ? (
            <p className="form-status" role="status">
              Thanks. The host team will follow up shortly.
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

export default App;
