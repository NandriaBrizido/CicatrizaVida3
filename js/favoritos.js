
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  if (!cards.length) return;

  cards.forEach(card => {
    const id = card.querySelector("h3")?.textContent.trim();
    const btnFav = document.createElement("button");
    btnFav.innerHTML = "❤️";
    btnFav.classList.add("btn", "ghost", "fav-btn");

    const dados = JSON.parse(localStorage.getItem("dadosCicatrizaVida")) || {};
    const favoritos = dados.favoritos || [];
    if (favoritos.includes(id)) btnFav.classList.add("ativo");

    card.querySelector(".card-footer")?.appendChild(btnFav);

    btnFav.addEventListener("click", () => {
      const dadosAtual = JSON.parse(localStorage.getItem("dadosCicatrizaVida"));
      let favoritos = dadosAtual.favoritos || [];

      if (favoritos.includes(id)) {
        favoritos = favoritos.filter(f => f !== id);
        btnFav.classList.remove("ativo");
        mostrarToast(`Removido dos favoritos: ${id}`);
      } else {
        favoritos.push(id);
        btnFav.classList.add("ativo");
        mostrarToast(`Adicionado aos favoritos: ${id}`);
      }

      dadosAtual.favoritos = favoritos;
      localStorage.setItem("dadosCicatrizaVida", JSON.stringify(dadosAtual));
    });
  });
});
