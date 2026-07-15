// ===================== PRODUCT DATA =====================
const products = [
    // ========== ACCESSORIES ==========
    { id: 1, name: "Leather Crossbody Bag", category: "accessories", price: 59.99, oldPrice: 79.99, emoji: "👜", badge: "sale", rating: 4.5, reviews: 128 },
    { id: 2, name: "Classic Aviator Sunglasses", category: "accessories", price: 34.99, emoji: "🕶️", badge: "new", rating: 4.7, reviews: 95 },
    { id: 3, name: "Minimalist Watch — Black", category: "accessories", price: 129.99, emoji: "⌚", badge: "hot", rating: 4.8, reviews: 312 },
    { id: 4, name: "Gold Chain Necklace", category: "accessories", price: 44.99, emoji: "📿", rating: 4.3, reviews: 67 },
    { id: 5, name: "Canvas Tote Bag", category: "accessories", price: 24.99, oldPrice: 32.99, emoji: "🎒", badge: "sale", rating: 4.2, reviews: 203 },
    { id: 6, name: "Silk Scarf — Floral", category: "accessories", price: 19.99, emoji: "🧣", badge: "new", rating: 4.4, reviews: 41 },
    { id: 7, name: "Buckle Leather Belt", category: "accessories", price: 29.99, emoji: "👔", rating: 4.6, reviews: 88 },
    { id: 8, name: "Digital Smart Watch Pro", category: "accessories", price: 199.99, oldPrice: 249.99, emoji: "⌚", badge: "hot", rating: 4.9, reviews: 567 },

    // ========== FOOD & GROCERIES ==========
    { id: 9, name: "Organic Arabica Coffee Beans 1kg", category: "food", price: 18.99, emoji: "☕", badge: "hot", rating: 4.8, reviews: 432 },
    { id: 10, name: "Raw Wildflower Honey 500ml", category: "food", price: 14.99, emoji: "🍯", badge: "new", rating: 4.7, reviews: 189 },
    { id: 11, name: "Assorted Dry Fruits Mix 750g", category: "food", price: 22.99, emoji: "🥜", rating: 4.5, reviews: 256 },
    { id: 12, name: "Extra Virgin Olive Oil 1L", category: "food", price: 16.99, emoji: "🫒", badge: "hot", rating: 4.6, reviews: 314 },
    { id: 13, name: "Dark Chocolate Box — 12 Pieces", category: "food", price: 24.99, oldPrice: 29.99, emoji: "🍫", badge: "sale", rating: 4.9, reviews: 198 },
    { id: 14, name: "Himalayan Pink Salt 1kg", category: "food", price: 8.99, emoji: "🧂", rating: 4.4, reviews: 167 },
    { id: 15, name: "Green Tea Sampler Box", category: "food", price: 12.99, emoji: "🍵", badge: "new", rating: 4.3, reviews: 91 },
    { id: 16, name: "Protein Granola Bars — 12 Pack", category: "food", price: 19.99, emoji: "🍫", rating: 4.5, reviews: 143 },

    // ========== CLOTHING ==========
    { id: 17, name: "Leather crossbody bag", category: "clothing", price: 69.99, oldPrice: 89.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzRgOlBKOFPZJwdg9ie6j8aB6Y2MKoDHguHUj6ZEVOg&s", badge: "sale", rating: 4.6, reviews: 287 },
    { id: 18, name: "Classic avaitor Sunglasses", category: "clothing", price: 54.99, emoji: "👟", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-HVD_etmh8mtk4imU46iBjTFiAW88-X5TDoRORrY1A&s", badge: "hot", rating: 4.7, reviews: 456 },
    { id: 19, name: "Minimalist Watch - baz", category: "clothing", price: 49.99, emoji: "👕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPkQHMYbTu6NBiau4Ejp13tpqs5_iPPDNv5NXi7NZFw&s=10", badge: "new", rating: 4.5, reviews: 178 },
    { id: 20, name: "Gold chain necklace", category: "clothing", price: 44.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8w8lbi4u4Umyci8XjX3KORYCgF93VtR37eUWxtzrLsg&s=10", rating: 4.4, reviews: 132 },
    { id: 21, name: "Canvas tote Bag", category: "clothing", price: 39.99, emoji: "👗", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhW1AVhj7BYJpFIrVv08XKDVW__pnTkUXX_c3EyG4GA&s", badge: "new", rating: 4.8, reviews: 95 },
    { id: 22, name: "Silk Scarf- Floral", category: "clothing", price: 89.99, oldPrice: 109.99, emoji: "👟", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7546U_mkwyQjQTdIHv5XmWmKvgP_4knyhdC0Mgz3Zbw&s", badge: "sale", rating: 4.7, reviews: 342 },
    { id: 23, name: "Buckle Leather Belt", category: "clothing", price: 119.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKAYPLiLxpPFqeQerVtNFN0kjS5USXEC64YFrz7MQlw&s=10", badge: "hot", rating: 4.8, reviews: 89 },
    { id: 24, name: "Digital Smart Watch Pro", category: "clothing", price: 24.99, emoji: "👕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9kwSkb5VbEQF0pNrWhJkev4PKT1M_rFIll5lT2Pu4g&s=10", rating: 4.3, reviews: 256 },
    { id: 65, name: "Organic Arabica Coffee Beans 1kg", category: "clothing", price: 79.99, oldPrice: 99.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSzjOOaHZxXnxJQSQQXvmdIBVgd3txK_Z4o4zwjnEhw&s=10", badge: "sale", rating: 4.7, reviews: 213 },
    { id: 66, name: "Raw Wildflower Honey 500ml", category: "clothing", price: 34.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDEteWriPkzVnWauhx59LguehlZCh4NrHpsrz4v3ETw&s", badge: "new", rating: 4.8, reviews: 534 },
    { id: 67, name: "Assorted Dry Fruits Mix 750g", category: "clothing", price: 54.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yuwGl8hojdWmUJbiuFrWTiVZK7dQC2qQ3-ngDqI0VA&s=10", badge: "hot", rating: 4.6, reviews: 189 },
    { id: 68, name: "Extra Virgin Olive Oil 1L", category: "clothing", price: 42.99, emoji: "👔", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3tmBmvEgKUAopQGTz40L8sGhCDET0Sz689U6GaipTQ&s=10", rating: 4.5, reviews: 156 },
    { id: 69, name: "Dark Chocolate Box — 12 Pieces", category: "clothing", price: 39.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMkaLgGwLM90RDfPzZcX2UNAeEt_j8AUW-wu5kuZimw&s=10", badge: "new", rating: 4.4, reviews: 278 },
    { id: 70, name: "Himalayan Pink Salt 1kg", category: "clothing", price: 49.99, oldPrice: 64.99, emoji: "👗", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1HnbhaeTKiZswmzWqXR3fF5g0kyrFbLWIuzwZtNM0w&s=10", badge: "sale", rating: 4.7, reviews: 312 },
    { id: 71, name: "Green Tea Sampler Box", category: "clothing", price: 84.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVunqPE1W5Xb8XjXSz_wer2sJVar3xwzPWh-5MPKhdHQ&s=10", badge: "hot", rating: 4.8, reviews: 98 },
    { id: 72, name: "Protein Granola Bars — 12 Pack", category: "clothing", price: 29.99, emoji: "👕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5XPSZtBJ0UROF0fyEz7gpHwTuWhtf2XjRzeTqeXmTw&s", rating: 4.3, reviews: 167 },
    { id: 73, name: "Black Gean Jacket", category: "clothing", price: 99.99, oldPrice: 129.99, emoji: "👢", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXo-DdPf5e7CQj7hkq2AOlk6yyv5L8Q3iqwcFcGSpu0g&s=10", badge: "sale", rating: 4.9, reviews: 445 },
    { id: 74, name: "White Sneakers", category: "clothing", price: 27.99, emoji: "🩳", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O40Hy1g5PjwaXhxMge1hq85tfO_cFx8f0eDbJ5J3WA&s", badge: "new", rating: 4.4, reviews: 201 },
    { id: 75, name: "Graphic Printed Hoodie", category: "clothing", price: 59.99, emoji: "🦺", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM96Pupm9U6rxLD0EOfkaH1bCQ6atRTiiMEBbGNNNZtA&s=10", badge: "hot", rating: 4.6, reviews: 134 },
    { id: 76, name: "White Pants", category: "clothing", price: 44.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnLzoHD_L8053UHkGsI8BsA6Oh1ITzftFELy_gvK2Rw&s=10", rating: 4.5, reviews: 89 },
    { id: 77, name: "Floral- Summer Dress", category: "clothing", price: 36.99, emoji: "👔", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8BZQaJ7YnigM9hD3GTGiZC9WmE9ZvSRf72U62HluiQ&s=10", badge: "new", rating: 4.3, reviews: 223 },
    { id: 78, name: "Running Shoes- Trailed Edition", category: "clothing", price: 109.99, emoji: "👢", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfJ4sqZz81lzftuEBLRZg_5YGpF0REcLH_tHLMi9cyA&s=10", badge: "hot", rating: 4.8, reviews: 178 },
    { id: 79, name: "Brown Jacket", category: "clothing", price: 22.99, emoji: "👕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6v2rXcuc6MOiZfVT3sx4m5NUEWQINaAL8Owqu7qcJzQ&s=10", rating: 4.2, reviews: 345 },
    { id: 80, name: "Graphic Printed T-Shirt", category: "clothing", price: 139.99, oldPrice: 169.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSYkM_gYy1f9ekxjkmFVxqQOg6Q0CpdZQ3smM16pgIw&s=10", badge: "sale", rating: 4.9, reviews: 567 },
    { id: 81, name: "Stretch Denim Skinny Jeans", category: "clothing", price: 47.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzRgOlBKOFPZJwdg9ie6j8aB6Y2MKoDHguHUj6ZEVOg&s", badge: "new", rating: 4.5, reviews: 432 },
    { id: 82, name: "Corduroy Trousers", category: "clothing", price: 52.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-HVD_etmh8mtk4imU46iBjTFiAW88-X5TDoRORrY1A&s", rating: 4.6, reviews: 112 },
    { id: 83, name: "V-Neck Cashmere Sweater", category: "clothing", price: 89.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPkQHMYbTu6NBiau4Ejp13tpqs5_iPPDNv5NXi7NZFw&s=10", badge: "hot", rating: 4.7, reviews: 256 },
    { id: 84, name: "Canvas Slip-On Sneakers", category: "clothing", price: 34.99, emoji: "👟", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8w8lbi4u4Umyci8XjX3KORYCgF93VtR37eUWxtzrLsg&s=10", badge: "new", rating: 4.4, reviews: 389 },
    { id: 85, name: "Wrap-Front Blouse", category: "clothing", price: 38.99, emoji: "👚", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhW1AVhj7BYJpFIrVv08XKDVW__pnTkUXX_c3EyG4GA&s", rating: 4.6, reviews: 143 },
    { id: 86, name: "Waterproof Rain Parka", category: "clothing", price: 114.99, oldPrice: 144.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7546U_mkwyQjQTdIHv5XmWmKvgP_4knyhdC0Mgz3Zbw&s", badge: "sale", rating: 4.8, reviews: 267 },
    { id: 87, name: "Relaxed Fit Sweatpants", category: "clothing", price: 32.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKAYPLiLxpPFqeQerVtNFN0kjS5USXEC64YFrz7MQlw&s=10", badge: "new", rating: 4.3, reviews: 567 },
    { id: 88, name: "Turtleneck Long Sleeve Top", category: "clothing", price: 28.99, emoji: "👕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9kwSkb5VbEQF0pNrWhJkev4PKT1M_rFIll5lT2Pu4g&s=10", rating: 4.5, reviews: 198 },
    { id: 89, name: "Platform Combat Boots", category: "clothing", price: 89.99, emoji: "👢", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSzjOOaHZxXnxJQSQQXvmdIBVgd3txK_Z4o4zwjnEhw&s=10", badge: "hot", rating: 4.7, reviews: 312 },
    { id: 90, name: "Pleated Tennis Skirt", category: "clothing", price: 26.99, emoji: "👗", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDEteWriPkzVnWauhx59LguehlZCh4NrHpsrz4v3ETw&s", badge: "new", rating: 4.4, reviews: 178 },
    { id: 91, name: "Heavyweight Denim Shorts", category: "clothing", price: 31.99, emoji: "🩳", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yuwGl8hojdWmUJbiuFrWTiVZK7dQC2qQ3-ngDqI0VA&s=10", rating: 4.3, reviews: 245 },
    { id: 92, name: "Sherpa-Lined Trucker Jacket", category: "clothing", price: 74.99, oldPrice: 94.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3tmBmvEgKUAopQGTz40L8sGhCDET0Sz689U6GaipTQ&s=10", badge: "sale", rating: 4.6, reviews: 156 },
    { id: 93, name: "Performance Quarter-Zip Pullover", category: "clothing", price: 54.99, emoji: "👕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMkaLgGwLM90RDfPzZcX2UNAeEt_j8AUW-wu5kuZimw&s=10", badge: "hot", rating: 4.7, reviews: 334 },
    { id: 94, name: "Satin Midi Skirt", category: "clothing", price: 42.99, emoji: "👗", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1HnbhaeTKiZswmzWqXR3fF5g0kyrFbLWIuzwZtNM0w&s=10", badge: "new", rating: 4.5, reviews: 89 },
    { id: 95, name: "Cotton Twill Chinos", category: "clothing", price: 41.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVunqPE1W5Xb8XjXSz_wer2sJVar3xwzPWh-5MPKhdHQ&s=10", rating: 4.4, reviews: 267 },
    { id: 96, name: "Lace-Up Hiking Boots", category: "clothing", price: 119.99, emoji: "🥾", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5XPSZtBJ0UROF0fyEz7gpHwTuWhtf2XjRzeTqeXmTw&s", badge: "hot", rating: 4.8, reviews: 412 },
    { id: 97, name: "Brushed Flannel Pajama Set", category: "clothing", price: 44.99, emoji: "🧵", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXo-DdPf5e7CQj7hkq2AOlk6yyv5L8Q3iqwcFcGSpu0g&s=10", badge: "new", rating: 4.6, reviews: 189 },
    { id: 98, name: "Mesh-Panel Running Shorts", category: "clothing", price: 24.99, emoji: "🩳", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O40Hy1g5PjwaXhxMge1hq85tfO_cFx8f0eDbJ5J3WA&s", rating: 4.3, reviews: 345 },
    { id: 99, name: "Double-Breasted Blazer", category: "clothing", price: 99.99, oldPrice: 134.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM96Pupm9U6rxLD0EOfkaH1bCQ6atRTiiMEBbGNNNZtA&s=10", badge: "sale", rating: 4.8, reviews: 167 },
    { id: 100, name: "French Terry Hooded Sweatshirt", category: "clothing", price: 39.99, emoji: "👕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnLzoHD_L8053UHkGsI8BsA6Oh1ITzftFELy_gvK2Rw&s=10", badge: "new", rating: 4.5, reviews: 423 },
    { id: 101, name: "Patent Leather Loafers", category: "clothing", price: 79.99, emoji: "👞", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8BZQaJ7YnigM9hD3GTGiZC9WmE9ZvSRf72U62HluiQ&s=10", badge: "hot", rating: 4.7, reviews: 134 },
    { id: 102, name: "Convertible Hiking pants", category: "clothing", price: 59.99, emoji: "👖", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfJ4sqZz81lzftuEBLRZg_5YGpF0REcLH_tHLMi9cyA&s=10", rating: 4.6, reviews: 213 },
    { id: 103, name: "Off-Shoulder Evening Top", category: "clothing", price: 36.99, emoji: "👚", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6v2rXcuc6MOiZfVT3sx4m5NUEWQINaAL8Owqu7qcJzQ&s=10", badge: "new", rating: 4.4, reviews: 98 },
    { id: 104, name: "Waxed Canvas Field Jacket", category: "clothing", price: 129.99, oldPrice: 159.99, emoji: "🧥", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSYkM_gYy1f9ekxjkmFVxqQOg6Q0CpdZQ3smM16pgIw&s=10", badge: "sale", rating: 4.9, reviews: 378 },

    // ========== PHONES & TECH ==========
    { id: 25, name: "Wireless Bluetooth Earbuds", category: "phones", price: 39.99, oldPrice: 59.99, emoji: "🎧", badge: "hot", rating: 4.6, reviews: 892 },
    { id: 26, name: "20000mAh Power Bank", category: "phones", price: 29.99, emoji: "🔋", badge: "new", rating: 4.5, reviews: 567 },
    { id: 27, name: "USB-C Fast Charging Cable 2m", category: "phones", price: 12.99, emoji: "🔌", rating: 4.4, reviews: 1234 },
    { id: 28, name: "Bluetooth Portable Speaker", category: "phones", price: 49.99, emoji: "🔊", badge: "hot", rating: 4.7, reviews: 445 },
    { id: 29, name: "Adjustable Laptop Stand", category: "phones", price: 34.99, emoji: "💻", badge: "new", rating: 4.6, reviews: 312 },
    { id: 30, name: "Wireless Mouse — Ergonomic", category: "phones", price: 24.99, emoji: "🖱️", rating: 4.5, reviews: 278 },
    { id: 31, name: "Mechanical Keyboard RGB", category: "phones", price: 69.99, oldPrice: 84.99, emoji: "⌨️", badge: "sale", rating: 4.8, reviews: 534 },
    { id: 32, name: "Webcam HD 1080p", category: "phones", price: 44.99, emoji: "📷", rating: 4.3, reviews: 198 },

    // ========== UTENSILS ==========
    { id: 33, name: "Non-Stick Cookware Set — 8pc", category: "utensils", price: 89.99, oldPrice: 119.99, emoji: "🍳", badge: "sale", rating: 4.7, reviews: 345 },
    { id: 34, name: "Stainless Steel Knife Set", category: "utensils", price: 54.99, emoji: "🔪", badge: "hot", rating: 4.8, reviews: 267 },
    { id: 35, name: "Bamboo Cutting Board Set", category: "utensils", price: 29.99, emoji: "🪵", badge: "new", rating: 4.5, reviews: 189 },
    { id: 36, name: "Ceramic Dinner Plate Set — 4pc", category: "utensils", price: 39.99, emoji: "🍽️", rating: 4.6, reviews: 156 },
    { id: 37, name: "Glass Mixing Bowl Set", category: "utensils", price: 24.99, emoji: "🥣", rating: 4.4, reviews: 201 },
    { id: 38, name: "Electric Kettle 1.7L", category: "utensils", price: 34.99, emoji: "🫖", badge: "hot", rating: 4.7, reviews: 432 },
    { id: 39, name: "Silicone Spatula Set — 5pc", category: "utensils", price: 14.99, emoji: "🥄", rating: 4.3, reviews: 134 },
    { id: 40, name: "French Press Coffee Maker", category: "utensils", price: 19.99, emoji: "☕", badge: "new", rating: 4.6, reviews: 287 },

    // ========== PARTY & INSTRUMENTS ==========
    { id: 41, name: "Bluetooth Karaoke Microphone", category: "party", price: 34.99, emoji: "🎤", badge: "hot", rating: 4.5, reviews: 456 },
    { id: 42, name: "LED Strip Lights 10m — RGB", category: "party", price: 19.99, emoji: "💡", badge: "new", rating: 4.6, reviews: 678 },
    { id: 43, name: "Acoustic Guitar — Beginner", category: "party", price: 89.99, emoji: "🎸", badge: "hot", rating: 4.7, reviews: 234 },
    { id: 44, name: "Party Balloon Kit — 50pcs", category: "party", price: 14.99, emoji: "🎈", rating: 4.4, reviews: 312 },
    { id: 45, name: "Electronic DJ Controller", category: "party", price: 149.99, oldPrice: 189.99, emoji: "🎛️", badge: "sale", rating: 4.8, reviews: 89 },
    { id: 46, name: "Bongo Drums — Pair", category: "party", price: 39.99, emoji: "🪘", badge: "new", rating: 4.3, reviews: 67 },
    { id: 47, name: "Disco Ball Motor with Mirror", category: "party", price: 24.99, emoji: "🪩", rating: 4.5, reviews: 198 },
    { id: 48, name: "Keyboard Piano 61-Key", category: "party", price: 109.99, emoji: "🎹", badge: "hot", rating: 4.7, reviews: 345 },

    // ========== HOME & LIVING ==========
    { id: 49, name: "Aroma Diffuser — Wood Grain", category: "home", price: 29.99, emoji: "🌿", badge: "new", rating: 4.6, reviews: 423 },
    { id: 50, name: "Memory Foam Pillow — 2 Pack", category: "home", price: 39.99, emoji: "🛏️", badge: "hot", rating: 4.7, reviews: 567 },
    { id: 51, name: "LED Desk Lamp — Dimmable", category: "home", price: 34.99, emoji: "💡", rating: 4.5, reviews: 234 },
    { id: 52, name: "Scented Candle Set — 3pc", category: "home", price: 22.99, emoji: "🕯️", badge: "new", rating: 4.8, reviews: 345 },
    { id: 53, name: "Microfiber Bath Towel Set", category: "home", price: 27.99, oldPrice: 34.99, emoji: "🛁", badge: "sale", rating: 4.4, reviews: 189 },
    { id: 54, name: "Indoor Plant Pot — Ceramic", category: "home", price: 18.99, emoji: "🪴", rating: 4.5, reviews: 156 },
    { id: 55, name: "Wall Clock — Minimalist", category: "home", price: 24.99, emoji: "🕰️", rating: 4.6, reviews: 98 },
    { id: 56, name: "Robot Vacuum Cleaner", category: "home", price: 199.99, emoji: "🤖", badge: "hot", rating: 4.8, reviews: 678 },

    // ========== SPORTS & FITNESS ==========
    { id: 57, name: "Yoga Mat — Non-Slip 6mm", category: "sports", price: 24.99, emoji: "🧘", badge: "hot", rating: 4.7, reviews: 567 },
    { id: 58, name: "Adjustable Dumbbell Set", category: "sports", price: 149.99, oldPrice: 189.99, emoji: "🏋️", badge: "sale", rating: 4.8, reviews: 345 },
    { id: 59, name: "Insulated Water Bottle 1L", category: "sports", price: 19.99, emoji: "🫗", badge: "new", rating: 4.5, reviews: 789 },
    { id: 60, name: "Resistance Bands Set — 5pc", category: "sports", price: 16.99, emoji: "💪", rating: 4.4, reviews: 432 },
    { id: 61, name: "Running Armband — Universal", category: "sports", price: 12.99, emoji: "🏃", rating: 4.3, reviews: 234 },
    { id: 62, name: "Boxing Gloves — 12oz", category: "sports", price: 44.99, emoji: "🥊", badge: "hot", rating: 4.6, reviews: 167 },
    { id: 63, name: "Jump Rope — Speed Weighted", category: "sports", price: 9.99, emoji: "🤸", rating: 4.5, reviews: 345 },
    { id: 64, name: "Foam Roller — Deep Tissue", category: "sports", price: 22.99, emoji: "🧘", badge: "new", rating: 4.7, reviews: 213 },
];

// ===================== STATE =====================
let cart = [];
let currentCategory = 'all';
let currentSort = 'featured';
let searchQuery = '';
let wishlist = new Set();

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initFilters();
    initSort();
    initSearch();
    initCart();
    initNavbar();
});

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
            ? `<span class="product-price-old">$${p.oldPrice.toFixed(2)}</span>`
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
                    ${p.image ? `<img src="${p.image}" alt="${p.name}" class="product-img">` : `<span style="position:relative;z-index:1;">${p.emoji}</span>`}
                </div>
                <div class="product-card-body">
                    <p class="product-category">${p.category.replace('-', ' & ')}</p>
                    <h3 class="product-name">${p.name}</h3>
                    <div class="product-rating">
                        <div class="stars">${starsHTML}</div>
                        <span class="rating-count">(${p.reviews})</span>
                    </div>
                    <div class="product-price-row">
                        <div>
                            <span class="product-price">$${p.price.toFixed(2)}</span>
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

    if (toggle) toggle.addEventListener('click', () => openCart());
    if (close) close.addEventListener('click', () => closeCart());
    if (overlay) overlay.addEventListener('click', () => closeCart());
    if (continueBtn) continueBtn.addEventListener('click', () => closeCart());
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
        // Remove cart item elements but keep empty msg
        itemsContainer.querySelectorAll('.cart-item').forEach(el => el.remove());
        return;
    }

    emptyMsg.style.display = 'none';
    footer.style.display = 'block';
    subtotalEl.textContent = `$${totalPrice.toFixed(2)}`;
    totalEl.textContent = `$${totalPrice.toFixed(2)}`;

    // Render items
    const existingIDs = new Set();
    cart.forEach(item => {
        existingIDs.add(item.id);
        let el = itemsContainer.querySelector(`.cart-item[data-id="${item.id}"]`);
        if (el) {
            el.querySelector('.cart-item-qty').textContent = item.qty;
            el.querySelector('.cart-item-price').textContent = `$${(item.price * item.qty).toFixed(2)}`;
        } else {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.dataset.id = item.id;
            div.innerHTML = `
                <div class="cart-item-image">${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">` : item.emoji}</div>
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</p>
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

    // Remove items not in cart
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
