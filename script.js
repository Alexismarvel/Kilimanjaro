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

    // Hamburger toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');

                // Set active state
                navLinks.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('open');
        }
    });
}

// ===================== LIVE ORDER FEED =====================
const orderProducts = [
    { name: 'Wireless Earbuds', price: 79.99 },
    { name: 'Smart Watch Pro', price: 299.99 },
    { name: 'Laptop Stand', price: 49.99 },
    { name: 'Mechanical Keyboard', price: 149.99 },
    { name: 'USB-C Hub', price: 39.99 },
    { name: 'Gaming Mouse', price: 69.99 },
    { name: 'Portable Charger', price: 29.99 },
    { name: 'Webcam HD', price: 89.99 },
    { name: 'Desk Lamp', price: 34.99 },
    { name: 'Bluetooth Speaker', price: 59.99 },
    { name: 'Monitor Arm', price: 119.99 },
    { name: 'Ergonomic Chair', price: 449.99 },
    { name: 'Noise Cancelling Headphones', price: 249.99 },
    { name: 'Running Shoes', price: 129.99 },
    { name: 'Yoga Mat', price: 44.99 },
    { name: 'Water Bottle', price: 24.99 },
    { name: 'Backpack Pro', price: 89.99 },
    { name: 'Fitness Tracker', price: 99.99 },
];

const orderStatuses = [
    { tag: 'NEW', class: 'log-new', prefix: '[NEW]' },
    { tag: 'PROCESS', class: 'log-processing', prefix: '[PROCESS]' },
    { tag: 'SHIPPED', class: 'log-shipped', prefix: '[SHIPPED]' },
    { tag: 'ALERT', class: 'log-alert', prefix: '[ALERT]' },
];

const alerts = [
    'Low stock: Wireless Earbuds (5 remaining)',
    'High demand detected: Smart Watch Pro',
    'Restock needed: USB-C Hub',
    'Price drop alert: Gaming Mouse',
];

let orderIdCounter = 8848;

function generateOrder() {
    const status = orderStatuses[Math.floor(Math.random() * 3)]; // Mostly new, process, shipped
    const product = orderProducts[Math.floor(Math.random() * orderProducts.length)];
    const qty = Math.floor(Math.random() * 3) + 1;
    const total = (product.price * qty).toFixed(2);
    
    orderIdCounter++;
    
    if (status.tag === 'ALERT') {
        const alert = alerts[Math.floor(Math.random() * alerts.length)];
        return `<p><span class="log-tag ${status.class}">${status.prefix}</span> ${alert}</p>`;
    }
    
    if (status.tag === 'SHIPPED') {
        const tracking = 'USP-' + Math.floor(100000 + Math.random() * 900000);
        return `<p><span class="log-tag ${status.class}">${status.prefix}</span> Tracking updated: <span class="text-highlight">${tracking}</span></p>`;
    }
    
    if (status.tag === 'PROCESS') {
        const orderId = orderIdCounter - Math.floor(Math.random() * 5) - 1;
        return `<p><span class="log-tag ${status.class}">${status.prefix}</span> Payment verified for Order #${orderId}</p>`;
    }
    
    return `<p><span class="log-tag ${status.class}">${status.prefix}</span> Order #${orderIdCounter} — ${product.name}${qty > 1 ? ' x' + qty : ''} — <span class="text-highlight">$${total}</span></p>`;
}

function initOrderFeed() {
    const feed = document.getElementById('orderFeed');
    
    setInterval(() => {
        const newEntry = document.createElement('p');
        newEntry.innerHTML = generateOrder();
        newEntry.classList.add('log-entry-new');
        
        // Insert before the listening indicator
        const listening = feed.querySelector('.log-listening');
        feed.insertBefore(newEntry, listening);
        
        // Keep max 8 visible entries (excluding listening line)
        const entries = feed.querySelectorAll('p:not(.log-listening)');
        if (entries.length > 7) {
            entries[0].remove();
        }
        
        // Update timestamp
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
