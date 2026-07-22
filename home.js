// ===================== HOME PAGE =====================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    renderFeaturedProducts();
    initHomeSearch();
});

// ===================== FEATURED PRODUCTS =====================
const homeProducts = [
    { id: 2, name: "Men's Agbada — White Gold", category: "fashion", price: 45000, oldPrice: 55000, emoji: "👔", badge: "hot", rating: 4.9, reviews: 189 },
    { id: 15, name: "Ofada Rice — Premium 10kg", category: "food", price: 12000, emoji: "🍚", badge: "hot", rating: 4.9, reviews: 789 },
    { id: 17, name: "Infinix Hot 40 Pro", category: "tech", price: 185000, oldPrice: 210000, emoji: "📱", badge: "hot", rating: 4.6, reviews: 1234 },
    { id: 25, name: "Shea Butter — Organic Unrefined", category: "beauty", price: 3500, emoji: "🧴", badge: "hot", rating: 4.8, reviews: 892 },
    { id: 38, name: "Carved Wooden Mask — Wall Art", category: "home", price: 28000, emoji: "🎭", badge: "hot", rating: 4.9, reviews: 67 },
    { id: 43, name: "Zobo Drink Mix — Hibiscus 1kg", category: "health", price: 2800, emoji: "🌺", badge: "new", rating: 4.8, reviews: 567 },
    { id: 49, name: "Indomie Instant Noodles — 40pk", category: "groceries", price: 8500, emoji: "🍜", badge: "hot", rating: 4.7, reviews: 1234 },
    { id: 57, name: "Super Eagles Jersey — 2024", category: "sports", price: 25000, emoji: "⚽", badge: "hot", rating: 4.9, reviews: 892 },
];

function renderFeaturedProducts() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    grid.innerHTML = homeProducts.map(p => {
        const fullStars = Math.floor(p.rating);
        const hasHalf = p.rating % 1 >= 0.5;
        const starsHTML = Array.from({ length: 5 }, (_, i) => {
            if (i < fullStars) return '<span>★</span>';
            if (i === fullStars && hasHalf) return '<span>★</span>';
            return '<span class="empty" style="opacity:0.3">★</span>';
        }).join('');

        const badgeHTML = p.badge
            ? `<span class="home-product-badge">${p.badge}</span>`
            : '';

        const oldPriceHTML = p.oldPrice
            ? `<span class="home-product-old-price">₦${p.oldPrice.toLocaleString()}</span>`
            : '';

        return `
            <a href="products.html" class="home-product-card">
                <div class="home-product-image">
                    ${badgeHTML}
                    <span>${p.emoji}</span>
                </div>
                <div class="home-product-body">
                    <p class="home-product-category">${p.category}</p>
                    <h3 class="home-product-name">${p.name}</h3>
                    <div>
                        <span class="home-product-price">₦${p.price.toLocaleString()}</span>
                        ${oldPriceHTML}
                    </div>
                    <div class="home-product-rating">
                        <div class="home-product-stars">${starsHTML}</div>
                        <span class="home-product-reviews">(${p.reviews})</span>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

// ===================== HOME SEARCH =====================
function initHomeSearch() {
    const input = document.getElementById('homeSearchInput');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                window.location.href = `products.html?q=${encodeURIComponent(input.value.trim())}`;
            }
        });
    }
}

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
