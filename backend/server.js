import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://myportfolio-lr1p.onrender.com"
  ]
}));

app.post("/send-mail", async (req, res) => {
  try {
    const { email, message } = req.body;

    // Tăng timeout và thêm cấu hình kết nối
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // QUAN TRỌNG: Tăng timeout
      connectionTimeout: 60000, // 60 giây
      socketTimeout: 60000,     // 60 giây
      greetingTimeout: 30000,   // 30 giây
      // Thử các port khác nhau
      port: 587,
      secure: false, // true cho port 465, false cho port 587
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test kết nối trước khi gửi
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `Liên hệ mới từ ${email}`,
      text: `Email: ${email}\n\nNội dung: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Liên hệ mới từ Portfolio</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Nội dung:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "✅ Gửi thành công!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ 
      success: false, 
      message: "❌ Gửi thất bại. Vui lòng thử lại sau." 
    });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend API is running!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));