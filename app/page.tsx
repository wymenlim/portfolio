import NavBar from "@/components/NavBar";
import {
  EduSection,
  ProjectsSection,
  ExpSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <section id="home" className="min-h-screen bg-contain bg-cover bg-[url('/black-bg.jpg')]">
        <div className="flex items-center justify-center md:grid place-items-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white font-bold text-2xl md:text-6xl">Wymen's Projects</h1>
            <h2 className="text-white">Scroll or use the Navigation Bar to view</h2>
          </div>
          
        </div>
      </section>
      <EduSection></EduSection>
      <ProjectsSection></ProjectsSection>
      <ExpSection></ExpSection>
      <ContactSection></ContactSection>
      
    </main>
    
  );
}
