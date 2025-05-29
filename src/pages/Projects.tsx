
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard, { ProjectType } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Search, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  
  // Get unique categories from projects
  const categories = ["all", ...Array.from(new Set(projects.flatMap(project => project.category)))];
  
  useEffect(() => {
    let filtered = projects;
    
    // Apply category filter
    if (filter !== "all") {
      filtered = filtered.filter(project => 
        project.category.includes(filter)
      );
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    setFilteredProjects(filtered);
  }, [filter, searchTerm]);
  
  return (
    <Layout>
      <div className="container-custom">
        <section className="section pt-10 md:pt-16">
          <SectionHeading
            title="My Projects"
            subtitle="Explore my work in AI, Computer Vision, IoT, and Engineering"
            centered
          />
          
          {/* Search and Filter Controls */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Filter size={18} className="text-muted-foreground mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    filter === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary/60 hover:bg-secondary text-secondary-foreground hover:shadow-sm"
                  )}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <span className="ml-2 text-xs opacity-75">
                    ({category === "all" ? projects.length : projects.filter(p => p.category.includes(category)).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4">
                <Search size={48} className="mx-auto text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setSearchTerm("")}
                  className="btn btn-outline"
                >
                  Clear Search
                </button>
                <button
                  onClick={() => setFilter("all")}
                  className="btn btn-primary"
                >
                  Show All Projects
                </button>
              </div>
            </div>
          )}
          
          {/* Project Statistics */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
                </div>
                <div className="text-sm text-muted-foreground">Technologies Used</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {projects.filter(p => p.category.includes("ML")).length}
                </div>
                <div className="text-sm text-muted-foreground">ML Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {projects.filter(p => p.category.includes("Hardware")).length}
                </div>
                <div className="text-sm text-muted-foreground">Hardware Projects</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
