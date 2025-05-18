import { useState } from 'react';
import { Toggle } from '@/components/ui/Toggle';
import { ReadingView } from './ReadingView';
import { WritingView } from './WritingView';

export function HomePage() {
  const [mode, setMode] = useState('reading');
  const hasBulletin = false; // Ganti dengan pengecekan sebenarnya

  const handleToggle = (newMode) => {
    if (newMode === 'writing' && !hasBulletin) {
      window.location.href = '/onboarding-create-bulletin';
    } else {
      setMode(newMode);
    }
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <Toggle mode={mode} onChange={handleToggle} hasBulletin={hasBulletin} />

      <div className="mt-8">
        {mode === 'reading' ? <ReadingView /> : <WritingView />}
      </div>
    </div>
  );
}