import { Network, BookOpen, Briefcase, Code, Users, Star } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Connect with industry professionals, mentors, and fellow innovators",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Learn new technologies through workshops and hands-on experience",
      color: "text-secondary"
    },
    {
      icon: Briefcase,
      title: "Career Advancement",
      description: "Access to internships, job opportunities, and career guidance",
      color: "text-accent"
    },
    {
      icon: Code,
      title: "Technical Resources",
      description: "Free access to premium APIs, cloud credits, and development tools",
      color: "text-orange"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Collaborate with diverse talents and build lasting partnerships",
      color: "text-green"
    },
    {
      icon: Star,
      title: "Recognition",
      description: "Gain visibility in the tech community and boost your portfolio",
      color: "text-yellow"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Why Join Samartha 2025?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond the competition, discover the incredible opportunities and benefits 
            that await every participant in this transformative hackathon experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 mb-4 ${benefit.color} group-hover:animate-pulse-glow`}>
                <benefit.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sponsors and Partners Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Exclusive Partner Benefits
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Cloud Credits Worth $1000+</h4>
                  <p className="text-muted-foreground text-sm">Free access to AWS, Azure, and Google Cloud platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Premium API Access</h4>
                  <p className="text-muted-foreground text-sm">OpenAI, GitHub Copilot, and other premium developer tools</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Exclusive Workshops</h4>
                  <p className="text-muted-foreground text-sm">Hands-on sessions with industry experts and tech leaders</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-orange rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fast-Track Interviews</h4>
                  <p className="text-muted-foreground text-sm">Direct interview opportunities with partner companies</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-8 bg-gradient-accent rounded-2xl animate-float">
                <Star className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-white font-semibold text-lg">
                  Value Worth ₹50,000+ 
                </p>
                <p className="text-white/80 text-sm mt-2">
                  Per participant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};