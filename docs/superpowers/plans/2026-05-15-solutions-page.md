# Solutions Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a new solutions page showcasing HCF's three service categories (Cloud, Security, Infrastructure) with 6 solutions and 6 customer feedback testimonials.

**Architecture:** Static HTML page with responsive CSS grid layout. Two main sections: solutions grid (3 cols, 6 cards) and feedback grid (3 cols, 6 cards). Hero section at top with page title. Reuses existing header/footer and site styling.

**Tech Stack:** HTML5, CSS Grid, responsive design (no JavaScript needed)

---

## File Structure

```
site-hcf/
├── solucoes.html          # NEW - Solutions page
├── styles.css             # MODIFY - Add solutions/feedback grid styles
├── index.html             # MODIFY - Add nav link
├── header.html / footer.html  # Check if included via template
```

---

### Task 1: Create solucoes.html with hero section

**Files:**
- Create: `solucoes.html`

- [ ] **Step 1: Create solucoes.html with HTML structure (hero + empty sections)**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nossas Soluções - HCF</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <div class="logo">HCF</div>
            <nav class="nav">
                <a href="index.html">Home</a>
                <a href="institucional.html">Institucional</a>
                <a href="solucoes.html" class="active">Soluções</a>
                <a href="marketplace.html">Marketplace</a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Nossas Soluções</h1>
            <p>Soluções tecnológicas para transformar seu negócio</p>
        </div>
    </section>

    <!-- Solutions Grid Section -->
    <section class="solutions-section">
        <div class="container">
            <h2>6 Soluções Principais</h2>
            <div class="solutions-grid">
                <!-- Solutions will go here -->
            </div>
        </div>
    </section>

    <!-- Feedback Section -->
    <section class="feedback-section">
        <div class="container">
            <h2>O Que Nossos Clientes Dizem</h2>
            <div class="feedback-grid">
                <!-- Feedback will go here -->
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2026 HCF. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

- [ ] **Step 2: Run in browser to verify structure loads**

Open `solucoes.html` in browser and confirm:
- Header visible with nav links
- Hero section with title and subtitle visible
- Two empty grid sections (solutions and feedback)
- Footer visible

Expected: Clean page structure, no styling yet

---

### Task 2: Add solutions grid HTML with all 6 cards

**Files:**
- Modify: `solucoes.html` (add solutions data to grid)

- [ ] **Step 1: Add solution data array and render HTML**

Replace the empty `<!-- Solutions will go here -->` comment with:

```html
            <div class="solutions-grid">
                <!-- Cloud Solutions -->
                <div class="solution-card">
                    <span class="solution-category">Cloud</span>
                    <h3>Cloud Migration</h3>
                    <p>Migração segura e otimizada de infraestrutura para ambientes cloud. Minimizamos downtime e garantimos conformidade regulatória.</p>
                </div>
                <div class="solution-card">
                    <span class="solution-category">Cloud</span>
                    <h3>Cloud Management</h3>
                    <p>Gerenciamento completo de ambientes multi-cloud. Monitoramento, otimização de custos e suporte 24/7.</p>
                </div>

                <!-- Security Solutions -->
                <div class="solution-card">
                    <span class="solution-category">Security</span>
                    <h3>Cybersecurity Assessment</h3>
                    <p>Avaliação completa de vulnerabilidades e riscos de segurança. Diagnóstico detalhado com plano de remediação.</p>
                </div>
                <div class="solution-card">
                    <span class="solution-category">Security</span>
                    <h3>Incident Response</h3>
                    <p>Resposta rápida a incidentes de segurança. Suporte 24/7 com especialistas para minimizar impacto.</p>
                </div>

                <!-- Infrastructure Solutions -->
                <div class="solution-card">
                    <span class="solution-category">Infrastructure</span>
                    <h3>Data Center Solutions</h3>
                    <p>Design e implementação de data centers seguros e escaláveis. Infrastructure otimizada para performance.</p>
                </div>
                <div class="solution-card">
                    <span class="solution-category">Infrastructure</span>
                    <h3>Network Infrastructure</h3>
                    <p>Arquitetura de rede robusta e resiliente. Conectividade de alta performance com redundância.</p>
                </div>
            </div>
```

- [ ] **Step 2: Verify in browser**

Open `solucoes.html` and confirm:
- 6 solution cards visible (not styled yet, just content)
- Each card shows category label, title, description
- Content is readable

Expected: Plain text layout, no grid styling applied yet

---

### Task 3: Add feedback grid HTML with all 6 testimonials

**Files:**
- Modify: `solucoes.html` (add feedback data to grid)

- [ ] **Step 1: Add feedback data HTML**

Replace the empty `<!-- Feedback will go here -->` comment with:

```html
            <div class="feedback-grid">
                <div class="feedback-card">
                    <p class="feedback-quote">"A HCF transformou nossa infraestrutura cloud. Reduzimos custos em 40% e ganhamos escalabilidade."</p>
                    <p class="feedback-name">João Silva</p>
                    <p class="feedback-role">CTO, Tech Solutions Brasil</p>
                </div>

                <div class="feedback-card">
                    <p class="feedback-quote">"Excelente serviço de incident response. Resolveram a brecha de segurança em menos de 2 horas."</p>
                    <p class="feedback-name">Maria Santos</p>
                    <p class="feedback-role">Head of Security, FinTech Corp</p>
                </div>

                <div class="feedback-card">
                    <p class="feedback-quote">"Migração tranquila e sem interrupções. O time da HCF foi muito profissional do início ao fim."</p>
                    <p class="feedback-name">Carlos Mendes</p>
                    <p class="feedback-role">Infrastructure Manager, Retail Group</p>
                </div>

                <div class="feedback-card">
                    <p class="feedback-quote">"O assessment de cybersecurity revelou vulnerabilidades críticas que não havíamos identificado."</p>
                    <p class="feedback-name">Patricia Lima</p>
                    <p class="feedback-role">Chief Information Officer, Manufacturing Co</p>
                </div>

                <div class="feedback-card">
                    <p class="feedback-quote">"Suporte impecável. Sempre disponíveis quando precisamos e com soluções inovadoras."</p>
                    <p class="feedback-name">Roberto Costa</p>
                    <p class="feedback-role">IT Director, Distribution Center</p>
                </div>

                <div class="feedback-card">
                    <p class="feedback-quote">"Network infrastructure foi implementada com precisão. Performance melhorou significativamente."</p>
                    <p class="feedback-name">Fernanda Oliveira</p>
                    <p class="feedback-role">Operations Manager, Logistics Plus</p>
                </div>
            </div>
```

- [ ] **Step 2: Verify in browser**

Open `solucoes.html` and confirm:
- 6 feedback cards visible (not styled yet)
- Each card shows quote, name, role
- Content is readable

Expected: Plain text layout, feedback section complete

---

### Task 4: Style hero section in CSS

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Add hero section CSS at end of styles.css**

```css
/* Hero Section */
.hero {
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    padding: 60px 20px;
    text-align: center;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 2.5rem;
    color: #1a3a52;
    margin: 0 0 16px 0;
    font-weight: 600;
}

.hero p {
    font-size: 18px;
    color: #707070;
    margin: 0;
}

@media (max-width: 768px) {
    .hero {
        padding: 40px 20px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 16px;
    }
}
```

- [ ] **Step 2: Refresh browser and verify hero styling**

Open `solucoes.html` and confirm:
- Hero section has white background with bottom border
- Title "Nossas Soluções" is blue and large (2.5rem)
- Subtitle is gray and smaller
- Text is centered
- Mobile view: smaller font sizes

Expected: Hero section styled, title and subtitle visible and properly formatted

---

### Task 5: Style solutions grid section in CSS

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Add solutions section and grid CSS**

```css
/* Solutions Section */
.solutions-section {
    padding: 80px 20px;
    background-color: #ffffff;
}

.solutions-section .container {
    max-width: 1200px;
    margin: 0 auto;
}

.solutions-section h2 {
    font-size: 1.8rem;
    color: #1a3a52;
    margin: 0 0 40px 0;
    font-weight: 600;
}

.solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.solution-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 24px;
    transition: all 0.3s ease;
}

.solution-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.solution-category {
    display: block;
    font-size: 12px;
    color: #707070;
    text-transform: uppercase;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
}

.solution-card h3 {
    font-size: 20px;
    color: #1a3a52;
    margin: 0 0 12px 0;
    font-weight: 600;
}

.solution-card p {
    font-size: 14px;
    color: #333333;
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Tablet: 2 columns */
@media (max-width: 1199px) {
    .solutions-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile: 1 column */
@media (max-width: 768px) {
    .solutions-section {
        padding: 60px 20px;
    }
    
    .solutions-section h2 {
        font-size: 1.5rem;
        margin-bottom: 30px;
    }
    
    .solutions-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}
```

- [ ] **Step 2: Refresh browser and verify solutions grid**

Open `solucoes.html` and confirm:
- Desktop view: 3 columns of solution cards
- Each card has white background, gray border, rounded corners
- Category label: small, uppercase, gray
- Title: bold, blue, 20px
- Description: 2 lines max (text truncation working)
- Hover effect: shadow appears and card lifts slightly
- Tablet view (resize to 768px-1199px): 2 columns
- Mobile view (resize <768px): 1 column, full width

Expected: Solutions grid fully styled with responsive behavior

---

### Task 6: Style feedback section in CSS

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Add feedback section and grid CSS**

```css
/* Feedback Section */
.feedback-section {
    padding: 80px 20px;
    background-color: #ffffff;
    margin-top: 40px;
}

.feedback-section .container {
    max-width: 1200px;
    margin: 0 auto;
}

.feedback-section h2 {
    font-size: 1.8rem;
    color: #1a3a52;
    margin: 0 0 40px 0;
    font-weight: 600;
}

.feedback-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.feedback-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 24px;
    transition: all 0.3s ease;
}

.feedback-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.feedback-quote {
    font-size: 14px;
    color: #333333;
    font-style: italic;
    line-height: 1.6;
    margin: 0 0 16px 0;
    text-align: center;
}

.feedback-name {
    font-size: 16px;
    color: #1a3a52;
    font-weight: 600;
    margin: 0 0 4px 0;
    text-align: center;
}

.feedback-role {
    font-size: 13px;
    color: #707070;
    margin: 0;
    text-align: center;
}

/* Tablet: 2 columns */
@media (max-width: 1199px) {
    .feedback-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile: 1 column */
@media (max-width: 768px) {
    .feedback-section {
        padding: 60px 20px;
        margin-top: 20px;
    }
    
    .feedback-section h2 {
        font-size: 1.5rem;
        margin-bottom: 30px;
    }
    
    .feedback-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}
```

- [ ] **Step 2: Refresh browser and verify feedback grid**

Open `solucoes.html` and confirm:
- Desktop view: 3 columns of feedback cards
- Each card has white background, gray border, rounded corners
- Quote: italic, centered, 14px
- Name: bold, blue, centered, 16px
- Role: smaller, gray, centered, 13px
- Hover effect: shadow appears and card lifts slightly
- Tablet view: 2 columns
- Mobile view: 1 column, full width

Expected: Feedback grid fully styled with responsive behavior

---

### Task 7: Update navigation to include Soluções link

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Check current header/nav structure in index.html**

Read `index.html` and identify the navigation element. It should look like:

```html
<nav class="nav">
    <a href="index.html">Home</a>
    <a href="institucional.html">Institucional</a>
    <a href="marketplace.html">Marketplace</a>
</nav>
```

- [ ] **Step 2: Add Soluções link to nav in index.html**

If nav is in `index.html`, add the link:

```html
<nav class="nav">
    <a href="index.html">Home</a>
    <a href="institucional.html">Institucional</a>
    <a href="solucoes.html">Soluções</a>
    <a href="marketplace.html">Marketplace</a>
</nav>
```

Note: If header is in a separate file or template (e.g., `header.html`), update that file instead.

- [ ] **Step 3: Verify navigation in browser**

Open `index.html` and confirm:
- "Soluções" link appears in navigation menu
- Click link navigates to `solucoes.html`
- Return to home, confirm link is active

Expected: Navigation link works and appears in all pages

---

### Task 8: Test responsiveness across all breakpoints

**Files:**
- Testing: `solucoes.html` (verify in browser at different viewport sizes)

- [ ] **Step 1: Test desktop view (1200px+)**

Resize browser to 1200px or larger (or full screen on desktop monitor).

Verify:
- Hero: centered, large title, subtitle below
- Solutions: 3 columns, cards evenly spaced
- Feedback: 3 columns, cards evenly spaced
- All text readable, spacing correct
- Hover effects work (shadow + lift)

Expected: Desktop layout clean and professional

- [ ] **Step 2: Test tablet view (768px - 1199px)**

Resize browser to 1024px (or tablet width).

Verify:
- Hero: responsive, still centered
- Solutions: 2 columns
- Feedback: 2 columns
- Spacing adjusted, text still readable
- Hover effects still work

Expected: Tablet layout adapts correctly

- [ ] **Step 3: Test mobile view (<768px)**

Resize browser to 375px (mobile width).

Verify:
- Hero: responsive title/subtitle, readable
- Solutions: 1 column, full-width cards
- Feedback: 1 column, full-width cards
- Padding/spacing adjusted for small screens
- Text size readable (not too large, not too small)
- Hover effects work (though less visible on touch)

Expected: Mobile layout clean and readable

- [ ] **Step 4: Test navigation on all views**

On each breakpoint, verify:
- "Soluções" link visible in nav
- Click navigates to page
- Header consistent across pages

Expected: Navigation functional on all devices

---

### Task 9: Commit all changes

**Files:**
- `solucoes.html` (new)
- `styles.css` (modified)
- `index.html` (modified)

- [ ] **Step 1: Stage all changes**

```bash
git add solucoes.html styles.css index.html
```

- [ ] **Step 2: Commit with descriptive message**

```bash
git commit -m "feat: add solutions page with grid layout and feedback section

- Create solucoes.html with hero, solutions grid (6 cards), and feedback grid (6 testimonials)
- Add responsive CSS grid (3 cols desktop, 2 cols tablet, 1 col mobile)
- Style solution cards with category labels, titles, descriptions
- Style feedback cards with quotes, names, roles
- Add hover effects (shadow + lift) for interactivity
- Update navigation to include Soluções link
- All responsive and mobile-friendly"
```

- [ ] **Step 3: Verify commit**

Run: `git log --oneline -1`

Expected: Commit appears with message above

---

## Self-Review

**Spec Coverage:**
- ✅ Hero section: Title + subtitle (Task 1, 4)
- ✅ Solutions grid: 6 cards (2 per category) with category label, title, description (Task 2, 5)
- ✅ Feedback section: 6 cards with quote, name, role (Task 3, 6)
- ✅ Responsive layout: 3 cols → 2 cols → 1 col (Task 5, 6)
- ✅ Styling: Colors, fonts, spacing from spec (Task 4, 5, 6)
- ✅ Navigation: Soluções link added (Task 7)
- ✅ Testing: All breakpoints verified (Task 8)

**Placeholder Scan:**
- No TBD, TODO, or incomplete sections
- All code blocks complete and copy-paste ready
- All CSS selectors match HTML class names
- All file paths exact

**Type Consistency:**
- `.solution-card`, `.solution-category`, `.solution-grid` used consistently
- `.feedback-card`, `.feedback-quote`, `.feedback-name`, `.feedback-role` used consistently
- No naming conflicts

**Ambiguities Resolved:**
- Card dimensions: Responsive (100% column width, not fixed pixel widths)
- Descriptions: 2-line truncation via `-webkit-line-clamp`
- Quote text: Centered with italic style
- Hover: Consistent shadow + lift effect across both card types

---

## Next Steps

Choose execution approach:

**1. Subagent-Driven (recommended)** - Fresh subagent per task, review between tasks
**2. Inline Execution** - Execute tasks in this session using executing-plans

Which approach?
