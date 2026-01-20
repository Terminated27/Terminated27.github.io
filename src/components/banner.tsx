import { useState } from 'react';
import { THEME } from '../theme'; 

const Banner = () => {
  const [isDark, setIsDark] = useState(() => 
    document.documentElement.classList.contains('dark')
  );

  const toggleTheme = () => {
    const nextMode = !isDark;
    setIsDark(nextMode);
    if (nextMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  return (
    <header className={`w-full py-0 px-6 ${THEME.surface} border-b ${THEME.border} grid grid-cols-3 items-center sticky top-0 z-50 transition-colors duration-500`}>
      
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
        {/* DRAWER 1: WIKI */}
        <div className="group relative py-4">
          <button className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase cursor-default group-hover:text-app-accent transition-colors`}>
            Gym
          </button>
          
          {/* THE DRAWER CONTENT */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
            <div className={`${THEME.surface} border ${THEME.border} rounded-xl shadow-2xl p-4 flex flex-col gap-3 backdrop-blur-md`}>
              <a href="/workoutlanding" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Workout Plan</a>
              <a href="/workoutlanding/workoutplan#rpe" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>RPE Chart</a>
              <a href="/workoutlanding/workoutplan#glossary" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Glossary</a>
            </div>
          </div>
        </div>

        {/* DRAWER 2: BUILDER */}
        <div className="group relative py-4">
          <button className={`text-[12px] font-bold tracking-[0.2em] ${THEME.secondary} uppercase cursor-default group-hover:text-app-accent transition-colors`}>
            Tools
          </button>

          <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
            <div className={`${THEME.surface} border ${THEME.border} rounded-xl shadow-2xl p-4 flex flex-col gap-3 backdrop-blur-md`}>
              <a href="/workoutlanding/splitbuilder" className={`text-[12px] uppercase tracking-widest ${THEME.secondary} hover:text-app-accent transition-colors`}>Split Builder</a>
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

        {/* The Toggle Track */}
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