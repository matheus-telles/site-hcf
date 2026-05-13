# TechMarket Marketplace Mockup - Implementation Plan

> **For agentic workers:** Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully functional HTML/CSS/JavaScript marketplace mockup with product catalog, modal details, shopping cart, and WhatsApp integration for checkout.

**Architecture:** Single-page application (SPA) with vanilla JavaScript. Three main files: semantic HTML structure, mobile-first CSS with Grid layout, and vanilla JS for cart state management and DOM interactions. No external dependencies.

**Tech Stack:** HTML5, CSS3 (Grid, Flexbox), Vanilla JavaScript (ES6)

---

## File Structure

- `index.html` — Complete HTML structure (header, catalog grid, modals, cart sidebar, products array)
- `styles.css` — All styling (colors, layout, responsiveness, animations)
- `script.js` — JavaScript logic (cart state, event listeners, DOM updates, WhatsApp integration)

---

## Task 1: Create HTML Structure

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create HTML skeleton with semantic structure**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechMarket - Marketplace de Tecnologia</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <h1>TechMarket</h1>
            </div>
            <div class="search-box">
                <input type="text" placeholder="Buscar produtos..." class="search-input">
                <button class="search-btn">🔍</button>
            </div>
            <div class="cart-icon-container">
                <button class="cart-icon" id="cart-btn">
                    🛒
                    <span class="cart-count" id="cart-count">0</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <section class="catalog">
            <h2>Catálogo de Produtos</h2>
            <div class="products-grid" id="products-grid">
                <!-- Produtos inseridos via JavaScript -->
            </div>
        </section>
    </main>

    <!-- Modal de Detalhes -->
    <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content" id="modal-content">
            <button class="modal-close" id="modal-close">✕</button>
            <!-- Conteúdo do modal inserido via JavaScript -->
        </div>
    </div>

    <!-- Carrinho Sidebar -->
    <aside class="cart-sidebar" id="cart-sidebar">
        <div class="cart-header">
            <h3>Seu Carrinho</h3>
            <button class="cart-close" id="cart-close">✕</button>
        </div>
        <div class="cart-items" id="cart-items">
            <!-- Itens do carrinho inseridos via JavaScript -->
        </div>
        <div class="cart-footer" id="cart-footer">
            <div class="cart-total">
                <strong>Total:</strong>
                <span id="cart-total">R$ 0,00</span>
            </div>
            <button class="btn-whatsapp" id="btn-whatsapp">
                Finalizar no WhatsApp
            </button>
        </div>
    </aside>

    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify HTML file was created**

Run: `ls -la index.html`
Expected: File exists and shows correct size

---

## Task 2: Create CSS Styling

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Write CSS variables and reset**

```css
:root {
    --color-primary: #1a3a52;
    --color-secondary: #707070;
    --color-light: #e0e0e0;
    --color-white: #ffffff;
    --color-whatsapp: #25d366;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--color-white);
    color: #333;
    line-height: 1.6;
}

button {
    cursor: pointer;
    border: none;
    font-family: inherit;
}
```

- [ ] **Step 2: Style header**

```css
.header {
    background-color: var(--color-primary);
    padding: var(--spacing-md) 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.header-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md) var(--spacing-lg);
    gap: var(--spacing-lg);
}

.logo h1 {
    color: var(--color-white);
    font-size: 28px;
    min-width: 150px;
}

.search-box {
    flex: 1;
    display: flex;
    gap: var(--spacing-sm);
}

.search-input {
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: 4px;
    font-size: 14px;
}

.search-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    background-color: var(--color-secondary);
    color: white;
    border-radius: 4px;
    font-size: 16px;
}

.cart-icon-container {
    position: relative;
}

.cart-icon {
    background-color: transparent;
    color: white;
    font-size: 24px;
    position: relative;
    padding: var(--spacing-sm);
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #ff3b3b;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
}
```

- [ ] **Step 3: Style main content and catalog**

```css
.main-content {
    max-width: 1400px;
    margin: var(--spacing-xl) auto;
    padding: 0 var(--spacing-lg);
}

.catalog h2 {
    font-size: 28px;
    margin-bottom: var(--spacing-lg);
    color: var(--color-primary);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.product-card {
    background-color: white;
    border: 1px solid var(--color-light);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.product-image {
    width: 100%;
    height: 200px;
    background-color: var(--color-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #999;
}

.product-info {
    padding: var(--spacing-md);
    flex: 1;
    display: flex;
    flex-direction: column;
}

.product-name {
    font-size: 16px;
    font-weight: bold;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
}

.product-description {
    font-size: 14px;
    color: var(--color-secondary);
    margin-bottom: var(--spacing-md);
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.product-price {
    font-size: 20px;
    font-weight: bold;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
}

.product-buttons {
    display: flex;
    gap: var(--spacing-sm);
}

.btn-details,
.btn-add-cart {
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.2s;
}

.btn-details {
    background-color: var(--color-primary);
    color: white;
}

.btn-details:hover {
    background-color: #0f2234;
}

.btn-add-cart {
    background-color: var(--color-light);
    color: var(--color-primary);
}

.btn-add-cart:hover {
    background-color: #d0d0d0;
}
```

- [ ] **Step 4: Style modal**

```css
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 200;
    align-items: center;
    justify-content: center;
}

.modal-overlay.active {
    display: flex;
}

.modal-content {
    background-color: var(--color-white);
    border-radius: 8px;
    max-width: 900px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    padding: var(--spacing-lg);
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
}

.modal-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background-color: transparent;
    font-size: 24px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-secondary);
    z-index: 10;
}

.modal-image {
    width: 100%;
    height: 300px;
    background-color: var(--color-light);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
}

.modal-info h2 {
    font-size: 24px;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
}

.modal-description {
    font-size: 14px;
    color: var(--color-secondary);
    margin-bottom: var(--spacing-lg);
    line-height: 1.8;
}

.modal-specs {
    margin-bottom: var(--spacing-lg);
}

.modal-specs h3 {
    font-size: 14px;
    color: var(--color-primary);
    font-weight: bold;
    margin-bottom: var(--spacing-sm);
}

.modal-specs ul {
    list-style: none;
    font-size: 13px;
    color: var(--color-secondary);
}

.modal-specs li {
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--color-light);
}

.modal-specs li:last-child {
    border-bottom: none;
}

.modal-price {
    font-size: 28px;
    font-weight: bold;
    color: var(--color-primary);
    margin-bottom: var(--spacing-lg);
}

.modal-btn-add {
    width: 100%;
    padding: var(--spacing-md);
    background-color: var(--color-primary);
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
}

.modal-btn-add:hover {
    background-color: #0f2234;
}
```

- [ ] **Step 5: Style cart sidebar**

```css
.cart-sidebar {
    position: fixed;
    right: -350px;
    top: 0;
    width: 350px;
    height: 100vh;
    background-color: var(--color-white);
    box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    z-index: 150;
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.cart-sidebar.active {
    right: 0;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--color-light);
}

.cart-header h3 {
    color: var(--color-primary);
    font-size: 20px;
}

.cart-close {
    background-color: transparent;
    font-size: 24px;
    color: var(--color-secondary);
}

.cart-items {
    flex: 1;
    padding: var(--spacing-md);
    overflow-y: auto;
}

.cart-item {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-md);
    border-bottom: 1px solid var(--color-light);
}

.cart-item-name {
    font-weight: bold;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
    font-size: 14px;
}

.cart-item-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-sm);
}

.cart-item-price {
    font-size: 14px;
    color: var(--color-secondary);
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    background-color: var(--color-light);
    border-radius: 4px;
    padding: 2px;
}

.cart-item-quantity button {
    background-color: transparent;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: var(--color-primary);
}

.cart-item-quantity span {
    min-width: 30px;
    text-align: center;
    font-size: 14px;
}

.cart-item-remove {
    align-self: flex-end;
    background-color: transparent;
    color: #ff3b3b;
    font-size: 16px;
    padding: var(--spacing-sm);
}

.cart-empty {
    text-align: center;
    padding: var(--spacing-xl);
    color: var(--color-secondary);
    font-size: 14px;
}

.cart-footer {
    padding: var(--spacing-lg);
    border-top: 1px solid var(--color-light);
    background-color: #f9f9f9;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: var(--spacing-lg);
    color: var(--color-primary);
}

.btn-whatsapp {
    width: 100%;
    padding: var(--spacing-md);
    background-color: var(--color-whatsapp);
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
}

.btn-whatsapp:hover {
    background-color: #1fa857;
}
```

- [ ] **Step 6: Add responsiveness for tablet and mobile**

```css
/* Tablet (768px to 1199px) */
@media (max-width: 1199px) {
    .products-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .modal-content {
        grid-template-columns: 1fr;
        max-width: 600px;
    }

    .header-container {
        flex-wrap: wrap;
        gap: var(--spacing-md);
    }

    .search-box {
        order: 3;
        width: 100%;
        flex-basis: 100%;
    }
}

/* Mobile (<768px) */
@media (max-width: 767px) {
    .header-container {
        padding: var(--spacing-md);
        gap: var(--spacing-sm);
    }

    .logo h1 {
        font-size: 20px;
        min-width: auto;
    }

    .search-box {
        order: 3;
        width: 100%;
        flex-basis: 100%;
        margin-top: var(--spacing-sm);
    }

    .products-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }

    .main-content {
        margin: var(--spacing-lg) auto;
        padding: 0 var(--spacing-md);
    }

    .cart-sidebar {
        width: 100%;
        right: -100%;
    }

    .modal-content {
        width: 95%;
        padding: var(--spacing-md);
    }
}
```

- [ ] **Step 7: Verify CSS file was created**

Run: `ls -la styles.css && wc -l styles.css`
Expected: File exists with ~500+ lines

---

## Task 3: Create JavaScript Logic

**Files:**
- Create: `script.js`

Complete JavaScript implementation with all functions for products, cart, modal, and WhatsApp integration.

---

## Task 4: Test the Mockup in Browser

**Files:**
- No new files; testing existing ones

- [ ] **Step 1: Start a simple HTTP server**

Run: `python3 -m http.server 8000`
Expected: Output shows "Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)"

- [ ] **Step 2-8: Manual browser testing** (all functionality)

---

## Task 5: Final Commit

**Files:**
- Commit: `index.html`, `styles.css`, `script.js`

- [ ] **Step 1-4: Commit all files with proper message**
