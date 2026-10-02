import React, { useState } from 'react';
import { TrendingUp, Calculator, Send, Sparkles, Building2, CheckCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FranchiseCalculator: React.FC = () => {
  const [dailyCups, setDailyCups] = useState(650);
  const [avgOrder, setAvgOrder] = useState(35);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('8-12 Lakhs');

  const monthlyRevenue = dailyCups * avgOrder * 30;
  const estimatedProfit = Math.round(monthlyRevenue * 0.38);
  const estimatedPaybackMonths = Math.max(3, Math.round(1000000 / estimatedProfit));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !city) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EA580C', '#FDE68A', '#ffffff'],
    });

    setSubmitted(true);
  };

  return (
    <section id="franchise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="rounded-3xl bg-gradient-to-br from-[#1A0A07] via-[#120705] to-[#0A0403] border border-[#F59E0B]/30 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#24110C] border border-[#F59E0B]/30 text-[#F59E0B] text-xs uppercase tracking-widest font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>High-Return Business Opportunity</span>
          </div>

          <h2 className="font-heritage text-3xl sm:text-5xl font-bold text-white mb-3">
            OWN A HIGH-PROFIT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EA580C]">
              CHAI AMRITTULYA FRANCHISE
            </span>
          </h2>
          <p className="text-xs sm:text-base text-[#F9F6F0]/70">
            India drinks 837,000 tonnes of tea every year. Join India’s fastest-growing authentic tea brand with proven low capex, fast break-even, and centralized raw material support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#140805]/90 border border-[#F59E0B]/25 backdrop-blur-xl shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F59E0B]/15">
              <div className="flex items-center gap-2 text-white font-heritage text-lg font-bold">
                <Calculator className="w-5 h-5 text-[#F59E0B]" />
                <span>Interactive ROI Estimator</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] font-semibold">
                Live Estimates
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-[#F9F6F0]/80">
                  Projected Daily Footfall / Cups:
                </label>
                <span className="font-heritage text-lg font-bold text-[#F59E0B]">
                  {dailyCups} Cups
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="2000"
                step="50"
                value={dailyCups}
                onChange={(e) => setDailyCups(Number(e.target.value))}
                className="w-full accent-[#F59E0B] cursor-pointer h-2 bg-[#2D140D] rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-[#F9F6F0]/40 mt-1">
                <span>200 cups/day</span>
                <span>Average: 700 cups</span>
                <span>2,000 cups/day</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-[#F9F6F0]/80">
                  Average Order Spend (Chai + Snack):
                </label>
                <span className="font-heritage text-lg font-bold text-[#F59E0B]">
                  ₹{avgOrder}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="80"
                step="5"
                value={avgOrder}
                onChange={(e) => setAvgOrder(Number(e.target.value))}
                className="w-full accent-[#F59E0B] cursor-pointer h-2 bg-[#2D140D] rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-[#F9F6F0]/40 mt-1">
                <span>₹20 (Chai only)</span>
                <span>₹40 (Chai + Bun Maska)</span>
                <span>₹80 (Family combo)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#210D08] border border-[#F59E0B]/20">
                <div className="text-[10px] text-[#F9F6F0]/60 uppercase tracking-wider mb-1">
                  Est. Monthly Revenue
                </div>
                <div className="font-heritage text-lg sm:text-xl font-bold text-white">
                  ₹{(monthlyRevenue / 100000).toFixed(2)} L
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#210D08] border border-[#F59E0B]/20">
                <div className="text-[10px] text-[#F9F6F0]/60 uppercase tracking-wider mb-1">
                  Est. Net Profit (38%)
                </div>
                <div className="font-heritage text-lg sm:text-xl font-bold text-[#F59E0B]">
                  ₹{(estimatedProfit / 100000).toFixed(2)} L
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#210D08] border border-[#F59E0B]/20 col-span-2 sm:col-span-1">
                <div className="text-[10px] text-[#F9F6F0]/60 uppercase tracking-wider mb-1">
                  Est. Payback Time
                </div>
                <div className="font-heritage text-lg sm:text-xl font-bold text-[#34D399]">
                  ~{estimatedPaybackMonths} Months
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#F9F6F0]/50 italic">
              *Projections based on historical performance of 120+ existing Chai Amrittulya operational outlets.
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#140805]/90 border border-[#F59E0B]/25 backdrop-blur-xl shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#059669]/20 border-2 border-[#059669] text-[#34D399] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heritage text-2xl font-bold text-white">
                  Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#F9F6F0]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#F59E0B]">{name}</strong>. Our Franchise Expansion Director will contact you within 24 hours with complete project blueprints and territory availability for <strong className="text-white">{city}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#F59E0B] underline hover:text-[#FBBF24] cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="font-heritage text-xl font-bold text-white">
                    Apply For Franchise Discovery Call
                  </h3>
                  <p className="text-xs text-[#F9F6F0]/60">
                    Get full franchise prospectus, profit margins, and territory exclusivity details.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#F9F6F0]/80 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Patil"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#200E09] border border-[#F59E0B]/25 focus:border-[#F59E0B] focus:outline-none text-xs sm:text-sm text-white placeholder-[#F9F6F0]/40 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#F9F6F0]/80 block mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#200E09] border border-[#F59E0B]/25 focus:border-[#F59E0B] focus:outline-none text-xs sm:text-sm text-white placeholder-[#F9F6F0]/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#F9F6F0]/80 block mb-1">
                      Proposed City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Pune, Jaipur, Indore"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#200E09] border border-[#F59E0B]/25 focus:border-[#F59E0B] focus:outline-none text-xs sm:text-sm text-white placeholder-[#F9F6F0]/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#F9F6F0]/80 block mb-1">
                    Investment Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#200E09] border border-[#F59E0B]/25 focus:border-[#F59E0B] focus:outline-none text-xs sm:text-sm text-white transition-colors cursor-pointer"
                  >
                    <option value="5-8 Lakhs">₹5 - ₹8 Lakhs (Kiosk Model)</option>
                    <option value="8-12 Lakhs">₹8 - ₹12 Lakhs (Standard Cafe Model)</option>
                    <option value="12-20 Lakhs">₹12 - ₹20 Lakhs (Flagship Lounge)</option>
                    <option value="20+ Lakhs">₹20+ Lakhs (Master City Franchise)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] hover:from-[#FBBF24] hover:to-[#B45309] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Request Franchise Prospectus</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
