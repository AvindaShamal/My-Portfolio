
import { ProjectType } from "@/components/ProjectCard";

export const projects: ProjectType[] = [
  {
    id: "ai-commercial-image-search",
    title: "AI-Powered Commercial Image Search",
    description: "Built CrewAI-based multi-agent workflows, curated datasets, and tuned retrieval metrics to deliver a production-ready commercial image search engine for a coffee-industry client.",
    technologies: ["CrewAI", "Python", "AI Agents", "Vector Search"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Internship Projects",
    category: ["ML", "Computer Vision", "AI Agents"]
  },
  {
    id: "photo-similarity-engine",
    title: "Generalized Photo Similarity Engine",
    description: "Led internal R&D to generalize photo similarity features with Jina and local CLIP models, benchmarking embedding strategies to ensure scalable deployments across datasets.",
    technologies: ["Jina", "CLIP", "Embeddings", "Python"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Internship Projects",
    category: ["ML", "Computer Vision", "Research"]
  },
  {
    id: "knowledge-management-platform",
    title: "Intelligent Knowledge Management Platform (FYP)",
    description: "LangChain-powered dual-RAG platform that unifies structured and unstructured enterprise data with RBAC, sentiment-aware assistants, and natural-language-to-SQL analytics.",
    technologies: ["LangChain", "RAG", "LLM", "RBAC", "SQL"],
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["AI", "RAG", "LLM"],
    isOngoing: true
  },
  {
    id: "thermal-inspection",
    title: "Automated Thermal Inspection System",
    description: "Full-stack Java Spring and React solution that automates transformer inspections with AI-driven temperature anomaly detection and digital maintenance reporting.",
    technologies: ["Java Spring", "React", "Computer Vision", "Thermal Imaging"],
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["AI", "Computer Vision", "Web"]
  },
  {
    id: "semantic-bridge",
    title: "Benchmark for Semantic Bridge Damage Segmentation",
    description: "Developed a benchmark dataset and evaluation metrics for semantic segmentation of bridge damage images to support safer infrastructure maintenance.",
    technologies: ["PyTorch", "Computer Vision", "Semantic Segmentation"],
    github: "https://github.com/AvindaShamal/Benchmark-for-Semantic-Bridge-Damage-Segmentation.git",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["ML", "Computer Vision", "Research"]
  },
  {
    id: "univad-optimization",
    title: "UniVAD Reproduction & Optimization",
    description: "Reproduced the UniVAD anomaly detection framework with vision foundation models, benchmarked on MVTec-AD, and proposed a lightweight U-Net variant for real-time deployment.",
    technologies: ["Vision Foundation Models", "Anomaly Detection", "U-Net", "MVTec-AD"],
    image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["ML", "Computer Vision", "Research"]
  },
  {
    id: "jute-pest",
    title: "Jute Pest Classification",
    description: "Deep learning model to classify jute pests with high accuracy, helping farmers identify and treat infestations earlier.",
    technologies: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    github: "https://github.com/AvindaShamal/Jute-Pest-CNN.git",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["ML", "Computer Vision"]
  },
  {
    id: "medmonitor",
    title: "IoT Health Tracking System",
    description: "ESP32-based PCB that streams vitals via MQTT, combining MAX30102/MAX30205 sensors with dashboards and alerts for remote patient monitoring.",
    technologies: ["ESP32", "IoT", "Python", "MQTT", "Arduino"],
    github: "https://github.com/AvindaShamal/MedMonitor.git",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["IoT", "Hardware"]
  },
  {
    id: "real-estate",
    title: "Real Estate Price Prediction",
    description: "Machine learning model that predicts house prices based on features like location, size, and amenities.",
    technologies: ["Python", "scikit-learn", "React", "Flask"],
    github: "https://github.com/AvindaShamal/Real-Estate-Price-Prediction.git",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["ML", "Web"]
  },
  {
    id: "sportsman-image-classification",
    title: "Sportsman's Image Classification",
    description: "End-to-end ML project to classify images of sports celebrities using OpenCV pipelines, wavelet features, and fine-tuned SVM, logistic regression, and random forest models.",
    technologies: ["Python", "OpenCV", "scikit-learn", "Machine Learning"],
    github: "https://github.com/AvindaShamal/Sportsman-Image-Classification",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["ML", "Computer Vision"]
  },
  {
    id: "closed-loop-stepper",
    title: "Closed Loop Stepper Motor Driver",
    description: "Designed a closed loop stepper motor driver with real-time position feedback and control theory-based corrections for high-precision motion.",
    technologies: ["Embedded Systems", "Control Theory", "C++", "Electronics"],
    github: "https://github.com/AvindaShamal/closed_loop_stepper_motor_driver",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["Embedded", "Hardware"]
  },
  {
    id: "innova-bot",
    title: "Innova Bot",
    description: "Versatile ROS-enabled robot capable of line following, bridge crossing, motion control, navigation, and obstacle avoidance with rich sensor fusion.",
    technologies: ["ROS", "Arduino", "Robot Control", "Computer Vision"],
    github: "https://github.com/AvindaShamal/InnovaBot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["Robotics", "Embedded"]
  },
  {
    id: "metal-detector",
    title: "Metal Detector",
    description: "Very low frequency metal detector operating at 55kHz, capable of detecting ferrous and non-ferrous metals up to 30cm depth with live readouts.",
    technologies: ["Electronics", "Analog Circuits", "Signal Processing"],
    github: "https://github.com/AvindaShamal/MetalDetector",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Academic Projects",
    category: ["Hardware", "Electronics"]
  },
  {
    id: "document-intelligence-system",
    title: "AI-Powered Document Intelligence System",
    description: "Production-grade Django REST backend with OCR + NLP pipelines, Celery/Redis workers, FAISS semantic search APIs, JWT security, and Dockerized deployment.",
    technologies: ["Django", "NLP", "Celery", "Redis", "FAISS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    cvCategory: "Personal Projects",
    category: ["AI", "NLP", "Backend"]
  }
];
