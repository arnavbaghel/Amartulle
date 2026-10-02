import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  trayCount: number;
  onOpenTray: () => void;
  onOpenFranchise: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ trayCount, onOpenTray, onOpenFranchise }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Royal Menu', href: '#menu' },
    { name: 'Brew Your Chai', href: '#customizer' },
    { name: 'Our Heritage', href: '#story' },
    { name: 'Franchise ROI', href: '#franchise' },
    { name: 'Outlets', href: '#locations' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120705]/85 backdrop-blur-md border-b border-[#F59E0B]/20 py-3 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-[#0C0605]/90 via-[#0C0605]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Chai Amrittulya"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heritage tracking-wider text-xl sm:text-2xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                AMRITTULYA
              </span>
              <span className="text-[10px] sm:text-xs text-[#F59E0B] tracking-[0.25em] uppercase font-semibold">
                Authentic Indian Tea
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#F9F6F0]/80 hover:text-[#F59E0B] hover:bg-[#F59E0B]/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Live Chai Tray Button */}
            <button
              onClick={onOpenTray}
              className="relative p-2.5 rounded-full bg-[#200F0A] hover:bg-[#34160E] border border-[#F59E0B]/30 hover:border-[#F59E0B] transition-all text-[#F9F6F0] flex items-center justify-center cursor-pointer group shadow-lg"
              title="Open Chai Tray"
              aria-label="View Chai Tray"
            >
              <ShoppingBag className="w-5 h-5 text-[#F59E0B] transition-transform group-hover:scale-110" />
              {trayCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-black font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {trayCount}
                </span>
              )}
            </button>

            {/* Franchise Consult CTA */}
            <button
              onClick={onOpenFranchise}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-black bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] hover:from-[#FBBF24] hover:to-[#B45309] rounded-full shadow-lg shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/45 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Franchise Consult</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#200F0A] border border-[#F59E0B]/20 text-[#F9F6F0] hover:text-[#F59E0B]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#120705]/98 border-b border-[#F59E0B]/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-[#F9F6F0] hover:text-[#F59E0B] hover:bg-[#F59E0B]/10 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#F59E0B]/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFranchise();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-black bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-xl shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Apply for Franchise Consult</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
