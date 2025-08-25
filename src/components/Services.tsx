import { Target, Users, Calendar, BarChart3, DollarSign, Settings, Sparkles, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Project Management",
      description: "End-to-end project leadership with strategic vision and tactical execution.",
      features: ["Agile Methodologies", "Risk Assessment", "Team Leadership"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Product Management", 
      description: "Product strategy and roadmap development with market-driven insights.",
      features: ["Market Analysis", "Roadmap Planning", "Stakeholder Alignment"],
      color: "secondary"
    },
    {
      icon: Calendar,
      title: "Project Planning & Risk Management",
      description: "Comprehensive planning frameworks with proactive risk mitigation strategies.",
      features: ["Timeline Optimization", "Risk Frameworks", "Contingency Planning"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Monitoring & Control",
      description: "Real-time project tracking and performance optimization systems.",
      features: ["KPI Dashboards", "Performance Analytics", "Quality Assurance"],
      color: "primary"
    },
    {
      icon: Settings,
      title: "Resource Allocation",
      description: "Strategic resource management and team optimization for maximum efficiency.",
      features: ["Capacity Planning", "Team Optimization", "Budget Distribution"],
      color: "secondary"
    },
    {
      icon: DollarSign,
      title: "Budget Management",
      description: "Financial oversight and cost optimization across all project phases.",
      features: ["Cost Control", "Financial Reporting", "ROI Optimization"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-32 bg-secondary-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-40 left-10 w-96 h-96 secondary-gradient rounded-full blur-3xl opacity-8 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 accent-gradient rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 60px 60px'
          }}></div>
        </div>

        {/* Floating Service Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-block bg-secondary/10 border border-secondary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-secondary font-semibold">What I Offer</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Core <span className="text-gradient-secondary">Services</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Comprehensive project management solutions tailored for global impact and sustainable growth
          </p>
          <div className="mt-6 w-24 h-1 secondary-gradient rounded-full mx-auto animate-scale-in delay-500"></div>
        </div>
        
        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                {/* Glassmorphism Container */}
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div className={`
                    absolute -inset-2 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 animate-smooth
                    ${service.color === 'primary' ? 'primary-gradient' :
                      service.color === 'secondary' ? 'secondary-gradient' :
                      'accent-gradient'}
                  `}></div>
                  
                  <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-elegant hover:shadow-2xl animate-smooth h-full">
                    <div className="space-y-6 h-full flex flex-col">
                      {/* Icon Section */}
                      <div className="flex items-start justify-between">
                        <div className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 animate-smooth shadow-elegant
                          ${service.color === 'primary' ? 'primary-gradient glow-primary' :
                            service.color === 'secondary' ? 'secondary-gradient glow-secondary' :
                            'accent-gradient'}
                        `}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Interactive Arrow */}
                        <div className="opacity-0 group-hover:opacity-100 animate-smooth">
                          <ArrowUpRight className={`
                            w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 animate-smooth
                            ${service.color === 'primary' ? 'text-primary' :
                              service.color === 'secondary' ? 'text-secondary' :
                              'text-accent'}
                          `} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary animate-smooth">
                          {service.title}
                        </h3>
                        
                        <p className="text-foreground-muted leading-relaxed group-hover:text-foreground animate-smooth">
                          {service.description}
                        </p>
                        
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {service.features.map((feature, fIndex) => (
                            <div 
                              key={feature}
                              className={`
                                text-xs px-3 py-1 rounded-xl border backdrop-blur-sm opacity-70 group-hover:opacity-100 animate-smooth
                                ${service.color === 'primary' ? 'bg-primary/10 border-primary/20 text-primary' :
                                  service.color === 'secondary' ? 'bg-secondary/10 border-secondary/20 text-secondary' :
                                  'bg-accent/10 border-accent/20 text-accent'}
                              `}
                              style={{ animationDelay: `${fIndex * 100}ms` }}
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Bottom Accent */}
                      <div className={`
                        w-full h-1 rounded-full opacity-50 group-hover:opacity-100 animate-smooth
                        ${service.color === 'primary' ? 'primary-gradient' :
                          service.color === 'secondary' ? 'secondary-gradient' :
                          'accent-gradient'}
                      `}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="text-center animate-fade-in-up delay-1000">
          <div className="relative group max-w-5xl mx-auto">
            {/* Multiple Layered Backgrounds */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-secondary/15 to-accent/10 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 animate-smooth"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 animate-smooth"></div>
            
            <div className="relative bg-card/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12 lg:p-16 shadow-elegant hover:shadow-2xl">
              <div className="space-y-8">
                {/* Icon Grid */}
                <div className="flex justify-center mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    {[Sparkles, Target, BarChart3].map((Icon, i) => (
                      <div 
                        key={i}
                        className={`
                          w-12 h-12 rounded-2xl flex items-center justify-center animate-bounce
                          ${i === 0 ? 'primary-gradient' : i === 1 ? 'secondary-gradient' : 'accent-gradient'}
                        `}
                        style={{ animationDelay: `${i * 200}ms`, animationDuration: '3s' }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold group-hover:text-primary animate-smooth">
                  Ready to <span className="text-gradient-primary">Transform</span> Your Projects?
                </h3>
                
                <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                  Let's discuss how strategic project management can drive your organization's success 
                  and deliver measurable results that exceed expectations.
                </p>
                
                {/* Enhanced Buttons */}
                <div className="flex flex-col lg:flex-row gap-6 justify-center pt-6">
                  <button className="group/btn relative secondary-gradient px-10 py-5 rounded-2xl text-lg font-bold text-secondary-foreground hover:scale-105 hover-glow-secondary animate-smooth shadow-elegant overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      <Sparkles className="w-5 h-5 group-hover/btn:rotate-12 animate-smooth" />
                      Schedule Consultation
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-full group-hover/btn:translate-x-0 animate-smooth"></div>
                  </button>
                  
                  <button className="group/btn relative border-2 border-primary/30 bg-background/10 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 rounded-2xl text-lg font-bold animate-smooth shadow-elegant overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      <Target className="w-5 h-5 group-hover/btn:scale-110 animate-smooth" />
                      Download Resume
                    </span>
                  </button>
                  
                  <button className="group/btn relative border-2 border-accent/30 bg-background/10 backdrop-blur-sm text-accent hover:bg-accent hover:text-accent-foreground px-10 py-5 rounded-2xl text-lg font-bold animate-smooth shadow-elegant overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 group-hover/btn:scale-110 animate-smooth" />
                      View Case Studies
                    </span>
                  </button>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                  {[
                    { metric: "98%", label: "Client Satisfaction", icon: Target },
                    { metric: "5+", label: "Global Events", icon: Sparkles },
                    { metric: "25+", label: "Projects Delivered", icon: BarChart3 }
                  ].map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={index} className="text-center group/stat">
                        <div className={`
                          w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover/stat:scale-110 animate-smooth
                          ${index === 0 ? 'primary-gradient' : index === 1 ? 'secondary-gradient' : 'accent-gradient'}
                        `}>
                          <StatIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`
                          text-3xl font-bold mb-2
                          ${index === 0 ? 'text-gradient-primary' : index === 1 ? 'text-gradient-secondary' : 'text-gradient-accent'}
                        `}>
                          {stat.metric}
                        </div>
                        <div className="text-foreground-muted font-medium">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;