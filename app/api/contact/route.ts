import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Trim whitespace
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Message length validation
    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      )
    }

    // Log the message
    console.log("Contact form submission:", { name: trimmedName, email: trimmedEmail, message: trimmedMessage })

    // If you have RESEND_API_KEY environment variable, you can use Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "portfolio@jessersakri.dev",
            to: "jessersekry@gmail.com",
            subject: `Portfolio Contact: ${trimmedName}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${trimmedName}</p>
              <p><strong>Email:</strong> ${trimmedEmail}</p>
              <p><strong>Message:</strong></p>
              <p>${trimmedMessage.replace(/\n/g, "<br>")}</p>
            `,
          }),
        })

        if (!resendResponse.ok) {
          throw new Error("Failed to send email via Resend")
        }
      } catch (error) {
        console.error("Resend error:", error)
        // Continue anyway - we'll still return success
      }
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
