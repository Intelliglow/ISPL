function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-[760px] mb-[30px] ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow ? <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--accent)]">{eyebrow}</span> : null}
      <h2 className="my-2.5">{title}</h2>
      {description ? <p className="max-w-[70ch]">{description}</p> : null}
    </div>
  )
}

export default SectionHeader

