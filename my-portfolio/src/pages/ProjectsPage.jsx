import adornbyrc from '../assets/adornbyrc.png'
import welcome  from '../assets/Welcome.png'
import thanksgiving  from '../assets/thanksgiving.png'

function ProjectsPage() {
  return (
    <section className="projects-section">
      <div className="projects-heading">
        <p className="section-label">MY PROJECTS</p>

        <h1>Things I am building.</h1>

        <p>
          A collection of academic, personal, and practical projects
          that reflect my journey in technology, cybersecurity,
          creativity, and problem-solving.
        </p>
      </div>

      {/* TECHNOLOGY PROJECTS */}

      <h2 className="project-category">Technology & Development</h2>

      <div className="projects-grid">

        <article className="project-card">
          <span>01</span>

          <h2>Employee Management Dashboard</h2>

          <p>
            A frontend dashboard project developed with HTML and CSS
            as part of my frontend development training.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </article>

        <article className="project-card">
          <span>02</span>

          <h2>Task Manager</h2>

          <p>
            A practical JavaScript application for creating,
            managing, and organizing tasks while learning DOM
            manipulation and browser storage.
          </p>

          <div className="project-tags">
            <span>JavaScript</span>
            <span>DOM</span>
            <span>LocalStorage</span>
          </div>
        </article>

        <article className="project-card">
          <span>03</span>

          <h2>AI Creative Projects</h2>

          <p>
            Creative projects exploring artificial intelligence,
            including image generation, music generation, and
            AI-powered creative experimentation.
          </p>

          <div className="project-tags">
            <span>AI</span>
            <span>Creative Technology</span>
          </div>
        </article>

      </div>

      {/* GRAPHIC DESIGN PROJECTS */}

      <h2 className="project-category">Graphic Design</h2>

      <div className="design-grid">

        <article className="design-card">
          <img
            src={adornbyrc}
            alt="Adorn by RC breast cancer awareness design"
          />

          <div className="design-info">
            <span>04</span>
            <h2>Adorn by RC</h2>
            <p>Breast Cancer Awareness Design</p>

            <div className="project-tags">
              <span>Graphic Design</span>
              <span>Social Media Design</span>
            </div>
          </div>
        </article>

        <article className="design-card">
          <img
            src={welcome}
            alt="Welcome Back to School flyer design"
          />

          <div className="design-info">
            <span>05</span>
            <h2>Welcome Back to School</h2>
            <p>School Promotional Flyer</p>

            <div className="project-tags">
              <span>Graphic Design</span>
              <span>Flyer Design</span>
            </div>
          </div>
        </article>

        <article className="design-card">
          <img
            src={thanksgiving}
            alt="Thanksgiving flyer design"
          />

          <div className="design-info">
            <span>06</span>
            <h2>Thanksgiving Flyer</h2>
            <p>Event Promotional Design</p>

            <div className="project-tags">
              <span>Graphic Design</span>
              <span>Flyer Design</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}

export default ProjectsPage