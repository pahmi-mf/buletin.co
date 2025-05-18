import React from 'react';

export default function StepperProgressBar({ currentStep, totalSteps }) {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="flex items-center space-x-4 w-full max-w-md">
      <div className="text-gray-700 dark:text-gray-300 font-semibold">
        Step {currentStep}/{totalSteps}
      </div>
      <div className="flex-1 h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-3 bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
}