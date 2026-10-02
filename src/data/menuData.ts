export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'chai' | 'shakes' | 'sharbats' | 'snacks';
  price: number;
  description: string;
  image: string;
  spiceLevel: number; // 0 to 5
  sweetnessLevel: number; // 0 to 5
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSugarFree?: boolean;
  flavorNotes: string[];
  bestPairing: string;
  brewingStory: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // --- SIGNATURE CHAIS ---
  {
    id: 'kulhad-masala-chai',
    name: 'Kulhad Masala Chai',
    hindiName: 'कुल्हड़ मसाला चाय',
    category: 'chai',
    price: 20,
    description: 'Our crown jewel. Full-bodied Assam tea slow-simmered with freshly pounded green cardamom, dry ginger, cloves, and cinnamon, served in an artisanal terracotta kulhad.',
    image: '/menu/kulhad-masala-chai.jpg',
    spiceLevel: 4,
    sweetnessLevel: 3,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Earthy Clay', 'Pounded Ginger', 'Green Cardamom', 'Creamy Froth'],
    bestPairing: 'Freshly Baked Bun Maska',
    brewingStory: 'Brewed for 18 minutes in traditional heavy-bottom copper vessel to extract full botanical essence.'
  },
  {
    id: 'gud-chai',
    name: 'Desi Gud Chai',
    hindiName: 'देसी गुड़ चाय',
    category: 'chai',
    price: 20,
    description: 'Traditional organic sugarcane jaggery infused tea. Naturally mineral-rich, warm, soothing, and prepared with a time-honored technique that never curdles.',
    image: '/menu/gud-chai.jpg',
    spiceLevel: 3,
    sweetnessLevel: 4,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Smoky Caramel', 'Black Pepper', 'Organic Jaggery', 'Nutmeg'],
    bestPairing: 'Crispy Samosa',
    brewingStory: 'Made using chemical-free Kolhapur jaggery blended at the precise cooling curve.'
  },
  {
    id: 'rose-tea',
    name: 'Royal Rose Tea',
    hindiName: 'गुलाब चाय',
    category: 'chai',
    price: 20,
    description: 'A fragrant floral royal brew infused with sun-dried Damascus rose petals and sweet spices. A rejuvenating sensory indulgence.',
    image: '/menu/rose-tea.jpg',
    spiceLevel: 1,
    sweetnessLevel: 3,
    isPopular: false,
    isVegetarian: true,
    flavorNotes: ['Damascus Rose', 'Fennel Seed', 'Subtle Cardamom'],
    bestPairing: 'Osmania Butter Biscuit',
    brewingStory: 'Sun-cured rose petals from Pushkar steeped alongside delicate high-altitude CTC leaves.'
  },
  {
    id: 'chocolate-tea',
    name: 'Artisan Chocolate Tea',
    hindiName: 'चॉकलेट चाय',
    category: 'chai',
    price: 20,
    description: 'A velvet fusion of roasted cocoa nibs and robust kadak Indian chai. Rich, chocolatey warmth loved by all generations.',
    image: '/menu/chocolate-tea.jpg',
    spiceLevel: 1,
    sweetnessLevel: 4,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Dark Cocoa', 'Roasted Malt', 'Silky Milk Cream'],
    bestPairing: 'Khari Puff',
    brewingStory: 'Pure cocoa powder slow-whipped into simmering milk tea for a luxurious velvety mouthfeel.'
  },
  {
    id: 'sugar-free-chai',
    name: 'Sugar Free Masala Chai',
    hindiName: 'शुगर फ्री चाय',
    category: 'chai',
    price: 20,
    description: 'Guilt-free indulgence crafted for wellness conscious tea lovers. All the bold masala spices and robust tea aroma, zero added sugar.',
    image: '/menu/sugar-free-chai.jpg',
    spiceLevel: 4,
    sweetnessLevel: 0,
    isPopular: false,
    isVegetarian: true,
    isSugarFree: true,
    flavorNotes: ['Bold Spices', 'Pure CTC Tannin', 'Aromatic Clove'],
    bestPairing: 'Multi-grain Khari',
    brewingStory: 'Unsweetened extract allowing the natural spice oils to take center stage.'
  },
  {
    id: 'tulsi-tea',
    name: 'Ayurvedic Tulsi Tea',
    hindiName: 'तुलसी चाय',
    category: 'chai',
    price: 20,
    description: 'Holy basil leaves slow-steeped with black pepper and ginger. An immunity-boosting revitalizer rooted in centuries of Ayurvedic wisdom.',
    image: '/menu/tulsi-tea.jpg',
    spiceLevel: 4,
    sweetnessLevel: 2,
    isPopular: false,
    isVegetarian: true,
    flavorNotes: ['Rama Tulsi', 'Crushed Peppercorn', 'Warm Ginger Root'],
    bestPairing: 'Butter Toast',
    brewingStory: 'Hand-plucked fresh holy basil leaves blended to relieve daily fatigue and uplift energy.'
  },
  {
    id: 'green-tea',
    name: 'Himalayan Green Tea',
    hindiName: 'ग्रीन टी',
    category: 'chai',
    price: 20,
    description: 'Whole leaf green tea handpicked from misty Himalayan slopes. Light, vegetative, and packed with active catechins and antioxidants.',
    image: '/menu/green-tea.jpg',
    spiceLevel: 0,
    sweetnessLevel: 0,
    isPopular: false,
    isVegetarian: true,
    isSugarFree: true,
    flavorNotes: ['Crisp Green Herbs', 'Spring Blossoms', 'Clean Finish'],
    bestPairing: 'Roasted Makhana',
    brewingStory: 'Gently steamed virgin green tea leaves steeped at 80°C to preserve delicate nutrients.'
  },
  {
    id: 'black-tea',
    name: 'Classic Kadak Black Tea',
    hindiName: 'कड़क ब्लैक टी',
    category: 'chai',
    price: 20,
    description: 'Pure, uncompromising Assam CTC black tea with a splash of fresh lemon. Bold copper liquor with brisk invigorating clarity.',
    image: '/menu/black-tea.jpg',
    spiceLevel: 2,
    sweetnessLevel: 1,
    isPopular: false,
    isVegetarian: true,
    isSugarFree: true,
    flavorNotes: ['Malty Assam', 'Zesty Citrus', 'Bold Tannin'],
    bestPairing: 'Spicy Mixture',
    brewingStory: 'Direct single-estate harvest brewed with brisk filtration for supreme clarity.'
  },

  // --- RICH SHAKES & COLD DELIGHTS ---
  {
    id: 'badam-kesar-milk',
    name: 'Badam Kesar Milk',
    hindiName: 'बादाम केसर दूध',
    category: 'shakes',
    price: 30,
    description: 'Pure buffalo milk simmered with Kashmiri saffron strands, crushed roasted almonds, pistachio slivers, and cardamom essence.',
    image: '/menu/badam-kesar-milk.jpg',
    spiceLevel: 1,
    sweetnessLevel: 4,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Kashmiri Kesar', 'Crushed Almonds', 'Creamy Mawa', 'Green Cardamom'],
    bestPairing: 'Royal Maska Bun',
    brewingStory: 'Slow-reduced milk infused overnight with pure saffron stigmata for an authentic golden hue.'
  },
  {
    id: 'cold-coffee',
    name: 'Thick Cold Coffee',
    hindiName: 'कोल्ड कॉफी',
    category: 'shakes',
    price: 30,
    description: 'Creamy, frothy iced coffee blended with thick dairy milk and dark roasted chicory-infused espresso. Refreshingly chilled.',
    image: '/menu/cold-coffee.jpg',
    spiceLevel: 0,
    sweetnessLevel: 4,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Dark Roast Arabica', 'Frothy Cream', 'Dark Chocolate Drizzle'],
    bestPairing: 'Chocolate Cream Roll',
    brewingStory: 'Chilled overnight espresso reduction vigorously whipped into a thick velvety shake.'
  },
  {
    id: 'oreo-shake',
    name: 'Crunchy Oreo Shake',
    hindiName: 'ओरियो शेक',
    category: 'shakes',
    price: 30,
    description: 'Thick vanilla milk shake blended with crunchy Oreo cookies, crowned with dark biscuit crumbles and creamy chocolate drizzle.',
    image: '/menu/oreo-shake.jpg',
    spiceLevel: 0,
    sweetnessLevel: 5,
    isPopular: false,
    isVegetarian: true,
    flavorNotes: ['Cookies & Cream', 'Vanilla Bean', 'Dark Cocoa Crunch'],
    bestPairing: 'Fresh Puff Pastry',
    brewingStory: 'Triple-blended with whole milk ice and crunchy cookies for texture in every sip.'
  },
  {
    id: 'chocolate-milk-shake',
    name: 'Belgian Chocolate Shake',
    hindiName: 'चॉकलेट मिल्क शेक',
    category: 'shakes',
    price: 30,
    description: 'Decadent chocolate shake prepared with premium melted cocoa syrup, rich chilled milk, and a dusting of shaved chocolate.',
    image: '/menu/chocolate-milk-shake.jpg',
    spiceLevel: 0,
    sweetnessLevel: 5,
    isPopular: false,
    isVegetarian: true,
    flavorNotes: ['Deep Chocolate', 'Silky Fudge', 'Creamy Milk'],
    bestPairing: 'Butter Toast',
    brewingStory: 'Created using handcrafted chocolate ganache blended chilled.'
  },
  {
    id: 'mango-milkshake',
    name: 'Alphonso Mango Milkshake',
    hindiName: 'आम्रस मैंगो शेक',
    category: 'shakes',
    price: 30,
    description: 'Luscious Konkan Ratnagiri Alphonso mango pulp churned with thick creamy milk. Pure tropical bliss in every golden drop.',
    image: '/menu/mango-milkshake.jpg',
    spiceLevel: 0,
    sweetnessLevel: 4,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Ripe Alphonso Mango', 'Sweet Cream', 'Cardamom Dusting'],
    bestPairing: 'Sweet Khari',
    brewingStory: 'Made exclusively from 100% natural Alphonso puree with no artificial syrups.'
  },

  // --- DESI SHARBAT COOLERS ---
  {
    id: 'shahi-thandai',
    name: 'Royal Shahi Thandai',
    hindiName: 'शाही ठंडाई',
    category: 'sharbats',
    price: 30,
    description: 'Ancient Ayurvedic cooling nectar crafted with ground almonds, fennel seeds, watermelon seeds, rose petals, black pepper, and saffron.',
    image: '/menu/shahi-thandai.jpg',
    spiceLevel: 2,
    sweetnessLevel: 4,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Cooling Fennel', 'Poppy Seeds', 'Kashmiri Saffron', 'Rosewater'],
    bestPairing: 'Kaju Katli',
    brewingStory: 'Ground on stone sil-batta tradition to preserve volatile aromatic botanical oils.'
  },
  {
    id: 'masala-peru-sharbat',
    name: 'Masala Peru Sharbat (Guava Cooler)',
    hindiName: 'मसाला पेरू शरबत',
    category: 'sharbats',
    price: 30,
    description: 'Fresh pink guava nectar dusted with our signature roasted cumin, red chili rock salt, and mint. Sweet, tangy, and refreshingly spicy.',
    image: '/menu/masala-peru-sharbat.jpg',
    spiceLevel: 3,
    sweetnessLevel: 3,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Pink Guava', 'Kala Namak', 'Roasted Jeera', 'Chili Rim'],
    bestPairing: 'Hot Samosa',
    brewingStory: 'Inspired by the street-side spiced guavas of Maharashtra, crafted into a chilled nectar.'
  },
  {
    id: 'kala-khatta',
    name: 'Mumbai Kala Khatta Cooler',
    hindiName: 'काला खट्टा शरबत',
    category: 'sharbats',
    price: 30,
    description: 'Iconic nostalgic jamun plum cooler with black salt, roasted spices, and zesty fresh lime. Sweet, sour, and intensely refreshing.',
    image: '/menu/kala-khatta.jpg',
    spiceLevel: 2,
    sweetnessLevel: 3,
    isPopular: false,
    isVegetarian: true,
    flavorNotes: ['Jamun Plum', 'Black Salt', 'Lemon Zest', 'Chaat Masala'],
    bestPairing: 'Vada Pav',
    brewingStory: 'Pure fruit syrup reduction with Ayurvedic black rock salt.'
  },
  {
    id: 'nimbu-sharbat',
    name: 'Desi Masala Nimbu Sharbat',
    hindiName: 'नींबू मसाला शरबत',
    category: 'sharbats',
    price: 30,
    description: 'Fresh hand-squeezed sun-ripened lemons shaken with cold well water, rock salt, crushed mint leaves, and roasted cumin.',
    image: '/menu/nimbu-sharbat.jpg',
    spiceLevel: 1,
    sweetnessLevel: 3,
    isPopular: false,
    isVegetarian: true,
    flavorNotes: ['Tangy Citrus', 'Fresh Mint', 'Roasted Cumin', 'Himalayan Pink Salt'],
    bestPairing: 'Khari Biscuits',
    brewingStory: 'Instant natural electrolyte booster handcrafted with zero preservatives.'
  },

  // --- CRISPY BAKERY & SNACKS ---
  {
    id: 'bun-maska',
    name: 'Irani Special Bun Maska',
    hindiName: 'ईरानी बन मस्का',
    category: 'snacks',
    price: 35,
    description: 'Ultra-soft pillowy sweet bun generously slathered with wholesome Amul white butter and a hint of tutti-frutti. Dip in hot chai for heaven.',
    image: '/menu/bun-maska.jpg',
    spiceLevel: 0,
    sweetnessLevel: 2,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Pillowy Bread', 'Cultured Butter', 'Sweet Tutti Frutti'],
    bestPairing: 'Kulhad Masala Chai',
    brewingStory: 'Freshly baked daily at 4:30 AM using our signature slow-fermented soft milk dough.'
  },
  {
    id: 'vada-pav',
    name: 'Authentic Pune Batata Vada Pav',
    hindiName: 'पुणेरी वड़ा पाव',
    category: 'snacks',
    price: 30,
    description: 'Golden spiced potato fritter coated in crisp besan batter, tucked into soft pav with spicy garlic dry chutney and fried green chili.',
    image: '/menu/vada-pav.jpg',
    spiceLevel: 5,
    sweetnessLevel: 0,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Mustard Tempering', 'Garlic Chutney', 'Crispy Batter', 'Spicy Green Chili'],
    bestPairing: 'Desi Gud Chai',
    brewingStory: 'Pounded local potatoes tempered with fresh curry leaves and stone-ground turmeric.'
  },
  {
    id: 'samosa-plate',
    name: 'Crispy Punjabi Samosa (2 Pcs)',
    hindiName: 'क्रिस्पी समोसा',
    category: 'snacks',
    price: 40,
    description: 'Flaky golden pastry triangles filled with spiced potatoes, green peas, and whole coriander seeds, served with sweet tamarind and spicy mint chutneys.',
    image: '/menu/samosa-plate.jpg',
    spiceLevel: 4,
    sweetnessLevel: 1,
    isPopular: true,
    isVegetarian: true,
    flavorNotes: ['Flaky Ajwain Crust', 'Spiced Green Peas', 'Coriander Seeds'],
    bestPairing: 'Kulhad Masala Chai',
    brewingStory: 'Rolled thin with desi ghee moyan and double-fried for crackling crispiness.'
  },
  {
    id: 'khari-biscuits',
    name: 'Golden Flaky Khari (4 Pcs)',
    hindiName: 'खारी बिस्कुट',
    category: 'snacks',
    price: 25,
    description: 'Thousand-layer flaky puff pastry biscuits baked to golden perfection. Light as a feather, delicately salted, made for dipping in cutting chai.',
    image: '/menu/khari-biscuits.jpg',
    spiceLevel: 0,
    sweetnessLevel: 1,
    isPopular: false,
    isVegetarian: true,
    flavorNotes: ['Flaky Puff Layers', 'Butter Flavour', 'Delicate Salt'],
    bestPairing: 'Royal Rose Tea',
    brewingStory: 'Laminated with pure ghee layers and oven-baked at 210°C.'
  }
];

export const BRAND_STATS = [
  { label: 'Daily Happy Sips', value: '75,000+', icon: 'Coffee' },
  { label: 'Outlets Across India', value: '120+', icon: 'Store' },
  { label: 'Signature Spices', value: '100% Pure', icon: 'Sparkles' },
  { label: 'Customer Love Rating', value: '4.9 ★', icon: 'Heart' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rohit Sharma',
    city: 'Pune, Maharashtra',
    role: 'Food Critic & Daily Regular',
    rating: 5,
    comment: 'The authentic kulhad chai here is unmatched. You can taste the genuine pounded ginger and fresh green cardamom. The aroma hits you before the cup even reaches your table!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Pooja Kulkarni',
    city: 'Mumbai, Maharashtra',
    role: 'Architect',
    rating: 5,
    comment: 'Gud Chai here has become my daily ritual before heading to office. The natural jaggery blend gives so much energy without any heavy sugar crash. And that Bun Maska is heaven!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Vikram Singhania',
    city: 'Lucknow, UP',
    role: 'Franchise Partner (Outlet #42)',
    rating: 5,
    comment: 'Opening a Chai Amrittulya franchise was the best business decision I made. The footfall from day one was staggering. Complete backend spice mix supply and brand support is top tier.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const OUTLET_LOCATIONS = [
  { city: 'Pune', state: 'Maharashtra', count: '38 Outlets', address: 'FC Road, Deccan, Kothrud, Hinjewadi & Viman Nagar' },
  { city: 'Mumbai', state: 'Maharashtra', count: '24 Outlets', address: 'Dadar, Thane, Bandra West, Andheri & Borivali' },
  { city: 'Delhi NCR', state: 'Delhi', count: '18 Outlets', address: 'Connaught Place, Noida Sector 18, Cyber City Gurugram' },
  { city: 'Lucknow', state: 'Uttar Pradesh', count: '12 Outlets', address: 'Hazratganj, Gomti Nagar, Alambagh' },
  { city: 'Ahmedabad', state: 'Gujarat', count: '14 Outlets', address: 'CG Road, SG Highway, Prahlad Nagar' },
  { city: 'Bengaluru', state: 'Karnataka', count: '10 Outlets', address: 'Indiranagar, Koramangala, Whitefield' },
];
