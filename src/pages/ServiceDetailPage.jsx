import { Link, Navigate, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { getProjectBySlug, getServiceBySlug } from '../data/siteContent'

function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const relatedProjects = service.relatedProjects
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter(Boolean)

  return (
    <>
      <section className="page-hero page-hero--detail">
        <span className="eyebrow">{service.eyebrow}</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
      </section>

      <section className="section">
        <SectionHeader eyebrow="What We Do" title="Delivery phases built for clarity and consistency." />
        <div className="step-grid">
          {service.whatWeDo.map((item, index) => (
            <div key={item} className="step-card">
              <span className="step-number">0{index + 1}</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Industries Served" title="The sectors that benefit most from this solution." />
        <div className="pill-grid">
          {service.industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="FAQ" title="Common questions about this service." />
        <div className="faq-grid">
          {service.faq.map((faq) => (
            <article className="faq-card" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="section section--soft">
          <SectionHeader eyebrow="Related Projects" title="See how this service has been deployed in the field." />
          <div className="project-grid">
            {relatedProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <div className="project-meta">
                  <span>{project.industry}</span>
                  <span>{project.location}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.type}</p>
                <Link className="text-link" to={`/projects/${project.slug}`}>
                  View project
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}

export default ServiceDetailPage

