import { useState, useEffect, useRef } from 'react'

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)
  const themeDropdownRef = useRef(null)

  const themes = ['light', 'dark', 'cyberpunk', 'synthwave', 'forest', 'luxury']

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
    setThemeOpen(false) // Close theme dropdown when navigating
  }

  // Close theme dropdown on scroll or click outside
  useEffect(() => {
    const handleScroll = () => {
      setThemeOpen(false)
    }

    const handleClickOutside = (event) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
        setThemeOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setThemeOpen(false)
        setIsOpen(false)
      }
    }

    if (themeOpen) {
      window.addEventListener('scroll', handleScroll)
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [themeOpen])

  return (
    <nav className="fixed w-full z-50 bg-base-100/90 backdrop-blur-md shadow-lg" style={{ backgroundColor: 'rgb(var(--base-100) / 0.9)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold" style={{ color: 'rgb(var(--primary))' }}>
              &lt;/&gt;
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize font-medium hover:scale-110 transition-transform"
                style={{ color: 'rgb(var(--base-content))' }}
              >
                {item}
              </button>
            ))}
            <a
              href="/Rajesh patankar_resume.pdf"
              download="Rajesh patankar_resume.pdf.pdf"
              className="btn btn-primary btn-sm"
            >
              Resume
            </a>
          </div>

          {/* Theme Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Theme Dropdown */}
            <div className="relative" ref={themeDropdownRef}>
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                className="btn btn-circle btn-ghost"
                aria-label="Change theme"
                aria-expanded={themeOpen}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
              {themeOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-2xl overflow-hidden z-50 border animate-slide-up" style={{ backgroundColor: 'rgb(var(--base-100))', borderColor: 'rgb(var(--base-300))' }}>
                  <div className="p-2">
                    <p className="px-3 py-2 text-sm font-bold" style={{ color: 'rgb(var(--base-content))' }}>Choose Theme</p>
                    {themes.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setTheme(t)
                          setThemeOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg capitalize transition-colors hover:bg-base-200 ${
                          theme === t ? '' : ''
                        }`}
                        style={
                          theme === t 
                            ? { backgroundColor: 'rgb(var(--primary))', color: 'white' } 
                            : { color: 'rgb(var(--base-content))' }
                        }
                      >
                        <span>{t}</span>
                        {theme === t && <span className="ml-2">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden btn btn-circle btn-ghost"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left px-4 py-2 rounded-lg capitalize hover:bg-base-200 transition-colors"
                  style={{ color: 'rgb(var(--base-content))' }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
