import PSCDesktop from '@/public/assets/psc-desktop.png'
import PSCMobile from '@/public/assets/psc-mobile.png'
import PrecisionDesktop from '@/public/assets/precision-desktop.png'
import PrecisionMobile from '@/public/assets/precision-mobile.png'

export type Project = {
  title: string
  description: string
  technologies: string[]
  desktopImage: string
  mobileImage: string
  projectUrl: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "PSC Construction",
    description: "A comprehensive website for a leading construction company in Omaha, featuring server-side rendering, responsive design, and integrated email functionality. Showcases services in site preparation, demolition, excavation, and underground utilities while maintaining high performance and accessibility standards.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "SendGrid",
      "Cypress",
      "Sharp"
    ],
    desktopImage: PSCDesktop.src,
    mobileImage: PSCMobile.src,
    projectUrl: "https://www.psccompanies.com/",
    githubUrl: "https://github.com/Kalikoze/psc-construction",
    featured: true
  },
  {
    title: "Precision Surveying & Consulting",
    description: "A professional surveying company website showcasing expertise in construction surveys, as-built surveys, and Ground Penetrating Radar (GPR) services. Features server-side rendering, responsive design, interactive maps, and integrated email functionality while maintaining high performance and accessibility standards.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SendGrid",
      "Cypress",
      "Sharp",
      "Embla Carousel",
      "React Leaflet",
      "React Hook Form"
    ],
    desktopImage: PrecisionDesktop.src,
    mobileImage: PrecisionMobile.src,
    projectUrl: "https://www.precisionsurveyingandconsulting.com/",
    githubUrl: "https://github.com/Kalikoze/precision-surveying",
    featured: true
  }
] 