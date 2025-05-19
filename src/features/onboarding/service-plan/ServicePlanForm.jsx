import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import InfoNote from '@/components/ui/InfoNote';

const defaultPlans = [
  { id: uuidv4(), name: 'Basic Access', price: 99000, credits: 4 },
  { id: uuidv4(), name: 'Standard Access', price: 149000, credits: 8 },
  { id: uuidv4(), name: 'Premium Access', price: 199000, credits: 12 },
];

export default function ServicePlanForm() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem('servicePlans');
    return saved ? JSON.parse(saved) : defaultPlans;
  });
  const [feePayer, setFeePayer] = useState(
    localStorage.getItem('feePayer') || 'publisher'
  );
  const [error, setError] = useState(false);

  const handlePlanChange = (id, field, value) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id ? { ...plan, [field]: value } : plan
      )
    );
  };

  const handleAddPlan = () => {
    if (plans.length >= 3) return;
    setPlans([
      ...plans,
      { id: uuidv4(), name: '', price: '', credits: '' }
    ]);
  };

  const handleRemovePlan = (id) => {
    if (plans.length <= 1) return;
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const isFormValid =
    plans.length > 0 &&
    plans.length <= 3 &&
    plans.every(
      (plan) => plan.name.trim() && plan.price && plan.credits
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = plans.every(
      (plan) => plan.name.trim() && plan.price && plan.credits
    );
    if (!isValid) {
      setError(true);
      return;
    }

    localStorage.setItem('servicePlans', JSON.stringify(plans));
    localStorage.setItem('feePayer', feePayer);
    navigate('/onboarding-bank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="bg-white dark:bg-white border border-gray-200 rounded-lg p-4 relative"
        >
          {plans.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemovePlan(plan.id)}
              className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 text-white bg-red-500 hover:bg-red-600 rounded-full text-sm"
            >
              -
            </button>
          )}

          <input
            type="text"
            placeholder="Plan name"
            value={plan.name}
            onChange={(e) => handlePlanChange(plan.id, 'name', e.target.value)}
            className="w-full mb-2 px-3 py-2 rounded-md border bg-white text-gray-900 dark:bg-white dark:text-gray-900 border-gray-300"
          />
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-1">
              <span className="text-sm text-gray-500">Rp</span>
              <input
                type="number"
                placeholder="Price"
                value={plan.price}
                onChange={(e) => handlePlanChange(plan.id, 'price', e.target.value)}
                className="w-full px-3 py-2 rounded-md border bg-white text-gray-900 dark:bg-white dark:text-gray-900 border-gray-300"
              />
            </div>
            <div className="flex items-center gap-1">
              <input
                type="number"
                placeholder="Credits"
                value={plan.credits}
                onChange={(e) => handlePlanChange(plan.id, 'credits', e.target.value)}
                className="w-20 px-2 py-2 rounded-md border bg-white text-gray-900 dark:bg-white dark:text-gray-900 border-gray-300 text-center"
              />
              <span className="text-sm text-gray-500">credits</span>
            </div>
          </div>
          {error && (!plan.name || !plan.price || !plan.credits) && (
            <p className="text-sm text-red-500 mt-2">All fields must be filled.</p>
          )}
        </div>
      ))}

      {/* Tombol Add Plan */}
      {plans.length < 3 && (
        <button
          type="button"
          onClick={handleAddPlan}
          className="w-full text-sm font-medium px-4 py-2 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          + Add new plan
        </button>
      )}

      {/* Transaction Fee Toggle */}
      <div className="border border-gray-200 rounded-lg p-4">
        <p className="text-sm font-semibold mb-2 text-black">Transaction Fee (10%)</p>
        <p className="text-sm text-gray-500 mb-3">
          Decide who covers the 10% fee — You or your subscribers.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFeePayer('publisher')}
            className={`flex-1 px-4 py-2 rounded-md border text-sm font-semibold ${
              feePayer === 'publisher'
                ? 'bg-white text-blue-600 border-blue-600'
                : 'bg-white text-gray-600 border-gray-300'
            }`}
          >
            Publisher (You)
          </button>
          <button
            type="button"
            onClick={() => setFeePayer('subscriber')}
            className={`flex-1 px-4 py-2 rounded-md border text-sm font-semibold ${
              feePayer === 'subscriber'
                ? 'bg-white text-blue-600 border-blue-600'
                : 'bg-white text-gray-600 border-gray-300'
            }`}
          >
            Paid Subscribers
          </button>
        </div>

        {/* Info dinamis */}
        <p className="text-sm text-gray-500 mt-2">
          {feePayer === 'publisher' ? (
            <span>10% will be deducted from your earnings</span>
          ) : (
            <span>Paid subscribers will be charged an additional 10% at checkout.</span>
          )}
        </p>
      </div>

      {/* Info tambahan */}
      <InfoNote />

      {/* Save & Continue */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 text-white font-semibold rounded-full transition ${
          isFormValid
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Save & Continue
      </button>
    </form>
  );
}