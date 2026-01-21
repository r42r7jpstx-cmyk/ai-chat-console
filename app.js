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
