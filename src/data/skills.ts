
export interface SkillType {
  name: string;
  category: string;
}

export const skills: SkillType[] = [
  // Programming Languages
  { name: "Python", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "C/C++", category: "Programming Languages" },
  { name: "MATLAB", category: "Programming Languages" },
  
  // ML Frameworks
  { name: "TensorFlow", category: "ML Frameworks" },
  { name: "PyTorch", category: "ML Frameworks" },
  { name: "Flask", category: "ML Frameworks" },
  { name: "LlamaIndex", category: "ML Frameworks" },
  { name: "LangGraph", category: "ML Frameworks" },

  // Libraries
  { name: "Pandas", category: "Libraries" },
  { name: "NumPy", category: "Libraries" },
  { name: "OpenCV", category: "Libraries" },
  { name: "torchvision", category: "Libraries" },
  { name: "Matplotlib", category: "Libraries" },
  { name: "Scikit-Learn", category: "Libraries" },
  { name: "Scipy", category: "Libraries" },
  { name: "Seaborn", category: "Libraries" },
  { name: "Datasets", category: "Libraries" },
  { name: "EasyOCR", category: "Libraries" },
  { name: "Transformers", category: "Libraries" },
  
  // Tools & Platforms
  { name: "Git/ Github", category: "Tools & Platforms" },
  { name: "Altium Designer", category: "Tools & Platforms" },
  { name: "SolidWorks", category: "Tools & Platforms" },
  { name: "HuggingFace Hub", category: "Tools & Platforms" },
  { name: "Arduino", category: "Tools & Platforms" },
  { name: "Raspberry Pi", category: "Tools & Platforms" },
  { name: "Linux", category: "Tools & Platforms" },
  { name: "AWS", category: "Tools & Platforms" },
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
