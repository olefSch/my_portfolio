import { Github, Linkedin, BookOpen, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-bounce-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-lg opacity-50 animate-glow"></div>
              <img
                src={profileImage}
                alt="Ole Schildt"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent/30 glow-box"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Ole</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A Machine Learning enthusiast & LLM Ops Engineer passionate about AI, football, and clean code
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
              <div className="glass-card p-4 rounded-lg">
                <p className="text-sm text-accent font-medium">🔭 Currently working for</p>
                <p className="text-lg font-semibold">Lidl E-Commerce</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <p className="text-sm text-accent font-medium">🌱 I'm a</p>
                <p className="text-lg font-semibold">LLM Ops / ML Engineer</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <p className="text-sm text-accent font-medium">💬 Ask me about</p>
                <p className="text-lg font-semibold">Football, AI & Self-hosting</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <p className="text-sm text-accent font-medium">⚡ Fun fact</p>
                <p className="text-lg font-semibold">"The longer I code, the cleaner I prefer it"</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button variant="outline" size="lg" className="glow-box hover:scale-105 transition-transform" asChild>
                <a href="https://github.com/olefSch" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glow-box hover:scale-105 transition-transform" asChild>
                <a href="https://www.linkedin.com/in/ole-schildt-5491a1253/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glow-box hover:scale-105 transition-transform" asChild>
                <a href="https://medium.com/@olefSch" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Medium
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ArrowDown className="w-6 h-6 text-accent" />
      </button>
    </section>
  );
};

export default HeroSection;
