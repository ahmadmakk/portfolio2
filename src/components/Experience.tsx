import { Briefcase, MapPin, ArrowLeft, FlaskConical } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface ExperienceProps {
  onBack: () => void;
}

export function Experience({ onBack }: ExperienceProps) {
  const experiences = [
    {
      title: "ER Shadowing",
      location: "Beirut, Lebanon",
      role: "Shadowing",
      responsibilities: [
        "Assisted in history taking and patient follow-up",
        "Observed emergency procedures and learned triage workflow",
      ],
    },
    {
      title: "Volunteer",
      organization: "Lebanese Red Cross",
      location: "Beirut, Lebanon",
      responsibilities: [
        "Assisted Red Cross in voluntary Youth works and activities",
      ],
    },
    {
      title: "Front-End Developer",
      organization: "Anzimaty",
      location: "Beirut, Lebanon",
      responsibilities: [
        "Developed and maintained front-end components using HTML, CSS, and JavaScript",
      ],
    },
  ];

  const research = [
    {
      title: "Geriatric Cognitive Decline in Relation to Isolation",
      institution: "Beirut Arab University",
      highlights: [
        "Conducted field surveys in collaboration with Dar Al-Ajaza Hospital",
        "Analyzed cognitive scores (MMSE/MoCA) to assess isolation impact",
      ],
    },
    {
      title: "AI Recognition of Radiographic Diagnoses",
      institution: "Independent Project",
      highlights: [
        "Developed and trained models to detect diagnostic patterns on X-rays",
        "Focused on improving early diagnostic accuracy through artificial intelligence",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 min-h-screen">
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
            Work Experience
          </h2>

          <div className="space-y-6 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-slate-900 mb-1">
                      {exp.role || exp.title}
                    </h3>
                    {exp.organization && (
                      <p className="text-blue-600 mb-2">{exp.organization}</p>
                    )}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl text-center mb-12 text-slate-900">
            Research Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {research.map((item, index) => {
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <FlaskConical className="h-6 w-6 text-blue-600" />
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