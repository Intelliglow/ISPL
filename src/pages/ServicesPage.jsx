import SectionHeader from '../components/SectionHeader'
import { serviceOfferings } from '../data/siteContent'

function ServicesPage() {
  const allServices = serviceOfferings.flatMap((category) => {
    if (category.title === 'DATA Network Systems') {
      return [{
        name: category.title,
        category: category.accent,
        summary: category.summary,
        subServices: category.services,
        featured: true,
      }]
    }

    const services = category.services.map((service) => ({
      name: service,
      category: category.title,
    }))

    return services
  })

  return (
    <>
      <section className="services-hero">
        <div className="services-hero__copy">
          <span className="eyebrow eyebrow--dark">Services</span>
          <h1>Integrated ELV, network, safety, and smart building systems.</h1>
          <p>
            We design, configure, install, commission, and support the technology systems that keep
            modern facilities connected, secure, and easier to operate.
          </p>
        </div>

        <div className="services-hero__panel" aria-label="Services overview">
          <strong>{allServices.length}</strong>
          <span>services in one place</span>
          <p>Network infrastructure, communications, security, life safety, and smart building control.</p>
        </div>
      </section>

      <section className="services-section services-section--intro">
        <SectionHeader
          eyebrow="All Services"
          title="Everything we deliver, clearly listed."
          description="Each service is shown as its own card so clients can scan the full offering without opening another page."
        />

        <div className="services-list-grid">
          {allServices.map((service, index) => (
            <article
              className={`services-list-card${service.featured ? ' services-list-card--featured' : ''}`}
              key={`${service.category}-${service.name}`}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div className="services-list-card__content">
                <h2>{service.name}</h2>
                <p>{service.summary || service.category}</p>
                {service.subServices ? (
                  <ul>
                    {service.subServices.map((subService) => (
                      <li key={subService}>{subService}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <small>{service.category}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section services-section--process">
        <SectionHeader
          eyebrow="Delivery"
          title="Built for clean handover and long-term reliability."
          description="Each service can be handled as a standalone scope or as part of a wider integrated building technology project."
        />
        <div className="services-process-grid">
          {['Design', 'Supply', 'Installation', 'Configuration', 'Testing & commissioning', 'Maintenance'].map((step) => (
            <div className="services-process-step" key={step}>
              {step}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
