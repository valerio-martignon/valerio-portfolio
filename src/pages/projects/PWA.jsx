import ProjectPage, { MetaItem, LinkRow } from '../../components/ProjectPage'
import './Project.css'
import './PWA.css'

export default function PWA() {
  return (
    <ProjectPage
      eyebrow="Solo Project · 2026"
      titleEm="Mental Health Tracking PWA"
      title=""
      subtitle="A private, offline-first app I built for myself — to track mood, sleep, and emotions daily, with read-only access for my parents. Works without internet. Deployed to iOS and Android."
      tags={<>
        <span className="tag">React</span>
        <span className="tag">PWA</span>
        <span className="tag">Supabase</span>
        <span className="tag-outline">Solo</span>
        <span className="tag-outline">Live & in use</span>
      </>}
      meta={<>
        <MetaItem label="Stack"      value="React · Dexie.js · Supabase · Vercel" />
        <MetaItem label="Deployed to" value="iOS + Android (PWA)" />
        <MetaItem label="Status"     value="Live — actively used daily" />
      </>}
    >

      {/* Animated app mockup */}
      <div className="pwa-mock" aria-label="Illustrative app mockup showing mood dashboard">
        <div className="pwa-blob" />
        <p className="pwa-greeting">Good morning, Valerio</p>
        <p className="pwa-mood-text">Feeling pretty good today</p>
        <div className="pwa-cards">
          <div className="pwa-card"><span className="pwa-card-label">Mood</span><span className="pwa-card-val">13/20</span></div>
          <div className="pwa-card"><span className="pwa-card-label">Sleep</span><span className="pwa-card-val">7.5h</span></div>
          <div className="pwa-card"><span className="pwa-card-label">Energy</span><span className="pwa-card-val">8/10</span></div>
        </div>
        <div className="pwa-chart">
          <span className="pwa-chart-label">Mood — last 7 days</span>
          <div className="pwa-bars">
            {[55,70,45,80,65,75,90].map((h, i) => (
              <div className="pwa-bar" key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
      <p style={{ fontSize: '0.75rem', color: 'var(--ink-soft)', fontStyle: 'italic', textAlign: 'center', marginTop: '0.5rem' }}>
        Illustrative mockup — the real app is private and password-protected.
      </p>

      <div className="section-block">
        <span className="block-label">Why it exists</span>
        <h2 className="block-title">Built for a real problem, not a portfolio</h2>
        <div className="block-body">
          <p>Most mental health apps are fine. But they weren't quite right for what I needed — specifically, the ability to log offline on bad days, share read-only data with my parents without feeling surveilled, and own my data completely with no third-party analytics.</p>
          <p>So I built it myself. This isn't a demo or a proof of concept — it's a <strong>live app I use every day</strong>, deployed to my phone's home screen on both iOS and Android.</p>
        </div>
      </div>

      <div className="why-grid">
        {[
          { num: '01', title: 'Works offline, always',    desc: 'Entries save instantly to your device via IndexedDB. Background sync pushes to Supabase whenever there\'s a connection — even days later.' },
          { num: '02', title: 'Real access control',      desc: 'Parents get read-only viewer accounts, enforced at the database layer — not just hidden buttons. They can see everything; they can\'t change anything.' },
          { num: '03', title: 'No data loss',             desc: 'Offline-first means the local device is always the source of truth. Nothing is lost if your phone dies or the server goes down.' },
          { num: '04', title: 'Fully private',            desc: 'No analytics, no advertising, no third-party services. Data lives in your own Supabase project. You own it entirely.' },
        ].map(w => (
          <div className="why-card" key={w.num}>
            <span className="why-num">{w.num}</span>
            <p className="why-title">{w.title}</p>
            <p className="why-desc">{w.desc}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">What you log</span>
        <h2 className="block-title">Morning and evening, every day</h2>
      </div>

      <div className="log-grid">
        <div className="log-card">
          <span className="log-time">Morning log</span>
          {[['Sleep quality','1–10'],['Hours slept','number'],['Energy level','1–10'],['Mood','0–20 (10 = baseline)'],['Emotions','primary + secondary'],['To-do for the day','text']].map(([k,v]) => (
            <div className="log-item" key={k}><span className="log-key">{k}</span><span className="log-val">{v}</span></div>
          ))}
        </div>
        <div className="log-card">
          <span className="log-time">Evening log</span>
          {[['Medication taken','yes / no'],['Daily diary','text'],['Mood + emotions','same as morning'],['Intrusive thought severity','1–10'],['Urges','yes / no + description'],['Coping strategies','text'],['Exercise','yes / no'],['Notable context','text']].map(([k,v]) => (
            <div className="log-item" key={k}><span className="log-key">{k}</span><span className="log-val">{v}</span></div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">The technical bits</span>
        <h2 className="block-title">What made this hard</h2>
        <div className="block-body">
          <p>Offline-first sounds simple. It isn't. The interesting problems are conflict resolution, sync ordering, and ensuring the local state and remote state never disagree in ways that corrupt data.</p>
        </div>
      </div>

      <div className="technical-card">
        <span className="technical-label">Offline-first architecture</span>
        <h3 className="technical-title">IndexedDB → Supabase sync</h3>
        <ul className="technical-list">
          <li><span className="t-dot" /><span>Every entry writes to <code>IndexedDB</code> via <code>Dexie.js</code> first — the network is never in the critical path for saving data.</span></li>
          <li><span className="t-dot" /><span>A background sync worker pushes pending entries to Supabase whenever a connection is detected, with retry logic for failed syncs.</span></li>
          <li><span className="t-dot" /><span>Entries are timestamped at write time locally, so ordering is preserved even when sync happens hours or days later.</span></li>
        </ul>
      </div>

      <div className="technical-card">
        <span className="technical-label">Access control</span>
        <h3 className="technical-title">Role-based permissions at the database layer</h3>
        <ul className="technical-list">
          <li><span className="t-dot" /><span>Two roles: <code>owner</code> (full read/write) and <code>viewer</code> (read-only). Enforced via Supabase Row Level Security policies — not application logic.</span></li>
          <li><span className="t-dot" /><span>This means viewer accounts genuinely cannot write data even if someone bypasses the UI — the database rejects it.</span></li>
          <li><span className="t-dot" /><span>Viewers can export the full history as CSV; they cannot add, edit, or delete any entry.</span></li>
        </ul>
      </div>

      <div className="technical-card">
        <span className="technical-label">Deployment</span>
        <h3 className="technical-title">PWA — installed on iOS and Android</h3>
        <ul className="technical-list">
          <li><span className="t-dot" /><span>Built with <code>React + Vite</code> and a registered service worker — qualifies as a full PWA installable from Safari and Chrome.</span></li>
          <li><span className="t-dot" /><span>Deployed to <code>Vercel</code> — auto-deploys from GitHub on every push, zero server maintenance.</span></li>
          <li><span className="t-dot" /><span>Opens full-screen with an icon, indistinguishable from a native app on the home screen.</span></li>
        </ul>
      </div>

      <div className="stack-row">
        {['React + Vite', 'Dexie.js (IndexedDB)', 'Supabase (Postgres + Auth)', 'Row Level Security', 'Service Worker', 'Vercel', 'PWA'].map(s => (
          <span className="stack-chip-lg" key={s}>{s}</span>
        ))}
      </div>

      <LinkRow>
        <a href="https://github.com/risa-marti/risas-brain-info-dump" className="btn-ghost">View on GitHub</a>
      </LinkRow>

    </ProjectPage>
  )
}
