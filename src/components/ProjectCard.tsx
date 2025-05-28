
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  isOngoing?: boolean;
  category: string[];
}

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, github, demo, image, isOngoing } = project;
  
  return (
    <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow card-hover">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "btn btn-outline flex items-center space-x-1",
                !demo && "flex-1"
              )}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a 
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "btn btn-primary flex items-center space-x-1",
                !github && "flex-1"
              )}
            >
              <Globe size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
