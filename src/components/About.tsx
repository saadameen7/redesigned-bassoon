const About = () => {
  const strengths = [
    { name: "Project Management", icon: "🎯", delay: "0ms" },
    { name: "IT Management", icon: "💻", delay: "100ms" },
    { name: "Requirements Gathering", icon: "📋", delay: "200ms" },
    { name: "Business Analysis", icon: "📊", delay: "300ms" },
    { name: "Project Delivery", icon: "🚀", delay: "400ms" },
    { name: "Agile Methodologies", icon: "⚡", delay: "500ms" }
  ];

  return (
    <section id="about" className="py-32 bg-secondary-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 secondary-gradient rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 accent-gradient rounded-full blur-3xl opacity-8 animate-pulse delay-1000"></div>
        
        {/* Geometric Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-12">
            {/* Title with Animation */}
            <div className="animate-fade-in-up">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                About <span className="text-gradient-primary">Me</span>
              </h2>
              <div className="relative">
                <p className="text-xl text-foreground-muted leading-relaxed">
                  A <span className="text-gradient-secondary font-bold text-2xl">Visionary Project Manager</span> with 
                  a vision to motivate, lead, and enable technical and business professionals to accomplish 
                  focused project and business goals.
                </p>
                {/* Animated underline */}
                <div className="absolute -bottom-3 left-0 w-32 h-1 secondary-gradient rounded-full animate-scale-in delay-500"></div>
              </div>
            </div>
            
            {/* Enhanced Education Card */}
            <div className="space-y-8 animate-fade-in-up delay-300">
              <h3 className="text-3xl font-bold">
                <span className="text-gradient-accent">Education</span>
              </h3>
              
              <div className="group relative">
                {/* Glassmorphism Background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 animate-smooth"></div>
                
                <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-elegant hover:shadow-2xl hover-lift">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold group-hover:text-primary animate-smooth">
                          Bachelors in Business and Information Technology
                        </h4>
                        <p className="text-primary font-bold text-lg">Major in IT • University of the Punjab</p>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full primary-gradient animate-pulse"></div>
                          <p className="text-foreground-muted font-medium">2020 – 2024</p>
                        </div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="bg-accent/20 border border-accent/30 backdrop-blur-sm rounded-2xl px-4 py-2">
                        <span className="text-accent font-bold text-sm">Graduate</span>
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-foreground-muted mb-3">Technical Proficiency:</p>
                      <div className="flex flex-wrap gap-3">
                        {['Python', 'C', 'C#'].map((tech, index) => (
                          <div 
                            key={tech} 
                            className="bg-background/50 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 hover:scale-105 animate-smooth cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <span className="text-sm font-semibold text-primary">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Right Content - Strengths */}
          <div className="space-y-12">
            <div className="text-center lg:text-left animate-fade-in-up delay-200">
              <h3 className="text-3xl font-bold mb-3">
                Key <span className="text-gradient-secondary">Strengths</span>
              </h3>
              <p className="text-foreground-muted">Core competencies driving project success</p>
            </div>
            
            {/* Interactive Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div 
                  key={strength.name}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: strength.delay }}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 primary-gradient rounded-2xl blur-lg opacity-0 group-hover:opacity-30 animate-smooth"></div>
                  
                  <div className="relative bg-card/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover-lift hover:bg-card/80 animate-smooth cursor-pointer">
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl group-hover:scale-110 animate-smooth">
                        {strength.icon}
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <span className="font-bold text-foreground group-hover:text-primary animate-smooth">
                          {strength.name}
                        </span>
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="w-2 h-8 bg-gradient-to-t from-primary/30 to-primary rounded-full group-hover:from-primary group-hover:to-primary-glow animate-smooth"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced Philosophy Card */}
            <div className="animate-fade-in-up delay-600">
              <div className="group relative">
                {/* Dynamic Background */}
                <div className="absolute -inset-3 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 animate-smooth"></div>
                
                <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-elegant hover:shadow-2xl hover-lift">
                  <div className="space-y-6">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center">
                        <span className="text-3xl">💡</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gradient-primary">My Philosophy</h4>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="relative text-lg text-foreground-muted italic leading-relaxed pl-6 border-l-4 border-gradient-to-b from-primary to-secondary">
                      "Success in project management isn't just about meeting deadlines—it's about 
                      inspiring teams, navigating challenges with resilience, and delivering solutions 
                      that create lasting impact."
                    </blockquote>
                    
                    {/* Signature */}
                    <div className="flex justify-end">
                      <div className="text-sm font-semibold text-gradient-accent">— Saad Ameen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA Section */}
        <div className="mt-20 text-center animate-fade-in-up delay-800">
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-elegant hover:shadow-2xl hover-glow-primary group max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary animate-smooth">
              Ready to Drive <span className="text-gradient-secondary">Innovation</span> Together?
            </h3>
            <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
              Let's explore how strategic project leadership can transform your organization's vision into measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="primary-gradient px-8 py-4 rounded-2xl text-lg font-bold text-primary-foreground hover:scale-105 hover-glow-primary animate-smooth shadow-elegant">
                Start a Conversation
              </button>
              <button className="border-2 border-secondary/30 bg-background/10 backdrop-blur-sm text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-2xl text-lg font-bold animate-smooth shadow-elegant">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;