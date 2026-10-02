import React, { useState } from 'react';
import { X, Flame, Sparkles, Heart, Plus, Minus, ShoppingBag, Utensils } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface QuickViewModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#140805] border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-[#F59E0B] text-white hover:text-black transition-colors cursor-pointer border border-[#F59E0B]/30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-1/2 relative bg-[#1E0D08] min-h-[260px] md:min-h-full flex items-center justify-center overflow-hidden">
          {item.category === 'chai' && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-24 pointer-events-none z-20 flex justify-center opacity-85">
              <svg
                className="w-6 h-20 text-[#F59E0B] animate-steam-1"
                viewBox="0 0 30 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <path d="M15 95 Q 5 65 20 45 T 15 5" />
              </svg>
              <svg
                className="w-6 h-24 text-[#FDE68A] animate-steam-2 mx-1"
                viewBox="0 0 30 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              >
                <path d="M15 95 Q 25 70 10 50 T 15 5" />
              </svg>
            </div>
          )}

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#140805] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#140805]" />

          <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-xl bg-[#0C0605]/90 border border-[#F59E0B]/40 backdrop-blur-md">
            <span className="text-xs text-[#F59E0B] uppercase tracking-widest font-semibold block">
              Price
            </span>
            <span className="font-heritage text-2xl font-bold text-white">
              ₹{item.price}
            </span>
          </div>
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-[10px] font-bold uppercase tracking-wider">
                {item.category.toUpperCase()}
              </span>
              {item.isPopular && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#EA580C]">
                  <Sparkles className="w-3 h-3" /> Popular
                </span>
              )}
            </div>

            <h3 className="font-heritage text-2xl font-bold text-white mb-1">
              {item.name}
            </h3>
            {item.hindiName && (
              <p className="text-sm text-[#F59E0B] font-medium mb-3">
                {item.hindiName}
              </p>
            )}

            <p className="text-xs sm:text-sm text-[#F9F6F0]/80 leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="p-3 rounded-xl bg-[#200E09] border border-[#F59E0B]/15 mb-4">
              <div className="text-[11px] font-semibold text-[#F59E0B] flex items-center gap-1.5 mb-1">
                <Utensils className="w-3.5 h-3.5" />
                <span>Artisan Brewing Craft</span>
              </div>
              <p className="text-xs text-[#F9F6F0]/70 italic">
                "{item.brewingStory}"
              </p>
            </div>

            <div className="space-y-2.5 mb-4">
              <div>
                <span className="text-[11px] font-semibold text-[#F9F6F0]/60 block mb-1">
                  Aroma & Botanical Notes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.flavorNotes.map((note, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-[#2A130C] border border-[#F59E0B]/20 text-xs text-[#FBBF24]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#F59E0B]/15 flex items-center justify-between text-xs">
                <span className="text-[#F9F6F0]/70">Best paired with:</span>
                <span className="font-semibold text-[#F59E0B] bg-[#23100B] px-2 py-0.5 rounded-md">
                  {item.bestPairing}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#F59E0B]/20 flex items-center gap-4">
            <div className="flex items-center border border-[#F59E0B]/30 rounded-xl bg-[#200E09]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-[#F9F6F0]/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 font-semibold text-sm text-white font-mono">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-[#F9F6F0]/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#B45309] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>Add ₹{item.price * quantity} to Tray</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
