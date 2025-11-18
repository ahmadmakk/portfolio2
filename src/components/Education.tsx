import { GraduationCap, Calendar, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface EducationProps {
  onBack: () => void;
}

export function Education({ onBack }: EducationProps) {
  const education = [
    {
      degree: "Medical Doctorate",
      institution: "Arabic University of Beirut",
      location: "Beirut, Lebanon",
      period: "September 2023 - June 2030",
      graduation: "June 2030",
    },
    {
      degree: "Bachelor in Computer Science",
      institution: "American University of Beirut",
      location: "Beirut, Lebanon",
      period: "September 2022 - June 2026",
      graduation: "June 2026",
    },
    {
      degree: "French Baccalaureate Scientific",
      specialization: "Specialization in Math - Top 7",
      institution: "Lycée Franco-Libanais Verdun",
      location: "Beirut, Lebanon",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white min-h-screen">
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
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl text-slate-900 mb-1">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-blue-600 mb-2">{edu.specialization}</p>
                    )}
                    <p className="text-slate-700 mb-2">{edu.institution}</p>
                    <p className="text-slate-600">{edu.location}</p>
                    
                    {edu.period && (
                      <div className="flex items-center text-slate-600 mt-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    )}
                    
                    {edu.graduation && (
                      <p className="text-slate-600 mt-1">
                        Expected Graduation: {edu.graduation}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}