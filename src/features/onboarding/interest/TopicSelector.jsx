import { INTEREST_CATEGORIES } from '@/constants/interests';

const TopicSelector = ({ selected, onToggle }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {INTEREST_CATEGORIES.map((topic) => {
        const isSelected = selected.includes(topic);
        return (
          <button
            key={topic}
            type="button"
            onClick={() => onToggle(topic)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              outline-none focus:outline-none focus:ring-0 focus:border-none
              ${
                isSelected
                  ? "bg-blue-200 text-blue-700 hover:bg-blue-100 border-none"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-none"
              }`}
          >
            {topic}
          </button>
        );
      })}
    </div>
  );
};

export default TopicSelector;