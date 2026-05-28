# Solutions Page Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure `solucoes.html` from a flat 6-card grid into a Segmento-first single page with Vendor catalog and multi-vendor "Pacotes de Soluções" combos, following the spec at `docs/superpowers/specs/2026-05-28-solutions-restructure-design.md`.

**Architecture:** Pure HTML/CSS, no new JS. Replaces page content between `<header>` and `<footer>`. Adds new CSS component classes (`.segment-card`, `.vendor-card`, `.package-card`, `.component-chip`) at end of `styles.css`, reusing existing CSS variables (`--color-primary`, `--color-border`, etc.). Adds `scroll-behavior: smooth` to `html`.

**Tech Stack:** HTML5, CSS3 (vars + grid + auto-fill), no JS, no build step. Browser test: any modern browser (Chrome/Firefox/Edge).

---

## File Structure

- **Modify:** `solucoes.html` — replace content between `<header>` and `<footer>` (lines 22-117 in current file). Hero stays as section but text updates. Sections: Segmentos, Parceiros, Pacotes, Feedback (moved).
- **Modify:** `styles.css` — append new CSS at end (after line 1463). One global rule (`html { scroll-behavior: smooth; }`) inserted near top.
- **Unchanged:** `index.html`, `institucional.html`, `script.js`, `marketplace.html`.

Existing CSS to reuse (no duplication):
- `.hero`, `.hero-content` (lines 1250-1287)
- `.solutions-section`, `.solutions-section .container`, `.solutions-section h2` (lines 1290-1305)
- `.solutions-grid` + responsive breakpoints (lines 1307-1374)
- `.solution-card`, `.solution-card h3`, `.solution-card p`, `.solution-category` (lines 1313-1351)
- `.feedback-section`, `.feedback-grid`, `.feedback-card`, `.feedback-quote`, `.feedback-name`, `.feedback-role` (lines 1378-1462)
- CSS vars in `:root` (lines 7-46)

---

## Task 1: Add global smooth-scroll + update Hero text

**Files:**
- Modify: `styles.css` (add rule near top)
- Modify: `solucoes.html:24-29` (Hero content)

- [ ] **Step 1.1: Add `scroll-behavior: smooth` to html in styles.css**

Open `styles.css`. Find the `body { ... }` rule starting around line 54. **Immediately before** that rule, insert:

```css
html {
    scroll-behavior: smooth;
}
```

- [ ] **Step 1.2: Update hero text in solucoes.html**

Open `solucoes.html`. Find the `<section class="hero">` block (lines 23-29). Replace **only** the `<h1>` and `<p>` lines so the section becomes:

```html
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Nossas Soluções</h1>
            <p>Por segmento, por parceiro, ou em pacotes prontos cross-vendor.</p>
        </div>
    </section>
```

- [ ] **Step 1.3: Verify in browser**

Open `solucoes.html` in a browser (double-click the file or `file:///home/matheus/site-hcf/solucoes.html`). Verify:
- Hero subtitle reads: "Por segmento, por parceiro, ou em pacotes prontos cross-vendor."
- Page still renders existing 6 solution cards + feedback below (unchanged yet).

- [ ] **Step 1.4: Commit**

```bash
git add styles.css solucoes.html
git commit -m "feat(solucoes): update hero copy + add smooth scroll" -m "Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Replace old Solutions Grid with Segmentos section

**Files:**
- Modify: `solucoes.html:31-73` (replace the `<section class="solutions-section">` block)

- [ ] **Step 2.1: Replace solutions-section with Segmentos section in solucoes.html**

Open `solucoes.html`. Replace the entire `<section class="solutions-section">` block (currently lines 31-73, the section with `<h2>6 Soluções Principais</h2>` and the 6 old cards) with:

```html
    <!-- Segmentos Section -->
    <section class="solutions-section" id="segmentos">
        <div class="container">
            <h2>Para o seu segmento</h2>
            <p class="section-subtitle">Selecione o setor que mais se aproxima do seu negócio.</p>
            <div class="solutions-grid">
                <div class="solution-card segment-card">
                    <h3>Finanças</h3>
                    <p>Compliance regulatório, core banking, prevenção a fraude, alta disponibilidade.</p>
                    <a href="#pacotes" class="segment-link">Ver pacotes recomendados →</a>
                </div>
                <div class="solution-card segment-card">
                    <h3>Saúde</h3>
                    <p>LGPD, prontuário eletrônico, telemedicina, continuidade operacional.</p>
                    <a href="#pacotes" class="segment-link">Ver pacotes recomendados →</a>
                </div>
                <div class="solution-card segment-card">
                    <h3>Varejo</h3>
                    <p>E-commerce, PDV, omnichannel, picos sazonais.</p>
                    <a href="#pacotes" class="segment-link">Ver pacotes recomendados →</a>
                </div>
                <div class="solution-card segment-card">
                    <h3>Indústria</h3>
                    <p>OT/IT, IoT industrial, produção 24/7, supply chain.</p>
                    <a href="#pacotes" class="segment-link">Ver pacotes recomendados →</a>
                </div>
                <div class="solution-card segment-card">
                    <h3>Setor Público</h3>
                    <p>Licitação, transparência, cidadão digital, governança ITIL.</p>
                    <a href="#pacotes" class="segment-link">Ver pacotes recomendados →</a>
                </div>
                <div class="solution-card segment-card">
                    <h3>Cooperativas</h3>
                    <p>Multi-unidade, governança, sistemas core, gestão de associados.</p>
                    <a href="#pacotes" class="segment-link">Ver pacotes recomendados →</a>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2.2: Add CSS for `.section-subtitle` and `.segment-link` in styles.css**

Open `styles.css`. Append at the **end** of the file:

```css
/* ============================================
   SECTION 8: SEGMENTOS / VENDORS / PACOTES
   ============================================ */

.section-subtitle {
    font-size: 1rem;
    color: var(--color-text-light);
    margin: -24px 0 var(--spacing-xl) 0;
    font-family: var(--font-body);
}

.segment-link {
    display: inline-block;
    margin-top: 12px;
    font-size: 14px;
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.segment-link:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
}

.segment-card p {
    -webkit-line-clamp: unset;
    display: block;
    overflow: visible;
}
```

(The `.segment-card p` override unclamps the 2-line truncation set by `.solution-card p` so the segment context displays in full.)

- [ ] **Step 2.3: Verify in browser**

Reload `solucoes.html`. Verify:
- Section title: "Para o seu segmento" with subtitle below.
- 6 cards visible: Finanças, Saúde, Varejo, Indústria, Setor Público, Cooperativas (3×2 desktop, 2×3 tablet, 1×6 mobile — resize browser to check).
- Each card shows full context paragraph + "Ver pacotes recomendados →" link.
- Hover: card lifts with shadow.
- Click "Ver pacotes recomendados →": navigates to `#pacotes` anchor (404 nothing-to-scroll-to yet — that's fine, anchor added in Task 4).

- [ ] **Step 2.4: Commit**

```bash
git add solucoes.html styles.css
git commit -m "feat(solucoes): replace old grid with Segmentos section" -m "Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Add Catálogo de Parceiros section

**Files:**
- Modify: `solucoes.html` (insert new section after Segmentos section, before Feedback)
- Modify: `styles.css` (append vendor-card styles)

- [ ] **Step 3.1: Insert Parceiros section in solucoes.html**

Open `solucoes.html`. Find the closing `</section>` of the Segmentos section (added in Task 2). **Immediately after** it, insert this new section (before the `<!-- Feedback Section -->` comment):

```html
    <!-- Parceiros Section -->
    <section class="solutions-section" id="parceiros">
        <div class="container">
            <h2>Nossos Parceiros Tecnológicos</h2>
            <p class="section-subtitle">Trabalhamos com fabricantes líderes para entregar soluções de ponta.</p>
            <div class="vendors-grid">
                <div class="solution-card vendor-card">
                    <span class="solution-category">Produtividade & Cloud</span>
                    <h3>Microsoft</h3>
                    <p>M365, Azure, Dynamics 365, Copilot, licenciamento enterprise.</p>
                </div>
                <div class="solution-card vendor-card">
                    <span class="solution-category">Cloud</span>
                    <h3>AWS</h3>
                    <p>Workloads críticos, Well-Architected Review, FinOps.</p>
                </div>
                <div class="solution-card vendor-card">
                    <span class="solution-category">Virtualização</span>
                    <h3>VMware</h3>
                    <p>vSphere, VMware Cloud Foundation, modernização de data center.</p>
                </div>
                <div class="solution-card vendor-card">
                    <span class="solution-category">Mainframe & Dados</span>
                    <h3>IBM</h3>
                    <p>Power, Storage, Db2, modernização de legado.</p>
                </div>
                <div class="solution-card vendor-card">
                    <span class="solution-category">Rede & Colaboração</span>
                    <h3>Cisco</h3>
                    <p>Switching, Meraki, Webex, SD-WAN.</p>
                </div>
                <div class="solution-card vendor-card">
                    <span class="solution-category">Segurança</span>
                    <h3>Fortinet</h3>
                    <p>NGFW, SASE, ZTNA, FortiAnalyzer.</p>
                </div>
                <div class="solution-card vendor-card">
                    <span class="solution-category">Endpoint</span>
                    <h3>Kaspersky</h3>
                    <p>EDR/XDR, anti-malware, threat intelligence.</p>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 3.2: Append vendor-card grid CSS in styles.css**

Open `styles.css`. Append at the end (after the segment styles added in Task 2):

```css
.vendors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: var(--spacing-md);
}

.vendor-card p {
    -webkit-line-clamp: unset;
    display: block;
    overflow: visible;
}
```

(No new card style needed — `.vendor-card` inherits all visuals from `.solution-card`. The `auto-fill` grid handles all breakpoints naturally with the 240px minimum.)

- [ ] **Step 3.3: Verify in browser**

Reload `solucoes.html`. Verify:
- Section "Nossos Parceiros Tecnológicos" appears between Segmentos and Feedback.
- 7 vendor cards visible with category tag above name (e.g. "PRODUTIVIDADE & CLOUD" above "Microsoft").
- Desktop ≥1200px: 4 cards on row 1, 3 cards on row 2 (left-aligned).
- Resize to ~900px: 3 cols. Resize to ~600px: 2 cols. Resize to ~320px: 1 col.
- Hover: card lifts.

- [ ] **Step 3.4: Commit**

```bash
git add solucoes.html styles.css
git commit -m "feat(solucoes): add Parceiros catalog section" -m "Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Add Pacotes de Soluções section with component chips

**Files:**
- Modify: `solucoes.html` (insert new section after Parceiros, before Feedback)
- Modify: `styles.css` (append package-card + chip styles)

- [ ] **Step 4.1: Insert Pacotes section in solucoes.html**

Open `solucoes.html`. Find the closing `</section>` of the Parceiros section (added in Task 3). **Immediately after** it, insert this new section (still before `<!-- Feedback Section -->`):

```html
    <!-- Pacotes Section -->
    <section class="solutions-section" id="pacotes">
        <div class="container">
            <h2>Pacotes de Soluções</h2>
            <p class="section-subtitle">Combos prontos cross-vendor, montados pela HCF para acelerar entrega e reduzir risco de integração.</p>
            <div class="solutions-grid packages-grid">
                <div class="solution-card package-card">
                    <span class="package-outcome-tag">Segurança</span>
                    <h3>Home Office Seguro</h3>
                    <p>Trabalho remoto com proteção e produtividade.</p>
                    <div class="package-components">
                        <span class="component-chip">Microsoft M365</span>
                        <span class="component-chip">Fortinet FortiGate SSL-VPN</span>
                        <span class="component-chip">Kaspersky EDR</span>
                        <span class="component-chip">Setup HCF</span>
                    </div>
                    <p class="package-recommended">Recomendado para: Finanças, Cooperativas, Saúde</p>
                </div>
                <div class="solution-card package-card">
                    <span class="package-outcome-tag">Cloud</span>
                    <h3>Migração Cloud Híbrida</h3>
                    <p>Sair de DC legado preservando workloads críticos.</p>
                    <div class="package-components">
                        <span class="component-chip">AWS</span>
                        <span class="component-chip">VMware Cloud Foundation</span>
                        <span class="component-chip">Cisco SD-WAN</span>
                        <span class="component-chip">Assessment HCF</span>
                    </div>
                    <p class="package-recommended">Recomendado para: Indústria, Setor Público</p>
                </div>
                <div class="solution-card package-card">
                    <span class="package-outcome-tag">Resiliência</span>
                    <h3>Continuidade & DR</h3>
                    <p>Disaster recovery e backup multi-site.</p>
                    <div class="package-components">
                        <span class="component-chip">VMware</span>
                        <span class="component-chip">AWS Backup</span>
                        <span class="component-chip">IBM Storage</span>
                        <span class="component-chip">Runbook HCF</span>
                    </div>
                    <p class="package-recommended">Recomendado para: Saúde, Varejo, Cooperativas</p>
                </div>
                <div class="solution-card package-card">
                    <span class="package-outcome-tag">Modernização</span>
                    <h3>Modernização de Core</h3>
                    <p>Sair de sistemas legados sem parar operação.</p>
                    <div class="package-components">
                        <span class="component-chip">IBM Power</span>
                        <span class="component-chip">Microsoft Azure (migração)</span>
                        <span class="component-chip">Microsoft Dynamics</span>
                        <span class="component-chip">Roadmap HCF</span>
                    </div>
                    <p class="package-recommended">Recomendado para: Indústria, Cooperativas, Setor Público</p>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 4.2: Append package-card + chip CSS in styles.css**

Open `styles.css`. Append at the end (after the vendor styles added in Task 3):

```css
.packages-grid {
    /* inherits .solutions-grid: repeat(3, 1fr) desktop, 2 cols tablet, 1 col mobile */
}

.package-card p {
    -webkit-line-clamp: unset;
    display: block;
    overflow: visible;
}

.package-outcome-tag {
    display: inline-block;
    font-size: 12px;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
    margin-bottom: 12px;
}

.package-components {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: var(--spacing-sm) 0;
}

.component-chip {
    display: inline-block;
    padding: 4px 10px;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    font-size: 12px;
    color: var(--color-text-dark);
    background-color: var(--color-white);
    font-family: var(--font-body);
}

.package-recommended {
    font-size: 13px;
    color: var(--color-text-light);
    font-style: italic;
    margin-top: var(--spacing-sm);
}
```

- [ ] **Step 4.3: Verify in browser**

Reload `solucoes.html`. Verify:
- Section "Pacotes de Soluções" appears after Parceiros.
- 4 package cards visible, each with: uppercase outcome tag, title, problem statement, chips listing components from multiple vendors, and recommended segments line.
- Chips: rounded pill shape with border, white background, dark text, no fill color. Wrap to next line on narrow cards.
- Desktop ≥1200px: 3 cols (4th card wraps to row 2). Tablet: 2 cols. Mobile: 1 col.
- Click a "Ver pacotes recomendados →" link on a segment card at the top of page: scrolls smoothly down to this Pacotes section.

- [ ] **Step 4.4: Commit**

```bash
git add solucoes.html styles.css
git commit -m "feat(solucoes): add Pacotes section with multi-vendor chips" -m "Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Verify Feedback section and full-page review

**Files:**
- Modify: `solucoes.html` (verify Feedback section is now after Pacotes; no code change expected since insertions were placed before it)

- [ ] **Step 5.1: Confirm Feedback section position in solucoes.html**

Open `solucoes.html` and visually scan top to bottom. The order between `<header>` and `<footer>` should be:

1. Hero (`<section class="hero">`)
2. Segmentos (`<section class="solutions-section" id="segmentos">`)
3. Parceiros (`<section class="solutions-section" id="parceiros">`)
4. Pacotes (`<section class="solutions-section" id="pacotes">`)
5. Feedback (`<section class="feedback-section">`)

If Feedback is anywhere other than position 5, cut it and paste it directly after the closing `</section>` of Pacotes. (Tasks 2-4 should have placed insertions before the Feedback section, so likely no action needed.)

- [ ] **Step 5.2: Full-page browser verification across breakpoints**

Open `solucoes.html` in browser. Use DevTools responsive mode to check:

| Breakpoint | Segmentos | Parceiros | Pacotes | Feedback |
|---|---|---|---|---|
| 1400px (desktop) | 3 cols | 4 cols (4+3) | 3 cols (3+1) | 3 cols |
| 1000px (laptop) | 2 cols | 3-4 cols | 2 cols | 2 cols |
| 700px (tablet) | 2 cols | 2 cols | 2 cols | 2 cols |
| 400px (mobile) | 1 col | 1 col | 1 col | 1 col |

Also verify:
- Header navigation: "Soluções" link is still present and marked active.
- Smooth scroll: clicking any segment card's "Ver pacotes recomendados →" smoothly scrolls to `#pacotes`.
- Hover states on all card types: lift effect with shadow.
- Component chips: visible, bordered, do not overflow card on mobile.
- No console errors in DevTools.

- [ ] **Step 5.3: Cross-page sanity check**

Open `index.html` and `institucional.html` in browser. Verify they are unchanged visually (same hero, same content as before — these files should not have been touched).

- [ ] **Step 5.4: Final commit (only if Step 5.1 required moving feedback)**

If Feedback section was already in correct position (likely), skip this commit step. Otherwise:

```bash
git add solucoes.html
git commit -m "fix(solucoes): move Feedback section after Pacotes" -m "Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Acceptance Criteria (from spec)

- [ ] 6 segment cards, 7 vendor cards, 4 package cards, 6 feedback cards present on desktop.
- [ ] Package cards show component chips identifying vendor + product.
- [ ] All sections collapse to 1 column on mobile (≤375px).
- [ ] "Ver pacotes recomendados →" link scrolls smoothly to `#pacotes`.
- [ ] Paleta and tipografia match `index.html` and `institucional.html` (achieved via CSS var reuse).
- [ ] No vendor logos included (text-only, per spec).
- [ ] No new JS files; `script.js` unchanged.
