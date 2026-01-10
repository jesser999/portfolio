"use client"

import { Download, Menu, X, Moon, Sun } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface NavbarProps {
  isDark?: boolean
  onToggleTheme?: () => void
}

const Navbar = ({ isDark = true, onToggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/CV JESSER Sakri.pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }))
      const link = document.createElement("a")
      link.href = url
      link.download = "CV-JESSER-SAKRI.pdf"
      document.body.appendChild(link)
      link.click()
      link.parentNode?.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading CV:", error)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            JS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CV Download Button */}
            <button
              onClick={handleDownloadCV}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all neon-glow cursor-pointer"
            >
              <Download size={16} />
              <span className="text-sm font-medium">CV</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#about" className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors">
              About
            </Link>
            <Link href="#skills" className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="block px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors">
              Contact
            </Link>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all neon-glow w-full cursor-pointer"
            >
              <Download size={16} />
              <span className="text-sm font-medium">CV</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
