const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input button");
let chatbot = document.querySelector(".chatBot");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "chat-outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const handleChat = () => {
  userMessage = chatInput.value;
  if (!userMessage) {
    return;
  }
  chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));

  setTimeout(() => {
    const incomingChatLi = createChatLi("Welcome...", "chat-incoming");
    chatbox.appendChild(incomingChatLi);
  }, 1000);
};

sendChatBtn.addEventListener("click", handleChat);

function cancel() {
  chatbot.style.display = "none";
}

let chatbotopen = document.querySelector(".open-icon");
chatbotopen.addEventListener("click", (e) => {
  chatbot.style.display = "block";
});
