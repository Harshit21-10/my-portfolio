import { Briefcase, Code, Database, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Fullstack Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
               with expertise in Java, Spring Boot, and ReactJS. Improved performance by 30% in real-world projects, built scalable APIs, and led high-impact tech initiatives. Passionate about clean code, collaboration, and continuous learning.
            </p>

            <p className="text-muted-foreground">
              Whether it's building RESTful APIs, architecting secure systems, 
              or enhancing UI responsiveness, I bring clean code and strong problem-solving 
              skills to every project.Let's connect and create impactful software together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Crafting responsive and user-friendly web interfaces using modern 
                    frontend technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Java Developer</h4>
                  <p className="text-muted-foreground">
                    Building robust and scalable applications using Java, Spring Boot, 
                    and industry best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Developer</h4>
                  <p className="text-muted-foreground">
                    Designing secure, high-performance APIs and 
                    managing databases to power dynamic web apps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
