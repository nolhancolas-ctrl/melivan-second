// app/components/sections/BookCallSection.tsx
export default function BookCallSection() {
  return (
    <section
      id="contact"
      aria-labelledby="book-call-title"
      className="page-shell border-t border-zinc-800 pt-10 md:pt-12 pb-2 md:pb-3"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        <div className="space-y-2 md:max-w-xl">
          <p className="kicker text-zinc-500">CONTACT</p>
          <h2
            id="book-call-title"
            className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50"
          >
            Book a call
          </h2>
          <p className="text-sm md:text-base text-zinc-400">
            Share a bit about your brand, your timeline and what you&apos;d like
            to create. We&apos;ll figure out the right format and scope
            together.
          </p>
        </div>

        <div className="flex md:justify-end">
          <a
            href="mailto:hello@melivan.dev?subject=Project%20inquiry%20from%20website"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-50 text-zinc-900 px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
          >
            <span>Book a call</span>
            <span aria-hidden>☎️</span>
          </a>
        </div>
      </div>
    </section>
  );
}