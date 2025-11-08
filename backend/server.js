import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/send-mail", async (req, res) => {
  try {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `Liên hệ mới từ ${email}`,
      text: message,
    });

    res.json({ success: true, message: "✅ Gửi thành công!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "❌ Gửi thất bại." });
  }
});

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend is running!" });
});

app.listen(PORT, () => console.log(`🚀 Server chạy tại port ${PORT}`));