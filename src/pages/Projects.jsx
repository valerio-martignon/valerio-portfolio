import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const ALL_PROJECTS = [
  {
    to: '/projects/efr',
    year: '2025–',
    section: 'Ongoing',
    tags: ['VERDA', 'Hardware', 'Software'],
    team: 'Team of 3',
    title: 'EFR — Environmentally Friendly Rover',
    desc: 'Autonomous land rover with rocker bogie suspension, LiDAR, YOLOv8 object detection, ROS2 navigation, and a live telemetry dashboard built on Supabase.',
    chips: ['Raspberry Pi 5', 'ROS2', 'YOLOv8', 'Supabase', 'Chart.js'],
    filters: ['Hardware', 'Software', 'VERDA'],
  },
  {
    to: '/projects/spore',
    year: '2025–',
    section: 'Ongoing',
    tags: ['VERDA', 'Hardware', 'Software'],
    team: 'Team of 3',
    title: 'SPORE — Campus Environmental Monitor',
    desc: 'Portable, low-cost multi-sensor platform for monitoring air quality, temperature, and environmental conditions on campus. Built on ESP32 S3 with real-time data streaming.',
    chips: ['ESP32 S3', 'Supabase', 'Lambda Architecture'],
    filters: ['Hardware', 'Software', 'VERDA'],
  },
  {
    to: '/projects/pwa',
    year: '2026',
    section: '2026',
    tags: ['Software'],
    team: 'Solo',
    title: 'Mental Health Tracking PWA',
    desc: 'Offline-first progressive web app for daily mental health logging with automatic sync, role-based access control managed at database layer, and full iOS/Android deployment.',
    chips: ['React', 'Dexie.js', 'Supabase', 'Vercel'],
    filters: ['Software'],
  },
  {
    to: '/projects/apollo',
    year: '2025',
    section: '2025',
    tags: ['Research', 'Hardware'],
    team: 'Team of 4',
    title: 'Apollo Bootcamp — Hackathon Winner',
    desc: 'Won a hackathon as an invited school ambassador. Contributed a Python projectile simulation using Euler\'s method, a 3D-printed model, and theoretical calculations for reaching orbital velocity.',
    chips: ['Python', 'Matplotlib', 'Simulation', '3D Printing'],
    filters: ['Research'],
  },
  {
    to: '/projects/electric-cart',
    year: '2024',
    section: '2024',
    tags: ['Hardware'],
    team: 'Team of 7',
    title: 'Electric Mobility Cart',
    desc: 'Built an electric mobility cart to improve campus accessibility. Represented the project in school marketing interviews on the International Day of Women and Girls in Science.',
    chips: ['Hardware', 'Electrical', 'Accessibility'],
    filters: ['Hardware'],
  },
  {
    to: '/projects/cloud-chamber',
    year: '2024',
    section: '2024',
    tags: ['Research'],
    team: 'Solo',
    title: 'Wilson Cloud Chamber',
    desc: 'Built a functioning cloud chamber to visualise ionising radiation, with educational materials produced for younger students as part of the MYP Personal Project.',
    chips: ['Hardware', 'Physics', 'MYP'],
    filters: ['Research'],
  },
]

const FILTER_OPTIONS = ['All', 'Hardware', 'Software', 'Research', 'VERDA']
const SECTIONS = ['Ongoing', '2026', '2025', '2024']

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.filters.includes(active))

  return (
    <main>
      <header className="page-header">
        <p className="page-eyebrow">What I've built</p>
        <h1 className="page-title">Projects &<br /><em>experiments</em></h1>
        <p className="page-subtitle">
          Hardware, software, and everything in between. Each project has its own page with
          documentation, photos, and the full story.
        </p>
      </header>

      <div className="filter-bar">
        {FILTER_OPTIONS.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-index">
        {SECTIONS.map(section => {
          const sectionProjects = filtered.filter(p => p.section === section)
          if (!sectionProjects.length) return null
          return (
            <div key={section}>
              <div className="index-section-label">{section}</div>
              {sectionProjects.map(p => (
                <Link to={p.to} className="project-row" key={p.to}>
                  <span className="row-year">{p.year}</span>
                  <div className="row-body">
                    <div className="row-tags">
                      {p.tags.map(t => <span className="row-tag" key={t}>{t}</span>)}
                      <span className="row-tag outline">{p.team}</span>
                    </div>
                    <h2 className="row-title">{p.title}</h2>
                    <p className="row-desc">{p.desc}</p>
                    <div className="row-chips">
                      {p.chips.map(c => <span className="stack-chip-sm" key={c}>{c}</span>)}
                    </div>
                  </div>
                  <span className="row-arrow">→</span>
                </Link>
              ))}
            </div>
          )
        })}
      </div>
    </main>
  )
}
