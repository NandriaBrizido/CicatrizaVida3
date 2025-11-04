
const DadosONG = {
  chave: "dadosCicatrizaVida",

  inicializar() {
    if (!localStorage.getItem(this.chave)) {
      const dadosIniciais = {
        doacoes: 185,
        voluntarios: 42,
        projetos: 6,
        metas: [
          { mes: "Janeiro", valor: 1500 },
          { mes: "Fevereiro", valor: 1800 },
          { mes: "Março", valor: 2100 },
          { mes: "Abril", valor: 1950 },
          { mes: "Maio", valor: 2200 },
          { mes: "Junho", valor: 2500 }
        ],
        favoritos: [],
        comentarios: []
      };
      localStorage.setItem(this.chave, JSON.stringify(dadosIniciais));
    }
  },

  obter() {
    return JSON.parse(localStorage.getItem(this.chave));
  },

  salvar(dados) {
    localStorage.setItem(this.chave, JSON.stringify(dados));
  }
};

document.addEventListener("DOMContentLoaded", () => DadosONG.inicializar());
