import { NavLink } from 'react-router-dom'
import { navigation, contactDetails } from '../data/siteContent'

function SiteLayout({ children }) {
  return (
	<div className="app-shell">
	  <a className="skip-link" href="#main-content">
		Skip to content
	  </a>

	  <header className="site-header">
		<div className="brand">
		  <div className="brand-mark" aria-hidden="true" />
		  <div>
			<span className="brand-name">Intelliglow Solutions</span>
			<span className="brand-tagline">BMS • ELV • Networking • Smart Buildings</span>
		  </div>
		</div>

		<nav className="nav" aria-label="Main navigation">
		  {navigation.map((link) => (
			<NavLink
			  key={link.to}
			  to={link.to}
			  end={link.to === '/'}
			  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
			>
			  {link.label}
			</NavLink>
		  ))}
		</nav>
	  </header>

	  <main id="main-content">{children}</main>

	  <footer className="site-footer">
		<div>
		  <strong>Intelliglow Solutions</strong>
		  <p>BMS • ELV • Networking • Smart Building Technologies</p>
		</div>

		<div className="footer-links">
		  {navigation.map((link) => (
			<NavLink key={link.to} to={link.to} end={link.to === '/'}>
			  {link.label}
			</NavLink>
		  ))}
		</div>

		<div className="footer-contact">
		  <span>{contactDetails.email}</span>
		  <span>{contactDetails.phones.join(' • ')}</span>
		</div>

		<p className="footnote">© 2026 Intelliglow Solutions. All rights reserved.</p>
	  </footer>
	</div>
  )
}

export default SiteLayout

