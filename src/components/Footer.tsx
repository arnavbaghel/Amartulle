import React, { useState } from 'react';
import { Mail, Instagram, Phone, MapPin, Send, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090403] border-t border-[#F59E0B]/20 text-[#F9F6F0] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F59E0B]/15">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Chai Amrittulya"
                className="h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              />
              <div>
                <div className="font-heritage text-2xl font-bold text-white tracking-wider">
                  AMRITTULYA
                </div>
                <div className="text-xs text-[#F59E0B] tracking-[0.2em] uppercase font-semibold">
                  Authentic Indian Tea
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F9F6F0]/70 leading-relaxed">
              Crafting authentic Indian tea steeped in centuries of heritage. Slow-brewed in copper vessels, infused with natural pounded spices, and served in earthen clay kulhads.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/chaiamrittulya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#180A07] hover:bg-[#F59E0B] border border-[#F59E0B]/25 hover:border-[#F59E0B] text-[#F59E0B] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:business.chaiamrittulya@gmail.com"
                className="p-2.5 rounded-full bg-[#180A07] hover:bg-[#F59E0B] border border-[#F59E0B]/25 hover:border-[#F59E0B] text-[#F59E0B] hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heritage text-sm font-bold text-[#F59E0B] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F9F6F0]/70">
              <li>
                <a href="#experience" className="hover:text-[#F59E0B] transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F59E0B] transition-colors">
                  Royal Menu
                </a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-[#F59E0B] transition-colors">
                  Brew Your Chai
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F59E0B] transition-colors">
                  Heritage Story
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#F59E0B] transition-colors">
                  Find Outlets
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heritage text-sm font-bold text-[#F59E0B] uppercase tracking-wider">
              Contact & Franchise
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F9F6F0]/70">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <a
                  href="mailto:business.chaiamrittulya@gmail.com"
                  className="hover:text-[#F59E0B] transition-colors break-all"
                >
                  business.chaiamrittulya@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Headquartered in Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Operating Hours: 6:00 AM - 11:30 PM (All 7 Days)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heritage text-sm font-bold text-[#F59E0B] uppercase tracking-wider">
              Chai Lovers Club
            </h4>
            <p className="text-xs text-[#F9F6F0]/60">
              Receive secret festive blends, new outlet alerts, and special tasting invitations.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#059669]/20 border border-[#059669]/40 text-[#34D399] text-xs font-semibold">
                ✓ Welcome to the Amrittulya Family!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#180A07] border border-[#F59E0B]/25 focus:border-[#F59E0B] focus:outline-none text-xs text-white placeholder-[#F9F6F0]/40 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#F59E0B] hover:bg-[#FBBF24] text-black transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F6F0]/50">
          <div>
            © {new Date().getFullYear()} Chai Amrittulya. All rights reserved. Handcrafted with reverence for Indian Chai Culture.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
