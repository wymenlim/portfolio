"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectLink {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

const projects: ProjectLink[] = [
  {
    title: "Food For Thought",
    description:
      "AI-powered grocery tracking with expiry prediction, recipe suggestions, and waste reduction reminders.",
    tech: ["AI", "Sustainability", "Hackathon"],
    href: "#project-food-for-thought",
  },
  {
    title: "Dont Say Bojio",
    description:
      "An accessible event discovery app designed to help elderly users connect with their community.",
    tech: ["Cloud-Native","Docker", "AWS"],
    href: "#project-dont-say-bojio",
  },
  {
    title: "Flight Path Visualisation",
    description:
      "A route-finding web app that compares flight paths using graph modelling and Dijkstra's algorithm.",
    tech: ["Python", "Algorithms", "Data Structures"],
    href: "#project-flight-path",
  },
  {
    title: "Smart Waste Management",
    description:
      "IoT-enabled waste monitoring with overflow sensing, contactless interaction, and MQTT-based updates.",
    tech: ["IoT", "Embedded Systems"],
    href: "#project-smart-waste",
  },
  {
    title: "Gamified Feedback App",
    description:
      "A narrative-driven survey experience built to improve response quality and completion rates.",
    tech: ["Agile Development", "Professinal Software Development"],
    href: "#project-gamified-feedback",
  },
  {
    title: "LOS/NLOS Classifier and Regressor",
    description:
      "A machine learning pipeline for UWB signal classification and time-of-flight distance prediction.",
    tech: ["Machine Learning", "Data Analysis"],
    href: "#project-los-nlos",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function ProjIntro() {
  return (
    <section id="projects" className="scroll-mt-28 bg-black/10 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-white/65">
            Click to jump to detailed project section.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.href}
              variants={cardVariants}
              className="group flex h-full flex-col rounded-2xl border border-white/12 bg-slate-900/65 p-6 shadow-lg shadow-black/15 transition hover:-translate-y-1 hover:border-white/25 hover:bg-slate-900/80"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/65">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition group-hover:text-white">
                View project details
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
