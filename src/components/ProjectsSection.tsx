import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const favoriteProjects = [
    {
      title: "LLM Operations Framework",
      description: "Framework for deploying and monitoring LLMs in production with automated retraining and performance monitoring.",
      technologies: ["Python", "Docker", "Kubernetes", "Prometheus"],
      github: "https://github.com/olefSch/llm-ops-framework"
    },
    {
      title: "E-Commerce ML Pipeline",
      description: "End-to-end ML pipeline for product recommendations and demand forecasting in e-commerce environments.",
      technologies: ["TensorFlow", "MLflow", "Google Cloud", "FastAPI"],
      github: "https://github.com/olefSch/ecommerce-ml-pipeline"
    },
    {
      title: "Data Mesh Architecture",
      description: "Implementation of data mesh architecture for enterprise data management with domain-driven ownership.",
      technologies: ["Apache Spark", "Kafka", "Snowflake", "dbt"],
      github: "https://github.com/olefSch/data-mesh-implementation"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Personal <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My favorite projects showcasing ML engineering and data science
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProjects.map((project, index) => (
              <Card key={index} className="glass-card border-0 glow-box hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-accent">{project.title}</h4>
                    <Button size="sm" variant="ghost" className="p-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
