import efrHero      from '../../assets/images/efr-hero.jpeg'
import efrSide      from '../../assets/images/efr-side.jpeg'
import efrSuspension from '../../assets/images/efr-suspension.png'
import efrBuild1    from '../../assets/images/efr-build-1.jpg'
import efrBuild2    from '../../assets/images/efr-build-2.png'
import efrBuild3    from '../../assets/images/efr-build-3.png'
import efrYolo      from '../../assets/images/efr-yolo-screenshot.png'


import ProjectPage, {
  RoleCard, RoleList, MetaItem, StatRow, TeamGrid, LinkRow, PressCard
} from '../../components/ProjectPage'
import PhotoSlot from '../../components/PhotoSlot'
import './Project.css'

export default function EFR() {
  return (
    <ProjectPage
      eyebrow="VERDA · Ongoing since 2025"
      titleEm="EFR"
      title="Environmentally Friendly Rover"
      subtitle="An autonomous land rover capable of navigating varied terrain, collecting environmental data, and streaming it live to the web."
      tags={<>
        <span className="tag">Hardware</span>
        <span className="tag">Software</span>
        <span className="tag">Robotics</span>
        <span className="tag-outline">Team of 3</span>
        <span className="tag-outline">Ongoing</span>
      </>}
      meta={<>
        <MetaItem label="My role"  value="Database · Object Detection · Dashboard" />
        <MetaItem label="Team"     value="Martignon · Vivian · Panganiban" />
        <MetaItem label="Stack"    value="RPi 5 · ROS2 · YOLOv8 · Supabase" />
      </>}
    >

      <PhotoSlot
        src={efrHero}
        className="photo-hero"
        label="Hero photo of rover"
        filename="efr-hero.jpg"
        caption="EFR in its current state — rocker bogie suspension, full sensor suite, Raspberry Pi 5 brain."
      />

      <StatRow stats={[
        { num: '5.76', label: 'kg total weight' },
        { num: '80+',  label: 'individual parts' },
        { num: '400+', label: 'fasteners' },
        { num: '3.0',  label: 'km/h top speed' },
      ]} />

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">Overview</span>
        <h2 className="block-title">What is EFR?</h2>
        <div className="block-body">
          <p>EFR is part of <strong>VERDA</strong> (Verified Environmental Real-time Data Analysis), a student-led team dedicated to building technology that monitors and makes environmental data accessible. EFR is the mobile half of that mission — a ground rover capable of navigating varied outdoor terrain and collecting sensor readings wherever it's deployed.</p>
          <p>The rover has been in development since September 2024. It features a <strong>rocker bogie suspension system</strong> — the same principle used in NASA's Mars rovers — allowing it to traverse uneven surfaces without tipping. Onboard sensors include a LiDAR unit, GPS, barometer, IMU, and camera, all fed into a Raspberry Pi 5 running Ubuntu Linux and ROS2.</p>
        </div>
      </div>

      <div className="two-col">
        <PhotoSlot src={efrSide} className="photo-wide" label="Rover — side view"        filename="efr-side.jpg" />
        <PhotoSlot src={efrSuspension} className="photo-wide" label="Rover — suspension detail" filename="efr-suspension.jpg" />
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">My contribution</span>
        <h2 className="block-title">What I built</h2>
        <div className="block-body">
          <p>EFR is a team effort — Daniel led the electrical design and structural build, and Alvise handled software architecture and CAD. My work lives in three areas:</p>
        </div>

        <RoleCard label="Database & data pipeline" title="Raspberry Pi → Supabase">
          <RoleList items={[
            'Connected the rover\'s sensor suite to a PostgreSQL database via Supabase over the internet, using a database key for secure access.',
            'Wrote a SQL function to cap readings at 750 rows — keeping us within the free Supabase tier without manual cleanup.',
            'Structured the rover_readings table with auto-incrementing IDs, automatic timestamps, temperature, and pressure fields.',
          ]} />
        </RoleCard>

        <RoleCard label="Object detection" title="YOLOv8 integration">
          <RoleList items={[
            'Set up a Python virtual environment on the Raspberry Pi and integrated YOLOv8 nano — the smallest, fastest variant, suited to resource-constrained hardware.',
            'Built a live detection script using OpenCV: each camera frame is run through the model, with bounding boxes and labels drawn in real time.',
            'Resolved a Python/NumPy version compatibility issue — NumPy requires Python 3.11, so the environment was configured specifically for that version.',
          ]} />
          
          <PhotoSlot
            src={efrYolo}
            className="photo-video"
            label="YOLOv8 live detection screenshot"
            filename="efr-yolo-screenshot.jpg"
            caption="YOLOv8 nano running live on the Raspberry Pi — detecting people, dogs, and more in real time."
          />
        </RoleCard>

        <RoleCard label="Web dashboard" title="Live telemetry site">
          <RoleList items={[
            'Built a live web dashboard that fetches sensor readings from Supabase every few seconds, with Chart.js graphs for temperature and pressure.',
            'Added time range filtering (1h / 6h / 24h / all) computed client-side, and a live online/offline status indicator based on reading recency.',
            'Deployed to GitHub Pages — publicly accessible.',
          ]} />
        </RoleCard>
      </div>

      <hr className="divider" />

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">Engineering</span>
        <h2 className="block-title">Hardware & build</h2>
        <div className="block-body">
          <p>The physical build was led by Daniel and Alvise — the rocker bogie chassis, motor driver, electronics, and CAD modelling. The images below document the build progression from September 2024 to today.</p>
        </div>
      </div>
      <div className="three-col">
        <PhotoSlot src={efrBuild1} className="photo-wide" label="Build photo 1" filename="efr-build-1.jpg" />
        <PhotoSlot src={efrBuild2} className="photo-wide" label="Build photo 2" filename="efr-build-2.jpg" />
        <PhotoSlot src={efrBuild3} className="photo-wide" label="Build photo 3" filename="efr-build-3.jpg" />
      </div>

      <hr className="divider" />

      <div className="section-block">
        <span className="block-label">The team</span>
        <h2 className="block-title">VERDA</h2>
      </div>
      <TeamGrid members={[
        { name: 'Valerio Martignon', role: 'Database management, object detection, web dashboard & marketing' },
        { name: 'Alvise Vivian',  role: 'Software design, CAD modelling, coding & electrical design' },
        { name: 'Daniel Panganiban', role: 'Electrical design, structural design, CAD modelling & coding' },
      ]} />

      <LinkRow>
        <a href="https://sor-r1sa.github.io/EFR/rover.html" className="btn-primary" target="_blank" rel="noreferrer">View live dashboard →</a>
      </LinkRow>

    </ProjectPage>
  )
}
