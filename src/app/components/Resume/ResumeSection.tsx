import {
  LuAward,
  LuBookOpen,
  LuGraduationCap,
  LuPackage,
  LuServer,
} from "react-icons/lu";
import { RiNextjsFill } from "react-icons/ri";
import Header from "../General/Header";
import ResumeCard from "./ResumeCard";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Education section */}
        <div data-aos="zoom-out">
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Information Technology"
              date="Sept 2026 - Sept 2030"
              description="Bachelor of Information Technology | Bina Sarana Informatika (UBSI) | Focused on algorithms, data structures, software engineering principles, and web development."
            />
            <ResumeCard
              icon={LuBookOpen}
              role="Relevant Coursework"
              date="Dec 2024 - May 2025"
              description="Frontend Developer | Harisenin.com Bootcamp | Web Development, Database Systems, Data Structures and Algorithms, Software Engineering, Computer Network, Operating Systems, Cloud Computing"
            />
            <ResumeCard
              icon={LuAward}
              role="Academic Achievements"
              date="Aug 2019 - June 2022"
              description="Multimedia Major | 2 Vocational School South Tangerang | Completed projects in graphic design, video editing, and basic web development"
            />
          </div>
        </div>

        {/* Work Experience section */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Header title="Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend Developer Freelance"
              date="Dec 2024 - Present"
              description="Crafting Responsive, accesible interfaces with modern frameworks like React & Next.js. Focus on performance, UX and pixel-perfect implementation."
            />
            <ResumeCard
              icon={LuServer}
              role="Backend Developer Freelance"
              date="Dec 2024 - Present"
              description="Building scalable APIs, databases, and server infrastructure. Experienced with Node.js, Express.js, MongoDB, Go, Cloud Services, and Microservices architecture."
            />
            <ResumeCard
              icon={LuPackage}
              role="FullStack Developer Freelance"
              date="Dec 2024 - Present"
              description="End-to-end web application development. Bridging frontend interfaces with backend systems for cohesive, full-featured digital solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
