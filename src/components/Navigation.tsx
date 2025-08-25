import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = targetId === 'home' ? 
      document.getElementById('hero') : 
      document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-background/95 backdrop-blur-lg shadow-elegant' : 'bg-transparent'}
    `}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-gradient-primary hover-scale"
            >
              SA
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground-muted hover:text-primary animate-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="primary-gradient px-6 py-3 rounded-xl text-white font-semibold hover-glow-primary animate-smooth"
            >
              Let's Talk
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-card hover:bg-card-hover animate-smooth"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground-muted hover:text-primary animate-smooth font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full primary-gradient px-6 py-3 rounded-xl text-white font-semibold hover-glow-primary animate-smooth mt-4"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;