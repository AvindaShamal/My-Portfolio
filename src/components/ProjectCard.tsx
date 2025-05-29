
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, Globe, ExternalLink } from 'lucide-react';
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
    <div className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isOngoing && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
              Ongoing
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-secondary/60 hover:bg-secondary text-xs px-2 py-1 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "btn btn-outline flex items-center gap-2 flex-1 justify-center",
                "hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              )}
            >
              <Github size={16} />
              <span>Source Code</span>
              <ExternalLink size={14} className="opacity-60" />
            </a>
          )}
          {demo && (
            <a 
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "btn btn-primary flex items-center gap-2 flex-1 justify-center",
                "transition-all duration-200"
              )}
            >
              <Globe size={16} />
              <span>Live Demo</span>
              <ExternalLink size={14} className="opacity-80" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
