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

### 🏠 1. Página Inicial (Home) — [PÁGINA INICIAL]
*A porta de entrada do usuário. Focada em impacto visual rápido, clareza de propósito e direcionamento de tráfego interno.*

*   **Seção Hero (Destaque Principal):**
    *   Título de impacto (H1) definindo o propósito do negócio.
    *   Subtítulo complementar de suporte.
    *   Botão de chamada para ação (CTA) direcionando para `/produtos`.
    *   Layout em Grid (2 colunas no desktop, 1 coluna no mobile) com imagem ou elemento conceitual ao lado.
*   **Seção de Apresentação:**
    *   Breve resumo da proposta de valor da empresa com link "Saiba Mais" para `/sobre`.
*   **Seção de Destaques (Produtos):**
    *   Grid com 3 ou 4 cartões (Cards) exibindo as principais categorias ou produtos mais populares.

### 📦 2. Página de Produtos (`/produtos`)
*Catálogo de ofertas projetado em Grid dinâmico para facilitar a visualização e filtragem.*

*   **Cabeçalho da Página:** Título explicativo e breve introdução.
*   **Área de Filtros / Categorias:** Barra lateral ou superior (Flexbox) para seleção rápida de produtos.
*   **Grid de Produtos (Responsivo):**
    *   Uso de CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`).
    *   **Cards de Produtos:** Cada card conterá imagem do produto, título, descrição curta, preço fictício e botão "Ver Detalhes" ou "Adicionar ao Carrinho".

### 🏢 3. Página Sobre (`/sobre`)
*Página institucional focada em construir autoridade, contar a história da marca e gerar conexão.*

*   **Seção História:** Narrativa sobre a fundação, missão, visão e valores da empresa.
*   **Diferenciais do Negócio:** Layout em blocos ou colunas (Flexbox) detalhando o que torna a marca única.
*   **Seção Equipe ou Cultura (Opcional):** Exibição limpa de rostos ou ideais que movem a organização.

### ✉️ 4. Página de Contato (`/contato`)
*Interface totalmente funcional do ponto de vista de layout para captura de leads e atendimento.*

*   **Seção de Informações:** Endereço fictício, e-mail, telefone de suporte e horário de funcionamento (organizados em Flexbox).
*   **Formulário de Contato:**
    *   Campos estruturados: Nome completo, E-mail, Assunto e Mensagem (Textarea).
    *   Botão de envio estilizado em conformidade com as regras de alto contraste da paleta.
*   **Elemento de Mapa (Opcional/Placeholder):** Espaço reservado para a localização da empresa.

---

## 🛠️ Requisitos Técnicos de Produção (Pronto para Código)
*   **Responsividade:** Design Mobile-First. Uso de Media Queries para quebrar layouts de colunas múltiplas em colunas únicas em telas menores que 768px.
*   **Semântica HTML5:** Utilização de tags corretas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) para melhor indexação e acessibilidade.
*   **Performance:** Código limpo e sem acoplamentos desnecessários para carregamento instantâneo.
