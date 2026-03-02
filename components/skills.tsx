"use client"

import { useState } from "react"
import { Code2, Users } from "lucide-react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "JavaScript (ES6+)", icon: "⚡" },
    { name: "TypeScript", icon: "📘" },
    { name: "React.js", icon: "⚛️" },
    { name: "React Native", icon: "📱" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Redux Toolkit", icon: "🔄" },
    { name: "Socket.IO", icon: "🔌" },
    { name: "RESTful APIs", icon: "🌐" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "HTML5/CSS3", icon: "🎨" },
    { name: "Stripe API", icon: "💳" },
    { name: "Git/GitHub", icon: "🐙" },
  ]

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Communication", icon: "💬" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Time Management", icon: "⏱️" },
    { name: "Team Collaboration", icon: "👥" },
    { name: "Leadership", icon: "🎯" },
  ]

  const skills = activeTab === "technical" ? technicalSkills : softSkills

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-12">
          {[
            { id: "technical", label: "Technical Skills", icon: Code2 },
            { id: "soft", label: "Soft Skills", icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 ${
                activeTab === tab.id ? "bg-primary text-primary-foreground neon-glow" : "glass hover:bg-white/20"
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass rounded-lg p-4 text-center hover:bg-primary/20 transition-all neon-glow cursor-pointer hover:scale-105 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="font-semibold text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
