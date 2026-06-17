# 📚 Guia do Primeiro Emprego - Documentação Completa

> Site informativo desenvolvido como trabalho acadêmico da **Fase 1 de ADS** (Análise e Desenvolvimento de Sistemas)

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Setup](#instalação-e-setup)
- [Funcionamento do Sistema](#funcionamento-do-sistema)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Documentação Técnica](#documentação-técnica)
- [Boas Práticas Implementadas](#boas-práticas-implementadas)

---

## 🎯 Visão Geral

O **Guia do Primeiro Emprego** é uma aplicação web educacional que oferece informações práticas e estruturadas para auxiliar estudantes de ADS (Análise e Desenvolvimento de Sistemas) na busca pelo primeiro emprego.

O site apresenta conteúdo em 6 seções principais:
1. **Onde procurar empregos** - Plataformas, redes e estratégias
2. **Currículo** - Como estruturar um currículo eficaz
3. **Preparação** - Dicas antes da entrevista
4. **Comportamento** - Condutas apropriadas em entrevistas
5. **Comunicação** - Formalidade e etiqueta profissional
6. **Dicas extras** - Portfólio, networking e primeiros passos

---

## ✨ Funcionalidades Principais

### 1. **Navegação Responsiva com Menu Móvel**
- Header sticky que acompanha a rolagem
- Menu hambúrguer para dispositivos móveis
- Links de navegação dinâmicos que atualizam conforme o usuário faz scroll

### 2. **Barra de Progresso de Leitura**
- Indicador visual na parte superior do header
- Mostra o percentual de página já lida
- Atualiza em tempo real

### 3. **Botão "Voltar ao Topo"**
- Aparece automaticamente após scroll de 400px
- Navegação suave até o topo da página

### 4. **Sistema de Abas (Tabs)**
- Organização de conteúdo em categorias
- Alternância entre abas sem recarregar a página
- Acessibilidade com ARIA attributes

### 5. **Checklist Interativo com Persistência**
- Itens que podem ser marcados/desmarcados
- Progresso salvo automaticamente no **localStorage** do navegador
- Botão para resetar o progresso
- Barra visual mostrando porcentagem de conclusão

### 6. **Animações de Entrada (Reveal)**
- Elementos aparecem suavemente conforme entram na viewport
- Usa Intersection Observer API para melhor performance
- Fallback automático para navegadores antigos

### 7. **Acessibilidade (A11y)**
- Skip link para pular para conteúdo principal
- Labels semânticas e ARIA attributes
- Estrutura HTML semântica
- Contraste adequado de cores

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design responsivo com Grid, Flexbox e CSS Custom Properties
- **JavaScript (Vanilla)** - Sem dependências externas, ~160 linhas funcional

### Fontes e Recursos
- **Google Fonts** - Famílias DM Sans (corpo) e Fraunces (títulos)
- **Imagens** - Fotos gratuitas do Unsplash (ver `CREDITOS-IMAGENS.md`)

### APIs do Navegador Utilizadas
- **localStorage API** - Persistência de dados do checklist
- **Intersection Observer API** - Detecção de elementos na viewport
- **DOM API** - Manipulação e eventos
- **History API** - Navegação suave

---

## 📦 Instalação e Setup

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge - últimas 3 versões)
- Editor de texto ou IDE (opcional, para modificações)
- Python 3 ou Node.js (opcional, para servidor local)

### Opção 1: Abrir Diretamente no Navegador
```bash
# Simplesmente abra o arquivo no navegador
# Clique duplo em: index.html
# Ou arraste para a janela do navegador
```

### Opção 2: Usar Live Server (Recomendado para Desenvolvimento)
```bash
# No VS Code/Cursor, instale a extensão "Live Server"
# Clique com botão direito em index.html
# Selecione "Open with Live Server"
```

### Opção 3: Servidor Local Python
```bash
# Abra terminal na pasta do projeto
cd guia-primeiro-emprego

# Python 3
python -m http.server 8080

# Python 2 (se não tiver Python 3)
python -m SimpleHTTPServer 8080

# Acesse no navegador
# http://localhost:8080
```

### Opção 4: Servidor Local Node.js
```bash
# Usando http-server (npm global)
npm install -g http-server
http-server

# Ou com Python
npx http-server
```

---

## 🔧 Funcionamento do Sistema

### Fluxo de Carregamento

```
Navegador Carrega
    ↓
HTML Parseado
    ↓
CSS Carregado e Aplicado
    ↓
DOM Pronto (DOMContentLoaded)
    ↓
Script.js Executado (IIFE - Immediately Invoked Function Expression)
    ↓
Event Listeners Registrados
    ↓
Checklist Restaurado do localStorage
    ↓
Pronto para Interação
```

### Componentes Principais

#### 1️⃣ **Menu Toggle (Hamburger)**
```
Usuário clica no ícone ☰
    ↓
toggleMenu() executado
    ↓
Classe "is-open" adicionada/removida do nav
    ↓
Animação CSS mostra/esconde o menu
    ↓
aria-expanded atualizado (acessibilidade)
```

#### 2️⃣ **Progresso de Leitura**
```
window.scroll dispara
    ↓
updateReadingProgress() calcula: (scrollTop / totalHeight) * 100
    ↓
Largura da barra atualizada com CSS
    ↓
Botão "voltar ao topo" aparece após 400px
```

#### 3️⃣ **Navegação Ativa**
```
Usuário faz scroll
    ↓
updateActiveNav() identifica seção visível
    ↓
Link correspondente recebe classe "is-active"
    ↓
Visual do link é destacado (background + cor)
```

#### 4️⃣ **Animações de Entrada (Reveal)**
```
Elemento DOM criado com classe "reveal"
    ↓
Intersection Observer monitora entrada na viewport
    ↓
Quando visível (threshold: 15%), classe "is-visible" adicionada
    ↓
CSS trigga animação (fade-in + slide-up)
    ↓
Element unobserved para libertar memória
```

#### 5️⃣ **Sistema de Abas (Tabs)**
```
Usuário clica em aba
    ↓
getAttribute("data-tab") obtém identificador
    ↓
Todos os botões perdem classe "is-active"
    ↓
Botão clicado recebe "is-active"
    ↓
Todos os painéis ficam hidden
    ↓
Painel correspondente fica visível
    ↓
aria-selected atualizado
```

#### 6️⃣ **Checklist com localStorage**
```
Página Carrega
    ↓
loadChecklistState() recupera dados de localStorage
    ↓
Estado aplicado aos checkboxes (checked = true/false)
    ↓
updateChecklistUI() calcula progresso
    ↓
Barra visual e contador atualizados
    ↓
Event listeners adicionados aos checkboxes
    ↓
Ao marcar: saveChecklistState() salva em localStorage
    ↓
JSON serializado e armazenado como string
```

---

## 📁 Estrutura do Projeto

```
guia-primeiro-emprego/
│
├── index.html                    # Arquivo HTML principal (180+ linhas)
│                                 # Contém estrutura semântica completa
│
├── css/
│   └── styles.css               # Estilos CSS (400+ linhas, comentados)
│                                 # - Variáveis CSS (Design Tokens)
│                                 # - Responsividade (Mobile First)
│                                 # - Componentes reutilizáveis
│
├── js/
│   └── script.js                # JavaScript vanilla (160+ linhas, comentado)
│                                 # - Menu responsivo
│                                 # - Progresso de leitura
│                                 # - Tabs interativas
│                                 # - Checklist com localStorage
│
├── assets/
│   ├── hero.jpg                 # Imagem hero section
│   ├── buscar-vagas.jpg         # Imagem seção "Onde procurar"
│   ├── curriculo.jpg            # Imagem seção "Currículo"
│   ├── preparacao.jpg           # Imagem seção "Preparação"
│   ├── comportamento.jpg        # Imagem seção "Comportamento"
│   ├── comunicacao.jpg          # Imagem seção "Comunicação"
│   └── extras.jpg               # Imagem seção "Dicas Extras"
│
├── README.md                     # Este arquivo
├── CREDITOS-IMAGENS.md          # Créditos das imagens usadas
└── .gitignore                    # (opcional) arquivos ignorados pelo Git
```

---

## 💻 Documentação Técnica

### HTML (index.html)

```html
<!-- DOCTYPE e metadados -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Define charset UTF-8 para caracteres especiais -->
  <meta charset="UTF-8">
  
  <!-- Viewport para responsividade -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Meta description para SEO -->
  <meta name="description" content="...">
  
  <!-- Título da página (aparece na aba) -->
  <title>Guia do Primeiro Emprego | ADS</title>
  
  <!-- Preload de fontes Google para melhor performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
<body>
  <!-- Skip link para acessibilidade (aparece ao focar) -->
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
  
  <!-- Header sticky com navegação -->
  <header class="header" id="topo">
    <!-- Logo clicável -->
    <a class="logo" href="#topo">
      <span class="logo__icon" aria-hidden="true">🎯</span>
      <span class="logo__text">Primeiro Emprego</span>
    </a>
    
    <!-- Botão menu hamburger (mobile) -->
    <button class="menu-toggle" aria-controls="menu-principal">
      <span class="menu-toggle__bar"></span>
      <span class="menu-toggle__bar"></span>
      <span class="menu-toggle__bar"></span>
      <span class="visually-hidden">Abrir menu</span>
    </button>
    
    <!-- Navegação principal -->
    <nav class="nav" id="menu-principal" aria-label="Navegação principal">
      <ul class="nav__list">
        <li><a class="nav__link" href="#buscar">Onde buscar</a></li>
        <!-- ... mais links ... -->
      </ul>
    </nav>
    
    <!-- Barra de progresso de leitura -->
    <div class="reading-progress" aria-hidden="true">
      <span class="reading-progress__bar" id="progresso-leitura"></span>
    </div>
  </header>
  
  <!-- Conteúdo principal -->
  <main id="conteudo">
    <!-- Cada seção tem um ID único para navegação -->
    <section class="section" id="buscar">
      <!-- ... conteúdo ... -->
    </section>
  </main>
</body>
</html>
```

### CSS (styles.css) - Padrão BEM

```css
/* 
 * BEM - Block Element Modifier
 * .block -> elemento principal
 * .block__element -> subelemento
 * .block--modifier -> variação
 * 
 * Exemplo: .button__text--disabled
 */

/* Design Tokens (CSS Custom Properties) */
:root {
  /* Cores */
  --bg: #f7f9fc;              /* Fundo principal */
  --text: #1f2937;            /* Texto padrão */
  --primary: #2563eb;         /* Cor principal (azul) */
  --accent: #0d9488;          /* Cor complementar (teal) */
  
  /* Tipografia */
  --font-body: "DM Sans";     /* Fonte de corpo */
  --font-display: "Fraunces"; /* Fonte de títulos */
  
  /* Dimensões */
  --header-h: 72px;           /* Altura do header */
  --radius: 16px;             /* Border-radius padrão */
  
  /* Sombras */
  --shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

/* Reset e Normalização */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;    /* Scroll suave */
}

/* Componentes */
.header {
  position: sticky;           /* Fica no topo durante scroll */
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px); /* Efeito glass-morphism */
}

.nav__link {
  transition: background 0.2s, color 0.2s; /* Transições suaves */
}

.nav__link.is-active {
  background: var(--bg-alt);  /* Usa variável CSS */
  color: var(--primary);
}

/* Animações */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  opacity: 0;
}

.reveal.is-visible {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Responsividade */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;            /* Mostra apenas em mobile */
  }
  
  .nav {
    display: none;            /* Esconde por padrão */
  }
  
  .nav.is-open {
    display: block;           /* Mostra quando aberto */
  }
}
```

### JavaScript (script.js) - Comentado e Documentado

```javascript
/**
 * Script Principal - Guia do Primeiro Emprego
 * 
 * Funcionalidades:
 * 1. Menu responsivo com toggle
 * 2. Barra de progresso de leitura
 * 3. Navegação ativa conforme scroll
 * 4. Animações com Intersection Observer
 * 5. Abas (tabs) interativas
 * 6. Checklist com persistência em localStorage
 * 
 * Execução: IIFE (Immediately Invoked Function Expression)
 * Mantém escopo privado e evita poluição global
 */

(function () {
  "use strict"; // Ativa modo estrito (melhores práticas)

  // ===== SELETORES DOM =====
  // Agrupados no topo para fácil referência
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__link");
  const progressBar = document.getElementById("progresso-leitura");
  const revealElements = document.querySelectorAll(".reveal");
  const tabButtons = document.querySelectorAll(".tabs__btn");
  const tabPanels = document.querySelectorAll(".tabs__panel");
  const checklistItems = document.querySelectorAll(
    "#checklist-items input[type='checkbox']"
  );
  
  // Constantes
  const CHECKLIST_KEY = "guia-primeiro-emprego-checklist";

  // ===== MENU RESPONSIVO =====
  /**
   * Toggle do menu hamburger
   * @param {boolean} forceClose - Se true, força fechar o menu
   */
  function toggleMenu(forceClose) {
    const isOpen = forceClose ? false : !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", isOpen);
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  // Event listener para botão hamburger
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      toggleMenu();
    });

    // Fecha menu ao clicar em um link
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        toggleMenu(true);
      });
    });
  }

  // ===== BARRA DE PROGRESSO =====
  /**
   * Atualiza a barra de progresso de leitura
   * Calcula: (scrollTop / totalHeight) * 100
   */
  function updateReadingProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = progress + "%";
    }
  }

  // ===== NAVEGAÇÃO ATIVA =====
  /**
   * Destaca o link de navegação da seção atual
   * Verifica qual seção está na viewport
   */
  function updateActiveNav() {
    const sections = document.querySelectorAll("main section[id]");
    let currentId = "";

    sections.forEach(function (section) {
      const top = section.offsetTop - 120; // Margem do header
      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === "#" + currentId);
    });
  }

  // Event listener para scroll
  window.addEventListener("scroll", function () {
    updateReadingProgress();
    updateActiveNav();
  });

  // ===== ANIMAÇÕES DE ENTRADA (REVEAL) =====
  /**
   * Usa Intersection Observer para animar elementos
   * quando entram na viewport (melhor performance que scroll events)
   */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          // Quando elemento fica visível
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Para de observar
          }
        });
      },
      {
        threshold: 0.15,           // Quando 15% do elemento é visível
        rootMargin: "0px 0px -40px 0px" // Dispara 40px antes do final
      }
    );

    // Inicia observação de todos os elementos com classe "reveal"
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback para navegadores antigos: mostra tudo imediatamente
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // ===== SISTEMA DE ABAS (TABS) =====
  /**
   * Alterna entre diferentes abas de conteúdo
   * Cada botão tem data-tab e cada painel tem data-panel
   */
  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const target = button.getAttribute("data-tab");

      // Remove "active" de todos os botões
      tabButtons.forEach(function (btn) {
        const isActive = btn === button;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", String(isActive));
      });

      // Mostra apenas o painel correspondente
      tabPanels.forEach(function (panel) {
        const isMatch = panel.getAttribute("data-panel") === target;
        panel.classList.toggle("is-active", isMatch);
        panel.hidden = !isMatch;
      });
    });
  });

  // ===== CHECKLIST COM PERSISTÊNCIA =====
  /**
   * Gerencia o estado do checklist
   * Salva no localStorage para persistir entre visitas
   */

  /**
   * Carrega estado do checklist do localStorage
   * @returns {object} Objeto com estado de cada item
   */
  function loadChecklistState() {
    try {
      return JSON.parse(localStorage.getItem(CHECKLIST_KEY)) || {};
    } catch (error) {
      return {}; // Retorna vazio se erro ao parsear
    }
  }

  /**
   * Salva estado do checklist no localStorage
   * @param {object} state - Objeto com estado dos items
   */
  function saveChecklistState(state) {
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
  }

  /**
   * Atualiza UI do checklist
   * - Calcula progresso (itens marcados / total)
   * - Atualiza barra de progresso
   * - Atualiza contador de itens
   */
  function updateChecklistUI() {
    const total = checklistItems.length;
    let done = 0;

    checklistItems.forEach(function (item) {
      const label = item.closest("label");
      if (item.checked) {
        done += 1;
        label.classList.add("is-done");
      } else {
        label.classList.remove("is-done");
      }
    });

    const percent = total > 0 ? (done / total) * 100 : 0;

    if (checklistBar) {
      checklistBar.style.width = percent + "%";
    }

    if (checklistStatus) {
      checklistStatus.textContent = done + " de " + total + " concluídos";
    }
  }

  // Inicializa checklist se houver itens
  if (checklistItems.length) {
    const savedState = loadChecklistState();

    checklistItems.forEach(function (item) {
      const id = item.getAttribute("data-check");
      
      // Restaura estado anterior
      item.checked = Boolean(savedState[id]);

      // Event listener para mudanças
      item.addEventListener("change", function () {
        const state = loadChecklistState();
        state[id] = item.checked;
        saveChecklistState(state);
        updateChecklistUI();
      });
    });

    // Atualiza UI inicial
    updateChecklistUI();
  }

  // Botão para resetar checklist
  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener("click", function () {
      localStorage.removeItem(CHECKLIST_KEY);
      checklistItems.forEach(function (item) {
        item.checked = false;
      });
      updateChecklistUI();
    });
  }

  // ===== INICIALIZAÇÃO =====
  // Executa ao carregar a página
  updateReadingProgress();
  updateActiveNav();
})();
```

---

## 🏆 Boas Práticas Implementadas

### 1. **Semântica HTML**
- ✅ Uso de `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`
- ✅ Headings em ordem hierárquica (h1 → h2 → h3)
- ✅ Imagens com `alt` text descritivo
- ✅ Formulários com labels associados

### 2. **Acessibilidade (WCAG 2.1)**
- ✅ Skip link funcional
- ✅ ARIA labels e roles apropriados
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Focus visível em elementos interativos
- ✅ Conteúdo visualmente oculto acessível por leitores de tela

### 3. **Performance**
- ✅ Sem dependências externas (vanilla JS)
- ✅ Preload de fontes Google
- ✅ Intersection Observer (vs scroll events pesados)
- ✅ Lazy loading de imagens
- ✅ CSS otimizado sem repetições

### 4. **Responsividade**
- ✅ Mobile-first approach
- ✅ Breakpoints bem definidos (768px, 1024px)
- ✅ Flexbox e Grid para layouts
- ✅ Unidades relativas (rem, %)

### 5. **Manutenibilidade**
- ✅ Padrão BEM para CSS
- ✅ IIFE em JavaScript (escopo isolado)
- ✅ Uso de CSS Custom Properties (variáveis)
- ✅ Código bem comentado e documentado
- ✅ Separação de concerns (HTML, CSS, JS)

### 6. **SEO**
- ✅ Meta description
- ✅ Títulos significativos
- ✅ URL amigável com hash
- ✅ Estrutura de headings lógica

### 7. **Compatibilidade**
- ✅ Fallback para browsers sem Intersection Observer
- ✅ Prefixos de vendor onde necessário
- ✅ Suporte a navegadores até 2-3 versões anteriores

---

## 🐛 Troubleshooting

### Menu não aparece em mobile?
```
Verificar:
1. CSS media query (max-width: 768px)
2. Classe "is-open" sendo adicionada
3. Arquivo styles.css carregado corretamente
```

### Checklist não persiste?
```
Verificar:
1. localStorage habilitado no navegador
2. Chave "guia-primeiro-emprego-checklist" em dev tools → Storage
3. Permissões de armazenamento
4. Modo privado/incógnito (localStorage não funciona)
```

### Imagens não carregam?
```
Verificar:
1. Caminho relativo: assets/imagem.jpg
2. Nomes de arquivo (case-sensitive em Linux)
3. Permissões de leitura da pasta assets/
```

### Scroll suave não funciona?
```
Verificar:
1. html { scroll-behavior: smooth; } em CSS
2. Safari pode não suportar (usar polyfill)
```

---

## 📚 Referências e Recursos

### JavaScript
- [MDN - localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [MDN - Intersection Observer API](https://developer.mozilla.org/pt-BR/docs/Web/API/Intersection_Observer_API)
- [MDN - DOM API](https://developer.mozilla.org/pt-BR/docs/Web/API/Document)

### CSS
- [BEM - Block Element Modifier](http://getbem.com/)
- [CSS Custom Properties](https://developer.mozilla.org/pt-BR/docs/Web/CSS/--*)
- [CSS Grid e Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)

### Acessibilidade
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN - ARIA](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 👨‍💼 Autor

**Trabalho Acadêmico - ADS Fase 1**

Desenvolvido como projeto de estudo para a disciplina de Desenvolvimento Web.

---

## 📄 Licença

Projeto educacional. Imagens utilizadas seguem licença Unsplash (Creative Commons Zero).
Veja `CREDITOS-IMAGENS.md` para detalhes completos de atribuição.

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a seção [Troubleshooting](#troubleshooting)
2. Consulte o console do navegador (F12 → Console)
3. Revise os comentários no código fonte
4. Verifique permissões de arquivo e pasta

---

**Última atualização:** 2026  
**Versão:** 1.0.0  
**Status:** Completo e funcional ✅
