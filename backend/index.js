const express = require("express");
const sgMail = require("@sendgrid/mail");
const dotenv =  require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json()); // important for parsing JSON body

const PORT = process.env.PORT || 7777;

// Middleware
const corsOptions = {
    origin: process.env.FRONT_END, // Replace with your frontend's origin
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// 🔹 SendGrid wrapper
const sendEmail = async (to, subject, textContent, htmlContent) => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to, // recipient email
            from: "no-reply@hamzamohammed.com", // must be verified sender in SendGrid
            subject,
            text: textContent,
            html: htmlContent,
        };

        await sgMail.send(msg);
        console.log(`📧 Email sent to ${to}`);
    } catch (error) {
        console.error("❌ SendGrid email error:", error.response?.body || error);
        throw error;
    }
};

// 🔹 Contact route
app.post("/api/contact", async (req, res) => {
    const { fullName, telephone, company, email, description } = req.body;

    if (!fullName || !email || !description) {
        return res
            .status(400)
            .json({ error: "Name, email & description fields are required" });
    }

    const textContent = `
Name: ${fullName}
Email: ${email}
Telephone: ${telephone || "N/A"}
Company: ${company || "N/A"}

Message:
${description}
  `;

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
        .container { max-width: 600px; background: #ffffff; padding: 20px; margin: 0 auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
        h2 { color: #333; }
        .details { margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #007BFF; }
        .details p { margin: 6px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from your website contact form.</p>
        <div class="details">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telephone:</strong> ${telephone || "N/A"}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${description}</p>
        </div>
      </div>
    </body>
    </html>
  `;

    try {
        await sendEmail(
            "info@computechitsolution.com", // Replace with your email
            `New Contact Form Submission from ${fullName}`,
            textContent,
            htmlContent
        );

        res.status(200).json({ success: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Error sending email" });
    }
});

// 🔹 Start server
app.listen(PORT, () => {
    console.log(`🚀 Server listening at: http://localhost:${PORT}`);
});
