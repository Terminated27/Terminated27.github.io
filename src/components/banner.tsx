import { useState, useEffect, useRef } from 'react';
import { THEME } from '../theme';

/**
 * Banner Component
 *
 * A sticky header that displays navigation links, dropdown menus, and a theme toggle.
 * This component manages:
 * - Navigation drawers for "Gym" and "Tools" sections
 * - Dark/light theme switching with localStorage persistence
 * - Responsive banner height calculation (stored as CSS variable)
 * - Click-outside detection to close drawers
 *
 * @component
 * @example
 * return <Banner />
 */

/**
 * Type definition for drawer state
 * @typedef {string | null} DrawerState
 * "gym" | "tools" | null - tracks which dropdown is currently open
 */

/**
 * Toggles dark mode on/off and persists the preference to localStorage.
 *
 * @param {boolean} isDark - Current dark mode state
 * @param {Function} setIsDark - State setter for dark mode
 * @returns {void}
 */
const toggleTheme = (isDark: boolean, setIsDark: (value: boolean) => void): void => {
  const nextMode = !isDark;
  setIsDark(nextMode);

  // Update HTML element class for Tailwind dark mode detection
  if (nextMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Persist theme preference across sessions
  localStorage.setItem('theme', nextMode ? 'dark' : 'light');
};

/**
 * Handles drawer menu toggle logic (open/close).
 *
 * @param {string} drawerName - Name of the drawer to toggle ("gym" or "tools")
 * @param {string | null} activeDrawer - Current active drawer state
 * @param {Function} setActiveDrawer - State setter for active drawer
 * @returns {void}
 */
const handleDrawerToggle = (
  drawerName: string,
  activeDrawer: string | null,
  setActiveDrawer: (value: string | null) => void
): void => {
  setActiveDrawer(activeDrawer === drawerName ? null : drawerName);
};

/**
 * Updates the CSS variable that stores the banner's height.
 * This height is used by other components to offset their position below the banner.
 * Called on mount and on window resize.
 *
 * @param {React.RefObject<HTMLDivElement>} bannerRef - Reference to the banner element
 * @returns {void}
 */
const updateBannerHeight = (bannerRef: React.RefObject<HTMLDivElement>): void => {
  if (bannerRef.current) {
    const height = bannerRef.current.offsetHeight;
    document.documentElement.style.setProperty('--banner-height', `${height}px`);
  }
};

/**
 * Banner Component - Main render function
 */
const Banner = () => {
  // Initialize dark mode from HTML element's class list (persisted from previous session)
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  // Track which dropdown menu is currently open (null means all closed)
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  // Reference to banner element for DOM measurements and height tracking
  const bannerRef = useRef<HTMLDivElement>(null);

  /**
   * Effect: Close dropdowns when user clicks outside the banner.
   * This provides a better UX by automatically dismissing menus on clicks elsewhere.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bannerRef.current && !bannerRef.current.contains(event.target as Node)) {
        setActiveDrawer(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * Effect: Update banner height CSS variable on mount and window resize.
   * This enables other components (like drawers and sticky elements) to position
   * themselves relative to the banner without hardcoding a height value.
   */
  useEffect(() => {
    updateBannerHeight(bannerRef);

    window.addEventListener('resize', () => updateBannerHeight(bannerRef));
    return () => window.removeEventListener('resize', () => updateBannerHeight(bannerRef));
  }, []);

  return (
    <header
      ref={bannerRef}
      className={`w-full py-0 px-6 ${THEME.surface} border-b ${THEME.border} grid grid-cols-3 items-center sticky top-0 left-0 right-0 z-50 transition-colors duration-500`}
    >
      {/* ============================================================
          LEFT SECTION: Social and home links
          ============================================================ */}
      <div className="flex justify-start">
        <span
          className={`text-[12px] font-bold tracking-[0.2em] ${THEME.accent} uppercase hidden sm:block`}
        >
          <a href="/" target="_blank" className="text-app-accent underline">
            Home
          </a>
          {' || '}
          <a
            href="https://github.com/Terminated27"
            target="_blank"
            className="text-app-accent underline"
          >
            Github
          </a>
          {' || '}
          <a
            href="https://www.linkedin.com/in/aidanchin27/"
            target="_blank"
            className="text-app-accent underline"
          >
            LinkedIn
          </a>
        </span>
      </div>

      {/* ============================================================
          CENTER SECTION: Main navigation drawers (Gym & Tools)
          ============================================================ */}
      <div className="flex justify-center gap-8">
        {/* Gym Drawer: Workout-related navigation */}
        <div
          className="relative py-4"
          onMouseEnter={() => setActiveDrawer('gym')}
          onMouseLeave={() => setActiveDrawer(null)}
        >
          <button
            onClick={() => handleDrawerToggle('gym', activeDrawer, setActiveDrawer)}
            className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase cursor-pointer transition-colors ${
              activeDrawer === 'gym' ? 'text-app-accent' : 'hover:text-app-accent'
            }`}
          >
            Gym
          </button>

          {/* Dropdown menu with smooth opacity and translate animations */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-max pt-2 transition-all duration-300 ${
              activeDrawer === 'gym'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div
              className={`${THEME.surface} border ${THEME.border} rounded-xl shadow-2xl p-4 flex flex-col gap-3 backdrop-blur-md`}
            >
              <a
                href="/workoutlanding"
                className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}
              >
                Workout Plan
              </a>
              <a
                href="/workoutlanding/workoutplan#rpe"
                className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}
              >
                RPE Chart
              </a>
              <a
                href="/workoutlanding/workoutplan#glossary"
                className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}
              >
                Glossary
              </a>
            </div>
          </div>
        </div>

        {/* Tools Drawer: Utility calculator tools */}
        <div
          className="relative py-4"
          onMouseEnter={() => setActiveDrawer('tools')}
          onMouseLeave={() => setActiveDrawer(null)}
        >
          <button
            onClick={() => handleDrawerToggle('tools', activeDrawer, setActiveDrawer)}
            className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase cursor-pointer transition-colors ${
              activeDrawer === 'tools' ? 'text-app-accent' : 'hover:text-app-accent'
            }`}
          >
            Tools
          </button>

          {/* Dropdown menu with smooth opacity and translate animations */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-max pt-2 transition-all duration-300 ${
              activeDrawer === 'tools'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div
              className={`${THEME.surface} border ${THEME.border} rounded-xl shadow-2xl p-4 flex flex-col gap-3 backdrop-blur-md`}
            >
              <a
                href="/workoutlanding/workoutplan/splitbuilder"
                className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}
              >
                Split Builder
              </a>
              <a
                href="/workoutlanding/caloriecalculator"
                className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}
              >
                Calorie Calc
              </a>
              <a
                href="/workoutlanding/proteincalculator"
                className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}
              >
                Protein Calc
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          RIGHT SECTION: Theme toggle switch
          ============================================================ */}
      <div className="flex justify-end items-center gap-4">
        <span
          className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase hidden sm:block`}
        >
          {isDark ? 'Cool 😎 Dark Mode' : 'Evil Light Mode'}
        </span>

        {/* Theme toggle button: animated switch with sliding indicator */}
        <div
          onClick={() => toggleTheme(isDark, setIsDark)}
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