// SkillsSection.tsx
// Dependencies: framer-motion, lucide-react, tailwindcss
// Install: npm install framer-motion lucide-react

"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Globe, Palette } from "lucide-react";
import { ReactNode } from "react";

type FamiliarityLevel = "comfortable" | "familiar" | "learning";

interface Skill {
  name: string;
  familiarity: FamiliarityLevel;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const familiarityConfig: Record<FamiliarityLevel, { label: string; width: string }> = {
  comfortable: { label: "Comfortable", width: "100%" },
  familiar: { label: "Familiar", width: "70%" },
  learning: { label: "Learning", width: "40%" },
};

const skillCategories: SkillCategory[] = [
    {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "Java", familiarity: "comfortable" },
      { name: "Python", familiarity: "comfortable" },
      { name: "C", familiarity: "familiar" },
      { name: "Rust", familiarity: "learning" },
      { name: "Kotlin", familiarity: "learning" },
      { name: "SQL", familiarity: "comfortable" },
    ],
  },
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "Next.js", familiarity: "comfortable" },
      { name: "JavaScript / TypeScript", familiarity: "familiar" },
      { name: "Tailwind CSS", familiarity: "comfortable" },
      { name: "Jetpack Compose - Android", familiarity: "learning" },
    ],
  },

  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git / GitHub", familiarity: "comfortable" },
      { name: "Docker", familiarity: "familiar" },
       {name: "Kubernetes", familiarity: "learning" },
      { name: "AWS (Basic Deployment)", familiarity: "learning" },
      { name: "PostgreSQL", familiarity: "comfortable" },
    ],
  },
  {
    title: "Other Skills",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "Accounting & Finance (Diploma)", familiarity: "familiar" },
      { name: "Agile / Scrum", familiarity: "familiar" },
      { name: "Internet of Things", familiarity: "learning" },
      { name: "Networking", familiarity: "familiar" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Skillset acquired from my different projects. <br />
            Always learning, always improving.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={cardVariants}>
              <div className="h-full bg-slate-800 rounded-lg border border-slate-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                    <span className="p-2 bg-white/10 rounded-lg text-white">
                      {category.icon}
                    </span>
                    {category.title}
                  </h3>
                </div>
                {/* Card Content */}
                <div className="p-6 pt-0 space-y-4">
                  {category.skills.map((skill) => {
                    const config = familiarityConfig[skill.familiarity];
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white font-medium">
                            {skill.name}
                          </span>
                          <span className="ttext-slate-400 text-xs">
                            {config.label}
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: config.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-white rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Tags */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Git"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-900 dark:text-white transition-colors hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:border-transparent cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
