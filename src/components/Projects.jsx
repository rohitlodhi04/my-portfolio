const projects = [
  {
    title: "E-commerce Store",
    description:
      "Frontend-only shopping site with product listing, cart and responsive layout.",
    tech: ["React", "CSS"],
    live: "https://trendora-ecommerce-taupe.vercel.app",
    github: "https://github.com/rohitlodhi04/trendora-ecommerce",
  },
  {
    title: "Movie Search",
    description:
      "Search any movie and see its details, fetched live from a movie API.",
    tech: ["React", "API"],
    live: "https://movie-search-app-two-topaz.vercel.app/",
    github: "https://github.com/rohitlodhi04/movie-search-app",
  },
];

export default function Projects() {
  return (
    <section id="work" className="projects">
      <h2 className="section-title">My Work</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tech-list">
              {p.tech.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.live} target="_blank" rel="noreferrer">Live</a>
              <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}