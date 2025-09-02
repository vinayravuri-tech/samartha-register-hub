import { Button } from "@/components/ui/button";
import { UserPlus, Clock, Calendar } from "lucide-react";

interface RegistrationSectionProps {
  onRegisterClick: () => void;
}

export const RegistrationSection = ({ onRegisterClick }: RegistrationSectionProps) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-accent rounded-3xl p-8 md:p-16 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join the Innovation Challenge
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Ready to transform your ideas into reality? Register now and be part of 
              the most exciting hackathon of 2025!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Form Your Team</h3>
                <p className="text-white/80">3-5 brilliant minds working together</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">48 Hours</h3>
                <p className="text-white/80">Intensive development and innovation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">March 15-17</h3>
                <p className="text-white/80">Save the dates for innovation</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onRegisterClick}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 text-lg px-8 py-4"
              >
                Register Your Team
              </Button>
              <p className="text-white/80 text-sm">
                Registration closes on March 10, 2025
              </p>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-white/90">
                <span className="font-semibold">Free Registration</span> includes access to all workshops, 
                mentorship sessions, meals, development resources, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};