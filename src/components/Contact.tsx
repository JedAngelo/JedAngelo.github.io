import resumePDF from '../assets/resume.pdf'
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Mail, Download } from 'lucide-react';

const Contact = () => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Jed Angelo Tan - Resume.pdf'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JedAngelo',
      description: 'View my code and projects'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jed-angelo-tan/',
      description: 'Jed Angelo Tan'
    },
    {
      name: 'Email',
      url: 'mailto:tanjedangelo@gmail.com',
      description: 'tanjedangelo@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-base">
                  I'm always interested in discussing new opportunities and collaborating on exciting projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Available For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">Full-time Positions</Badge>
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">Freelance Projects</Badge>
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">Collaborations</Badge>
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">Consultations</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Preferred Contact:</h4>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of the platforms listed. 
                    I typically respond within 24 hours.
                  </p>
                </div>
                
                <Button 
                  onClick={handleDownloadResume}
                  className="w-full hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  size="lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 bg-gradient-to-br from-background to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Social Links
                </CardTitle>
                <CardDescription className="text-base">
                  Connect with me on these platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link) => (
                  <div 
                    key={link.name}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg hover:from-primary/10 hover:to-accent/10 transition-all duration-200 border border-primary/10"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{link.name}</h4>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(link.url, '_blank')}
                      className="hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-200 border-primary/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
