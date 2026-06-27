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
      <section className="relative overflow-hidden px-[8vw] py-[100px] pb-12 border-b border-[var(--border)] bg-gradient-to-b from-[rgba(56,189,248,0.08)] from-[rgba(28,97,197,0.08)] to-[var(--surface)]">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#7dd3fc]">{article.category}</span>
        <h1 className="mt-2.5 mb-2.5 max-w-[12ch]">{article.title}</h1>
        <p className="max-w-[68ch]">{article.summary}</p>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="Introduction" title="Article opening and context." />
        <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
          <p>{article.intro}</p>
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Industry Challenges" title="Problems the article addresses." />
        <div className="grid grid-cols-4 gap-[14px]">
          {article.challenges.map((challenge) => (
            <article className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]" key={challenge}>
              <h3>{challenge}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="Technology" title="How the systems or approach works." />
        <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
          <p>{article.technology}</p>
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Benefits" title="What readers can expect to gain." />
        <div className="grid gap-[14px]">
          {article.benefits.map((benefit) => (
            <span key={benefit} className="inline-flex items-center justify-center rounded-full px-[14px] py-[10px] border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] text-[13px]">{benefit}</span>
          ))}
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <SectionHeader eyebrow="Recommendations" title="Practical next steps and guidance." />
        <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
          <p>{article.recommendations}</p>
        </div>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionHeader eyebrow="Conclusion" title="Closing thoughts and contact CTA." />
        <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
          <p>{article.conclusion}</p>
          <Link className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-transparent font-bold text-white bg-[var(--accent)] shadow-[0_14px_30px_rgba(28,97,197,0.3)] cursor-pointer transition-transform duration-200 ease hover:-translate-y-px" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

export default BlogArticlePage

