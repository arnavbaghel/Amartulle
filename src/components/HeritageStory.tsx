import React from 'react';
import { Award, Leaf, Shield, Flame, CheckCircle2 } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: 'Copper Handi Boiling',
      desc: 'Our tea is slow-simmered in heavy-bottom, tinned copper cauldrons ensuring uniform heat distribution and perfect aeration of milk proteins.',
    },
    {
      icon: Leaf,
      title: 'Pounded Botanical Spices',
      desc: 'Never artificial syrups or pre-mixed powders. We crush whole green cardamom pods, dry Sonth ginger, and cloves fresh for each batch.',
    },
    {
      icon: Shield,
      title: '100% Pure Dairy Milk',
      desc: 'Sourced directly from local farmers every morning. Rich in natural cream and free from synthetic preservatives or adulterants.',
    },
    {
      icon: Award,
      title: 'Terracotta Kulhad Heritage',
      desc: 'Every earthen cup is handmade by traditional Indian potters, completely unglazed, chemical-free, biodegradable, and imbued with rustic aroma.',
    },
  ];

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F59E0B]/30 shadow-2xl bg-[#1D0D09]">
              <img
                src="/heritage.jpg"
                alt="Chai Amrittulya Authentic Boiling"
                className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0605] via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#140805]/90 border border-[#F59E0B]/30 backdrop-blur-md">
                <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider block mb-1">
                  Pune Heritage Roots
                </span>
                <p className="text-white text-sm font-semibold">
                  "Tea is not just a drink in India; it is a sacred pause, an emotion, and a bridge between hearts."
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#25100B] border border-[#F59E0B]/40 shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#EA580C] to-[#F59E0B] flex items-center justify-center text-black font-extrabold text-xl shadow-md">
                ★
              </div>
              <div>
                <div className="font-heritage text-lg font-bold text-white">100% PURE</div>
                <div className="text-[11px] text-[#F59E0B]">No Artificial Chemicals</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#200F0A] border border-[#F59E0B]/30 text-[#F59E0B] text-xs uppercase tracking-widest font-semibold">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>The Sacred Recipe</span>
          </div>

          <h2 className="font-heritage text-3xl sm:text-5xl font-bold text-white leading-tight">
            WHY INDIA CHOOSES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EA580C]">
              CHAI AMRITTULYA
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#F9F6F0]/80 leading-relaxed">
            In ancient Sanskrit, <strong className="text-[#F59E0B]">"Amrittulya"</strong> translates to <em>"equal to heavenly nectar (Amrit)"</em>. Born out of Maharashtra’s rich tea tradition, we set out to restore Indian tea to its authentic glory — using whole ingredients, time-tested boiling methods, and warm hospitality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#180A07] border border-[#F59E0B]/15 hover:border-[#F59E0B]/40 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#2A120B] border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heritage text-base font-bold text-white">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#F9F6F0]/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-[#F9F6F0]/85">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              <span>Zero Artificial Essence</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              <span>Kolhapuri Sulphur-Free Gud</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              <span>Direct-Trade Assam CTC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
