"use client"

import { projects } from "@/app/data/projects"
import ProjectCard from "./ProjectCard"
import Section from "@/app/components/layout/Section"

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <Section
      id="projects"
      title="Featured Projects"
      description="Explore a selection of web applications I've built, showcasing innovative solutions and technical excellence."
      dataCy="projects-section"
      className="justify-center"
    >
      <div className="flex flex-col gap-16 w-full">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </Section>
  )
}