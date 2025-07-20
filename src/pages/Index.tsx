import PortfolioHeader from "@/components/PortfolioHeader";
import HeroSection from "@/components/HeroSection";

import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import PortfolioFooter from "@/components/PortfolioFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Fixed Navigation */}
      <PortfolioHeader />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        
        {/* Tech Stack Section */}
        <TechStackSection />
        
        {/* Work Experience Section */}
        <ExperienceSection />
        
        {/* Education Section */}
        <EducationSection />
        
        {/* Personal Projects Section */}
        <ProjectsSection />
        
        {/* Blogs Section */}
        <BlogsSection />
      </main>
      
      {/* Footer */}
      <PortfolioFooter />
    </div>
  );
};

export default Index;
