// app/components/sections/ProjectsHeroSection.tsx
export default function ProjectsHeroSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="page-shell hero-wrap"
    >
      <div className="hero-grid">
        <div>
          <h1 id="projects-title" className="hero-title">
            Projects
          </h1>
          <div className="hero-meta">(2020–26©)</div>
        </div>

        <div className="hero-copy">
          <p>
            I&apos;ve helped brands, products and studios across different
            industries.
          </p>
          <p>Here are some favorites.</p>
        </div>
      </div>
    </section>
  );
}