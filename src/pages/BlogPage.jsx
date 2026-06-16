import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { articles } from '../data/siteContent'

function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Blog / Insights</span>
        <h1>Knowledge center articles categorized by service type.</h1>
        <p>
          The blog structure stays consistent across categories: introduction, challenges,
          technology, benefits, recommendations, and conclusion.
        </p>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Article Template"
          title="A modern long-form knowledge center structure."
          description="Introduction, industry challenges, technology explanation, benefits, recommendations, conclusion, and CTA."
        />
        <div className="template-grid">
          {['Introduction', 'Industry Challenges', 'Technology', 'Benefits', 'Recommendations', 'Conclusion', 'CTA'].map(
            (item) => (
              <div key={item} className="template-card">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section className="section section--soft">
        <SectionHeader eyebrow="Latest Articles" title="Read the newest insight pieces." />
        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <span className="blog-category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <Link className="text-link" to={`/blog/${article.slug}`}>
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default BlogPage

