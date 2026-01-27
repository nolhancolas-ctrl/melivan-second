// app/components/sections/VideoGallerySection.tsx

const VIDEOS = [
  {
    id: 1,
    title: "Showreel — 01",
    meta: "Direction & Motion",
    url: "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
  {
    id: 2,
    title: "Showreel — 02",
    meta: "Direction & Motion",
    url: "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
  {
    id: 3,
    title: "Showreel — 03",
    meta: "Direction & Motion",
    url: "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
  {
    id: 4,
    title: "Showreel — 04",
    meta: "Direction & Motion",
    url: "https://player.vimeo.com/video/1105683003?background=1&autoplay=1&muted=1&loop=1&playsinline=1",
  },
];

export default function VideoGallerySection() {
  return (
    <section
      aria-label="Video projects"
      className="page-shell pt-12 md:pt-16 pb-14 md:pb-18"
    >
      {/* ✅ 1 colonne mobile (CSS pur), 2 colonnes ≥ 768px */}
      <div className="video-grid">
        {VIDEOS.map((video) => (
          <article key={video.id} className="video-card">
            <div className="video-card-inner space-y-4 md:space-y-5">
              {/* Ligne info — forcée sur une seule ligne */}
              <div className="flex items-center justify-between gap-4 text-[11px] tracking-[0.22em] uppercase text-zinc-500 whitespace-nowrap">
                <span className="truncate text-zinc-200">{video.title}</span>
                <span className="truncate hidden sm:inline">
                  {video.meta}
                </span>
              </div>

              {/* petit espace entre texte et vidéo */}
              <div
                className="mt-3 video-frame-wrapper"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={video.url}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}