import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const BlogsSection = () => {
  const favoriteBlogs = [
    {
      title: "The Path to LLMs: Understanding N-Grams, Embeddings, and Transformers",
      excerpt: "The complexity of LLMs is built upon surprisingly straightforward ideas. Explore the evolution from n-grams to transformers.",
      publishedDate: "Jun 19, 2025",
      readTime: "14 min read",
      tags: ["Machine Learning", "LLMs", "Embeddings"],
      link: "https://medium.com/towards-artificial-intelligence/the-path-to-llms-understanding-n-grams-embeddings-and-transformers-3bb1ca5d8b11"
    },
    {
      title: "Powering the Future of E-Commerce: A Blueprint for a Data Mesh Architecture",
      excerpt: "A blueprint for data mesh architecture in e-commerce. Design flexible, scalable data platforms for modern retail.",
      publishedDate: "Jun 16, 2025",
      readTime: "8 min read",
      tags: ["Data Architecture", "E-Commerce", "Data Mesh"],
      link: "https://medium.com/google-cloud/powering-the-future-of-e-commerce-044653af9627"
    },
    {
      title: "Top 5 LLM Ops Frameworks You Should Know in 2025",
      excerpt: "This article highlights the need for LLM Ops to manage AI application costs and complexity. It compares top frameworks like LangSmith, Langfuse, Phoenix, MLflow, and OpenLLMetry, outlining their key strengths for 2025.",
      publishedDate: "Jul 13, 2025",
      readTime: "6 min read",
      tags: ["LLMs", "Observability", "Monitoring", "Operations"],
      link: "https://medium.com/towards-artificial-intelligence/top-5-llm-ops-frameworks-you-should-know-in-2025-ba7b822d6ca4"
    }
  ];

  return (
    <section id="blogs" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My favorite articles on AI, ML, and software engineering
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {favoriteBlogs.map((blog, index) => (
              <Card key={index} className="glass-card border-0 glow-box hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/30">
                      Medium
                    </Badge>
                    <Button size="sm" variant="ghost" className="p-1 opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                      <a href={blog.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-accent mb-3 line-clamp-2 group-hover:text-accent/80 transition-colors">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      {blog.title}
                    </a>
                  </h4>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {blog.publishedDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {tag}
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

export default BlogsSection;
