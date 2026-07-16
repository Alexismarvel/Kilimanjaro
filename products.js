// ===================== PRODUCT DATA =====================
const products = [
    // ========== FASHION ==========
    { id: 1, name: "Ankara Print Wrap Dress", category: "fashion", price: 12500, emoji: "👗", image: "https://images.pexels.com/photos/33939066/pexels-photo-33939066.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.8, reviews: 342 },
    { id: 2, name: "Men's Agbada — White Gold", category: "fashion", price: 45000, oldPrice: 55000, emoji: "👔", image: "https://images.pexels.com/photos/34821105/pexels-photo-34821105.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "sale", rating: 4.9, reviews: 189 },
    { id: 3, name: "Ankara Crop Top", category: "fashion", price: 8500, emoji: "👚", image: "https://images.pexels.com/photos/18509401/pexels-photo-18509401.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.5, reviews: 98 },
    { id: 4, name: "Senator Wear — Navy Blue", category: "fashion", price: 28000, emoji: "👨‍💼", image: "https://images.pexels.com/photos/28898725/pexels-photo-28898725.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.7, reviews: 234 },
    { id: 5, name: "Gele Head Wrap — Gold", category: "fashion", price: 4500, emoji: "👑", image: "https://images.pexels.com/photos/20291783/pexels-photo-20291783.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.6, reviews: 156 },
    { id: 6, name: "Adire Indigo Shirt", category: "fashion", price: 15000, emoji: "👕", image: "https://images.pexels.com/photos/17832815/pexels-photo-17832815.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.8, reviews: 87 },
    { id: 7, name: "Aso-Oke Woven Fabric", category: "fashion", price: 35000, oldPrice: 42000, emoji: "🧵", image: "https://images.pexels.com/photos/30243795/pexels-photo-30243795.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "sale", rating: 4.9, reviews: 123 },
    { id: 8, name: "Igbo Isiagu Top", category: "fashion", price: 18000, emoji: "🦁", image: "https://images.pexels.com/photos/10226305/pexels-photo-10226305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.7, reviews: 167 },

    // ========== FOOD & GROCERIES ==========
    { id: 9, name: "Premium Garri Ijebu — 5kg", category: "food", price: 3500, emoji: "🥘", image: "https://images.pexels.com/photos/6480227/pexels-photo-6480227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.8, reviews: 567 },
    { id: 10, name: "Fresh Plantain Chips — Spicy", category: "food", price: 1200, emoji: "🍌", image: "https://images.pexels.com/photos/17952745/pexels-photo-17952745.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.6, reviews: 892 },
    { id: 11, name: "Ground Cocoa Powder — 1kg", category: "food", price: 2800, emoji: "🍫", image: "https://images.pexels.com/photos/691152/pexels-photo-691152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 345 },
    { id: 12, name: "Nigerian Honey — Raw Unfiltered", category: "food", price: 4500, emoji: "🍯", image: "https://images.pexels.com/photos/14525298/pexels-photo-14525298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.7, reviews: 234 },
    { id: 13, name: "Smoked Dry Fish — Assorted", category: "food", price: 6500, oldPrice: 8000, emoji: "🐟", image: "https://images.pexels.com/photos/36707708/pexels-photo-36707708.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "sale", rating: 4.8, reviews: 456 },
    { id: 14, name: "Palm Oil — Fresh Red 5L", category: "food", price: 5500, emoji: "🫒", image: "https://images.pexels.com/photos/36707705/pexels-photo-36707705.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.6, reviews: 678 },
    { id: 15, name: "Ofada Rice — Premium 10kg", category: "food", price: 12000, emoji: "🍚", image: "https://images.pexels.com/photos/36707710/pexels-photo-36707710.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.9, reviews: 789 },
    { id: 16, name: "Suya Spice Mix — 500g", category: "food", price: 1800, emoji: "🌶️", image: "https://images.pexels.com/photos/36707704/pexels-photo-36707704.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.5, reviews: 345 },

    // ========== TECH & ELECTRONICS ==========
    { id: 17, name: "Infinix Hot 40 Pro", category: "tech", price: 185000, oldPrice: 210000, emoji: "📱", image: "https://images.pexels.com/photos/6804547/pexels-photo-6804547.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.6, reviews: 1234 },
    { id: 18, name: "Tecno Spark 20 Pro+", category: "tech", price: 145000, emoji: "📱", image: "https://images.pexels.com/photos/6913227/pexels-photo-6913227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.5, reviews: 892 },
    { id: 19, name: "20000mAh Power Bank", category: "tech", price: 12000, emoji: "🔋", image: "https://images.pexels.com/photos/6296911/pexels-photo-6296911.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.7, reviews: 567 },
    { id: 20, name: "Bluetooth Speaker — Portable", category: "tech", price: 18500, emoji: "🔊", image: "https://images.pexels.com/photos/4917455/pexels-photo-4917455.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.6, reviews: 345 },
    { id: 21, name: "Wireless Earbuds — Pro", category: "tech", price: 15000, oldPrice: 22000, emoji: "🎧", image: "https://images.pexels.com/photos/19154544/pexels-photo-19154544.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "sale", rating: 4.8, reviews: 678 },
    { id: 22, name: "HP Laptop — Intel Core i5", category: "tech", price: 485000, emoji: "💻", image: "https://images.pexels.com/photos/1028445/pexels-photo-1028445.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.9, reviews: 234 },
    { id: 23, name: "Smart Watch — Fitness Track", category: "tech", price: 25000, emoji: "⌚", image: "https://images.pexels.com/photos/4379294/pexels-photo-4379294.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.5, reviews: 189 },
    { id: 24, name: "CCTV Camera — WiFi 360°", category: "tech", price: 32000, emoji: "📷", image: "https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.7, reviews: 123 },

    // ========== BEAUTY ==========
    { id: 25, name: "Shea Butter — Organic Unrefined", category: "beauty", price: 3500, emoji: "🧴", image: "https://images.pexels.com/photos/35305097/pexels-photo-35305097.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.8, reviews: 892 },
    { id: 26, name: "Black Soap — Ghanaian Pure", category: "beauty", price: 2200, emoji: "🧼", image: "https://images.pexels.com/photos/35305096/pexels-photo-35305096.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.7, reviews: 567 },
    { id: 27, name: "Coconut Hair Oil — 250ml", category: "beauty", price: 4500, emoji: "🥥", image: "https://images.pexels.com/photos/4046314/pexels-photo-4046314.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.6, reviews: 345 },
    { id: 28, name: "Face Glow Serum — Vitamin C", category: "beauty", price: 8500, emoji: "✨", image: "https://images.pexels.com/photos/5264269/pexels-photo-5264269.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.9, reviews: 234 },
    { id: 29, name: "Argan Oil Shampoo — 400ml", category: "beauty", price: 5500, emoji: "🧴", image: "https://images.pexels.com/photos/5264272/pexels-photo-5264272.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 189 },
    { id: 30, name: "Lip Gloss Set — 6 Colors", category: "beauty", price: 6500, oldPrice: 9000, emoji: "💄", image: "https://images.pexels.com/photos/26348192/pexels-photo-26348192.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "sale", rating: 4.7, reviews: 456 },
    { id: 31, name: "Body Lotion — Cocoa Butter", category: "beauty", price: 3200, emoji: "🧴", image: "https://images.pexels.com/photos/6724434/pexels-photo-6724434.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.6, reviews: 678 },
    { id: 32, name: "Perfume Oil — Oud & Amber", category: "beauty", price: 12000, emoji: "🌹", image: "https://images.pexels.com/photos/30770557/pexels-photo-30770557.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.8, reviews: 345 },

    // ========== HOME & LIVING ==========
    { id: 33, name: "Adire Throw Pillow — Set of 2", category: "home", price: 15000, emoji: "🛋️", image: "https://images.pexels.com/photos/6843239/pexels-photo-6843239.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.6, reviews: 234 },
    { id: 34, name: "Brass Oil Lamp — Handcrafted", category: "home", price: 22000, emoji: "🪔", image: "https://images.pexels.com/photos/32810686/pexels-photo-32810686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.8, reviews: 156 },
    { id: 35, name: "Raffia Floor Mat — Large", category: "home", price: 18000, emoji: "🟫", image: "https://images.pexels.com/photos/7640925/pexels-photo-7640925.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 89 },
    { id: 36, name: "Clay Water Pot — Traditional", category: "home", price: 8500, emoji: "🏺", image: "https://images.pexels.com/photos/1854864/pexels-photo-1854864.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.7, reviews: 123 },
    { id: 37, name: "Woven Basket Set — 3pc", category: "home", price: 12000, oldPrice: 16000, emoji: "🧺", image: "https://images.pexels.com/photos/4325439/pexels-photo-4325439.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "sale", rating: 4.6, reviews: 189 },
    { id: 38, name: "Carved Wooden Mask — Wall Art", category: "home", price: 28000, emoji: "🎭", image: "https://images.pexels.com/photos/36338866/pexels-photo-36338866.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.9, reviews: 67 },
    { id: 39, name: "Copper Lantern — Solar Powered", category: "home", price: 15000, emoji: "🏮", image: "https://images.pexels.com/photos/880864/pexels-photo-880864.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 145 },
    { id: 40, name: "Kente Table Runner", category: "home", price: 9500, emoji: "🪡", image: "https://images.pexels.com/photos/3769398/pexels-photo-3769398.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.7, reviews: 98 },

    // ========== HEALTH ==========
    { id: 41, name: "Bitter Leaf Capsules — 60pc", category: "health", price: 5500, emoji: "💊", image: "https://images.pexels.com/photos/1502311/pexels-photo-1502311.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.6, reviews: 345 },
    { id: 42, name: "Moringa Powder — Organic 500g", category: "health", price: 4500, emoji: "🌿", image: "https://images.pexels.com/photos/16047702/pexels-photo-16047702.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.7, reviews: 234 },
    { id: 43, name: "Zobo Drink Mix — Hibiscus 1kg", category: "health", price: 2800, emoji: "🌺", image: "https://images.pexels.com/photos/16236507/pexels-photo-16236507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.8, reviews: 567 },
    { id: 44, name: "Tiger Nut Milk Powder", category: "health", price: 3500, emoji: "🥛", image: "https://images.pexels.com/photos/28593042/pexels-photo-28593042.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.5, reviews: 189 },
    { id: 45, name: "African Velvet Tamarind — 500g", category: "health", price: 2200, emoji: "🫒", image: "https://images.pexels.com/photos/5521702/pexels-photo-5521702.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.6, reviews: 123 },
    { id: 46, name: "Ginger & Garlic Tea — 30 bags", category: "health", price: 1800, emoji: "🍵", image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.4, reviews: 89 },
    { id: 47, name: "Baobab Fruit Powder — 300g", category: "health", price: 6500, emoji: "🌳", image: "https://images.pexels.com/photos/1502311/pexels-photo-1502311.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.8, reviews: 156 },
    { id: 48, name: "Aloe Vera Gel — Pure 200ml", category: "health", price: 3200, emoji: "🌵", image: "https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 234 },

    // ========== GROCERIES ==========
    { id: 49, name: "Indomie Instant Noodles — 40pk", category: "groceries", price: 8500, emoji: "🍜", image: "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.7, reviews: 1234 },
    { id: 50, name: "Maggi Seasoning — 100 cubes", category: "groceries", price: 3200, emoji: "🧂", image: "https://images.pexels.com/photos/36707705/pexels-photo-36707705.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.6, reviews: 892 },
    { id: 51, name: "Nigeria Brown Beans — 5kg", category: "groceries", price: 6500, emoji: "🫘", image: "https://images.pexels.com/photos/5665108/pexels-photo-5665108.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.5, reviews: 345 },
    { id: 52, name: "Yam Flour (Elubo) — 2kg", category: "groceries", price: 4200, emoji: "🌾", image: "https://images.pexels.com/photos/7640758/pexels-photo-7640758.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.7, reviews: 234 },
    { id: 53, name: "Crayfish — Ground 1kg", category: "groceries", price: 5500, emoji: "🦐", image: "https://images.pexels.com/photos/36707698/pexels-photo-36707698.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.8, reviews: 567 },
    { id: 54, name: "Cassava Flour — 3kg", category: "groceries", price: 3800, emoji: "🥔", image: "https://images.pexels.com/photos/13006965/pexels-photo-13006965.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 189 },
    { id: 55, name: "Dried Pepper Mix — 500g", category: "groceries", price: 2500, emoji: "🌶️", image: "https://images.pexels.com/photos/36707701/pexels-photo-36707701.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.6, reviews: 345 },
    { id: 56, name: "Coconut — Fresh Brown 6pc", category: "groceries", price: 2000, emoji: "🥥", image: "https://images.pexels.com/photos/1030019/pexels-photo-1030019.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.4, reviews: 678 },

    // ========== SPORTS ==========
    { id: 57, name: "Super Eagles Jersey — 2024", category: "sports", price: 25000, emoji: "⚽", image: "https://images.pexels.com/photos/30243795/pexels-photo-30243795.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.9, reviews: 892 },
    { id: 58, name: "Adjustable Dumbbell Set", category: "sports", price: 85000, oldPrice: 110000, emoji: "🏋️", image: "https://images.pexels.com/photos/6546834/pexels-photo-6546834.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "sale", rating: 4.8, reviews: 345 },
    { id: 59, name: "Football — Size 5 Official", category: "sports", price: 8500, emoji: "⚽", image: "https://images.pexels.com/photos/3747509/pexels-photo-3747509.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.6, reviews: 567 },
    { id: 60, name: "Yoga Mat — Non-Slip 6mm", category: "sports", price: 12000, emoji: "🧘", image: "https://images.pexels.com/photos/6246682/pexels-photo-6246682.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 234 },
    { id: 61, name: "Boxing Gloves — 12oz", category: "sports", price: 18000, emoji: "🥊", image: "https://images.pexels.com/photos/6339688/pexels-photo-6339688.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "hot", rating: 4.7, reviews: 123 },
    { id: 62, name: "Resistance Bands — 5pc Set", category: "sports", price: 7500, emoji: "💪", image: "https://images.pexels.com/photos/6932262/pexels-photo-6932262.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.5, reviews: 189 },
    { id: 63, name: "Skipping Rope — Speed", category: "sports", price: 3500, emoji: "🤸", image: "https://images.pexels.com/photos/4920436/pexels-photo-4920436.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", badge: "new", rating: 4.4, reviews: 345 },
    { id: 64, name: "Insulated Water Bottle — 1L", category: "sports", price: 6500, emoji: "🫗", image: "https://images.pexels.com/photos/3270696/pexels-photo-3270696.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.6, reviews: 234 },
];

// ===================== STATE =====================
let cart = [];
let currentCategory = 'all';
let currentSort = 'featured';
let searchQuery = '';
let wishlist = new Set();

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    handleUrlParams();
    renderProducts();
    initFilters();
    initSort();
    initSearch();
    initCart();
    initNavbar();
});

// ===================== URL PARAMS =====================
function handleUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const query = params.get('q');

    if (category) {
        currentCategory = category;
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.category === category);
        });
    }

    if (query) {
        searchQuery = query;
        const navInput = document.getElementById('navSearchInput');
        if (navInput) navInput.value = query;
    }
}

// ===================== RENDER PRODUCTS =====================
function renderProducts() {
    const grid = document.getElementById('productGrid');
    const emptyState = document.getElementById('emptyState');
    const countEl = document.getElementById('productCount');

    let filtered = products.filter(p => {
        const matchCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = searchQuery === '' ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Sort
    filtered = sortProducts(filtered, currentSort);

    countEl.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    grid.innerHTML = filtered.map(p => {
        const fullStars = Math.floor(p.rating);
        const hasHalf = p.rating % 1 >= 0.5;
        const starsHTML = Array.from({ length: 5 }, (_, i) => {
            if (i < fullStars) return '<span>★</span>';
            if (i === fullStars && hasHalf) return '<span>★</span>';
            return '<span class="empty">★</span>';
        }).join('');

        const badgeHTML = p.badge
            ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>`
            : '';

        const oldPriceHTML = p.oldPrice
            ? `<span class="product-price-old">₦${p.oldPrice.toLocaleString()}</span>`
            : '';

        const inCart = cart.find(c => c.id === p.id);
        const btnClass = inCart ? 'add-to-cart-btn added' : 'add-to-cart-btn';
        const btnIcon = inCart
            ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`
            : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;

        const isWished = wishlist.has(p.id);
        const wishClass = isWished ? 'wishlist-btn active' : 'wishlist-btn';

        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-card-image">
                    ${badgeHTML}
                    <button class="${wishClass}" data-id="${p.id}" onclick="toggleWishlist(event, ${p.id})">
                        <svg viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <span style="position:relative;z-index:1;">${p.image ? `<img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block';"><span style="display:none;font-size:2.5rem;">${p.emoji}</span>` : `<span style="font-size:2.5rem;">${p.emoji}</span>`}</span>
                </div>
                <div class="product-card-body">
                    <p class="product-category">${p.category}</p>
                    <h3 class="product-name">${p.name}</h3>
                    <div class="product-rating">
                        <div class="stars">${starsHTML}</div>
                        <span class="rating-count">(${p.reviews})</span>
                    </div>
                    <div class="product-price-row">
                        <div>
                            <span class="product-price">₦${p.price.toLocaleString()}</span>
                            ${oldPriceHTML}
                        </div>
                        <button class="${btnClass}" onclick="addToCart(${p.id})" title="Add to cart">
                            ${btnIcon}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ===================== SORT =====================
function sortProducts(items, sort) {
    const sorted = [...items];
    switch (sort) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name-az':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
}

function initSort() {
    const select = document.getElementById('sortSelect');
    if (select) {
        select.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }
}

// ===================== FILTERS =====================
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });

    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchQuery = '';
            currentCategory = 'all';
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
            const navInput = document.getElementById('navSearchInput');
            if (navInput) navInput.value = '';
            renderProducts();
        });
    }
}

// ===================== SEARCH =====================
function initSearch() {
    const navInput = document.getElementById('navSearchInput');
    if (navInput) {
        let debounce;
        navInput.addEventListener('input', (e) => {
            clearTimeout(debounce);
            debounce = setTimeout(() => {
                searchQuery = e.target.value;
                renderProducts();
            }, 250);
        });
    }
}

// ===================== WISHLIST =====================
function toggleWishlist(e, id) {
    e.stopPropagation();
    if (wishlist.has(id)) {
        wishlist.delete(id);
    } else {
        wishlist.add(id);
    }
    renderProducts();
}

// ===================== CART =====================
function initCart() {
    const toggle = document.getElementById('cartToggle');
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    const close = document.getElementById('cartClose');
    const continueBtn = document.getElementById('continueShopping');
    const checkoutBtn = document.querySelector('.btn-checkout');
    const txnDoneBtn = document.getElementById('txnDoneBtn');
    const txnOverlay = document.getElementById('txnOverlay');

    if (toggle) toggle.addEventListener('click', () => openCart());
    if (close) close.addEventListener('click', () => closeCart());
    if (overlay) overlay.addEventListener('click', () => closeCart());
    if (continueBtn) continueBtn.addEventListener('click', () => closeCart());
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => startTransaction());
    if (txnDoneBtn) txnDoneBtn.addEventListener('click', () => closeTransaction());
    if (txnOverlay) txnOverlay.addEventListener('click', () => closeTransaction());
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    renderProducts();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    renderProducts();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    updateCartUI();
}

function updateCartUI() {
    const countNav = document.getElementById('cartCountNav');
    const itemsContainer = document.getElementById('cartItems');
    const emptyMsg = document.getElementById('cartEmpty');
    const footer = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
    const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

    if (countNav) countNav.textContent = totalItems;

    if (cart.length === 0) {
        emptyMsg.style.display = 'flex';
        footer.style.display = 'none';
        itemsContainer.querySelectorAll('.cart-item').forEach(el => el.remove());
        return;
    }

    emptyMsg.style.display = 'none';
    footer.style.display = 'block';
    subtotalEl.textContent = `₦${totalPrice.toLocaleString()}`;
    totalEl.textContent = `₦${totalPrice.toLocaleString()}`;

    const existingIDs = new Set();
    cart.forEach(item => {
        existingIDs.add(item.id);
        let el = itemsContainer.querySelector(`.cart-item[data-id="${item.id}"]`);
        if (el) {
            el.querySelector('.cart-item-qty').textContent = item.qty;
            el.querySelector('.cart-item-price').textContent = `₦${(item.price * item.qty).toLocaleString()}`;
        } else {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.dataset.id = item.id;
            div.innerHTML = `
                <div class="cart-item-image">${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-md);" onerror="this.parentElement.textContent='${item.emoji}'">` : item.emoji}</div>
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">₦${(item.price * item.qty).toLocaleString()}</p>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                        <span class="cart-item-qty">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            `;
            itemsContainer.appendChild(div);
        }
    });

    itemsContainer.querySelectorAll('.cart-item').forEach(el => {
        if (!existingIDs.has(parseInt(el.dataset.id))) {
            el.remove();
        }
    });
}

// ===================== TOAST =====================
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

// ===================== TRANSACTION SIMULATION =====================
function startTransaction() {
    if (cart.length === 0) return;

    closeCart();

    const overlay = document.getElementById('txnOverlay');
    const modal = document.getElementById('txnModal');
    const step1 = document.getElementById('txnStep1');
    const step2 = document.getElementById('txnStep2');
    const step3 = document.getElementById('txnStep3');

    step1.style.display = '';
    step2.style.display = 'none';
    step3.style.display = 'none';
    document.getElementById('txnProgress1').style.width = '0%';
    document.getElementById('txnProgress2').style.width = '0%';

    overlay.classList.add('open');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        document.getElementById('txnProgress1').style.width = '100%';
    }, 100);

    setTimeout(() => {
        step1.style.display = 'none';
        step2.style.display = '';
        setTimeout(() => {
            document.getElementById('txnProgress2').style.width = '100%';
        }, 100);
    }, 1800);

    setTimeout(() => {
        step2.style.display = 'none';
        step3.style.display = '';
        buildReceipt();
    }, 3400);
}

function buildReceipt() {
    const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    const orderId = 'SHZ-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-NG', { year: 'numeric', month: 'short', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });

    document.getElementById('txnOrderId').textContent = '#' + orderId;
    document.getElementById('txnReceiptTotal').textContent = '₦' + total.toLocaleString();
    document.getElementById('txnDate').textContent = dateStr + ' at ' + timeStr;

    const itemsEl = document.getElementById('txnReceiptItems');
    itemsEl.innerHTML = cart.map(item => `
        <div class="txn-receipt-item">
            <span class="txn-receipt-item-name">
                <span class="txn-receipt-item-emoji">${item.image ? `<img src="${item.image}" alt="" style="width:20px;height:20px;border-radius:4px;object-fit:cover;vertical-align:middle;margin-right:4px;" onerror="this.outerHTML='${item.emoji}'">` : item.emoji}</span>
                ${item.name}${item.qty > 1 ? ' x' + item.qty : ''}
            </span>
            <span>₦${(item.price * item.qty).toLocaleString()}</span>
        </div>
    `).join('');
}

function closeTransaction() {
    const overlay = document.getElementById('txnOverlay');
    const modal = document.getElementById('txnModal');

    overlay.classList.remove('open');
    modal.classList.remove('open');
    document.body.style.overflow = '';

    cart = [];
    updateCartUI();
    renderProducts();
    showToast('Order placed successfully!');
}

// ===================== NAVBAR (shared) =====================
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
