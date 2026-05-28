# Funil por Segmento — Pacotes guiados por tipo de negócio

**Date**: 2026-05-28
**Scope**: Adicionar filtro de pacotes por segmento em `solucoes.html`, com ênfase em Cooperativas
**Base**: continua o spec `2026-05-28-solutions-restructure-design.md`

---

## Objetivo

O chefe quer que o cliente seja **guiado pelo seu tipo de negócio** até os pacotes certos. Hoje o card de segmento só rola para a lista completa de pacotes — não filtra. Este spec adiciona um **funil real**: o cliente se identifica pelo segmento e vê apenas os pacotes relevantes. **Cooperativas** recebe destaque (1ª posição, selecionado por padrão).

---

## Decisões (brainstorm)

1. **Mecanismo**: filtro JS por segmento (single page, sem libs).
2. **Cooperativas**: 1ª aba + ativa por padrão no load (sem card especial/badge).
3. **UI do filtro**: barra de abas no topo de `#pacotes`.
4. **Cobertura**: re-mapear o "Recomendado para" dos 4 pacotes existentes para que todo segmento tenha ≥2 (sem criar pacote novo).
5. **Layout dos segmentos**: manter os 6 cards descritivos como entrada; clicar num card rola até `#pacotes` e ativa a aba correspondente.

---

## Mapeamento re-distribuído

Só mudam as tags "Recomendado para". Nenhum pacote novo.

| Pacote | Recomendado para | `data-segments` |
|---|---|---|
| Home Office Seguro | Cooperativas, Finanças, Saúde | `cooperativas financas saude` |
| Continuidade & DR | Cooperativas, Finanças, Saúde, Varejo | `cooperativas financas saude varejo` |
| Migração Cloud Híbrida | Varejo, Indústria, Setor Público | `varejo industria setor-publico` |
| Modernização de Core | Cooperativas, Indústria, Setor Público | `cooperativas industria setor-publico` |

Contagem por aba: Cooperativas **3**, Finanças 2, Saúde 2, Varejo 2, Indústria 2, Setor Público 2.

---

## Componentes

### Barra de abas (`#pacotes`)

- 6 abas, ordem: Cooperativas (ativa default) · Finanças · Saúde · Varejo · Indústria · Setor Público
- `data-segment` em cada aba: `cooperativas`, `financas`, `saude`, `varejo`, `industria`, `setor-publico`
- Aba ativa: texto azul `#1a3a52` + sublinhado (border-bottom 2px). Inativa: cinza `#707070`.
- Logo abaixo das abas: 1 linha `.segment-context` com o contexto do setor ativo (mesmo texto dos segment cards).

### Cards de pacote

- Cada `.package-card` ganha atributo `data-segments="..."` (ver tabela).
- Filtro: card visível se seu `data-segments` contém o segmento ativo; senão `display:none`.

### Cards de segmento (seção existente)

- Mantidos. Link "Ver pacotes recomendados →" passa a:
  - `href="#pacotes"` (scroll suave já existe)
  - `data-segment="<slug>"` para o JS ativar a aba certa ao clicar.

---

## JS (`script.js`, adição)

```
1. const tabs = document.querySelectorAll('.segment-tab')
2. const cards = document.querySelectorAll('.package-card[data-segments]')
3. const contextEl = document.querySelector('.segment-context')
4. CONTEXTS = { cooperativas: '...', financas: '...', ... }  // 1 frase por setor
5. function activate(slug):
     - tabs: toggle .active onde data-segment === slug
     - cards: card.hidden = !card.dataset.segments.split(' ').includes(slug)
     - contextEl.textContent = CONTEXTS[slug]
6. tabs.forEach → click → activate(slug)
7. segment-card links → click → activate(slug) (scroll via âncora nativa)
8. on load → activate('cooperativas')
```

Sem libs. ~30 linhas. Idempotente. Se elementos não existirem (outras páginas), guarda com `if (!tabs.length) return`.

---

## CSS (`styles.css`, adição no final)

- `.segment-tabs` — flex, gap 8px, flex-wrap, border-bottom 1px `#e0e0e0`, margin-bottom 24px
- `.segment-tab` — botão sem fundo, font 14px, cor `#707070`, padding 8px 4px, cursor pointer, border-bottom 2px transparent
- `.segment-tab.active` — cor `#1a3a52`, border-bottom 2px `#1a3a52`
- `.segment-tab:hover` — cor `#1a3a52`
- `.segment-context` — font 14px, cor `#333`, margin-bottom 20px
- `.package-card[hidden]` — garante `display:none` (atributo `hidden` já faz, mas reforça)

Paleta atual. Sem cor nova. Breakpoints existentes cobrem (abas com flex-wrap).

---

## Mudanças em arquivos

- `solucoes.html` — add barra de abas + `.segment-context` no topo de `#pacotes`; add `data-segments` nos 4 package-cards; ajustar texto "Recomendado para"; add `data-segment` nos links dos segment cards.
- `styles.css` — classes acima.
- `script.js` — bloco de filtro.
- `index.html`, `institucional.html` — sem mudança.

---

## Critérios de Aceitação

1. Ao abrir `solucoes.html`, aba Cooperativas ativa, mostrando 3 pacotes (Home Office, Continuidade&DR, Modernização).
2. Clicar em outra aba troca os pacotes visíveis e a linha de contexto.
3. Todo segmento mostra ≥2 pacotes.
4. Clicar "Ver pacotes recomendados →" num segment card rola até `#pacotes` e ativa a aba daquele setor.
5. Sem libs JS. Sem cor nova. Mobile: abas wrappam, 1 coluna de pacotes.
6. Sem JS quebra graciosamente (cards continuam visíveis — fallback: mostrar todos se JS off).

---

## Fora de escopo

- Pacotes novos, páginas por segmento, logos de vendor — fases futuras.
