
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    Full Stack Developer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate full stack developer with hands-on experience in C#, ASP.NET (Core and Web API), Angular, and SQL Server. I specialize in building efficient, scalable applications across desktop and web platforms, with a strong focus on clean architecture and responsive user interfaces.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Proficient in both frontend and backend development, I bridge the gap between design and functionality, ensuring smooth integration across the entire stack. I'm also familiar with EF Core, JWT authentication, Windows Forms, and Git, allowing me to work effectively in both collaborative and independent settings.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently, I'm focused on deepening my expertise in modern .NET and JavaScript ecosystems, while continuously exploring new technologies to expand my development toolkit.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Focus Areas</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Web Application Development</li>
                      <li>• API Development & Integration</li>
                      <li>• System Integration</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Interests</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Clean Code Architecture</li>
                      <li>• Performance Optimization</li>
                      <li>• User Experience Design</li>
                      <li>• Emerging Technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
