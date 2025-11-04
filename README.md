# 💙 CICATRIZA VIDA — Entrega 4: Versionamento, Acessibilidade e Deploy

## 🧭 Sobre o Projeto
**Cicatriza Vida** é uma plataforma web desenvolvida para apoiar pessoas com feridas crônicas, especialmente casos de **pé diabético** e **lesões por pressão**.  
O sistema foi construído como parte da disciplina **Desenvolvimento Front-End Para Web**, visando integrar práticas de desenvolvimento front-end, interatividade, acessibilidade e publicação profissional.

---

## 🎯 Objetivo da Entrega IV
Consolidar o projeto com a aplicação de:
- **Versionamento profissional com Git/GitHub (GitFlow)**;  
- **Acessibilidade conforme WCAG 2.1 nível AA**;  
- **Otimização de arquivos para produção**;  
- **Deploy público do sistema.**

---

## 🧱 1. Controle de Versão (Git/GitHub)

Foi implementada a estratégia **GitFlow**, com organização de branches e versionamento semântico.

### 🔧 Estrutura Utilizada:
- `main` → versão estável em produção.  
- `develop` → ambiente de desenvolvimento e ajustes.  
- Tags de release criadas conforme padrão **SemVer (ex: v1.0.0)**.

### 📜 Histórico de Commits:
Os commits foram realizados com mensagens semânticas, claras e organizadas:
- `♿ feat:` para novas funcionalidades relacionadas à acessibilidade;  
- `🎨 style:` para ajustes visuais e de contraste;  
- `🔧 fix:` para correções pontuais;  
- `🧩 refactor:` para melhorias no código.

### 🧾 Exemplo prático de fluxo:
```bash
git checkout -b develop
git add .
git commit -m "♿ feat: ajustes de acessibilidade conforme WCAG 2.1"
git checkout main
git merge develop
git tag -a v1.0.0 -m "🚀 Versão final - Entrega IV"
git push origin main --tags

Além disso:
Foi criado Pull Request da branch develop para main;
Configurados Issues e Milestones para controle de etapas.

♿ 2. Acessibilidade (WCAG 2.1 – Nível AA)
Foram aplicadas práticas de acessibilidade para tornar a plataforma inclusiva e compatível com leitores de tela e navegação por teclado.

✅ Ações Implementadas:
Critério	Aplicação
Navegação por teclado	Todos os links, botões e formulários recebem foco e podem ser navegados via TAB.
Estrutura semântica	Uso correto de <header>, <nav>, <main>, <section>, <footer>.
Contraste mínimo (4.5:1)	Verificado e ajustado o contraste entre textos e fundos.
Leitores de tela (ARIA)	Inclusão de aria-label e alt em ícones, botões e imagens.
Modo escuro acessível	Implementado modo noturno com contraste adequado e legibilidade.

Ferramentas de validação utilizadas:
WAVE Web Accessibility Tool
Accessibility Insights for Web (Microsoft)

⚙️ 3. Otimização para Produção
O projeto foi otimizado para melhor desempenho e carregamento rápido, conforme orientações da atividade.

🔍 Medidas aplicadas:
Etapa	Ação
Minificação de CSS	Arquivo styles.min.css gerado com CSSMinifier.
Minificação de JavaScript	Arquivo script.min.js criado com JSCompress.
Minificação de HTML	Código reduzido com HTML Minifier.
Compressão de imagens	Todas as imagens otimizadas via TinyPNG.
Verificação de desempenho	Teste via Lighthouse (Google Chrome DevTools).

⏱️ Tempo médio de carregamento: inferior a 5 segundos.

🌐 4. Deploy (Publicação)
O projeto foi publicado em ambiente de produção utilizando GitHub Pages.
🔗 Link público do sistema:
👉 Acesse Cicatriza Vida Online

📦 5. Repositório Entregue
O repositório GitHub contém:
Código-fonte completo e atualizado;
Histórico de commits organizado;
Tag de release (v1.0.0);
Pull Request documentado (develop → main);
Issues e milestones configurados;
README profissional completo.

🧩 6. Documentação Técnica

A documentação foi revisada e atualizada, contendo:
Descrição do projeto;
Objetivos e entregas;
Estrutura de diretórios;
Versão atual;
Créditos de desenvolvimento.

📘 Resumo das Etapas Concluídas
Etapa	Status
Estrutura HTML semântica	✅
CSS responsivo e otimizado	✅
Funcionalidades JS (chat e dashboard)	✅
Acessibilidade (WCAG 2.1 AA)	✅
Versionamento GitFlow	✅
Deploy (GitHub Pages)	✅
Documentação final	✅

👩‍💻 Autoria
Desenvolvido por: Nandria da Silva Brizido
Curso: Ciência da Computação – 1º Semestre
Instituição: Cruzeiro do Sul Virtual
Disciplina: Desenvolvimento Front-End Para Web
Entrega 4 — 2025