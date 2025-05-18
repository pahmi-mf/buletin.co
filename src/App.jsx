import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingProfile from './pages/OnboardingProfile';
import OnboardingInterest from './pages/OnboardingInterest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding-profile" replace />} />

        <Route path="/onboarding-profile" element={<OnboardingProfile />} />

        <Route path="/onboarding-interest" element={<OnboardingInterest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;