# ☕ Starbucks | Mais que café, uma experiência.

Landing page fan-made da Starbucks, desenvolvida para fins de estudo de **HTML, CSS e JavaScript puro**. O projeto reproduz a identidade visual da marca com uma navegação suave, animações de entrada ao rolar a página e um design totalmente responsivo (mobile-first).

## 🔗 Demo

Abra o arquivo `index.html` diretamente no navegador ou sirva a pasta com um servidor local (veja [Como rodar](#-como-rodar)).

## ✨ Funcionalidades

- **Menu responsivo** com botão hambúrguer animado para mobile
- **Scroll suave** entre as seções via âncoras (`scroll-behavior: smooth` + fallback em JS)
- **Fade-in ao rolar a página** usando `IntersectionObserver`, incluindo efeito escalonado (*stagger*) para grids de cards
- **Seções**: Home, Em alta, Sobre nós, Novidades e Contato
- Suporte a `prefers-reduced-motion` para acessibilidade
- Ícones via [Font Awesome](https://fontawesome.com/)

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis customizadas, nesting, Grid e Flexbox)
- JavaScript vanilla (sem frameworks ou dependências de build)
- [Font Awesome 7](https://fontawesome.com/) para ícones
- Google Fonts (`Poppins` e `Fraunces`)

## 📁 Estrutura do projeto

```
├── index.html
├── src/
│   ├── css/
│   │   ├── style.css        # estilos principais das seções
│   │   ├── navbar.css       # header, navegação e reset
│   │   └── variables.css    # cores, sombras e easing
│   └── js/
│       └── script.js        # menu mobile, scroll suave e fade-in
└── images/
    ├── logo-starbucks.png
    ├── detail.png
    ├── about-us.png
    ├── bg-about.png
    ├── background-desktop.png
    ├── background-mobile.png
    ├── 1.png, 2.png, 3.png, 4.png       # cards de "Novidades"
    └── trending/
        ├── card1.png, card2.png, card3.png  # cards de "Em alta"
```

## 🚀 Como rodar

1. Clone ou baixe este repositório.
2. Garanta que as imagens estejam nos caminhos indicados na estrutura acima (`images/`, `images/trending/`).
3. Abra `index.html` no navegador — ou, para evitar problemas de CORS com alguns recursos, sirva a pasta com um servidor local:

```bash
# usando Python
python -m http.server 5500

# ou usando a extensão Live Server do VS Code
```

4. Acesse `http://localhost:5500` no navegador.

## 🎨 Personalização

As cores, sombras e curva de transição ficam centralizadas em `src/css/variables.css`, facilitando trocar a paleta sem mexer no restante do código:

```css
--color-primary-1: #34815d;
--color-neutral-8: #1e0e05;
--shadow-soft: 0 12px 30px rgba(30, 14, 5, 0.12);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

## ⚠️ Aviso

Este é um projeto **não oficial**, feito exclusivamente para fins educacionais e de portfólio. Todas as marcas, logotipos e imagens da Starbucks pertencem à Starbucks Corporation.

## 📄 Licença

Uso livre para fins de estudo. Não possui vínculo comercial com a Starbucks.
