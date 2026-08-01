import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Activities from './pages/Activities'
import Hobbies from './pages/Hobbies'

// Project pages
import EFR from './pages/projects/EFR'
import SPORE from './pages/projects/SPORE'
import Apollo from './pages/projects/Apollo'
import CloudChamber from './pages/projects/CloudChamber'
import ElectricCart from './pages/projects/ElectricCart'
import PWA from './pages/projects/PWA'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/projects"            element={<Projects />} />
        <Route path="/projects/efr"        element={<EFR />} />
        <Route path="/projects/spore"      element={<SPORE />} />
        <Route path="/projects/apollo"     element={<Apollo />} />
        <Route path="/projects/cloud-chamber" element={<CloudChamber />} />
        <Route path="/projects/electric-cart" element={<ElectricCart />} />
        <Route path="/projects/pwa"        element={<PWA />} />
        <Route path="/activities"          element={<Activities />} />
        <Route path="/hobbies"             element={<Hobbies />} />
      </Routes>
      <Footer />
    </>
  )
}
