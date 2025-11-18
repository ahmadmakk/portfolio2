import { ArrowLeft, Target, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface GoalsProps {
  onBack: () => void;
}

export function Goals({ onBack }: GoalsProps) {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <Button onClick={onBack} variant="outline" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl mb-4 text-slate-900">My Goals</h2>
            <p className="text-lg text-slate-600 mb-8">
              Explore my professional aspirations and future objectives
            </p>
          </div>

          <Card className="p-8 hover:shadow-xl transition-shadow">
            <p className="text-slate-700 mb-6">
              View my comprehensive goals document to learn about my career aspirations,
              professional development objectives, and vision for the future in neurosurgery
              and medical technology.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1YhR9AIl3FtuWFNEx7D_Fti3VF1omGlux/edit?usp=drive_link&ouid=109323173542731930406&rtpof=true&sd=true",
                  "_blank"
                )
              }
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View My Goals Document
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
