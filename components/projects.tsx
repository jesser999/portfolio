"use client"

import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "TaskFlow",
      subtitle: "AI-Powered Smart Team Task Manager",
      description:
        "An AI-powered project management platform for intelligent task automation and real-time collaboration.",
      tech: ["React 19", "Node.js", "TypeScript", "MongoDB", "Redux Toolkit", "Socket.io", "Stripe", "PyTorch"],
      image: "/task-management-app.jpg",
      github: "https://github.com/jesser999/TaskFlow-AI-Smart-Team-TaskManager",
      live: "https://github.com/jesser999/TaskFlow-AI-Smart-Team-TaskManager",
    },
    {
      title: "E-Commerce App",
      subtitle: "Full-Stack Shopping Platform",
      description: "Responsive e-commerce app with secure RESTful APIs, file uploads, and optimized data performance.",
      tech: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Multer"],
      image: "/ecommerce-platform.jpg",
      github: "https://github.com/jesser999/E-commerce-App-2",
      live: "https://github.com/jesser999/E-commerce-App-2",
    },
    {
      title: "HealthyConnect",
      subtitle: "Real-Time Health Management Platform",
      description: "A real-time health management platform with chat, authentication, and notifications.",
      tech: ["ReactJS", "ExpressJS", "TypeScript", "MySQL", "Socket.IO"],
      image: "/health-app.jpg",
      github: "https://github.com/jesser999/HealthyConnect",
      live: "https://github.com/jesser999/HealthyConnect",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass rounded-xl overflow-hidden group neon-glow hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="p-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-accent text-accent-foreground rounded-lg hover:shadow-lg hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
