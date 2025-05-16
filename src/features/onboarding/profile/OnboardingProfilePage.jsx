// OnboardingProfilePage.jsx
import ProfileForm from './ProfileForm';
import StepperProgressBar from '../../../components/StepperProgressBar';

export default function OnboardingProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 flex justify-center">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md my-10">
        <StepperProgressBar currentStep={1} totalSteps={2} />
        <h1 className="text-2xl font-bold text-center mt-4">Complete Your Profile</h1>
        <p className="text-gray-600 text-sm text-center mb-6">Add your profile picture, name, and a short bio.</p>
        <ProfileForm />
      </div>
    </div>
  );
}
