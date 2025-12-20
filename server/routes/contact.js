import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "iharsyadav@gmail.com",
        pass: "ihzx tziy tpkq nisz",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "iharsyadav@gmail.com",
      subject: subject,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

export default router;