import { Clock, Users, TrendingUp, Award, Zap, CheckCircle, Star, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Global Food Fortification Summit",
      subtitle: "12-Day Accelerated Launch",
      challenge: "Deliver a global summit with only 12 days preparation time, coordinating multiple international organizations with complex logistics.",
      action: "Implemented rapid project management frameworks, established 24/7 communication protocols, and created streamlined decision-making processes across 11 organizations.",
      result: "Flawless execution of 3-day summit with 500+ global participants, zero technical issues, and 98% satisfaction rate from stakeholders.",
      takeaway: "Extreme deadlines demand extraordinary leadership - success comes from clear communication and unwavering focus.",
      metrics: [
        { icon: Clock, value: "12", label: "Days to Launch", color: "primary" },
        { icon: Users, value: "11", label: "Organizations", color: "secondary" },
        { icon: TrendingUp, value: "98%", label: "Satisfaction", color: "accent" }
      ],
      tags: ["Crisis Management", "Global Coordination", "Event Production"],
      color: "primary",
      status: "featured"
    },
    {
      title: "Phoenix Project Recovery",
      subtitle: "Client Bankruptcy to Acquisition",
      challenge: "Navigate a critical project through client bankruptcy while maintaining team morale and project momentum during uncertain times.",
      action: "Took full ownership of the situation, restructured project scope, maintained transparent communication with all stakeholders, and led the team through the transition period with passion and determination.",
      result: "Successfully guided project to completion, leading to acquisition by new client and continued development under my team's leadership.",
      takeaway: "Ownership and passion can transform the bleakest situations into opportunities for growth and success.",
      metrics: [
        { icon: Award, value: "100%", label: "Project Saved", color: "primary" },
        { icon: Users, value: "15", label: "Team Members", color: "secondary" },
        { icon: CheckCircle, value: "6", label: "Month Recovery", color: "accent" }
      ],
      tags: ["Crisis Leadership", "Team Management", "Business Continuity"],
      color: "secondary",
      status: "success"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] primary-gradient rounded-full blur-3xl opacity-8 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 secondary-gradient rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        
        {/* Success Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 150px 150px, 80px 80px'
          }}></div>
        </div>

        {/* Floating Achievement Icons */}
        {[Star, Award, TrendingUp, CheckCircle].map((Icon, i) => (
          <Icon
            key={i}
            className="absolute w-6 h-6 text-primary/20 animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-block bg-accent/10 border border-accent/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-accent font-semibold">Success Stories</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Project <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Case studies showcasing leadership under pressure, strategic problem-solving, and transformational results
          </p>
          <div className="mt-6 w-24 h-1 accent-gradient rounded-full mx-auto animate-scale-in delay-500"></div>
        </div>
        
        {/* Enhanced Projects */}
        <div className="space-y-24 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`
                grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up
                ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}
              `}
              style={{ animationDelay: `${index * 300 + 300}ms` }}
            >
              {/* Enhanced Project Card */}
              <div 
                className={`
                  relative group
                  ${index % 2 === 1 ? 'lg:col-start-2' : ''}
                `}
              >
                {/* Multi-layered Background Effects */}
                <div className={`
                  absolute -inset-8 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 animate-smooth
                  ${project.color === 'primary' ? 'primary-gradient' : 'secondary-gradient'}
                `}></div>
                <div className={`
                  absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 animate-smooth
                  ${project.color === 'primary' ? 'secondary-gradient' : 'accent-gradient'}
                `}></div>
                
                <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-[2rem] p-10 lg:p-12 shadow-elegant hover:shadow-2xl hover-lift">
                  <div className="space-y-8">
                    {/* Enhanced Header */}
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className={`
                          inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-bold text-sm border backdrop-blur-sm
                          ${project.color === 'primary' ? 
                            'bg-primary/10 border-primary/20 text-primary' : 
                            'bg-secondary/10 border-secondary/20 text-secondary'}
                        `}>
                          <Zap className="w-4 h-4" />
                          {project.subtitle}
                        </div>
                        
                        {project.status === 'featured' && (
                          <div className="bg-accent/20 border border-accent/30 rounded-2xl px-3 py-1">
                            <span className="text-accent font-bold text-xs">FEATURED</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold group-hover:text-primary animate-smooth">
                        {project.title}
                      </h3>
                      
                      {/* Project Tags */}
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tIndex) => (
                          <div 
                            key={tag}
                            className="bg-background/50 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-1 text-sm font-medium hover:scale-105 animate-smooth cursor-pointer"
                            style={{ animationDelay: `${tIndex * 100}ms` }}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced Challenge → Action → Result Flow */}
                    <div className="space-y-8">
                      <div className="group/section">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-red-400" />
                          </div>
                          <h4 className="text-lg font-bold text-red-400">Challenge</h4>
                        </div>
                        <p className="text-foreground-muted leading-relaxed pl-11 group-hover/section:text-foreground animate-smooth">
                          {project.challenge}
                        </p>
                      </div>
                      
                      <div className="group/section">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-accent" />
                          </div>
                          <h4 className="text-lg font-bold text-accent">Strategic Action</h4>
                        </div>
                        <p className="text-foreground-muted leading-relaxed pl-11 group-hover/section:text-foreground animate-smooth">
                          {project.action}
                        </p>
                      </div>
                      
                      <div className="group/section">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`
                            w-8 h-8 rounded-xl border flex items-center justify-center
                            ${project.color === 'primary' ? 
                              'bg-primary/20 border-primary/30' : 
                              'bg-secondary/20 border-secondary/30'}
                          `}>
                            <CheckCircle className={`
                              w-4 h-4
                              ${project.color === 'primary' ? 'text-primary' : 'text-secondary'}
                            `} />
                          </div>
                          <h4 className={`
                            text-lg font-bold
                            ${project.color === 'primary' ? 'text-primary' : 'text-secondary'}
                          `}>
                            Transformational Result
                          </h4>
                        </div>
                        <p className="text-foreground-muted leading-relaxed pl-11 group-hover/section:text-foreground animate-smooth">
                          {project.result}
                        </p>
                      </div>
                    </div>
                    
                    {/* Enhanced Key Takeaway */}
                    <div className="bg-background/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="w-6 h-6 text-gradient-accent" />
                        <h4 className="text-lg font-bold text-gradient-accent">Key Leadership Insight</h4>
                      </div>
                      <blockquote className="text-foreground-muted italic leading-relaxed text-lg">
                        "{project.takeaway}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Metrics Dashboard */}
              <div className={`
                space-y-8
                ${index % 2 === 1 ? 'lg:col-start-1' : ''}
              `}>
                <div className="text-center lg:text-left">
                  <h4 className="text-2xl font-bold mb-3">
                    Project <span className="text-gradient-secondary">Impact</span>
                  </h4>
                  <p className="text-foreground-muted">Measurable outcomes and key performance indicators</p>
                </div>
                
                <div className="grid gap-6">
                  {project.metrics.map((metric, mIndex) => {
                    const IconComponent = metric.icon;
                    return (
                      <div 
                        key={mIndex}
                        className="group/metric relative"
                      >
                        {/* Glow Effect */}
                        <div className={`
                          absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover/metric:opacity-30 animate-smooth
                          ${metric.color === 'primary' ? 'primary-gradient' :
                            metric.color === 'secondary' ? 'secondary-gradient' :
                            'accent-gradient'}
                        `}></div>
                        
                        <div className="relative bg-card/60 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-elegant hover:shadow-2xl hover-lift">
                          <div className="flex items-center gap-6">
                            {/* Icon */}
                            <div className={`
                              w-16 h-16 rounded-2xl flex items-center justify-center group-hover/metric:scale-110 animate-smooth shadow-elegant
                              ${metric.color === 'primary' ? 'primary-gradient' :
                                metric.color === 'secondary' ? 'secondary-gradient' :
                                'accent-gradient'}
                            `}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                              <div className={`
                                text-4xl font-bold mb-2 group-hover/metric:scale-105 animate-smooth
                                ${metric.color === 'primary' ? 'text-gradient-primary' :
                                  metric.color === 'secondary' ? 'text-gradient-secondary' :
                                  'text-gradient-accent'}
                              `}>
                                {metric.value}
                              </div>
                              <div className="text-foreground-muted font-medium group-hover/metric:text-foreground animate-smooth">
                                {metric.label}
                              </div>
                            </div>
                            
                            {/* Arrow Indicator */}
                            <ArrowRight className={`
                              w-6 h-6 opacity-0 group-hover/metric:opacity-100 group-hover/metric:translate-x-1 animate-smooth
                              ${metric.color === 'primary' ? 'text-primary' :
                                metric.color === 'secondary' ? 'text-secondary' :
                                'text-accent'}
                            `} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Success Badge */}
                <div className="text-center lg:text-left pt-6">
                  <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">
                      {project.status === 'featured' ? 'Featured Success Story' : 'Proven Results'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-32 text-center animate-fade-in-up delay-1000">
          <div className="relative group max-w-5xl mx-auto">
            {/* Multi-layered Glow Effects */}
            <div className="absolute -inset-12 bg-gradient-to-r from-primary/10 via-accent/15 to-secondary/10 rounded-[4rem] blur-3xl opacity-60 group-hover:opacity-80 animate-smooth"></div>
            <div className="absolute -inset-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 animate-smooth"></div>
            
            <div className="relative bg-card/30 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-16 shadow-elegant hover:shadow-2xl">
              <div className="space-y-10">
                {/* Icon Constellation */}
                <div className="flex justify-center mb-10">
                  <div className="grid grid-cols-4 gap-6">
                    {[Award, Star, TrendingUp, CheckCircle].map((Icon, i) => (
                      <div 
                        key={i}
                        className={`
                          w-14 h-14 rounded-2xl flex items-center justify-center animate-bounce shadow-elegant
                          ${i % 2 === 0 ? 'primary-gradient' : 'secondary-gradient'}
                        `}
                        style={{ 
                          animationDelay: `${i * 250}ms`, 
                          animationDuration: '4s' 
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold group-hover:text-primary animate-smooth">
                  Ready to Create Your <span className="text-gradient-accent">Success Story</span>?
                </h3>
                
                <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                  Let's transform your project challenges into breakthrough achievements that set new industry standards.
                </p>
                
                {/* Enhanced Action Buttons */}
                <div className="flex flex-col lg:flex-row gap-6 justify-center pt-8">
                  <button className="group/btn relative accent-gradient px-12 py-6 rounded-2xl text-xl font-bold text-accent-foreground hover:scale-105 hover-glow-primary animate-smooth shadow-elegant overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      <Star className="w-6 h-6 group-hover/btn:rotate-12 animate-smooth" />
                      Start Your Project
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 animate-smooth"></div>
                  </button>
                  
                  <button className="group/btn relative border-2 border-secondary/30 bg-background/10 backdrop-blur-sm text-secondary hover:bg-secondary hover:text-secondary-foreground px-12 py-6 rounded-2xl text-xl font-bold animate-smooth shadow-elegant">
                    <span className="relative z-10 flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 group-hover/btn:scale-110 animate-smooth" />
                      View All Projects
                    </span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
                  {[
                    { value: "500+", label: "Global Participants" },
                    { value: "11", label: "Organizations" },
                    { value: "98%", label: "Success Rate" },
                    { value: "100%", label: "Client Retention" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group/trust">
                      <div className={`
                        text-3xl font-bold mb-2 group-hover/trust:scale-105 animate-smooth
                        ${index % 2 === 0 ? 'text-gradient-primary' : 'text-gradient-secondary'}
                      `}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground-muted font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;