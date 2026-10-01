function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          HELLO, I'M CECILIA
        </p>

        <h1>
          Cecilia Sarhene
          <br />
          <span>Obeng.</span>
        </h1>

        <h2>
          Information Technology Student
        </h2>

        <p className="description">
          Exploring software engineering and cybersecurity while
          building my skills in technology and creating practical
          digital solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Let's Connect
          </a>
        </div>

        <div className="tech-stack">
          <span>C++</span>
          <span>Java</span>
          <span>React</span>
          <span>Cybersecurity</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className="tech-visual">
        <div className="visual-circle circle-one"></div>
        <div className="visual-circle circle-two"></div>

        <div className="visual-center">
          <span>&lt;/&gt;</span>
        </div>

        <div className="floating-card card-top">
          <span>01</span>
          <p>CODE</p>
        </div>

        <div className="floating-card card-bottom">
          <span>02</span>
          <p>SECURITY</p>
        </div>
      </div>
    </section>
  )
}

export default Hero