import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, Flame, Sparkles, Coffee, Award, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeroScrollCanvasProps {
  onExploreMenu: () => void;
  onOpenCustomizer: () => void;
}

export const HeroScrollCanvas: React.FC<HeroScrollCanvasProps> = ({
  onExploreMenu,
  onOpenCustomizer,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const totalFrames = 26;

  // Preload all 26 frames
  useEffect(() => {
    let mounted = true;
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      // Primary path: /frames/ezgif-frame-xxx.jpg, fallback to /ezgif-frame-xxx.jpg
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        if (!mounted) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded === totalFrames) {
          setAllLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback to root path if /frames/ not found
        img.src = `/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
          if (!mounted) return;
          loaded++;
          setLoadedCount(loaded);
          if (loaded === totalFrames) setAllLoaded(true);
        };
        img.onerror = () => {
          if (!mounted) return;
          loaded++;
          setLoadedCount(loaded);
          if (loaded === totalFrames) setAllLoaded(true);
        };
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      mounted = false;
    };
  }, []);

  // Draw frame on canvas with aspect-ratio cover
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cWidth = canvas.width;
    const cHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Calculate aspect ratio "cover"
    const scale = Math.max(cWidth / imgWidth, cHeight / imgHeight);
    const x = (cWidth - imgWidth * scale) / 2;
    const y = (cHeight - imgHeight * scale) / 2;

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);

    // Subtle atmospheric vignette overlay
    const gradient = ctx.createRadialGradient(
      cWidth / 2,
      cHeight / 2,
      cWidth * 0.2,
      cWidth / 2,
      cHeight / 2,
      cWidth * 0.75
    );
    gradient.addColorStop(0, 'rgba(12, 6, 5, 0)');
    gradient.addColorStop(0.7, 'rgba(12, 6, 5, 0.45)');
    gradient.addColorStop(1, 'rgba(12, 6, 5, 0.85)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, cWidth, cHeight);
  }, []);

  // Handle Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(scrollProgress * (totalFrames - 1)))
      );
      renderFrame(frameIndex);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame, scrollProgress]);

  // Scroll listener tracking scrub progress
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));

      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(progress);
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(progress * (totalFrames - 1)))
        );
        renderFrame(frameIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [renderFrame, totalFrames]);

  // Render initial frame once ready
  useEffect(() => {
    if (allLoaded || loadedCount > 3) {
      renderFrame(0);
    }
  }, [allLoaded, loadedCount, renderFrame]);

  const phase1Opacity = Math.max(0, Math.min(1, 1 - scrollProgress * 3.5));
  const phase1TranslateY = -scrollProgress * 60;

  const phase2Progress = (scrollProgress - 0.28) / 0.44;
  const phase2Opacity =
    scrollProgress >= 0.25 && scrollProgress <= 0.72
      ? Math.sin(Math.max(0, Math.min(1, phase2Progress)) * Math.PI)
      : 0;

  const phase3Progress = (scrollProgress - 0.68) / 0.32;
  const phase3Opacity = Math.max(0, Math.min(1, phase3Progress));
  const phase3TranslateY = Math.max(0, (1 - phase3Opacity) * 40);

  return (
    <div id="experience" ref={containerRef} className="relative h-[300vh] bg-[#0C0605]">
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas background for smooth frame scrubbing */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Floating Spice Sparkles / Embers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#F59E0B] blur-[1px] animate-steam-1 opacity-70" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#EA580C] blur-[2px] animate-steam-2 opacity-50" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#FBBF24] blur-[1px] animate-steam-3 opacity-60" />
          <div className="absolute top-1/2 right-1/5 w-2.5 h-2.5 rounded-full bg-[#D97706] blur-[2px] animate-steam-1 opacity-40" />
        </div>

        {/* Ambient Golden Radial Glow */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0C0605]/40 to-[#0C0605]/90 pointer-events-none" />

        {/* PHASE 1 OVERLAY (0% to 28% scroll) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pointer-events-none transition-all duration-150"
          style={{
            opacity: phase1Opacity,
            transform: `translateY(${phase1TranslateY}px)`,
            display: phase1Opacity <= 0.01 ? 'none' : 'flex',
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200F0A]/90 border border-[#F59E0B]/40 text-[#F59E0B] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-lg shadow-black/60">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>The Authentic Indian Tea Tradition</span>
          </div>

          <h1 className="font-heritage text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
            THE TASTE THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EA580C]">
              AWAKENS INDIA
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-xl text-[#F9F6F0]/85 font-normal leading-relaxed mb-10 drop-shadow-lg">
            Slow-simmered tea leaves, freshly pounded spices, and pure creamy milk served in earthen clay kulhads. Experience the soul of India’s most beloved tea house.
          </p>

          {/* Interactive Scroll Indicator */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-semibold flex items-center gap-2">
              <Flame className="w-4 h-4 animate-pulse text-[#F59E0B]" />
              Scroll down to pour the tea
            </span>
            <div className="w-7 h-11 rounded-full border-2 border-[#F59E0B]/60 flex items-start justify-center p-1.5 shadow-lg shadow-[#F59E0B]/20">
              <div className="w-1.5 h-3 rounded-full bg-[#F59E0B] animate-bounce" />
            </div>
          </div>
        </div>

        {/* PHASE 2 OVERLAY (28% to 72% scroll) */}
        <div
          className="absolute inset-0 flex items-center justify-between px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto pointer-events-none transition-all duration-150"
          style={{
            opacity: phase2Opacity,
            display: phase2Opacity <= 0.01 ? 'none' : 'flex',
          }}
        >
          {/* Left card */}
          <div className="max-w-xs sm:max-w-sm p-6 rounded-2xl bg-[#180A07]/85 border border-[#F59E0B]/30 backdrop-blur-xl shadow-2xl space-y-3">
            <div className="flex items-center gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Copper Vessel Brewing</span>
            </div>
            <h3 className="font-heritage text-xl sm:text-2xl font-bold text-white">
              The Art of the Cascade
            </h3>
            <p className="text-xs sm:text-sm text-[#F9F6F0]/80 leading-relaxed">
              Pouring from height aerates the chai, creating micro-bubbles of velvety froth and releasing essential oils from crushed cardamom and ginger.
            </p>
          </div>

          {/* Right card */}
          <div className="hidden sm:block max-w-xs p-6 rounded-2xl bg-[#180A07]/85 border border-[#F59E0B]/30 backdrop-blur-xl shadow-2xl space-y-3 text-right">
            <div className="flex items-center justify-end gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-wider">
              <span>Pure Earthen Kulhad</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-heritage text-xl sm:text-2xl font-bold text-white">
              Zero Toxins, 100% Earth
            </h3>
            <p className="text-xs sm:text-sm text-[#F9F6F0]/80 leading-relaxed">
              Uncut terracotta clay absorbs excess moisture, enhancing richness while imparting an inimitable natural earthy aroma (Sondhi Khushboo).
            </p>
          </div>
        </div>

        {/* PHASE 3 OVERLAY (72% to 100% scroll) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto transition-all duration-200"
          style={{
            opacity: phase3Opacity,
            transform: `translateY(${phase3TranslateY}px)`,
            pointerEvents: phase3Opacity > 0.4 ? 'auto' : 'none',
            display: phase3Opacity <= 0.01 ? 'none' : 'flex',
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/50 text-[#F59E0B] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            <Coffee className="w-4 h-4" />
            <span>Piping Hot & Ready To Sip</span>
          </div>

          <h2 className="font-heritage text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            PURE AMRIT IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EA580C]">
              EVERY SINGLE CUP
            </span>
          </h2>

          <p className="max-w-xl text-sm sm:text-lg text-[#F9F6F0]/90 mb-8 leading-relaxed">
            From our legendary Kulhad Masala Chai and chemical-free Desi Gud Chai to buttery Bun Maska and refreshing Shahi Thandai — discover authentic flavors.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onExploreMenu}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] hover:from-[#FBBF24] hover:to-[#B45309] text-black font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#F59E0B]/30 hover:shadow-[#F59E0B]/50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Royal Menu</span>
              <ChevronRight className="w-5 h-5 text-black" />
            </button>

            <button
              onClick={onOpenCustomizer}
              className="px-7 py-4 rounded-full bg-[#200F0A]/90 hover:bg-[#32170E] border border-[#F59E0B]/50 hover:border-[#F59E0B] text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <Sparkles className="w-5 h-5 text-[#F59E0B]" />
              <span>Craft Your Own Chai</span>
            </button>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-8 pt-6 border-t border-[#F59E0B]/20 w-full max-w-2xl">
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-[#F59E0B] font-heritage">
                120+
              </div>
              <div className="text-[11px] sm:text-xs text-[#F9F6F0]/70 uppercase tracking-wider mt-1">
                Outlets in India
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-[#F59E0B] font-heritage">
                75,000+
              </div>
              <div className="text-[11px] sm:text-xs text-[#F9F6F0]/70 uppercase tracking-wider mt-1">
                Daily Happy Sips
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-extrabold text-[#F59E0B] font-heritage">
                100%
              </div>
              <div className="text-[11px] sm:text-xs text-[#F9F6F0]/70 uppercase tracking-wider mt-1">
                Pure Spices
              </div>
            </div>
          </div>
        </div>

        {/* Scrub Progress HUD Indicator */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#120705]/80 border border-[#F59E0B]/20 backdrop-blur-md text-xs text-[#F9F6F0]/60">
          <span>Pour Progress</span>
          <div className="w-16 h-1.5 bg-[#25100B] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] transition-all duration-75"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className="font-mono text-[#F59E0B] font-bold">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>

        {scrollProgress < 0.8 && (
          <button
            onClick={onExploreMenu}
            className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#120705]/80 hover:bg-[#200F0A] border border-[#F59E0B]/20 text-xs text-[#F9F6F0]/70 hover:text-[#F59E0B] transition-colors cursor-pointer"
          >
            <span>Skip intro to menu</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#F59E0B]" />
          </button>
        )}
      </div>
    </div>
  );
};
