import fencing1    from '../assets/images/fencing-1.jpeg'
import fencing2    from '../assets/images/fencing-2.jpeg'
import boulder1    from '../assets/images/bouldering-1.jpeg'
import boulder2    from '../assets/images/bouldering-2.jpeg'
import boulder3    from '../assets/images/bouldering-3.jpeg'
import crochet1    from '../assets/images/crochet-1.jpeg'
import crochet2    from '../assets/images/crochet-2.jpeg' 
import crochet3    from '../assets/images/crochet-3.jpeg'

import PhotoSlot from '../components/PhotoSlot'
import './Hobbies.css'

const BOOKS = [
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas',   emoji: '⚔️', bg: '#2D1B0E' },
  { title: 'The Naturals',              author: 'Jennifer Lynn Barnes', emoji: '🔍', bg: '#1a2a4a' },
  { title: 'Batman: Under the Red Hood', author: 'Judd Winick',       emoji: '🦇', bg: '#1a1a2e' },
  { title: 'The Physics of Superheroes', author: 'James Kakalios',    emoji: '⚛️', bg: '#0a2a3a' },
  { title: 'The Opposite of Butterfly Hunting', author: 'Evanna Lynch', emoji: '🦋', bg: '#3a1a2a' },
]

const GAMES = [
  { name: 'Hearts of Iron IV', current: true },
  { name: 'Helldivers 2',      current: false },
  { name: 'Hitman (World of Assassination)', current: false },
  { name: 'REPO',              current: false },
  { name: 'Peak',              current: false },
  { name: 'The Sims 4',        current: false },
]

export default function Hobbies() {
  return (
    <main>
      <header className="hob-header">
        <p className="hob-eyebrow">Outside the work</p>
        <h1 className="hob-title">Things I do<br /><em>for fun</em></h1>
        <p className="hob-subtitle">The honest version of who I am when nobody's grading it — fencing, crocheting, climbing walls, reading everything, and putting too many hours into video games.</p>
      </header>

      <div className="hob-content">

        {/* ── WRITING ── */}
        <div className="hob-section">
          <span className="hob-label">Writing</span>
          <h2 className="hob-title-sm">Words I've <em>published</em></h2>
          <p className="hob-body">Writing has always been part of how I process things. These two pieces — a poem and an opinion article — are the ones I'm most proud of putting out into the world.</p>
          <div className="writing-grid">
            <a href="https://jgirlsmag.movingtraditions.org/2025/12/connection" target="_blank" rel="noreferrer" className="writing-card">
              <span className="writing-source">jGirls+ Magazine</span>
              <span className="writing-type">Published poem · 2025</span>
              <h3 className="writing-title">Connection</h3>
              <p className="writing-desc">Published in jGirls+, a recognised Jewish teen literary magazine. My first paid piece of writing.</p>
              <span className="writing-arrow">Read the poem →</span>
            </a>
            <a href="https://burgundyposthfarm.wixsite.com/burgundy-post/humanities/let-women-be-furious" target="_blank" rel="noreferrer" className="writing-card">
              <span className="writing-source">The Burgundy Post</span>
              <span className="writing-type">Opinion article · 2025</span>
              <h3 className="writing-title">Let Women Be Furious</h3>
              <p className="writing-desc">An opinion piece on women's anger — why it's silenced, why it shouldn't be, and what it means to reclaim it.</p>
              <span className="writing-arrow">Read the article →</span>
            </a>
          </div>
        </div>

        <hr className="hob-divider" />

        {/* ── FENCING ── */}
        <div className="hob-section">
          <span className="hob-label">Sport</span>
          <h2 className="hob-title-sm">Épée <em>fencing</em></h2>
          <p className="hob-body">I've fenced since I was seven — épée, the weapon where the whole body is a valid target and patience is more important than speed. I was competitive at U11/U12 level in the UK and I'm currently working my way back to competition after a break. There's something I love about a sport that's equal parts physical and psychological — you're solving a puzzle that hits back.</p>
          <div className="two-col">
            <PhotoSlot  src={fencing1} className="photo-tall" label="Fencing — competition photo" filename="fencing-1.jpg" />
            <PhotoSlot src={fencing2} className="photo-tall" label="Fencing — training photo"    filename="fencing-2.jpg" />
          </div>
        </div>

        <hr className="hob-divider" />

        {/* ── BOULDERING ── */}
        <div className="hob-section">
          <span className="hob-label">Climbing</span>
          <h2 className="hob-title-sm"><em>Bouldering</em></h2>
          <p className="hob-body">Bouldering is the version of climbing without ropes — short, powerful problems on a wall, usually involving at least one move that seems completely impossible until suddenly it isn't. I find it genuinely meditative. The only thing that exists is the next hold.</p>
          <div className="three-col">
            <PhotoSlot src={boulder1} className="photo-wide" label="Bouldering photo 1" filename="bouldering-1.jpg" />
            <PhotoSlot src={boulder2} className="photo-wide" label="Bouldering photo 2" filename="bouldering-2.jpg" />
            <PhotoSlot src={boulder3} className="photo-wide" label="Bouldering photo 3" filename="bouldering-3.jpg" />
          </div>
        </div>

        <hr className="hob-divider" />

        {/* ── CROCHET ── */}
        <div className="hob-section">
          <span className="hob-label">Making things</span>
          <h2 className="hob-title-sm"><em>Crochet</em></h2>
          <p className="hob-body">I crochet — mostly scarves and bags, occasionally more ambitious things that take three times as long as expected. It's the perfect counterweight to staring at a screen: something tactile, something that grows visibly, something you can give away at the end.</p>
          <div className="hob-note">
            <strong>Current project:</strong> another scarf, predictably. The bag phase was productive though.
          </div>
          <div className="three-col">
            <PhotoSlot src={crochet1} className="photo-wide" label="Crochet — scarf project" filename="crochet-1.jpg" />
            <PhotoSlot src={crochet2} className="photo-wide" label="Crochet — bag project"   filename="crochet-2.jpg" />
            <PhotoSlot src={crochet3} className="photo-wide" label="Crochet — misc project"  filename="crochet-3.jpg" />
          </div>
        </div>

        <hr className="hob-divider" />

        {/* ── GAMES ── */}
        <div className="hob-section">
          <span className="hob-label">Currently playing</span>
          <h2 className="hob-title-sm">Video <em>games</em></h2>
          <p className="hob-body">I play a lot of video games, across a fairly wide range of genres. Current obsession is Hearts of Iron IV, which is a dangerous thing to get into during IB exam season.</p>
          <div className="games-row">
            {GAMES.map(g => (
              <span key={g.name} className={`game-chip ${g.current ? 'current' : ''}`}>
                {g.name}{g.current ? ' ← current' : ''}
              </span>
            ))}
          </div>
        </div>

        <hr className="hob-divider" />

        {/* ── BOOKS ── */}
        <div className="hob-section">
          <span className="hob-label">Currently reading</span>
          <h2 className="hob-title-sm">Favourite <em>books</em></h2>
          <p className="hob-body">A reasonable cross-section of who I am: a 19th-century revenge epic, a YA thriller series, a Batman graphic novel, a physics book that uses superheroes to explain quantum mechanics, and a memoir about recovering from an eating disorder. Eclectic is one word for it.</p>
          <div className="books-grid">
            {BOOKS.map(b => (
              <div className="book-card" key={b.title}>
                <div className="book-spine" style={{ background: b.bg }}>
                  <span style={{ fontSize: '1.5rem' }}>{b.emoji}</span>
                </div>
                <p className="book-title">{b.title}</p>
                <p className="book-author">{b.author}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
