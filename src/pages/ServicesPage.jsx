import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { serviceCategories, serviceCards } from '../data/siteContent'

function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Integrated building services across automation, ELV, networking, and support.</h1>
        <p>
          Our service pages follow a consistent structure so clients can quickly understand what each
          solution does, how it is delivered, and where it applies.
        </p>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Service Page Template"
          title="Every service follows the same clear delivery pattern."
          description="Hero, introduction, what we do, industries served, FAQ, and related projects."
        />
        <div className="template-grid">
          {['Hero Section', 'Introduction', 'What We Do', 'Industries Served', 'FAQ', 'Related Projects'].map(
            (item) => (
              <div key={item} className="template-card">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader
          eyebrow="Service Categories"
          title="Choose a service to view the dedicated detail page."
        />
        <div className="feature-grid">
          {serviceCards.map((service) => (
            <article className="feature-card" key={service.slug}>
              <span className="eyebrow eyebrow--dark">{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link className="text-link" to={`/services/${service.slug}`}>
                Open page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Service Coverage" title="Common technology categories we deliver." />
        <div className="category-grid">
          {serviceCategories.map((category) => (
            <article className="category-card" key={category.title}>
              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <ul>
                {category.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage

