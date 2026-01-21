import Header from "@/components/header";
import NavBar from "@/components/NavBar";
import {
  EduSection,
  ProjectsSection,
  ExpSection,
  ContactSection,
  Project4,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Header name="Wymen Lim" title="Computer Science Student"email="wymenlsr@gmail.com"
  linkedinUrl="https://www.linkedin.com/in/wymen-lim-431542217" resumeUrl="/Resume.pdf"></Header>
      <NavBar></NavBar>
      <section id="home" className="min-h-screen bg-[#0B1220]">
        <div className="flex items-center justify-center md:grid place-items-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white font-bold text-2xl md:text-6xl">Wymen's Projects</h1>
            <h2 className="text-white">Scroll or use the Navigation Bar to view</h2>
          </div>
          
        </div>
      </section>
      <ProjectsSection></ProjectsSection>
      <ExpSection></ExpSection>
      <ContactSection></ContactSection>
      <Project4></Project4>
      
    </main>
    
  );
}
