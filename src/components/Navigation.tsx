import { GraduationCap, Briefcase, FlaskConical, Rocket, Mail, Target } from "lucide-react";
import { Button } from "./ui/button";

type Page = "hero" | "about" | "experience" | "education" | "research" | "contact" | "skills" | "goals";

interface NavigationProps {
  onNavigate: (page: Page) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  return (
    <>
      {/* Top Button - Experience */}
      <Button
        onClick={() => onNavigate("experience")}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg"
        size="lg"
      >
        <Briefcase className="mr-2 h-5 w-5" />
        Experience
      </Button>

      {/* Left Button - Skills */}
      <Button
        onClick={() => onNavigate("skills")}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg"
        size="lg"
      >
        <GraduationCap className="mr-2 h-5 w-5" />
        Skills
      </Button>

      {/* Right Button - My Goals */}
      <Button
        onClick={() => onNavigate("goals")}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg"
        size="lg"
      >
        <Target className="mr-2 h-5 w-5" />
        My Goals
      </Button>

      {/* Bottom Button */}
      <Button
        onClick={() => onNavigate("contact")}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg"
        size="lg"
      >
        <Mail className="mr-2 h-5 w-5" />
        Contact
      </Button>
    </>
  );
}