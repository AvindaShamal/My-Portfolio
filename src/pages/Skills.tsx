
import React from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import SkillBadge from '@/components/SkillBadge';
import { skills, certifications } from '@/data/skills';
import { Award } from 'lucide-react';

const Skills = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  // Get categories in the desired order
  const orderedCategories = [
    "Programming Languages",
    "ML Frameworks",
    "Libraries",
    "Tools & Platforms"
  ];
  
  return (
    <Layout>
      <div className="container-custom">
        <section className="section pt-10 md:pt-16">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="My technical skills and knowledge areas"
            centered
          />
          
          {/* Skills Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {orderedCategories.map((category) => (
              <div key={category} className="bg-card rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills[category]?.map((skill, index) => (
                    <SkillBadge 
                      key={index}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications Section */}
          <div>
            <SectionHeading
              title="Certifications"
              subtitle="Professional certifications and achievements"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg shadow p-6 flex flex-col"
                >
                  <div className="flex items-start mb-4">
                    <Award className="text-primary mr-3 flex-shrink-0" size={24} />
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-auto pt-2">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Areas of Interest */}
          <div className="mt-16">
            <SectionHeading
              title="Areas of Interest"
              subtitle="Topics and domains I'm passionate about"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3">Machine Learning</h3>
                <p className="text-muted-foreground">
                  Deep learning, neural networks, supervised and unsupervised learning algorithms, 
                  model optimization and deployment.
                </p>
              </div>
              
              <div className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3">Computer Vision</h3>
                <p className="text-muted-foreground">
                  Image classification, object detection, semantic segmentation, 
                  feature extraction, and video analysis.
                </p>
              </div>
              
              <div className="bg-card rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3">IoT & Embedded Systems</h3>
                <p className="text-muted-foreground">
                  Sensor networks, edge AI, embedded programming, hardware-software integration,
                  and smart devices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Skills;
