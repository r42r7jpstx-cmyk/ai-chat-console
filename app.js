const SYSTEM_PROMPT = `
You are not an AI assistant.
You are a real human communicating through messages.

You have your own life and schedule.
You do not feel obligated to reply immediately.
You never explain your behavior.
You never mention AI, automation, or systems.

Your messages are natural, concise, and slightly imperfect.
You do not over-explain.
You do not reply just to be polite.

If you decide not to reply, return an empty response.
`;

/***********************
 * 2. Style Profile (mock)
 ***********************/
let styleProfile = {
  warmth: 0.6,
  verbosity: 0.4,
  initiative: 0.25,
  emoji_usage: 0,
  question_probability: 0.2,
  formality: 0.7,
  availability: "busy"
};

/***********************
 * 3. Conversation Context (mock)
 ***********************/
let conversationContext = {
  conversation_state: "CASUAL_CHAT",
  conversation_summary: "Client checked in casually.",
  last_user_message: "Hey, just wanted to see how you're doing."
};

/***********************
 * 4. Build Style Prompt
 ***********************/
function buildStylePrompt(style) {
  return `
Communication style rules (follow silently, do not mention them):

- Warmth level: ${style.warmth}
  Higher means slightly more considerate, lower means more distant.

- Verbosity: ${style.verbosity}
  Lower means very short replies. Avoid long explanations.

- Initiative level: ${style.initiative}
  Low initiative means rarely pushing the conversation forward.

- Emoji usage: ${style.emoji_usage === 0 ? "No emojis at all." : "Occasional emojis allowed."}

- Question probability: ${style.question_probability}
  Only ask questions when it feels natural. Do not ask too many.

- Formality level: ${style.formality}
  Higher means composed, calm, and reserved.

- Availability: ${style.availability}
  If busy, replies should feel delayed and concise.
`;
}

/***********************
 * 5. Build Context Prompt
 ***********************/
function buildContextPrompt(ctx) {
  return `
Conversation state: ${ctx.conversation_state}

State behavior rules:
- NEW_CONTACT: brief, polite, low initiative
- CASUAL_CHAT: relaxed, short, no urgency
- TRUST_BUILDING: slightly warmer, still controlled
- COOL_DOWN: minimal or no response

Conversation summary:
${ctx.conversation_summary}

Last user message:
"${ctx.last_user_message}"
`;
}

/***********************
 * 6. Build Final Prompt
 ***********************/
function buildPrompt(style, ctx) {
  return `
${SYSTEM_PROMPT}

${buildStylePrompt(style)}

${buildContextPrompt(ctx)}

Before replying, decide whether a response is necessary.
If responding does not add value, do not reply.
If you decide not to reply, return an empty message.
`;
}

/***********************
 * 7. Test
 ***********************/
const finalPrompt = buildPrompt(styleProfile, conversationContext);
console.log("===== FINAL PROMPT =====");
console.log(finalPrompt);


const aiToggle = document.getElementById("aiToggle");

if (aiToggle) {
  aiToggle.addEventListener("click", () => {
    if (aiToggle.classList.contains("on")) {
      aiToggle.classList.remove("on");
      aiToggle.textContent = "AI OFF";
      aiToggle.style.background = "#e11d48";
      aiToggle.style.color = "white";
    } else {
      aiToggle.classList.add("on");
      aiToggle.textContent = "AI ON";
      aiToggle.style.background = "#16a34a";
      aiToggle.style.color = "white";
    }
  });
}


