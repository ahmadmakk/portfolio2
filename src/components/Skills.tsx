import { Languages, Code2, Search, Users, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface SkillsProps {
  onBack: () => void;
}

export function Skills({ onBack }: SkillsProps) {
  const skillCategories = [
    {
      category: "Languages",
      icon: Languages,
      skills: [
        "English (Fluent)",
        "Arabic (Fluent)",
        "French (Fluent)",
        "Spanish (Basic)",
      ],
    },
    {
      category: "Computer Skills",
      icon: Code2,
      skills: [
        "Python",
        "Java",
        "C++",
        "HTML/CSS/JavaScript",
        "MS Office Suite",
      ],
    },
    {
      category: "Research Skills",
      icon: Search,
      skills: [
        "Data Collection",
        "Statistical Analysis",
        "Literature Review",
        "SPSS",
      ],
    },
    {
      category: "Soft Skills",
      icon: Users,
      skills: [
        "Leadership",
        "Communication",
        "Team-Building",
        "Public Speaking",
        "Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-slate-900">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl text-slate-900">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}