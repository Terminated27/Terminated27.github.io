import { useState, useEffect, useRef } from 'react';
import { THEME } from '../theme';
import { workoutlanding } from '../data/workoutplandata';
import RPETable from '../components/RPETable';

const WorkoutLanding = () => {
  const [activeSection, setActiveSection] = useState('overview');
  // Initialize: Open on desktop (>= 1024px), closed on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);
  const [, setGradientTop] = useState('var(--banner-height)'); // dont know why ts is complaining, the ',' needs to be there
  const [, setDrawerTop] = useState('var(--banner-height)');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // 1. AUTO-HIGHLIGHT LOGIC
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          
          const navItem = document.getElementById(`nav-${id}`);
          if (navItem && sidebarRef.current) {
            navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    workoutlanding.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 2. SCROLL HANDLER FOR GRADIENT & HAMBURGER MENU POSITIONING
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeightStr = getComputedStyle(document.documentElement).getPropertyValue('--banner-height').trim();
      const bannerHeight = parseFloat(bannerHeightStr);
      
      if (window.scrollY >= bannerHeight) {
        setGradientTop('0px');
        setDrawerTop('0px');
      } else {
        setGradientTop(`calc(var(--banner-height) - ${window.scrollY}px)`);
        setDrawerTop(`calc(var(--banner-height) - ${window.scrollY}px)`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. SMOOTH SCROLL & AUTO-CLOSE ON MOBILE
  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);
    
    // Close menu automatically on mobile after selection
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const navItem = document.getElementById(`nav-${id}`);
    if (navItem && sidebarRef.current) {
      navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className={`flex min-h-screen ${THEME.base} ${THEME.primary} transition-colors duration-500`}>
      
      {/* FLOATING GRADIENT */}
      <div 
        className={`fixed left-0 h-32 z-[60] pointer-events-none w-72 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
        style={{
          // Instead of state, use the CSS variable directly. 
          // This will stay aligned with the banner automatically.
          top: 'var(--banner-height)', 
          background: 'var(--app-gradient)'
        }}
      />

      {/* HAMBURGER TOGGLE BUTTON */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        // Increased Z-index to 70 to ensure it sits ABOVE the banner and gradient
        className="fixed left-0 p-8 outline-none group z-[70] cursor-pointer" 
        style={{ top: 'var(--banner-height)' }}
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col gap-1.5 w-6">
          <span className={`h-[2px] w-full bg-app-accent transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-[2px] w-full bg-app-accent transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-[2px] w-full bg-app-accent transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* SIDEBAR DRAWER */}
      <aside 
        className={`
          fixed left-0 z-50 w-72 border-r ${THEME.border} ${THEME.base}
          transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${isMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        `}
        style={{
          top: 'var(--banner-height)',
          bottom: 0
        }}
      >
        <div 
          ref={sidebarRef}
          className="h-full overflow-y-auto p-8 pt-24 no-scrollbar scroll-smooth"
        >
          <h2 className={`${THEME.secondary} text-[10px] font-bold uppercase tracking-[0.2em] mb-10 opacity-70`}>
            Workout Wiki
          </h2>
          
          <nav className="relative flex flex-col gap-1">
            {workoutlanding.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`group relative text-left text-sm py-2.5 transition-all duration-300 pl-4 outline-none ${
                  activeSection === item.id 
                    ? `${THEME.activeAccent} font-bold opacity-100` 
                    : `${THEME.secondary} opacity-40 hover:opacity-100`
                }`}
              >
                <div 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] transition-all duration-300 rounded-full ${
                    activeSection === item.id 
                      ? 'bg-app-accent h-4 scale-y-100' 
                      : 'bg-transparent h-2 scale-y-0 group-hover:bg-app-accent/30 group-hover:scale-y-100 group-hover:h-3'
                  }`} 
                />
                <span className="relative">{item.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* BACKDROP (Only active on mobile when menu is open) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <main 
        className={`flex-1 p-8 pt-32 md:p-24 lg:p-32 max-w-5xl transition-all duration-500 ${
          isMenuOpen ? 'lg:ml-72' : 'ml-0'
        }`}
      >
        <div className="space-y-5">
          {workoutlanding.map((item) => (
            <section key={item.id} id={item.id} className="scroll-mt-32">
              <span className={`${THEME.accent} font-mono text-sm mb-4 block opacity-60`}>
                0{workoutlanding.indexOf(item) + 1} //
              </span>
              
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
                {item.title}<span className={THEME.accent}>.</span>
              </h3>

              <div className={`bg-app-accent/5 border-l-2 border-app-accent p-8 rounded-r-2xl mb-8`}>
                {Array.isArray(item.content) ? (
                  item.content.map((paragraph, idx) => (
                    <div key={idx} className="text-lg md:text-xl leading-relaxed opacity-90 font-medium mb-6 last:mb-0">
                      {paragraph}
                    </div>
                  ))
                ) : (
                  <div className="text-lg md:text-xl leading-relaxed opacity-90 font-medium">
                    {item.content}
                  </div>
                )}

                {item.id === 'rpe' && (
                  <div className="mt-8">
                    <RPETable />
                  </div>
                )}
              </div>

              <div className={`h-[1px] w-full ${THEME.divider} mt-16 opacity-20`} />
            </section>
          ))}
        </div>
        
        <div className={`h-96 flex items-center justify-center italic ${THEME.secondary} opacity-30`}>
          Wow, you actually reached the end 🤯.
        </div>
      </main>
    </div>
  );
};

export default WorkoutLanding;