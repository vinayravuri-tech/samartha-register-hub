export const OrganizersSection = () => {
  const organizers = [
    {
      name: "IEEE MBU Student Branch",
      logo: "/api/placeholder/200/100",
      description: "Leading the innovation in technology education"
    },
    {
      name: "V-Hub",
      logo: "/api/placeholder/200/100", 
      description: "Fostering entrepreneurship and innovation"
    },
    {
      name: "Mohan Babu University",
      logo: "/api/placeholder/200/100",
      description: "Excellence in education and research"
    },
    {
      name: "Institution's Innovation Council",
      logo: "/api/placeholder/200/100",
      description: "Ministry of Education Initiative"
    },
    {
      name: "AICTE IDEA Lab",
      logo: "/api/placeholder/200/100",
      description: "Innovation and entrepreneurship development"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Proudly Organized By
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In collaboration with leading institutions and organizations committed to innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {organizers.map((org, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white/10 rounded-lg p-6 mb-4 group-hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    {org.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-2 text-foreground">
                  {org.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};