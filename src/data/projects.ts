
import { ProjectType } from "@/components/ProjectCard";

export const projects: ProjectType[] = [
  {
    id: "jute-pest",
    title: "Jute Pest Classification",
    description: "Deep learning model to classify jute pests with high accuracy, helping farmers identify and treat infestations earlier.",
    technologies: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    github: "https://github.com/AvindaShamal/Jute-Pest-CNN.git",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["ML", "Computer Vision"]
  },
  {
    id: "medmonitor",
    title: "MedMonitor IoT System",
    description: "IoT-based health monitoring system that tracks vital signs and alerts healthcare providers about abnormalities.",
    technologies: ["ESP32", "IoT", "Python", "MQTT", "Arduino"],
    github: "https://github.com/AvindaShamal/MedMonitor.git",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["IoT", "Hardware"]
  },
  {
    id: "real-estate",
    title: "Real Estate Price Prediction",
    description: "Machine learning model that predicts house prices based on features like location, size, and amenities.",
    technologies: ["Python", "scikit-learn", "React", "Flask"],
    github: "https://github.com/AvindaShamal/Real-Estate-Price-Prediction.git",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["ML", "Web"]
  },
  {
    id: "semantic-bridge",
    title: "Benchmark for Semantic Bridge Damage Segmentation",
    description: "Developing a benchmark dataset and evaluation metrics for semantic segmentation of bridge damage images.",
    technologies: ["PyTorch", "Computer Vision", "Semantic Segmentation"],
    github: "https://github.com/AvindaShamal/Benchmark-for-Semantic-Bridge-Damage-Segmentation.git",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["ML", "Computer Vision", "Research"]
  },
  {
    id: "sportsman-image-classification",
    title: "Sportsman's Image Classification",
    description: "End-to-end ML project to classify images of sports celebrities. Used OpenCV for face and eye detection, wavelet transforms for feature engineering, and fine-tuned SVM, logistic regression, and random forest models via grid search.",
    technologies: ["Python", "OpenCV", "scikit-learn", "Machine Learning"],
    github: "https://github.com/AvindaShamal/Sportsman-Image-Classification",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["ML", "Computer Vision"]
  },
  {
    id: "closed-loop-stepper",
    title: "Closed Loop Stepper Motor Driver",
    description: "Designed a closed loop stepper motor driver with real-time position feedback for enhanced accuracy. Integrated electromechanical control systems and implemented real-time adjustments using control theory principles.",
    technologies: ["Embedded Systems", "Control Theory", "C++", "Electronics"],
    github: "https://github.com/AvindaShamal/closed_loop_stepper_motor_driver",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["Embedded", "Hardware"]
  },
  {
    id: "innova-bot",
    title: "Innova Bot",
    description: "Developed a versatile robot capable of performing various tasks such as line following, bridge crossing, motion control, navigation, and obstacle avoidance. Utilized ROS for robot control and integration with sensors.",
    technologies: ["ROS", "Arduino", "Robot Control", "Computer Vision"],
    github: "https://github.com/AvindaShamal/InnovaBot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["Robotics", "Embedded"]
  },
  {
    id: "metal-detector",
    title: "Metal Detector",
    description: "Built a very low frequency metal detector operating at 55kHz, capable of detecting ferrous and non-ferrous metals up to 30cm depth. Real-time detection displayed on a blue LED screen.",
    technologies: ["Electronics", "Analog Circuits", "Signal Processing"],
    github: "https://github.com/AvindaShamal/MetalDetector",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=600&q=80",
    category: ["Hardware", "Electronics"]
  }
];
