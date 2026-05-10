# FoodHub — Restaurant Discovery Marketplace

FoodHub is a modern, responsive front-end web application that allows users to discover local restaurants, browse menus, read reviews, and place orders directly via WhatsApp. It is built completely with vanilla web technologies, ensuring fast load times and a lightweight footprint.

## 🚀 Features

- **Restaurant Discovery**: Browse a curated list of local restaurants with rich visual cards.
- **Advanced Search & Filtering**: Dynamically search by restaurant name, dish, or cuisine. Filter results using interactive category pills (e.g., "Open Now", "Free Delivery", "Top Rated", or specific dishes like "Jollof Rice").
- **Responsive Layout**: A mobile-first design featuring a sticky navigation bar, a collapsible mobile drawer, and responsive CSS grids that look great on any device size.
- **Detailed Restaurant Profiles**: Click on a restaurant to open a comprehensive modal featuring:
  - **Overview**: Operating hours, location, delivery fee, and response time.
  - **Menu**: Categorized dish listings with prices and availability (sold-out badges).
  - **Reviews**: Interactive rating breakdown, customer comments, and a functional client-side form to submit new reviews.
  - **Staff**: Information about the restaurant's top chefs and personnel.
- **WhatsApp Integration**: Seamlessly transition from browsing to ordering with direct WhatsApp chat links pre-filled with the user's intent.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for accessibility and SEO.
- **CSS3**: Custom properties (variables) for consistent theming, Flexbox & Grid for layout architecture, and smooth transitions/animations.
- **Vanilla JavaScript (ES6+)**: Handles dynamic data rendering, client-side filtering, modal state management, and form submissions without any external frameworks or libraries.

## 📂 Project Structure

```text
📁 Gemini/
├── 📄 index.html    # The main entry point containing the UI structure, inline CSS, and JS logic
├── 📄 package.json  # Basic project metadata
└── 📄 README.md     # Project documentation
```

## 🏁 Getting Started

Since this project relies entirely on client-side vanilla technologies, there is no complex build process required.

1. **Clone or download the repository** to your local machine.
2. **Open `index.html`** in any modern web browser (Chrome, Firefox, Safari, Edge).

_Note: Even though a `package.json` is included, there are currently no Node.js dependencies or build scripts required to run the frontend application._

## 🔮 Future Enhancements

- **Backend Integration**: Replace the hardcoded `restaurants` array with a dynamic REST or GraphQL API fetch.
- **User Authentication**: Implement login and signup functionality for users to save their favorite restaurants and past orders.
- **Shopping Cart**: Build an on-site cart system before redirecting to WhatsApp.

## 📄 License

This project is licensed under the ISC License.
