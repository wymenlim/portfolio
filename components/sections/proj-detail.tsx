"use client";
import { motion } from "framer-motion";
import Tag from "@/components/tag";
import ImageCarouselUploader from "@/components/image";
import BackToProjects from "@/components/back-to-projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <section
      id={project.id}
      className={cn(
        "min-h-[70vh] scroll-mt-28",
        project.bg === "dark" ? "bg-slate-900/50" : "bg-black"
      )}
    >
      <div className="px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-8 font-bold text-2xl md:text-5xl">{project.title}</h1>
          {project.descriptions.map((line, i) => (
            <h2 key={i} className={i === 0 ? "mt-2" : undefined}>{line}</h2>
          ))}
          {project.tags.map((row, i) => (
            <div key={i} className="flex gap-1 mt-2">
              {row.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="flex h-150 w-225 mt-6">
            <ImageCarouselUploader
              images={project.images}
              captions={project.captions}
            />
          </div>
        </motion.div>

        <BackToProjects />
      </div>
    </section>
  );
}
