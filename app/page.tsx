// app/page.tsx
import ProjectsHeroSection from "@/components/sections/ProjectsHeroSection";
import ProjectsGridSection from "@/components/sections/ProjectsGridSection";
import BookCallSection from "@/components/sections/BookCallSection";
import MelivanAnimatedTitle from "@/components/sections/MelivanAnimatedTitle";

export default function Page() {
  return (
    <>
      <section className="pt-[100px]">
          <MelivanAnimatedTitle />
      </section>

      <section className="page-shell pt-[0px] pb-[500px] md:pb-[500px]">
        <ProjectsHeroSection />
      </section>

      <section className="mt-[94px] md:mt-[196px] pb-16 md:pb-24">
        <ProjectsGridSection />
      </section>

      <section className="mt-[56px] md:mt-[110px] pb-10">
        <BookCallSection />
      </section>
    </>
  );
}