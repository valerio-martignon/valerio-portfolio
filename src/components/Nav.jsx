import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">Valerio Martignon</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/projects"   className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
        <li><NavLink to="/activities" className={({ isActive }) => isActive ? 'active' : ''}>Activities</NavLink></li>
        <li><NavLink to="/hobbies"    className={({ isActive }) => isActive ? 'active' : ''}>Hobbies</NavLink></li>
      </ul>
    </nav>
  )
}
