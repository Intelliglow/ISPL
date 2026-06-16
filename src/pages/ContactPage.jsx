import SectionHeader from '../components/SectionHeader'
import { contactDetails } from '../data/siteContent'

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Talk to us about your next building technology project.</h1>
        <p>
          Share your project details and we will respond with a tailored plan, timeline, and
          recommended next steps.
        </p>
      </section>

      <section className="section">
        <div className="contact-grid contact-grid--standalone">
          <form className="contact-form">
            <SectionHeader eyebrow="Send a Message" title="Tell us about your requirements." />
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" />
            </label>
            <label>
              Project details
              <textarea
                name="details"
                rows="6"
                placeholder="Tell us about the building, industry, timeline, and priorities"
              />
            </label>
            <button type="submit" className="button primary button--full">
              Send request
            </button>
          </form>

          <div className="contact-panel">
            <SectionHeader eyebrow="Contact Information" title="Find the team and the best way to reach us." />
            <div className="contact-details">
              <div>
                <span className="label">Phone numbers</span>
                <span>{contactDetails.phones.join('\n')}</span>
              </div>
              <div>
                <span className="label">Email</span>
                <span>{contactDetails.email}</span>
              </div>
              <div>
                <span className="label">Office locations</span>
                <span>{contactDetails.offices.join('\n')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage

