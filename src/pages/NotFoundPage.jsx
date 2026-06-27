import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="relative overflow-hidden px-[8vw] py-[100px] pb-12 border-b border-[var(--border)] bg-gradient-to-b from-[rgba(56,189,248,0.08)] from-[rgba(28,97,197,0.08)] to-[var(--surface)]">
      <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#7dd3fc]">404</span>
      <h1 className="mt-2.5 mb-2.5 max-w-[12ch]">Page not found</h1>
      <p className="max-w-[68ch]">The page you were looking for does not exist or has moved.</p>
      <Link className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-transparent font-bold text-white bg-[var(--accent)] shadow-[0_14px_30px_rgba(28,97,197,0.3)] cursor-pointer transition-transform duration-200 ease hover:-translate-y-px" to="/">
        Back to home
      </Link>
    </section>
  )
}

export default NotFoundPage

