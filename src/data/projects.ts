
import { ProjectType } from "@/components/ProjectCard";

export const projects: ProjectType[] = [
  {
    id: "jute-pest",
    title: "Jute Pest Classification",
    description: "Deep learning model to classify jute pests with high accuracy, helping farmers identify and treat infestations earlier.",
    technologies: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    github: "https://github.com/",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE3MTI2ODc5MDQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    category: ["ML", "Computer Vision"]
  },
  {
    id: "medmonitor",
    title: "MedMonitor IoT System",
    description: "IoT-based health monitoring system that tracks vital signs and alerts healthcare providers about abnormalities.",
    technologies: ["ESP32", "IoT", "Python", "MQTT", "Arduino"],
    github: "https://github.com/",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRoLHRlY2h8fHx8fHwxNzEyNjg3OTY4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    category: ["IoT", "Hardware"]
  },
  {
    id: "real-estate",
    title: "Real Estate Price Prediction",
    description: "Machine learning model that predicts house prices based on features like location, size, and amenities.",
    technologies: ["Python", "scikit-learn", "React", "Flask"],
    github: "https://github.com/",
    demo: "https://demo.com/",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UscmVhbCxlc3RhdGV8fHx8fHwxNzEyNjg4MDIx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    category: ["ML", "Web"]
  },
  {
    id: "semantic-bridge",
    title: "Benchmark for Semantic Bridge Damage Segmentation",
    description: "Developing a benchmark dataset and evaluation metrics for semantic segmentation of bridge damage images.",
    technologies: ["PyTorch", "Computer Vision", "Semantic Segmentation"],
    github: "https://github.com/",
    image: "https://images.unsplash.com/photo-1574103188526-4fabd2623804?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJpZGdlfHx8fHx8MTcxMjY4ODA3MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
    isOngoing: true,
    category: ["ML", "Computer Vision", "Research"]
  }
];
