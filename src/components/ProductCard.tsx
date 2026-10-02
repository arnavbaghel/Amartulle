import React, { useState, useRef } from 'react';
import { Plus, Eye, Flame, Sparkles, Heart } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface ProductCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onQuickView: (item: MenuItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onAddToCart, onQuickView }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isLiked, setIsLiked] = useState(false);

  // 3D Perspective Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const isHotBeverage = item.category === 'chai';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative rounded-2xl bg-[#170B08] border border-[#F59E0B]/20 hover:border-[#F59E0B]/60 p-4 transition-colors duration-300 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#F59E0B]/10 flex flex-col justify-between overflow-hidden"
    >
      {/* Specular Radial Sheen Reflection on 3D Tilt */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.18), transparent 65%)`,
        }}
      />

      {/* Top Badges & Favorite Toggle */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          {item.isPopular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-black text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              Bestseller
            </span>
          )}
          {item.isSugarFree && (
            <span className="px-2 py-0.5 rounded-full bg-[#059669]/20 border border-[#059669]/40 text-[#34D399] text-[10px] font-bold uppercase tracking-wider">
              Sugar Free
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`p-1.5 rounded-full border transition-colors cursor-pointer ${
            isLiked
              ? 'bg-red-500/20 border-red-500 text-red-400'
              : 'bg-[#25100B] border-[#F59E0B]/20 text-[#F9F6F0]/50 hover:text-red-400'
          }`}
          title="Save to favorites"
          aria-label="Save to favorites"
        >
          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Image Container with Floating Steam and Depth Sheen */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-[#230F0A] flex items-center justify-center">
        {isHotBeverage && (
          <div
            className={`absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-20 pointer-events-none z-20 flex justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-90' : 'opacity-35'
            }`}
          >
            <svg
              className="w-5 h-16 text-[#F59E0B] animate-steam-1"
              viewBox="0 0 30 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <path d="M15 95 Q 5 65 20 45 T 15 5" />
            </svg>
            <svg
              className="w-5 h-20 text-[#FDE68A] animate-steam-2 mx-1"
              viewBox="0 0 30 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            >
              <path d="M15 95 Q 25 70 10 50 T 15 5" />
            </svg>
            <svg
              className="w-5 h-16 text-[#F59E0B] animate-steam-3"
              viewBox="0 0 30 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <path d="M15 95 Q 5 70 20 50 T 15 5" />
            </svg>
          </div>
        )}

        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#170B08] via-transparent to-transparent opacity-80" />

        <button
          onClick={() => onQuickView(item)}
          className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/75 border border-[#F59E0B] text-[#F59E0B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer backdrop-blur-sm"
          title="Quick View Details"
        >
          <Eye className="w-5 h-5" />
        </button>

        <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-lg bg-[#0C0605]/85 border border-[#F59E0B]/30 backdrop-blur-md">
          <span className="font-heritage text-lg font-bold text-[#F59E0B]">
            ₹{item.price}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-1 mb-1">
            <h4 className="font-heritage text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors line-clamp-1">
              {item.name}
            </h4>
          </div>

          {item.hindiName && (
            <p className="text-xs text-[#F59E0B]/80 font-medium mb-1.5 tracking-wide">
              {item.hindiName}
            </p>
          )}

          <p className="text-xs text-[#F9F6F0]/70 line-clamp-2 mb-3 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {item.flavorNotes.slice(0, 3).map((note, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-[#23100B] text-[10px] font-medium text-[#FBBF24]/90 border border-[#F59E0B]/15"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-[#F59E0B]/15 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Flame
              className={`w-3.5 h-3.5 ${
                item.spiceLevel > 0 ? 'text-[#EA580C]' : 'text-neutral-600'
              }`}
            />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-1.5 h-3 rounded-xs ${
                    level <= item.spiceLevel
                      ? 'bg-gradient-to-t from-[#EA580C] to-[#F59E0B]'
                      : 'bg-[#29140D]'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(item)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#29130D] hover:bg-[#F59E0B] border border-[#F59E0B]/30 hover:border-[#F59E0B] text-[#F59E0B] hover:text-black font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer shadow-md hover:shadow-[#F59E0B]/20 active:scale-95 group/btn"
          >
            <Plus className="w-3.5 h-3.5 transition-transform group-hover/btn:rotate-90" />
            <span>Add to Tray</span>
          </button>
        </div>
      </div>
    </div>
  );
};
