export interface SkillType {
  name: string;
  category: string;
  iconSrc?: string;
}

export const skills: SkillType[] = [
  // Programming Languages
  { name: "Python", category: "Programming Languages", iconSrc: "/icons/python.svg" },
  { name: "Java", category: "Programming Languages", iconSrc: "/icons/java.svg" },
  { name: "C/C++", category: "Programming Languages", iconSrc: "/icons/cpp.svg" },
  { name: "MATLAB", category: "Programming Languages", iconSrc: "/icons/matlab.svg" },

  // ML Frameworks
  { name: "TensorFlow", category: "ML Frameworks", iconSrc: "/icons/tensorflow.svg" },
  { name: "PyTorch", category: "ML Frameworks", iconSrc: "/icons/pytorch.svg" },
  { name: "Flask", category: "ML Frameworks", iconSrc: "/icons/flask.svg" },
  { name: "LlamaIndex", category: "ML Frameworks", iconSrc: "/icons/llamaindex.svg" },
  { name: "LangGraph", category: "ML Frameworks", iconSrc: "/icons/langgraph.svg" },

  // Libraries
  { name: "Pandas", category: "Libraries", iconSrc: "/icons/pandas.svg" },
  { name: "NumPy", category: "Libraries", iconSrc: "/icons/numpy.svg" },
  { name: "OpenCV", category: "Libraries", iconSrc: "/icons/opencv.svg" },
  { name: "torchvision", category: "Libraries", iconSrc: "/icons/torchvision.svg" },
  { name: "Matplotlib", category: "Libraries", iconSrc: "/icons/matplotlib.svg" },
  { name: "Scikit-Learn", category: "Libraries", iconSrc: "/icons/scikit-learn.svg" },
  { name: "Scipy", category: "Libraries", iconSrc: "/icons/scipy.svg" },
  { name: "Seaborn", category: "Libraries", iconSrc: "/icons/seaborn.svg" },
  { name: "Datasets", category: "Libraries", iconSrc: "/icons/datasets.svg" },
  { name: "EasyOCR", category: "Libraries", iconSrc: "/icons/easyocr.svg" },
  { name: "Transformers", category: "Libraries", iconSrc: "/icons/transformers.svg" },

  // Tools & Platforms
  { name: "Git/ Github", category: "Tools & Platforms", iconSrc: "/icons/github.svg" },
  { name: "Altium Designer", category: "Tools & Platforms", iconSrc: "/icons/altium.svg" },
  { name: "SolidWorks", category: "Tools & Platforms", iconSrc: "/icons/solidworks.svg" },
  { name: "HuggingFace Hub", category: "Tools & Platforms", iconSrc: "/icons/huggingface.svg" },
  { name: "Arduino", category: "Tools & Platforms", iconSrc: "/icons/arduino.svg" },
  { name: "Raspberry Pi", category: "Tools & Platforms", iconSrc: "/icons/raspberrypi.svg" },
  { name: "Linux", category: "Tools & Platforms", iconSrc: "/icons/linux.svg" },
  { name: "AWS", category: "Tools & Platforms", iconSrc: "/icons/aws.svg" },
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
