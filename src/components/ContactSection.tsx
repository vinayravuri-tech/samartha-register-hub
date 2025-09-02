export const ContactSection = () => {
  const facultyCoordinators = [
    { name: "Dr. Busireddy Hemanth Kumar", phone: "+91 9766031642", email: "hemanthkumar@mbu.asia" },
    { name: "Dr. N. Padmaja", phone: "+91 9963070126", email: "padmaja.nimmagadda@mbu.asia" },
    { name: "Dr. K. Reddy Madhavi", phone: "+91 9985798626", email: "reddymadhavi.k@mbu.asia" },
  ];

  const studentCoordinators = [
    { name: "Mr. Ravuri Vinay", phone: "+91 9177774635", email: "vinayravurispeaks@gmail.com" },
    { name: "Ms. G. Keerthana Reddy", phone: "+91 8074230590", email: "keerthanareddy2006@gmail.com" },
    { name: "Mr. Rahul Kothuri", phone: "+91 7842348377", email: "rahulkothuri67@gmail.com" },
    { name: "Ms. Venkata Karthika", phone: "+91 9963841977", email: "venkatakarthika0@gmail.com" },
    { name: "Mr. P. V. N. Chetan Kumar", phone: "+91 9963813470", email: "chetankumarpulipati4@gmail.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? Reach out to our coordinators for assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Faculty Coordinators</h3>
            <div className="space-y-4">
              {facultyCoordinators.map((coordinator, index) => (
                <div key={index} className="bg-card p-6 rounded-lg hover:bg-card/80 transition-all duration-300">
                  <h4 className="font-bold text-foreground text-lg mb-2">{coordinator.name}</h4>
                  <p className="text-muted-foreground mb-1">📞 {coordinator.phone}</p>
                  <p className="text-muted-foreground">✉️ {coordinator.email}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-6 text-center">Student Coordinators</h3>
            <div className="space-y-4">
              {studentCoordinators.map((coordinator, index) => (
                <div key={index} className="bg-card p-6 rounded-lg hover:bg-card/80 transition-all duration-300">
                  <h4 className="font-bold text-foreground text-lg mb-2">{coordinator.name}</h4>
                  <p className="text-muted-foreground mb-1">📞 {coordinator.phone}</p>
                  <p className="text-muted-foreground">✉️ {coordinator.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};