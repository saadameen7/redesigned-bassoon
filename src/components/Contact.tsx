import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin, Send, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saad.ameenkzs@gmail.com",
      href: "mailto:saad.ameenkzs@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+92 312 4313605",
      href: "tel:+923124313605",
      color: "secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/saadameen7",
      href: "https://linkedin.com/in/saadameen7",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-secondary-bg relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 primary-gradient rounded-full blur-3xl opacity-8 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 secondary-gradient rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Ready to transform your project vision into exceptional results? Let's start the conversation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Enhanced Contact Info */}
          <div className="space-y-12 animate-fade-in-up delay-200">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Start Your <span className="text-gradient-secondary">Success Story</span>
              </h3>
              <p className="text-foreground-muted leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to drive impactful results through strategic project management.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="group relative block"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className={`
                      absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 animate-smooth
                      ${contact.color === 'primary' ? 'primary-gradient' :
                        contact.color === 'secondary' ? 'secondary-gradient' :
                        'accent-gradient'}
                    `}></div>
                    
                    <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-elegant hover:shadow-2xl hover-lift">
                      <div className="flex items-center gap-6">
                        <div className={`
                          w-14 h-14 rounded-2xl flex items-center justify-center shadow-elegant group-hover:scale-110 animate-smooth
                          ${contact.color === 'primary' ? 'primary-gradient glow-primary' :
                            contact.color === 'secondary' ? 'secondary-gradient glow-secondary' :
                            'accent-gradient'}
                        `}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-foreground-muted font-medium mb-1">
                            {contact.label}
                          </div>
                          <div className="text-lg font-bold group-hover:text-primary animate-smooth">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            
            {/* Enhanced Availability Card */}
            <div className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-elegant animate-fade-in-up delay-600">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-6 h-6 text-accent" />
                <h4 className="text-xl font-bold text-gradient-accent">Availability Status</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Currently accepting new projects</span>
                </div>
                <p className="text-foreground-muted">
                  Response time: <span className="text-primary font-semibold">Within 24 hours</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="animate-fade-in-up delay-400">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-80 animate-smooth"></div>
              
              <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-10 shadow-elegant hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <Send className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold mb-3">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-lg focus:border-primary/50 focus:ring-primary/30"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-3">Email Address</label>
                    <Input
                      type="email"
                      name="email"  
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-lg focus:border-primary/50 focus:ring-primary/30"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-3">Project Details</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project vision, challenges, and how we can work together..."
                      className="bg-background/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-lg min-h-[140px] focus:border-primary/50 focus:ring-primary/30"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="group w-full primary-gradient hover-glow-primary text-xl font-bold py-6 rounded-2xl shadow-elegant relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Sparkles className="w-6 h-6 group-hover:rotate-12 animate-smooth" />
                      Start Our Partnership
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 animate-smooth"></div>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;