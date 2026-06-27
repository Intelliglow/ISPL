import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { articles } from '../data/siteContent'

function BlogPage() {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero__copy">
          <span className="eyebrow eyebrow--dark">Blog / Insights</span>
          <h1>Knowledge center articles categorized by service type.</h1>
          <p>
            The blog structure stays consistent across categories: introduction, challenges,
            technology, benefits, recommendations, and conclusion.
          </p>
        </div>

        <div className="services-hero__panel" aria-label="Blog overview">
          <span>Overview</span>
          <p>
            A structured knowledge center designed for long-form technical and industry insights.
          </p>
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Latest Articles" title="Read the newest insight pieces." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              className="group relative rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-6 flex flex-col gap-3 transition hover:border-[var(--accent)] hover:-translate-y-1"
              key={article.slug}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                {article.category}
              </span>

              <h3 className="text-[var(--text-h)] font-bold text-lg">
                {article.title}
              </h3>

              <p className="text-[var(--text)] leading-relaxed">
                {article.summary}
              </p>

              <Link
                className="mt-auto text-[var(--accent)] font-semibold no-underline hover:underline"
                to={`/blog/${article.slug}`}
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default BlogPage
