// SkillsSection.tsx
// Dependencies: framer-motion, lucide-react, tailwindcss
// Install: npm install framer-motion lucide-react
"use client";

import { motion } from "framer-motion";
import { Server, Wrench, Globe, Palette } from "lucide-react";
import { ReactNode } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git / GitHub", level: 94 },
      { name: "Docker", level: 80 },
      { name: "AWS / Cloud", level: 75 },
      { name: "CI/CD", level: 82 },
    ],
  },
  {
    title: "Other Skills",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "UI/UX Design", level: 78 },
      { name: "Agile / Scrum", level: 85 },
      { name: "Testing", level: 80 },
      { name: "Technical Writing", level: 72 },
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
    <section className="py-20 px-6 bg-slate-50 min-h-screen dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of crafting digital solutions.
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
              <div className="h-full bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
                    <span className="p-2 bg-slate-900/10 dark:bg-white/10 rounded-lg text-slate-900 dark:text-white">
                      {category.icon}
                    </span>
                    {category.title}
                  </h3>
                </div>
                {/* Card Content */}
                <div className="p-6 pt-0 space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-900 dark:text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-slate-900 dark:bg-white rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
