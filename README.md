# 💙 CICATRIZA VIDA – Entrega III: Interatividade e Funcionalidades

## 🧭 Sobre o Projeto
**Cicatriza Vida** é uma plataforma web voltada ao apoio de pessoas com feridas crônicas, especialmente pé diabético e lesões por pressão.  
O sistema foi desenvolvido para a disciplina **Programação para Interfaces Web**, com o objetivo de demonstrar o uso avançado de **JavaScript**, **integração com frameworks** e **interatividade dinâmica**.

---

## 🎯 Objetivo da Entrega III
Transformar a interface estática criada nas etapas anteriores em uma **aplicação interativa e funcional**, aplicando manipulação avançada do DOM, integração com APIs, gráficos dinâmicos e armazenamento temporário.

---

## ⚙️ Funcionalidades Implementadas

### 💬 1. Chat Inteligente – “Fale Conosco”
- Chat flutuante fixado no **canto superior direito da tela**.
- Ícone interativo 💬 para abrir/fechar o chat.
- Simulação de **chatbot real**, com respostas automáticas personalizadas.
- **Reconhecimento de saudações**, como:
  - “Oi”, “Olá”, “Bom dia”, “Boa tarde”, “Boa noite”, “Tudo bem”.
- Direciona o usuário para:
  - 🩹 **Doações**
  - 📘 **Inscrições**
  - 🤝 **Voluntariado**
  - ☎️ **Contato**
- Exibe mensagens justificadas e com emojis interativos.
- Mostra **animação de digitação (três pontinhos...)** entre mensagens.
- A cada interação, apresenta **frases motivacionais personalizadas**, por exemplo:
  > “Você é uma pessoa com um coração enorme 💚. Obrigado por apoiar essa causa!”
- Histórico de mensagens é **resetado**:
  - Ao trocar de página.
  - Ao fechar e reabrir o chat.

---

### 📊 2. Painel Interativo – Dashboard da ONG
- Página exclusiva com **gráfico dinâmico** criado com **Chart.js**.
- Mostra dados simulados em tempo real:
  - Total de **doações**;
  - Quantidade de **voluntários ativos**;
  - Número de **projetos em andamento**.
- Gráfico de barras mostrando a **arrecadação mensal (R$)**.
- Botão para **exportar relatório (CSV)**.
- Layout limpo, acessível e responsivo.

---

### 🧩 3. Sistema SPA Simples
- Implementado comportamento de **Single Page Application (SPA)**.
- Reduz recarregamentos entre páginas e mantém a fluidez de navegação.
- Melhora o desempenho e experiência do usuário.

---

### 🗂️ 4. Organização Modular dos Arquivos JavaScript

| Arquivo | Função |
|----------|--------|
| `main.js` | Controle geral de navegação e inicialização |
| `dados.js` | Simulação de dados e métricas |
| `dashboard.js` | Criação de gráficos Chart.js |
| `chat.js` | Sistema completo do chat inteligente |
| `favoritos.js` | Implementação do sistema de favoritos |
| `utils.js` | Funções auxiliares reutilizáveis |
| `script.js` | Comandos gerais de interface e tema escuro |

---

### 🧠 5. Funcionalidades Avançadas do Chat
- O chat possui respostas automáticas baseadas em palavras-chave:
  - `"doação"`, `"inscrição"`, `"voluntário"`, `"contato"`, `"obrigado"`, `"agradeço"`.
- Sistema de **auto-resposta condicional**, com pausas simuladas.
- Identificação do remetente (Usuário x Cicatriza Vida).
- Rolagem automática para mostrar a última mensagem.
- Respostas com **HTML formatado** (links, negrito, emojis).

---

### 🧰 6. Integração com Frameworks e Bibliotecas
- **Bootstrap 5.3** para componentes responsivos.
- **Chart.js** para gráficos interativos.
- **Google Fonts** (`Poppins`, `Inter`) para tipografia moderna.
- **CSS Modularizado** em:
  - `base.css`, `layout.css`, `theme.css`, `utilities.css`.

---

### 🎨 7. Design e Estilo
- Cabeçalho com **cor azul institucional (#B3E5FC)**.
- Botões em **verde escuro (#155E20)**.
- Textos justificados para legibilidade.
- Espaçamento e sombras ajustados.
- Ícones e emojis inseridos para tornar o site mais acolhedor.

---

## 📂 Estrutura Final do Projeto

CICATRIZA-VIDA/
│
├── css/
│ ├── styles.css
│ ├── styles.min.css
│ ├── theme.css
│ ├── base.css
│ ├── layout.css
│ ├── utilities.css
│
├── js/
│ ├── main.js
│ ├── chat.js
│ ├── dados.js
│ ├── dashboard.js
│ ├── favoritos.js
│ ├── utils.js
│ └── script.js
│
├── images/
│ ├── logo.png
│ ├── index-hero.jpg
│ ├── index-sacral-hydrogel.jpg
│ ├── banner-collage-1200x700.jpg
│ ├── ...
│
├── index.html
├── projetos.html
├── cadastro.html
├── inscricao.html
├── voluntario.html
├── painel.html
├── styleguide.html
└── README.md

---

## 🧪 Testes Realizados
- Teste de chat em todas as páginas (sem histórico).
- Teste de reinicialização do chat ao fechar janela.
- Gráfico interativo exibindo valores atualizados.
- Navegação fluida e responsiva entre páginas.
- Exportação de relatórios funcionando.
- Layout testado em diferentes resoluções (desktop e mobile).

---

## 🧾 Demonstração de Conversas do Chat

| Entrada do Usuário | Resposta do Chat |
|--------------------|------------------|
| “Oi”, “Bom dia” | “Olá 🌞! Que alegria receber você! Como posso ajudar hoje?” |
| “Doação” | “Você pode realizar sua doação acessando a aba **‘Doação’**. 💚 Agradecemos seu gesto generoso!” |
| “Voluntário” | “Que incrível! Acesse **‘Voluntariado’** no menu para se inscrever e transformar vidas!” |
| “Inscrição” | “Para participar dos treinamentos, entre na aba **‘Inscrição’** e preencha o formulário.” |
| “Contato” | “Nosso telefone é **(97) 3228-6882** e o e-mail é **nandriabrizido@gmail.com** ☎️” |
| “Obrigado” | “💙 Agradecemos seu carinho! Você é parte da nossa missão de cicatrizar vidas.” |

🎥 Assista ao vídeo de demonstração:
https://drive.google.com/file/d/19c-C9Ptzg2AYXmeSoXEMlpS1WV66gXzp/view?usp=sharing