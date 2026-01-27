import Header from "@/components/header";
import NavBar from "@/components/NavBar";
import {
  ProjectsSection,
  ExpSection,
  ContactSection,
  Project4,
  Project5,
  Skills,
  Hero,
  ProjIntro,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Header name="Wymen Lim" title="Computer Science Student"email="wymenlsr@gmail.com"
  linkedinUrl="https://www.linkedin.com/in/wymen-lim-431542217" resumeUrl="/Resume.pdf"></Header>
      <NavBar></NavBar>
      <Hero />
      <Skills />
      <ProjIntro />
      <Project5></Project5>
      <ProjectsSection></ProjectsSection>
      <ExpSection></ExpSection>
      <ContactSection></ContactSection>
      <Project4></Project4>
      
    </main>
    
  );
}
