import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        CECILIA<span>.</span>
      </Link>

      <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <button
        className={`menu-button ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar