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


const aiToggle = document.getElementById("aiToggle");

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

