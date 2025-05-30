
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import { ArrowDownToLine, ArrowRight, Github, Linkedin } from 'lucide-react';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import SkillTiles from '@/components/SkillTile';

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const featuredSkills = skills.filter(skill => 
    ["Python", "TensorFlow", "PyTorch", "OpenCV", "Altium", "SolidWorks"].includes(skill.name)
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hey, I'm <span className="text-primary">Avinda Shamal</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">
                AI Engineering Student | Computer Vision & ML Enthusiast
              </h2>
              <p className="text-lg mb-8">
                Passionate about leveraging artificial intelligence to solve real-world problems, 
                with a focus on computer vision, machine learning, and IoT applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a 
                  href="/resume.pdf" 
                  className="btn btn-outline"
                  download="Avinda_Shamal_Resume.pdf"
                >
                  Download CV
                  <ArrowDownToLine className="ml-2 h-4 w-4" />
                </a>
                
                <div className="flex gap-4 ml-1">
                  <a 
                    href="https://github.com/AvindaShamal/" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/avinda-shamal/" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-primary transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>   
            </div>
            
            <div className="hidden lg:block relative animate-fade-in p-4 ">
              <img 
                src="./profile.webp" 
                alt="Avinda Shamal"
                className="rounded-lg shadow-lg w-full object-cover w-5/6 h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] mx-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my latest work in AI, Computer Vision and IoT"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Overview Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title="Skills Overview"
            subtitle="Technologies and tools I frequently work with"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-3">
            {featuredSkills.map((skill, index) => (
              <SkillTiles 
                key={index}
                name={skill.name}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/skills" className="btn btn-outline">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
