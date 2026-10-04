import React from "react";

const skills = [
  { number: "01", name: "HTML", note: "Markup & structure", icon: "</>" },
  { number: "02", name: "CSS", note: "Visual storytelling", icon: "✦" },
  { number: "03", name: "Python", note: "Logic & problem-solving", icon: "⌘" },
  { number: "04", name: "DSA", note: "Thinking in patterns", icon: "⌁" },
  { number: "05", name: "SQL", note: "Making data useful", icon: "◒" }
];

const projects = [
  {
    number: "01",
    title: "A project in progress",
    text: "A thoughtful space for a future build, idea, or experiment."
  },
  {
    number: "02",
    title: "Something worth sharing",
    text: "A place for a project story to take shape as I keep learning."
  },
  {
    number: "03",
    title: "The next chapter",
    text: "A place to document the next curious thing I create."
  }
];

function App() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Home">
          <span className="brand-mark">AC</span>
          <span>Anjleena Charles</span>
        </button>

        <nav>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("education")}>Education</button>
          <button onClick={() => scrollTo("contact")}>Say hello ↗</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">✦ &nbsp; FIRST-YEAR MCA STUDENT</p>
            <h1>
              Learning loudly.
              <em>Creating gently.</em>
            </h1>
            <p className="lead">
              Hi, I'm Anjleena — a curious student exploring the beautiful
              space between thoughtful design and logical problem-solving.
            </p>
            <div className="hero-actions">
              <button className="dark-button" onClick={() => scrollTo("projects")}>
                See what's next ↗
              </button>
              <button className="text-button" onClick={() => scrollTo("about")}>
                A little about me ↓
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="portrait-wrap">
              <img src="/profile.jpg" alt="Anjleena Charles" />
            </div>
            <div className="floating-note top-note">
              currently<br /><strong>learning ↗</strong>
            </div>
            <div className="floating-note bottom-note">
              ✦ &nbsp; one step<br />&nbsp;&nbsp;&nbsp;at a time
            </div>
          </div>
        </section>

        <div className="ticker">
          <span>CURIOUS BY NATURE</span>
          <b>✦</b>
          <span>BUILDING WITH INTENTION</span>
          <b>✦</b>
          <span>ALWAYS LEARNING</span>
        </div>

        <section id="about" className="section about">
          <p className="section-label">01 / ABOUT ME</p>
          <div className="split-heading">
            <h2>Still becoming,<br /><em>and that's the point.</em></h2>
            <div className="about-copy">
              <p>
                I'm a first-year MCA student taking my first steps into the
                world of technology. I enjoy understanding how things work,
                finding the story inside a problem, and making small ideas
                feel a little more useful.
              </p>
              <p>
                There's no rush to have it all figured out. Right now, I'm
                building strong foundations, staying open, and letting every
                new concept add a little more colour to the picture.
              </p>
              <p className="signature">— Anjleena ♡</p>
            </div>
          </div>

          <div className="stats">
            <div><span>◫</span><strong>01</strong><small>First-year<br />MCA student</small></div>
            <div><span>⌁</span><strong>05</strong><small>Core skills<br />in progress</small></div>
            <div><span>✦</span><strong>∞</strong><small>Curiosity<br />to explore</small></div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-top">
            <div>
              <p className="section-label">02 / SKILLS I'M GROWING</p>
              <h2>Tools for the<br /><em>journey ahead.</em></h2>
            </div>
            <p className="section-intro">
              Every skill is a door to a new way of thinking. These are the
              ones I'm learning to open.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <span className="card-number">{skill.number}</span>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <p>{skill.note}</p>
                <span className="tiny-line"></span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-top">
            <div>
              <p className="section-label">03 / FUTURE PROJECTS</p>
              <h2>Room for ideas<br /><em>to become real.</em></h2>
            </div>
            <span className="ready">✦ ready for your work</span>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card card-${index + 1}`} key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span><b>✳</b>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <button onClick={() => alert("Add your project details here.")}>
                  Add details ↗
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education">
          <p className="section-label">04 / EDUCATION</p>
          <div className="education-card">
            <div className="edu-icon">▣</div>
            <div className="edu-main">
              <span className="status">Currently studying</span>
              <h2>Master of<br /><em>Computer Applications</em></h2>
              <p>Building the foundation for a thoughtful future in technology.</p>
            </div>
            <div className="edu-meta">
              <span>Degree</span><strong>MCA</strong>
              <span>Stage</span><strong>First year</strong>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-label">05 / CONTACT</p>
          <h2>Have a thought?</h2>
          <h2 className="italic">Let's make it a conversation.</h2>
          <p>
            I'm always happy to connect, learn from new perspectives,
            <br className="desktop" /> and hear what you're working on.
          </p>
          <a className="dark-button link-button" href="mailto:your-email@example.com">
            Get in touch ↗
          </a>
          <p className="email-note"> <strong>charlesanjleena@gmail.com</strong></p>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Anjleena Charles</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
      </footer>
    </div>
  );
}

export default App;