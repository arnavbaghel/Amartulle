import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScrollCanvas } from './components/HeroScrollCanvas';
import { MenuSection } from './components/MenuSection';
import { ChaiCustomizer } from './components/ChaiCustomizer';
import { HeritageStory } from './components/HeritageStory';
import { FranchiseCalculator } from './components/FranchiseCalculator';
import { TestimonialsAndOutlets } from './components/TestimonialsAndOutlets';
import { ChaiTrayDrawer, TrayItem } from './components/ChaiTrayDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { Footer } from './components/Footer';
import { MenuItem } from './data/menuData';

export function App() {
  // Tray State initialized from localStorage if available
  const [trayItems, setTrayItems] = useState<TrayItem[]>(() => {
    try {
      const saved = localStorage.getItem('amrittulya_tray');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync tray items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('amrittulya_tray', JSON.stringify(trayItems));
    } catch (e) {
      console.error('Failed to save tray items', e);
    }
  }, [trayItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add Item to Tray
  const handleAddToCart = (item: MenuItem, quantity: number = 1) => {
    setTrayItems((prev) => {
      const existing = prev.find((t) => t.item.id === item.id);
      if (existing) {
        return prev.map((t) =>
          t.item.id === item.id ? { ...t, quantity: t.quantity + quantity } : t
        );
      }
      return [...prev, { item, quantity }];
    });
    showToast(`Added ${quantity}x ${item.name} to tray!`);
  };

  // Update Quantity in Tray
  const handleUpdateQuantity = (id: string, delta: number) => {
    setTrayItems((prev) =>
      prev
        .map((t) => {
          if (t.item.id === id) {
            const newQty = t.quantity + delta;
            return newQty > 0 ? { ...t, quantity: newQty } : null;
          }
          return t;
        })
        .filter(Boolean) as TrayItem[]
    );
  };

  // Remove Item from Tray
  const handleRemoveItem = (id: string) => {
    setTrayItems((prev) => prev.filter((t) => t.item.id !== id));
  };

  // Clear Tray
  const handleClearTray = () => {
    setTrayItems([]);
  };

  // Smooth Scroll Handlers
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalTrayCount = trayItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0C0605] text-[#F9F6F0] selection:bg-[#F59E0B] selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        trayCount={totalTrayCount}
        onOpenTray={() => setIsTrayOpen(true)}
        onOpenFranchise={() => scrollToSection('franchise')}
      />

      {/* Hero Section with 26-Frame Canvas Scrub Animation */}
      <HeroScrollCanvas
        onExploreMenu={() => scrollToSection('menu')}
        onOpenCustomizer={() => scrollToSection('customizer')}
      />

      {/* Royal Menu Section with Advanced Card Animations */}
      <MenuSection
        onAddToCart={(item: MenuItem) => handleAddToCart(item, 1)}
        onQuickView={(item: MenuItem) => setQuickViewItem(item)}
      />

      {/* Interactive Chai Customizer Simulator */}
      <ChaiCustomizer
        onAddCustomChai={(item: MenuItem) => {
          handleAddToCart(item, 1);
          setIsTrayOpen(true);
        }}
      />

      {/* Heritage & 4 Pillars of Pure Brewing */}
      <HeritageStory />

      {/* Franchise ROI Calculator & Consultation Form */}
      <FranchiseCalculator />

      {/* Customer Voices & Outlets Finder */}
      <TestimonialsAndOutlets />

      {/* Footer */}
      <Footer />

      {/* Slide-over Chai Tray Drawer */}
      <ChaiTrayDrawer
        isOpen={isTrayOpen}
        onClose={() => setIsTrayOpen(false)}
        items={trayItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearTray={handleClearTray}
        onExploreMenu={() => {
          setIsTrayOpen(false);
          scrollToSection('menu');
        }}
      />

      {/* Detailed Quick View Sensory Modal */}
      <QuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#180A07] border border-[#F59E0B] text-white font-medium text-xs sm:text-sm shadow-2xl shadow-black/80 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
