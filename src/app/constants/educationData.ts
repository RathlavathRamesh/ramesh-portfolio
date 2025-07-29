import { IconType } from "react-icons";
import { FaSchool, FaUniversity, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export type EducationItem = {
  icon: IconType;
  title: string;
  institution: string;
  duration: string;
  description: string[];
};

export const educationData: EducationItem[] = [
    {
    icon: FaLaptopCode,
    title: "CCBP 4.0 Academy Program",
    institution: "NxtWave",
    duration: "2021 – 2024",
    description: [
      "Trained in Full Stack Development (MERN Stack) + Machine Learning",
      "Worked on Real-World Projects: Web Apps, ML Models, Deep Learning",
      "Gained hands-on experience in building scalable applications",
      "Mastered DSA, Git, GitHub, REST APIs, Firebase, MongoDB, Node, Reac",
    ],
    },
  {
    icon: FaGraduationCap,
    title: "B.Tech in Computer Science and Engineering",
    institution: "RGUKT - Basar",
    duration: "2021 – 2025",
    description: [
      "Core Subjects: Data Structures, Algorithms, DBMS, OS, Automata, AI/ML, Cloud Computing",
      "Built solid foundation in programming with C, C++, Python & problem solving",
      "Participated in coding contests, technical workshops & seminars",
      "Active member of college tech clubs and hackathons",
    ],
  },
    {
    icon: FaUniversity,
    title: "PUC (Intermediate)",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    duration: "2019 – 2021",
    description: [
      "MPC Stream (Maths, Physics, Chemistry)",
      "Ranked in the top tier, leading to stream selection in Computer Science Engineering.",
    ],
  },
   {
    icon: FaSchool,
    title: "ZPHS Government High School",
    institution: "Pebber, Telangana",
    duration: "2014 – 2019",
    description: [
      "Strong foundation in Maths, Science, and Social",
      "Selected to RGUKT-Basar based on merit",
    ],
  },
];