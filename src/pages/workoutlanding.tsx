import { Link } from 'react-router-dom'; // Using Link for internal navigation
import { THEME } from '../theme';

const Home = () => {
  return (
    <div className={`min-h-[calc(100vh-64px)] ${THEME.base} ${THEME.primary} selection:bg-app-accent/30 overflow-hidden`}>
      
      {/* HERO SECTION */}
      <main className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-app-accent/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-3xl space-y-8">
          {/* Tagline */}
          <span className={`${THEME.accent} font-mono text-sm tracking-[0.3em] uppercase opacity-80 block animate-fade-in`}>
            Get Fit and Have Fun || v1.0
          </span>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            AIDAN'S<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-accent to-violet-400">
              WORKOUTS.
            </span>
          </h1>

          {/* Description */}
          <p className={`text-lg md:text-xl ${THEME.secondary} opacity-70 max-w-xl mx-auto leading-relaxed`}>
            My guide to having success in the gym.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 text-center justify-center pt-8 items stretch">
            <Link 
              to="/workoutlanding/workoutplan"
              className="px-10 py-4 bg-app-accent text-white font-bold rounded-2xl shadow-xl shadow-app-accent/20 hover:scale-105 active:scale-95 transition-all duration-300 text-[12px] tracking-[0.2em] uppercase flex items-center justify-center text-center"
            >
              Enter the Wiki 
            </Link>
          <div className={`group relative flex flex-col w-full max-w-sm border ${THEME.border} rounded-2xl overflow-hidden transition-all duration-300 hover:border-app-accent/50 shadow-lg hover:shadow-app-accent/10`}>
  
      {/* TOP SECTION: SHARED LABEL */}
      <div className={`py-2 text-center bg-app-accent/5 border-t ${THEME.border}`}>
        <span className={`text-[9px] font-black tracking-[0.3em] uppercase opacity-40 ${THEME.secondary}`}>
          Customized Calculators
        </span>
      </div>

      {/* BOTTOM SECTION: THE SPLIT */}
      <div className="flex h-16">
        {/* CALORIE SIDE */}
        <Link 
          to="/workoutlanding/caloriecalculator"
          className={`flex-1 flex items-center justify-center text-[12px] tracking-[0.2em] font-bold uppercase ${THEME.secondary} hover:bg-app-accent hover:text-white transition-all duration-300 border-r ${THEME.border}`}
        >
          Daily Calories
        </Link>

        {/* PROTEIN SIDE */}
        <Link 
          to="/workoutlanding/proteincalculator"
          className={`flex-1 flex items-center justify-center text-[12px] tracking-[0.2em] font-bold uppercase ${THEME.secondary} hover:bg-app-accent hover:text-white transition-all duration-300`}
        >
          Daily Protein
        </Link>
      </div>

      

      {/* VISUAL POLISH: Subtle glow line that moves on hover */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-app-accent w-0 group-hover:w-full transition-all duration-500" />
    </div>
            <Link 
              to="/workoutlanding/workoutplan/splitbuilder"
              className={`px-10 py-4 border ${THEME.border} ${THEME.secondary} font-bold rounded-2xl hover:bg-white/5 transition-all duration-300 text-[12px] tracking-[0.2em] uppercase flex items-center justify-center text-center`}
            >
              Split Builder
            </Link>
          </div>
        </div>

        {/* Feature Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-5xl w-full">
          {[
            { label: '01', title: 'The Wiki', desc: 'Understanding my brain in the gym.' },
            { label: '02', title: 'Calculators', desc: 'Basic protein and caloric target tracking.' },
            { label: '03', title: 'Splits', desc: 'Personalized workout plans.' }
          ].map((feature, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${THEME.border} bg-white/5 text-left space-y-4 hover:border-app-accent/40 transition-colors group`}>
              <span className={`font-mono text-xs ${THEME.accent} opacity-40`}>{feature.label}</span>
              <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
              <p className={`text-sm ${THEME.secondary} opacity-60 leading-relaxed`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;