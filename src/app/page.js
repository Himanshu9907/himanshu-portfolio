import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Services from "@/components/home/Services";
import TechArsenal from "@/components/home/TechArsenal";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
         <FeaturedProjects />
         <Services />
         <TechArsenal />
         <About />
         <Contact />
      </main>
    </>
  );
}