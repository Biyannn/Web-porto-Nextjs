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
    skillLevel: "Advanced",
  },
  {
    name: "Nextjs",
    icon: <RiNextjsFill />,
    skillLevel: "Advanced",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    skillLevel: "Advanced",
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
    skillLevel: "Advanced",
  },
  {
    name: "SASS",
    icon: <FaSass />,
    skillLevel: "Advanced",
  },
  {
    name: "Nodejs",
    icon: <FaNodeJs />,
    skillLevel: "Advanced",
  },
  {
    name: "Expressjs",
    icon: <SiExpress />,
    skillLevel: "Advanced",
  },
  {
    name: "Golang",
    icon: <FaGolang />,
    skillLevel: "Advanced",
  },
  {
    name: "Npm",
    icon: <FaNpm />,
    skillLevel: "Advanced",
  },
  {
    name: "Mailtrap/Nodemailer",
    icon: <SiMailtrap />,
    skillLevel: "Advanced",
  },
  {
    name: "Dotenv",
    icon: <SiDotenv />,
    skillLevel: "Advanced",
  },
  {
    name: "JSON File Storage",
    icon: <VscJson />,
    skillLevel: "Advanced",
  },
  {
    name: "Axios",
    icon: <SiAxios />,
    skillLevel: "Advanced",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    skillLevel: "Advanced",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    skillLevel: "Advanced",
  },
  {
    name: "Xampp",
    icon: <SiXampp />,
    skillLevel: "Advanced",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    skillLevel: "Advanced",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    skillLevel: "Advanced",
  },

  {
    name: "Railway",
    icon: <SiRailway />,
    skillLevel: "Advanced",
  },
  {
    name: "Vercel",
    icon: <RiVercelFill />,
    skillLevel: "Advanced",
  },
  {
    name: "Koyeb",
    icon: <SiKoyeb />,
    skillLevel: "Advanced",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    skillLevel: "Advanced",
  },
  {
    name: "Dbeaver",
    icon: <SiDbeaver />,
    skillLevel: "Advanced",
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
