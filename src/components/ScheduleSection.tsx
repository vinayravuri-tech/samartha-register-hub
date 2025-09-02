import { Clock, Calendar, MapPin } from "lucide-react";

export const ScheduleSection = () => {
  const schedule = [
    {
      day: "Day 1 - Friday",
      date: "March 15, 2025",
      events: [
        { time: "09:00 AM", event: "Registration & Check-in", location: "Main Auditorium" },
        { time: "10:00 AM", event: "Opening Ceremony", location: "Main Auditorium" },
        { time: "11:00 AM", event: "Team Formation & Networking", location: "Innovation Hub" },
        { time: "12:00 PM", event: "Hackathon Begins!", location: "Development Zones" },
        { time: "01:00 PM", event: "Lunch Break", location: "Cafeteria" },
        { time: "06:00 PM", event: "Mentor Sessions Begin", location: "Mentoring Rooms" },
        { time: "08:00 PM", event: "Dinner", location: "Cafeteria" }
      ]
    },
    {
      day: "Day 2 - Saturday", 
      date: "March 16, 2025",
      events: [
        { time: "08:00 AM", event: "Breakfast", location: "Cafeteria" },
        { time: "10:00 AM", event: "Mid-Point Check-in", location: "Development Zones" },
        { time: "12:00 PM", event: "Lunch Break", location: "Cafeteria" },
        { time: "02:00 PM", event: "Technical Workshops", location: "Workshop Rooms" },
        { time: "04:00 PM", event: "Final Sprint Begins", location: "Development Zones" },
        { time: "08:00 PM", event: "Dinner", location: "Cafeteria" },
        { time: "11:59 PM", event: "Submission Deadline", location: "Online Portal" }
      ]
    },
    {
      day: "Day 3 - Sunday",
      date: "March 17, 2025", 
      events: [
        { time: "09:00 AM", event: "Breakfast", location: "Cafeteria" },
        { time: "10:00 AM", event: "Project Presentations", location: "Presentation Halls" },
        { time: "12:00 PM", event: "Judging & Evaluation", location: "Presentation Halls" },
        { time: "02:00 PM", event: "Lunch Break", location: "Cafeteria" },
        { time: "04:00 PM", event: "Results & Award Ceremony", location: "Main Auditorium" },
        { time: "05:30 PM", event: "Networking & Closing", location: "Innovation Hub" }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Event Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three days of intensive innovation, learning, and collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-card rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">{day.day}</h3>
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {day.date}
                </p>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-accent min-w-[80px]">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{event.event}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-secondary/20 rounded-full">
            <Calendar className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium">March 15-17, 2025 | MBU Campus, Tirupati</span>
          </div>
        </div>
      </div>
    </section>
  );
};