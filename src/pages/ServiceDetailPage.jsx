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
      <section className="relative overflow-hidden px-[8vw] py-[100px] pb-12 border-b border-[var(--border)] bg-gradient-to-b from-[rgba(56,189,248,0.08)] from-[rgba(28,97,197,0.08)] to-[var(--surface)]">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#7dd3fc]">{service.eyebrow}</span>
        <h1 className="mt-2.5 mb-2.5 max-w-[12ch]">{service.title}</h1>
        <p className="max-w-[68ch]">{service.intro}</p>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="What We Do" title="Delivery phases built for clarity and consistency." />
        <div className="grid grid-cols-2 gap-[14px]">
          {service.whatWeDo.map((item, index) => (
            <div key={item} className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
              <span className="block text-[var(--accent)] font-bold mb-2">0{index + 1}</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Industries Served" title="The sectors that benefit most from this solution." />
        <div className="grid gap-[14px]">
          {service.industries.map((industry) => (
            <span key={industry} className="inline-flex items-center justify-center rounded-full px-[14px] py-[10px] border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] text-[13px]">{industry}</span>
          ))}
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="FAQ" title="Common questions about this service." />
        <div className="grid grid-cols-2 gap-[14px]">
          {service.faq.map((faq) => (
            <article className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
          <SectionHeader eyebrow="Related Projects" title="See how this service has been deployed in the field." />
          <div className="grid grid-cols-3 gap-[14px]">
            {relatedProjects.map((project) => (
              <article className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]" key={project.slug}>
                <div className="flex gap-3 mb-1 justify-start">
                  <span className="inline-flex items-center justify-center rounded-full px-[14px] py-[10px] border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] text-[13px]">{project.industry}</span>
                  <span className="inline-flex items-center justify-center rounded-full px-[14px] py-[10px] border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] text-[13px]">{project.location}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.type}</p>
                <Link className="w-fit text-[var(--accent)] no-underline font-bold transition-transform duration-200 ease hover:-translate-y-px" to={`/projects/${project.slug}`}>
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

