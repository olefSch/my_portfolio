import { Github, Linkedin, BookOpen, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 sm:pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-bounce-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-lg opacity-50 animate-glow"></div>
              <img
                src="/profile_image.jpg"
                alt="Ole Schildt"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent/30 glow-box"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Ole</span>
            </h1>

            <div className="flex flex-col items-center space-y-8 mt-8">
              {/* Quick Facts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-sm text-accent font-medium">🔭 Currently working for</p>
                  <p className="text-lg font-semibold">Lidl E-Commerce</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-sm text-accent font-medium">🌱 I'm a</p>
                  <p className="text-lg font-semibold">ML/LLM Ops Engineer</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-sm text-accent font-medium">💬 Ask me about</p>
                  <p className="text-lg font-semibold">Everything regarding football, automation and techno music</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-sm text-accent font-medium">⚡ Fun fact</p>
                  <p className="text-lg font-semibold">"The longer I code, the cleaner I prefer it"</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-4">
                <Button variant="outline" size="lg" className="glow-box hover:scale-105 transition-transform w-full sm:w-auto" asChild>
                  <a href="https://github.com/olefSch" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="glow-box hover:scale-105 transition-transform w-full sm:w-auto" asChild>
                  <a href="https.linkedin.com/in/ole-schildt-5491a1253/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="glow-box hover:scale-105 transition-transform w-full sm:w-auto" asChild>
                  <a href="https://medium.com/@olefSch" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Medium
                  </a>
                </Button>
              </div>

              {/* Scroll indicator */}
              <div className="mt-8">
                <button 
                  className="animate-bounce cursor-pointer"
                  onClick={() => document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ArrowDown className="w-8 h-8 text-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
