import SectionHeader from '../components/SectionHeader'
import { contactDetails } from '../data/siteContent'

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-[8vw] py-[100px] pb-12 border-b border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--bg)]">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#7dd3fc]">Contact</span>
        <h1 className="mt-3 mb-3 max-w-[18ch] text-3xl md:text-5xl font-bold leading-tight">Talk to us about your next building technology project.</h1>
        <p className="max-w-[68ch] text-[var(--text)] leading-relaxed">
          Share your project details and we will respond with a tailored plan, timeline, and
          recommended next steps.
        </p>
      </section>

      <section className="px-[8vw] py-16 border-b border-[var(--border)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[28px]">
          <form className="grid gap-[14px]">
            <SectionHeader eyebrow="Send a Message" title="Tell us about your requirements." />
            <label className="grid gap-2 text-[var(--text-h)] font-semibold">
              Name
              <input type="text" name="name" placeholder="Your name" className="w-full rounded-[14px] border border-[var(--border)] px-[14px] py-3 bg-[var(--bg)] text-[var(--text-h)] font-inherit focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition" />
            </label>
            <label className="grid gap-2 text-[var(--text-h)] font-semibold">
              Company
              <input type="text" name="company" placeholder="Company name" className="w-full rounded-[14px] border border-[var(--border)] px-[14px] py-3 bg-[var(--bg)] text-[var(--text-h)] font-inherit focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition" />
            </label>
            <label className="grid gap-2 text-[var(--text-h)] font-semibold">
              Email
              <input type="email" name="email" placeholder="you@email.com" className="w-full rounded-[14px] border border-[var(--border)] px-[14px] py-3 bg-[var(--bg)] text-[var(--text-h)] font-inherit focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition" />
            </label>
            <label className="grid gap-2 text-[var(--text-h)] font-semibold">
              Project details
              <textarea
                name="details"
                rows="6"
                placeholder="Tell us about the building, industry, timeline, and priorities"
                className="w-full rounded-[14px] border border-[var(--border)] px-[14px] py-3 bg-[var(--bg)] text-[var(--text-h)] font-inherit focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition resize-none"
              />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-transparent font-bold text-white bg-[var(--accent)] shadow-[0_14px_30px_rgba(28,97,197,0.3)] cursor-pointer transition-transform duration-200 ease hover:-translate-y-px w-full hover:opacity-90 active:scale-[0.99] transition">
              Send request
            </button>
          </form>

          <div className="p-6 border border-[var(--border)] rounded-[22px] bg-[var(--bg)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] grid gap-[14px]">
            <SectionHeader eyebrow="Contact Information" title="Find the team and the best way to reach us." />
            <div className="grid gap-[14px]">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text)]">Phone numbers</span>
                <span className="whitespace-pre-line block text-[var(--text)] leading-relaxed">{contactDetails.phones.join('\n')}</span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text)]">Email</span>
                <span className="block text-[var(--text)] leading-relaxed">{contactDetails.email}</span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text)]">Business hours</span>
                <span className="block text-[var(--text)] leading-relaxed">{contactDetails.hours}</span>
              </div>
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--text)]">Office locations</span>
                <span className="whitespace-pre-line block text-[var(--text)] leading-relaxed">{contactDetails.offices.join('\n')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
