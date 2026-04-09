import { Toaster } from "react-hot-toast";
import AnimationLayout from "../../layouts/AnimationLayout";
import ContactSection from "./components/Contact/ContactSection";
import HeroSection from "./components/Hero/HeroSection";
import ProjectSection from "./components/Project/ProjectSection";
import ResumeSection from "./components/Resume/ResumeSection";
import ServiceSection from "./components/Service/ServiceSection";
import SkillSection from "./components/Skill/SkillSection";
// import TestimonialsSection from "./components/Testimonial/TestimonialsSection";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      {/* <TestimonialsSection /> */}
      <Toaster />
    </AnimationLayout>
  );
}
