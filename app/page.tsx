import NavBar from "@/components/NavBar";
import {
  AboutSection,
  ProjectsSection,
  ExpSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <section id="home" className="min-h-screen bg-stone-500">
        <div className="flex item-center justify-center md:grid place-items-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white font-bold text-2xl md:text-6xl">Wymen's e-Portfolio</h1>
            <h2 className="text-white">Scroll or use the Navigation Bar to view</h2>
          </div>
          
        </div>
      </section>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ExpSection></ExpSection>
      <ContactSection></ContactSection>
      
    </main>
    
  );
}
