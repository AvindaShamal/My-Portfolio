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
  { name: "LlamaIndex", category: "ML Frameworks", iconSrc: "/icons/llamaindex.png" },
  { name: "LangGraph", category: "ML Frameworks", iconSrc: "/icons/langgraph.png" },

  // Libraries
  { name: "Pandas", category: "Libraries", iconSrc: "/icons/pandas.png" },
  { name: "NumPy", category: "Libraries", iconSrc: "/icons/numpy.png" },
  { name: "OpenCV", category: "Libraries", iconSrc: "/icons/opencv.png" },
  { name: "torchvision", category: "Libraries", iconSrc: "/icons/torchvision.png" },
  { name: "Matplotlib", category: "Libraries", iconSrc: "/icons/matplotlib.png" },
  { name: "Scikit-Learn", category: "Libraries", iconSrc: "/icons/scikit-learn.png" },
  { name: "Scipy", category: "Libraries", iconSrc: "/icons/scipy.png" },
  { name: "Seaborn", category: "Libraries", iconSrc: "/icons/seaborn.png" },
  { name: "Datasets", category: "Libraries", iconSrc: "/icons/datasets.png" },
  { name: "EasyOCR", category: "Libraries", iconSrc: "/icons/easyocr.png" },
  { name: "Transformers", category: "Libraries", iconSrc: "/icons/transformers.png" },

  // Tools & Platforms
  { name: "Git/ Github", category: "Tools & Platforms", iconSrc: "/icons/github.png" },
  { name: "Altium Designer", category: "Tools & Platforms", iconSrc: "/icons/altium.png" },
  { name: "SolidWorks", category: "Tools & Platforms", iconSrc: "/icons/solidworks.png" },
  { name: "HuggingFace Hub", category: "Tools & Platforms", iconSrc: "/icons/huggingface.png" },
  { name: "Arduino", category: "Tools & Platforms", iconSrc: "/icons/arduino.png" },
  { name: "Raspberry Pi", category: "Tools & Platforms", iconSrc: "/icons/raspberrypi.png" },
  { name: "Linux", category: "Tools & Platforms", iconSrc: "/icons/linux.png" },
  { name: "AWS", category: "Tools & Platforms", iconSrc: "/icons/aws.png" },
];

export const certifications = [
  {
    name: "AI Agent Course",
    issuer: "HuggingFace",
    date: "2025"
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & Coursera",
    date: "2023-2024"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "deeplearning.ai",
    date: "2024"
  },
  {
    name: "Advanced Diploma in English",
    issuer: "British Council",
    date: "2022"
  }
];
