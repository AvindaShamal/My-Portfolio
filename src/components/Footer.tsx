
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading font-bold text-2xl mb-2">
              <span className="text-primary">Avinda</span> Shamal
            </h3>
            <p className="text-muted-foreground">AI Engineering Student</p>
            <p className="text-muted-foreground">Computer Vision & ML Enthusiast</p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:avindashamal@gmail.com" 
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-2 md:mb-0">
            © {year} Avinda Shamal. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
