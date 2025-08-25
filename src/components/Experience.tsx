import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "vFairs",
      role: "Project Manager", 
      period: "April 2025 – Present",
      location: "Global Remote",
      highlights: [
        "Managing global virtual and hybrid events",
        "Leading live client support operations", 
        "Coordinating cross-functional teams across timezones",
        "Successfully delivered 5+ large-scale events"
      ],
      metrics: { events: "5+", teams: "15+", satisfaction: "98%" },
      color: "primary",
      status: "current"
    },
    {
      company: "Kodesinc",
      role: "Business Growth Executive",
      period: "May 2024 – April 2025",
      location: "Lahore, Pakistan", 
      highlights: [
        "Built long-term strategic client relationships",
        "Improved outreach efficiency by 40%",
        "Explored and penetrated new market segments",
        "Drove business development initiatives"
      ],
      metrics: { growth: "40%", clients: "25+", markets: "3" },
      color: "secondary",
      status: "completed"
    },
    {
      company: "GID Enterprises",
      role: "Project Coordinator",
      period: "Feb 2023 – May 2024",
      location: "Lahore, Pakistan",
      highlights: [
        "Coordinated multiple project workstreams",
        "Implemented process improvements",
        "Managed stakeholder communications",
        "Delivered projects within budget constraints"
      ],
      metrics: { projects: "12+", efficiency: "35%", budget: "100%" },
      color: "accent",
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-32 right-20 w-96 h-96 primary-gradient rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 secondary-gradient rounded-full blur-3xl opacity-8 animate-pulse delay-1000"></div>
        
        {/* Animated Timeline Background */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 accent-gradient rounded-full animate-pulse opacity-40"
            style={{
              left: `${15 + i * 10}%`,
              top: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-semibold">Career Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Professional <span className="text-gradient-primary">Journey</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Driving success through strategic leadership and operational excellence across diverse industries
          </p>
          <div className="mt-6 w-24 h-1 primary-gradient rounded-full mx-auto animate-scale-in delay-500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 200 + 300}ms` }}>
                {/* Enhanced Timeline Connection */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-10 lg:left-16 top-32 w-1 h-40 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 rounded-full"></div>
                )}
                
                <div className="flex gap-8 lg:gap-16 items-start">
                  {/* Enhanced Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    {/* Glow Ring */}
                    <div className={`
                      absolute -inset-4 rounded-3xl blur-xl opacity-60 animate-pulse
                      ${exp.color === 'primary' ? 'primary-gradient' : 
                        exp.color === 'secondary' ? 'secondary-gradient' : 
                        'accent-gradient'}
                    `}></div>
                    
                    {/* Main Dot */}
                    <div className={`
                      relative w-20 h-20 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center shadow-elegant group cursor-pointer hover:scale-110 animate-smooth
                      ${exp.color === 'primary' ? 'primary-gradient glow-primary' : 
                        exp.color === 'secondary' ? 'secondary-gradient glow-secondary' : 
                        'accent-gradient'}
                    `}>
                      {exp.status === 'current' ? (
                        <div className="w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
                      ) : (
                        <Building2 className="w-8 h-8 text-white" />
                      )}
                    </div>
                    
                    {/* Status Badge */}
                    {exp.status === 'current' && (
                      <div className="absolute -top-3 -right-3 bg-green-500 border-2 border-background rounded-full px-3 py-1 text-xs font-bold text-white animate-pulse">
                        CURRENT
                      </div>
                    )}
                  </div>
                  
                  {/* Enhanced Content Card */}
                  <div className="flex-1">
                    <div className="group relative">
                      {/* Glassmorphism Background */}
                      <div className={`
                        absolute -inset-4 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 animate-smooth
                        ${exp.color === 'primary' ? 'primary-gradient' :
                          exp.color === 'secondary' ? 'secondary-gradient' :
                          'accent-gradient'}
                      `}></div>
                      
                      <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 shadow-elegant hover:shadow-2xl hover-lift">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary animate-smooth">
                                {exp.role}
                              </h3>
                              {exp.status === 'current' && (
                                <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-3 py-1">
                                  <span className="text-green-400 text-sm font-bold">ACTIVE</span>
                                </div>
                              )}
                            </div>
                            
                            <h4 className={`
                              text-xl lg:text-2xl font-bold
                              ${exp.color === 'primary' ? 'text-primary' :
                                exp.color === 'secondary' ? 'text-secondary' :
                                'text-accent'}
                            `}>
                              {exp.company}
                            </h4>
                            
                            {/* Enhanced Meta Info */}
                            <div className="flex flex-col sm:flex-row gap-4 text-foreground-muted">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span className="font-medium">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Metrics Card */}
                          <div className="bg-background/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:min-w-[200px]">
                            <h5 className="text-sm font-bold text-foreground-muted mb-3">Key Metrics</h5>
                            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
                              {Object.entries(exp.metrics).map(([key, value], mIndex) => (
                                <div key={key} className="text-center lg:text-left">
                                  <div className={`
                                    text-xl font-bold
                                    ${exp.color === 'primary' ? 'text-gradient-primary' :
                                      exp.color === 'secondary' ? 'text-gradient-secondary' :
                                      'text-gradient-accent'}
                                  `}>
                                    {value}
                                  </div>
                                  <div className="text-xs text-foreground-muted capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Achievements Grid */}
                        <div className="space-y-6">
                          <h5 className="text-lg font-bold flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            Key Achievements
                          </h5>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {exp.highlights.map((highlight, hIndex) => (
                              <div 
                                key={hIndex} 
                                className="group/item bg-background/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-background/40 hover-lift animate-smooth"
                                style={{ animationDelay: `${hIndex * 100}ms` }}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`
                                    w-3 h-3 rounded-full mt-2 flex-shrink-0 animate-pulse
                                    ${exp.color === 'primary' ? 'bg-primary' :
                                      exp.color === 'secondary' ? 'bg-secondary' :
                                      'bg-accent'}
                                  `}></div>
                                  <p className="text-foreground-muted group-hover/item:text-foreground animate-smooth leading-relaxed">
                                    {highlight}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
        <div className="mt-24 text-center animate-fade-in-up delay-1000">
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-elegant hover:shadow-2xl hover-glow-secondary group max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl secondary-gradient flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold group-hover:text-primary animate-smooth">
                Ready to Add <span className="text-gradient-secondary">Your Project</span> to This Journey?
              </h3>
              
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Let's discuss how my proven track record can drive exceptional results for your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="secondary-gradient px-8 py-4 rounded-2xl text-lg font-bold text-secondary-foreground hover:scale-105 hover-glow-secondary animate-smooth shadow-elegant">
                  Schedule Meeting
                </button>
                <button className="border-2 border-accent/30 bg-background/10 backdrop-blur-sm text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-2xl text-lg font-bold animate-smooth shadow-elegant">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;