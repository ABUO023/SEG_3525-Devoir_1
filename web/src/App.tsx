import { HashRouter, Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import mainLogo from '../../images/MainlogoFull.png'

type CaseStudy = {
  id: string
  title: string
  domain: string
  image: string
  detail: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'service-site',
    title: 'PulseCare Studio',
    domain: 'Service Website',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80',
    detail:
      'A service-led website concept for a modern dental and wellness studio focused on trust, booking clarity, and local search visibility.',
  },
  {
    id: 'triviaup-memory-game',
    title: 'Trivia UP: Memory Sprint',
    domain: 'Memory Game',
    image:
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1400&q=80',
    detail:
      'A game variation of Trivia UP that adds memory rounds, speed scoring, and category streaks to keep the session social and competitive.',
  },
  {
    id: 'ecommerce-site',
    title: 'Northline Supply',
    domain: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80',
    detail:
      'A product-first online storefront with strong filtering, decisive product detail pages, and a checkout flow optimized for speed.',
  },
  {
    id: 'analytics-visualization',
    title: 'SignalBoard Analytics',
    domain: 'Data Visualization',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    detail:
      'An analysis dashboard concept that translates dense telemetry into clean stories for operations and business stakeholders.',
  },
]

const projects = [
  {
    title: 'CollabBoard',
    href: 'https://collabboard.dev',
    summary: 'Realtime whiteboard for collaborative ideation and planning.',
  },
  {
    title: 'Focusify',
    href: 'https://focusify.adityabaindur.dev',
    summary:
      'Pomodoro study helper built on Starknet and Cairo; winner at uOttawa Hack 6.',
  },
  {
    title: 'R2-list',
    href: 'https://adityabaindur.dev/r2',
    summary:
      'Cloudflare R2 object admin dashboard with analytics and workflow-driven UX.',
  },
]

function HomePage() {
  return (
    <main>
      <header className="hero-shell">
        <div className="container py-5 py-lg-6">
          <img src={mainLogo} alt="Aditya Baindur logo" className="hero-logo mb-4" />
          <p className="eyebrow mb-3">Aditya Baindur • Software Developer</p>
          <h1 className="display-title mb-4">Build. Measure. Ship.</h1>
          <p className="hero-copy mb-4">
            I am a 4th year Computer Science student at uOttawa and currently a Junior
            Developer at uOttawa Central IT. My work blends platform thinking, frontend
            systems, and cloud tooling to ship practical products that scale.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-outline-dark btn-sm px-3 mono-btn" href="https://docs.adityabaindur.com">
              Read Project Docs
            </a>
            <a className="btn btn-dark btn-sm px-3 mono-btn" href="https://github.com/ABUO023/SEG_3525-Devoir_1">
              View Repository
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <h2 className="section-title">About You</h2>
          </div>
          <div className="col-lg-8">
            <p className="section-copy">
              I enjoy building software where product decisions and engineering tradeoffs are
              visible. Most of my projects sit at the intersection of React-based interfaces,
              API architecture, and infrastructure that stays predictable under load.
            </p>
            <p className="section-copy mb-0">
              I am especially interested in edge-first delivery with Cloudflare services,
              robust analytics instrumentation, and tooling that helps teams iterate without
              losing quality.
            </p>
          </div>
        </div>
      </section>

      <section id="how-i-work" className="container pb-5">
        <div className="work-card p-4 p-lg-5">
          <h2 className="section-title mb-3">How You Work</h2>
          <p className="section-copy">
            I work in short cycles with concrete metrics: identify the bottleneck, deliver a
            thin version fast, instrument behavior, then refine. Across projects I have used
            Next.js, Vite, Tailwind, shadcn/ui, Flask, Spring Boot, PostgreSQL, SQLite,
            Docker, Kubernetes, and Helm.
          </p>
          <p className="section-copy mb-0">
            A large part of my workflow is making products observable. I routinely wire in
            telemetry, event logging, and performance monitoring so design decisions are based
            on behavior, not guesswork.
          </p>
        </div>
      </section>

      <section id="projects" className="container pb-5">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <h2 className="section-title mb-0">Recent Work</h2>
          <a className="small-link" href="https://docs.adityabaindur.com">
            docs.adityabaindur.com
          </a>
        </div>
        <div className="row g-3">
          {projects.map((project) => (
            <article key={project.title} className="col-md-6 col-lg-4">
              <a className="project-card d-block h-100" href={project.href}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="case-studies" className="container pb-5">
        <h2 className="section-title mb-4">Case Study Placeholders</h2>
        <div className="row g-4">
          {caseStudies.map((study) => (
            <article key={study.id} className="col-md-6">
              <div className="study-card h-100">
                <img src={study.image} className="study-image" alt={`${study.title} concept`} />
                <div className="p-3 p-lg-4">
                  <p className="study-domain mb-1">{study.domain}</p>
                  <h3 className="study-title">{study.title}</h3>
                  <p className="study-copy mb-3">{study.detail}</p>
                  <Link className="btn btn-outline-dark btn-sm mono-btn" to={`/coming-soon/${study.id}`}>
                    Open Coming Soon Page
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function ComingSoonPage() {
  const { id } = useParams()
  const study = caseStudies.find((item) => item.id === id)

  if (!study) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="container py-5">
      <div className="coming-shell p-4 p-lg-5">
        <p className="eyebrow mb-2">Future Design</p>
        <h1 className="section-title mb-3">{study.title}</h1>
        <p className="study-domain mb-3">{study.domain}</p>
        <p className="section-copy mb-4">
          {study.detail} This page is the required placeholder and will be expanded into a full
          case study with process breakdown, implementation choices, and final metrics.
        </p>
        <Link className="btn btn-dark btn-sm mono-btn" to="/">
          Back to Portfolio Home
        </Link>
      </div>
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coming-soon/:id" element={<ComingSoonPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
