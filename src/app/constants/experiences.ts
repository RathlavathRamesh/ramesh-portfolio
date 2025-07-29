// constants/experiences.ts
import { SiCentos, SiNextdotjs, SiMongodb } from "react-icons/si";
import { IconType } from "react-icons";

export interface Experience {
    iconUrl: string;
    title: string;
    institution: string;
    duration: string;
    description: string[];
}

export const experiences: Experience[] = [
   {
  iconUrl: "/Assets/Centific_logo.jpeg",
  title: "Associate AI Engineer – Full-time",
  institution: "Centific (Formerly PacteraEDGE), Chennai",
  duration: "Oct 2024 – Present",
  description: [
    "Training and optimizing LLMs, VLMs, and Deep Learning models using on-premise GPU infrastructure.",
    "Developed offline LLM inference pipelines using Ollama and Hugging Face for secure environments.",
    "Integrated MLflow for model fine-tuning, real-time metric logging, and experiment tracking.",
    "Developed execution monitoring tools with structured logs and AI pipeline flow tracking.",
     "Designed and built backend APIs to manage deployment triggers, model execution, and logging flows.",
  ]
},
   {
  iconUrl: "/Assets/nexocide_logo.png",
  title: "MERN Stack Intern",
  institution: "NEXOCIDE PRIVATE LIMITED, Remote",
  duration: "Mar 13, 2024 – Jun 29, 2024",
  description: [
    "Completed a 12-week internship focused on full-stack web development.",
    "Worked on real-world projects using MongoDB, Express.js, React.js, Node.js, Next.js, and Firebase.",
    "Implemented user authentication, backend logic, and responsive front-end interfaces using Tailwind CSS.",
    "Collaborated with cross-functional teams for deployment and participated in peer code reviews.",
    "Demonstrated strong willingness to learn and delivered commendable contributions to live product modules.",
  ]
},
{
  iconUrl: "/Assets/nxtwave_logo.png",
  title: "Full Stack & ML Trainee",
  institution: "NxtWave CCBP 4.0 (Parallel to RGUKT Basar)",
  duration: "June 2021 – Present",
  description: [
    "Following a 4-year structured learning path alongside college, focused on industry-ready tech stacks.",
    "Built a strong foundation in programming, problem-solving, and Data Structures & Algorithms.",
    "Completed MERN Stack training and built multiple full-stack web applications.",
    "Gained hands-on experience in AI, ML, and DL from scratch using Python, Pandas, NumPy, Scikit-learn, and PyTorch.",
    "Actively participated in bootcamps, tech workshops, and monthly leadership podcasts with industry experts.",
    "Earned certifications in Full Stack Development, DSA, and Machine Learning projects.",
    "Continuously learning and implementing the latest in GenAI and backend system design."
  ]
},
];
