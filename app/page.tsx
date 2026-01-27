// app/page.tsx
import ProjectsIntroSection from "@/components/sections/ProjectsIntroSection";
import VideoGallerySection from "@/components/sections/VideoGallerySection";
import BookCallSection from "@/components/sections/BookCallSection";

export default function Page() {
  return (
    <main className="pt-16 md:pt-20 pb-4">
      {/* Gère l'espace vertical entre les sections */}
      <div className="space-y-16 md:space-y-24">
        <ProjectsIntroSection />
        <VideoGallerySection />
        <BookCallSection />
      </div>
    </main>
  );
}