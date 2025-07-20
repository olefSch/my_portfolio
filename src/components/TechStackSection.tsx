import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const TechStackSection = () => {
  const techCategories = [{
    category: "Languages & Frameworks",
    icon: "💻",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    techs: [{
      name: "Python",
      level: "Expert"
    }, {
      name: "FastAPI",
      level: "Advanced"
    }, {
      name: "SQL",
      level: "Advanced"
    }, {
      name: "Bash",
      level: "Intermediate"
    }]
  }, {
    category: "Machine Learning & AI",
    icon: "🤖",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    techs: [{
      name: "TensorFlow",
      level: "Advanced"
    }, {
      name: "Keras",
      level: "Advanced"
    }, {
      name: "scikit-learn",
      level: "Expert"
    }, {
      name: "MLflow",
      level: "Advanced"
    }, {
      name: "Pandas",
      level: "Expert"
    }, {
      name: "NumPy",
      level: "Expert"
    }]
  }, {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    techs: [{
      name: "Google Cloud",
      level: "Advanced"
    }, {
      name: "Docker",
      level: "Advanced"
    }, {
      name: "Kubernetes",
      level: "Intermediate"
    }, {
      name: "Apache Spark",
      level: "Intermediate"
    }]
  }, {
    category: "Data & Analytics",
    icon: "📊",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    techs: [{
      name: "Snowflake",
      level: "Advanced"
    }, {
      name: "PostgreSQL",
      level: "Advanced"
    }, {
      name: "Plotly",
      level: "Advanced"
    }, {
      name: "Matplotlib",
      level: "Advanced"
    }, {
      name: "Streamlit",
      level: "Advanced"
    }]
  }, {
    category: "Development Tools",
    icon: "🛠️",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    techs: [{
      name: "Git",
      level: "Expert"
    }, {
      name: "GitHub",
      level: "Expert"
    }, {
      name: "VS Code",
      level: "Expert"
    }, {
      name: "Jupyter",
      level: "Advanced"
    }]
  }];
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };
  return <section id="tech-stack" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to build intelligent solutions
            </p>
          </div>

          {/* Floating Tech Icons */}
          <div className="relative overflow-hidden h-32 mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-scroll-right space-x-12">
                {["Python.svg", "FastAPI.svg", "Google Cloud.svg", "Docker.svg", "PostgresSQL.svg", "PyTorch.svg", "Kubernetes.svg", "NumPy.svg", "Pandas.svg", "ml_flow.svg", "Azure Devops.svg", "Apache Spark.svg", "Databricks.svg", "GitHub Actions.svg", "Git.svg", "Prometheus.svg", "SQLAlchemy.svg"].map((icon, index) => (
                  <div key={index} className="flex-shrink-0 w-24 h-24 bg-card/50 rounded-full flex items-center justify-center text-2xl glow-box">
                    <img src={`/${icon}`} alt={icon.replace('.svg', '')} className="w-12 h-12" />
                  </div>
                ))}
                {["Python.svg", "FastAPI.svg", "Google Cloud.svg", "Docker.svg", "PostgresSQL.svg", "PyTorch.svg", "Kubernetes.svg", "NumPy.svg", "Pandas.svg", "ml_flow.svg", "Azure Devops.svg", "Apache Spark.svg", "Databricks.svg", "GitHub Actions.svg", "Git.svg", "Prometheus.svg", "SQLAlchemy.svg"].map((icon, index) => (
                  <div key={index + 17} className="flex-shrink-0 w-24 h-24 bg-card/50 rounded-full flex items-center justify-center text-2xl glow-box">
                    <img src={`/${icon}`} alt={icon.replace('.svg', '')} className="w-12 h-12" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <Card className="glass-card border-0 glow-box">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center text-accent">
                  Core Competencies
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🧠</div>
                    <h4 className="font-semibold mb-2">Machine Learning Operations</h4>
                    <p className="text-sm text-muted-foreground">
                      End-to-end ML pipelines, model deployment, and monitoring
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏗️</div>
                    <h4 className="font-semibold mb-2">System Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Scalable, maintainable solutions for complex problems
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <h4 className="font-semibold mb-2">Data Engineering</h4>
                    <p className="text-sm text-muted-foreground">
                      ETL pipelines, data warehousing, and analytics platforms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default TechStackSection;
