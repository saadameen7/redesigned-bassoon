import { Button } from "@/components/ui/button";
import saadPortrait from "@/assets/saad-portrait.jpg";
import { ArrowRight, Sparkles, Target, Globe, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 primary-gradient rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 secondary-gradient rounded-full blur-3xl opacity-15 animate-pulse delay-1000"
          style={{
            right: `${15 + mousePosition.x * 0.08}%`,
            bottom: `${20 + mousePosition.y * 0.08}%`,
            transform: 'translate(50%, 50%)',
          }}
        ></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0">
          {/* Animated Circles */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-secondary/40 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-accent/50 rounded-full animate-bounce"></div>
          
          {/* Modern Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 primary-gradient rounded-full animate-bounce opacity-60"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left space-y-10">
          {/* Status Badge */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Available for Projects</span>
            </div>
          </div>

          {/* Enhanced Title */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block animate-scale-in">Saad</span>
              <span className="block text-gradient-primary animate-scale-in delay-300">Ameen</span>
            </h1>
            
            {/* Animated Subtitle */}
            <div className="relative">
              <p className="text-xl lg:text-3xl font-medium text-foreground-muted animate-fade-in delay-500">
                Project Manager
                <span className="mx-3 text-primary">|</span>
                Business & IT Professional
              </p>
              <div className="absolute -bottom-2 left-0 w-24 h-1 primary-gradient rounded-full animate-scale-in delay-700"></div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="space-y-8 animate-fade-in-up delay-700">
            <p className="text-lg lg:text-2xl text-foreground-muted leading-relaxed max-w-2xl">
              <span className="text-gradient-secondary font-bold text-xl lg:text-3xl">Turning vision into execution</span>
              <br className="hidden lg:block" />
              <span className="text-base lg:text-xl"> — leading projects that deliver impact across global markets with precision and passion.</span>
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-1000">
              <Button 
                onClick={scrollToPortfolio}
                size="lg" 
                className="group primary-gradient hover-glow-primary px-10 py-5 text-lg font-bold rounded-2xl shadow-elegant animate-smooth relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 animate-smooth" />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 animate-smooth"></div>
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="group border-2 border-primary/30 bg-background/10 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5 text-lg font-bold rounded-2xl shadow-elegant animate-smooth relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 animate-smooth" />
                  Let's Connect
                </span>
              </Button>
            </div>
          </div>
          
          {/* Enhanced Interactive Stats */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/30 animate-fade-in delay-1200">
            {[
              { icon: Target, value: "5+", label: "Global Events", color: "primary" },
              { icon: Globe, value: "3+", label: "Years Experience", color: "secondary" },
              { icon: Zap, value: "11", label: "Organizations Led", color: "accent" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group text-center hover-lift cursor-pointer" style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
                  <div className="space-y-3">
                    <div className={`
                      w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 animate-smooth
                      ${stat.color === 'primary' ? 'primary-gradient glow-primary' :
                        stat.color === 'secondary' ? 'secondary-gradient glow-secondary' :
                        'accent-gradient'}
                    `}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className={`
                      text-3xl lg:text-4xl font-bold group-hover:scale-105 animate-smooth
                      ${stat.color === 'primary' ? 'text-gradient-primary' :
                        stat.color === 'secondary' ? 'text-gradient-secondary' :
                        'text-gradient-accent'}
                    `}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground-muted group-hover:text-foreground animate-smooth">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Enhanced Right Image Section */}
        <div className="flex justify-center lg:justify-end animate-fade-in delay-500">
          <div className="relative group">
            {/* Glassmorphism Background */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-3xl rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 animate-smooth"></div>
            
            {/* Main Image Container with Enhanced Effects */}
            <div className="relative">
              {/* Animated Glow Ring */}
              <div className="absolute -inset-6 primary-gradient rounded-[2.5rem] blur-2xl opacity-30 animate-pulse group-hover:opacity-50 animate-smooth"></div>
              
              {/* Glass Card Container */}
              <div className="relative bg-card/20 backdrop-blur-sm border border-white/10 rounded-[2rem] p-4 shadow-elegant hover:shadow-2xl animate-smooth">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img 
                    src={saadPortrait} 
                    alt="Saad Ameen - Visionary Project Manager" 
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover group-hover:scale-105 animate-smooth"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 animate-smooth"></div>
                </div>
              </div>
              
              {/* Enhanced Floating Achievement Badges */}
              <div className="absolute -top-8 -right-8 animate-bounce-in delay-300">
                <div className="relative group/badge">
                  <div className="absolute inset-0 primary-gradient blur-lg opacity-60"></div>
                  <div className="relative bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold shadow-elegant border border-white/20 backdrop-blur-sm hover:scale-110 animate-smooth cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                      <span>Visionary Leader</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-8 animate-bounce-in delay-600">
                <div className="relative group/badge">
                  <div className="absolute inset-0 secondary-gradient blur-lg opacity-60"></div>
                  <div className="relative bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl font-bold shadow-elegant border border-white/20 backdrop-blur-sm hover:scale-110 animate-smooth cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 animate-pulse" />
                      <span>Global Impact</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-12 animate-bounce-in delay-900">
                <div className="relative group/badge">
                  <div className="absolute inset-0 accent-gradient blur-lg opacity-60"></div>
                  <div className="relative bg-accent text-accent-foreground px-5 py-2 rounded-xl font-bold shadow-elegant border border-white/20 backdrop-blur-sm hover:scale-110 animate-smooth cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>Precision</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 animate-spin"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: `${100 + i * 30}px`,
                      animationDuration: `${8 + i * 2}s`,
                      animationDelay: `${i * 1}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Interactive Corner Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 animate-smooth"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-secondary/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 animate-smooth delay-200"></div>
              
              {/* Success Metrics Floating Display */}
              <div className="absolute top-1/2 -right-16 animate-fade-in delay-1000 opacity-0 lg:opacity-100">
                <div className="bg-background/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-elegant hover:shadow-2xl animate-smooth">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-gradient-primary">98%</div>
                    <div className="text-xs text-foreground-muted font-medium">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;