import { Link } from 'react-router-dom';
import { THEME } from '../theme';

export default function Home() {
  return (
    <div className={`min-h-screen ${THEME.base} ${THEME.primary} flex flex-col items-center justify-center p-8 transition-colors duration-500`}>
      <h1 className={`text-5xl font-black ${THEME.accent} uppercase tracking-tighter mb-4`}>
        Welcome
      </h1>
      <p className={`${THEME.secondary} mb-8 text-center max-w-md`}>
        Welcome to my website :) here are some cool things you can check out
      </p>
      <Link 
        to="/workoutlanding" 
        className={`${THEME.accent} hover:opacity-80 ${THEME.base}/20 border border-app-accent text-app-text-main font-bold py-3 px-8 rounded-full transition-all`}
      >
        Workout Plan
      </Link>
    </div>
  );
}