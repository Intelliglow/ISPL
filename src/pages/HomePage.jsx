import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import {
	homeHighlights,
	homeHero,
	projects,
	serviceCards,
	testimonials,
} from '../data/siteContent'

function HomePage() {
  const starCanvasRef = useRef(null)

  useEffect(() => {
	const canvas = starCanvasRef.current
	if (!canvas) return undefined

	const context = canvas.getContext('2d')
	if (!context) return undefined

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
	let animationFrameId
	let activeStar = null
	let canvasWidth = 0
	let canvasHeight = 0

	const resizeCanvas = () => {
	  const parent = canvas.parentElement
	  if (!parent) return
	  const { width, height } = parent.getBoundingClientRect()
	  canvasWidth = Math.floor(width)
	  canvasHeight = Math.floor(height)
	  canvas.width = canvasWidth
	  canvas.height = canvasHeight
	}

	const spawnStar = () => {
	  if (activeStar) return
	  activeStar = {
		x: Math.random() * canvasWidth,
		y: -40,
		vx: -0.6 - Math.random() * 0.6,
		vy: 1.8 + Math.random() * 1.2,
		size: 1.2 + Math.random() * 1.6,
		life: 0,
		maxLife: 200 + Math.random() * 80,
	  }
	}

	const drawStar = (star) => {
	  const alpha = 1 - star.life / star.maxLife
	  context.save()
	  context.globalAlpha = alpha
	  context.strokeStyle = 'rgba(125, 211, 252, 0.9)'
	  context.lineWidth = star.size
	  context.beginPath()
	  context.moveTo(star.x, star.y)
	  context.lineTo(star.x + star.vx * 8, star.y + star.vy * 8)
	  context.stroke()
	  context.restore()
	}

	const step = () => {
	  context.clearRect(0, 0, canvasWidth, canvasHeight)

	  if (!prefersReducedMotion && !activeStar && Math.random() > 0.985) {
		spawnStar()
	  }

	  if (activeStar) {
		activeStar.x += activeStar.vx
		activeStar.y += activeStar.vy
		activeStar.life += 1
		drawStar(activeStar)

		if (activeStar.life > activeStar.maxLife) {
		  activeStar = null
		}
	  }

	  animationFrameId = requestAnimationFrame(step)
	}

	resizeCanvas()
	step()
	window.addEventListener('resize', resizeCanvas)

	return () => {
	  window.removeEventListener('resize', resizeCanvas)
	  cancelAnimationFrame(animationFrameId)
	}
  }, [])

  return (
	<>
	  <section className="hero hero--home">
		<div className="hero-bg" aria-hidden="true">
		  <div className="sky-glow" />
		  <div className="horizon-haze" />
		  <div className="horizon-line" />
		  <div className="mountain mountain-back" />
		  <div className="mountain mountain-mid" />
		  <div className="mountain mountain-front" />
		  <canvas ref={starCanvasRef} className="starfield" />
		</div>

		<div className="hero-copy">
		  <span className="eyebrow">{homeHero.eyebrow}</span>
		  <h1>{homeHero.title}</h1>
		  <p>{homeHero.summary}</p>

		  <div className="hero-tags" aria-label="Core offerings">
			{homeHero.tags.map((tag) => (
			  <span key={tag}>{tag}</span>
			))}
		  </div>

		  <div className="hero-actions">
			<Link className="button primary" to="/services">
			  Learn More
			</Link>
			<Link className="button ghost" to="/contact">
			  Contact Us
			</Link>
		  </div>

		  <div className="hero-summary">
			{homeHighlights.map((item) => (
			  <div key={item.title}>
				<strong>{item.title}</strong>
				<span>{item.text}</span>
			  </div>
			))}
		  </div>
		</div>

		<div className="hero-visual">
		  <img src={homeHero.image} alt={homeHero.imageAlt} loading="lazy" />
		  <div className="hero-card">
			<p className="card-title">Integrated Facility Intelligence</p>
			<p className="card-subtitle">One view for energy, security, automation, and performance.</p>
		  </div>
		</div>
	  </section>

		<>
			{/* COMPANY INTRO */}

			<section className="section">
				<SectionHeader
					eyebrow="Who We Are"
					title="Engineering Smart Buildings Across Sri Lanka & South Asia"
					description="We provide integrated building automation, ELV systems, networking infrastructure, and smart technology solutions that improve operational efficiency, security, and long-term performance."
				/>

				<div className="hero-summary hero-summary--centered">
					{homeHighlights.map((item) => (
						<div key={item.title}>
							<strong>{item.title}</strong>
							<span>{item.text}</span>
						</div>
					))}
				</div>
			</section>

			{/* PROJECTS */}

			<section className="section section--soft">
				<SectionHeader
					eyebrow="Our Projects"
					title="Proven delivery across industries."
					description="From pharmaceutical facilities to hospitality and large-scale commercial developments."
				/>

				<div className="project-carousel">
					{projects.slice(0, 6).map((project) => (
						<article className="project-card" key={project.slug}>
							<div className="project-meta">
								<span>{project.industry}</span>
								<span>{project.location}</span>
							</div>

							<h3>{project.name}</h3>

							<p>{project.type}</p>

							<p>{project.overview}</p>

							<Link
								className="text-link"
								to={`/projects/${project.slug}`}
							>
								View Case Study
							</Link>
						</article>
					))}
				</div>

				<div className="section-action">
					<Link className="button ghost" to="/projects">
						View All Projects
					</Link>
				</div>
			</section>

			{/* SERVICES */}

			<section className="section">
				<SectionHeader
					eyebrow="Our Services"
					title="Integrated engineering solutions for modern facilities."
					description="We design, deploy, integrate, and support critical building technologies."
				/>

				<div className="feature-grid">
					{serviceCards.slice(0, 4).map((card) => (
						<article className="feature-card" key={card.slug}>
          <span className="eyebrow eyebrow--dark">
            {card.eyebrow}
          </span>

							<h3>{card.title}</h3>

							<p>{card.description}</p>

							<ul>
								{card.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>

							<Link
								className="text-link"
								to={`/services/${card.slug}`}
							>
								Learn More
							</Link>
						</article>
					))}
				</div>

				<div className="section-action">
					<Link className="button ghost" to="/services">
						View All Services
					</Link>
				</div>
			</section>

			{/* TESTIMONIALS */}

			<section className="section section--soft">
				<SectionHeader
					eyebrow="Testimonials"
					title="Trusted by organizations across multiple industries."
				/>

				<div className="testimonial-grid">
					{testimonials.map((testimonial) => (
						<article
							className="testimonial-card"
							key={testimonial.sector}
						>
							<p className="testimonial-quote">
								“{testimonial.quote}”
							</p>

							<div className="testimonial-author">
								<strong>{testimonial.author}</strong>
								<span>{testimonial.sector}</span>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* CTA */}

			<section className="section cta-band">
				<div>
					<span className="eyebrow">Get Started</span>

					<h2>
						Ready to Build a Smarter Facility?
					</h2>

					<p>
						Whether you're planning a new development,
						upgrading infrastructure, or integrating
						building systems, our engineering team can
						help.
					</p>
				</div>

				<div className="cta-band-actions">
					<Link
						className="button primary"
						to="/contact"
					>
						Contact Us
					</Link>
				</div>
			</section>
		</>
	</>
  )
}

export default HomePage

