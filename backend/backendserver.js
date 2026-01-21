import express from "express";
import dotenv from "dotenv";
import { aiReply } from "./ai.js";
import { sendWhatsApp } from "./whatsapp.js";
import { getSession } from "./state.js";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/webhook", async (req, res) => {
  const from = req.body.From;
  const message = req.body.Body;

  const session = getSession(from);

  if (!session.aiEnabled) {
    return res.sendStatus(200);
  }

  setTimeout(async () => {
    const reply = await aiReply(message, session.style);
    await sendWhatsApp(from, reply);
  }, session.delay * 1000);

  res.sendStatus(200);
});

/* 后台控制 API */
app.post("/control", (req, res) => {
  const { user, aiEnabled, style, delay } = req.body;
  const session = getSession(user);

  if (aiEnabled !== undefined) session.aiEnabled = aiEnabled;
  if (style) session.style = style;
  if (delay !== undefined) session.delay = delay;

  res.json(session);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
