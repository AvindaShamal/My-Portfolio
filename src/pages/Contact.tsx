
import React from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="container-custom">
        <section className="section pt-10 md:pt-16">
          <SectionHeading
            title="Contact Me"
            subtitle="Get in touch for collaborations, opportunities, or just to say hello"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              
              <div className="flex items-start">
                <Mail className="text-primary mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:avindashamal@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    avindashamal@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+94711766520" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 71 176 6520
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Beliatta, Sri Lanka</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium mb-3">Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={28} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
