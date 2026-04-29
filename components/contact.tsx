"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setValidationErrors({})
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
      setTimeout(() => setError(""), 5000)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "jessersekry@gmail.com", href: "mailto:jessersekry@gmail.com" },
    { icon: Phone, label: "Phone", value: "+216 2980 3595", href: "tel:+21629803595" },
    {
      icon: MapPin,
      label: "Location",
      value: "Ariana, Tunis, Tunisia",
      href: "https://www.google.com/maps/search/?api=1&query=Ariana,+Tunis,+Tunisia",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-start gap-4 p-4 glass rounded-lg hover:bg-primary/20 transition-all hover:translate-x-2"
                  >
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/jesser999", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/jesser-sakri-717295321/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:jessersekry@gmail.com", label: "Email" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:bg-primary/20 transition-all hover:scale-110 neon-glow"
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="flex items-center justify-center h-full animate-fade-in">
              <div className="glass rounded-lg p-8 text-center space-y-4 w-full max-h-fit neon-glow">
                <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
                <p className="text-lg text-foreground">
                  I will get back to you shortly to discuss your project.
                </p>
                <div className="pt-4">
                  <div className="inline-block p-3 bg-primary/20 rounded-lg">
                    <Send size={32} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
              {/* CTA Heading */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                  Have a project in mind? Let&apos;s bridge your business goals with high-level technical execution.
                </h3>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (validationErrors.name) {
                      setValidationErrors({ ...validationErrors, name: "" })
                    }
                  }}
                  className={`w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    validationErrors.name ? "focus:ring-red-500" : "focus:ring-primary"
                  }`}
                  placeholder="Your name"
                  disabled={loading}
                />
                {validationErrors.name && (
                  <p className="text-sm text-red-400">{validationErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    if (validationErrors.email) {
                      setValidationErrors({ ...validationErrors, email: "" })
                    }
                  }}
                  className={`w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    validationErrors.email ? "focus:ring-red-500" : "focus:ring-primary"
                  }`}
                  placeholder="your@email.com"
                  disabled={loading}
                />
                {validationErrors.email && (
                  <p className="text-sm text-red-400">{validationErrors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value })
                    if (validationErrors.message) {
                      setValidationErrors({ ...validationErrors, message: "" })
                    }
                  }}
                  rows={5}
                  className={`w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                    validationErrors.message ? "focus:ring-red-500" : "focus:ring-primary"
                  }`}
                  placeholder="Your message (minimum 10 characters)..."
                  disabled={loading}
                />
                {validationErrors.message && (
                  <p className="text-sm text-red-400">{validationErrors.message}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  {formData.message.length}/10 characters minimum
                </p>
              </div>

              {/* Submit Button with Loading Spinner */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all neon-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center animate-fade-in">
                  {error}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
