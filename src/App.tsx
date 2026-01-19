import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import WorkoutPlan from './pages/workoutplan';

function App() {
  return (
    // basename="/" because you are using the root Terminated27.github.io repo
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workoutplan" element={<WorkoutPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;