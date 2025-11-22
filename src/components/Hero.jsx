const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: 'rgb(var(--primary))' }}></div>
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: 'rgb(var(--secondary))' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: 'rgb(var(--accent))' }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="mb-8 animate-fade-in">
          {/* Animated Code Brackets */}
          

          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="text-6xl md:text-8xl font-bold animate-float" style={{ color: 'rgb(var(--primary))', animationDelay: '0s' }}>
              {'<'}
            </div>
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 animate-spin" style={{ borderColor: 'rgb(var(--primary))', borderTopColor: 'transparent', animationDuration: '3s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl animate-pulse">
                💻
              </div>
            </div>
            <div className="text-6xl md:text-8xl font-bold animate-float" style={{ color: 'rgb(var(--secondary))', animationDelay: '0.5s' }}>
              {'/'}
            </div>
            <div className="text-6xl md:text-8xl font-bold animate-float" style={{ color: 'rgb(var(--primary))', animationDelay: '1s' }}>
              {'>'}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Rajesh Patankar
            </span>
          </h1>

          
          <p className="text-2xl md:text-3xl text-base-content opacity-80 mb-4 animate-slide-up animation-delay-100">
            Full Stack MERN Developer
          </p>
          
          <p className="text-lg md:text-xl text-base-content opacity-60 mb-8 animate-slide-up animation-delay-200 max-w-2xl mx-auto">
            Passionate about crafting scalable web applications and turning ideas into reality with clean, efficient code
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up animation-delay-300">
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary btn-lg group"
          >
            <span>View My Work</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
          <a
            href="/Rajesh patankar_resume.pdf"
            download="Rajesh patankar_resume.pdf"
            className="btn btn-outline btn-primary btn-lg group"
          >
            <span>Download Resume</span>
            <span className="ml-2 group-hover:scale-110 transition-transform inline-block">📄</span>
          </a>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-outline btn-primary btn-lg group"
          >
            <span>Let's Talk</span>
            <span className="ml-2 group-hover:scale-110 transition-transform inline-block">💬</span>
          </button>
        </div>

        {/* Tech Stack with Hover Cards */}
        <div className="animate-fade-in animation-delay-400">
          <p className="text-sm text-base-content opacity-50 mb-4">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { 
                name: 'React', 
                icon: '⚛️',
                fact: 'Used by Facebook, Netflix & Airbnb',
                color: 'rgb(97, 218, 251)'
              },
              { 
                name: 'Node.js', 
                icon: '🟢',
                fact: 'Powers LinkedIn & PayPal backends',
                color: 'rgb(104, 160, 99)'
              },
              { 
                name: 'MongoDB', 
                icon: '🍃',
                fact: 'Stores data in flexible JSON format',
                color: 'rgb(71, 162, 72)'
              },
              { 
                name: 'Express', 
                icon: '🚂',
                fact: 'Minimal & fast Node.js framework',
                color: 'rgb(96, 96, 96)'
              },
              { 
                name: 'JavaScript', 
                icon: '⚡',
                fact: 'Powers 98% of all websites',
                color: 'rgb(240, 219, 79)'
              },
              { 
                name: 'Tailwind', 
                icon: '🎨',
                fact: 'Utility-first CSS framework',
                color: 'rgb(56, 189, 248)'
              }
            ].map((tech) => (
              <div 
                key={tech.name}
                className="group relative"
              >
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-base-200 text-base-content hover:scale-110 transition-transform cursor-pointer flex items-center gap-2"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
                
                {/* Hover Card */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-base-100 rounded-xl shadow-2xl p-4 min-w-max border-2" style={{ borderColor: tech.color }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-bold text-base-content">{tech.name}</span>
                    </div>
                    <p className="text-sm text-base-content opacity-70">{tech.fact}</p>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="w-3 h-3 rotate-45 bg-base-100 border-r-2 border-b-2" style={{ borderColor: tech.color }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
