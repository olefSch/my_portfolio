import { Button } from "@/components/ui/button";
import { Github, Linkedin, BookOpen } from "lucide-react";

const PortfolioFooter = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/olefSch",
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ole-schildt-5491a1253/",
    },
    {
      name: "Medium",
      icon: BookOpen,
      url: "https://medium.com/@olefSch",
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">
              Ole <span className="gradient-text">Schildt</span>
            </h3>
            <div className="flex justify-center space-x-6 mb-4">
              {socialLinks.map(social => (
                <Button key={social.name} size="sm" variant="ghost" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
            <div className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Ole Schildt. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
