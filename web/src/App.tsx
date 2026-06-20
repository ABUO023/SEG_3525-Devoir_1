import { useEffect, type ReactNode } from 'react'
import {
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import mainLogo from '../../images/MainlogoFull.png'

type CaseStudy = {
  id: string
  title: string
  domain: string
  image: string
  detail: string
  outcome: string
  status: 'published' | 'coming-soon'
  prototypeUrl?: string
  mockupsUrl?: string
  repoUrl?: string
  documentationUrl?: string
  assignmentLabel?: string
  heroEmphasis?: string
  personasHeading?: string
  personasEmphasis?: string
  designHeading?: string
  designEmphasis?: string
  personas?: Persona[]
  visualDesign?: string[]
}

type Persona = {
  name: string
  characteristics: string
  technology: string
  domainRelationship: string
  goal: string
}

type Project = {
  title: string
  href: string
  category: string
  summary: string
}

type EditorialButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'link'
}

const caseStudies: CaseStudy[] = [
  {
    id: 'velovite',
    title: 'VéloVite',
    domain: 'Urban Bike Repair Shop',
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=80',
    detail:
      'A high-fidelity service website for an urban bike repair shop, designed around emergency walk-ins, location clarity, and fast tune-up booking.',
    outcome: 'Live prototype, mockups, personas, and service flow',
    status: 'published',
    prototypeUrl: 'https://d2.byaditya.com',
    mockupsUrl: 'https://d2.byaditya.com/mockups',
    repoUrl: 'https://github.com/ABUO023/SEG_3525-Devoir_2',
    assignmentLabel: 'Devoir 2',
    heroEmphasis: 'Service Website',
    personasHeading: 'Designed for',
    personasEmphasis: 'two riders',
    designHeading: 'Industrial',
    designEmphasis: 'Clean',
    personas: [
      {
        name: 'Nahar',
        characteristics: 'Student on a tight budget who uses her bike every day to get to college.',
        technology: 'Mobile-first and uses social media recommendations to decide where to go.',
        domainRelationship:
          'Depends on her bike but does not know how to perform complex repairs herself.',
        goal:
          'Find opening hours, shop location, and whether emergency walk-ins are available without an appointment.',
      },
      {
        name: 'Eric',
        characteristics: 'Professional, passionate road cyclist, and detail-oriented service customer.',
        technology: 'Expert user who prefers fast, accurate online booking instead of calling.',
        domainRelationship:
          'Knowledgeable about bike components and looking for high-quality repair expertise.',
        goal: 'Schedule a complete tune-up appointment for his road bike.',
      },
    ],
    visualDesign: [
      'Industrial Clean theme using dark grays for reliability and vibrant orange for action.',
      'Montserrat typography for a modern, robust service-brand tone.',
      'Card-based service organization and a step-by-step booking flow to reduce cognitive load.',
      'High text/background contrast so the repair and booking information stays accessible.',
    ],
  },
  {
    id: 'triviaup-memory-game',
    title: 'Trivia UP',
    domain: 'Trivia Memory Game',
    image:
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1400&q=80',
    detail:
      'A clean trivia game that pulls questions from OpenTDB, adds a Next.js proxy layer for tracking previously served games, and keeps quick rounds readable across light and dark modes.',
    outcome: 'Live prototype, mockups, personas, scoring flow, and source code',
    status: 'published',
    prototypeUrl: 'https://triviaup.adityabaindur.com/',
    mockupsUrl: 'https://triviaup.adityabaindur.com/mockups',
    repoUrl: 'https://github.com/Aditya-Baindur/TriviaUP',
    documentationUrl: 'https://docs.adityabaindur.dev/docs/TriviaUP',
    assignmentLabel: 'Devoir 3',
    heroEmphasis: 'Memory Game',
    personasHeading: 'Designed for',
    personasEmphasis: 'quick play',
    designHeading: 'Clean',
    designEmphasis: 'Game Flow',
    personas: [
      {
        name: 'Paul',
        characteristics: 'Student on a tight budget who wants a distraction during boring lectures.',
        technology: 'Mobile-first and uses social media recommendations to decide what is worth trying.',
        domainRelationship:
          'Looks for a simple, no-fee game that feels polished, entertaining, and lightly challenging.',
        goal:
          'Play on the go, on the metro, with friends, or alone while expanding his general knowledge.',
      },
      {
        name: 'Eric',
        characteristics:
          'Retired professional who likes memory and trivia games to keep his skills sharp as he gets older.',
        technology: 'Beginner user who knows how to open a browser and navigate basic web pages.',
        domainRelationship:
          'Knowledgeable in trivia and enjoys playing alone, with his wife, and with his grandkids.',
        goal: 'Use a simple game that is easy to play with family during game nights.',
      },
    ],
    visualDesign: [
      'A Next.js backend proxy wraps OpenTDB so repeated games can be tracked with a lightweight cookie layer.',
      'The centered card layout keeps each question and answer group visually separate, especially on phones.',
      'Neutral surfaces, black typography, and a red primary accent make active answers and controls easy to find.',
      'Light and dark mode support keeps quick rounds readable without making the interface visually loud.',
    ],
  },
  {
    id: 'ecommerce-site',
    title: 'E-Commerce Storefront',
    domain: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80',
    detail:
      'A storefront concept focused on browse, filtering, product detail, and checkout decisions with friction reduced at every step.',
    outcome: 'Catalog browsing and checkout clarity',
    status: 'coming-soon',
  },
  {
    id: 'analytics-visualization',
    title: 'Analytics + Visualization Site',
    domain: 'Data Visualization',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    detail:
      'A BI, sports, or finance dashboard where dense data is organized into readable signals, confident hierarchy, and glanceable comparisons.',
    outcome: 'Dashboard hierarchy and data storytelling',
    status: 'coming-soon',
  },
]

const projects: Project[] = [
  {
    title: 'CollabBoard',
    href: 'https://collabboard.dev',
    category: 'Product',
    summary: 'Real-time collaboration platform with almost zero signup friction.',
  },
  {
    title: 'Focusify',
    href: 'https://focusify.adityabaindur.dev',
    category: 'Product',
    summary: 'Pomodoro study helper built with Cairo on Starknet, and winner of uOttaHack 6.',
  },
  {
    title: 'lnkshortner',
    href: 'https://s.vicilabs.dev',
    category: 'Edge app',
    summary: 'Cloudflare Workers URL shortener with custom slugs and low-latency redirects.',
  },
  {
    title: 'R2-list',
    href: 'https://adityabaindur.dev/r2',
    category: 'Developer tool',
    summary: 'Cloudflare R2 object admin dashboard with analytics and a UI/UX first approach.',
  },
  {
    title: 'QuickFind',
    href: 'https://github.com/Aditya-Baindur/quickFind',
    category: 'CLI',
    summary: 'Terminal utility for instant directory bookmarking and navigation in large codebases.',
  },
  {
    title: 'Trivia UP',
    href: 'https://triviaup.adityabaindur.com',
    category: 'Game',
    summary: 'A Vite trivia game built around quick rounds and lightweight interaction patterns.',
  },
]

const processSteps = [
  {
    title: 'Frame the outcome',
    detail: 'Start with the user goal, the project KPI, and the smallest useful version worth testing.',
  },
  {
    title: 'Build the real slice',
    detail: 'Prototype with production-shaped tools instead of polishing throwaway screens.',
  },
  {
    title: 'Instrument behavior',
    detail: 'Use analytics, logs, and interaction signals to see where the product helps or fails.',
  },
  {
    title: 'Iterate with restraint',
    detail: 'Ship small, deliberate improvements until the interface feels obvious and reliable.',
  },
]

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const getCaseStudyPath = (study: CaseStudy) =>
  study.status === 'published' ? `/case-study/${study.id}` : `/coming-soon/${study.id}`

function EditorialChrome() {
  return (
    <>
      <div className="paper-grain" aria-hidden="true" />
      <div className="editorial-grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  )
}

function EditorialButton({ children, href, to, onClick, variant = 'primary' }: EditorialButtonProps) {
  const className = `editorial-button editorial-button--${variant}`
  const content = (
    <>
      <span className="editorial-button__fill" aria-hidden="true" />
      <span className="editorial-button__label">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {content}
    </button>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <div className="section-header">
      <div className="section-rule" aria-hidden="true" />
      <p className="overline">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function HomePage() {
  return (
    <main className="editorial-page">
      <header className="hero-section" id="top">
        <nav className="editorial-container editorial-nav" aria-label="Portfolio sections">
          <Link className="logo-lockup" to="/" aria-label="Aditya Baindur portfolio home">
            <img src={mainLogo} alt="Aditya Baindur logo"  className="h-3 w-3 object-contain"/>
          </Link>
          <div className="nav-links" aria-label="Jump to required portfolio sections">
            <button type="button" onClick={() => scrollToSection('about')}>
              About
            </button>
            <button type="button" onClick={() => scrollToSection('how-i-work')}>
              Process
            </button>
            <button type="button" onClick={() => scrollToSection('case-studies')}>
              Case Studies
            </button>
          </div>
        </nav>

        <section className="editorial-container hero-layout" aria-labelledby="hero-title">
          <div className="hero-title-block">
            <h1 id="hero-title">
              Full-stack systems on the <em>edge</em> 
            </h1>
            <p>
              I am Aditya Baindur, a fourth-year Computer Science student at uOttawa and a
              Junior Developer with uOttawa Central IT.
            </p>
            <div className="hero-actions">
              <EditorialButton onClick={() => scrollToSection('case-studies')}>
                Case studies
              </EditorialButton>
              <EditorialButton variant="secondary" href="https://github.com/Aditya-Baindur">
                Github profile
              </EditorialButton>
            </div>
          </div>

          <aside className="hero-portrait" aria-label="Portfolio identity statement">
            <span className="vertical-label">Computer Science / uOttawa</span>
            <div className="hero-logo-frame">
              <img src={mainLogo} alt="Aditya Baindur wordmark" />
            </div>
            <p>
              Interfaces should feel composed before they feel impressive: clear hierarchy,
              restrained motion, and enough structure that the work can speak first.
            </p>
          </aside>
        </section>
      </header>

      <section className="editorial-section about-section" id="about">
        <div className="editorial-container about-layout">
          <SectionHeader
            eyebrow="01 "
            title={
              <>
                About <em>You</em>
              </>
            }
          />
          <article className="about-copy">
            <p className="drop-cap">
              I design and build software systems, full-stack products, and developer tools with a
              focus on platform and infrastructure work. I care about fast interfaces, reliable
              foundations, and product decisions that users can understand quickly.
            </p>
            <p>
              Most of my project breakdowns, architecture notes, and implementation details live at {' '}
              <a href='https://docs.adityabaindur.com' >docs.adityabaindur.com</a>. This portfolio is the shorter front door: who I am, how I
              work, and where the SEG3525 case studies live as they move from placeholders to
              finished prototypes.
            </p>
          </article>
          <aside className="about-index" aria-label="Current focus areas">
            <p className="overline">Current Index</p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>Junior Developer, uOttawa Central IT</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>React, Vite, Cloudflare, platform tooling</dd>
              </div>
              <div>
                <dt>Preference</dt>
                <dd>Fast systems, quiet interfaces, measurable outcomes</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="editorial-section dark-section" id="how-i-work">
        <div className="editorial-container process-layout">
          <SectionHeader
            eyebrow="02"
            title={
              <>
                How <em>You</em> Work
              </>
            }
          />
          <div className="process-intro">
            <p>
              I work across the stack with React, Vite, Next.js, Flask, Spring Boot, PostgreSQL,
              SQLite, Docker, Kubernetes, Helm, and Cloudflare products like R2 and D1.
            </p>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section projects-section" id="projects">
        <div className="editorial-container projects-layout">
          <SectionHeader
            eyebrow="Selected Work"
            title={
              <>
                Shipped <em>Projects</em>
              </>
            }
          />
          <div className="project-list">
            {projects.map((project) => (
              <a key={project.title} className="project-row" href={project.href}>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section case-section" id="case-studies">
        <div className="editorial-container case-layout">
          <SectionHeader
            eyebrow="03"
            title={
              <>
                Case <em>Studies</em>
              </>
            }
          />
          <p className="case-intro">
            A curated list of case studies : 
          </p>
          <div className="case-grid">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className={`case-card case-card--${study.status}`}
              >
                <Link to={getCaseStudyPath(study)} aria-label={`Open ${study.title} case study`}>
                  <figure className="case-image-frame">
                    <img src={study.image} alt={`${study.title} concept`} />
                    <figcaption className="vertical-label">Design {index + 1}</figcaption>
                  </figure>
                  <div className="case-copy">
                    <span>{study.domain}</span>
                    <h3>{study.title}</h3>
                    <p>{study.detail}</p>
                    <strong>{study.outcome}</strong>
                    <small>{study.status === 'published' ? 'Published case study' : 'Coming soon'}</small>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="editorial-footer">
        <div className="editorial-container footer-layout">
          <p>Aditya Baindur / SEG3525 Portfolio</p>
          <a href="https://d1.byaditya.com">d1.byaditya.com</a>
        </div>
      </footer>
    </main>
  )
}

function PublishedCaseStudyPage() {
  const { id } = useParams()
  const study = caseStudies.find((item) => item.id === id)

  if (id === 'service-site') {
    return <Navigate to="/case-study/velovite" replace />
  }

  if (!study) {
    return <Navigate to="/" replace />
  }

  if (study.status !== 'published') {
    return <Navigate to={`/coming-soon/${study.id}`} replace />
  }

  return (
    <main className="case-study-page">
      <div className="editorial-container case-study-layout">
        <Link className="back-link" to="/">
          Portfolio home
        </Link>

        <section className="case-study-hero">
          <div className="section-rule" aria-hidden="true" />
          <p className="overline">Published Case Study / {study.assignmentLabel ?? 'Devoir'}</p>
          <h1>
            {study.title} <em>{study.heroEmphasis ?? study.domain}</em>
          </h1>
          <p className="drop-cap">
            {study.detail}
          </p>
          <div className="case-study-actions">
            {study.prototypeUrl && <EditorialButton href={study.prototypeUrl}>Open prototype</EditorialButton>}
            {study.mockupsUrl && (
              <EditorialButton variant="secondary" href={study.mockupsUrl}>
                View mockups
              </EditorialButton>
            )}
            {study.repoUrl && (
              <EditorialButton variant="secondary" href={study.repoUrl}>
                Source code
              </EditorialButton>
            )}
            {study.documentationUrl && (
              <EditorialButton variant="secondary" href={study.documentationUrl}>
                Documentation
              </EditorialButton>
            )}
          </div>
        </section>

        <figure className="case-study-visual">
          <img src={study.image} alt={`${study.title} ${study.domain} concept`} />
          <figcaption>
            <span>{study.domain}</span>
            <strong>{study.outcome}</strong>
          </figcaption>
        </figure>
      </div>

      <section className="editorial-section case-study-section">
        <div className="editorial-container case-study-content-grid">
          <SectionHeader
            eyebrow="Personas"
            title={
              <>
                {study.personasHeading ?? 'Designed for'} <em>{study.personasEmphasis ?? 'users'}</em>
              </>
            }
          />
          <div className="persona-list">
            {study.personas?.map((persona) => (
              <article key={persona.name} className="persona-card">
                <h2>{persona.name}</h2>
                <dl>
                  <div>
                    <dt>Characteristics</dt>
                    <dd>{persona.characteristics}</dd>
                  </div>
                  <div>
                    <dt>Technology</dt>
                    <dd>{persona.technology}</dd>
                  </div>
                  <div>
                    <dt>Domain Relationship</dt>
                    <dd>{persona.domainRelationship}</dd>
                  </div>
                  <div>
                    <dt>Goal</dt>
                    <dd>{persona.goal}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section dark-section case-study-section">
        <div className="editorial-container case-study-content-grid">
          <SectionHeader
            eyebrow="Design Direction"
            title={
              <>
                {study.designHeading ?? 'Design'} <em>{study.designEmphasis ?? 'Direction'}</em>
              </>
            }
          />
          <div className="design-note-list">
            {study.visualDesign?.map((item, index) => (
              <article key={item} className="design-note">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ComingSoonPage() {
  const { id } = useParams()
  const study = caseStudies.find((item) => item.id === id)

  if (id === 'service-site') {
    return <Navigate to="/case-study/velovite" replace />
  }

  if (!study) {
    return <Navigate to="/" replace />
  }

  if (study.status === 'published') {
    return <Navigate to={`/case-study/${study.id}`} replace />
  }

  return (
    <main className="coming-page">
      <div className="editorial-container coming-layout">
        <Link className="back-link" to="/">
          Portfolio home
        </Link>

        <section className="coming-copy-panel">
          <div className="section-rule" aria-hidden="true" />
          <p className="overline">Coming Soon Placeholder</p>
          <h1>
            {study.title.split(' ').slice(0, -1).join(' ')} <em>{study.title.split(' ').at(-1)}</em>
          </h1>
          <p className="study-domain">{study.domain}</p>
          <p className="drop-cap">
            {study.detail} This is the required assignment placeholder page for the future case
            study. The completed version will add research notes, visual decisions, prototype
            screens, and implementation details once that design is built.
          </p>
          <EditorialButton to="/">Return home</EditorialButton>
        </section>

        <figure className="coming-visual">
          <span className="vertical-label">Planned Focus</span>
          <img src={study.image} alt={`${study.title} concept preview`} />
          <figcaption>
            <span>{study.domain}</span>
            <strong>{study.outcome}</strong>
          </figcaption>
        </figure>
      </div>
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <ScrollToTop />
        <EditorialChrome />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:id" element={<PublishedCaseStudyPage />} />
          <Route path="/coming-soon/:id" element={<ComingSoonPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
