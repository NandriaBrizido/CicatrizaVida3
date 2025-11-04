
function mostrarToast(mensagem) {
  let toast = document.getElementById("globalToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    document.body.appendChild(toast);
  }

  toast.textContent = mensagem;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.background = "#007b8a";
  toast.style.color = "#fff";
  toast.style.padding = "10px 16px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  toast.style.fontWeight = "500";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.3s ease";
  toast.style.zIndex = "999";

  setTimeout(() => (toast.style.opacity = "1"), 100);
  setTimeout(() => (toast.style.opacity = "0"), 2500);
}

function exportarDados() {
  const dados = JSON.parse(localStorage.getItem("dadosCicatrizaVida"));
  const json = JSON.stringify(dados, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "backup_cicatriza_vida.json";
  a.click();
  window.URL.revokeObjectURL(url);
}
