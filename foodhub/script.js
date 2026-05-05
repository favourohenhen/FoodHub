// --- DATA ---
const restaurants = [
    {
        id: 1,
        name: "Mama Cass Kitchen",
        tagline: "Authentic Nigerian home cooking",
        cuisines: ["Nigerian", "Continental"],
        isOpen: true,
        rating: 4.7,
        reviewCount: 238,
        responseTime: "Replies within 5 min",
        deliveryTime: "20–30 min",
        deliveryFee: "Free delivery",
        minOrder: 1500,
        address: "14 Admiralty Way, Lekki Phase 1, Lagos",
        whatsapp: "2348012345678",
        hours: "Mon–Sat: 8am–10pm, Sun: 10am–8pm",
        image:
            "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        gradient: "linear-gradient(135deg, #e85d26 0%, #ff9a3c 100%)",
        menu: [
            {
                category: "Main Course",
                name: "Party Jollof Rice",
                desc: "Smoky party-style jollof with fried chicken",
                price: 2500,
                available: true,
            },
            {
                category: "Main Course",
                name: "Egusi Soup + Eba",
                desc: "Rich egusi with stockfish and ponmo",
                price: 2000,
                available: true,
            },
            {
                category: "Soups",
                name: "Pepper Soup",
                desc: "Catfish pepper soup with utazi leaves",
                price: 3500,
                available: false,
            },
            {
                category: "Drinks",
                name: "Zobo Drink (1L)",
                desc: "Chilled hibiscus drink, lightly spiced",
                price: 800,
                available: true,
            },
        ],
        reviews: [
            {
                reviewer: "Chidi O.",
                date: "2 days ago",
                rating: 5,
                dish: "Jollof Rice",
                comment:
                    "Best jollof in Lagos no cap! Smoky, well seasoned, and the portions are generous. Will definitely order again.",
            },
            {
                reviewer: "Amaka B.",
                date: "1 week ago",
                rating: 4,
                dish: "Egusi Soup",
                comment:
                    "The egusi was rich and tasty. Delivery was a bit slow but the food made up for it.",
            },
        ],
        staff: [
            {
                name: "Blessing Okafor",
                role: "Head Chef",
                experience: "8 years",
                initials: "BO",
            },
            {
                name: "Emeka Nwosu",
                role: "Sous Chef",
                experience: "5 years",
                initials: "EN",
            },
            {
                name: "Ngozi Adeyemi",
                role: "Customer Service",
                experience: "3 years",
                initials: "NA",
            },
        ],
        dishRatings: [
            { dish: "Jollof Rice", rating: 4.9, reviews: 120 },
            { dish: "Egusi Soup", rating: 4.6, reviews: 87 },
            { dish: "Pepper Soup", rating: 4.4, reviews: 31 },
        ],
    },
    {
        id: 2,
        name: "Suya Spot Express",
        tagline: "Premium grilled meats and spices",
        cuisines: ["Grills", "Snacks"],
        isOpen: true,
        rating: 4.8,
        reviewCount: 412,
        responseTime: "Replies within 2 min",
        deliveryTime: "15–25 min",
        deliveryFee: "₦500 delivery",
        minOrder: 2000,
        address: "Allen Avenue, Ikeja, Lagos",
        whatsapp: "2348023456789",
        hours: "Mon–Sun: 4pm–12am",
        image:
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&h=400&q=80",
        gradient: "linear-gradient(135deg, #8b0000 0%, #e85d26 100%)",
        menu: [
            {
                category: "Grills",
                name: "Beef Suya Portion",
                desc: "Spicy grilled beef with fresh onions and tomatoes",
                price: 2000,
                available: true,
            },
            {
                category: "Grills",
                name: "Chicken Suya",
                desc: "Quarter chicken grilled with yaji spice",
                price: 3500,
                available: true,
            },
            {
                category: "Snacks",
                name: "Masa (3 pcs)",
                desc: "Northern rice cakes, perfect with suya",
                price: 1000,
                available: true,
            },
            {
                category: "Drinks",
                name: "Chilled Coke",
                desc: "50cl PET bottle",
                price: 500,
                available: true,
            },
        ],
        reviews: [
            {
                reviewer: "Tunde M.",
                date: "1 day ago",
                rating: 5,
                dish: "Beef Suya Portion",
                comment: "The spice level is perfect. Meat is tender.",
            },
            {
                reviewer: "Sarah J.",
                date: "3 days ago",
                rating: 5,
                dish: "Chicken Suya",
                comment: "Always fresh and hot. My go-to spot.",
            },
        ],
        staff: [
            {
                name: "Musa Ibrahim",
                role: "Master Griller",
                experience: "12 years",
                initials: "MI",
            },
            {
                name: "Aisha Bello",
                role: "Manager",
                experience: "4 years",
                initials: "AB",
            },
        ],
        dishRatings: [
            { dish: "Beef Suya Portion", rating: 4.9, reviews: 250 },
            { dish: "Chicken Suya", rating: 4.8, reviews: 142 },
        ],
    },
    {
        id: 3,
        name: "Wok & Roll",
        tagline: "Asian fusion meets Lagos flavor",
        cuisines: ["Chinese", "Rice Dishes"],
        isOpen: false,
        rating: 4.5,
        reviewCount: 156,
        responseTime: "Replies within 10 min",
        deliveryTime: "35–45 min",
        deliveryFee: "Free delivery",
        minOrder: 4000,
        address: "Victoria Island, Lagos",
        whatsapp: "2348034567890",
        hours: "Tue–Sun: 11am–9pm",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=400&q=80",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #4a4a6a 100%)",
        menu: [
            {
                category: "Rice Dishes",
                name: "Special Fried Rice",
                desc: "Shrimp, chicken, and veggies",
                price: 4500,
                available: true,
            },
            {
                category: "Main Course",
                name: "Shredded Beef in Green Pepper",
                desc: "Savory beef stir-fry",
                price: 5000,
                available: true,
            },
            {
                category: "Snacks",
                name: "Spring Rolls (4 pcs)",
                desc: "Crispy vegetable rolls",
                price: 2000,
                available: false,
            },
        ],
        reviews: [
            {
                reviewer: "Femi K.",
                date: "2 weeks ago",
                rating: 4,
                dish: "Special Fried Rice",
                comment: "Good portion size, tasty but a bit oily.",
            },
        ],
        staff: [
            {
                name: "Chen Wei",
                role: "Head Chef",
                experience: "15 years",
                initials: "CW",
            },
        ],
        dishRatings: [
            { dish: "Special Fried Rice", rating: 4.6, reviews: 89 },
            { dish: "Shredded Beef", rating: 4.5, reviews: 67 },
        ],
    },
    {
        id: 4,
        name: "Burger Boyz",
        tagline: "Juicy, messy, perfect burgers",
        cuisines: ["Fast Food", "Snacks"],
        isOpen: true,
        rating: 4.6,
        reviewCount: 320,
        responseTime: "Replies within 1 min",
        deliveryTime: "15–20 min",
        deliveryFee: "₦1000 delivery",
        minOrder: 3000,
        address: "Surulere, Lagos",
        whatsapp: "2348045678901",
        hours: "Mon–Sun: 10am–11pm",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&h=400&q=80",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
        menu: [
            {
                category: "Main Course",
                name: "Classic Smash Burger",
                desc: "Double beef patty, cheese, house sauce",
                price: 4000,
                available: true,
            },
            {
                category: "Snacks",
                name: "Loaded Fries",
                desc: "Fries topped with cheese and bacon bits",
                price: 2500,
                available: true,
            },
            {
                category: "Drinks",
                name: "Oreo Milkshake",
                desc: "Thick and creamy",
                price: 3000,
                available: true,
            },
        ],
        reviews: [
            {
                reviewer: "David O.",
                date: "5 days ago",
                rating: 5,
                dish: "Classic Smash Burger",
                comment: "Best burger on the mainland!",
            },
        ],
        staff: [
            {
                name: "John Doe",
                role: "Grill Cook",
                experience: "3 years",
                initials: "JD",
            },
        ],
        dishRatings: [
            { dish: "Classic Smash Burger", rating: 4.8, reviews: 210 },
            { dish: "Loaded Fries", rating: 4.5, reviews: 110 },
        ],
    },
    {
        id: 5,
        name: "Sweet Treats Cafe",
        tagline: "Fresh pastries and artisan coffee",
        cuisines: ["Desserts", "Drinks"],
        isOpen: true,
        rating: 4.9,
        reviewCount: 185,
        responseTime: "Replies within 5 min",
        deliveryTime: "20–30 min",
        deliveryFee: "Free delivery",
        minOrder: 1000,
        address: "Yaba, Lagos",
        whatsapp: "2348056789012",
        hours: "Mon–Sat: 7am–7pm",
        image:
            "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&h=400&q=80",
        gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
        menu: [
            {
                category: "Desserts",
                name: "Red Velvet Slice",
                desc: "Moist cake with cream cheese frosting",
                price: 2500,
                available: true,
            },
            {
                category: "Desserts",
                name: "Meat Pie",
                desc: "Flaky pastry filled with minced meat",
                price: 1000,
                available: true,
            },
            {
                category: "Drinks",
                name: "Iced Caramel Macchiato",
                desc: "Espresso, milk, vanilla, caramel",
                price: 2800,
                available: false,
            },
        ],
        reviews: [
            {
                reviewer: "Grace T.",
                date: "1 month ago",
                rating: 5,
                dish: "Red Velvet Slice",
                comment: "So soft and not too sweet. Perfect.",
            },
        ],
        staff: [
            {
                name: "Tolu A.",
                role: "Head Baker",
                experience: "6 years",
                initials: "TA",
            },
        ],
        dishRatings: [
            { dish: "Red Velvet Slice", rating: 4.9, reviews: 95 },
            { dish: "Meat Pie", rating: 4.8, reviews: 90 },
        ],
    },
    {
        id: 6,
        name: "Iya Basira Amala",
        tagline: "The true taste of local Amala",
        cuisines: ["Nigerian", "Soups"],
        isOpen: true,
        rating: 4.4,
        reviewCount: 560,
        responseTime: "Replies within 15 min",
        deliveryTime: "30–45 min",
        deliveryFee: "₦800 delivery",
        minOrder: 1500,
        address: "Obalende, Lagos",
        whatsapp: "2348067890123",
        hours: "Mon–Sun: 12pm–8pm",
        image:
            "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&h=400&q=80",
        gradient: "linear-gradient(135deg, #4a4a4a 0%, #777777 100%)",
        menu: [
            {
                category: "Main Course",
                name: "Amala + Ewedu + Gbegiri",
                desc: "Classic abula with assorted meat",
                price: 2500,
                available: true,
            },
            {
                category: "Main Course",
                name: "Pounded Yam + Egusi",
                desc: "Smooth pounded yam",
                price: 3000,
                available: true,
            },
            {
                category: "Soups",
                name: "Extra Assorted Meat",
                desc: "Shaki, ponmo, beef",
                price: 1500,
                available: true,
            },
        ],
        reviews: [
            {
                reviewer: "Kunle B.",
                date: "3 days ago",
                rating: 4,
                dish: "Amala + Ewedu",
                comment:
                    "The amala is smooth, but the queue is always long. Glad they deliver now.",
            },
        ],
        staff: [
            {
                name: "Iya Basira",
                role: "Owner/Chef",
                experience: "25 years",
                initials: "IB",
            },
        ],
        dishRatings: [
            { dish: "Amala + Ewedu", rating: 4.7, reviews: 320 },
            { dish: "Pounded Yam", rating: 4.3, reviews: 140 },
        ],
    },
];

const trendingDishes = [
    {
        name: "Party Jollof Rice",
        restaurant: "Mama Cass Kitchen",
        price: "₦2,500",
        image:
            "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Beef Suya Portion",
        restaurant: "Suya Spot Express",
        price: "₦2,000",
        image:
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&h=400&q=80",
    },
    /*{
      name: "Amala + Ewedu",
      restaurant: "Iya Basira Amala",
      price: "₦2,500",
      image:
        "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Classic Smash Burger",
      restaurant: "Burger Boyz",
      price: "₦4,000",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Red Velvet Slice",
      restaurant: "Sweet Treats Cafe",
      price: "₦2,500",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Special Fried Rice",
      restaurant: "Wok & Roll",
      price: "₦4,500",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=400&q=80",
    },*/
];

// --- STATE ---
let currentRestaurantId = null;
let filters = {
    query: "",
    category: "All",
    pill: "All",
    sort: "Nearest",
};

// --- DOM ELEMENTS ---
const grid = document.getElementById("restaurant-grid");
const resultCount = document.getElementById("result-count");
const navSearchInput = document.getElementById("nav-search-input");
const pills = document.querySelectorAll(".pill");
const trendingContainer = document.getElementById("trending-container");

// --- UTILS ---
function getStarsHTML(rating) {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return "★".repeat(full) + "☆".repeat(empty);
}

function formatPrice(price) {
    return `₦${price.toLocaleString()}`;
}

// --- RENDER FUNCTIONS ---
function renderTrending() {
    trendingContainer.innerHTML = trendingDishes
        .map(
            (dish) => `
          <a href="#restaurants" class="dish-card" onclick="handleTrendingClick(event, '${dish.name}')" style="background-image: url('${dish.image}'); background-size: cover; background-position: center;">
              <div class="dish-content">
                  <div class="dish-name">${dish.name}</div>
                  <div class="dish-restaurant">${dish.restaurant}</div>
                  <div class="dish-price">${dish.price}</div>
              </div>
              <div class="dish-hover">Order Now</div>
          </a>
      `,
        )
        .join("");
}

function renderRestaurants(data) {
    if (data.length === 0) {
        grid.innerHTML = `<div class="empty-state"><h3 class="section-heading">No restaurants found.</h3><p class="body-copy">Try adjusting your search or filters.</p></div>`;
        resultCount.textContent = `(Showing 0 of ${restaurants.length})`;
        return;
    }

    grid.innerHTML = data
        .map((r) => {
            const waText = encodeURIComponent(
                `Hi, I'd like to order from ${r.name}`,
            );
            const waLink = `https://wa.me/${r.whatsapp}?text=${waText}`;

            return `
          <div class="restaurant-card">
              <div class="card-banner" style="background-image: url('${r.image}'); background-size: cover; background-position: center;">
                  <div class="badge badge-status ${r.isOpen ? "open" : "closed"}">${r.isOpen ? "Open Now" : "Closed"}</div>
                  <div class="badge badge-time">${r.deliveryTime}</div>
                  <div class="badge badge-cuisine">${r.cuisines.join(" · ")}</div>
              </div>
              <div class="card-body">
                  <div class="card-logo">${r.name.substring(0, 2).toUpperCase()}</div>
                  <h3 class="card-title">${r.name}</h3>
                  <div class="card-rating">
                      <span class="stars">${getStarsHTML(r.rating)}</span>
                      <span style="font-weight: 600;">${r.rating}</span>
                      <span class="label-text">(${r.reviewCount} reviews)</span>
                  </div>
                  <p class="body-copy card-desc">${r.tagline}</p>
                  <div class="card-meta">
                      <div class="meta-item">
                          <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                          <span class="label-text">${r.responseTime}</span>
                      </div>
                      <div class="meta-item">
                          <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                          <span class="label-text">${r.deliveryFee} · Min order ${formatPrice(r.minOrder)}</span>
                      </div>
                  </div>
              </div>
              <div class="card-footer">
                  <div class="card-actions">
                      <button class="btn-card" onclick="openModal(${r.id}, 'menu')">View Menu</button>
                      <button class="btn-card" onclick="openModal(${r.id}, 'reviews')">Reviews</button>
                  </div>
                  <a href="${waLink}" target="_blank" class="btn btn-whatsapp btn-text">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Order on WhatsApp
                  </a>
              </div>
          </div>
          `;
        })
        .join("");

    resultCount.textContent = `(Showing ${data.length} of ${restaurants.length})`;
}

// --- FILTER LOGIC ---
function applyFilters() {
    let filtered = restaurants.filter((r) => {
        // Query
        const q = filters.query.toLowerCase();
        const matchesQuery =
            r.name.toLowerCase().includes(q) ||
            r.cuisines.some((c) => c.toLowerCase().includes(q)) ||
            r.menu.some((m) => m.name.toLowerCase().includes(q));

        // Category Dropdown
        const cat = filters.category;
        const matchesCat =
            cat === "All" ||
            r.cuisines.includes(cat) ||
            r.menu.some((m) => m.category === cat);

        // Pills
        let matchesPill = true;
        const pill = filters.pill;
        if (pill === "Open Now") matchesPill = r.isOpen;
        else if (pill === "Free Delivery")
            matchesPill = r.deliveryFee.toLowerCase().includes("free");
        else if (pill === "Under ₦2000")
            matchesPill =
                r.minOrder < 2000 || r.menu.some((m) => m.price < 2000);
        else if (pill !== "All" && pill !== "Top Rated") {
            matchesPill =
                r.menu.some((m) =>
                    m.name.toLowerCase().includes(pill.toLowerCase()),
                ) ||
                r.cuisines.some((c) =>
                    c.toLowerCase().includes(pill.toLowerCase()),
                );
        }

        return matchesQuery && matchesCat && matchesPill;
    });

    // Sorting
    const sort = filters.sort;
    if (sort === "Top Rated" || filters.pill === "Top Rated") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === "Fastest") {
        filtered.sort(
            (a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime),
        );
    } else if (sort === "Trending Today") {
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    renderRestaurants(filtered);
}

function handleTrendingClick(event, dishName) {
    event.preventDefault(); // Prevent standard instant jump

    // Set the search query to the specific dish
    filters.query = dishName;
    if (navSearchInput) navSearchInput.value = dishName;

    // Reset pills to 'All' so no conflicting filters apply
    pills.forEach((p) => p.classList.remove("active"));
    const allPill = document.querySelector('.pill[data-filter="All"]');
    if (allPill) allPill.classList.add("active");
    filters.pill = "All";

    applyFilters();
    document
        .getElementById("restaurants")
        ?.scrollIntoView({ behavior: "smooth" });
}

// --- EVENT LISTENERS ---
navSearchInput?.addEventListener("input", (e) => {
    filters.query = e.target.value;
    applyFilters();
});

// Scroll to results when pressing Enter in search inputs
const handleSearchEnter = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document
            .getElementById("restaurants")
            ?.scrollIntoView({ behavior: "smooth" });
    }
};
navSearchInput?.addEventListener("keydown", handleSearchEnter);

pills.forEach((pill) => {
    pill.addEventListener("click", (e) => {
        pills.forEach((p) => p.classList.remove("active"));
        e.target.classList.add("active");
        filters.pill = e.target.dataset.filter;

        // Clear search inputs so the new filter applies without restriction
        filters.query = "";
        if (navSearchInput) navSearchInput.value = "";

        applyFilters();

        // Scroll the selected pill into view
        e.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });

        // Scroll the page down to the restaurant results section
        document
            .getElementById("restaurants")
            ?.scrollIntoView({ behavior: "smooth" });
    });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 10) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
});

// Mobile Menu
const mobileBtn = document.getElementById("mobile-menu-btn");
const drawer = document.getElementById("mobile-drawer");
const drawerClose = document.getElementById("drawer-close");
const drawerLinks = document.querySelectorAll(".drawer-link");

function openDrawer() {
    drawer.classList.add("open");
    mobileBtn.setAttribute("aria-expanded", "true");
}
function closeDrawer() {
    drawer.classList.remove("open");
    mobileBtn.setAttribute("aria-expanded", "false");
}
mobileBtn.addEventListener("click", openDrawer);
drawerClose.addEventListener("click", closeDrawer);
drawerLinks.forEach((link) =>
    link.addEventListener("click", closeDrawer),
);

// --- MODAL LOGIC ---
const modal = document.getElementById("restaurant-modal");
const modalClose = document.getElementById("modal-close");
const modalBackdrop = document.getElementById("modal-backdrop");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");
const reviewForm = document.getElementById("review-form");

function renderReviewsList(reviews) {
    document.getElementById("modal-reviews-list").innerHTML = reviews
        .map(
            (rev) => `
          <div class="review-card">
              <div class="review-header">
                  <div class="reviewer-avatar">${rev.reviewer.substring(0, 1)}</div>
                  <div class="review-meta">
                      <div style="font-weight: 600; font-size: 0.9375rem;">${rev.reviewer}</div>
                      <div class="review-date">${rev.date}</div>
                  </div>
                  <div style="color: var(--warning); font-size: 0.875rem;">${getStarsHTML(rev.rating)}</div>
              </div>
              <div class="review-dish-tag">Ordered: ${rev.dish}</div>
              <p class="body-copy">${rev.comment}</p>
          </div>
      `,
        )
        .reverse()
        .join("");
}

function openModal(id, defaultTab = "overview") {
    const r = restaurants.find((res) => res.id === id);
    if (!r) return;

    currentRestaurantId = id;

    // Populate Overview
    document.getElementById("modal-title").textContent = r.name;
    document.getElementById("modal-banner").style.backgroundImage =
        `url('${r.image}')`;
    document.getElementById("modal-banner").style.backgroundSize = "cover";
    document.getElementById("modal-banner").style.backgroundPosition =
        "center";
    document.getElementById("modal-logo").textContent = r.name
        .substring(0, 2)
        .toUpperCase();
    document.getElementById("modal-tagline").textContent = r.tagline;
    document.getElementById("modal-cuisines").textContent =
        r.cuisines.join(" · ");
    document.getElementById("modal-address").textContent = r.address;
    document.getElementById("modal-hours").textContent = r.hours;
    document.getElementById("modal-response").textContent = r.responseTime;
    document.getElementById("modal-delivery").textContent =
        `${r.deliveryFee} · ${r.deliveryTime}`;

    const waText = encodeURIComponent(
        `Hi, I'd like to order from ${r.name}`,
    );
    document.getElementById("modal-whatsapp-btn").href =
        `https://wa.me/${r.whatsapp}?text=${waText}`;

    // Populate Menu
    const menuContainer = document.getElementById("modal-menu-container");
    const categories = [...new Set(r.menu.map((m) => m.category))];
    menuContainer.innerHTML = categories
        .map((cat) => {
            const items = r.menu.filter((m) => m.category === cat);
            return `
              <div class="menu-category">
                  <h3 class="card-title">${cat}</h3>
                  <div class="menu-grid">
                      ${items
                    .map(
                        (item) => `
                          <div class="menu-item ${!item.available ? "sold-out" : ""}">
                              <div>
                                  <div class="menu-item-header">
                                      <span class="menu-item-name">${item.name}</span>
                                      ${!item.available ? `<span class="badge-soldout">Sold Out</span>` : ""}
                                  </div>
                                  <div class="menu-item-desc">${item.desc}</div>
                              </div>
                              <div class="menu-item-footer">
                                  <span class="price-text">${formatPrice(item.price)}</span>
                              </div>
                          </div>
                      `,
                    )
                    .join("")}
                  </div>
              </div>
          `;
        })
        .join("");

    // Populate Reviews
    document.getElementById("modal-rating-large").textContent = r.rating;
    document.getElementById("modal-rating-stars").innerHTML = getStarsHTML(
        r.rating,
    );
    document.getElementById("modal-review-count").textContent =
        `${r.reviewCount} reviews`;

    // Mock breakdown based on rating
    const p5 = r.rating >= 4.5 ? 75 : 40;
    const p4 = r.rating >= 4.5 ? 15 : 30;
    const p3 = r.rating >= 4.5 ? 5 : 15;
    const p2 = r.rating >= 4.5 ? 3 : 10;
    const p1 = r.rating >= 4.5 ? 2 : 5;

    document.getElementById("modal-rating-bars").innerHTML = [
        { s: 5, p: p5 },
        { s: 4, p: p4 },
        { s: 3, p: p3 },
        { s: 2, p: p2 },
        { s: 1, p: p1 },
    ]
        .map(
            (b) => `
          <div class="rating-bar-row">
              <span>${b.s}★</span>
              <div class="bar-bg"><div class="bar-fill" style="width: ${b.p}%"></div></div>
              <span>${b.p}%</span>
          </div>
      `,
        )
        .join("");

    document.getElementById("modal-dish-ratings").innerHTML = r.dishRatings
        .map(
            (dr) => `
          <div class="dish-rating-pill">
              ${dr.dish} <span style="color: var(--warning)">★</span> ${dr.rating}
          </div>
      `,
        )
        .join("");

    renderReviewsList(r.reviews);

    // Populate Staff
    document.getElementById("modal-staff-grid").innerHTML = r.staff
        .map(
            (s) => `
          <div class="staff-card">
              <div class="staff-avatar">${s.initials}</div>
              <div class="card-title">${s.name}</div>
              <div class="staff-role">${s.role}</div>
              <div class="staff-exp">${s.experience} experience</div>
          </div>
      `,
        )
        .join("");

    // Switch to default tab
    switchTab(defaultTab);

    // Show Modal
    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const rating = parseInt(
        reviewForm.querySelector('input[name="rating"]:checked').value,
    );
    const dish = document.getElementById("review-dish").value;
    const comment = document.getElementById("review-comment").value;

    const newReview = {
        reviewer: "Guest User",
        date: "Just now",
        rating: rating,
        dish: dish,
        comment: comment,
    };

    const r = restaurants.find((res) => res.id === currentRestaurantId);
    r.reviews.push(newReview);
    r.reviewCount++;

    // Update UI
    renderReviewsList(r.reviews);
    document.getElementById("modal-review-count").textContent =
        `${r.reviewCount} reviews`;

    // Reset Form
    reviewForm.reset();
    alert("Thank you for your review!");
});

function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
    currentRestaurantId = null;
}

function switchTab(tabId) {
    tabBtns.forEach((btn) => {
        const isSelected = btn.dataset.tab === tabId;
        btn.classList.toggle("active", isSelected);
        btn.setAttribute("aria-selected", isSelected);
    });
    tabPanes.forEach((pane) => {
        const isActive = pane.id === `pane-${tabId}`;
        pane.classList.toggle("active", isActive);
    });
}

tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => switchTab(e.target.dataset.tab));
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active"))
        closeModal();
});

// --- INIT ---
renderTrending();
renderRestaurants(restaurants);