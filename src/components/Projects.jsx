const Projects = () => {
  const projects = [
    {
      title: 'Tender Management System',
      description: 'Complete tender management solution with bidding, tracking, and document management features',
      icon: '📋',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['Bid Management', 'Document Upload', 'Real-time Tracking', 'User Authentication'],
      link: 'https://tender-management-mu.vercel.app/'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat app with instant messaging, group chats, and media sharing capabilities',
      icon: '💬',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      features: ['Real-time Messaging', 'Group Chats', 'Media Sharing', 'Online Status'],
      link: 'https://chat-app-sage-beta.vercel.app/'
    },
    {
      title: 'Business AC Website',
      description: 'Professional air conditioning business website with service booking and product showcase',
      icon: '❄️',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
      features: ['Service Booking', 'Product Catalog', 'Contact Forms', 'Responsive Design'],
      link: 'https://glacial-engineers.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in" style={{ color: 'rgb(var(--primary))' }}>
          Featured Projects
        </h2>
        <p className="text-center text-base-content opacity-60 mb-12">Some of my recent work</p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-base-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon Header */}
              <div 
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ 
                  backgroundColor: 'rgb(var(--primary) / 0.1)'
                }}
              >
                <div className="text-8xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {project.icon}
                </div>
                
                {/* Animated Background Circles */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 animate-blob"
                  style={{ backgroundColor: 'rgb(var(--primary))' }}
                ></div>
                <div 
                  className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-20 animate-blob animation-delay-2000"
                  style={{ backgroundColor: 'rgb(var(--primary))' }}
                ></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-base-content opacity-70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 opacity-60">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1 text-sm">
                        <span className="text-green-500">✓</span>
                        <span className="opacity-70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-base-200 text-base-content hover:scale-110 transition-transform h-fit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button - Always at bottom */}
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full group-hover:scale-105 transition-transform"
                  >
                    <span>View Project</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                style={{ 
                  boxShadow: '0 0 60px rgb(var(--primary) / 0.6)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
