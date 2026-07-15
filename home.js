// ===================== HOME PAGE =====================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    renderFeaturedProducts();
    initHomeSearch();
});

// ===================== FEATURED PRODUCTS =====================
const homeProducts = [
    { id: 3, name: "Minimalist Watch — Black", category: "accessories", price: 129.99, emoji: "⌚", badge: "hot", rating: 4.8, reviews: 312 },
    { id: 9, name: "Organic Arabica Coffee Beans 1kg", category: "food", price: 18.99, emoji: "☕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSzjOOaHZxXnxJQSQQXvmdIBVgd3txK_Z4o4zwjnEhw&s=10", badge: "hot", rating: 4.8, reviews: 432 },
    { id: 73, name: "Black Denim Jacket", category: "clothing", price: 99.99, oldPrice: 129.99, emoji: "👢", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXo-DdPf5e7CQj7hkq2AOlk6yyv5L8Q3iqwcFcGSpu0g&s=10", badge: "sale", rating: 4.9, reviews: 445 },
    { id: 25, name: "Wireless Bluetooth Earbuds", category: "phones", price: 39.99, oldPrice: 59.99, emoji: "🎧", badge: "hot", rating: 4.6, reviews: 892 },
    { id: 33, name: "Non-Stick Cookware Set — 8pc", category: "utensils", price: 89.99, oldPrice: 119.99, emoji: "🍳", badge: "sale", rating: 4.7, reviews: 345 },
    { id: 43, name: "Acoustic Guitar — Beginner", category: "party", price: 89.99, emoji: "🎸", badge: "hot", rating: 4.7, reviews: 234 },
    { id: 56, name: "Robot Vacuum Cleaner", category: "home", price: 199.99, emoji: "🤖", badge: "hot", rating: 4.8, reviews: 678 },
    { id: 57, name: "Yoga Mat — Non-Slip 6mm", category: "sports", price: 24.99, emoji: "🧘", badge: "hot", rating: 4.7, reviews: 567 },
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
            ? `<span class="home-product-old-price">$${p.oldPrice.toFixed(2)}</span>`
            : '';

        return `
            <a href="products.html" class="home-product-card">
                <div class="home-product-image">
                    ${badgeHTML}
                    ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<span>${p.emoji}</span>`}
                </div>
                <div class="home-product-body">
                    <p class="home-product-category">${p.category.replace('-', ' & ')}</p>
                    <h3 class="home-product-name">${p.name}</h3>
                    <div>
                        <span class="home-product-price">$${p.price.toFixed(2)}</span>
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
