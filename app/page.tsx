// app/page.tsx
import ProjectsHeroSection from "@/components/sections/ProjectsHeroSection";
import ProjectsGridSection from "@/components/sections/ProjectsGridSection";
import BookCallSection from "@/components/sections/BookCallSection";

export default function Page() {
  return (
    <main id="top" className="pt-28 md:pt-32">
      <ProjectsHeroSection />

      <div className="section-gap-after-hero">
        <ProjectsGridSection />
      </div>

      <div className="section-gap-after-grid">
        <BookCallSection />
      </div>
    </main>
  );
}