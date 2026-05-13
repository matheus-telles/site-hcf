# TechMarket Mockup Design
**Date**: May 13, 2026  
**Scope**: Single-page marketplace mockup for presentation to stakeholders  
**Approach**: Minimalista com interatividade parcial (Abordagem A)

---

## Objetivo
Criar um mockup visual de um marketplace tipo Amazon para empresa de TI (servidores, computadores, licenças, soluções). O mockup deve demonstrar:
- Catálogo de produtos com visualização clara de preços
- Experiência de checkout simplificada via WhatsApp
- Design profissional (tons azul, cinza, branco)
- Carrinho funcional com integração WhatsApp

---

## Arquitetura Geral

**Estrutura**: Single-page application (SPA) com HTML estático, CSS para styling e JavaScript para interatividade parcial

**Fluxo do Usuário**:
1. Usuário acessa página → vê catálogo de 6-8 produtos em grid
2. Clica "Ver Detalhes" em um produto → abre modal com informações completas
3. Clica "Adicionar ao Carrinho" (no card ou modal) → produto entra no carrinho
4. Clica ícone carrinho no header → abre sidebar com resumo de itens
5. Clica "Finalizar Compra no WhatsApp" → redireciona para WhatsApp com mensagem pré-preenchida contendo o carrinho

**Persistência**: Carrinho armazenado em memória durante a sessão (sem localStorage para manter simplicidade)

---

## Componentes Principais

### 1. Header
- **Dimensões**: 80px altura
- **Fundo**: Azul escuro #1a3a52
- **Layout**: Flexbox com 3 seções
  - Esquerda: Logo/título "TechMarket"
  - Centro: Campo de busca (visual, não-funcional)
  - Direita: Ícone carrinho com badge de contador
- **Interatividade**: Clique no ícone carrinho abre/fecha sidebar

### 2. Catálogo (Grid Principal)
- **Layout**: Grid responsivo
  - Desktop: 4 colunas
  - Tablet: 2 colunas
  - Mobile: 1 coluna
- **Card de Produto**:
  - Dimensões: 280px x 400px
  - Imagem placeholder: 280x200px, fundo cinza #e0e0e0
  - Nome do produto
  - Descrição breve (1 linha, truncada)
  - Preço em destaque (azul escuro #1a3a52, fonte maior)
  - Dois botões:
    - "Ver Detalhes" (azul #1a3a52)
    - "Adicionar ao Carrinho" (cinza #707070)

### 3. Modal de Detalhes do Produto
- **Trigger**: Clique em "Ver Detalhes" em qualquer card
- **Layout**:
  - Overlay semi-transparente (rgba 0,0,0,0.5)
  - Conteúdo centralizado em dois painéis lado-a-lado
    - Esquerda: Imagem grande do produto
    - Direita: Informações
      - Nome
      - Descrição completa (2-3 parágrafos)
      - Especificações técnicas (lista com 4-5 items)
      - Preço em destaque
      - Botão "Adicionar ao Carrinho" (azul escuro)
  - Fechar: Clique no X ou fora do modal
- **Interatividade**: Adicionar produto ao carrinho atualiza contador no header

### 4. Carrinho Lateral (Sidebar)
- **Trigger**: Clique no ícone carrinho no header
- **Layout**: Slide-in pela direita (300px de largura)
  - Overlay semi-transparente
  - Lista de produtos no carrinho
  - Cada item: nome, quantidade (com +/- para ajustar), preço unitário
  - Remover item: botão X
  - Subtotal
  - Total em destaque (azul escuro)
  - Botão "Finalizar Compra no WhatsApp" (verde #25D366)
- **Interatividade**:
  - Ajustar quantidade com botões +/-
  - Remover item do carrinho
  - Clique no botão WhatsApp: redireciona para link WhatsApp com número pré-preenchido e mensagem contendo lista de produtos

---

## Paleta de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| Azul Escuro | #1a3a52 | Header, botões primários, texto destaque |
| Cinza Médio | #707070 | Botões secundários, textos normais |
| Cinza Claro | #e0e0e0 | Bordas, divisores, backgrounds de imagem |
| Branco | #ffffff | Fundo principal |
| Verde WhatsApp | #25d366 | CTA final (botão WhatsApp) |

---

## Dados de Exemplo

**6-8 produtos com estrutura**:
- ID (único)
- Nome
- Descrição breve (1 linha para catálogo)
- Descrição completa (para modal)
- Preço (em reais, formatado)
- Especificações (array de 4-5 strings)
- Imagem (placeholder URL ou cor)

**Exemplos**:
1. Servidor Dell PowerEdge R750
2. Notebook Lenovo ThinkPad E15
3. Windows 10 Pro License
4. Microsoft Office 365 (12 meses)
5. Solução Backup Corporativa
6. Processador Intel Xeon Platinum
7. SSD Kingston 1TB
8. Roteador Cisco Catalyst

---

## Funcionalidades JavaScript

### Estado do Carrinho
- Array de objetos com: `{ productId, name, price, quantity }`
- Atualizado em memória durante a sessão

### Eventos e Interações

1. **Abrir/Fechar Modal**
   - Clique em "Ver Detalhes" → abre modal com dados do produto
   - Clique em X ou overlay → fecha modal

2. **Adicionar ao Carrinho**
   - Verifica se produto já está no carrinho
   - Se sim: incrementa quantidade
   - Se não: adiciona novo item com quantidade 1
   - Atualiza badge do carrinho no header

3. **Gerenciar Carrinho**
   - Botões +/- para ajustar quantidade
   - Botão X para remover item
   - Calcula subtotal e total automaticamente

4. **Integração WhatsApp**
   - Número do WhatsApp pré-configurado (placeholder: +55 11 99999-9999)
   - Mensagem pré-preenchida com:
     - Saudação
     - Lista de produtos (nome + quantidade + preço)
     - Total
     - Solicitação de confirmação
   - Abre link: `https://wa.me/5511999999999?text=<mensagem_codificada>`

5. **Busca (Visual)**
   - Campo de busca no header não filtra realmente
   - Mantém interatividade visual (foco, cursor)

---

## Estrutura de Arquivos

```
site-hcf/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos e responsividade
├── script.js           # Lógica JavaScript
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-05-13-marketplace-mockup-design.md
```

---

## Responsividade

- **Desktop** (1200px+): 4 colunas, layout normal
- **Tablet** (768px-1199px): 2 colunas, ajustes de espaçamento
- **Mobile** (<768px): 1 coluna, sidebar full-width, header responsivo

---

## Próximos Passos

1. Implementar HTML com estrutura semântica
2. Estilizar com CSS (mobile-first)
3. Adicionar interatividade JavaScript
4. Testar em navegador e responsividade
5. Preparar para apresentação ao chefe

---

## Notas de Implementação

- Sem dependências externas (puro HTML/CSS/JS)
- Carrinho sem persistência (localStorage não necessário para mockup)
- Produtos como array de objetos em JavaScript
- Números WhatsApp e empresa configuráveis na variável global
- Fácil customização: cores, produtos, número WhatsApp, etc.
