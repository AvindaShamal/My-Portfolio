
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
  { name: "JavaScript", category: "Programming Languages" },
  { name: "HTML/CSS", category: "Programming Languages" },
  
  // ML Frameworks & Libraries
  { name: "TensorFlow", category: "ML Frameworks" },
  { name: "PyTorch", category: "ML Frameworks" },
  { name: "OpenCV", category: "ML Frameworks" },
  { name: "scikit-learn", category: "ML Frameworks" },
  { name: "LangGraph", category: "ML Frameworks" },
  { name: "Pandas", category: "ML Frameworks" },
  { name: "NumPy", category: "ML Frameworks" },
  
  // Tools & Platforms
  { name: "Git", category: "Tools & Platforms" },
  { name: "Altium Designer", category: "Tools & Platforms" },
  { name: "SolidWorks", category: "Tools & Platforms" },
  { name: "HuggingFace", category: "Tools & Platforms" },
  { name: "Arduino", category: "Tools & Platforms" },
  { name: "Raspberry Pi", category: "Tools & Platforms" },
  { name: "Docker", category: "Tools & Platforms" },
  { name: "Linux", category: "Tools & Platforms" },
  { name: "AWS", category: "Tools & Platforms" },
];

export const certifications = [
  {
    name: "Stanford Machine Learning Specialization",
    issuer: "Stanford University & Coursera",
    date: "2023"
  },
  {
    name: "Advanced Diploma in English",
    issuer: "British Council",
    date: "2022"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "deeplearning.ai",
    date: "2023"
  }
];
