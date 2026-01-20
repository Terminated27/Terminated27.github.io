import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { THEME } from './theme';
import Home from './pages/home';
import WorkoutLanding from './pages/workoutlanding';
import WorkoutPlan from './pages/workoutplan';
import SplitBuilder from './pages/splitbuilder';
import CalorieCalculator from './pages/caloriecalculator';
import ProteinCalculator from './pages/proteincalculator';
import Banner from './components/banner';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Sync the actual HTML/Body background with our theme
  useEffect(() => {
    // This removes the "White Void" when overscrolling
    document.body.className = `${THEME.base} transition-colors duration-500`;
    document.documentElement.style.overscrollBehaviorY = 'none';
  }, []);
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      {/* 2. Global Wrapper: This div ensures every page has the correct background and text color */}
      <div className={`min-h-screen flex flex-col ${THEME.base} ${THEME.primary} selection:bg-app-accent/30`}>
        
        <Banner /> 

        {/* 3. Main Content: flex-1 pushes the footer to the bottom of the screen */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workoutlanding" element={<WorkoutLanding />} />
            <Route path="/workoutlanding/workoutplan" element={<WorkoutPlan />} />
            <Route path="/workoutlanding/workoutplan/splitbuilder" element={<SplitBuilder />} />
            <Route path="/workoutlanding/caloriecalculator" element={<CalorieCalculator />} />
            <Route path="/workoutlanding/proteincalculator" element={<ProteinCalculator />} />
          </Routes>
        </main>

        {/* 4. The "Floor": A consistent footer for all pages */}
        <footer className={`py-12 border-t ${THEME.border} text-center opacity-30 text-[10px] tracking-[0.2em] uppercase`}>
          Aidan Chin Portfolio // {new Date().getFullYear()}
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;