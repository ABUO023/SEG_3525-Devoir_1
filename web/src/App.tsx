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
    title: 'Local Service Website',
    domain: 'Service Website',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80',
    detail:
      'I am building this for a local service business (dentist / bike repair / salon type). Main goal is super simple: easy booking + contact details you cant miss.',
  },
  {
    id: 'triviaup-memory-game',
    title: 'Trivia UP Memory Mode',
    domain: 'Memory Game',
    image:
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1400&q=80',
    detail:
      'I am building this as a Trivia UP memory-game direction. Fast rounds, clean UI, and score tracking so it stays competitive but still fun.',
  },
  {
    id: 'ecommerce-site',
    title: 'E-Commerce Storefront',
    domain: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80',
    detail:
      'I am building this as an e-commerce flow with browse, filter, product page, then checkout. Biggest focus is reducing checkout friction.',
  },
  {
    id: 'analytics-visualization',
    title: 'Analytics + Visualization Site',
    domain: 'Data Visualization',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    detail:
      'I am building this as an analytics/visualization dashboard (BI/sport/finance style). There is a lot of data, but I want it readable at a glance.',
  },
]

const projects = [
  {
    title: 'CollabBoard',
    href: 'https://collabboard.dev',
    summary: 'Real-time collaboration platform with almost zero signup friction.',
  },
  {
    title: 'Focusify',
    href: 'https://focusify.adityabaindur.dev',
    summary:
      'A pomodoro study helper built on Web3, Cairo, Etherium and the Starknet network - Winner UOttawa Hack 6.',
  },
  {
    title: 'lnkshortner',
    href: 'https://s.vicilabs.dev',
    summary:
      'A modern URL shortener on Cloudflare Workers where you choose the slug and control the domain.',
  },
  {
    title: 'R2-list',
    href: 'https://adityabaindur.dev/r2',
    summary:
      'Cloudflare R2 object admin dashboard with Analytics and a UI/UX first approach.',
  },
  {
    title: 'QuickFind',
    href: 'https://github.com/Aditya-Baindur/quickFind',
    summary: 'Terminal utility for instant directory bookmarking and navigation in large codebases.',
  },
]

function HomePage() {
  return (
    <main>
      <header className="hero-shell">
        <div className="container py-5 py-lg-6">
          <img src={mainLogo} alt="Aditya Baindur logo" className="hero-logo mb-4" />
          <p className="eyebrow mb-3">Aditya Baindur • Software Developer</p>
          <h1 className="display-title mb-4">Build fast. Fix fast. Ship.</h1>
          <p className="hero-copy mb-4">
            I am Aditya Baindur, a 4th year Computer Science Student @uOttawa. This summer,
            I work @uOttawa Central IT as a Junior Developer.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-outline-dark btn-sm px-3 mono-btn" href="https://docs.adityabaindur.com">
              Read Project Docs
            </a>
            <a className="btn btn-dark btn-sm px-3 mono-btn" href="https://github.com/Aditya-Baindur">
              View Github
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
              I design and build software systems and full-stack applications, with a focus on
              platform and infrastructure tooling.
            </p>
            <p className="section-copy mb-0">
              Most of my projects have full docs at docs.adityabaindur.com. If you want the
              complete breakdowns, architecture notes and implementation details, thats where it
              all lives.
            </p>
          </div>
        </div>
      </section>

      <section id="how-i-work" className="container pb-5">
        <div className="work-card p-4 p-lg-5">
          <h2 className="section-title mb-3">How You Work</h2>
          <p className="section-copy">
            I have worked with tech across the stack, from Next.js and Vite for frontend with
            React, Tailwind CSS and shadcn/ui to Python Flask and Spring Boot, PostgreSQL,
            SqlLite, while implementing globally scalable solutions with Helm, K8 and Docker.
          </p>
          <p className="section-copy mb-0">
            I use Cloudflare products a lot, especially R2 and D1. I also care a lot about
            analytics and user logging because that tells you if the product is actually
            working. In general I work in quick itterations with clear KPI's to achive the
            project's objective.
          </p>
        </div>
      </section>

      <section id="projects" className="container pb-5">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <h2 className="section-title mb-0">Projects</h2>
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
        <h2 className="section-title mb-4">To Come</h2>
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
                    View placeholder page
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
        <p className="eyebrow mb-2">A venir</p>
        <h1 className="section-title mb-3">{study.title}</h1>
        <p className="study-domain mb-3">{study.domain}</p>
        <p className="section-copy mb-4">
          {study.detail} For now this is the required coming soon placeholder page. Full case
          study (process + build details) will be added once I build that project fully.
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
