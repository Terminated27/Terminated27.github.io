import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-black text-blue-500 uppercase tracking-tighter mb-4">
        Welcome
      </h1>
      <p className="text-slate-400 mb-8 text-center max-w-md">
        Welcome to my website :) here are some cool things you can check out
      </p>
      <Link 
        to="/workoutplan" 
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all"
      >
        Open Workout Plan
      </Link>
    </div>
  );
}