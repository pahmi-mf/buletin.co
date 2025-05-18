export function Toggle({ mode, onChange, hasBulletin }) {
  console.log('Toggle.jsx');
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onChange('reading')}
        className={`px-4 py-2 rounded-md font-medium ${
          mode === 'reading' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600'
        } border`}
      >
        📖 Reading
      </button>
      <button
        onClick={() => onChange('writing')}
        className={`px-4 py-2 rounded-md font-medium ${
          mode === 'writing' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-600'
        } border`}
      >
        ✍️ {hasBulletin ? 'Writing' : 'Start Writing'}
      </button>
    </div>
  );
}
