import { Link } from 'react-router-dom'
import './ProjectPage.css'

export default function ProjectPage({ eyebrow, title, titleEm, subtitle, tags, meta, children }) {
  return (
    <main>
      <div className="back-link"><Link to="/projects">← All projects</Link></div>

      <div className="proj-hero">
        <div>
          <p className="proj-eyebrow">{eyebrow}</p>
          <h1 className="proj-title">
            {titleEm ? <><em>{titleEm}</em>{title && ` — ${title}`}</> : title}
          </h1>
          <p className="proj-subtitle">{subtitle}</p>
          <div className="proj-tags">{tags}</div>
        </div>
        {meta && <aside className="proj-meta">{meta}</aside>}
      </div>

      <div className="proj-content">
        {children}
      </div>
    </main>
  )
}

/* Small helpers used inside project pages */
export function RoleCard({ label, title, children }) {
  return (
    <div className="role-card">
      <p className="role-card-label">{label}</p>
      <h3 className="role-card-title">{title}</h3>
      {children}
    </div>
  )
}

export function RoleList({ items }) {
  return (
    <ul className="role-list">
      {items.map((item, i) => (
        <li key={i}><span className="role-dot" /><span>{item}</span></li>
      ))}
    </ul>
  )
}

export function MetaItem({ label, value }) {
  return (
    <div className="meta-item">
      <span className="meta-label">{label}</span>
      <span className="meta-value">{value}</span>
    </div>
  )
}

export function PressCard({ href, source, title, excerpt }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="press-card">
      <div className="press-logo">H-Farm</div>
      <div className="press-body">
        <p className="press-source">{source}</p>
        <p className="press-title">{title}</p>
        <p className="press-excerpt">{excerpt}</p>
      </div>
      <span className="press-arrow">→</span>
    </a>
  )
}

export function StatRow({ stats }) {
  return (
    <div className="stat-row">
      {stats.map(s => (
        <div className="stat-card" key={s.label}>
          <span className="stat-num">{s.num}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

export function TeamGrid({ members }) {
  return (
    <div className="team-grid">
      {members.map(m => (
        <div className="team-card" key={m.name}>
          <p className="team-name">{m.name}</p>
          <p className="team-role">{m.role}</p>
        </div>
      ))}
    </div>
  )
}

export function LinkRow({ children }) {
  return <div className="link-row">{children}</div>
}

export function WipBanner() {
  return (
    <div className="wip-banner">
      <div className="wip-dot" />
      <p className="wip-text"><strong>Active development.</strong> This project is still being built — this page will be updated as it progresses.</p>
    </div>
  )
}
