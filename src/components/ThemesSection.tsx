import { Brain, Shield, Leaf, Stethoscope, GraduationCap, Smartphone } from "lucide-react";

export const ThemesSection = () => {
  const themes = [
    {
      icon: Brain,
      title: "Artificial Intelligence and Machine Learning",
      description: "Develop intelligent systems that learn, adapt, and solve complex problems",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Internet of Things (IoT)",
      description: "Connect devices and create smart solutions for everyday challenges",
      color: "text-secondary"
    },
    {
      icon: Leaf,
      title: "Green Technology",
      description: "Build eco-friendly solutions for environmental challenges",
      color: "text-green"
    },
    {
      icon: Stethoscope,
      title: "Preventive Health Care",
      description: "Innovate in digital health and preventive medical technology solutions",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Create solutions to protect digital assets and ensure data privacy",
      color: "text-orange"
    },
    {
      icon: GraduationCap,
      title: "Augmented Reality (AR) and Virtual Reality (VR)",
      description: "Build immersive experiences and virtual environments",
      color: "text-yellow"
    },
    {
      icon: Brain,
      title: "Blockchain",
      description: "Develop decentralized solutions and secure digital transactions",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Bridging Ancient Indian Technologies with Modern AI",
      description: "Combine traditional wisdom with cutting-edge artificial intelligence",
      color: "text-gradient",
      featured: true
    }
  ];

  return (
    <section id="themes" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Smart Solutions for a Sustainable Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from eight exciting tracks and build solutions that matter. 
            Each theme offers unique challenges and opportunities to make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className={`${theme.featured ? 'lg:col-span-2 bg-gradient-accent border-primary' : 'bg-card border-card'} rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105 group cursor-pointer glowing-border border`}
            >
              <div className={`w-12 h-12 mb-4 ${theme.color} group-hover:animate-pulse-glow`}>
                <theme.icon className="w-12 h-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.featured ? 'text-white' : 'text-foreground'} group-hover:gradient-text transition-all`}>
                {theme.title}
              </h3>
              <p className={theme.featured ? 'text-white/90' : 'text-muted-foreground'}>
                {theme.description}
              </p>
              <div className="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Open Innovation:</span> Have a groundbreaking idea that doesn't fit these themes? 
            We welcome innovative solutions across all domains!
          </p>
        </div>
      </div>
    </section>
  );
};