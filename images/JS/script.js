// E-Commerce Dashboard Interactivity
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initOrderFeed();
    initTimeAgo();
    initMetricAnimations();
    initLastSync();
});

// ===================== NAVBAR =====================
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');

                navLinks.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('open');
        }
    });
}

// ===================== LIVE ORDER FEED =====================
const orderProducts = [
    { name: 'Ankara Print Wrap Dress', price: 12500 },
    { name: "Men's Agbada", price: 45000 },
    { name: 'Premium Garri Ijebu', price: 3500 },
    { name: 'Infinix Hot 40 Pro', price: 185000 },
    { name: 'Shea Butter — Organic', price: 3500 },
    { name: 'Ofada Rice — 10kg', price: 12000 },
    { name: 'Super Eagles Jersey', price: 25000 },
    { name: 'Black Soap — Ghanaian', price: 2200 },
    { name: 'Indomie Noodles — 40pk', price: 8500 },
    { name: 'Wireless Earbuds — Pro', price: 15000 },
    { name: 'Adire Indigo Shirt', price: 15000 },
    { name: 'Zobo Drink Mix — 1kg', price: 2800 },
    { name: 'Brass Oil Lamp', price: 22000 },
    { name: 'Yam Flour (Elubo)', price: 4200 },
    { name: 'Smoked Dry Fish', price: 6500 },
    { name: 'Palm Oil — Fresh Red 5L', price: 5500 },
    { name: 'Moringa Powder — Organic', price: 4500 },
    { name: 'Senator Wear — Navy', price: 28000 },
];

const orderStatuses = [
    { tag: 'NEW', class: 'log-new', prefix: '[NEW]' },
    { tag: 'PROCESS', class: 'log-processing', prefix: '[PROCESS]' },
    { tag: 'SHIPPED', class: 'log-shipped', prefix: '[SHIPPED]' },
    { tag: 'ALERT', class: 'log-alert', prefix: '[ALERT]' },
];

const alerts = [
    'Low stock: Ankara Print Wrap Dress (5 remaining)',
    'High demand detected: Infinix Hot 40 Pro',
    'Restock needed: Premium Garri Ijebu',
    'Price drop alert: Wireless Earbuds',
];

const lagosAreas = [
    'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano',
    'Enugu', 'Benin City', 'Kaduna', 'Abeokuta', 'Ilorin',
    'Warri', 'Calabar', 'Jos', 'Aba', 'Onitsha',
];

let orderIdCounter = 8848;

function generateOrder() {
    const status = orderStatuses[Math.floor(Math.random() * 3)];
    const product = orderProducts[Math.floor(Math.random() * orderProducts.length)];
    const qty = Math.floor(Math.random() * 3) + 1;
    const total = (product.price * qty).toLocaleString();
    const area = lagosAreas[Math.floor(Math.random() * lagosAreas.length)];

    orderIdCounter++;

    if (status.tag === 'ALERT') {
        const alert = alerts[Math.floor(Math.random() * alerts.length)];
        return `<p><span class="log-tag ${status.class}">${status.prefix}</span> ${alert}</p>`;
    }

    if (status.tag === 'SHIPPED') {
        const tracking = 'GRB-' + Math.floor(100000 + Math.random() * 900000);
        return `<p><span class="log-tag ${status.class}">${status.prefix}</span> Dispatched to ${area} — Tracking: <span class="text-highlight">${tracking}</span></p>`;
    }

    if (status.tag === 'PROCESS') {
        const orderId = orderIdCounter - Math.floor(Math.random() * 5) - 1;
        return `<p><span class="log-tag ${status.class}">${status.prefix}</span> Payment confirmed for Order #${orderId}</p>`;
    }

    return `<p><span class="log-tag ${status.class}">${status.prefix}</span> Order #${orderIdCounter} — ${product.name}${qty > 1 ? ' x' + qty : ''} — <span class="text-highlight">₦${total}</span></p>`;
}

function initOrderFeed() {
    const feed = document.getElementById('orderFeed');

    setInterval(() => {
        const newEntry = document.createElement('p');
        newEntry.innerHTML = generateOrder();
        newEntry.classList.add('log-entry-new');

        const listening = feed.querySelector('.log-listening');
        feed.insertBefore(newEntry, listening);

        const entries = feed.querySelectorAll('p:not(.log-listening)');
        if (entries.length > 7) {
            entries[0].remove();
        }

        document.getElementById('timeAgo').textContent = 'just now';
    }, 3000);
}

// ===================== TIME AGO UPDATER =====================
function initTimeAgo() {
    let seconds = 0;

    setInterval(() => {
        seconds++;
        if (seconds < 5) {
            document.getElementById('timeAgo').textContent = 'just now';
        } else if (seconds < 60) {
            document.getElementById('timeAgo').textContent = `${seconds}s ago`;
        } else {
            seconds = 0;
        }
    }, 1000);
}

// ===================== LAST SYNC UPDATER =====================
function initLastSync() {
    let seconds = 0;

    setInterval(() => {
        seconds++;
        const el = document.getElementById('lastSync');
        if (!el) return;

        if (seconds < 5) {
            el.textContent = 'just now';
        } else if (seconds < 60) {
            el.textContent = `${seconds}s ago`;
        } else {
            seconds = 0;
        }
    }, 1000);
}

// ===================== METRIC COUNTER ANIMATION =====================
function initMetricAnimations() {
    const metricCards = document.querySelectorAll('.metric-card');

    metricCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });
}
