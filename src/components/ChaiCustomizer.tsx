import React, { useState } from 'react';
import { Sparkles, Check, Flame, Coffee, Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface ChaiCustomizerProps {
  onAddCustomChai: (item: MenuItem) => void;
}

export const ChaiCustomizer: React.FC<ChaiCustomizerProps> = ({ onAddCustomChai }) => {
  const [selectedMilk, setSelectedMilk] = useState('buffalo');
  const [selectedSweetener, setSelectedSweetener] = useState('gud');
  const [selectedSpices, setSelectedSpices] = useState<string[]>(['ginger', 'cardamom']);
  const [selectedVessel, setSelectedVessel] = useState('kulhad');

  const milks = [
    { id: 'buffalo', label: 'Rich Buffalo Milk', desc: 'Thick, creamy & authentic', extra: 0 },
    { id: 'cow', label: 'Desi Cow Milk', desc: 'Light, wholesome & gentle', extra: 0 },
    { id: 'oat', label: 'Plant Oat Milk', desc: '100% Vegan & silky', extra: 10 },
    { id: 'none', label: 'Kadak Black Water', desc: 'Pure liquor, zero dairy', extra: 0 },
  ];

  const sweeteners = [
    { id: 'gud', label: 'Organic Desi Gud', desc: 'Unrefined sugarcane jaggery', extra: 0 },
    { id: 'sugar', label: 'Sulphur-Free Cane Sugar', desc: 'Traditional sweet punch', extra: 0 },
    { id: 'stevia', label: 'Sugar-Free Herbal Stevia', desc: '0 Calories sweetness', extra: 5 },
    { id: 'none', label: 'No Sweetener (Unsweetened)', desc: 'Pure botanical herbs', extra: 0 },
  ];

  const spices = [
    { id: 'ginger', label: 'Fresh Adrak (Ginger)', desc: 'Fiery kick & digestion', icon: '🫚', extra: 0 },
    { id: 'cardamom', label: 'Green Elaichi (Cardamom)', desc: 'Sweet fragrance', icon: '🌿', extra: 0 },
    { id: 'clove', label: 'Laung & Dalchini (Clove & Cinnamon)', desc: 'Spiced warmth', icon: '🍂', extra: 0 },
    { id: 'tulsi', label: 'Ayurvedic Holy Tulsi', desc: 'Immunity booster', icon: '🌱', extra: 5 },
    { id: 'kesar', label: 'Kashmiri Kesar (Saffron)', desc: 'Royal golden luxury', icon: '✨', extra: 15 },
  ];

  const vessels = [
    { id: 'kulhad', label: 'Earthen Clay Kulhad', desc: 'Natural earthy aroma (Sondhi Khushboo)', icon: '🏺', extra: 0 },
    { id: 'glass', label: 'Vintage Cutting Glass', desc: 'Bambaiya street nostalgia', icon: '🥛', extra: 0 },
    { id: 'brass', label: 'Regal Brass Cup', desc: 'Royal palace style presentation', icon: '👑', extra: 10 },
  ];

  const toggleSpice = (id: string) => {
    if (selectedSpices.includes(id)) {
      if (selectedSpices.length > 1) {
        setSelectedSpices(selectedSpices.filter((s) => s !== id));
      }
    } else {
      setSelectedSpices([...selectedSpices, id]);
    }
  };

  const basePrice = 20;
  const milkExtra = milks.find((m) => m.id === selectedMilk)?.extra || 0;
  const sweetenerExtra = sweeteners.find((s) => s.id === selectedSweetener)?.extra || 0;
  const spicesExtra = selectedSpices.reduce((acc, sId) => {
    const sp = spices.find((s) => s.id === sId);
    return acc + (sp?.extra || 0);
  }, 0);
  const vesselExtra = vessels.find((v) => v.id === selectedVessel)?.extra || 0;
  const totalPrice = basePrice + milkExtra + sweetenerExtra + spicesExtra + vesselExtra;

  const getCupColor = () => {
    if (selectedMilk === 'none') return 'from-[#78350F] to-[#451A03]';
    if (selectedSpices.includes('kesar')) return 'from-[#F59E0B] via-[#FBBF24] to-[#B45309]';
    if (selectedSweetener === 'gud') return 'from-[#D97706] to-[#92400E]';
    return 'from-[#FBBF24] via-[#D97706] to-[#9A3412]';
  };

  const handleAddCustom = () => {
    const milkName = milks.find((m) => m.id === selectedMilk)?.label;
    const sweetenerName = sweeteners.find((s) => s.id === selectedSweetener)?.label;
    const spiceNames = selectedSpices.map((s) => spices.find((sp) => sp.id === s)?.label.split(' ')[0]).join(', ');
    const vesselName = vessels.find((v) => v.id === selectedVessel)?.label;

    const customItem: MenuItem = {
      id: `custom-chai-${Date.now()}`,
      name: `Custom Signature Brew (${vesselName?.split(' ')[0]})`,
      hindiName: 'आपकी अपनी खास चाय',
      category: 'chai',
      price: totalPrice,
      description: `Tailored with ${milkName}, sweetened with ${sweetenerName}, infused with ${spiceNames}, served in a ${vesselName}.`,
      image: '/menu/kulhad-masala-chai.jpg',
      spiceLevel: selectedSpices.length >= 3 ? 5 : 3,
      sweetnessLevel: selectedSweetener === 'none' ? 0 : 3,
      isVegetarian: true,
      flavorNotes: selectedSpices.map((s) => spices.find((sp) => sp.id === s)?.label.split(' ')[0] || ''),
      bestPairing: 'Fresh Irani Bun Maska',
      brewingStory: 'Freshly customized and boiled in dedicated batch for 7 minutes.'
    };

    onAddCustomChai(customItem);
  };

  return (
    <section id="customizer" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="rounded-3xl bg-gradient-to-b from-[#180A07] to-[#100604] border border-[#F59E0B]/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] text-xs uppercase tracking-wider font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Artisan Chai Laboratory</span>
              </div>
              <h3 className="font-heritage text-3xl sm:text-4xl font-bold text-white mb-2">
                BREW YOUR SIGNATURE AMRITTULYA
              </h3>
              <p className="text-xs sm:text-sm text-[#F9F6F0]/70">
                Everyone has their own secret chai temperament. Customize your dairy base, botanical spices, and vessel to create your perfect personalized kulhad.
              </p>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-2.5">
                Step 1: Choose Dairy / Base
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {milks.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMilk(m.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedMilk === m.id
                        ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-white shadow-md'
                        : 'bg-[#140805] border-[#F59E0B]/15 text-[#F9F6F0]/70 hover:border-[#F59E0B]/40'
                    }`}
                  >
                    <div className="font-bold text-xs">{m.label}</div>
                    <div className="text-[10px] text-[#F9F6F0]/50 mt-0.5">{m.desc}</div>
                    {m.extra > 0 && (
                      <span className="inline-block mt-1 text-[10px] font-semibold text-[#F59E0B]">
                        +₹{m.extra}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-2.5">
                Step 2: Choose Sweetener
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {sweeteners.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSweetener(s.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSweetener === s.id
                        ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-white shadow-md'
                        : 'bg-[#140805] border-[#F59E0B]/15 text-[#F9F6F0]/70 hover:border-[#F59E0B]/40'
                    }`}
                  >
                    <div className="font-bold text-xs">{s.label}</div>
                    <div className="text-[10px] text-[#F9F6F0]/50 mt-0.5">{s.desc}</div>
                    {s.extra > 0 && (
                      <span className="inline-block mt-1 text-[10px] font-semibold text-[#F59E0B]">
                        +₹{s.extra}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-2.5">
                Step 3: Pounded Spices (Select multiple)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {spices.map((sp) => {
                  const isSelected = selectedSpices.includes(sp.id);
                  return (
                    <button
                      key={sp.id}
                      onClick={() => toggleSpice(sp.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#F59E0B]/25 border-[#F59E0B] text-white'
                          : 'bg-[#140805] border-[#F59E0B]/15 text-[#F9F6F0]/70 hover:border-[#F59E0B]/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs">
                          <span>{sp.icon}</span>
                          <span>{sp.label}</span>
                        </div>
                        <div className="text-[10px] text-[#F9F6F0]/50 mt-0.5">{sp.desc}</div>
                      </div>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-[#F59E0B] text-black flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold block mb-2.5">
                Step 4: Drinking Vessel
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {vessels.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVessel(v.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedVessel === v.id
                        ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-white'
                        : 'bg-[#140805] border-[#F59E0B]/15 text-[#F9F6F0]/70 hover:border-[#F59E0B]/40'
                    }`}
                  >
                    <div className="flex items-center gap-1 font-bold text-xs">
                      <span>{v.icon}</span>
                      <span>{v.label}</span>
                    </div>
                    <div className="text-[10px] text-[#F9F6F0]/50 mt-0.5">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-3xl bg-[#1F0C08] border border-[#F59E0B]/40 p-6 flex flex-col items-center shadow-2xl relative">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#F59E0B] mb-4">
                Real-Time Brew Simulation
              </span>

              <div className="relative w-44 h-52 flex flex-col items-center justify-end mb-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-24 pointer-events-none flex justify-center opacity-80">
                  <div className="w-4 h-16 bg-gradient-to-t from-[#F59E0B]/50 to-transparent blur-[3px] rounded-full animate-steam-1" />
                  <div className="w-5 h-20 bg-gradient-to-t from-[#FDE68A]/60 to-transparent blur-[3px] rounded-full animate-steam-2 mx-1.5" />
                  <div className="w-3.5 h-16 bg-gradient-to-t from-[#F59E0B]/50 to-transparent blur-[3px] rounded-full animate-steam-3" />
                </div>

                <div
                  className={`relative w-36 h-40 rounded-b-3xl border-2 border-[#D97706]/70 shadow-2xl overflow-hidden flex flex-col justify-end p-2 transition-all duration-500 ${
                    selectedVessel === 'kulhad'
                      ? 'bg-gradient-to-b from-[#8C3A19] to-[#5C230E] border-[#A84A22]'
                      : selectedVessel === 'brass'
                      ? 'bg-gradient-to-b from-[#D97706] to-[#78350F] border-[#FBBF24]'
                      : 'bg-white/10 backdrop-blur-md border-white/30'
                  }`}
                >
                  <div
                    className={`w-full h-28 rounded-b-2xl bg-gradient-to-t ${getCupColor()} shadow-inner flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute top-0 inset-x-0 h-4 bg-white/30 blur-[2px] rounded-full" />
                    <span className="text-[10px] font-bold text-black/70 uppercase tracking-widest font-mono">
                      Amrittulya
                    </span>
                  </div>
                </div>

                <div className="w-44 h-3 bg-[#42180B] rounded-full mt-1 border border-[#F59E0B]/20 shadow-md" />
              </div>

              <div className="w-full text-center border-t border-[#F59E0B]/20 pt-4 mb-5">
                <div className="text-xs text-[#F9F6F0]/60 mb-0.5">Total Brew Price</div>
                <div className="font-heritage text-3xl font-extrabold text-[#F59E0B]">
                  ₹{totalPrice}
                </div>
                <div className="text-[11px] text-[#F9F6F0]/70 mt-1">
                  Includes slow simmered spices & eco-friendly earthen kulhad packaging.
                </div>
              </div>

              <button
                onClick={handleAddCustom}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] hover:from-[#FBBF24] hover:to-[#B45309] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/40 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-black" />
                <span>Add Custom Brew (₹{totalPrice})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
