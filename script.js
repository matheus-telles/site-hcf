// Produtos de exemplo
const products = [
    {
        id: 1,
        name: 'Servidor Dell PowerEdge R750',
        category: 'Hardware',
        description: 'Servidor de alto desempenho para data center',
        fullDescription: 'Servidor Dell PowerEdge R750 com processadores Intel Xeon escaláveis, ideal para ambientes corporativos de alta demanda. Oferece excelente relação de processamento e eficiência energética.',
        price: 15999.99,
        specs: [
            '2x Intel Xeon Gold 6326',
            '32GB RAM DDR4',
            '2x SSD NVMe 1TB',
            'Redundância de fonte de poder',
            'Garantia de 3 anos'
        ],
        emoji: '🖥️',
        image: 'images/products/dell-r750-server.webp'
    },
    {
        id: 2,
        name: 'Notebook Lenovo ThinkPad E15',
        category: 'Notebooks',
        description: 'Notebook empresarial de alta performance',
        fullDescription: 'Notebook Lenovo ThinkPad E15 com processador Intel i7, perfeito para profissionais que precisam de mobilidade e desempenho. Bateria de longa duração e design robusto.',
        price: 6499.99,
        specs: [
            'Intel Core i7-12700H',
            '16GB RAM DDR5',
            'SSD NVMe 512GB',
            'Tela Full HD IPS',
            'Bateria até 12 horas'
        ],
        emoji: '💻'
    },
    {
        id: 3,
        name: 'Windows 10 Pro License',
        category: 'Software',
        description: 'Licença permanente do Windows 10 Pro',
        fullDescription: 'Licença digital permanente do Windows 10 Pro. Inclui suporte técnico e atualizações gratuitas. Entrega imediata via email.',
        price: 899.99,
        specs: [
            'Versão 22H2',
            'Licença permanente',
            'Suporte 24/7',
            'Atualizações gratuitas',
            'Ativação online'
        ],
        emoji: '🪟',
        image: 'images/products/win10 license.jpg'
    },
    {
        id: 4,
        name: 'Microsoft Office 365 (12 meses)',
        category: 'Software',
        description: 'Assinatura anual do Office 365 com 5 instalações',
        fullDescription: 'Microsoft Office 365 com acesso a Word, Excel, PowerPoint, Outlook e mais. Inclui 1TB de OneDrive. Válido por 12 meses com renovação automática.',
        price: 349.99,
        specs: [
            'Word, Excel, PowerPoint',
            'Outlook e Access',
            '1TB OneDrive',
            'Até 5 dispositivos',
            'Suporte técnico incluído'
        ],
        emoji: '📊'
    },
    {
        id: 5,
        name: 'Solução Backup Corporativa',
        category: 'Acessórios',
        description: 'Sistema completo de backup e recuperação',
        fullDescription: 'Solução profissional de backup com replicação automática, recuperação de desastres e compliance com LGPD. Implementação e suporte técnico inclusos.',
        price: 9999.99,
        specs: [
            'Backup automático 24/7',
            'Recuperação RTO < 1 hora',
            'Criptografia AES-256',
            'Compliance LGPD',
            'Suporte técnico 24/7'
        ],
        emoji: '💾'
    },
    {
        id: 6,
        name: 'Processador Intel Xeon Platinum 8490H',
        category: 'Hardware',
        description: 'Processador de ultra alta performance para servidores',
        fullDescription: 'Intel Xeon Platinum 8490H com 60 núcleos e arquitetura Intel 7. Ideal para servidores de computação intensiva e análise de dados em larga escala.',
        price: 12499.99,
        specs: [
            '60 cores / 120 threads',
            'Frequência até 4.2 GHz',
            'TDP 350W',
            'Cache L3 105MB',
            'Suporte a AVX-512'
        ],
        emoji: '⚙️',
        image: 'images/products/xeon.avif'
    },
    {
        id: 7,
        name: 'SSD Kingston 1TB',
        category: 'Acessórios',
        description: 'Unidade SSD de alta velocidade com protocolo NVMe',
        fullDescription: 'SSD Kingston A3000 com interface NVMe, oferecendo velocidades de leitura até 3500 MB/s. Perfeito para upgrades de desempenho em notebooks e desktops.',
        price: 599.99,
        specs: [
            'Interface NVMe M.2',
            'Velocidade até 3500 MB/s',
            'Capacidade 1TB',
            'Tecnologia TLC 3D',
            'Garantia de 5 anos'
        ],
        emoji: '💿'
    },
    {
        id: 8,
        name: 'Roteador Cisco Catalyst 9300',
        category: 'Network',
        description: 'Roteador enterprise com tecnologia WiFi 6',
        fullDescription: 'Roteador Cisco Catalyst 9300 com suporte a WiFi 6E, ideal para ambientes corporativos. Oferece segurança avançada, escalabilidade e gerenciamento centralizado.',
        price: 4299.99,
        specs: [
            'WiFi 6E (802.11ax)',
            'Banda tripla simultânea',
            'PoE+ integrado',
            'Gerenciamento cloud',
            'Segurança AES-256'
        ],
        emoji: '📡',
        image: 'images/products/cisco catalyst.jpg'
    },
    {
        id: 101,
        name: 'Home Office Seguro',
        category: 'Pacotes',
        description: 'Trabalho remoto com proteção corporativa, MFA, VPN e EDR — todo o ferramental para operação híbrida com auditoria completa.',
        emoji: '🛡️',
        isPackage: true,
        outcomeTag: 'Segurança',
        detailUrl: 'pacote-home-office-seguro.html',
        components: ['Microsoft M365', 'Fortinet SSL-VPN', 'Kaspersky EDR', 'Setup HCF']
    },
    {
        id: 102,
        name: 'Migração Cloud Híbrida',
        category: 'Pacotes',
        description: 'Assessment Well-Architected, AWS Landing Zone, VMware on-prem e Cisco SD-WAN orquestrando workloads críticos sem janela longa.',
        emoji: '☁️',
        isPackage: true,
        outcomeTag: 'Cloud',
        detailUrl: 'pacote-migracao-cloud-hibrida.html',
        components: ['AWS', 'VMware Cloud Foundation', 'Cisco SD-WAN', 'Assessment HCF']
    },
    {
        id: 103,
        name: 'Continuidade & DR',
        category: 'Pacotes',
        description: 'Disaster recovery multi-site com RPO < 15min, backup imutável anti-ransomware e simulação real de failover assistida pela HCF.',
        emoji: '♻️',
        isPackage: true,
        outcomeTag: 'Resiliência',
        detailUrl: 'pacote-continuidade-dr.html',
        components: ['VMware', 'AWS Backup', 'IBM Storage', 'Runbook HCF']
    },
    {
        id: 104,
        name: 'Modernização de Core',
        category: 'Pacotes',
        description: 'Saída controlada de sistemas legados em ondas, com Azure, Dynamics 365 e plano de rollback testado por escopo.',
        emoji: '⚙️',
        isPackage: true,
        outcomeTag: 'Modernização',
        detailUrl: 'pacote-modernizacao-core.html',
        components: ['IBM Power', 'Microsoft Azure', 'Microsoft Dynamics', 'Roadmap HCF']
    }
];

// Configuração de checkout por email
const CHECKOUT_CONFIG = {
    email: 'vendas@hcftec.br',
    companyName: 'HCF'
};

// Estado do carrinho
let cart = [];

// Estado da interface
let isCartOpen = false;
let isModalOpen = false;
let currentProduct = null;
let currentCategory = 'Todos';

// Get unique categories
function getCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    return ['Todos', ...categories.sort()];
}

// Render category tabs
function renderCategoryTabs() {
    const tabsContainer = document.getElementById('category-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    const categories = getCategories();

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-tab ${category === currentCategory ? 'active' : ''}`;
        button.textContent = category;
        button.addEventListener('click', () => {
            currentCategory = category;
            renderCategoryTabs();
            renderCatalog();
        });
        tabsContainer.appendChild(button);
    });
}

// Get filtered products
function getFilteredProducts() {
    if (currentCategory === 'Todos') {
        return products;
    }
    return products.filter(p => p.category === currentCategory);
}

// Renderizar catálogo de produtos
function renderCatalog() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    const filteredProducts = getFilteredProducts();
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = product.isPackage ? 'product-card package-product-card' : 'product-card';

        if (product.isPackage) {
            const chips = product.components.map(c => `<span class="component-chip">${c}</span>`).join('');
            productCard.innerHTML = `
                <div class="product-image package-product-image">
                    <div class="product-emoji">${product.emoji}</div>
                </div>
                <div class="product-info">
                    <span class="package-outcome-tag">${product.outcomeTag}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="package-components">${chips}</div>
                    <div class="product-buttons">
                        <a href="${product.detailUrl}" class="btn-package-link">Ver Pacote</a>
                    </div>
                </div>
            `;
        } else {
            const imageContent = product.image
                ? `<img src="${product.image}" alt="${product.name}" class="product-img">`
                : `<div class="product-emoji">${product.emoji}</div>`;
            productCard.innerHTML = `
                <div class="product-image">${imageContent}</div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    <div class="product-buttons">
                        <button class="btn-details" data-id="${product.id}">Ver Detalhes</button>
                        <button class="btn-add-cart" data-id="${product.id}">Adicionar</button>
                    </div>
                </div>
            `;
            productCard.querySelector('.btn-details').addEventListener('click', () => openModal(product.id));
            productCard.querySelector('.btn-add-cart').addEventListener('click', (e) => {
                addToCart(product.id);
                flashAddToCart(e.currentTarget);
            });
        }

        productsGrid.appendChild(productCard);
    });
}

// Abrir modal com detalhes do produto
function openModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    const modalImageContent = currentProduct.image
        ? `<img src="${currentProduct.image}" alt="${currentProduct.name}" class="modal-product-img">`
        : `<div class="modal-emoji">${currentProduct.emoji}</div>`;
    modalContent.innerHTML = `
        <button class="modal-close" id="modal-close">✕</button>
        <div class="modal-image">${modalImageContent}</div>
        <div class="modal-info">
            <h2>${currentProduct.name}</h2>
            <p class="modal-description">${currentProduct.fullDescription}</p>
            <div class="modal-specs">
                <h3>Especificações</h3>
                <ul>
                    ${currentProduct.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-price">R$ ${currentProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
            <button class="modal-btn-add" data-id="${currentProduct.id}">Adicionar ao Carrinho</button>
        </div>
    `;

    modalOverlay.classList.add('active');
    isModalOpen = true;
}

// Fechar modal
function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('active');
    isModalOpen = false;
    currentProduct = null;
}

// Renderizar carrinho
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Seu carrinho está vazio</div>';
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-details">
                <span class="cart-item-price">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-quantity">
                    <button class="btn-qty-minus" data-id="${item.id}">−</button>
                    <span>${item.quantity}</span>
                    <button class="btn-qty-plus" data-id="${item.id}">+</button>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">🗑️</button>
            </div>
        `;

        // Event listeners para quantidade e remoção
        cartItem.querySelector('.btn-qty-minus').addEventListener('click', () => updateQuantity(item.id, -1));
        cartItem.querySelector('.btn-qty-plus').addEventListener('click', () => updateQuantity(item.id, 1));
        cartItem.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id));

        cartItems.appendChild(cartItem);
    });

    updateCartTotal();
}

// Atualizar total do carrinho
function updateCartTotal() {
    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product.price * item.quantity);
    }, 0);

    document.getElementById('cart-total').textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

// Atualizar contador do carrinho no header
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Adicionar ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    updateCartCount();
    renderCart();

    if (product) {
        showCartToast(`${product.name} adicionado ao carrinho`, 'success');
    }
    pulseCart();
}

// Toast de feedback
let toastTimer = null;
function showCartToast(message, type = 'success') {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cart-toast';
        toast.className = 'cart-toast';
        document.body.appendChild(toast);
    }
    const icon = type === 'error' ? '⚠️' : '✓';
    toast.innerHTML = `<span class="cart-toast-icon">${icon}</span><span class="cart-toast-msg">${message}</span><button class="cart-toast-action" id="cart-toast-action">Ver carrinho</button>`;
    toast.className = `cart-toast show ${type}`;

    const actionBtn = toast.querySelector('#cart-toast-action');
    actionBtn.addEventListener('click', () => {
        hideCartToast();
        if (!isCartOpen) toggleCart();
    });

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(hideCartToast, 3200);
}

function hideCartToast() {
    const toast = document.getElementById('cart-toast');
    if (toast) toast.classList.remove('show');
}

// Pulse no ícone do carrinho
function pulseCart() {
    const cartBtn = document.getElementById('cart-btn');
    if (!cartBtn) return;
    cartBtn.classList.remove('cart-pulse');
    void cartBtn.offsetWidth; // reflow
    cartBtn.classList.add('cart-pulse');
}

// Flash visual no botão "Adicionar"
function flashAddToCart(btn) {
    const original = btn.textContent;
    btn.classList.add('btn-added');
    btn.textContent = '✓ Adicionado';
    setTimeout(() => {
        btn.classList.remove('btn-added');
        btn.textContent = original;
    }, 1200);
}

// Remover do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

// Atualizar quantidade
function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCart();
        }
    }
}

// Gerar corpo de email com itens do carrinho
function generateEmailBody() {
    let body = `Olá, time HCF!\n\nGostaria de uma cotação para os seguintes itens:\n\n`;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.quantity;
        body += `• ${product.name}\n`;
        body += `    Quantidade: ${item.quantity}\n`;
        body += `    Preço unitário: R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
        body += `    Subtotal: R$ ${itemTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n`;
    });

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product.price * item.quantity);
    }, 0);

    body += `Total estimado: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n`;
    body += `Aguardo confirmação de disponibilidade, prazo de entrega e condições comerciais.\n\nObrigado!`;

    return encodeURIComponent(body);
}

// Abrir cliente de email com carrinho pré-preenchido
function openEmailCheckout() {
    if (cart.length === 0) {
        showCartToast('Seu carrinho está vazio!', 'error');
        return;
    }

    const subject = encodeURIComponent('Cotação de produtos — Carrinho HCF');
    const body = generateEmailBody();
    const mailtoURL = `mailto:${CHECKOUT_CONFIG.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;
}

// Abrir/fechar carrinho
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    isCartOpen = !isCartOpen;

    if (isCartOpen) {
        cartSidebar.classList.add('active');
        renderCart();
    } else {
        cartSidebar.classList.remove('active');
    }
}

// Fechar carrinho
function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.remove('active');
    isCartOpen = false;
}

// Inicializar event listeners quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar abas de categoria
    renderCategoryTabs();

    // Renderizar catálogo inicial
    renderCatalog();

    // Event listeners do header
    document.getElementById('cart-btn').addEventListener('click', toggleCart);
    document.getElementById('cart-close').addEventListener('click', closeCart);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // Event listener do botão de checkout por email
    document.getElementById('btn-checkout').addEventListener('click', openEmailCheckout);

    // Event delegation para modal (previne memory leak)
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.id === 'modal-close') {
            closeModal();
        }
    });

    // Event delegation para botão "Adicionar ao Carrinho" do modal
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-btn-add') && isModalOpen && currentProduct) {
            addToCart(currentProduct.id);
            closeModal();
        }
    });

    // Fechar carrinho ao clicar fora
    document.addEventListener('click', (e) => {
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartBtn = document.getElementById('cart-btn');

        if (isCartOpen &&
            !cartSidebar.contains(e.target) &&
            !cartBtn.contains(e.target) &&
            !e.target.closest('.modal-overlay')) {
            closeCart();
        }
    });

    // Fechar modal ao pressionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isModalOpen) {
            closeModal();
        }
    });

    // Impedir fechar carrinho ao clicar dentro
    document.getElementById('cart-sidebar').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Navegação entre abas
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.target.dataset.tab;

            // Remove active de todos os tabs
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // Adiciona active ao tab clicado
            e.target.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');

            // Fecha o carrinho se estiver aberto
            if (isCartOpen) {
                closeCart();
            }
        });
    });
});
