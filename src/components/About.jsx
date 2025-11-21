const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-center text-base-content opacity-60 mb-12">Get to know me better</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-base-content leading-relaxed">
              Hi! I'm <span className="font-bold text-primary">Rajesh Patankar</span>, an aspiring Full Stack MERN Developer 
              with a strong passion for building modern web applications. I'm eager to transform ideas into 
              reality through clean code and innovative solutions.
            </p>
            <p className="text-lg text-base-content leading-relaxed">
              I have solid knowledge in <span className="font-semibold">MongoDB, Express.js, React, and Node.js</span>, 
              and I'm constantly working on projects to strengthen my skills. I focus on learning best practices, 
              writing maintainable code, and staying updated with the latest web technologies.
            </p>
            <p className="text-lg text-base-content leading-relaxed">
              Currently, I'm building my portfolio through personal projects and learning from the developer community. 
              I'm excited to start my professional journey and contribute to meaningful projects. I believe in 
              continuous learning and growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl bg-base-100 hover:scale-105 transition transform animate-slide-up animation-delay-100">
                <div className="text-3xl font-bold mb-1" style={{ color: 'rgb(var(--primary))' }}>MERN</div>
                <div className="text-sm opacity-70">Stack</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-base-100 hover:scale-105 transition transform animate-slide-up animation-delay-200">
                <div className="text-3xl font-bold mb-1" style={{ color: 'rgb(var(--secondary))' }}>10+</div>
                <div className="text-sm opacity-70">Projects Built</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-base-100 hover:scale-105 transition transform animate-slide-up animation-delay-300">
                <div className="text-3xl font-bold mb-1" style={{ color: 'rgb(var(--accent))' }}>100%</div>
                <div className="text-sm opacity-70">Dedication</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-64 h-64 rounded-full filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: 'rgb(var(--primary))' }}></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: 'rgb(var(--secondary))' }}></div>
            
            {/* Image container with modern frame */}
            <div className="relative">
              {/* Animated border */}
              <div className="absolute -inset-1 rounded-3xl opacity-75 blur-sm animate-pulse" style={{ background: 'linear-gradient(45deg, rgb(var(--primary)), rgb(var(--secondary)), rgb(var(--accent)))' }}></div>
              
              {/* Image card */}
              <div className="relative bg-base-100 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <div className="aspect-square">
                  <img 
                    src="/rajesh_profile.jpg" 
                    alt="Rajesh Patankar - MERN Stack Developer" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366f1;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23a855f7;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="400" height="400"/%3E%3Ctext fill="white" font-size="60" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E👨‍💻%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-base-100/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="font-bold text-lg">Rajesh Patankar</p>
                  <p className="text-sm opacity-70">Full Stack MERN Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
