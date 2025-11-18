import { Rocket, DollarSign, Microscope, Smartphone } from "lucide-react";
import { Card } from "./ui/card";

export function Projects() {
  const projects = [
    {
      title: "AI Health App Startup",
      description: "Founded and secured funding for a health technology startup developing AI-powered healthcare solutions",
      icon: Smartphone,
    },
    {
      title: "Protein Binding Simulation",
      description: "Developed Python-based simulation for protein binding analysis to support medical research",
      icon: Microscope,
    },
    {
      title: "AI Crypto Trader",
      description: "Created an AI-powered cryptocurrency trading bot that responds to social media sentiment from X (Twitter)",
      icon: DollarSign,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-slate-900">
            Projects & Activities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600">
                    {project.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
