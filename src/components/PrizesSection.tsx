import { Trophy, Medal, Award, Gift } from "lucide-react";

export const PrizesSection = () => {
  const prizes = [
    {
      position: "1st Prize",
      amount: "₹50,000",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
      extras: ["Mentorship Program", "Incubation Support", "Industry Connect"]
    },
    {
      position: "2nd Prize", 
      amount: "₹30,000",
      icon: Medal,
      color: "text-gray-300",
      bgColor: "bg-gray-300/20",
      extras: ["Mentorship Program", "Industry Connect", "Certificate"]
    },
    {
      position: "3rd Prize",
      amount: "₹20,000", 
      icon: Award,
      color: "text-orange",
      bgColor: "bg-orange/20",
      extras: ["Mentorship Program", "Certificate", "Goodies"]
    }
  ];

  const specialPrizes = [
    {
      title: "Best Innovation",
      amount: "₹15,000",
      description: "Most creative and impactful solution"
    },
    {
      title: "People's Choice",
      amount: "₹10,000", 
      description: "Voted by participants and audience"
    },
    {
      title: "Best UI/UX",
      amount: "₹10,000",
      description: "Outstanding user experience design"
    },
    {
      title: "Best Use of AI",
      amount: "₹10,000",
      description: "Excellence in artificial intelligence implementation"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Prizes & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compete for amazing prizes and gain recognition for your innovative solutions
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl bg-card hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'md:scale-110 ring-2 ring-yellow-400/50' : ''
              }`}
            >
              <div className={`w-20 h-20 mx-auto mb-6 ${prize.bgColor} rounded-full flex items-center justify-center`}>
                <prize.icon className={`w-10 h-10 ${prize.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{prize.position}</h3>
              <p className={`text-3xl font-bold mb-4 ${prize.color}`}>{prize.amount}</p>
              <div className="space-y-2">
                {prize.extras.map((extra, extraIndex) => (
                  <div key={extraIndex} className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{extra}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Prizes */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Special Category Awards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((prize, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105"
              >
                <Gift className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2 text-foreground">{prize.title}</h4>
                <p className="text-xl font-bold text-accent mb-3">{prize.amount}</p>
                <p className="text-sm text-muted-foreground">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-accent rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Beyond Monetary Prizes</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div>
                <h4 className="font-semibold mb-2">Internship Opportunities</h4>
                <p className="text-white/80 text-sm">Direct internship offers from partner companies</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Startup Incubation</h4>
                <p className="text-white/80 text-sm">Access to incubation programs and funding</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Industry Mentorship</h4>
                <p className="text-white/80 text-sm">Ongoing guidance from industry experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};