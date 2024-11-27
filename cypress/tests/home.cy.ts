import { socialLinks } from '@/app/data/social'
import { currentFocusItems, quickFactsItems, aboutParagraphs } from '@/app/data/about'
import { skillCategories, learningApproachItems } from '@/app/data/skills'
import { Project } from '@/app/data/projects'

describe('Home Page', () => {
  const techStack = [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Prisma',
    'CircleCI'
  ] as const;

  beforeEach(() => {
    cy.visit('/')
  })

  context('Hero Section Tests', () => {
    it('should display the hero content correctly', () => {
      cy.get('[data-cy="greeting"]')
        .should('be.visible')
        .and('contain.text', 'Hi there, I\'m')

      cy.get('[data-cy="name"]')
        .should('be.visible')
        .and('have.text', 'Travis Rollins')

      cy.get('[data-cy="title"]')
        .should('be.visible')
        .and('contain.text', 'Lead Software Engineer')

      cy.get('[data-cy="hero-description"]')
        .should('be.visible')
        .and('contain.text', 'Specializing in modern web development')

      cy.get('[data-cy="tech-stack"]')
        .should('be.visible')
        .find('li')
        .each(($el, index) => {
          cy.wrap($el).should('contain.text', techStack[index])
        })
    })

    it('should display the profile image correctly', () => {
      cy.get('figure img')
        .should('be.visible')
        .and('have.attr', 'alt', 'Travis Rollins')
    })

    it('should display and link to social profiles correctly', () => {
      cy.get('nav[aria-label="Social links"]')
        .should('be.visible')
        .find('a')
        .each(($el, index) => {
          cy.wrap($el)
            .should('have.attr', 'href', socialLinks[index].url)
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener noreferrer')
            .and('have.attr', 'aria-label', `${socialLinks[index].name} Profile`)
        })
    })
  })

  context('About Section Tests', () => {
    beforeEach(() => {
      cy.get('[data-cy="about-section"]').scrollIntoView()
    })

    it('should display the about section correctly', () => {
      cy.get('[data-cy="about-section"]').should('be.visible')

      cy.get('[data-cy="about"]')
        .should('be.visible')
        .and('contain.text', 'About Me')

      cy.get('[data-cy="about-description"]')
        .should('be.visible')
        .and('contain.text', 'With over 7 years in software development, I bring a unique blend of technical expertise, teaching experience, and a passion for creating inclusive tech spaces.')

      cy.get('[data-cy="about-main"] p').each(($p, index) => {
        const text = $p.text().replace(/\s+/g, ' ').trim()
        const expectedText = aboutParagraphs[index].replace(/\s+/g, ' ').trim()
        expect(text).to.include(expectedText.substring(0, 50)) // Check first 50 chars to handle line breaks
      })
    })

    it('should display current focus items correctly', () => {
      cy.get('[data-cy="current-focus"]')
        .should('be.visible')
        .find('li')
        .each(($el, index) => {
          cy.wrap($el).should('contain.text', currentFocusItems[index])
        })
    })

    it('should display quick facts correctly', () => {
      cy.get('[data-cy="quick-facts"]')
        .should('be.visible')
        .find('li')
        .each(($el, index) => {
          cy.wrap($el).should('contain.text', quickFactsItems[index])
        })
    })
  })

  context('Skills Section Tests', () => {
    beforeEach(() => {
      cy.get('[data-cy="skills-section"]').scrollIntoView()
    })

    it('should display the section header correctly', () => {
      cy.get('[data-cy="skills-heading"]')
        .should('be.visible')
        .and('contain.text', 'Technical Expertise')

      cy.get('[data-cy="skills-heading-description"]')
        .should('be.visible')
        .and('contain.text', 'A comprehensive overview')
    })

    it('should display all skill statistics correctly', () => {
      const stats = [
        { value: '7+', label: 'Years of Experience' },
        { value: '20+', label: 'Technologies Mastered' },
        { value: '50+', label: 'Web Applications Built' }
      ]

      stats.forEach(({ value, label }) => {
        cy.get(`[data-cy="stat-${label.toLowerCase().replace(/\s+/g, '-')}"]`)
          .should('be.visible')
          .and('contain.text', value)
          .and('contain.text', label)
      })
    })

    it('should display all skill categories with their skills', () => {
      skillCategories.forEach((category) => {
        const categoryId = category.title.toLowerCase().replace(/\s+/g, '-')

        cy.get(`[data-cy="skill-category-${categoryId}"]`)
          .should('be.visible')
          .within(() => {
            cy.get('[data-cy="category-title"]')
              .should('contain.text', category.title)

            cy.get('[data-cy="category-description"]')
              .should('contain.text', category.description)

            category.skills.forEach((skill) => {
              const skillId = skill.toLowerCase().replace(/\s+/g, '-')
              cy.get(`[data-cy="skill-item-${skillId}"]`)
                .should('be.visible')
                .and('contain.text', skill)
            })
          })
      })
    })

    it('should display learning approach section correctly', () => {
      cy.get('[data-cy="skills-section"]').find('footer').scrollIntoView()
      cy.get('[data-cy="skills-section"]')
        .find('footer')
        .within(() => {
          cy.contains('h3', 'Continuous Learning Approach')
            .should('be.visible')

          cy.contains('p', 'As the sole developer at a B2B digital solutions agency, I constantly adapt to diverse client needs by exploring and implementing new technologies. Each project presents unique challenges, from e-commerce solutions to custom CMS integrations, driving continuous learning and innovation.')
            .should('be.visible')

          learningApproachItems.forEach(({ text }) => {
            cy.contains('li', text)
              .should('be.visible')
          })
        })
    })
  })

  context('Projects Section Tests', () => {
    beforeEach(() => {
      cy.fixture('projects.json').as('projectsData')
      cy.get('[data-cy="projects-section"]').scrollIntoView()
    })

    it('should display the projects section header correctly', () => {
      cy.get('[data-cy="projects-section"]')
        .should('be.visible')
        .within(() => {
          cy.contains('h2', 'Featured Projects')
            .should('be.visible')
          cy.contains('p', 'Explore a selection of web applications')
            .should('be.visible')
        })
    })

    it('should display all featured projects correctly', () => {
      cy.get('@projectsData').then((data: any) => {
        const featuredProjects = data.projects.filter((project: Project) => project.featured)

        cy.get('[data-cy="project-card"]')
          .should('have.length', featuredProjects.length)
          .each(($card, index) => {
            const project: Project = featuredProjects[index]

            cy.wrap($card)
              .find('[data-cy="project-title"]')
              .should('contain.text', project.title)

            cy.wrap($card)
              .find('[data-cy="project-description"]')
              .should('contain.text', project.description)

            cy.wrap($card)
              .find('[data-cy="project-technologies"] li')
              .should('have.length', project.technologies.length)
              .each(($tech, techIndex) => {
                cy.wrap($tech)
                  .should('contain.text', project.technologies[techIndex])
              })

            cy.wrap($card)
              .find('[data-cy="project-url"]')
              .should('have.attr', 'href', project.projectUrl)
              .and('have.attr', 'target', '_blank')
              .and('have.attr', 'rel', 'noopener noreferrer')

            if (project.githubUrl) {
              cy.wrap($card)
                .find('[data-cy="github-url"]')
                .should('have.attr', 'href', project.githubUrl)
                .and('have.attr', 'target', '_blank')
                .and('have.attr', 'rel', 'noopener noreferrer')
            }

            cy.wrap($card)
              .find('[data-cy="desktop-preview"] img')
              .should('have.attr', 'src')
              .and('include', project.desktopImage.split('/').pop()?.split('.')[0] ?? '')

            cy.wrap($card)
              .find('[data-cy="mobile-preview"] img')
              .should('have.attr', 'src')
              .and('include', project.mobileImage.split('/').pop()?.split('.')[0] ?? '')
          })
      })
    })

    it('should only display featured projects', () => {
      cy.get('@projectsData').then((data: any) => {
        const featuredProjects = data.projects.filter((project: Project) => project.featured)
        const nonFeaturedProjects = data.projects.filter((project: Project) => !project.featured)

        // Verify featured projects are shown
        featuredProjects.forEach((project: Project) => {
          cy.contains('[data-cy="project-title"]', project.title)
            .should('exist')
        })

        // Verify non-featured projects are not shown
        nonFeaturedProjects.forEach((project: Project) => {
          cy.contains('[data-cy="project-title"]', project.title)
            .should('not.exist')
        })
      })
    })
  })

  context('Accessibility Tests', () => {
    it('should pass accessibility tests', () => {
      cy.injectAxe()
      cy.wait(2000)
      cy.checkA11y()
    })
  })
})
