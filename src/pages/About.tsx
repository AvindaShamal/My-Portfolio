
import React from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { ArrowDownToLine, GraduationCap, Briefcase, Languages, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container-custom">
        <section className="section pt-10 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <img 
                  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZ3JhbW1lcixzdHVkZW50fHx8fHx8MTcxMjY4ODI0NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
                  alt="Avinda Shamal"
                  className="rounded-lg shadow-lg w-full object-cover mb-6"
                />
                
                <a 
                  href="/resume.pdf" 
                  className="btn btn-primary w-full flex justify-center"
                  download="Avinda_Shamal_Resume.pdf"
                >
                  Download CV
                  <ArrowDownToLine className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <SectionHeading
                title="About Me"
                subtitle="Get to know my background, experience, and interests"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  I am an AI Engineering student with a passion for solving complex problems through machine learning, 
                  computer vision, and IoT technologies. My academic journey has equipped me with a strong foundation 
                  in AI theories and practical applications, which I've leveraged to develop innovative solutions 
                  across various domains.
                </p>
                
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-bold">Education</h3>
                  </div>
                  
                  <div className="ml-10 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold">University of Moratuwa</h4>
                      <p className="text-muted-foreground">B.Sc. Engineering (Hons) in Electrical Engineering</p>
                      <p>CGPA: 3.8/4.0</p>
                      <p className="text-sm text-muted-foreground">2020 - Present</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold">G.C.E. Advanced Level</h4>
                      <p className="text-muted-foreground">Physical Science Stream</p>
                      <p>Combined Mathematics (A), Physics (A), Chemistry (A)</p>
                      <p className="text-sm text-muted-foreground">2019</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <Briefcase className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-bold">Experience</h3>
                  </div>
                  
                  <div className="ml-10 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold">AI Engineering Intern</h4>
                      <p className="text-muted-foreground">Foode Labs</p>
                      <p>Developed and fine-tuned computer vision models for food image classification. Improved model accuracy by 15% through data augmentation and transfer learning techniques.</p>
                      <p className="text-sm text-muted-foreground">June 2023 - December 2023</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold">Mathematics Tutor</h4>
                      <p className="text-muted-foreground">Private Tutoring</p>
                      <p>Guided high school students through G.C.E A/L Combined Mathematics, helping them improve their problem-solving skills and academic performance.</p>
                      <p className="text-sm text-muted-foreground">2020 - 2022</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <Users className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-bold">Leadership & Activities</h3>
                  </div>
                  
                  <div className="ml-10 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold">IEEE Student Branch</h4>
                      <p>Executive Committee Member, responsible for organizing technical workshops and competitions.</p>
                      <p className="text-sm text-muted-foreground">2021 - Present</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold">SPARK Innovation Competition</h4>
                      <p>Team Leader for IoT-based healthcare monitoring project that secured second place.</p>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <Languages className="text-primary mr-3" size={24} />
                    <h3 className="text-xl font-bold">Languages & Interests</h3>
                  </div>
                  
                  <div className="ml-10">
                    <p><strong>Languages:</strong> Sinhala (Native), English (Fluent)</p>
                    <p><strong>Interests:</strong> Machine Learning, Computer Vision, IoT, Robotics, Reading, Chess</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
