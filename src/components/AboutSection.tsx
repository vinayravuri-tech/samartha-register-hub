import { Code, Lightbulb, Users, Rocket } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "36-Hour Challenge",
      description: "Intensive coding marathon to bring your ideas to life"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Solve real-world problems with cutting-edge technology"
    },
    {
      icon: Users,
      title: "Team Collaboration", 
      description: "Work with 3-5 brilliant minds to create something amazing"
    },
    {
      icon: Rocket,
      title: "Launch Your Idea",
      description: "Transform concepts into working prototypes and beyond"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Samartha 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To foster innovation and collaboration among students across the country by solving real-world problems through technology. 
            The hackathon will provide a platform for students to showcase their technical skills, creativity, innovation, and teamwork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Why Participate?
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Network with industry professionals and like-minded innovators</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span>Access to cutting-edge tools, APIs, and development resources</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span>Mentorship from experienced developers and entrepreneurs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                  <span>Opportunities for internships and job placements</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block p-8 bg-gradient-accent rounded-2xl animate-float">
                <Rocket className="w-24 h-24 text-white mx-auto mb-4" />
                <p className="text-white font-semibold text-lg">
                  Ready to Innovate?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};