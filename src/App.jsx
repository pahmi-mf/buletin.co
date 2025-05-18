import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingProfile from './pages/OnboardingProfile';
import OnboardingInterest from './pages/OnboardingInterest';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding-profile" replace />} />

        <Route path="/onboarding-profile" element={<OnboardingProfile />} />

        <Route path="/onboarding-interest" element={<OnboardingInterest />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;