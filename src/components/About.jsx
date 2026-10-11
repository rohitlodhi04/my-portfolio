const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", items: ["Python", "Django", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Vercel"] },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-card">
        <div className="about-avatar">RH</div>
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I'm a developer passionate about building clean, responsive, and user-friendly web experiences. I work with React on the frontend and am expanding my skills in Python, Django, and Django REST Framework to build full-stack applications. I enjoy solving problems, learning by building real-world projects, and continuously improving my development skills. I'm focused on creating meaningful digital experiences and growing as a full-stack developer.
        </p>

        <div className="skill-groups">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <div className="tech-list">
                {g.items.map((s) => (
                  <span className="tech-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}