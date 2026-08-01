
import chamberHero   from '../../assets/images/chamber-hero.webp' 
import chamberSetup  from '../../assets/images/chamber-setup.png'
import chamberPres   from '../../assets/images/chamber-presenting.webp'



import ProjectPage, { MetaItem, LinkRow, PressCard } from '../../components/ProjectPage'
import PhotoSlot from '../../components/PhotoSlot'
import './Project.css'

export default function CloudChamber() {
  return (
    <ProjectPage
      eyebrow="MYP Personal Project · 2024–2025"
      title=""
      titleEm="Wilson Cloud Chamber"
      subtitle="I wanted to see cosmic rays with my own eyes. So I built a machine that could show them to me — and then wrote a guide to help others see them too."
      tags={<>
        <span className="tag">Physics</span>
        <span className="tag">Hardware</span>
        <span className="tag">Science Communication</span>
        <span className="tag-outline">Solo</span>
        <span className="tag-outline">MYP5</span>
      </>}
      meta={<>
        <MetaItem label="Type"       value="MYP Personal Project" />
        <MetaItem label="Outcome"    value="Functioning chamber + interpretation guide" />
        <MetaItem label="Featured in" value="H-Farm International School" />
      </>}
    >

      <PhotoSlot
        src={chamberHero}
        className="photo-hero"
        label="Presenting the cloud chamber at the MYP exhibition"
        filename="chamber-hero.jpg"
        caption="Presenting the cloud chamber and interpretation guide at the MYP5 Personal Project exhibition, February 2025."
      />

      <div className="section-block">
        <span className="block-label">The idea</span>
        <h2 className="block-title">Have you ever wanted to see the invisible?</h2>
        <div className="block-body">
          <p>Subatomic particles pass through our bodies constantly — cosmic rays, alpha particles, muons — but they're entirely beyond our senses. I'd always found particle physics fascinating, but explanations alone weren't enough for me. I wanted to <strong>actually see</strong> the particles.</p>
          <p>After some research, I found the answer: the Wilson Cloud Chamber, a device first built in 1911 by physicist Charles Wilson, which makes the trails of charged particles visible in a supersaturated vapour. It even facilitated the discovery of the positron. I decided to build one from scratch for my MYP5 Personal Project — and pair it with an interpretation guide written for younger students.</p>
        </div>
      </div>

      <div className="pull-quote">
        <p>"To explain something simply, you have to understand it deeply."</p>
        <cite>— Einstein (the principle behind the whole project)</cite>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">Building it</span>
        <h2 className="block-title">How a cloud chamber actually works</h2>
        <div className="block-body">
          <p>The chamber uses <strong>isopropanol</strong> soaked into felt at the top of a sealed box. Dry ice at the bottom cools the base to around −78°C, creating a temperature gradient. The alcohol evaporates, cools as it falls, and forms a <strong>supersaturated vapour</strong> — a metastable layer where condensation is about to happen but hasn't yet.</p>
          <p>When a charged particle passes through this layer, it ionises the gas molecules along its path. Those ions act as condensation nuclei, and tiny droplets form — leaving a <strong>visible white trail</strong> in the air. Different particles leave different tracks: alpha particles leave short, thick trails; electrons leave wispy zig-zags; muons leave long, straight lines.</p>
          <p>Building it required sourcing materials, testing different seal configurations, managing a 48-hour window with dry ice before it sublimed completely, and troubleshooting a leaky container on experiment day.</p>
        </div>
      </div>

      <div className="two-col">
        <PhotoSlot src={chamberSetup} className="photo-wide" label="Cloud chamber setup / experiment" filename="chamber-setup.jpg" />
        <PhotoSlot src={chamberPres} className="photo-wide" label="Presenting at the MYP exhibition"  filename="chamber-presenting.jpg" />
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">The guide</span>
        <h2 className="block-title">Turning particle physics into something anyone can understand</h2>
        <div className="block-body">
          <p>The second half of the project was an <strong>interpretation guide</strong> for the chamber — designed to sit next to it during the exhibition and explain what viewers were actually seeing. The audience was MYP1–5 students, so the challenge was making nuclear physics accessible without sacrificing accuracy.</p>
          <p>I used hand-drawn diagrams of each particle track, metaphors to convey difficult concepts (a crumbling cookie for radioactive decay), and deliberately simple language with as few undefined technical terms as possible. My physics teacher rated the diagrams "Excellent" and described them as "very well structured", whilst my English teacher confirmed the writing reached the highest IB communication band.</p>
        </div>
      </div>

      <table className="particle-table">
        <thead>
          <tr>
            <th>Particle</th>
            <th>Track appearance</th>
            <th>What it means</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Radon / Alpha', 'Short, thick tracks', 'A radioactive atom spitting out an alpha particle — 2 protons and 2 neutrons.'],
            ['Electron', 'Zig-zags and curls', 'Light, fast particles that scatter easily when they hit other atoms.'],
            ['Muon', 'Long, straight tracks', 'Super-fast particles with a lot of kinetic energy — they travel straight through without interruption.'],
            ['Forked tracks', 'A track that splits', 'A particle collision or decay — the original particle breaks apart mid-flight.'],
            ['Y-shapes', 'Y-shaped split', 'Electron-muon scattering via electromagnetic interaction.'],
          ].map(([p, t, m]) => (
            <tr key={p}><td>{p}</td><td>{t}</td><td>{m}</td></tr>
          ))}
        </tbody>
      </table>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">Results</span>
        <h2 className="block-title">How it was assessed</h2>
        <div className="block-body">
          <p>The project was evaluated across four criteria by teachers and student surveys. The chamber ran for just under 40 minutes of particle visibility — a solid result for a first attempt built entirely without specialist equipment.</p>
        </div>
      </div>

      <div className="outcome-grid">
        {[
          { label: 'Chamber functioning', score: '6/8', title: 'Working particle trails, ~40 minutes', desc: 'Particles were visible and identifiable, though a small seal leak affected clarity. The supersaturated environment lasted 37 minutes.' },
          { label: 'Accuracy of knowledge', score: '7/8', title: 'Physics teacher: "Excellent"', desc: 'Three primary sources used; teacher feedback confirmed the guide "certainly EXPLAINS rather than merely DESCRIBES."' },
          { label: 'Guide communication', score: '7/8', title: '57.6 avg. words per particle', desc: 'Student surveys showed 7.7/10 comprehension. English teacher placed the writing in the top IB communication band.' },
          { label: 'Diagram accuracy', score: '6/8', title: 'Hand-drawn, rated by students', desc: 'Diagrams rated "very well structured" by physics teacher. Aesthetic scores averaged 7.375/10 across 40 student responses.' },
        ].map(o => (
          <div className="outcome-card" key={o.label}>
            <span className="outcome-label">{o.label}</span>
            <p className="outcome-score">{o.score}</p>
            <p className="outcome-title">{o.title}</p>
            <p className="outcome-desc">{o.desc}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">Press</span>
        <h2 className="block-title">As featured by H-Farm</h2>
      </div>

      <PressCard
        href="https://schools.h-farm.com/en/projects/risa-and-the-chamber-of-wonders-when-physics-becomes-visible/"
        source="H-Farm International School · 2025"
        title="[Valerio] and the Chamber of Wonders: When Physics Becomes Visible"
        excerpt="[He] built a machine to see subatomic particles with [his] own eyes — a bridge between science and storytelling, between knowledge and curiosity."
      />

      <LinkRow>
        <a href="https://drive.google.com/file/d/1DCgqBIdk7UrJUvWTYAIAcJN2ZhFKUWP9/view?usp=sharing" className="btn-primary">Read the full report</a>
        <a href="https://schools.h-farm.com/en/projects/risa-and-the-chamber-of-wonders-when-physics-becomes-visible/" className="btn-ghost" target="_blank" rel="noreferrer">H-Farm article →</a>
      </LinkRow>

    </ProjectPage>
  )
}
