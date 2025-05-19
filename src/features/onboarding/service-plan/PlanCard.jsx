import { X } from 'lucide-react';

export default function PlanCard({ plan, onChange, onDelete, error }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: name === 'price' || name === 'credits' ? Number(value) : value });
  };

  return (
    <div className="relative bg-white border rounded-xl p-4 shadow-sm space-y-3">
      {/* Delete button */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        aria-label="Delete plan"
      >
        <X size={18} />
      </button>

      <div className="space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Enter plan name"
          value={plan.name}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none ${
            error && !plan.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />

        <div className="flex gap-2">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">Rp</span>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={plan.price}
              onChange={handleInputChange}
              className={`w-full pl-8 pr-2 py-2 rounded-lg border text-sm focus:outline-none ${
                error && !plan.price ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 w-24">
            <input
              type="number"
              name="credits"
              placeholder="0"
              value={plan.credits}
              onChange={handleInputChange}
              className={`w-full text-sm focus:outline-none ${
                error && !plan.credits ? 'border-red-500' : ''
              }`}
            />
            <span className="ml-1 text-sm text-gray-400">credits</span>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 mt-1">All fields must be filled.</p>
        )}
      </div>
    </div>
  );
}