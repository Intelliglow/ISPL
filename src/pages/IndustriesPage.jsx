import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { industries } from '../data/siteContent'

function IndustriesPage() {
  return (
    <>
      {/* HERO SECTION (aligned with ProjectsPage design language) */}
      <section className="services-hero">
        <div className="services-hero__copy">
          <span className="eyebrow eyebrow--dark">Industries</span>
          <h1>
            Dedicated sector pages for building technology and infrastructure delivery.
          </h1>
          <p>
            We tailor our solutions across healthcare, pharmaceutical, manufacturing,
            hospitality, and commercial environments with structured, purpose-built delivery.
          </p>
        </div>

        <div className="services-hero__panel" aria-label="Industries overview">
          <span>Overview</span>
          <p>
            We design and deliver infrastructure solutions tailored to the operational needs of each sector.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {['Healthcare', 'Manufacturing', 'Hospitality'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID (project-style cards) */}
      <section className="services-section services-section--process">
        <SectionHeader
          eyebrow="Sectors"
          title="Explore the industries we support."
          description="Specialized solutions designed for different operational environments and infrastructure needs."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              className="group relative rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-6 flex flex-col gap-4 transition hover:border-[var(--accent)] hover:-translate-y-1"
            >
              <div className="relative z-10">

                <h2 className="text-[var(--text-h)] mb-2 text-xl font-bold">
                  {industry.title}
                </h2>

                <p className="text-[var(--text)] leading-relaxed mb-4">
                  {industry.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                  <small className="text-[var(--text)] opacity-70">
                    Sector
                  </small>

                  <Link
                    className="text-[var(--accent)] font-semibold no-underline hover:underline"
                    to={`/industries/${industry.slug}`}
                  >
                    View details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default IndustriesPage
