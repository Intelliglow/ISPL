import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/siteContent'

function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Projects / Portfolio</span>
        <h1>Professional case studies for building technology and infrastructure delivery.</h1>
        <p>
          Each project page follows a consistent structure: challenge, solution, technology stack,
          and results.
        </p>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Project Template"
          title="Every portfolio page tells the full delivery story."
          description="Client background, challenge, solution, technology stack, results, and industries."
        />
        <div className="template-grid">
          {['Project Header', 'Project Overview', 'Challenge', 'Solution', 'Results', 'Technology Stack'].map(
            (item) => (
              <div key={item} className="template-card">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Featured Projects" title="Explore selected portfolio highlights." />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-meta">
                <span>{project.industry}</span>
                <span>{project.location}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <p>{project.overview}</p>
              <Link className="text-link" to={`/projects/${project.slug}`}>
                Read case study
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage

