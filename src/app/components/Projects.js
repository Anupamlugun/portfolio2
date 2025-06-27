import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "Full-stack inventory management system with React.js and Spring Boot",
      tech: [
        "React",
        "Redux Toolkit",
        "Spring Boot",
        "Apache Kafka",
        "PostgreSQL",
      ],
      link: "#",
      repo: "https://github.com/Anupamlugun/inventory-management-backend",
      image: "/img/inventory.png",
    },
    {
      title: "Apprasial Management System",
      description:
        "A digital tool to manage and track faculty and staff performance appraisals in universities",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      link: "#",
      repo: "#",
      image: "/img/appraisal.png",
    },
    {
      title: "Bike Service",
      description:
        "A digital platform to manage bike-related services like fuel purchase, repairs, and maintenance tracking",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      link: "https://bikeservice.rf.gd",
      repo: "https://github.com/Anupamlugun/bikeservice",
      image: "/img/bikeservice.png",
    },
    {
      title: "Box Office",
      description:
        "A web app to search movies and shows, view details, and rate or review them",
      tech: ["React.js"],
      link: "https://box-office-anupamlugun.surge.sh/",
      repo: "https://github.com/Anupamlugun/box-office",
      image: "/img/boxoffice.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-brand-soft flex justify-center">
      <div className="container">
        {/* Section Title */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-mythemecolor mb-4">
            Projects
          </h2>
          <p className="text-lg text-brand-soft-foreground max-w-2xl mx-auto">
            Explore my technical capabilities through these highlighted projects
          </p>
        </div>
        {/* Updated grid configuration */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-8 px-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow flex flex-col"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg text-mythemecolor">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="mb-4 text-brand-soft-foreground">
                  {project.description}
                </CardDescription>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 mt-4">
                <Button
                  variant="mybuttontheme"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="mybuttontheme2"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Repository
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
