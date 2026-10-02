import React, { useState } from 'react';
import { Star, MapPin, Store, Quote, ChevronRight, Navigation } from 'lucide-react';
import { TESTIMONIALS, OUTLET_LOCATIONS } from '../data/menuData';

export const TestimonialsAndOutlets: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(OUTLET_LOCATIONS[0].city);

  const currentOutlet = OUTLET_LOCATIONS.find((o) => o.city === selectedCity) || OUTLET_LOCATIONS[0];

  return (
    <section id="locations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 relative">
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold block mb-2">
            The Amrittulya Family
          </span>
          <h2 className="font-heritage text-3xl sm:text-5xl font-bold text-white mb-3">
            LOVED BY OVER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EA580C]">
              1 MILLION SIPPERS
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#F9F6F0]/70">
            Real stories from our beloved daily chai drinkers and thriving franchise partners across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#160B08] border border-[#F59E0B]/20 hover:border-[#F59E0B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#F9F6F0]/85 italic mb-6 leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#F59E0B]/15">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#F59E0B]/40"
                />
                <div>
                  <h4 className="font-heritage text-sm font-bold text-white">
                    {t.name}
                  </h4>
                  <div className="text-[11px] text-[#F59E0B]">
                    {t.role} • {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-[#170A07] border border-[#F59E0B]/25 p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#F59E0B]/15">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#F59E0B] font-bold uppercase tracking-wider mb-2">
              <Store className="w-3.5 h-3.5" />
              <span>National Presence</span>
            </div>
            <h3 className="font-heritage text-2xl sm:text-4xl font-bold text-white">
              FIND YOUR NEAREST OUTLET
            </h3>
            <p className="text-xs sm:text-sm text-[#F9F6F0]/70 mt-1">
              Serving steaming kulhad cups across 120+ prime locations in 6 major states.
            </p>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-[#23100B] border border-[#F59E0B]/30 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#F59E0B]" />
            <div>
              <div className="font-heritage text-base font-bold text-white">120+ Outlets</div>
              <div className="text-[10px] text-[#F59E0B]">Open 6:00 AM - 11:30 PM Daily</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-8">
          {OUTLET_LOCATIONS.map((loc) => {
            const isSelected = selectedCity === loc.city;
            return (
              <button
                key={loc.city}
                onClick={() => setSelectedCity(loc.city)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#F59E0B] text-black shadow-md shadow-[#F59E0B]/30 scale-105'
                    : 'bg-[#200E09] hover:bg-[#2C140D] text-[#F9F6F0]/80 border border-[#F59E0B]/15'
                }`}
              >
                <span>{loc.city}</span>
                <span className="ml-1.5 opacity-75 text-[11px]">({loc.count})</span>
              </button>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-[#120705] border border-[#F59E0B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-heritage text-xl font-bold text-white">
                {currentOutlet.city}, {currentOutlet.state}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#059669]/20 text-[#34D399] text-xs font-bold">
                {currentOutlet.count} Active
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F9F6F0]/75">
              <strong>Key Hubs:</strong> {currentOutlet.address}
            </p>
          </div>

          <a
            href={`https://maps.google.com/?q=Chai+Amrittulya+${currentOutlet.city}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#27120B] hover:bg-[#F59E0B] text-[#F59E0B] hover:text-black border border-[#F59E0B]/30 hover:border-[#F59E0B] font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};
