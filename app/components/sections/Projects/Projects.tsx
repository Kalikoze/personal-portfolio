"use client"

import { projects } from "@/app/data/projects"
import ProjectCard from "./ProjectCard"
import Section from "@/app/components/layout/Section"

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      description="Explore a selection of client web applications I've built and deployed. Click any project to see it live and experience my innovative solutions firsthand."
      dataCy="projects-section"
      className="justify-center"
    >
      <div className="flex flex-col gap-16 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </Section>
  )
}