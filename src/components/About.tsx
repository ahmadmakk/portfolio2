import { Brain, Code, Stethoscope, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import learningStyleImage from "figma:asset/fa434a9ee28b164e498637b21ade1da92809d273.png";

interface AboutProps {
  onBack: () => void;
}

export function About({ onBack }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white min-h-screen">
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
            About Me
          </h2>

          <div className="mb-12 text-slate-700 space-y-4">
            <p className="text-lg leading-relaxed">
              I am a dedicated medical student at Beirut Arab University with a strong interest in 
              <span className="text-blue-600"> Neurosurgery</span>, pursuing dual degrees in Medicine and Computer Science. 
              My unique academic background allows me to explore the exciting intersection of healthcare and technology.
            </p>
            <p className="text-lg leading-relaxed">
              I am passionate about clinical research, neuroanatomy, and the integration of 
              <span className="text-blue-600"> artificial intelligence in diagnostic imaging</span>. 
              I seek opportunities to further develop my surgical and academic experience through research and clinical exposure, 
              with the goal of advancing neurosurgical care through innovative technological solutions.
            </p>
          </div>

          {/* Learning Style Section */}
          <div className="mb-12">
            <h3 className="text-2xl text-center mb-6 text-slate-900">My Learning Style</h3>
            <div className="flex justify-center">
              <img 
                src={learningStyleImage} 
                alt="My Learning Style" 
                className="w-full max-w-3xl rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-slate-900">Medical Excellence</h3>
              <p className="text-slate-600">
                Pursuing MD at Beirut Arab University with focus on neurosurgery and clinical research
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-slate-900">Tech Expertise</h3>
              <p className="text-slate-600">
                Computer Science student at AUB with experience in front-end development and AI
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-slate-900">AI Innovation</h3>
              <p className="text-slate-600">
                Developing AI solutions for medical diagnostics and healthcare applications
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}