import roboquestPhoto from '../assets/images/roboquest.jpeg' 
import PhotoSlot from '../components/PhotoSlot'
import './Activities.css'

const activities = [
  {
    id: 'stuco',
    year: '2025 –',
    tags: ['Leadership'],
    team: 'H-Farm',
    title: 'Student Council',
    titleEm: 'President',
    desc: 'I ran for Student Council President in Year 11 — which mostly means I spend a lot of time in meetings, sending emails, and wrangling budgets for events that invariably have some last-minute crisis. The role involves chairing weekly meetings, coordinating a council of student representatives, and communicating between the student body, the PTA, and school leadership.',
    bullets: [
      'Independently organised major school events, managing logistics, budgets, and vendor relationships.',
      'Chaired weekly council meetings and coordinated communication between students, PTA, and school leadership.',
      'Acted as the primary student representative in school-wide decisions.',
    ],
    links: [
      { label: 'StuCo Instagram', href: 'https://www.instagram.com/hfarm.studentcouncil/' },
    ],
  },
  {
    id: 'burgundy',
    year: '2025 –',
    tags: ['Media', 'Web Design'],
    team: 'H-Farm',
    title: 'Arts Editor & Website Lead —',
    titleEm: 'The Burgundy Post',
    desc: 'The Burgundy Post is H-Farm\'s student newspaper, reaching 230+ students. I direct the Arts section editorially, and separately led a full redesign and rebuild of the website — replacing a generic template with a custom design, adding alt text to every image, and improving overall accessibility.',
    bullets: [
      'Directed the Arts section across 230+ student readership.',
      'Led full website redesign — scrapped the template, rebuilt from scratch, improved accessibility throughout.',
      'Added alt text to all images site-wide and streamlined the publication workflow.',
    ],
    links: [
      { label: 'The Burgundy Post', href: 'https://burgundyposthfarm.wixsite.com/burgundy-post' },
      { label: 'Instagram', href: 'https://www.instagram.com/burgundy_post.hfarm/' },
    ],
  },
  {
    id: 'housemd',
    year: '2024 –',
    tags: ['Community'],
    team: 'Online',
    title: 'Community Manager —',
    titleEm: 'House MD',
    desc: 'I run the online fan communities for House MD — a 150,000+ member Reddit and a Discord server I\'ve grown from scratch to over 4,500 members. It started as a hobby and turned into something resembling a part-time job: content strategy, moderation, managing a team of volunteer mods, and building systems that keep a large community functional.',
    stats: [
      { num: '150k+', label: 'Reddit members' },
      { num: '4,500+', label: 'Discord members' },
      { num: '+2,500', label: 'Discord growth' },
      { num: '10', label: 'volunteer mods' },
    ],
    bullets: [
      'Grew the Discord by 2,500+ members through new engagement and content systems.',
      'Manages a team of 10 volunteer moderators across both platforms.',
      'Leads content strategy, community events, and moderation policy.',
    ]
  },
  {
    id: 'roboquest',
    year: '2024 –',
    tags: ['Volunteering'],
    team: 'H-Farm',
    title: 'Volunteer Robotics Coach —',
    titleEm: 'Roboquest',
    desc: 'I coach PYP4–MYP2 students (aged 9–13) for the Roboquest robotics competition, teaching block-based programming and Lego Spike robotics. The goal isn\'t just to build robots — it\'s to build confidence in problem-solving for students who\'ve never touched code before.',
    photo: true,
    photoFile: 'roboquest.jpg',
    photoLabel: 'Roboquest coaching session',
  },
  {
    id: 'yoga',
    year: '2024 – 2026',
    tags: ['Freelance'],
    team: 'Venice',
    title: 'Freelance Web Design & Tech Support —',
    titleEm: 'Yoga Venezia',
    desc: 'I worked as a paid freelancer for Yoga Venezia, a local small business in Venice. The work covered troubleshooting, SEO optimisation, and ongoing web design improvements — streamlining their contact forms, booking management, and general site aesthetics. My first real commercial client.',
    bullets: [
      'SEO optimisation and ongoing technical support.',
      'Redesigned contact and booking flows to improve client engagement.',
      'First paid freelance client — managing a real professional relationship independently.',
    ],
    links: [
      // 🔗 REPLACE with real Yoga Venezia website URL
      { label: 'Yoga Venezia website', href: 'https://www.yogavenezia.com/' },
    ],
  },
  {
    id: 'ambassador',
    year: '2023 –',
    tags: ['Ambassador'],
    team: 'H-Farm',
    title: 'Student',
    titleEm: 'Ambassador',
    desc: 'I represent H-Farm International School to prospective students and families — leading campus tours, supporting admissions outreach, and contributing to marketing content. I\'ve voiced marketing videos and assisted the marketing department in content creation since Year 10.',
  },
  {
    id: 'headlines',
    year: '2023 – 2025',
    tags: ['Media'],
    team: 'H-Farm',
    title: 'Co-Founder & Lead Writer —',
    titleEm: 'H-EADLINES',
    desc: 'Before the Burgundy Post, I co-founded H-EADLINES — a school newsletter that reached 200+ students weekly. I led the editorial strategy and wrote 53 front-page articles over two years. Commended by the Head of School for its impact, and eventually evolved into the Burgundy Post.',
    stats: [
      { num: '53',   label: 'front-page articles' },
      { num: '200+', label: 'weekly readers' },
    ],
  },
]

export default function Activities() {
  return (
    <main>
      <header className="act-header">
        <p className="act-eyebrow">Beyond the classroom</p>
        <h1 className="act-title">Activities &<br /><em>leadership</em></h1>
        <p className="act-subtitle">The things I do alongside school — running communities, coaching younger students, writing, and occasionally fixing other people's websites.</p>
      </header>

      <div className="act-content">
        {activities.map(a => (
          <div className="act-block" key={a.id}>

            <div className="act-meta">
              <span className="act-year">{a.year}</span>
              <div className="act-tags">
                {a.tags.map(t => <span className="act-tag" key={t}>{t}</span>)}
                <span className="act-tag-outline">{a.team}</span>
              </div>
              {a.links && (
                <div className="act-links">
                  {a.links.map(l => (
                    <a href={l.href} key={l.label} className="act-link" target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="act-body">
              <h2 className="act-block-title">
                {a.title} <em>{a.titleEm}</em>
              </h2>
              <p className="act-desc">{a.desc}</p>

              {a.stats && (
                <div className="act-stats">
                  {a.stats.map(s => (
                    <div className="act-stat" key={s.label}>
                      <span className="act-stat-num">{s.num}</span>
                      <span className="act-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {a.bullets && (
                <ul className="act-bullets">
                  {a.bullets.map((b, i) => (
                    <li key={i}><span className="act-dot" /><span>{b}</span></li>
                  ))}
                </ul>
              )}

              {a.photo && (
                <PhotoSlot
                  src={roboquestPhoto}
                  className="photo-video"
                  label={a.photoLabel}
                  filename={a.photoFile}
                  style={{ marginTop: '1.25rem' }}
                />
              )}
            </div>

          </div>
        ))}
      </div>
    </main>
  )
}
