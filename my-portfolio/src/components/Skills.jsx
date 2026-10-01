function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-heading">
        <p className="section-label">MY SKILLS</p>

        <h2>
          What I bring
          <br />
          to the table.
        </h2>

        <p className="skills-intro">
          I am continuously developing my technical and creative
          abilities through academic work, practical projects,
          professional training, and personal learning.
        </p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <span className="skill-number">01</span>

          <h3>Software Development</h3>

          <p>
            Building my foundation in software and full-stack
            development while working with programming languages,
            web technologies, and application development.
          </p>

          <div className="skill-tags">
            <span>C++</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>


        <div className="skill-card">
          <span className="skill-number">02</span>

          <h3>Cybersecurity</h3>

          <p>
            Developing my understanding of cybersecurity concepts,
            security practices, and how technology can be protected
            against digital threats.
          </p>

          <div className="skill-tags">
            <span>Cybersecurity</span>
            <span>Security Fundamentals</span>
            <span>Networking</span>
          </div>
        </div>


        <div className="skill-card">
          <span className="skill-number">03</span>

          <h3>Artificial Intelligence</h3>

          <p>
            Exploring artificial intelligence and its practical
            applications in creating innovative digital solutions.
          </p>

          <div className="skill-tags">
            <span>AI</span>
            <span>AI Tools</span>
            <span>Prompting</span>
          </div>
        </div>


        <div className="skill-card">
          <span className="skill-number">04</span>

          <h3>Graphic Design</h3>

          <p>
            Creating visual content and developing my design skills
            to communicate ideas through clean and engaging graphics.
          </p>

          <div className="skill-tags">
            <span>Graphic Design</span>
            <span>Visual Design</span>
            <span>Creative Design</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skills