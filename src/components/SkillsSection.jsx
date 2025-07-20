import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
const skills = [
    // Backend
  { name: "Java", level: 80, category: "backend", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: "Spring Boot", level: 75, category: "backend", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: "Hibernate", level: 70, category: "backend", icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/hibernate/hibernate-original.svg' },
  { name: "MySQL", level: 65, category: "backend", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: "Oracle SQL", level: 60, category: "backend", icon:'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/oracle/oracle-original.svg' },


  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/html5/html5-original.svg' },
  { name: "JavaScript", level: 70, category: "frontend", icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/javascript/javascript-plain.svg' },
  { name: "React", level: 60, category: "frontend", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: "Tailwind CSS", level: 70, category: "frontend", icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/tailwindcss/tailwindcss-original.svg' },


  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: "Postman", level: 90, category: "tools", icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postman/postman-original.svg' },
  { name: "IntelliJ", level: 85, category: "tools", icon:'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/intellij/intellij-original.svg' },
  { name: "VS Code", level: 95, category: "tools", icon:'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/vscode/vscode-original.svg' },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
          <Tilt key={skill.name} className="p-4 bg-white  rounded-lg">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
            <h3 className="text-xl">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-teal-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </Tilt>
        ))}
        </div>
      </div>
    </section>
  );
};
