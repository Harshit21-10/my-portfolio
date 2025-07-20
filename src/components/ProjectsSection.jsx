import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "The E-Commerce Management System is a Spring Boot-based application that provides APIs to manage products in an e-commerce platform. The system supports functionalities such as adding, updating, deleting, retrieving, and searching for products, along with managing product images",
    image: "/projects/proj2.jpg",
    tags: ["Java", "Spring Boot", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harshit21-10/E-commerce",
  },
  {
    id: 2,
    title: "Random Password Generator",
    description: "A lightweight React app for generating secure random passwords with options for mixed characters, numbers, and letters and also have option to copy password to clipboard.",
    image: "/projects/proj3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harshit21-10/Password-Generator",
  },
  {
    id: 3,
    title: "MedStore",
    description:
      "A full-stack medical store management system that streamlines inventory, billing, and user operations using Java, Spring Boot, and MySQL.",
    image: "/projects/proj4.png",
    tags: ["Java", "Spring Boot", "MySQL", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harshit21-10/Medstore",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Harshit21-10"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
