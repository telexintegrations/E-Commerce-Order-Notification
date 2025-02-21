"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const integrationSpec_1 = require("./integrationSpec");
const nodemailer_1 = __importDefault(require("nodemailer"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to E-Commerce Order Notification Telex API",
    });
});
app.get("/integration-spec", (req, res) => {
    res.json(integrationSpec_1.integrationSpecSettings);
});
app.post("/webhook", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const { message, settings } = req.body;
    const isNotificationEnabled = (_a = settings.find((setting) => setting.label === "Enable Notifications")) === null || _a === void 0 ? void 0 : _a.default;
    if (!isNotificationEnabled) {
        return res.json({
            message: "Notification is Disabled, so, email functionality won't work",
        });
    }
    const senderEmail = (_b = settings.find((setting) => setting.label === "Sender Email")) === null || _b === void 0 ? void 0 : _b.default;
    const emailAppPassword = (_c = settings.find((setting) => setting.label === "Email App Password")) === null || _c === void 0 ? void 0 : _c.default;
    const receiverEmail = (_d = settings.find((setting) => setting.label === "Receiver Email")) === null || _d === void 0 ? void 0 : _d.default;
    const emailSubject = (_e = settings.find((setting) => setting.label === "Email Subject")) === null || _e === void 0 ? void 0 : _e.default;
    // Validate settings first
    if (!senderEmail || !receiverEmail || !emailSubject || !emailAppPassword) {
        return res
            .status(400)
            .json({ status: "error", message: "Missing required settings." });
    }
    // Validate message format
    let parsedMessage;
    try {
        parsedMessage = typeof message === "string" ? JSON.parse(message) : message;
    }
    catch (error) {
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
    const transporter = nodemailer_1.default.createTransport({
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
        .map((item) => `
        <li>
          <strong>${item.name}</strong> - Price: ${item.price} - Quantity: ${item.quantity}
        </li>
      `)
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
        const info = yield transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return res.json({ status: "success", message: "Email sent successfully" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: "error", message: "Failed to send email" });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map