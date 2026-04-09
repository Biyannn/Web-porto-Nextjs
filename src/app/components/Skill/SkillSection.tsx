import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import {
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaNpm,
  FaSass,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiAxios,
  SiDbeaver,
  SiDotenv,
  SiExpress,
  SiKoyeb,
  SiMailtrap,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiRailway,
  SiTypescript,
  SiXampp,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import Header from "../General/Header";

const skills = [
  {
    name: "HTML",
    icon: <DiHtml5 />,
    skillLevel: "Advanced",
  },
  {
    name: "CSS",
    icon: <DiCss3 />,
    skillLevel: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript />,
    skillLevel: "Advanced",
  },
  {
    name: "Reactjs",
    icon: <DiReact />,
    skillLevel: "Intermediate",
  },
  {
    name: "Nextjs",
    icon: <RiNextjsFill />,
    skillLevel: "intermediate",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    skillLevel: "Intermediate",
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
    skillLevel: "Advanced",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    skillLevel: "Advanced",
  },
  {
    name: "Ant design",
    icon: <SiAntdesign />,
    skillLevel: "Intermediate",
  },
  {
    name: "SASS",
    icon: <FaSass />,
    skillLevel: "Intermediate",
  },
  {
    name: "Nodejs",
    icon: <FaNodeJs />,
    skillLevel: "Intermediate",
  },
  {
    name: "Expressjs",
    icon: <SiExpress />,
    skillLevel: "Intermediate",
  },
  {
    name: "Golang",
    icon: <FaGolang />,
    skillLevel: "Beginner",
  },
  {
    name: "Npm",
    icon: <FaNpm />,
    skillLevel: "Intermediate",
  },
  {
    name: "Mailtrap/Nodemailer",
    icon: <SiMailtrap />,
    skillLevel: "Intermediate",
  },
  {
    name: "Dotenv",
    icon: <SiDotenv />,
    skillLevel: "Intermediate",
  },
  {
    name: "JSON File Storage",
    icon: <VscJson />,
    skillLevel: "Intermediate",
  },
  {
    name: "Axios",
    icon: <SiAxios />,
    skillLevel: "Beginner",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    skillLevel: "Intermediate",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    skillLevel: "Beginner",
  },
  {
    name: "Xampp",
    icon: <SiXampp />,
    skillLevel: "Beginner",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    skillLevel: "Intermediate",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    skillLevel: "Intermediate",
  },

  {
    name: "Railway",
    icon: <SiRailway />,
    skillLevel: "Beginner",
  },
  {
    name: "Vercel",
    icon: <RiVercelFill />,
    skillLevel: "Intermediate",
  },
  {
    name: "Koyeb",
    icon: <SiKoyeb />,
    skillLevel: "Beginner",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    skillLevel: "Beginner",
  },
  {
    name: "Dbeaver",
    icon: <SiDbeaver />,
    skillLevel: "Intermediate",
  },
];
export default function SkillSection() {
  return (
    <section id="skills" className="py-16">
      <Header title="My Skills" />
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              data-aos="flip-right"
              data-aos-delay={index * 100}
              className="bg-slate-900 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-110"
            >
              <div className="text-5xl text-gray-300">{skill.icon}</div>
              <p className="text-2xl font-semibold my-4 text-gray-200">
                {skill.name}
              </p>
              <p className="text-indigo-500 font-semibold">{skill.skillLevel}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
