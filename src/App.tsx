import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Research } from "./components/Research";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Goals } from "./components/Goals";

type Page = "hero" | "about" | "experience" | "education" | "research" | "contact" | "skills" | "goals";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("hero");

  const renderPage = () => {
    switch (currentPage) {
      case "hero":
        return <Hero onNavigate={setCurrentPage} />;
      case "about":
        return <About onBack={() => setCurrentPage("hero")} />;
      case "experience":
        return <Experience onBack={() => setCurrentPage("hero")} />;
      case "education":
        return <Education onBack={() => setCurrentPage("hero")} />;
      case "research":
        return <Research onBack={() => setCurrentPage("hero")} />;
      case "skills":
        return <Skills onBack={() => setCurrentPage("hero")} />;
      case "contact":
        return <Contact onBack={() => setCurrentPage("hero")} />;
      case "goals":
        return <Goals onBack={() => setCurrentPage("hero")} />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {currentPage === "hero" && <Navigation onNavigate={setCurrentPage} />}
      <main>
        {renderPage()}
      </main>
      {currentPage !== "hero" && (
        <footer className="bg-slate-900 text-slate-300 py-8 text-center">
          <p>&copy; 2024 Ahmad Rabih Makkouk. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}