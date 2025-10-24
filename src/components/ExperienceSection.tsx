import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
const ExperienceSection = () => {
  const experiences = [{
    title: "Junior ML/LLM Ops Engineer",
    company: "Lidl E-Commerce",
    period: "2025 - Present",
    location: "Heilbronn, Germany",
    type: "Part-time (80% - 32h/week)",
    description: ["Deploying and monitoring machine learing models in production", "Automated training pipelines", "Continuous integration and delivery"],
    technologies: ["Python", "Google Cloud", "Kubernetes", "MLflow", "Databricks", "Spark", "AzureDevOps"]
  }, {
    title: "Data Science -> ML Engineer",
    company: "Lidl Digital -> Lidl E-Commerce",
    period: "2022 - 2025",
    location: "Heilbronn, Germany",
    type: "Corporate Student",
    description: ["Developing computer vision models", "GenAI Monitoirng and Observability", "Spark ETL pipelines for data processing"],
    technologies: ["Python", "SQL", "Streamlit", "Pandas", "Docker"]
  }];
  return <section id="experience" className="section-padding bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey in machine learning and software engineering
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line"></div>

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2 w-4 h-4 bg-accent rounded-full border-4 border-background glow-box -translate-x-1/2"></div>

                  <Card className="glass-card border-0 glow-box hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-accent mb-1">{exp.title}</h3>
                          <div className="flex items-center text-primary/80 mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                            <Badge variant="secondary" className="ml-2 text-xs">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                        <MapPin className="w-4 h-4 ml-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default ExperienceSection;
