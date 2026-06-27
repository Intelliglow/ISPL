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
      <section className="relative overflow-hidden px-[8vw] py-[100px] pb-12 border-b border-[var(--border)] bg-gradient-to-b from-[rgba(56,189,248,0.08)] from-[rgba(28,97,197,0.08)] to-[var(--surface)]">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#7dd3fc]">{industry.title}</span>
        <h1 className="mt-2.5 mb-2.5 max-w-[12ch]">{industry.description}</h1>
        <p className="max-w-[68ch]">{industry.overview}</p>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="Common Needs" title="Operational priorities in this sector." />
        <div className="grid gap-[14px]">
          {industry.useCases.map((useCase) => (
            <span key={useCase} className="inline-flex items-center justify-center rounded-full px-[14px] py-[10px] border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] text-[13px]">{useCase}</span>
          ))}
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Recommended Services" title="Solutions typically used in this environment." />
        <div className="grid grid-cols-3 gap-[14px]">
          {relatedServices.map((service) => (
            <article className="feature-card" key={service.slug}>
              <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--accent)]">{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link className="w-fit text-[var(--accent)] no-underline font-bold transition-transform duration-200 ease hover:-translate-y-px" to={`/services/${service.slug}`}>
                View service
              </Link>
            </article>
          ))}
        </div>
      </section>

      {relatedProject ? (
        <section className="px-[8vw] py-16 border-b border-[var(--border)]">
          <SectionHeader eyebrow="Related Project" title="A relevant project from this sector." />
          <article className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
            <h3>{relatedProject.name}</h3>
            <p>{relatedProject.type}</p>
            <p>{relatedProject.overview}</p>
            <Link className="w-fit text-[var(--accent)] no-underline font-bold transition-transform duration-200 ease hover:-translate-y-px" to={`/projects/${relatedProject.slug}`}>
              Read case study
            </Link>
          </article>
        </section>
      ) : null}
    </>
  )
}

export default IndustryDetailPage

