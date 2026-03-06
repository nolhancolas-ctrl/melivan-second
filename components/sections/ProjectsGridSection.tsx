// app/components/sections/ProjectsGridSection.tsx
type Project = {
  id: number;
  title: string;
  tags: string; // ex: "Creative Direction / Motion / 2D+3D"
  vimeoUrl: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Showreel — 01",
    tags: "Direction / Motion / 2D+3D",
    vimeoUrl:
      "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
  {
    id: 2,
    title: "Showreel — 02",
    tags: "Direction / Motion / 2D+3D",
    vimeoUrl:
      "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
  {
    id: 3,
    title: "Showreel — 03",
    tags: "Direction / Motion / 2D+3D",
    vimeoUrl:
      "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
  {
    id: 4,
    title: "Showreel — 04",
    tags: "Direction / Motion / 2D+3D",
    vimeoUrl:
      "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="work-card">
      <div className="work-card-head">
        <h3 className="work-card-title">{project.title}</h3>
        <p className="work-card-tags">{project.tags}</p>
      </div>

      <div className="work-media">
        <iframe
          src={project.vimeoUrl}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={project.title}
          className="work-iframe"
        />
      </div>
    </article>
  );
}

export default function ProjectsGridSection() {
  return (
    <section aria-label="Selected work" className="page-shell mt-10 md:mt-14 pb-16 md:pb-24">
      <div className="work-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}