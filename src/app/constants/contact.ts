// constants/contact.ts

import { 
  FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload 
} from "react-icons/fa";
import { 
  SiLeetcode, SiGeeksforgeeks, SiHackerrank 
} from "react-icons/si";

export const socialContacts = [
  {
    icon: FaEnvelope,
    label: "rameshrguktbasar@gmail.com",
    href: "mailto:rameshrguktbasar@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: FaPhone,
    label: "+91-6301857629",
    href: "",
    color: "text-green-500",
    },
   {
    icon: FaPhone,
    label: "+91-9573869357",
    href: "",
    color: "text-green-500",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/ramesh-nayak-rathlavath/",
    color: "text-blue-700",
  },
  {
    icon: FaGithub,
    label: "github-Profile",
    href: "https://github.com/RathlavathRamesh",
    color: "text-black dark:text-white",
  },
  {
    icon: FaDownload,
    label: "Download Resume",
    href: "/Updated_Ramesh_Resume.pdf",
    download: true,
    color: "text-purple-500",
  },
];

export const codingProfiles = [
  {
    icon: SiLeetcode,
    label: "LeetCode Profile",
    href: "https://leetcode.com/u/Ramesh_Rayhlavath/",
    color: "text-orange-500",
  },
  {
    icon: SiGeeksforgeeks,
    label: "GeeksForGeeks Profile",
    href: "https://auth.geeksforgeeks.org/user/ramesh/profile",
    color: "text-green-700",
  },
  {
    icon: SiHackerrank,
    label: "HackerRank Profile",
    href: "https://www.hackerrank.com/ramesh",
    color: "text-green-600",
  },
];
