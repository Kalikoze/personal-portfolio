import { socialLinks } from '@/app/data/social'
import { currentFocusItems, quickFactsItems, aboutParagraphs } from '@/app/data/about'
import { skillCategories, learningApproachItems } from '@/app/data/skills'
import { Project } from '@/app/data/projects'
import { triviaFacts, programmingJokes, techQuotes } from '@/app/data/terminalData'
import { experiences } from '@/app/data/experience'

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

  context('Experience Section Tests', () => {
    beforeEach(() => {
      cy.get('[data-cy="experience-section"]').scrollIntoView()
    })

    it('should display the experience section header correctly', () => {
      cy.get('[data-cy="experience-section"]')
        .should('be.visible')
        .within(() => {
          cy.contains('h2', 'Professional Experience')
            .should('be.visible')
          cy.contains('p', 'A journey through my professional career, showcasing my growth and contributions in the tech industry.')
            .should('be.visible')
        })
    })

    it('should display all experience entries correctly', () => {
      cy.get('[data-cy="experience-section"]')
        .find('[data-cy^="job-position-"]')
        .should('have.length', experiences.length)
        .each(($card, index) => {
          const experience = experiences[index]
          cy.get(`[data-cy="job-position-${index}"]`).scrollIntoView()

          cy.wrap($card)
            .within(() => {
              cy.contains('h3', experience.title)
                .should('be.visible')

              cy.contains('p', `${experience.company} | ${experience.location}`)
                .should('be.visible')

              cy.contains('p', experience.date)
                .should('be.visible')

              experience.details.forEach(detail => {
                console.log('detail', detail)
                cy.contains('li', detail)
                  .should('be.visible')
              })
            })
        })
    })

    it('should display experience entries in correct order', () => {
      cy.get('[data-cy="experience-section"]')
        .find('[data-cy^="job-position-"]')
        .each(($card, index) => {
          cy.get(`[data-cy="job-position-${index}"]`).scrollIntoView()
          cy.wrap($card)
            .contains('h3', experiences[index].title)
            .should('be.visible')
        })
    })
  })

  describe('Terminal Component', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('[data-cy="terminal-section"]').scrollIntoView()
    })

    it('should display the terminal section correctly', () => {
      cy.get('[data-cy="terminal-section"]')
        .should('be.visible')
        .within(() => {
          cy.contains('h2', 'Terminal').should('be.visible')
          cy.contains('p', 'Thanks for making it this far! Try out my interactive terminal to discover more about me.').should('be.visible')
        })
    })

    it('should display the initial welcome message', () => {
      cy.get('[data-cy="terminal-welcome"]')
        .should('be.visible')
        .within(() => {
          cy.contains('Welcome to Travis\'s Interactive Terminal! 🚀').should('be.visible')
          cy.contains('Type \'help\' to see available commands.').should('be.visible')
        })
    })

    it('should have a focused input field when clicking the terminal', () => {
      cy.get('[data-cy="terminal-body"]').click()
      cy.get('[data-cy="terminal-input"]').should('be.focused')
    })

    context('Command Tests', () => {
      it('should display help command output correctly', () => {
        const expectedCommands = [
          'help - Show this help message',
          'clear - Clear the terminal',
          'hobbies - See what I do for fun',
          'resume - Download my resume',
          'contact - Get my contact information',
          'fun - Discover fun commands',
          'secret - ???'
        ]

        cy.typeCommand('help')
        cy.contains('Available commands:').should('be.visible')
        expectedCommands.forEach(command => {
          cy.contains(command).should('be.visible')
        })
      })

      it('should display fun commands correctly', () => {
        cy.typeCommand('fun')
        cy.contains('🎲 Try these secret commands:').should('be.visible')
        cy.contains('trivia - Get a random trivia fact about me').should('be.visible')
        cy.contains('joke - Get a programming joke').should('be.visible')
        cy.contains('quote - Get an inspirational tech quote').should('be.visible')
      })

      it('should clear the terminal when using clear command', () => {
        cy.typeCommand('help')
        cy.contains('Available commands:').should('be.visible')
        cy.typeCommand('clear')
        cy.contains('Available commands:').should('not.exist')
        cy.get('[data-cy="terminal-welcome"]').should('be.visible')
      })

      it('should display hobbies information correctly', () => {
        const expectedHobbies = [
          'Visiting zoos and wildlife sanctuaries - I\'m passionate about animals!',
          'Going whale watching and enjoying beach activities when possible',
          'Playing classic RPGs (especially 16-bit era games like Final Fantasy)',
          'Enjoying casual sports like bowling, billiards/pool, miniature golf, and Top Golf',
          'Spending quality time with my fiancee and our pets (1 cat and 2 dogs)'
        ]

        cy.typeCommand('hobbies')

        cy.contains('🎮 When I\'m not coding, you can find me:')
          .should('be.visible')
        expectedHobbies.forEach(hobby => {
          cy.contains(hobby).should('be.visible')
        })

        cy.contains('Pro tip: Try typing \'secret\' for a surprise...')
          .should('be.visible')
          .and('have.class', 'text-light/50')
      })

      it('should display contact information with correct links', () => {
        const contactLinks = [
          {
            text: 'kalikoze@gmail.com',
            href: 'mailto:kalikoze@gmail.com',
            isExternal: false
          },
          {
            text: 'linkedin.com/in/travisrollins',
            href: 'https://www.linkedin.com/in/travisrollins/',
            isExternal: true
          },
          {
            text: 'github.com/kalikoze',
            href: 'https://github.com/kalikoze',
            isExternal: true
          }
        ];

        cy.typeCommand('contact')
        cy.contains('📫 Let\'s connect!').should('be.visible')

        contactLinks.forEach(({ text, href, isExternal }) => {
          cy.contains('a', text)
            .should('be.visible')
            .and('have.attr', 'href', href)
            .then($el => {
              if (isExternal) {
                cy.wrap($el)
                  .should('have.attr', 'target', '_blank')
                  .and('have.attr', 'rel', 'noopener noreferrer')
              }
            })
        });
      })

      it('should handle invalid commands', () => {
        cy.typeCommand('invalidcommand')
        cy.contains('Command not found: invalidcommand').should('be.visible')
        cy.contains('Type \'help\' for available commands.').should('be.visible')
      })

      it('should handle the secret command correctly', () => {
        cy.typeCommand('secret')
        cy.contains('🎧 You\'ve discovered a secret!').should('be.visible')
        cy.contains('Before diving into software development, I was actually a beat producer!').should('be.visible')
        cy.contains('Check out some of my beats on SoundCloud').should('be.visible')
          .and('have.attr', 'href', 'https://soundcloud.com/renegadeaudioproductions')
      })

      it('should display different trivia facts on repeated commands', () => {
        cy.typeCommand('trivia')
        cy.get('[data-cy="terminal-body"]')
          .invoke('text')
          .then((firstText) => {
            cy.typeCommand('trivia')
            cy.get('[data-cy="terminal-body"]')
              .invoke('text')
              .should('not.equal', firstText)
          })
      })

      it('should display different jokes on repeated commands', () => {
        cy.typeCommand('joke')
        cy.get('[data-cy="terminal-body"]')
          .invoke('text')
          .then((firstText) => {
            cy.typeCommand('joke')
            cy.get('[data-cy="terminal-body"]')
              .invoke('text')
              .should('not.equal', firstText)
          })
      })

      it('should display different quotes on repeated commands', () => {
        cy.typeCommand('quote')
        cy.get('[data-cy="terminal-body"]')
          .invoke('text')
          .then((firstText) => {
            cy.typeCommand('quote')
            cy.get('[data-cy="terminal-body"]')
              .invoke('text')
              .should('not.equal', firstText)
          })
      })

      it('should display trivia command output corectly', () => {
        cy.typeCommand('trivia');
        cy.contains('🎯 Random trivia about me:').should('be.visible');
        cy.contains('Type \'trivia\' again to learn another fact!')
      })


      it('should display joke command output correctly', () => {
        cy.typeCommand('joke')
        cy.contains('😄 Here\'s a programming joke:').should('be.visible')
        cy.contains('Type \'joke\' again for another laugh!').should('be.visible')
      })

      it('should display quote command output correctly', () => {
        cy.typeCommand('quote')
        cy.contains('💡 Inspirational tech quote:').should('be.visible')
        cy.contains('Type \'quote\' again for more inspiration!').should('be.visible')
      })

      it('should show correct reminaing counts for trivia', () => {
        const totalTrivia = triviaFacts.length
        cy.typeCommand('trivia')
        cy.contains(`${totalTrivia - 1} more to discover`).should('be.visible')
      })

      it('should show correct remaining counts for jokes', () => {
        const totalJokes = programmingJokes.length
        cy.typeCommand('joke')
        cy.contains(`${totalJokes - 1} more jokes to go`).should('be.visible')
      })

      it('should show correct remaining counts for quotes', () => {
        const totalQuotes = techQuotes.length
        cy.typeCommand('quote')
        cy.contains(`${totalQuotes - 1} more quotes available`).should('be.visible')
      })

      it('should reset trivia when all have been shown', () => {
        for (let i = 0; i <= triviaFacts.length - 1; i++) {
          cy.typeCommand('trivia')
        }
        cy.contains('You\'ve discovered all my trivia facts! Type \'trivia\' again to start over.')
          .should('be.visible')
      })

      it('should reset jokes when all have been shown', () => {
        for (let i = 0; i <= programmingJokes.length - 1; i++) {
          cy.typeCommand('joke')
        }
        cy.contains('You\'ve heard all my jokes! Type \'joke\' again to start over.')
          .should('be.visible')
      })

      it('should reset quotes when all have been shown', () => {
        for (let i = 0; i <= techQuotes.length - 1; i++) {
          cy.typeCommand('quote')
        }
        cy.contains('You\'ve seen all the quotes! Type \'quote\' again to start over.')
          .should('be.visible')
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