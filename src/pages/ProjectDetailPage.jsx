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
      <section className="relative overflow-hidden px-[8vw] py-[100px] pb-12 border-b border-[var(--border)] bg-gradient-to-b from-[rgba(56,189,248,0.08)] from-[rgba(28,97,197,0.08)] to-[var(--surface)]">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#7dd3fc]">{project.industry}</span>
        <h1 className="mt-2.5 mb-2.5 max-w-[12ch]">{project.name}</h1>
        <p className="max-w-[68ch]">{project.type} — {project.location}</p>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="Project Overview" title="Client background and overall delivery context." />
        <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
          <p>{project.overview}</p>
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Challenge" title="What problem existed before the project." />
        <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
          <p>{project.challenge}</p>
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="Solution" title="What systems were installed and how they were delivered." />
        <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
          <p>{project.solution}</p>
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Technology Stack" title="Key systems used in the project." />
        <div className="grid gap-[14px]">
          {project.technologyStack.map((item) => (
            <span key={item} className="inline-flex items-center justify-center rounded-full px-[14px] py-[10px] border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] text-[13px]">{item}</span>
          ))}
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="Results" title="Benefits delivered after implementation." />
        <div className="grid grid-cols-4 gap-[14px]">
          {project.results.map((result) => (
            <article className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]" key={result}>
              <h3>{result}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Industries" title="Relevant sectors for this project." />
        <div className="grid gap-[14px]">
          {project.industries.map((industry) => (
            <span key={industry} className="inline-flex items-center justify-center rounded-full px-[14px] py-[10px] border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] text-[13px]">{industry}</span>
          ))}
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="px-[8vw] py-16 border-b border-[var(--border)]">
          <SectionHeader eyebrow="Related Services" title="Explore the services behind this project." />
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
      ) : null}
    </>
  )
}

export default ProjectDetailPage

