import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-float">
            SAMARTHA 2025
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            36-Hour Onsite Hackathon
          </p>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto">
            Code. Create. Conquer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-lg text-muted-foreground">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              24th - 26th Oct 2025
            </div>
            <div className="flex items-center text-lg text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Mohan Babu University, Tirupati
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onRegisterClick}
              size="lg"
              className="bg-gradient-accent hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              Register Your Team
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Details
            </Button>
          </div>

          {/* Event Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">36</p>
              <p className="text-sm text-muted-foreground">Hours</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-2xl font-bold text-secondary">500+</p>
              <p className="text-sm text-muted-foreground">Participants</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-accent">₹4.8L</p>
              <p className="text-sm text-muted-foreground">Prize Pool</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-orange mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange">MBU</p>
              <p className="text-sm text-muted-foreground">Campus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};