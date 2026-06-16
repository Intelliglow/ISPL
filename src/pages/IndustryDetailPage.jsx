import { Link, Navigate, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { getIndustryBySlug, getProjectBySlug, getServiceBySlug } from '../data/siteContent'

function IndustryDetailPage() {
  const { slug } = useParams()
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return <Navigate to="/industries" replace />
  }

  const relatedServices = industry.recommendedServices
    .map((serviceTitle) => {
      if (serviceTitle === 'ELV') return getServiceBySlug('elv')
      if (serviceTitle === 'BMS') return getServiceBySlug('bms')
      if (serviceTitle === 'Cyber Security Solutions') return getServiceBySlug('cyber-security')
      if (serviceTitle === 'Public Address Systems') return getServiceBySlug('public-address-systems')
      if (serviceTitle === 'Centralized Clock Systems') return getServiceBySlug('centralized-clock-systems')
      if (serviceTitle === 'Networking & Integration') return getServiceBySlug('networking-integration')
      return null
    })
    .filter(Boolean)

  const relatedProject =
    industry.slug === 'pharmaceutical'
      ? getProjectBySlug('kelun-lifesciences')
      : industry.slug === 'manufacturing'
        ? getProjectBySlug('celogen-lanka')
        : industry.slug === 'healthcare'
          ? getProjectBySlug('kanola-hospital')
          : industry.slug === 'commercial-buildings'
            ? getProjectBySlug('colombo-port-city')
            : null

  return (
    <>
      <section className="page-hero page-hero--detail">
        <span className="eyebrow">{industry.title}</span>
        <h1>{industry.description}</h1>
        <p>{industry.overview}</p>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Common Needs" title="Operational priorities in this sector." />
        <div className="pill-grid">
          {industry.useCases.map((useCase) => (
            <span key={useCase}>{useCase}</span>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Recommended Services" title="Solutions typically used in this environment." />
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

      {relatedProject ? (
        <section className="section">
          <SectionHeader eyebrow="Related Project" title="A relevant project from this sector." />
          <article className="detail-panel">
            <h3>{relatedProject.name}</h3>
            <p>{relatedProject.type}</p>
            <p>{relatedProject.overview}</p>
            <Link className="text-link" to={`/projects/${relatedProject.slug}`}>
              Read case study
            </Link>
          </article>
        </section>
      ) : null}
    </>
  )
}

export default IndustryDetailPage

