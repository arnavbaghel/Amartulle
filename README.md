# Chai Amrittulya (चाय अमृततुल्य) ☕

> An ultra-premium, interactive web platform for **Chai Amrittulya** — celebrating authentic Indian slow-brewed kulhad chai, royal shakes, desi sharbats, and crispy Mumbai bakery snacks.

---

## ✨ Features

- **🎬 26-Frame Canvas Scroll Experience**: Interactive hero section with a smooth frame-by-frame tea-pouring scrub animation synced to scroll.
- **🍵 Royal Menu Showcase**: 21 signature handcrafted items (Signature Chais, Thick Shakes, Desi Sharbats, and Crispy Snacks) with zero external broken links.
- **🧪 Interactive Chai Customizer**: Live simulator to customize dairy (Buffalo, Cow, Oat, Kadak Water), sweeteners (Desi Gud, Cane Sugar, Stevia), spices (Ginger, Cardamom, Clove, Tulsi, Kesar), and traditional vessels (Kulhad, Cutting Glass, Brass Cup).
- **🛍️ Chai Tray Slide-Over Drawer**: Interactive cart with quantity adjustment, localStorage persistence, and instant checkout simulation.
- **💼 Franchise ROI Calculator**: Interactive investment estimation tool for prospective franchise partners.
- **📍 Outlets & Testimonials**: Showcase of 120+ outlets across Pune, Mumbai, Delhi NCR, Lucknow, Ahmedabad, and Bengaluru.
- **⚡ 100% Self-Contained Assets**: All menu imagery, frame animations, and brand logos are bundled locally inside `/public` for complete offline reliability.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation & Effects**: Canvas Confetti, HTML5 Canvas 2D Context

---

## 🚀 Getting Started

Follow these steps to run the website locally on your computer:

### 1. Prerequisites
Ensure you have **Node.js** (v18.0 or newer) installed on your system.  
Verify with:
```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd Amartulle
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to:  
👉 **`http://localhost:5173`**

---

## 📦 Production Build

To create an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```plaintext
Amartulle/
├── public/                     # Static assets served by Vite
│   ├── frames/                 # 26 scroll animation frames
│   ├── menu/                   # High-res local imagery for all 21 menu items
│   ├── heritage.jpg            # Heritage section visual
│   └── logo.png                # Brand logo
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── ChaiCustomizer.tsx  # Interactive chai builder simulator
│   │   ├── ChaiTrayDrawer.tsx  # Slide-over order tray drawer
│   │   ├── Footer.tsx          # Brand footer with quick links
│   │   ├── FranchiseCalculator.tsx # ROI & franchise investment calculator
│   │   ├── HeritageStory.tsx   # 4 pillars & brand history
│   │   ├── HeroScrollCanvas.tsx# 26-frame canvas scroll scrubber
│   │   ├── MenuSection.tsx     # Filterable sensory menu catalog
│   │   ├── Navbar.tsx          # Sticky navigation & order counter
│   │   ├── QuickViewModal.tsx  # Sensory item detail popup
│   │   └── TestimonialsAndOutlets.tsx # Reviews & outlet locations
│   ├── data/
│   │   └── menuData.ts         # Complete menu, brand stats, & outlet data
│   ├── App.tsx                 # Root application component & tray state
│   ├── index.css               # Design system & Tailwind styling tokens
│   └── main.tsx                # React application entry point
├── index.html                  # HTML entry point with metadata & fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration with Tailwind CSS plugin
└── README.md                   # Project documentation
```

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
