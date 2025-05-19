export default function TransactionFeeToggle({ value, onChange }) {
  return (
    <div className="bg-white border rounded-2xl p-4">
      <p className="text-sm font-medium text-gray-700 mb-2">Transaction Fee (10%)</p>
      <p className="text-xs text-gray-500 mb-4">
        Decide who covers the 10% fee — You or your subscribers.
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => onChange('publisher')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm border ${
            value === 'publisher'
              ? 'bg-violet-600 text-white border-violet-600'
              : 'bg-gray-50 text-gray-700 border-gray-300'
          }`}
        >
          Publisher (You)
        </button>

        <b  tton
          onClick={() => onChange('subscriber')}
          className={`flex-1 px-4 py-2 rounded-lg text-sm border ${
            value === 'subscriber'
              ? 'bg-violet-600 text-white border-violet-600'
              : 'bg-gray-50 text-gray-700 border-gray-300'
          }`}
        >
          Paid Subscribers
        </b>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        {value === 'publisher'
          ? '10% will be deducted from your earnings.'
          : '10% fee will be added to subscriber price.'}
      </p>
    </div>
  );
}