import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import BrandLogo from './BrandLogo'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const links = [
    { to: '/makeup-artist', label: 'Makeup Artist', brand: 'mua' },
    { to: '/wedding-planner', label: 'Wedding Planner', brand: 'wp' },
  ]

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner">
        <BrandLogo />

        <nav className="navbar__links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link navbar__link--${link.brand} ${
                location.pathname === link.to ? 'navbar__link--active' : ''
              }`}
            >
              <span className="navbar__link-dot" />
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__mobile-link ${
                  location.pathname === link.to ? 'navbar__mobile-link--active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
