// app/components/sections/ProjectsIntroSection.tsx
export default function ProjectsIntroSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="page-shell pb-8 md:pb-10"
    >
      <p className="kicker text-zinc-500 mb-6">SELECTED WORK</p>

      <div className="grid gap-10 md:grid-cols-2 md:items-end">
        {/* Gros titre à gauche */}
        <div>
          <h1
            id="projects-title"
            className="heading-main text-zinc-50 mb-6 md:mb-4"
          >
            Projects
          </h1>
        </div>

        {/* Texte d’intro gris + plus étroit + justifié */}
        <div className="md:justify-self-end max-w-md text-sm md:text-base text-zinc-500 text-justify space-y-3">
          <p>
            Animated sequences crafted for brands, products and studios across
            different sectors.
          </p>
          <p>
            Each piece leans on clear storytelling, tight rhythm and a strong
            visual language.
          </p>
        </div>
      </div>
    </section>
  );
}