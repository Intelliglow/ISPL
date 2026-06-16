import { Link, Navigate, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { getProjectBySlug, getServiceBySlug } from '../data/siteContent'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const relatedServices = project.technologyStack
    .map((item) =>
      getServiceBySlug(
        item.toLowerCase().includes('bms')
          ? 'bms'
          : item.toLowerCase().includes('cctv')
            ? 'elv'
            : item.toLowerCase().includes('wifi') || item.toLowerCase().includes('network')
              ? 'networking-integration'
              : null
      )
    )
    .filter(Boolean)

  return (
    <>
      <section className="page-hero page-hero--detail">
        <span className="eyebrow">{project.industry}</span>
        <h1>{project.name}</h1>
        <p>{project.type} — {project.location}</p>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Project Overview" title="Client background and overall delivery context." />
        <div className="detail-panel">
          <p>{project.overview}</p>
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Challenge" title="What problem existed before the project." />
        <div className="detail-panel">
          <p>{project.challenge}</p>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Solution" title="What systems were installed and how they were delivered." />
        <div className="detail-panel">
          <p>{project.solution}</p>
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Technology Stack" title="Key systems used in the project." />
        <div className="pill-grid">
          {project.technologyStack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Results" title="Benefits delivered after implementation." />
        <div className="detail-grid">
          {project.results.map((result) => (
            <article className="detail-card" key={result}>
              <h3>{result}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Industries" title="Relevant sectors for this project." />
        <div className="pill-grid">
          {project.industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="section">
          <SectionHeader eyebrow="Related Services" title="Explore the services behind this project." />
          <div className="feature-grid">
            {relatedServices.map((service) => (
              <article className="feature-card" key={service.slug}>
                <span className="eyebrow eyebrow--dark">{service.eyebrow}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="text-link" to={`/services/${service.slug}`}>
                  View service
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}

export default ProjectDetailPage

