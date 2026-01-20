import { useState, useEffect, useRef } from 'react';
import { THEME } from '../theme'; 

const Banner = () => {
  const [isDark, setIsDark] = useState(() => 
    document.documentElement.classList.contains('dark')
  );

  // State to track which drawer is open (null, 'gym', or 'tools')
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Close drawers when clicking anywhere outside the banner
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bannerRef.current && !bannerRef.current.contains(event.target as Node)) {
        setActiveDrawer(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDark;
    setIsDark(nextMode);
    if (nextMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  const handleDrawerToggle = (name: string) => {
    setActiveDrawer(activeDrawer === name ? null : name);
  };

  // Set CSS variable for banner height on mount and when window resizes
  useEffect(() => {
    const updateBannerHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      }
    };
    
    // Measure immediately
    updateBannerHeight();
    
    // Re-measure on resize
    window.addEventListener('resize', updateBannerHeight);
    return () => window.removeEventListener('resize', updateBannerHeight);
  }, []);

  return (
    <header 
      ref={bannerRef}
      className={`w-full py-0 px-6 ${THEME.surface} border-b ${THEME.border} grid grid-cols-3 items-center sticky top-0 left-0 right-0 z-50 transition-colors duration-500`}
    >
      
      {/* LEFT SLOT: Justified Left */}
      <div className="flex justify-start">
        <span className={`text-[12px] font-bold tracking-[0.2em] ${THEME.accent} uppercase hidden sm:block`}>
          <a href="/" target="_blank" className="text-app-accent underline">Home</a>{' || '}
          <a href="https://github.com/Terminated27" target="_blank" className="text-app-accent underline">Github</a>{' || '}
          <a href="https://www.linkedin.com/in/aidanchin27/" target="_blank" className="text-app-accent underline">LinkedIn</a>
        </span>
      </div>

      {/* CENTER SLOT: Justified Center */}
      <div className="flex justify-center gap-8">
        {/* DRAWER 1: GYM */}
        <div 
          className="relative py-4"
          onMouseEnter={() => setActiveDrawer('gym')}
          onMouseLeave={() => setActiveDrawer(null)}
        >
          <button 
            onClick={() => handleDrawerToggle('gym')}
            className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase cursor-pointer transition-colors ${activeDrawer === 'gym' ? 'text-app-accent' : 'hover:text-app-accent'}`}
          >
            Gym
          </button>
          
          <div className={`absolute top-full left-1/2 -translate-x-1/2 w-max pt-2 transition-all duration-300 ${
            activeDrawer === 'gym' 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            <div className={`${THEME.surface} border ${THEME.border} rounded-xl shadow-2xl p-4 flex flex-col gap-3 backdrop-blur-md`}>
              <a href="/workoutlanding" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Workout Plan</a>
              <a href="/workoutlanding/workoutplan#rpe" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>RPE Chart</a>
              <a href="/workoutlanding/workoutplan#glossary" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Glossary</a>
            </div>
          </div>
        </div>

        {/* DRAWER 2: TOOLS */}
        <div 
          className="relative py-4"
          onMouseEnter={() => setActiveDrawer('tools')}
          onMouseLeave={() => setActiveDrawer(null)}
        >
          <button 
            onClick={() => handleDrawerToggle('tools')}
            className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase cursor-pointer transition-colors ${activeDrawer === 'tools' ? 'text-app-accent' : 'hover:text-app-accent'}`}
          >
            Tools
          </button>

          <div className={`absolute top-full left-1/2 -translate-x-1/2 w-max pt-2 transition-all duration-300 ${
            activeDrawer === 'tools' 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            <div className={`${THEME.surface} border ${THEME.border} rounded-xl shadow-2xl p-4 flex flex-col gap-3 backdrop-blur-md`}>
              <a href="/workoutlanding/workoutplan/splitbuilder" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Split Builder</a>
              <a href="/workoutlanding/caloriecalculator" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Calorie Calc</a>
              <a href="/workoutlanding/proteincalculator" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Protein Calc</a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SLOT: Justified Right */}
      <div className="flex justify-end items-center gap-4">
        <span className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase hidden sm:block`}>
          {isDark ? 'Cool 😎 Dark Mode' : 'Evil Light Mode'}
        </span>

        <div 
          onClick={toggleTheme}
          className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ${
            isDark ? `bg-app-accent` : 'bg-app-accent/30'
          }`}
        >
          <div 
            className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-500 ${THEME.base} ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;