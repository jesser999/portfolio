"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-in-left">
            <div className="glass rounded-2xl p-1 neon-glow">
              <img
                src="/Screenshot_2025-09-27-07-44-58-816_com.android.chrome.png"
                alt="Jesser Sakri"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full-Stack JavaScript Developer specialized in MERN, TypeScript, and Next.js. I have a proven record of deploying containerized microservices via Docker on Railway and managing serverless infrastructure like Neon and Render. I leverage 3 years of CRM experience to bridge technical execution with client goals and project management.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I design secure RESTful APIs with JWT authentication, implement real-time systems with Socket.IO and WebRTC, and deliver production-ready solutions with DevOps expertise. I'm particularly interested in scalable architecture, performance optimization, and secure infrastructure management.
            </p>

            <div className="space-y-4 pt-4">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary">
                    Licentiate Degree in Web & Multimedia Development
                  </p>
                  <p className="text-muted-foreground">ISET Sidi Bouzid (2021–2024)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary">
                    Full-Stack JavaScript Certificate
                  </p>
                  <p className="text-muted-foreground">ReBootKamp Tunisia (Sep 2025)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
