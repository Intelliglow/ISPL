import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/siteContent'

function ProjectsPage() {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero__copy">
          <span className="eyebrow eyebrow--dark">Projects</span>
          <h1>Professional case studies for building technology and infrastructure delivery.</h1>
          <p>
            Explore selected projects covering ELV systems, network infrastructure, security,
            communication solutions, and smart building technology delivery.
          </p>
        </div>

        <div className="services-hero__panel" aria-label="Projects overview">
          <span>Our approach</span>
          <p>
            From planning and design to installation and commissioning, we deliver reliable
            technology solutions built for long-term performance.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['ELV Systems', 'Network Infrastructure', 'Security Solutions'].map((item) => (
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

      <section className="services-section services-section--process">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Explore selected portfolio highlights."
          description="A selection of completed solutions showcasing our expertise across infrastructure, security, networking, and smart technology systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] min-h-[360px] flex flex-col justify-end p-8 transition-all duration-300 hover:-translate-y-2"
              key={project.slug}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="relative z-10">
                <span className="inline-flex mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  {project.industry}
                </span>

                <h2 className="text-white mb-3">{project.name}</h2>

                <p className="text-white/80 mb-6 max-w-[45ch]">
                  {project.overview}
                </p>

                <div className="flex items-center justify-between">
                  <small className="text-white/70">
                    {project.location}
                  </small>

                  <Link
                    className="text-white font-bold no-underline"
                    to={`/projects/${project.slug}`}
                  >
                    View project →
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

export default ProjectsPage
