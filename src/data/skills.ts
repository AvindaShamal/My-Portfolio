
export interface SkillType {
  name: string;
  category: string;
  iconSrc?: string;
}

export const skills: SkillType[] = [
  // Programming Languages
  { name: "Python", category: "Programming Languages", iconSrc: "/icons/python.png" },
  { name: "Java", category: "Programming Languages", iconSrc: "/icons/java.png" },
  { name: "C/C++", category: "Programming Languages", iconSrc: "/icons/cpp.png" },
  { name: "MATLAB", category: "Programming Languages", iconSrc: "/icons/matlab.png" },

  // ML Frameworks
  { name: "TensorFlow", category: "ML Frameworks", iconSrc: "/icons/tensorflow.png" },
  { name: "PyTorch", category: "ML Frameworks", iconSrc: "/icons/pytorch.png" },
  { name: "Flask", category: "ML Frameworks", iconSrc: "/icons/flask.png" },
  { name: "LlamaIndex", category: "ML Frameworks", iconSrc: "/icons/llamaindex.jpg" },
  { name: "LangGraph", category: "ML Frameworks", iconSrc: "/icons/langgraph.svg" },

  // Libraries
  { name: "Pandas", category: "Libraries", iconSrc: "/icons/pandas.png" },
  { name: "NumPy", category: "Libraries", iconSrc: "/icons/numpy.png" },
  { name: "OpenCV", category: "Libraries", iconSrc: "/icons/opencv.png" },
  { name: "torchvision", category: "Libraries", iconSrc: "/icons/torchvision.jpg" },
  { name: "Matplotlib", category: "Libraries", iconSrc: "/icons/matplotlib.png" },
  { name: "Scikit-Learn", category: "Libraries", iconSrc: "/icons/scikit-learn.png" },
  { name: "Scipy", category: "Libraries", iconSrc: "/icons/scipy.png" },
  { name: "Seaborn", category: "Libraries", iconSrc: "/icons/seaborn.svg" },
  { name: "Datasets", category: "Libraries", iconSrc: "/icons/datasets.png" },
  { name: "EasyOCR", category: "Libraries", iconSrc: "/icons/easyocr.jpg" },
  { name: "Transformers", category: "Libraries", iconSrc: "/icons/transformers.png" },

  // Tools & Platforms
  { name: "Git/ Github", category: "Tools & Platforms", iconSrc: "/icons/github.png" },
  { name: "Altium Designer", category: "Tools & Platforms", iconSrc: "/icons/altium.jpeg" },
  { name: "SolidWorks", category: "Tools & Platforms", iconSrc: "/icons/solidworks.jpg" },
  { name: "HuggingFace Hub", category: "Tools & Platforms", iconSrc: "/icons/huggingface.png" },
  { name: "Arduino", category: "Tools & Platforms", iconSrc: "/icons/arduino.png" },
  { name: "Raspberry Pi", category: "Tools & Platforms", iconSrc: "/icons/raspberrypi.png" },
  { name: "Linux", category: "Tools & Platforms", iconSrc: "/icons/linux.jpg" },
  { name: "AWS", category: "Tools & Platforms", iconSrc: "/icons/aws.jpg" },
];

export const certifications = [
  {
    name: "AI Agent Course",
    issuer: "HuggingFace",
    date: "2025",
    iconSrc: "/icons/huggingface.png",
    url: "https://huggingface.co/learn/agents"
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & Coursera",
    date: "2023-2024",
    iconSrc: "/icons/deeplearningai.jpg",
    url: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "deeplearning.ai",
    date: "2024",
    iconSrc: "/icons/deeplearningai.jpg",
    url: "https://www.coursera.org/specializations/deep-learning"
  },
  {
    name: "Advanced Diploma in English",
    issuer: "British Council",
    date: "2022",
    iconSrc: "/icons/britishcouncil.svg",
    url: "https://www.britishcouncil.lk/english/courses-adults/advanced"
  }
];
