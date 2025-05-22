import nodemailer from "nodemailer";

export async function sendEmail(name, email, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use another provider
    auth: {
      user: process.env.SMTP_USER, // Set in your .env file
      pass: process.env.SMTP_PASS, // Set in your .env file
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "rthkr17@gmail.com", // Change to the recipient email
    subject: "New Contact Us Message",
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  return transporter.sendMail(mailOptions);
}