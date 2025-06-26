
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      position: 'Intern - Full Stack Developer',
      company: 'Brigada Group of Companies Inc.',
      period: 'Aug 2024 - Nov 2024',
      description: 'Focused on developing desktop applications and backend systems. Gained experience in system integration and database management.',
      achievements: [
        'Co-developed and designed a conference booking system with a Microsoft SQL Server database.',
        'Utilized ASP.NET for the Rest API backend and implemented ASP.NET Core Identity with JWT for user authorization and authentication',
        'Employed Angular framework for the frontend',
      ]
    },
    {
      position: 'Intern - Computer Lab Assistant',
      company: 'Goldenstate College Gensan',
      period: 'Jan 2025 - Apr 2025',
      description: 'Worked as a Computer Lab Assistant, supporting students, maintaining lab equipment, configuring workstations, and managing LAN file sharing for smooth lab operations.',
      achievements: [
        'Assisted students with technical issues and monitored lab sessions to ensure smooth operations.',
        'Troubleshot hardware/software problems and maintained workstation functionality.',
        'Configured workstations and set up LAN file sharing (SMB) for seamless activity transfers.',
      ]
    }

  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-accent/5"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {experience.position}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1 rounded-full border border-primary/20 flex items-center justify-center">
                      {experience.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Core Contributions:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
