import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Who can participate in Samartha 2025?",
      answer: "Samartha 2025 is open to all undergraduate and graduate students, recent graduates (within 2 years), and young professionals. Teams can be formed with 3-5 members from the same or different institutions."
    },
    {
      question: "What is the registration fee?",
      answer: "Registration for Samartha 2025 is completely FREE! We believe in making innovation accessible to everyone. All participants will receive free access to development resources, mentorship, meals, and event materials."
    },
    {
      question: "Do I need to have a team before registering?",
      answer: "No! You can register individually or with a partial team. We have dedicated team formation sessions on Day 1 where you can meet other participants and form your team. Teams must have 3-5 members."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any hardware you might need, and your enthusiasm! We'll provide WiFi, workspace, meals, and all basic amenities. Don't forget to bring a valid student/professional ID for verification."
    },
    {
      question: "Are there any restrictions on technology or platforms?",
      answer: "No restrictions! You're free to use any programming languages, frameworks, APIs, or platforms. We encourage the use of cutting-edge technologies and provide access to premium development tools and cloud credits."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on: Innovation & Creativity (30%), Technical Implementation (25%), Impact & Feasibility (25%), Presentation & Demo (20%). Our judging panel includes industry experts, entrepreneurs, and academic leaders."
    },
    {
      question: "Can we work on existing projects?",
      answer: "No, all projects must be started from scratch during the hackathon. However, you can use existing open-source libraries, APIs, and frameworks. Any pre-existing code must be clearly documented and approved by organizers."
    },
    {
      question: "Is accommodation provided?",
      answer: "The hackathon venue will be available 24/7 with rest areas and basic amenities. For outstation participants, we can help coordinate accommodation arrangements with nearby hotels and hostels at special rates."
    },
    {
      question: "What happens to the intellectual property of our projects?",
      answer: "You retain full ownership of your intellectual property. However, by participating, you grant organizers the right to showcase your project for promotional purposes. We encourage open-source contributions but it's not mandatory."
    },
    {
      question: "How do I prepare for the hackathon?",
      answer: "Review the themes, brush up on your coding skills, think about problems you'd like to solve, and come with an open mind. We'll provide pre-event resources and workshops to help you prepare. Most importantly, bring your creativity and enthusiasm!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers! Find everything you need to know about Samartha 2025.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:samartha2025@mbu.edu.in" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              📧 Email Us
            </a>
            <a 
              href="https://discord.gg/samartha2025" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              💬 Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};