const links = [
  { label: "GitHub", href: "https://github.com/rohitlodhi04" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohit-rajput-1972a6443/" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <h2 className="about-title">Let's Work Together</h2>
        <p className="about-text">
          I'm open to internships and entry-level roles. If you have an
          opportunity or just want to say hi, my inbox is open.
        </p>

        <a href="mailto:rohitworks.dev@gmail.com" className="btn btn-primary">
          Email Me
        </a>

        <div className="contact-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}