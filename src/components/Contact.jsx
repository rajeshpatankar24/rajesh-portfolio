import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Message sent successfully! 🎉')
    setTimeout(() => setStatus(''), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'rgb(var(--primary))' }}>
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-base-content">Let's Connect</h3>
              <p className="text-base-content opacity-70 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-base-100 hover:shadow-lg hover:translate-x-2 transition-all duration-300 animate-slide-up animation-delay-100">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl animate-float" style={{ backgroundColor: 'rgb(var(--primary) / 0.1)' }}>
                  📧
                </div>
                <div>
                  <p className="text-sm opacity-70 text-base-content">Email</p>
                  <p className="font-semibold text-base-content">rajeshpatankar24@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-base-100 hover:shadow-lg hover:translate-x-2 transition-all duration-300 animate-slide-up animation-delay-200">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl animate-float" style={{ backgroundColor: 'rgb(var(--secondary) / 0.1)', animationDelay: '0.5s' }}>
                  📱
                </div>
                <div>
                  <p className="text-sm opacity-70 text-base-content">Phone</p>
                  <p className="font-semibold text-base-content">+91 9522440876</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-base-100 hover:shadow-lg hover:translate-x-2 transition-all duration-300 animate-slide-up animation-delay-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl animate-float" style={{ backgroundColor: 'rgb(var(--accent) / 0.1)', animationDelay: '1s' }}>
                  📍
                </div>
                <div>
                  <p className="text-sm opacity-70 text-base-content">Location</p>
                  <p className="font-semibold text-base-content">Indore,India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { name: 'GitHub', icon: 'G', link: 'https://github.com/rajeshpatankar24' },
                { name: 'LinkedIn', icon: 'L', link: 'https://linkedin.com/in/rajeshpatankar-y2024' },
                { name: 'Twitter', icon: 'T', link: '#' }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="btn btn-circle btn-primary hover:scale-110 hover:rotate-12 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-base-100 shadow-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input input-bordered input-primary w-full"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input input-bordered input-primary w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="textarea textarea-bordered textarea-primary w-full resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full btn-lg hover:scale-105 transition-transform"
              >
                Send Message 📨
              </button>
              
              {status && (
                <div className="alert alert-success animate-slide-up">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{status}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
