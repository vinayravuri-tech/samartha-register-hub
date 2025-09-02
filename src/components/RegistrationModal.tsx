import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Member {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  branch: string;
  yearOfStudy: string;
  college: string;
  isLeader: boolean;
}

export const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [teamName, setTeamName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [members, setMembers] = useState<Member[]>([
    { fullName: "", email: "", phone: "", program: "", branch: "", yearOfStudy: "", college: "", isLeader: true },
    { fullName: "", email: "", phone: "", program: "", branch: "", yearOfStudy: "", college: "", isLeader: false },
    { fullName: "", email: "", phone: "", program: "", branch: "", yearOfStudy: "", college: "", isLeader: false }
  ]);

  const themes = [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Privacy", 
    "Sustainability & Green Tech",
    "Healthcare & MedTech",
    "EdTech & Learning",
    "Mobile & Web Applications"
  ];

  const programs = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc", "M.Sc", "Other"];
  const years = ["1", "2", "3", "4", "5"];

  const addMember = () => {
    if (members.length < 5) {
      setMembers([...members, { 
        fullName: "", email: "", phone: "", program: "", branch: "", yearOfStudy: "", college: "", isLeader: false 
      }]);
    }
  };

  const removeMember = (index: number) => {
    if (members.length > 3 && index > 2) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const updateMember = (index: number, field: keyof Member, value: string) => {
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!teamName.trim()) {
      toast({ title: "Error", description: "Team name is required", variant: "destructive" });
      return;
    }
    
    if (!selectedTheme) {
      toast({ title: "Error", description: "Please select a theme", variant: "destructive" });
      return;
    }

    for (const member of members) {
      if (!member.fullName.trim() || !member.email.trim() || !member.phone.trim()) {
        toast({ title: "Error", description: "All member fields are required", variant: "destructive" });
        return;
      }
    }

    // Here you would normally send the data to your backend
    // For now, we'll just show a success message
    console.log("Registration Data:", {
      teamName,
      selectedTheme,
      members
    });

    toast({ 
      title: "Registration Successful!", 
      description: "Your team has been registered for Samartha 2025. Check your email for confirmation." 
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Register for Samartha 2025</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Team Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="teamName">Team Name *</Label>
              <Input
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter your team name"
                required
              />
            </div>
            <div>
              <Label htmlFor="theme">Select Your Theme *</Label>
              <Select value={selectedTheme} onValueChange={setSelectedTheme} required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a hackathon theme" />
                </SelectTrigger>
                <SelectContent>
                  {themes.map((theme) => (
                    <SelectItem key={theme} value={theme}>
                      {theme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Team Members</h3>
            
            {members.map((member, index) => (
              <div key={index} className="mb-6 p-4 border border-border rounded-lg bg-card/50">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-foreground">
                    {index === 0 ? "Team Leader" : `Member ${index + 1}`}
                  </h4>
                  {index > 2 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeMember(index)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      value={member.fullName}
                      onChange={(e) => updateMember(index, 'fullName', e.target.value)}
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      value={member.email}
                      onChange={(e) => updateMember(index, 'email', e.target.value)}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label>Phone Number *</Label>
                    <Input
                      value={member.phone}
                      onChange={(e) => updateMember(index, 'phone', e.target.value)}
                      placeholder="+91 12345 67890"
                      required
                    />
                  </div>
                  <div>
                    <Label>Program *</Label>
                    <Select 
                      value={member.program} 
                      onValueChange={(value) => updateMember(index, 'program', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((program) => (
                          <SelectItem key={program} value={program}>
                            {program}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Branch *</Label>
                    <Input
                      value={member.branch}
                      onChange={(e) => updateMember(index, 'branch', e.target.value)}
                      placeholder="Computer Science"
                      required
                    />
                  </div>
                  <div>
                    <Label>Year of Study *</Label>
                    <Select 
                      value={member.yearOfStudy} 
                      onValueChange={(value) => updateMember(index, 'yearOfStudy', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label>University/College *</Label>
                    <Input
                      value={member.college}
                      onChange={(e) => updateMember(index, 'college', e.target.value)}
                      placeholder="Mohan Babu University"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            {members.length < 5 && (
              <Button
                type="button"
                variant="outline"
                onClick={addMember}
                className="w-full border-dashed"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Member ({members.length}/5)
              </Button>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-gradient-accent hover:opacity-90"
            >
              Submit Registration
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};