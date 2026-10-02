import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MenuItem } from '../data/menuData';

export interface TrayItem {
  item: MenuItem;
  quantity: number;
}

interface ChaiTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: TrayItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearTray: () => void;
  onExploreMenu: () => void;
}

export const ChaiTrayDrawer: React.FC<ChaiTrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearTray,
  onExploreMenu,
}) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, current) => sum + current.item.price * current.quantity, 0);
  const taxes = Math.round(subtotal * 0.05);
  const packagingFee = 0;
  const finalTotal = subtotal + taxes + packagingFee;

  const handleCheckout = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#F59E0B', '#EA580C', '#FDE68A', '#10B981'],
    });

    setOrderPlaced(true);
    setTimeout(() => {
      onClearTray();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#130704] border-l border-[#F59E0B]/25 p-6 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between pb-4 border-b border-[#F59E0B]/20">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="font-heritage text-xl font-bold text-white">
                Your Chai Tray
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-bold">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#200E09] hover:bg-[#F59E0B] text-white hover:text-black transition-colors cursor-pointer border border-[#F59E0B]/20"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {orderPlaced ? (
              <div className="py-16 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#059669]/20 border-2 border-[#059669] text-[#34D399] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-heritage text-2xl font-bold text-white">
                  Chai Order Simulating!
                </h4>
                <p className="text-xs text-[#F9F6F0]/80 max-w-xs mx-auto leading-relaxed">
                  Your token has been generated! Show this token at any Chai Amrittulya counter to collect piping hot earthen kulhads.
                </p>
                <div className="p-4 rounded-xl bg-[#200F0A] border border-[#F59E0B]/30 max-w-xs mx-auto text-left space-y-1 font-mono text-xs">
                  <div className="text-[#F59E0B] font-bold">TOKEN: #AMT-7892</div>
                  <div className="text-white">Amount: ₹{finalTotal}</div>
                  <div className="text-[#F9F6F0]/60">Status: Brewing In Copper Handi</div>
                </div>
                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#F59E0B] text-black font-bold text-xs cursor-pointer hover:bg-[#FBBF24]"
                >
                  Done
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#200E09] text-[#F59E0B]/50 flex items-center justify-center mx-auto border border-[#F59E0B]/20">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="font-heritage text-lg font-bold text-white">
                  Your Tray Is Empty
                </h4>
                <p className="text-xs text-[#F9F6F0]/60 max-w-xs mx-auto">
                  Add some hot Kulhad Chai, freshly baked Bun Maska, or refreshing Shahi Thandai to get started!
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreMenu();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F59E0B] text-black font-bold text-xs shadow-md hover:bg-[#FBBF24] cursor-pointer"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-[#1A0B07] border border-[#F59E0B]/20 flex items-center gap-3 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#F59E0B]/30"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-heritage text-sm font-bold text-white truncate">
                      {item.name}
                    </h5>
                    <div className="text-xs text-[#F59E0B] font-semibold mt-0.5">
                      ₹{item.price} each
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#F59E0B]/30 rounded-lg bg-[#25100B]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-[#F9F6F0]/70 hover:text-white cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-mono text-xs font-bold text-white">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-[#F9F6F0]/70 hover:text-white cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-heritage text-sm font-bold text-white">
                        ₹{item.price * quantity}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-[#F9F6F0]/40 hover:text-red-400 transition-colors cursor-pointer"
                    title="Remove item"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {!orderPlaced && items.length > 0 && (
            <div className="pt-4 border-t border-[#F59E0B]/20 space-y-3">
              <div className="space-y-1.5 text-xs text-[#F9F6F0]/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span className="font-mono text-white font-semibold">₹{taxes}</span>
                </div>
                <div className="flex justify-between text-[#34D399]">
                  <span>Biodegradable Kulhad Packaging</span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#F59E0B]/15">
                  <span className="font-heritage">Final Amount</span>
                  <span className="font-heritage text-lg text-[#F59E0B]">₹{finalTotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] hover:from-[#FBBF24] hover:to-[#B45309] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#F59E0B]/25 transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Simulate Order (₹{finalTotal})</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
