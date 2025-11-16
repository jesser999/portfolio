"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Fullstack JavaScript Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [index])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 animate-fade-in">
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-primary font-mono text-sm">Welcome to my portfolio</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Hi, I'm Jesser Sakri 👋
        </h1>

        <div
          className="text-xl md:text-2xl text-muted-foreground mb-6 h-8 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="font-mono text-primary">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </div>

        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          I build intelligent, scalable, and user-friendly web & mobile experiences with modern JavaScript technologies.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all neon-glow hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          {[
            { icon: Github, href: "https://github.com/jesser999", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/jesser-sekri-717295321/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:jessersekry@gmail.com", label: "Email" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:bg-primary/20 transition-all hover:scale-125 hover:rotate-5"
              aria-label={social.label}
            >
              <social.icon size={24} className="text-primary" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  )
}
