import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-foreground-muted">
              © 2024 Saad Ameen. Turning vision into execution.
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="mailto:saad.ameenkzs@gmail.com"
                className="text-foreground-muted hover:text-primary animate-smooth"
              >
                saad.ameenkzs@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/saadameen7"
                className="text-foreground-muted hover:text-primary animate-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
