import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imagePath: string;
  link: string;
  title: string;
  description: string;
  techStack: string;
}

export default function ProjectCard({
  imagePath,
  link,
  title,
  description,
  techStack,
}: ProjectCardProps) {
  return (
    <div>
      <Link href={`${link}`}>
      <Image
        src={imagePath}
        alt="Project-image"
        width={800}
        height={800}
        className="rounded-lg"
      />
      </Link>
      <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200">
        {title}
      </p>
      <p className="font-medium text-gray-400">{description}</p>
      <p className="font-semibold text-gray-300 py-2">{techStack}</p>
    </div>
  );
}
