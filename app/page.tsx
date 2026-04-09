import Header from "@/components/header";
import { ProjectDetail, Skills, Hero, ProjIntro } from "@/components/sections";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <Header
        name="Wymen Lim"
        title="Computer Science Student"
        email="wymenlsr@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/wymen-lim-431542217"
        resumeUrl="/Resume.pdf"
      />
      <Hero />
      <Skills />
      <ProjIntro />
      {projects.map((project) => (
        <ProjectDetail key={project.id} project={project} />
      ))}
    </main>
  );
}
