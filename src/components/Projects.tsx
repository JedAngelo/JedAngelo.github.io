
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Biometric Attendance & Payroll Management System',
      description: 'A comprehensive C# Windows Forms desktop application designed for robust payroll and attendance management, featuring biometric integration, detailed employee records, and automated payroll calculations, powered by a dedicated backend API.',
      technologies: ['C#', 'WinForms', '.NET', 'Biometric Integration'],
      githubUrl: 'https://github.com/jedangelo/ariar_payrollsystem',
      isMain: true,
      category: 'Desktop Application'
    },
    {
      title: 'Payroll Management Rest API',
      description: 'ASP.NET Core 8.0 RESTful API serving as the powerful backend for a comprehensive payroll system, managing employees, attendance, and payroll calculations with robust user authentication.',
      technologies: ['C#', 'ASP.NET', 'Rest API', 'SQL Server', 'JWT Authentication', 'ASP.NET Core Identity'],
      githubUrl: 'https://github.com/JedAngelo/ARIAR_Payroll_API',
      isMain: true,
      category: 'Backend API'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                  project.isMain ? 'border-primary/20 bg-primary/5' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    {project.isMain && (
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://github.com/JedAngelo', '_blank')}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
