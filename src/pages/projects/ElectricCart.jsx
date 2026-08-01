import cartHero      from '../../assets/images/cart-hero.mp4'  
import cartBuild1    from '../../assets/images/cart-build-1.webp' 
import cartBuild2    from '../../assets/images/cart-build-2.webp'

import ProjectPage, { RoleCard, RoleList, MetaItem, LinkRow, PressCard } from '../../components/ProjectPage'
import PhotoSlot from '../../components/PhotoSlot'
import './Project.css'

export default function ElectricCart() {
  return (
    <ProjectPage
      eyebrow="H-Farm · Team Project · 2024"
      titleEm="Electric Mobility Cart"
      title=""
      subtitle="A campus accessibility project that became a platform for something bigger — proving that engineering isn't just for boys."
      tags={<>
        <span className="tag">Hardware</span>
        <span className="tag">Accessibility</span>
        <span className="tag">Women in STEM</span>
        <span className="tag-outline">Team of 7</span>
        <span className="tag-outline">Project Representative</span>
      </>}
      meta={<>
        <MetaItem label="My role"    value="Project representative · Marketing · Build" />
        <MetaItem label="Team"       value="7 students, mostly girls" />
        <MetaItem label="Featured in" value="H-Farm International School" />
      </>}
    >

    <div className="video-wrapper">
          <video controls src={cartHero} />  </div>
  

      <div className="section-block">
        <span className="block-label">The problem</span>
        <h2 className="block-title">A campus too big to navigate for everyone</h2>
        <div className="block-body">
          <p>H-Farm's campus is vast — and for students with physical disabilities, that's a real barrier. The available e-scooters weren't suitable for everyone, and there was no purpose-built solution. When our STEM teacher Mr Amr put out the question — "Who wants to work on an engineering project?" — a group of seven students, almost entirely girls, said yes.</p>
          <p>The goal was straightforward: assemble and modify a mobility vehicle kit to make the campus more accessible. We divided tasks and built it largely during our lunch breaks.</p>
        </div>
      </div>

      <div className="two-col">
        <PhotoSlot src={cartBuild1} className="photo-wide" label="Cart build — assembly photo" filename="cart-build-1.jpg" />
        <PhotoSlot src={cartBuild2} className="photo-wide" label="Team working on the cart"    filename="cart-build-2.jpg" />
      </div>

      <div className="pull-quote">
        <p>"We had a small setback: one of the tyres burst due to excessive pressure! We tried to fix it with electrical tape, which did not work at all — but it was worth trying."</p>
        <cite>— Valerio, on the process</cite>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">My contribution</span>
        <h2 className="block-title">What I did</h2>
      </div>

      <RoleCard label="Build & engineering" title="Assembly and structural modifications">
        <RoleList items={[
          'Assembled the vehicle from a kit, following an instruction manual and adapting steps where needed.',
          'Worked on the support structures to improve seat stability and weight capacity.',
          'Problem-solved on the fly — including sourcing a replacement tyre when the original burst under pressure.',
        ]} />
      </RoleCard>

      <RoleCard label="Project representative & marketing" title="Voice of the project">
        <RoleList items={[
          'Selected as project representative — the public face of the team in school marketing content.',
          'Interviewed by the school on the International Day of Women and Girls in Science, speaking about the project and about women in STEM more broadly.',
          'Featured in a school article highlighting the team\'s work and its significance as a female-led engineering project.',
        ]} />
      </RoleCard>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">The bigger picture</span>
        <h2 className="block-title">Science has no gender</h2>
        <div className="block-body">
          <p>The cart was the project. But the story around it became something more. Published on the International Day of Women and Girls in Science, the school's feature became a platform for talking about something I care about deeply — the persistent underrepresentation of women in STEM.</p>
        </div>
      </div>

      <div className="hero-quote">
        <p>"Growing up, I heard about great scientists like Einstein and Dirac, while for women, the names mentioned were always the same: Marie Curie, Rosalind Franklin. I want to change this narrative — I want to prove that girls can excel in science just as much as boys."</p>
        <cite>— Valerio Martignon</cite>
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">Press</span>
        <h2 className="block-title">As featured by H-Farm</h2>
      </div>

      <PressCard
        href="https://schools.h-farm.com/en/projects/mobility-aid-device-a-dream-on-four-wheels/"
        source="H-Farm International School · February 2025 · International Day of Women and Girls in Science"
        title="Assisted mobility vehicle: a dream on four wheels"
        excerpt="A profile of the project and the team behind it — published as part of the school's celebration of women in science and engineering."
      />

      <LinkRow>
        <a href="https://schools.h-farm.com/en/projects/mobility-aid-device-a-dream-on-four-wheels/" className="btn-ghost" target="_blank" rel="noreferrer">Read the H-Farm article →</a>
      </LinkRow>

    </ProjectPage>
  )
}
