import { FlaskConical, Brain, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface ResearchProps {
  onBack: () => void;
}

export function Research({ onBack }: ResearchProps) {
  const research = [
    {
      title: "Geriatric Cognitive Decline in Relation to Isolation",
      institution: "Beirut Arab University",
      icon: Brain,
      highlights: [
        "Conducted field surveys in collaboration with Dar Al-Ajaza Hospital",
        "Analyzed cognitive scores (MMSE/MoCA) to assess isolation impact",
      ],
    },
    {
      title: "AI Recognition of Radiographic Diagnoses",
      institution: "Independent Project",
      icon: FlaskConical,
      highlights: [
        "Developed and trained models to detect diagnostic patterns on X-rays",
        "Focused on improving early diagnostic accuracy through artificial intelligence",
      ],
    },
  ];

  return (
    <section id="research" className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-slate-900">
            Research Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {research.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 mb-4">{item.institution}</p>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}