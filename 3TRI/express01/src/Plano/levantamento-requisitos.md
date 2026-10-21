# Plano de Desenvolvimento Web - Arquitetura de Páginas

Este documento apresenta o levantamento de requisitos estruturais e o planejamento de interface para o desenvolvimento das páginas do website, garantindo um layout moderno, responsivo (Flexbox/Grid) e pronto para produção.

---

## 🎨 Especificações de Identidade Visual & Layout Geral

### Paleta de Cores & Acessibilidade
*   **Cor Primária:** Bege (`#F5F5DC` ou variação premium como `#EEDC82` / `#D2B48C`) — Utilizada para destaques sutis, botões secundários ou elementos de marca.
*   **Cor Secundária:** Preto (`#1A1A1A`) — Utilizada para o cabeçalho fixo, rodapé, títulos fortes e botões de conversão primária (CTA).
*   **Fundo (Background):** Cinza Claro (`#F4F4F6` ou `#FAFAFA`) — Garante uma leitura limpa, moderna e sem fadiga visual.
*   **Texto (Alto Contraste):** Preto Puro (`#000000`) ou Cinza Escuro Premium (`#111111`) — Escolhida rigorosamente como a **cor com maior contraste em relação ao fundo cinza claro**, atendendo estritamente às diretrizes de acessibilidade (WCAG).

### Componentes Globais (Presentes em todas as páginas)
1.  **Cabeçalho Fixo (Sticky Header):**
    *   Posicionamento fixado no topo da tela durante a rolagem (`position: fixed` ou `sticky`).
    *   Fundo em cor contrastante (Preto) com textos em Bege/Branco para destaque.
    *   **Menu de Navegação:** Links estruturados com Flexbox para:
        *   ` / ` (Página Inicial)
        *   ` /produtos `
        *   ` /sobre `
        *   ` /contato `
2.  **Rodapé (Footer):**
    *   Direitos autorais claramente visíveis (ex: *© 2026 Empresa. Todos os direitos reservados.*).
    *   Links para Redes Sociais Fictícias (Instagram, LinkedIn, Facebook).
    *   Alinhamento responsivo em Grid ou Flexbox para dispositivos móveis.

---

## 📄 Plano Estrutural das Páginas
*Página institucional focada em construir autoridade, contar a história da marca e gerar conexão.*

*   **Seção História:** Narrativa sobre a fundação, missão, visão e valores da empresa.
*   **Diferenciais do Negócio:** Layout em blocos ou colunas (Flexbox) detalhando o que torna a marca única.
*   **Seção Equipe ou Cultura (Opcional):** Exibição limpa de rostos ou ideais que movem a organização.


## 🛠️ Requisitos Técnicos de Produção (Pronto para Código)
*   **Responsividade:** Design Mobile-First. Uso de Media Queries para quebrar layouts de colunas múltiplas em colunas únicas em telas menores que 768px.
*   **Semântica HTML5:** Utilização de tags corretas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) para melhor indexação e acessibilidade.
*   **Performance:** Código limpo e sem acoplamentos desnecessários para carregamento instantâneo.
