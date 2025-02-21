import express from "express";
import cors from "cors";
import { integrationSpecSettings } from "./integrationSpec";
import nodemailer from "nodemailer";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to E-Commerce Order Notification Telex API",
  });
});

app.get("/integration-spec", (req, res) => {
  res.json(integrationSpecSettings);
});

app.post("/webhook", async (req: any, res: any) => {
  const { message, settings } = req.body;

  const isNotificationEnabled = settings.find(
    (setting: { label: string; default: boolean }) =>
      setting.label === "Enable Notifications"
  )?.default;

  if (!isNotificationEnabled) {
    return res.json({
      message: "Notification is Disabled, so, email functionality won't work",
    });
  }

  const senderEmail = settings.find(
    (setting: { label: string }) => setting.label === "Sender Email"
  )?.default;

  const emailAppPassword = settings.find(
    (setting: { label: string }) => setting.label === "Email App Password"
  )?.default;

  const receiverEmail = settings.find(
    (setting: { label: string }) => setting.label === "Receiver Email"
  )?.default;

  const emailSubject = settings.find(
    (setting: { label: string }) => setting.label === "Email Subject"
  )?.default;

  // Validate settings first
  if (!senderEmail || !receiverEmail || !emailSubject || !emailAppPassword) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing required settings." });
  }

  // Validate message format
  let parsedMessage: any[];
  try {
    parsedMessage = typeof message === "string" ? JSON.parse(message) : message;
  } catch (error) {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid message format." });
  }

  // Check if message contains items
  if (!Array.isArray(parsedMessage) || parsedMessage.length === 0) {
    return res
      .status(400)
      .json({ status: "error", message: "Message must contain order items." });
  }

  // Create a transporter for nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: senderEmail,
      pass: emailAppPassword,
    },
  });

  // Format the message for email
  const formattedMessage = `
    <h1>Order Details</h1>
    <p>Below are the details of a new order purchased:</p>
    <ul>
      ${parsedMessage
        .map(
          (item) => `
        <li>
          <strong>${item.name}</strong> - Price: ${item.price} - Quantity: ${item.quantity}
        </li>
      `
        )
        .join("")}
    </ul>
  `;

  // Send email to the user
  const mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject: emailSubject,
    html: formattedMessage,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return res.json({ status: "success", message: "Email sent successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Failed to send email" });
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
