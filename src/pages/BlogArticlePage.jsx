import { Link, Navigate, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { articles } from '../data/siteContent'

function BlogArticlePage() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <section className="page-hero page-hero--detail">
        <span className="eyebrow">{article.category}</span>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Introduction" title="Article opening and context." />
        <div className="detail-panel">
          <p>{article.intro}</p>
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Industry Challenges" title="Problems the article addresses." />
        <div className="detail-grid">
          {article.challenges.map((challenge) => (
            <article className="detail-card" key={challenge}>
              <h3>{challenge}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Technology" title="How the systems or approach works." />
        <div className="detail-panel">
          <p>{article.technology}</p>
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Benefits" title="What readers can expect to gain." />
        <div className="pill-grid">
          {article.benefits.map((benefit) => (
            <span key={benefit}>{benefit}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Recommendations" title="Practical next steps and guidance." />
        <div className="detail-panel">
          <p>{article.recommendations}</p>
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Conclusion" title="Closing thoughts and contact CTA." />
        <div className="detail-panel">
          <p>{article.conclusion}</p>
          <Link className="button primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

export default BlogArticlePage

