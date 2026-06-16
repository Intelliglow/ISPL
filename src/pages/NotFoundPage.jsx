import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page-hero page-hero--detail">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you were looking for does not exist or has moved.</p>
      <Link className="button primary" to="/">
        Back to home
      </Link>
    </section>
  )
}

export default NotFoundPage

