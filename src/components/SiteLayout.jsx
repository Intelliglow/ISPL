import { NavLink } from 'react-router-dom'
import { navigation, contactDetails } from '../data/siteContent'
import CustomCursor from './CustomCursor'

function SiteLayout({ children }) {
  const leftLinks = navigation.slice(0, 3)
  const rightLinks = navigation.slice(3, 6)

  return (
	<div className="app-shell">
	  <CustomCursor />
	  <a className="skip-link" href="#main-content">
		Skip to content
	  </a>

	  <header className="site-header">
		<nav className="nav nav-left" aria-label="Secondary navigation">
		  {leftLinks.map((link) => (
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

		<div className="brand">
		  <NavLink to="/" className="brand-link">
			<img src="/images/colored logo.png" alt="Intelliglow Solutions" className="brand-logo" />
		  </NavLink>
		</div>

		<nav className="nav nav-right" aria-label="Main navigation">
		  {rightLinks.map((link) => (
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

