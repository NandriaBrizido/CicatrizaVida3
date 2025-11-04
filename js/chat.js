document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chatBox");
  const chatToggle = document.getElementById("chatToggle");
  const chatClose = document.getElementById("chatClose");
  const chatSend = document.getElementById("chatSend");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  if (!chatToggle || !chatBox) return;

  chatMessages.innerHTML = "";

  chatToggle.addEventListener("click", () => {
    chatBox.classList.toggle("hidden");
    if (chatBox.classList.contains("hidden")) chatMessages.innerHTML = "";
  });

  chatClose.addEventListener("click", () => {
    chatBox.classList.add("hidden");
    chatMessages.innerHTML = "";
  });

  chatSend.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    addMessage("Você", msg);
    chatInput.value = "";

    const typingDiv = document.createElement("div");
    typingDiv.classList.add("typing");
    typingDiv.innerHTML = `<div class="dot"></div><div class="dot"></div><div class="dot"></div>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      const reply = respostaAutomatica(msg);
      addMessage("Cicatriza Vida 💙", reply);
    }, 900);
  }

  function addMessage(sender, text) {
    const div = document.createElement("div");
    div.classList.add("msg", sender === "Você" ? "user" : "bot");
    div.innerHTML = `
      <div class="msg-content">
        ${sender !== "Você" ? '<img src="images/logo.png" alt="Bot" class="avatar">' : ""}
        <div class="msg-text"><strong>${sender}:</strong> ${text}</div>
      </div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });
  }

  function respostaAutomatica(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("bom dia")) return "Bom dia🌞! Que alegria receber você! Como posso ajudar?";
    if (msg.includes("boa tarde")) return "Boa tarde🌻! Espero que esteja bem. Quer saber mais sobre nossas ações?";
    if (msg.includes("boa noite")) return "Boa noite🌙! Que bom ter você por aqui. Em que posso ajudar?";
    if (msg.includes("oi") || msg.includes("olá")) return "Olá👋! Seja bem-vindo(a) ao Cicatriza Vida💙 Como posso te ajudar hoje?";
    if (msg.includes("tudo bem")) return "Tudo ótimo por aqui🙌 e você?";

    if (msg.includes("doa") || msg.includes("doação"))
      return `
💚Que atitude maravilhosa!  
Você pode fazer sua doação clicando na aba “Doação” no menu superior.  
Lá encontrará todas as informações para contribuir com materiais ou valores.`;

    if (msg.includes("inscri") || msg.includes("curso") || msg.includes("oficina"))
      return `
📋Para realizar sua inscrição, acesse a aba “Inscrição” no menu acima.  
Preencha seus dados e aguarde nosso contato. Será um prazer ter você com a gente!💙`;

    if (msg.includes("volunt") || msg.includes("ajudar"))
      return `
🤝Que alegria saber que quer ser voluntário(a)!  
Vá até a aba “Voluntariado” no menu e conheça as formas de participar.  
Seu tempo e empatia transformam vidas!💚`;

    if (msg.includes("contato") || msg.includes("telefone") || msg.includes("email"))
      return `
📞Nosso telefone é (97) 3228-6882  
📧E-mail: nandriabrizido@gmail.com  
Pode nos mandar mensagem quando quiser!💙`;

    if (msg.includes("obrigado") || msg.includes("valeu") || msg.includes("agrade"))
      return `
💬Ficamos muito felizes com seu retorno!  
💙Obrigado por fazer parte dessa corrente do bem.  
✨"Pequenos gestos de cuidado geram grandes curas."`;

    if (msg.includes("tchau") || msg.includes("até"))
      return "Até logo 👋!Foi um prazer conversar com você. Continue espalhando empatia💚";

    return `
Posso te ajudar com informações sobre:  
🩹Doações  
📘Inscrições 
🤝Voluntariado  
📞Contato 
É só digitar o tema que deseja saber mais.`;
  }
});
