// app/components/sections/BookCallSection.tsx
export default function BookCallSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="page-shell contact-wrap"
    >
      <div className="contact-row">
        <div className="contact-left">
          <div className="kicker contact-kicker">CONTACT</div>
          <h2 id="contact-title" className="contact-title">
            Book a call
          </h2>
          <p className="contact-text">
            Share a bit about your brand, your timeline and what you&apos;d like
            to create. We&apos;ll figure out the right format and scope
            together.
          </p>
        </div>

        <div className="contact-right">
          <a
            href="mailto:hello@melivan.dev?subject=Project%20inquiry%20from%20website"
            className="contact-cta"
          >
            <span className="contact-cta-label">Book a call</span>
            <span className="contact-cta-arrow" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}