import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">IB Diploma Candidate · Venice, Italy</p>
          <h1 className="hero-name">Hi, I'm<br /><em>Valerio.</em></h1>
          <p className="hero-tagline">
            I build things — rovers, apps, dashboards, communities. Currently studying at
            H-Farm International School and always working on something new.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">View my work</Link>
            <a href="https://docs.google.com/document/d/1AP40JTY98Pm3paeUNzoQ=Hk-aIFsQpomKnIpvOkxf93U/edit?usp=sharing" className="btn-ghost" target="_blank" rel="noreferrer">View CV</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/valerio-martignon"      className="social-link" aria-label="GitHub"    target="_blank" rel="noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/risa-martignon/"                                 className="social-link" aria-label="LinkedIn"  target="_blank" rel="noreferrer">in</a>
            <a href="https://www.instagram.com/risa.martignon/"                                 className="social-link" aria-label="Instagram" target="_blank" rel="noreferrer">IG</a>
          </div>
        </div>

        {/* IB subjects badge */}
        <aside className="hero-badge">
          <span className="badge-heading">IB Diploma Programme</span>
          {[
            { name: 'Maths AA',       level: 'HL' },
            { name: 'Computer Science', level: 'HL' },
            { name: 'Physics',        level: 'HL' },
            { name: 'English A Lit',  level: 'HL' },
          ].map(s => (
            <div className="subject-row" key={s.name}>
              <span className="subject-name">{s.name}</span>
              <span className="subject-level hl">{s.level}</span>
            </div>
          ))}
          <div className="badge-divider" />
          {[
            { name: 'Italian B',  level: 'SL' },
            { name: 'Philosophy', level: 'SL' },
          ].map(s => (
            <div className="subject-row" key={s.name}>
              <span className="subject-name">{s.name}</span>
              <span className="subject-level sl">{s.level}</span>
            </div>
          ))}
          <div className="badge-divider" />
          <span className="badge-sub">H-ELEVATE Scholar · SAT 1520</span>
        </aside>
      </section>

      <div className="section-divider"><hr /></div>

      {/* ── SELECTED PROJECTS ── */}
      <section className="section">
        <p className="section-eyebrow">A taste</p>
        <h2 className="section-title">Selected projects</h2>
        <div className="projects-grid">
          {[
            {
              to:   '/projects/efr',
              tag:  'VERDA · Ongoing',
              title:'EFR — Environmentally Friendly Rover',
              desc: 'Autonomous land rover with rocker bogie suspension, LiDAR, YOLOv8 object detection, and a live telemetry dashboard.',
              chips: ['Raspberry Pi 5', 'ROS2', 'YOLOv8', 'Supabase'],
            },
            {
              to:   '/projects/pwa',
              tag:  'Solo · 2026',
              title:'Mental Health Tracking PWA',
              desc: 'Offline-first progressive web app for daily mental health logging with automatic sync and role-based access control.',
              chips: ['React', 'Dexie.js', 'Supabase', 'Vercel'],
            },
            {
              to:   '/projects/cloud-chamber',
              tag:  'Research · 2024',
              title:'Wilson Cloud Chamber',
              desc: 'Functioning cloud chamber to visualise ionising radiation, with educational materials produced as an MYP Personal Project.',
              chips: ['Hardware', 'Physics', 'MYP'],
            },
          ].map(p => (
            <Link to={p.to} className="project-card" key={p.to}>
              <span className="project-tag">{p.tag}</span>
              <h3 className="project-title-card">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-chips">
                {p.chips.map(c => <span className="stack-chip" key={c}>{c}</span>)}
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '1.75rem' }}>
          <Link to="/projects" className="btn-ghost">See all projects →</Link>
        </div>
      </section>

      <div className="section-divider"><hr /></div>

      {/* ── ABOUT ── */}
      <section className="section">
        <p className="section-eyebrow">About me</p>
        <h2 className="section-title">More than just the CV</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a <strong>student, builder, and community person</strong> based in Venice. I study the IB at H-Farm
            International School, where I focus on maths, computer science, and physics — and somehow also end up
            running the student council and redesigning the school newspaper.</p>
            <p>I care about making technology <strong>accessible and useful</strong>, whether that's a rover sending
            environmental data to a live dashboard, an app that helps people track their mental health, or a website
            that makes the school paper easier to navigate.</p>
            <p>When I'm not coding, I'm fencing, crocheting, or deep in a good book.</p>
          </div>
          <ul className="facts-list">
            {[
              'Student Council President, H-Farm International School',
              'Co-founder of VERDA — environmental data analysis team',
              'Published poet in jGirls+ Magazine (2025)',
              'Community manager for 150k+ member House MD Reddit',
              'Regional qualifier, Italian Olympiads in Maths & Informatics',
              'Freelance web designer & tech support',
              'Fencer (épée) since age 7',
              'Triple citizen: UK, USA, Italy',
            ].map(f => (
              <li key={f}><span className="fact-dot" /><span>{f}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section-divider"><hr /></div>

      {/* ── CONTACT ── */}
      <section className="section contact-section">
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-title">Say hello</h2>
        <p className="contact-sub">Whether it's a collaboration, an opportunity, or just a chat — I'd love to hear from you.</p>
        <a href="mailto:valeriosaviomartignon@gmail.com" className="btn-primary">
          valeriosaviomartignon@gmail.com
        </a>
      </section>

    </main>
  )
}
