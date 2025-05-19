import OnboardingLayout from '@/components/layouts/OnboardingLayout';
import { useState, useEffect } from 'react';
import { Toggle } from '@/components/ui/Toggle';
import { ReadingView } from './ReadingView';

import usePageTitle from '@/hooks/usePageTitle';
import { useNavigate } from "react-router-dom";

export function HomePage() {
  usePageTitle("Home");
  const navigate = useNavigate();
  const [mode, setMode] = useState('reading');
  const [hasBulletin, setHasBulletin] = useState("");
  useEffect(() => {
    const storedHasBulletin = localStorage.getItem("hasBulletin");
    if (storedHasBulletin) {
      setHasBulletin(storedHasBulletin);
    }
  }, []);

  const handleToggle = (newMode) => {
    if (newMode === 'writing' && !hasBulletin) {
      navigate("/onboarding-publication");
    } else {
      navigate("/publisher/post");
    }
  };

  return (
    <OnboardingLayout 
      centerContent={      <Toggle mode={mode} onChange={handleToggle} hasBulletin={hasBulletin} />
} 
    >
    <div className="px-6 pb-8 max-w-7xl mx-auto">

      <div>
        <ReadingView />
      </div>
    </div>
    </OnboardingLayout>
  );
}