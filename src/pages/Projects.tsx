
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard, { ProjectType } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  
  // Get unique categories from projects
  const categories = ["all", ...Array.from(new Set(projects.flatMap(project => project.category)))];
  
  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  }, [filter]);
  
  return (
    <Layout>
      <div className="container-custom">
        <section className="section pt-10 md:pt-16">
          <SectionHeading
            title="My Projects"
            subtitle="Explore my work in AI, Computer Vision, and IoT"
            centered
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found with the selected filter.</p>
              <button
                onClick={() => setFilter("all")}
                className="btn btn-outline mt-4"
              >
                Show All Projects
              </button>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
