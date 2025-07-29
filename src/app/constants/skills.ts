import {
    SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiJavascript,
    SiNodedotjs, SiExpress, SiPython, SiFlask, SiFastapi,
    SiScikitlearn, SiPandas, SiNumpy, SiOpenai,
    SiMongodb, SiPostgresql, SiMysql,
    SiGit, SiGithub, SiDocker, SiPostman, SiVercel, SiAmazon // <-- use SiAmazon
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


export const skills = {
    "Frontend": [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "JavaScript", icon: SiJavascript },
    ],
    "Backend": [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Python", icon: SiPython },
        { name: "Flask", icon: SiFlask },
        { name: "FastAPI", icon: SiFastapi },
    ],
    "AI/ML & GenAI": [
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "OpenAI", icon: SiOpenai },
        {
            name: "LangChain",
            image: "/Assets/langchain-icon.png", // Add this to public/assets
        },
        {
            name: "Hugging Face",
            image: "/Assets/huggingface-icon.png", // Add this to public/assets
        },
        {
            name: "RAG",
            image: "/Assets/rag-icon.png", // placeholder custom
        },
        {
            name: "Vector DBs",
            image: "/Assets/vector-icon.png", // optional
        },
    ],
    "Databases": [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
    ],
    "Dev Tools": [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "VS Code", icon: VscVscode },
        { name: "Postman", icon: SiPostman },
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: SiAmazon }, // <-- use SiAmazon
    ],
};
