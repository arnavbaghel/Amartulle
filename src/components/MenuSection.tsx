import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Coffee, CupSoda, Cookie, GlassWater, Flame } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { ProductCard } from './ProductCard';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onQuickView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSugarFree, setFilterSugarFree] = useState(false);
  const [filterPopular, setFilterPopular] = useState(false);

  const categories = [
    { id: 'all', label: 'All Items', icon: Sparkles },
    { id: 'chai', label: 'Signature Chais', icon: Coffee },
    { id: 'shakes', label: 'Thick Shakes', icon: CupSoda },
    { id: 'sharbats', label: 'Desi Sharbats', icon: GlassWater },
    { id: 'snacks', label: 'Hot Bakery Snacks', icon: Cookie },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesFlavor = item.flavorNotes.some((n) => n.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesFlavor) return false;
      }
      if (filterSugarFree && !item.isSugarFree) {
        return false;
      }
      if (filterPopular && !item.isPopular) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, filterSugarFree, filterPopular]);

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200F0A] border border-[#F59E0B]/30 text-[#F59E0B] text-xs uppercase tracking-widest font-semibold mb-3">
          <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Authentic Indian Heritage Menu</span>
        </div>
        <h2 className="font-heritage text-3xl sm:text-5xl font-bold text-white mb-4">
          CRAFTED WITH SOUL, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EA580C]">
            SERVED WITH TRADITION
          </span>
        </h2>
        <p className="text-sm sm:text-base text-[#F9F6F0]/75">
          From our legendary terracotta kulhad chais simmered with pounded spices to buttery soft Irani bun maska and nostalgic coolers.
        </p>
      </div>

      <div className="mb-10 space-y-4">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black shadow-[#F59E0B]/20 scale-105'
                    : 'bg-[#180A07] hover:bg-[#25100B] text-[#F9F6F0]/80 hover:text-white border border-[#F59E0B]/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#F59E0B]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto pt-2">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F59E0B]/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chai, samosa, shake..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#180A07] border border-[#F59E0B]/25 focus:border-[#F59E0B] focus:outline-none text-xs sm:text-sm text-white placeholder-[#F9F6F0]/40 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#F9F6F0]/50 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => setFilterPopular(!filterPopular)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                filterPopular
                  ? 'bg-[#EA580C]/20 border-[#EA580C] text-[#FB923C]'
                  : 'bg-[#180A07] border-[#F59E0B]/20 text-[#F9F6F0]/60 hover:text-white'
              }`}
            >
              ★ Bestsellers Only
            </button>

            <button
              onClick={() => setFilterSugarFree(!filterSugarFree)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                filterSugarFree
                  ? 'bg-[#059669]/20 border-[#059669] text-[#34D399]'
                  : 'bg-[#180A07] border-[#F59E0B]/20 text-[#F9F6F0]/60 hover:text-white'
              }`}
            >
              🌿 Sugar-Free
            </button>
          </div>
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-[#140805] rounded-3xl border border-[#F59E0B]/15">
          <Coffee className="w-12 h-12 text-[#F59E0B]/40 mx-auto mb-3" />
          <h3 className="font-heritage text-xl font-bold text-white mb-2">
            No Delicacies Found
          </h3>
          <p className="text-xs sm:text-sm text-[#F9F6F0]/60 max-w-sm mx-auto mb-4">
            We couldn’t find any items matching "{searchQuery}". Try searching for cardamom, ginger, or clear filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setFilterSugarFree(false);
              setFilterPopular(false);
            }}
            className="px-5 py-2 rounded-full bg-[#F59E0B] text-black font-semibold text-xs cursor-pointer hover:bg-[#FBBF24]"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
