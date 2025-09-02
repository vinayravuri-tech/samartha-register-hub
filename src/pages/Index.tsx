import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OrganizersSection } from "@/components/OrganizersSection";
import { AboutSection } from "@/components/AboutSection";
import { ThemesSection } from "@/components/ThemesSection";
import { NewScheduleSection } from "@/components/NewScheduleSection";
import { PrizesSection } from "@/components/PrizesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { RegistrationModal } from "@/components/RegistrationModal";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onRegisterClick={() => setIsRegistrationOpen(true)} />
      <main>
        <HeroSection onRegisterClick={() => setIsRegistrationOpen(true)} />
        <OrganizersSection />
        <AboutSection />
        <ThemesSection />
        <NewScheduleSection />
        <PrizesSection />
        <BenefitsSection />
        <RegistrationSection onRegisterClick={() => setIsRegistrationOpen(true)} />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </div>
  );
};

export default Index;