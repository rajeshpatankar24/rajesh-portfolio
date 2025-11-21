import { useState } from 'react'

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)

  const themes = ['light', 'dark', 'cyberpunk', 'synthwave', 'forest', 'luxury']

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full z-50 bg-base-100/90 backdrop-blur-md shadow-lg" style={{ backgroundColor: 'rgb(var(--base-100) / 0.9)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
          </div>

          {/* Theme Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Theme Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                className="btn btn-circle btn-ghost"
              >
                🎨
              </button>
              {themeOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-2xl overflow-hidden z-50" style={{ backgroundColor: 'rgb(var(--base-100))' }}>
                  <div className="p-2">
                    <p className="px-3 py-2 text-sm font-bold opacity-60">Choose Theme</p>
                    {themes.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setTheme(t)
                          setThemeOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg capitalize transition-colors ${
                          theme === t ? 'bg-primary text-white' : 'hover:bg-base-200'
                        }`}
                        style={theme === t ? { backgroundColor: 'rgb(var(--primary))', color: 'white' } : {}}
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
