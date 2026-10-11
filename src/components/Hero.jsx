export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>Rohit Rajput</h1>
        <p className="hero-intro">
          Final-year BCA student and aspiring full-stack developer.
          I build web apps with React and Django.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}