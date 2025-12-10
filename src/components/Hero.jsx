const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-3 sm:px-4 lg:px-6 xl:px-8 pt-16 sm:pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Content - 7 columns on large screens */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-base-200 rounded-full animate-slide-up">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-base-content">Available for new projects</span>
            </div>
            
            {/* Hero Text */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 animate-slide-up animation-delay-100">
                <p className="text-base sm:text-lg text-base-content opacity-60 font-medium">
                  Hi, I'm Rajesh Patankar
                </p>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight">
                  <span className="block text-base-content">I craft digital</span>
                  <span className="block text-base-content">solutions with</span>
                  <span className="block" style={{ color: 'rgb(var(--primary))' }}>modern tech</span>
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-base-content opacity-70 font-light leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
                Aspiring full-stack developer with internship experience in React, Node.js, and MongoDB. 
                Passionate about building modern web applications and eager to contribute to innovative projects.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-300">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary btn-lg group px-6 sm:px-8 w-full xs:w-auto"
              >
                <span className="text-sm sm:text-base">Explore My Work</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline btn-primary btn-lg px-6 sm:px-8 w-full xs:w-auto"
              >
                <span className="text-sm sm:text-base">Let's Connect</span>
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center xs:justify-start gap-4 sm:gap-6 lg:gap-8 pt-4 animate-slide-up animation-delay-400">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-base-content">10+</div>
                <div className="text-xs sm:text-sm text-base-content opacity-60">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-base-content">6+</div>
                <div className="text-xs sm:text-sm text-base-content opacity-60">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-base-content">100%</div>
                <div className="text-xs sm:text-sm text-base-content opacity-60">Dedication</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - 5 columns on large screens */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 animate-fade-in-right order-1 lg:order-2">
            
            {/* Main Profile Card */}
            <div className="bg-base-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 hover:shadow-xl transition-shadow duration-300">
              
              {/* Profile Header */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-base-300 flex items-center justify-center text-lg sm:text-2xl hover:scale-110 transition-transform">
                    👨‍💻
                  </div> */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-base-content">Rajesh Patankar</h3>
                    <p className="text-sm sm:text-base text-base-content opacity-60">MERN Stack Developer</p>
                  </div>
                </div>
                <div className="text-left xs:text-right">
                  <div className="text-xs sm:text-sm text-base-content opacity-60">Based in</div>
                  <div className="text-sm sm:text-base font-semibold text-base-content">Indore, India</div>
                </div>
              </div>
              
              {/* Tech Stack */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-base-content opacity-60 mb-3 sm:mb-4 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-base-100 text-base-content text-xs sm:text-sm rounded-lg font-medium hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-base-300">
                <a
                  href="/Rajesh patankar_resume.pdf"
                  download="Rajesh patankar_resume.pdf"
                  className="flex-1 btn btn-xs sm:btn-sm bg-base-100 hover:bg-base-300 border-0 text-base-content justify-center"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Resume</span>
                </a>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 btn btn-xs sm:btn-sm bg-base-100 hover:bg-base-300 border-0 text-base-content justify-center"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Email</span>
                </button>
              </div>
            </div>
            
            {/* Current Status */}
            <div className="bg-base-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-base-content mb-1">Current Status</h4>
                  <p className="text-xs sm:text-sm text-base-content opacity-60">Seeking full-time opportunities</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-green-600">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-base-content opacity-40">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Elements - Responsive */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-base-200 rounded-full opacity-5 sm:opacity-10 blur-2xl sm:blur-3xl animate-float"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-base-300 rounded-full opacity-5 sm:opacity-10 blur-2xl sm:blur-3xl animate-float animation-delay-4000"></div>
    </section>
  )
}

export default Hero