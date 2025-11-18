import { ArrowDown, Linkedin, Mail, Phone, FileText, File } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import doctorImage from "figma:asset/3c2240f7a9f7f2992e736e2b524c88618b22ed28.png";

type Page = "hero" | "about" | "experience" | "education" | "research" | "contact" | "skills" | "goals";

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
          alt="Medical Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img
              src={doctorImage}
              alt="Dr. Ahmad Rabih Makkouk"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right side - Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl mb-6">
              Ahmad Rabih Makkouk
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              Medical Student | Computer Science Student | AI & Neurosurgery Enthusiast
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Bridging medicine and technology through artificial intelligence and clinical research
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => onNavigate("about")}
              >
                Get to know me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() =>
                  window.open("https://docs.google.com/document/d/1MTtvybTwX28Wq8QROcb9Ti2FussQBShA/edit?usp=drive_link&ouid=109323173542731930406&rtpof=true&sd=true", "_blank")
                }
              >
                <FileText className="mr-2 h-5 w-5" />
                My CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open("https://docs.google.com/document/d/1U2GOtqJj2DVEDv8uHbHAgRMP-vJmKwt9/edit?usp=drive_link&ouid=109323173542731930406&rtpof=true&sd=true", "_blank")}
              >
                <File className="mr-2 h-5 w-5" />
                Cover Letter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}