
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("section");
  container.classList.add("container", "painel-ong");
  container.innerHTML = `
    <h2>Painel da ONG</h2>
    <p>Acompanhe o desempenho e as métricas da Cicatriza Vida em tempo real.</p>

    <div class="metricas">
      <div class="card-metrica">
        <h3 id="doacoesTotal">0</h3>
        <p>Doações Recebidas</p>
      </div>
      <div class="card-metrica">
        <h3 id="voluntariosTotal">0</h3>
        <p>Voluntários Ativos</p>
      </div>
      <div class="card-metrica">
        <h3 id="projetosTotal">0</h3>
        <p>Projetos em Andamento</p>
      </div>
    </div>

    <canvas id="graficoMetas" height="120"></canvas>

    <div class="exportar mt-3">
      <button id="exportarCSV" class="btn">Exportar Relatório (CSV)</button>
    </div>
  `;

  document.querySelector("main.site-main").innerHTML = "";
  document.querySelector("main.site-main").appendChild(container);

  const dados = JSON.parse(localStorage.getItem("dadosCicatrizaVida")) || {};

  animarNumero("doacoesTotal", dados.doacoes);
  animarNumero("voluntariosTotal", dados.voluntarios);
  animarNumero("projetosTotal", dados.projetos);

  gerarGraficoMetas(dados.metas);

  document.getElementById("exportarCSV").addEventListener("click", () => {
    exportarCSV(dados);
  });
});

function animarNumero(id, valorFinal) {
  const elemento = document.getElementById(id);
  let valorAtual = 0;
  const incremento = Math.ceil(valorFinal / 100);
  const intervalo = setInterval(() => {
    valorAtual += incremento;
    if (valorAtual >= valorFinal) {
      valorAtual = valorFinal;
      clearInterval(intervalo);
    }
    elemento.textContent = valorAtual;
  }, 20);
}

function gerarGraficoMetas(metas) {
  const ctx = document.getElementById("graficoMetas").getContext("2d");
  const labels = metas.map(m => m.mes);
  const valores = metas.map(m => m.valor);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Arrecadação Mensal (R$)",
        data: valores,
        backgroundColor: "#00a3c4"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function exportarCSV(dados) {
  let csv = "Categoria,Quantidade\n";
  csv += `Doações,${dados.doacoes}\n`;
  csv += `Voluntários,${dados.voluntarios}\n`;
  csv += `Projetos,${dados.projetos}\n`;
  csv += "\nMetas Mensais:\n";
  dados.metas.forEach(m => {
    csv += `${m.mes},${m.valor}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "relatorio_cicatriza_vida.csv";
  a.click();
  window.URL.revokeObjectURL(url);
}
