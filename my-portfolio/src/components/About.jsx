import ceciliaPhoto from '../assets/cecilia.jpeg'

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-image-wrapper">
        <img
          src={ceciliaPhoto}
          alt="Cecilia Sarhene Obeng"
          className="about-image"
        />
      </div>

      <div className="about-content">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2>
          Technology,
          <br />
          creativity &amp; purpose.
        </h2>

        <p className="about-text">
          I am Cecilia Sarhene Obeng, a Level 300 BSc Information
          Technology student at Ghana Communication Technology
          University (GCTU), passionate about technology, creativity,
          and problem-solving.
        </p>

        <p className="about-text">
          My interests span full-stack development, cybersecurity,
          artificial intelligence, and graphic design. I am currently
          expanding my knowledge in cybersecurity through a Coursera
          course while continuing to develop my software development
          and technical skills.
        </p>

        <p className="about-text">
          I have also completed the ALX AI Career Essentials (AICE)
          program and earned a certificate in Artificial Intelligence.
          Through my academic work, personal projects, and continuous
          learning, I enjoy exploring how emerging technologies can
          be used to solve real-world problems and create meaningful
          digital experiences.
        </p>

        <p className="about-text">
          Beyond technology, I am an entrepreneur with an interest in
          fashion and beauty products. I also enjoy graphic design and
          creating visually engaging content, allowing me to combine
          my technical and creative abilities.
        </p>

        <p className="about-text">
          My goal is to use technology, innovation, creativity, and
          entrepreneurship to build impactful solutions that serve
          individuals, businesses, and communities.
        </p>

        <div className="about-focus">

          <div className="focus-item">
            <span>01</span>
            <p>Full-Stack Development</p>
          </div>

          <div className="focus-item">
            <span>02</span>
            <p>Cybersecurity &amp; AI</p>
          </div>

          <div className="focus-item">
            <span>03</span>
            <p>Graphic Design</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About