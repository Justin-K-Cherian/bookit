const chatBody = document.getElementById("chat-body");

/* REDIRECT FROM USER PAGE */
function openChat() {
  window.location.href = "chatbot.html";
}

/* AUTO START CHAT WHEN PAGE LOADS */
window.onload = () => {
  botMessage("👋 Hi! I'm BookBot. How can I help you today?");
};

function userMessage(text) {
  const div = document.createElement("div");
  div.className = "msg user";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function botMessage(text) {
  const div = document.createElement("div");
  div.className = "msg bot";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendOption(type) {
  if (type === "rules") {
    userMessage("Show me the rules");
    botMessage(
      "Here are the rules for using campus venues:\n\n" +
      "✨ Maintain cleanliness\n" +
      "⏰ Follow allocated time strictly\n" +
      "📱 Use QR check-in on arrival\n" +
      "🛠️ Report issues responsibly"
    );
  }

  if (type === "guidelines") {
    userMessage("Show me the guidelines");
    botMessage(
      "Here are some booking guidelines:\n\n" +
      "🕒 Book at least 30 minutes early\n" +
      "🏫 Seminar halls need HOD approval\n" +
      "⚽ Sports facilities are auto-approved\n" +
      "📝 Cancel if you won’t attend"
    );
  }

  if (type === "faq") {
    userMessage("Show FAQs");
    showFAQ();
  }
}

function showFAQ() {
  const questions = [
    "How do I book a venue?",
    "Why is my booking pending?",
    "What is QR check-in?",
    "What if I am late?",
    "Can students book seminar halls?",
    "Who approves seminar halls?",
    "Is booking cancellation automatic?",
    "Can I edit my booking?",
    "How to report venue issues?",
    "Is booking history stored?"
  ];

  questions.forEach(q => {
    const btn = document.createElement("button");
    btn.className = "faq-btn";
    btn.innerText = q;
    btn.onclick = () => {
      userMessage(q);
      botMessage(getAnswer(q));
    };
    chatBody.appendChild(btn);
  });

  chatBody.scrollTop = chatBody.scrollHeight;
}

function getAnswer(q) {
  const answers = {
    "How do I book a venue?": "Go to BookIt → Select venue → Choose slot → Confirm.",
    "Why is my booking pending?": "Seminar halls require HOD approval.",
    "What is QR check-in?": "Scan the QR at venue entrance to verify entry.",
    "What if I am late?": "Booking may auto-cancel after grace period.",
    "Can students book seminar halls?": "Yes, with department approval.",
    "Who approves seminar halls?": "Concerned department HOD.",
    "Is booking cancellation automatic?": "Yes, if unused within time.",
    "Can I edit my booking?": "Edits allowed before approval.",
    "How to report venue issues?": "Use feedback module.",
    "Is booking history stored?": "Yes, under your profile."
  };
  return answers[q];
}
