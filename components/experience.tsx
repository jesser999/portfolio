"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Full-Stack Developer",
      company: "Remote",
      period: "Oct 2025 - Present",
      location: "Tunisia",
      description: [
        "Build scalable full-stack applications with React 19, Next.js, and Node.js",
        "Deploy containerized microservices via Docker on Railway and Render",
        "Manage serverless infrastructure with Neon PostgreSQL and Vercel",
        "Develop secure RESTful APIs with JWT (HTTP-only), Helmet.js, and Bcrypt",
        "Implement real-time features with Socket.io and WebRTC",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "ReBootKamp Tunisia",
      period: "Apr – Sep 2025",
      location: "Tunis",
      description: [
        "Developed full-stack applications using React 19, TypeScript, Node.js, and Express.js v5",
        "Built secure authentication systems with JWT and Bcrypt hashing",
        "Managed databases with PostgreSQL (Neon) and MongoDB using Prisma ORM",
        "Implemented real-time features with Socket.io and WebRTC for communication apps",
        "Deployed applications on Vercel, Railway, and Render with CI/CD pipelines",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 md:p-8 hover:bg-white/20 transition-all neon-glow animate-slide-in-left"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase size={24} className="text-primary" />
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-muted-foreground animate-slide-in-left"
                    style={{ animationDelay: `${j * 0.1}s` }}
                  >
                    <span className="text-primary mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
