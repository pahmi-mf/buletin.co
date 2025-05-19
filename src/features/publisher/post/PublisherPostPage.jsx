import OnboardingLayout from '@/components/layouts/OnboardingLayout';
import { useState, useEffect } from 'react';
import { Toggle } from '@/components/ui/Toggle';
import { WritingDashboard } from '@/components/home/WritingDashboard';
import usePageTitle from '@/hooks/usePageTitle';
import { useNavigate } from "react-router-dom";

export function PublisherPostPage() {
  usePageTitle("Posts");
  const navigate = useNavigate();

  const [mode, setMode] = useState('writing');
  const [hasBulletin, setHasBulletin] = useState("");
  useEffect(() => {
    const storedHasBulletin = localStorage.getItem("hasBulletin");
    if (storedHasBulletin) {
      setHasBulletin(storedHasBulletin);
    }
  }, []);

  const handleToggle = (newMode) => {
    if (newMode === 'writing' && !hasBulletin) {
      setMode(newMode);
    } else {
      navigate("/home");
    }
  };

  return (
    <OnboardingLayout 
      centerContent={      <Toggle mode={mode} onChange={handleToggle} hasBulletin={hasBulletin} />
} 
    >
    <div className="px-6 pb-8 max-w-7xl mx-auto">
      <div>
        <WritingDashboard />
      </div>
    </div>
    </OnboardingLayout>
  );
}