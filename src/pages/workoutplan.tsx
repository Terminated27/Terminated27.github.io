import { useState, useEffect, useRef } from 'react';
import { THEME } from '../theme';
import { workoutlanding } from '../data/workoutplandata';
import RPETable from '../components/RPETable';

const WorkoutLanding = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // 1. AUTO-HIGHLIGHT LOGIC (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Triggers when section is near the top
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // We skip observer updates if the user just clicked a nav item to prevent "stuttering"
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          
          // Keep sidebar in sync with manual scroll
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

  // 2. SMOOTH SCROLL & SIDEBAR ALIGNMENT
  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // Align the sidebar line
    const navItem = document.getElementById(`nav-${id}`);
    if (navItem && sidebarRef.current) {
      navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Allow observer to take over again after scroll finishes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className={`flex min-h-screen ${THEME.base} ${THEME.primary} transition-colors duration-500`}>
      
      {/* SIDEBAR - Independent Scroll & Line Focus */}
      <aside className={`w-64 border-r ${THEME.border} hidden lg:block`}>
        <div 
          ref={sidebarRef}
          className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto p-8 no-scrollbar scroll-smooth"
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
                className={`group relative text-left text-sm py-2 transition-all duration-300 pl-4 outline-none ${
                  activeSection === item.id 
                    ? `${THEME.activeAccent} font-bold opacity-100` 
                    : `${THEME.secondary} opacity-40 hover:opacity-100`
                }`}
              >
                {/* THE INDICATOR LINE */}
                <div 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] transition-all duration-300 rounded-full ${
                    activeSection === item.id 
                      ? 'bg-app-accent h-4 scale-y-100' 
                      : 'bg-transparent h-2 scale-y-0 group-hover:bg-app-accent/30 group-hover:scale-y-100 group-hover:h-3'
                  }`} 
                />
                
                <span className="relative">
                  {item.title}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 md:p-24 lg:p-32 max-w-5xl">
        <div className="space-y-5">
          {workoutlanding.map((item) => (
            <section key={item.id} id={item.id} className="scroll-mt-24">
              <span className={`${THEME.accent} font-mono text-sm mb-4 block opacity-60`}>
                0{workoutlanding.indexOf(item) + 1} //
              </span>
              
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
                {item.title}<span className={THEME.accent}>.</span>
              </h3>

              {/* IMAGE SLOT */}
              {item.image && (
                <div className="mb-12 overflow-hidden rounded-app-card border border-app-accent/10 shadow-lg bg-white/5">
                   <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-contain max-h-[550px] mx-auto block" 
                   />
                </div>
              )}
              
              <div className={`bg-app-accent/5 border-l-2 border-app-accent p-8 rounded-r-2xl mb-8`}>
                {/* MULTI-PARAGRAPH RENDERING */}
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

                {/* DYNAMIC COMPONENT INJECTION */}
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