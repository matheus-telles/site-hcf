# Solutions Page Restructure — Brasoftware-inspired

**Date**: 2026-05-28
**Scope**: Restructure `solucoes.html` following Brasoftware organizational logic, with multi-vendor "Pacotes de Soluções"
**Reference studied**: https://www.brasoftware.com.br/
**Approach**: A — Segmento-first funnel (single page, long scroll)

---

## Objetivo

Substituir a página atual de 6 cards planos por uma estrutura que (1) entra por **segmento de negócio**, (2) lista **parceiros tecnológicos** da HCF, e (3) destaca **Pacotes de Soluções** que combinam produtos de múltiplos fornecedores em ofertas prontas. Mantém o estilo minimalista atual (paleta, tipografia, sem ícones, sem dependências). Sem copiar o visual da Brasoftware — adapta apenas a lógica de organização.

---

## O que aprendi da Brasoftware

Brasoftware organiza soluções em **três eixos paralelos** no menu principal:

- **SOLUÇÕES** — por área tecnológica (Azure, Cybersecurity, Dados/AI, M365, Dynamics 365, Virtualização, AI/Copilots, etc.)
- **SEGMENTOS** — por indústria (Educação, Finanças, Manufatura, Varejo, Setor Público, Small Business, Telecom, Engenharia/Construção)
- **PARCEIROS** — por vendor (Microsoft, Adobe, Fortinet, VMware, Veeam, Sophos, Kaspersky, Citrix, Oracle, Redhat, etc.)

Cada página de Tecnologia agrega produtos de múltiplos vendors. Cada página de Vendor lista produtos daquele fornecedor. Cada página de Segmento aponta soluções para aquele setor.

**O que adaptamos**: usamos **Segmento como eixo primário** (entrada do cliente) e **Parceiros como catálogo de building blocks**. Adicionamos um eixo que a Brasoftware não tem explicitamente: **Pacotes de Soluções** — combos cross-vendor prontos, montados pela HCF.

**O que NÃO copiamos**: visual (megamenus, banners coloridos, logos grandes). Mantemos o estilo minimalista atual.

---

## Arquitetura Geral

- **Página única**: `solucoes.html` (substitui versão atual)
- **Stack**: HTML/CSS puro. Único JS = `scroll-behavior: smooth` via CSS (sem script novo).
- **Reuse**: paleta de cores, tipografia, classes `.solution-card`, `.solutions-grid`, `.feedback-card`, `.feedback-grid`, `.hero`, `.container` já existentes em `styles.css`.
- **Persistência**: nenhuma (estático).

**Ordem vertical da página**:

1. Header (existente, sem alteração)
2. Hero
3. Seção **Segmentos**
4. Seção **Catálogo de Parceiros**
5. Seção **Pacotes de Soluções**
6. Seção **Feedback** (existente, movida pra cá)
7. Footer (existente)

---

## Componentes

### 1. Hero

- Título H1: "Nossas Soluções"
- Subtítulo: "Por segmento, por parceiro, ou em pacotes prontos cross-vendor."
- Mesmas dimensões e estilos do hero atual (altura 200-250px, alinhamento centered, padding 40px top/bottom).

### 2. Segmentos

- Título H2: "Para o seu segmento"
- Subtítulo: "Selecione o setor que mais se aproxima do seu negócio."
- Grid: 3 cols desktop / 2 cols tablet / 1 col mobile. Gap 24px.
- **6 cards** (reusa classe `.solution-card` ou nova `.segment-card` herdando estilo):

| # | Segmento | Contexto curto |
|---|---|---|
| 1 | Finanças | Compliance regulatório, core banking, prevenção a fraude, alta disponibilidade |
| 2 | Saúde | LGPD, prontuário eletrônico, telemedicina, continuidade operacional |
| 3 | Varejo | E-commerce, PDV, omnichannel, picos sazonais |
| 4 | Indústria | OT/IT, IoT industrial, produção 24/7, supply chain |
| 5 | Setor Público | Licitação, transparência, cidadão digital, governança ITIL |
| 6 | Cooperativas | Multi-unidade, governança, sistemas core, gestão de associados |

Estrutura do card:
- Título H3 (20px, azul `#1a3a52`)
- Parágrafo de contexto (14px, cinza `#333`)
- Link inline: "Ver pacotes recomendados →" (rola para `#pacotes` via âncora)
- Sem ícone (mantém minimalismo do site)

### 3. Catálogo de Parceiros

- Título H2: "Nossos Parceiros Tecnológicos"
- Subtítulo: "Trabalhamos com fabricantes líderes para entregar soluções de ponta."
- Grid: `repeat(auto-fill, minmax(240px, 1fr))` — naturalmente 4 cols desktop / 3 cols laptop / 2 cols tablet / 1 col mobile. Layout com 7 cards distribui como 4+3 sem espaços vazios.
- Gap 24px.
- **7 cards de vendor** (Azure consolidado em Microsoft):

| # | Vendor | Categoria | O que HCF entrega |
|---|---|---|---|
| 1 | Microsoft | Produtividade & Cloud | M365, Azure, Dynamics 365, Copilot, licenciamento enterprise |
| 2 | AWS | Cloud | Workloads críticos, Well-Architected Review, FinOps |
| 3 | VMware | Virtualização | vSphere, VMware Cloud Foundation, modernização de data center |
| 4 | IBM | Mainframe & Dados | Power, Storage, Db2, modernização de legado |
| 5 | Cisco | Rede & Colaboração | Switching, Meraki, Webex, SD-WAN |
| 6 | Fortinet | Segurança | NGFW, SASE, ZTNA, FortiAnalyzer |
| 7 | Kaspersky | Endpoint | EDR/XDR, anti-malware, threat intelligence |

Estrutura do card (`.vendor-card`):
- Tag de categoria (12px uppercase, cinza `#707070`, letter-spacing 0.5px)
- Nome vendor (H3, 20px, azul `#1a3a52`)
- Parágrafo "O que HCF entrega" (14px, cinza `#333`, 2 linhas máx)
- Sem logo (mantém text-only; logos podem entrar em fase futura)
- Mesmo border/padding/hover do card de segmento

### 4. Pacotes de Soluções (núcleo do pedido)

- Título H2: "Pacotes de Soluções"
- Subtítulo: "Combos prontos cross-vendor, montados pela HCF para acelerar entrega e reduzir risco de integração."
- Grid: 3 cols desktop / 2 cols tablet / 1 col mobile. Gap 24px.
- **4 pacotes**:

| # | Pacote | Problema que resolve | Componentes | Recomendado para |
|---|---|---|---|---|
| 1 | Home Office Seguro | Trabalho remoto com proteção e produtividade | Microsoft M365 + Fortinet FortiGate SSL-VPN + Kaspersky EDR + Setup HCF | Finanças, Cooperativas, Saúde |
| 2 | Migração Cloud Híbrida | Sair de DC legado preservando workloads críticos | AWS + VMware Cloud Foundation + Cisco SD-WAN + Assessment HCF | Indústria, Setor Público |
| 3 | Continuidade & DR | Disaster recovery e backup multi-site | VMware + AWS Backup + IBM Storage + Runbook HCF | Saúde, Varejo, Cooperativas |
| 4 | Modernização de Core | Sair de sistemas legados sem parar operação | IBM Power + Microsoft Azure (migração) + Microsoft Dynamics + Roadmap HCF | Indústria, Cooperativas, Setor Público |

Estrutura do card (`.package-card`):
- Tag de outcome (12px uppercase azul `#1a3a52`, ex: "SEGURANÇA", "MODERNIZAÇÃO")
- Título H3 (20px, azul)
- Frase de problema (14px, cinza `#333`)
- **Bloco "Componentes"** — visual diferenciador, mas minimalista:
  - Lista de chips inline (`.component-chip`)
  - Cada chip: nome do vendor + produto (ex: "Microsoft M365")
  - Estilo: borda 1px `#e0e0e0`, padding 4px 10px, font-size 12px, border-radius 12px, background branco, cor `#333`
  - `display: inline-block`, gap visual 6px entre chips
- Linha "Recomendado para:" + segmentos como texto (14px, cinza médio)

### 5. Feedback

- Mantém seção atual sem alteração (6 cards de testimonial).
- Movida para depois dos Pacotes.

### 6. Footer

- Mantém atual sem alteração.

---

## Paleta de Cores (reuse)

| Nome | Hex | Uso |
|------|-----|-----|
| Azul Escuro | #1a3a52 | Títulos H1/H2/H3, tags de outcome |
| Cinza Médio | #707070 | Tags de categoria, textos secundários |
| Cinza Claro | #e0e0e0 | Bordas de cards e chips |
| Cinza Escuro | #333333 | Corpo de texto, descrições |
| Branco | #ffffff | Background principal e chips |

Sem cores novas. Sem gradientes. Sem sombras coloridas — apenas hover shadow neutro já existente.

---

## Navegação e Âncoras

- Header existente preserva link "Soluções" (já está com `class="active"` na página).
- Âncoras dentro da página:
  - `#segmentos`
  - `#parceiros`
  - `#pacotes`
  - `#feedback`
- Card de segmento usa link `href="#pacotes"` com texto "Ver pacotes recomendados →". Filtro visual fica na tag "Recomendado para:" dentro de cada pacote (sem JS de filtro).
- CSS global: `html { scroll-behavior: smooth; }`
- **Sem** sub-nav sticky (decisão deliberada — mantém minimalismo).

---

## Mudanças em arquivos

### `solucoes.html`
- Substituir conteúdo entre `<header>` e `<footer>` por: Hero (revisado) + 4 novas seções (Segmentos, Parceiros, Pacotes, Feedback).
- Feedback section: copy/paste do bloco existente, movido pra depois de Pacotes.

### `styles.css`
Adicionar (no final do arquivo, sem alterar regras existentes):
- `.segment-card` — pode ser alias de `.solution-card` ou variação
- `.vendor-card` — variação de `.solution-card` com `.vendor-category` tag
- `.package-card` — variação com bloco `.package-components`
- `.component-chip` — chip de produto/vendor
- `.package-recommended` — linha de segmentos recomendados
- `.package-outcome-tag` — tag de outcome (12px uppercase azul)
- `.section-subtitle` — parágrafo abaixo do H2
- Regra global: `html { scroll-behavior: smooth; }`
- Breakpoints existentes (768px, 1199px) cobrem novos componentes.

### `script.js`
- Nenhuma mudança.

### `index.html`, `institucional.html`
- Nenhuma mudança.

---

## Responsividade

| Seção | Desktop (≥1200px) | Tablet (768-1199px) | Mobile (<768px) |
|---|---|---|---|
| Segmentos | 3 cols | 2 cols | 1 col |
| Parceiros (auto-fill) | 4 cols (4+3) | 3 cols | 2 cols → 1 col |
| Pacotes | 3 cols | 2 cols | 1 col |
| Feedback | 3 cols | 2 cols | 1 col |
| Padding horizontal container | 60px | 60px | 20px |

Chips de componentes wrappam naturalmente em telas menores (são `inline-block` com `flex-wrap` no container).

---

## Estrutura de Arquivos

```
site-hcf/
├── index.html
├── institucional.html
├── solucoes.html              # SUBSTITUÍDA
├── marketplace.html
├── styles.css                 # ATUALIZADO (adições, sem remoções)
├── script.js                  # sem mudança
└── docs/superpowers/specs/
    ├── 2026-05-15-solutions-page-design.md  (anterior)
    └── 2026-05-28-solutions-restructure-design.md  (este)
```

---

## Critérios de Aceitação

1. Página carrega em <1s sem requests JS extras.
2. 6 cards de segmento, 7 cards de vendor, 4 cards de pacote, 6 cards de feedback visíveis em desktop.
3. Cards de pacote mostram chips de componentes claramente identificando vendor + produto.
4. Em mobile (≤375px) todas seções colapsam para 1 coluna e seguem legíveis.
5. Link "Ver pacotes recomendados →" rola suave até `#pacotes`.
6. Paleta e tipografia idênticas às páginas `index.html` e `institucional.html`.
7. Nenhum logo de vendor é incluído (text-only) — pode entrar em fase futura.

---

## Fora de Escopo

- Página individual por segmento (`solucoes/financas.html` etc.) — fica pra fase 2 se necessário.
- Página individual por vendor — fica pra fase 2.
- Filtro JS dinâmico — explicitamente rejeitado (single-page longa scroll).
- Logos dos parceiros — fase 2.
- Formulário de "solicitar cotação" por pacote — fase 2.
- Internacionalização — site permanece pt-BR.

---

## Próximos Passos

1. Revisão deste spec pelo usuário.
2. Geração de plano de implementação (skill `writing-plans`).
3. Implementação em `solucoes.html` + `styles.css`.
4. Teste responsivo manual nos breakpoints listados.
