import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How do I register for the event?",
      answer: "To register, fill out the registration form by clicking the 'Register Now' button. After submission, you'll receive a confirmation and instructions for the Low-Level Design submission. Pay the registration fee only upon selection for the final round."
    },
    {
      question: "What is the registration fee?",
      answer: "The fee is Rs 200 per team member without accommodation, and Rs 300 per team member with accommodation."
    },
    {
      question: "Can I participate individually?",
      answer: "No, participation is team-based. Teams must consist of 3 to 5 members."
    },
    {
      question: "What equipment should we bring?",
      answer: "All participants must bring their own laptops. If your project involves building miniature prototypes, you must also bring all necessary equipment and components."
    },
    {
      question: "Is remote participation allowed?",
      answer: "No, Samartha 2025 is a mandatory onsite hackathon. All team members must be present at the venue for the entire duration."
    },
    {
      question: "When will the problem statements be revealed?",
      answer: "The problem statements for the final phase will be revealed during the event itself."
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