import { Mail, Phone, Linkedin, Heart, Building2, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ContactProps {
  onBack: () => void;
}

export function Contact({ onBack }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white min-h-screen">
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
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-slate-900">Email</h3>
              <a
                href="mailto:ahmadmakkouk02@gmail.com"
                className="text-blue-600 hover:underline break-all"
              >
                ahmadmakkouk02@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-slate-900">Phone</h3>
              <a
                href="tel:+96176703443"
                className="text-blue-600 hover:underline"
              >
                +961-76-703443
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-slate-900">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/ahmad-makkouk-56b728353/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="text-xl text-slate-900 mb-4 text-center">
              References
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-900">Lebanese Red Cross</p>
                  <a href="tel:+9611372802" className="text-blue-600 hover:underline">
                    +961 1 372802
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-900">Anzimaty</p>
                  <a href="tel:+96103074628" className="text-blue-600 hover:underline">
                    +961 03 074628
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              I'm always interested in discussing neurosurgery, AI in healthcare, and innovative medical technology projects.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open("mailto:ahmadmakkouk02@gmail.com")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}