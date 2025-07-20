import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [{
    degree: "B.Sc. Business Informatics",
    institution: "DHBW Heilbronn",
    period: "2021 - 2024",
    location: "Heilbronn, Germany",
    type: "Dual Studies",
    description: ["Focus on Data Science and Machine Learning", "Thesis on LLM Operations in E-Commerce", "Corporate partnership with Lidl"],
    grade: "Final Grade: 1.8"
  }];

  return (
    <section id="education" className="section-padding bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey in business informatics
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line"></div>

            {/* Education items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2 w-4 h-4 bg-accent rounded-full border-4 border-background glow-box -translate-x-1/2"></div>

                  <Card className="glass-card border-0 glow-box hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-accent mb-1">{edu.degree}</h3>
                          <div className="flex items-center text-primary/80 mb-2">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            <span className="font-medium">{edu.institution}</span>
                            <Badge variant="secondary" className="ml-2 text-xs">{edu.type}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                        <MapPin className="w-4 h-4 ml-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {edu.description.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="text-sm font-medium text-accent">
                        {edu.grade}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
