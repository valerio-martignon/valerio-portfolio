import sporeHero from '../../assets/images/spore-hero.png'


import ProjectPage, { RoleCard, RoleList, MetaItem, TeamGrid, LinkRow, WipBanner, PressCard } from '../../components/ProjectPage'
import PhotoSlot from '../../components/PhotoSlot'
import './Project.css'

export default function SPORE() {
  return (
    <ProjectPage
      eyebrow="VERDA · Ongoing since 2025"
      titleEm="SPORE"
      title="Sensor Platform Observing Real Environments"
      subtitle="A portable, low-cost environmental monitoring device built for real campus use — measuring air quality, temperature, and more in real time."
      tags={<>
        <span className="tag">Hardware</span>
        <span className="tag">Software</span>
        <span className="tag">IoT</span>
        <span className="tag-outline">Team of 3</span>
        <span className="tag-wip">In development</span>
      </>}
      meta={<>
        <MetaItem label="My role" value="Database · Dashboard · Data pipeline" />
        <MetaItem label="Team"    value="Martignon · Vivian · Panganiban" />
        <MetaItem label="Stack"   value="ESP32 S3 · Supabase · Chart.js" />
      </>}
    >
      <WipBanner />

      <PhotoSlot
        src={sporeHero}
        className="photo-hero"
        label="SPORE device prototype"
        filename="spore-hero.jpg"
        caption="The SPORE prototype — compact, battery-powered, and designed to be placed anywhere on campus."
      />

      <div className="section-block">
        <span className="block-label">The problem</span>
        <h2 className="block-title">Why does this exist?</h2>
        <div className="block-body">
          <p>School campuses host hundreds of people every day, yet the air quality, temperature, and environmental conditions they're working in go almost entirely unmonitored. Poor air quality and uncomfortable environments have a direct impact on student focus, health, and performance — but existing commercial solutions are expensive and not designed for educational settings.</p>
          <p>SPORE is our answer to that gap.</p>
        </div>
      </div>

      <div className="sensor-grid">
        {[
          { name: 'Temperature & humidity', measures: 'Ambient thermal comfort' },
          { name: 'Air quality (CO₂ / VOC)', measures: 'Indoor air pollutants' },
          { name: 'Particulate matter', measures: 'PM2.5 / PM10 fine particles' },
          { name: 'Barometric pressure', measures: 'Atmospheric conditions' },
          { name: 'Light level', measures: 'Ambient lighting conditions' },
        ].map(s => (
          <div className="sensor-row" key={s.name}>
            <div className="sensor-dot" />
            <div>
              <p className="sensor-name">{s.name}</p>
              <p className="sensor-measures">{s.measures}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="spec-card">
        <span className="spec-title">Hardware specs</span>
        <div className="spec-grid">
          {[
            ['Microcontroller', 'ESP32 S3'],
            ['Processor', 'Dual-core 32-bit, 240 MHz'],
            ['Connectivity', 'Wi-Fi + Bluetooth'],
            ['Power', 'Battery-powered, portable'],
            ['Form factor', 'Compact, single-board'],
            ['Cost', 'Low-cost, open design'],
          ].map(([k, v]) => (
            <div className="spec-row" key={k}><span className="spec-key">{k}</span><span className="spec-val">{v}</span></div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">My contribution</span>
        <h2 className="block-title">What I built</h2>
        <div className="block-body">
          <p>As with EFR, my work on SPORE focuses on getting the data off the device and making it useful. I built the data pipeline and dashboard by adapting and extending the architecture developed for EFR to handle SPORE's wider range of sensor inputs.</p>
        </div>

        <RoleCard label="Database & data pipeline" title="ESP32 → Supabase">
          <RoleList items={[
            'Designed the database schema for SPORE\'s multi-sensor readings — temperature, humidity, air quality, particulate matter, pressure, and light — with automatic timestamping.',
            'Connected the ESP32 S3 to Supabase over Wi-Fi, piping live sensor readings into the database at regular intervals.',
            'Implemented row-capping logic to keep storage within limits on the free Supabase tier.',
          ]} />
        </RoleCard>

        <RoleCard label="Web dashboard" title="Live environmental monitoring site">
          <RoleList items={[
            'Built a live dashboard pulling from Supabase, displaying real-time readings for all five sensor channels with Chart.js graphs.',
            'Added time range filtering and an online/offline status indicator based on the age of the most recent reading.',
            'Designed with multiple SPORE units in mind — built to support readings from several devices placed around campus simultaneously.',
          ]} />
        </RoleCard>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">What's next</span>
        <h2 className="block-title">Future development</h2>
        <div className="block-body">
          <p>SPORE is just getting started. The current prototype proves the concept — the next phase is about scale, intelligence, and campus-wide deployment.</p>
        </div>
      </div>

      <div className="future-grid">
        {[
          { num: '01', title: 'Lambda Architecture',    desc: 'As data grows, Lambda Architecture will allow SPORE to deliver both instant alerts and deep historical insights simultaneously.' },
          { num: '02', title: 'Multi-unit deployment',  desc: 'Multiple SPORE devices placed across campus, feeding into a single dashboard with per-room comparison views.' },
          { num: '03', title: 'Alert system',           desc: 'Automatic alerts when air quality or CO₂ levels cross thresholds — notifying facilities teams in real time.' },
          { num: '04', title: 'Public data access',     desc: 'Making environmental data openly accessible to students and staff — transparency about the spaces they work in every day.' },
        ].map(f => (
          <div className="future-card" key={f.num}>
            <span className="future-num">{f.num}</span>
            <p className="future-title">{f.title}</p>
            <p className="future-desc">{f.desc}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">The team</span>
        <h2 className="block-title">VERDA</h2>
      </div>
      <TeamGrid members={[
        { name: 'Valerio Martignon',    role: 'Database management, data pipeline & web dashboard' },
        { name: 'Alvise Vivian',     role: 'Software design, CAD modelling, coding & electrical design' },
        { name: 'Daniel Panganiban', role: 'Electrical design, structural design, CAD modelling & coding' },
      ]} />

    </ProjectPage>
  )
}
