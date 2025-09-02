import { useState } from "react";
import { Clock, Calendar } from "lucide-react";

export const NewScheduleSection = () => {
  const [activeDay, setActiveDay] = useState('day1');
  
  const schedule = {
    day1: [
      { time: "4:00 PM", activity: "Inauguration Ceremony" },
      { time: "6:00 PM", activity: "Coding Begins" },
      { time: "8:00 PM", activity: "Dinner" },
      { time: "12:00 AM", activity: "Refreshment Break" },
    ],
    day2: [
      { time: "5:00 AM", activity: "Refreshment Break" },
      { time: "8:00 AM", activity: "Breakfast" },
      { time: "10:00 AM", activity: "Level-1 Inspection" },
      { time: "11:00 AM", activity: "Refreshment Break" },
      { time: "1:00 PM", activity: "Lunch" },
      { time: "5:00 PM", activity: "Refreshment Break" },
      { time: "6:00 PM", activity: "Level-2 Inspection" },
      { time: "8:00 PM", activity: "Dinner" },
    ],
    day3: [
      { time: "1:00 AM", activity: "Refreshment Break" },
      { time: "6:00 AM", activity: "Solving Stops and Final Review" },
      { time: "8:00 AM", activity: "Breakfast" },
      { time: "11:30 AM", activity: "Closing Ceremony and Winner Announcement" },
    ]
  };

  return (
    <section id="schedule" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            The 36-Hour Agenda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three days of intensive innovation, learning, and collaboration
          </p>
        </div>

        <div className="flex justify-center mb-8 border-b border-muted">
          <button 
            onClick={() => setActiveDay('day1')} 
            className={`px-6 py-3 text-lg font-semibold transition-colors ${
              activeDay === 'day1' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Day 1
          </button>
          <button 
            onClick={() => setActiveDay('day2')} 
            className={`px-6 py-3 text-lg font-semibold transition-colors ${
              activeDay === 'day2' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Day 2
          </button>
          <button 
            onClick={() => setActiveDay('day3')} 
            className={`px-6 py-3 text-lg font-semibold transition-colors ${
              activeDay === 'day3' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Day 3
          </button>
        </div>

        <div className="max-w-2xl mx-auto">
          {schedule[activeDay].map((item, index) => (
            <div key={index} className="flex items-center mb-6 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
              <div className="w-24 text-right pr-4 text-primary font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {item.time}
              </div>
              <div className="flex-1 pl-4 border-l-2 border-muted">
                <p className="text-foreground text-lg font-medium">{item.activity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/20 rounded-full">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">October 24-26, 2025 | MBU Campus, Tirupati</span>
          </div>
        </div>
      </div>
    </section>
  );
};