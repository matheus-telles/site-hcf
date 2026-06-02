# Home Redesign — Landing-first integrator + marketplace

**Date**: 2026-05-28
**Scope**: Redesign `index.html` home into a landing-first page inspired by IT-integrator competitors (PC Place, ForceOne, IT-ONE, Triple S), kept **minimalist**, while preserving the existing **marketplace** (cart + product catalog).
**References studied**: pcplace.com.br, forceoneit.com, itone.com.br, triples.com.br
**Approach**: Landing-first home (Início tab) funneling into existing catalog, pacotes, and solucoes.html.

---

## Objetivo

Hoje o `index.html` abre direto no catálogo de produtos. Os concorrentes lideram com uma narrativa institucional (hero → pilares → cases → CTA) e afunilam para contato. Queremos uma home que pareça um integrador de TI — **mas minimalista** — sem abandonar o marketplace (carrinho + catálogo continuam).

Princípio: **marketplace de soluções**. A home conta a história e direciona; o catálogo e os pacotes entregam o produto.

---

## Decisões (validadas no brainstorming)

- **Visual**: manter navy atual (`#1a3a52`), apenas refinar. Temas light + dark mantidos.
- **E-commerce**: carrinho + catálogo **mantidos**, lógica intacta.
- **Estrutura**: **landing-first**. Nova aba `Início` vira o default.
- **Seções de credibilidade**: apenas **Pilares de Solução**. Sem métricas/parceiros/cases (não há conteúdo real — nada de placeholder).
- **Não reescrever** `solucoes.html` (restructure já especificada em `2026-05-28-solutions-restructure-design.md`). A home **linka** para ela e para os `pacote-*.html`.

---

## Arquitetura Geral

- **Arquivo**: `index.html` (adiciona aba/seção `Início`; mantém abas `Catálogo` e `Institucional`).
- **Stack**: HTML/CSS/JS puro existente. Sistema de abas já existe (`nav-tab` + `tab-content` + `script.js`). Reaproveitar.
- **Reuse de CSS**: `.hero`, `.solution-card`, `.solutions-grid`, grids, botões, variáveis de cor/tipografia em `styles.css`.
- **Persistência**: nenhuma nova (estático). Carrinho usa o storage atual.

### Navegação (header)

```
Início  |  Catálogo  |  Institucional  |  Soluções        🔍  ☀/🌙  🛒
```

- `Início` — nova aba, default. Landing.
- `Catálogo` — grid de produtos + filtros + carrinho existentes (sem alteração funcional).
- `Institucional` — conteúdo existente (sem alteração).
- `Soluções` — link para `solucoes.html` (sem alteração).

`Início` deixa de ser auto-ativado; `Catálogo` perde o `active` default. Ajustar default tab em `script.js`/markup.

### Ordem vertical da aba Início

1. **Hero** — fundo navy, H1 institucional ("Soluções de TI ponta a ponta para sua empresa"), subtítulo curto, CTA primário *Agendar consultoria* (WhatsApp) + CTA secundário *Ver catálogo* (ativa aba Catálogo).
2. **Pilares de Solução** — grid de 4 cards = os 4 `pacote-*.html` existentes:
   - Modernização Core → `pacote-modernizacao-core.html`
   - Migração Cloud Híbrida → `pacote-migracao-cloud-hibrida.html`
   - Continuidade / DR → `pacote-continuidade-dr.html`
   - Home Office Seguro → `pacote-home-office-seguro.html`
   - Link de rodapé da seção: *Ver todas as soluções →* `solucoes.html`.
3. **Catálogo em destaque** — faixa: título + atalhos de categoria (ou poucos produtos em destaque) que ativam a aba `Catálogo`. Reusa dados/categorias já em `script.js`.
4. **CTA final** — faixa navy: *Fale com um especialista* → WhatsApp (`--color-whatsapp`).

---

## Componentes

### Hero (`.home-hero`)
- Reusa estilo `.hero`; variante full-width navy.
- H1, subtítulo, dois botões (primário WhatsApp, secundário outline que troca de aba).
- Altura confortável (~ 60vh desktop / auto mobile). Minimalista: sem imagem pesada; opcional gradiente navy sutil.

### Pilares (`.pilares-grid` reusando `.solution-card`)
- Grid 4 cols desktop / 2 tablet / 1 mobile, gap 24px.
- Card: H3 (navy), parágrafo curto (cinza), link *Saiba mais →*.
- Sem ícones (mantém minimalismo, consistente com solucoes spec).

### Catálogo em destaque (`.catalogo-destaque`)
- Título H2 + subtítulo.
- Linha de chips/atalhos de categoria → `switchTab('catalogo')` + filtro, ou grid pequeno de 3-4 produtos destaque.
- Botão *Ver catálogo completo* → aba Catálogo.

### CTA final (`.home-cta`)
- Faixa navy, texto + botão WhatsApp. Reusa estilo do CTA já presente em outras páginas, se houver.

---

## Comportamento JS

- Sistema de abas existente: adicionar `Início` como aba e torná-la default (`active`).
- Botões internos da landing que levam a outra aba chamam a mesma função de troca de aba já usada pelos `nav-tab`.
- Deep-link opcional: se URL tiver `#catalogo`, abrir aba Catálogo (nice-to-have, só se trivial).
- Nenhuma lib nova.

---

## Estilo / Minimalismo

- Paleta navy atual, sem cores novas. Acento só em CTAs.
- Bastante respiro (whitespace), tipografia atual (Outfit display / DM Sans body).
- Sem ícones decorativos, sem stock photos pesadas — diferencia dos concorrentes por ser mais limpo.
- Funciona em light e dark (validar contraste do hero navy no dark).

---

## Fora de escopo

- Métricas, logos de parceiros, cases, depoimentos (sem conteúdo real).
- Reescrita de `solucoes.html`, `pacote-*.html`, catálogo, carrinho.
- Backend / formulários (contato segue via WhatsApp).
- Conteúdo/blog hub.

---

## Testing / Verificação

- Abrir `index.html`: aba `Início` ativa por default, hero visível.
- Cada card de pilar abre o `pacote-*.html` correto.
- *Ver catálogo* / atalhos ativam a aba Catálogo (grid + carrinho intactos).
- *Ver todas as soluções* abre `solucoes.html`.
- CTA WhatsApp abre link correto.
- Toggle de tema: hero e seções legíveis em light e dark.
- Responsivo: grids colapsam (4→2→1); header navegável no mobile.
- Carrinho continua somando/persistindo como antes.
