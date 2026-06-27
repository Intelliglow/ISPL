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
		building: (
			<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
		),
		zap: (
			<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
		),
		network: (
			<>
				<rect x="16" y="16" width="6" height="6" rx="1" />
				<rect x="2" y="16" width="6" height="6" rx="1" />
				<rect x="9" y="2" width="6" height="6" rx="1" />
				<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
				<path d="M12 12V8" />
			</>
		),
		shield: (
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
		),
		home: (
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		),
		sun: (
			<>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</>
		),
		'volume-2': (
			<>
				<path d="M11 5 6 9H2v6h4l5 4V5z" />
				<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
				<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
			</>
		),
		clock: (
			<>
				<circle cx="12" cy="12" r="10" />
				<polyline points="12 6 12 12 16 14" />
			</>
		),
		'bar-chart': (
			<>
				<line x1="12" y1="20" x2="12" y2="10" />
				<line x1="18" y1="20" x2="18" y2="4" />
				<line x1="6" y1="20" x2="6" y2="16" />
			</>
		),
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
		<div
			className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
			style={{ backgroundImage: `url(${heroBg})` }}
		/>
		<section
			className="
				relative
				min-h-screen
				w-full
				flex
				items-center
				justify-center
				"
		>
			<div
				className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50 z-10"
			>
					<div className="z-10 flex flex-col items-center">
						<h1
							className="text-[clamp(5rem,12vw,10rem)] font-black tracking-[0.18em] leading-none text-white text-center"
					>
						ISPL
					</h1>

					<div className="w-full flex justify-center">
							<p
								className="mt-6 text-[clamp(0.7rem,1.4vw,1.125rem)] uppercase text-white/80 tracking-[0.2em] whitespace-nowrap text-center"
						>
							Intelliglow Solutions (Pvt) Ltd
						</p>
					</div>
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

			<section className="relative py-16 px-[8vw] border-b border-[var(--border)]" ref={nextSectionRef}>

				{/* background overlay */}
				<div className="absolute inset-0 bg-slate-900/70 backdrop-blur-xl pointer-events-none z-0" />

				{/* content layer */}
				<div className="relative z-10">

					<SectionHeader
						eyebrow="Who We Are"
						title="Engineering Smart Buildings Across Sri Lanka & South Asia"
						description="We provide integrated building automation, ELV systems, networking infrastructure, and smart technology solutions that improve operational efficiency, security, and long-term performance."
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center  p-12 relative z-10">
						{homeHighlights.map((item) => (
							<div key={item.title} className="flex flex-col items-center gap-3">
								<div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sky-300">
									<HighlightIcon name={item.icon} />
								</div>
								<strong>{item.title}</strong>
								<span>{item.text}</span>
							</div>
						))}
					</div>

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
					{serviceCards.slice(0, 6).map((card) => (
						<article
							className="feature-card"
							key={card.slug}
							style={
								card.image
									? {
											backgroundImage: `url(${
												card.image.startsWith('/')
													? card.image
													: new URL(card.image, import.meta.url).href
											})`
										}
									: {}
							}
						>
							<div className="feature-card-icon">
								<HighlightIcon name={card.icon} />
							</div>
							<div className="feature-card-content">
								<div className="feature-card-header">
									<span className="eyebrow">
										{card.eyebrow}
									</span>
									<h3>{card.title}</h3>
								</div>

								<div className="feature-card-details">
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
										<span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
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
