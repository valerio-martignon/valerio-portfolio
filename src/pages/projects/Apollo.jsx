import apolloCatapult from '../../assets/images/apollo-catapult.jpg'
import apolloTeam     from '../../assets/images/apollo-team.jpeg'


import ProjectPage, { MetaItem, LinkRow } from '../../components/ProjectPage'
import PhotoSlot from '../../components/PhotoSlot'
import './Project.css'

export default function Apollo() {
  return (
    <ProjectPage
      eyebrow="Apollo Bootcamp · H-Farm · 2025"
      titleEm="Cosmic Catapult"
      title="Hackathon Winner"
      subtitle="What if we launched the Apollo mission using a catapult? A physics simulation, theoretical calculations, and a 3D-printed model — built in a day."
      tags={<>
        <span className="tag">Physics</span>
        <span className="tag">Simulation</span>
        <span className="tag">Research</span>
        <span className="tag-outline">Team of 4</span>
        <span className="tag-win">🏆 Winners</span>
      </>}
      meta={<>
        <MetaItem label="My role" value="Simulation · Calculations · Code" />
        <MetaItem label="Event"   value="Apollo Bootcamp Hackathon" />
        <MetaItem label="Stack"   value="Python · Matplotlib · Euler's Method" />
      </>}
    >

      <div className="context-banner">
        <div>
          <span className="context-label">The event</span>
          <span className="context-value">Apollo Bootcamp — H-Farm's programme for Technology Leader of the Future scholars</span>
        </div>
        <div>
          <span className="context-label">My role at the event</span>
          <span className="context-value">Invited as a school ambassador — one of the few non-TLF students to attend</span>
        </div>
        <div>
          <span className="context-label">The brief</span>
          <span className="context-value">Build anything space-themed. No further constraints.</span>
        </div>
      </div>

      <div className="question-card">
        <p>"What if the Apollo mission had been launched using a <em>catapult</em>?"</p>
      </div>

      <div className="section-block">
        <span className="block-label">The context</span>
        <h2 className="block-title">A bootcamp, a hackathon, and one very impractical idea</h2>
        <div className="block-body">
          <p>The Apollo Bootcamp included a structured teaching component covering projectile motion and Euler's method of numerical integration — two concepts we'd just been introduced to in the lesson sessions. The hackathon challenge was deliberately open: build something space-themed. Our team decided to take those two freshly learnt concepts and apply them to the most unhinged question we could think of.</p>
          <p>The result was <strong>Cosmic Catapult</strong> — a three-part project combining a Python physics simulation, theoretical calculations for actually reaching orbital velocity, and a 3D-printed physical model of the catapult itself.</p>
        </div>
      </div>

      <div className="two-col">
        <PhotoSlot src={apolloCatapult} className="photo-wide" label="3D-printed catapult model" filename="apollo-catapult.jpg" />
        <PhotoSlot src={apolloTeam} className="photo-wide" label="Team presenting / hackathon day" filename="apollo-team.jpg" />
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">My contribution</span>
        <h2 className="block-title">What I built</h2>
      </div>

      <div className="contribution-grid">
        <div className="contribution-card">
          <span className="contribution-label">Physics simulation</span>
          <p className="contribution-title">Python trajectory model</p>
          <p className="contribution-desc">Built an interactive projectile motion simulator using Euler's method, incorporating air drag and animating the trajectory in real time with Matplotlib.</p>
        </div>
        <div className="contribution-card">
          <span className="contribution-label">Theoretical calculations</span>
          <p className="contribution-title">Orbital velocity & energy analysis</p>
          <p className="contribution-desc">Calculated the kinetic energy, required track length, and g-forces needed to actually reach orbital speed — then worked out why it would be catastrophic.</p>
        </div>
        <div className="contribution-card">
          <span className="contribution-label">Physical model</span>
          <p className="contribution-title">3D-printed catapult</p>
          <p className="contribution-desc">Designed and printed a physical catapult model to complement the simulation — because a working demo always lands harder than a slide deck.</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">The simulation</span>
        <h2 className="block-title">Euler's method in Python</h2>
        <div className="block-body">
          <p>The simulation models projectile motion with air drag using <strong>Euler's method</strong> — a numerical integration technique for solving differential equations step by step. At each time step, the drag force is computed from the projectile's current velocity, and the resulting accelerations update both velocity and position. The trajectory is plotted live as it runs.</p>
        </div>
      </div>

      <div className="code-block">
        <span className="code-label">simulation.py — Euler's method loop (core excerpt)</span>
        <pre><span className="cm"># The Euler's Method Simulation Loop</span>
<span className="kw">while</span> y_pos {'>='} <span className="nm">0</span>:
    v = math.sqrt(vx**<span className="nm">2</span> + vy**<span className="nm">2</span>)

    <span className="cm"># Drag force: F = 0.5 * ρ * Cd * A * v²</span>
    drag_force = <span className="nm">0.5</span> * air_density * drag_coefficient * cross_sectional_area * v**<span className="nm">2</span>

    <span className="cm"># Decompose drag into x and y accelerations</span>
    ax = -(drag_force / mass) * (vx / v)
    ay = -g - (drag_force / mass) * (vy / v)

    <span className="cm"># Update velocity and position (Euler step)</span>
    vx = vx + ax * time_step
    vy = vy + ay * time_step
    x_pos = x_pos + vx * time_step
    y_pos = y_pos + vy * time_step</pre>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">The maths</span>
        <h2 className="block-title">Could it actually work?</h2>
        <div className="block-body">
          <p>Spoiler: no. But working out <em>exactly why not</em> was the point.</p>
        </div>
      </div>

      <div className="stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {[
          { num: '252 MWh', label: 'minimum kinetic energy at 7.8 km/s' },
          { num: '1,034 km', label: 'required track length at 3g acceleration' },
          { num: '151 GW',  label: 'power needed if launched in one minute' },
        ].map(s => (
          <div className="stat-card" key={s.label}>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="pull-quote">
        <p>A vacuum gun can theoretically provide orbital velocity — but a full rocket replacement is infeasible. The most realistic application is a hybrid approach: a catapult provides partial delta-v, and a conventional rocket completes orbit insertion.</p>
      </div>

      <LinkRow>
        <a href="https://docs.google.com/presentation/d/1_OgM7tUA042erek9Jmp97CTymrIr74jZVHmstfBCLu8/edit?usp=sharing" className="btn-ghost">Full presentation</a>
      </LinkRow>

    </ProjectPage>
  )
}
