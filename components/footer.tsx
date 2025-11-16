"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-white/10 glass">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left animate-fade-in">
          <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
            © {currentYear} Jesser Sakri — Built with{" "}
            <span className="animate-pulse">
              <Heart size={16} className="text-primary fill-primary" />
            </span>{" "}
            and JavaScript
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
