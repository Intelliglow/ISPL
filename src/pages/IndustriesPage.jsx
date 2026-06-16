import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { industries } from '../data/siteContent'

function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Industries</span>
        <h1>Dedicated sector pages for the industries we serve most often.</h1>
        <p>
          Separate pages make it easy to tailor the story for healthcare, pharmaceutical,
          manufacturing, hospitality, and commercial projects.
        </p>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Industry Page Template"
          title="Every sector page follows a consistent structure."
          description="Overview, common needs, recommended services, and related work."
        />
        <div className="template-grid">
          {['Industry Header', 'Overview', 'Common Needs', 'Recommended Services', 'Related Projects'].map(
            (item) => (
              <div key={item} className="template-card">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Sectors" title="Explore the industries we support." />
        <div className="industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.slug}>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <Link className="text-link" to={`/industries/${industry.slug}`}>
                Open page
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default IndustriesPage

