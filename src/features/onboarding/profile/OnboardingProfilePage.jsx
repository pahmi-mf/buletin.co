import ProfileForm from './ProfileForm';
import StepperProgressBar from '../../../components/StepperProgressBar';

export default function OnboardingProfilePage() {
  return (
    <div className="min-h-screen bg-white px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl">
        <div className="text-center mb-6">
          <StepperProgressBar currentStep={1} totalSteps={2} />
          <h1 className="text-3xl font-bold mt-4 text-black">Complete Your Profile</h1>
          <p className="text-gray-500 text-sm mt-1">Add your profile picture, name, and a short bio.</p>
        </div>

        <div className="bg-gray-50 p-0 rounded-2xl shadow-sm min-h-screen flex  justify-center bg-gray-50 dark:bg-gray-900 p-4">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}