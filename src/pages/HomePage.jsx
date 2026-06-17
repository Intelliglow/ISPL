import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import heroBg from '../assets/hero-bg.jpg'
import {
	homeHighlights,
	// homeHero,
	projects,
	serviceCards,
	testimonials,
} from '../data/siteContent'

const HighlightIcon = ({ name }) => {
	const icons = {
		layers: (
			<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.27a1 1 0 0 0 0 1.78l8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09a1 1 0 0 0 0-1.78Z" />
		),
		target: (
			<>
				<circle cx="12" cy="12" r="10" />
				<circle cx="12" cy="12" r="6" />
				<circle cx="12" cy="12" r="2" />
			</>
		),
		'shield-check': (
			<>
				<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
				<path d="m9 13 2 2 4-4" />
			</>
		),
		globe: (
			<>
				<circle cx="12" cy="12" r="10" />
				<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
				<path d="M2 12h20" />
			</>
		),
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="highlight-icon-svg"
		>
			{icons[name] || null}
		</svg>
	)
}

function HomePage() {
  const starCanvasRef = useRef(null)
  const nextSectionRef = useRef(null)

 	const [currentSlide, setCurrentSlide] = useState(0)
	const totalSlides = Math.min(projects.length, 6)

	const [isMobile, setIsMobile] = useState(false)
	const [dragStartX, setDragStartX] = useState(null)
	const [dragOffset, setDragOffset] = useState(0)
	const [isDragging, setIsDragging] = useState(false)
	const slideshowRef = useRef(null)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 760)
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const slideWidth = isMobile ? 90 : 85

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % totalSlides)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
	}

	const handleDragStart = (e) => {
		const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
		setDragStartX(clientX)
		setIsDragging(true)
	}

	const handleDragMove = (e) => {
		if (dragStartX === null) return
		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
		const offset = clientX - dragStartX
		setDragOffset(offset)
	}

	const handleDragEnd = () => {
		if (dragStartX === null) return

		const threshold = slideshowRef.current ? slideshowRef.current.offsetWidth * 0.2 : 100

		if (dragOffset < -threshold) {
			nextSlide()
		} else if (dragOffset > threshold) {
			prevSlide()
		}

		setDragStartX(null)
		setDragOffset(0)
		setIsDragging(false)
	}

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

 	const maxScroll = Math.max(0, (totalSlides * slideWidth) - 100)
	const currentTranslation = Math.min(currentSlide * slideWidth, maxScroll)

	const scrollToNextSection = () => {
		nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
	<>
		<section
			className="hero hero--landing"
			style={{ backgroundImage: `url(${heroBg})` }}
		>
			<div className="hero-image-overlay">
				<div className="hero-title-container">
					<h1>ISPL</h1>
					<p className="hero-subtitle">Intelliglow Solutions (Pvt) Ltd</p>
				</div>

				<button 
					className="hero-descend" 
					onClick={scrollToNextSection}
					aria-label="Scroll to next section"
				>
					<span>DESCEND</span>
					<svg 
						width="24" 
						height="24" 
						viewBox="0 0 24 24" 
						fill="none" 
						stroke="currentColor" 
						strokeWidth="2" 
						strokeLinecap="round" 
						strokeLinejoin="round"
					>
						<path d="M7 11l5 5 5-5" />
					</svg>
				</button>
			</div>
		</section>

		<>
		{/* COMPANY INTRO */}

		<section className="section" ref={nextSectionRef}>
			<SectionHeader
				eyebrow="Who We Are"
				title="Engineering Smart Buildings Across Sri Lanka & South Asia"
				description="We provide integrated building automation, ELV systems, networking infrastructure, and smart technology solutions that improve operational efficiency, security, and long-term performance."
			/>

			<div className="hero-summary hero-summary--centered">
				{homeHighlights.map((item) => (
					<div key={item.title} className="highlight-card">
						<div className="highlight-icon-container">
							<HighlightIcon name={item.icon} />
						</div>
						<strong>{item.title}</strong>
						<span>{item.text}</span>
					</div>
				))}
			</div>
		</section>

		{/* PROJECTS */}

		<section className="section section--soft section--full">
			<div className="section-header-container">
				<SectionHeader
					eyebrow="Our Projects"
					title="Proven delivery across industries."
					description="From pharmaceutical facilities to hospitality and large-scale commercial developments."
				/>
			</div>

			<div className="project-slideshow-container">
				<div 
					className={`project-slideshow ${isDragging ? 'is-dragging' : ''}`}
					ref={slideshowRef}
					onMouseDown={handleDragStart}
					onMouseMove={handleDragMove}
					onMouseUp={handleDragEnd}
					onMouseLeave={handleDragEnd}
					onTouchStart={handleDragStart}
					onTouchMove={handleDragMove}
					onTouchEnd={handleDragEnd}
				>
					<div 
						className="slides-wrapper" 
						style={{ 
							transform: `translateX(calc(-${currentTranslation}% + ${dragOffset}px))`,
							transition: isDragging ? 'none' : undefined
						}}
					>
						{projects.slice(0, 6).map((project) => (
							<article className="project-slide" key={project.slug}>
								<div className="project-image-container">
									<img src={project.image} alt={project.name} className="project-image" />
									<div className="project-image-overlay">
										<div className="project-meta">
											<span>{project.industry}</span>
											<span>{project.location}</span>
										</div>
										<div className="project-slide-content">
											<div className="project-slide-text">
												<h3>{project.name}</h3>
												<p className="project-description">{project.overview}</p>
											</div>
											<Link
												className="button primary x-small project-button"
												to={`/projects/${project.slug}`}
											>
												View Case Study
											</Link>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>

					<button className="slideshow-control prev" onClick={prevSlide} aria-label="Previous slide">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
					</button>
					<button className="slideshow-control next" onClick={nextSlide} aria-label="Next slide">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
					</button>

					<div className="slideshow-indicators">
						{Array.from({ length: totalSlides }).map((_, idx) => (
							<button
								key={idx}
								className={`indicator ${idx === currentSlide ? 'active' : ''}`}
								onClick={() => setCurrentSlide(idx)}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>
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

