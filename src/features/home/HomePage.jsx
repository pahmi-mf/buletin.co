import OnboardingLayout from '@/components/layouts/OnboardingLayout';
import { useState } from 'react';
import { Toggle } from '@/components/ui/Toggle';
import { ReadingView } from './ReadingView';
import { WritingView } from './WritingView';
import usePageTitle from '@/hooks/usePageTitle';

export function HomePage() {
  usePageTitle("Home");

  const [mode, setMode] = useState('reading');
  const hasBulletin = false; // TODO: Ganti dengan pengecekan sebenarnya

  const handleToggle = (newMode) => {
    if (newMode === 'writing' && !hasBulletin) {
      window.location.href = '/onboarding-publication';
    } else {
      setMode(newMode);
    }
  };

  return (
    <OnboardingLayout 
      centerContent={      <Toggle mode={mode} onChange={handleToggle} hasBulletin={hasBulletin} />
} 
// TODO: rightContent menu nav
    >
    <div className="px-6 pb-8 max-w-7xl mx-auto">

      <div>
        {mode === 'reading' ? <ReadingView /> : <WritingView />}
      </div>
    </div>
    </OnboardingLayout>
  );
}