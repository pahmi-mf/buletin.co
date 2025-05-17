import OnboardingLayout from '@/components/OnboardingLayout';
import StepperProgressBar from '@/components/StepperProgressBar';
import ProfileForm from './ProfileForm';

export default function OnboardingProfilePage() {
  return (
    <OnboardingLayout
      centerContent={<StepperProgressBar currentStep={1} totalSteps={2} />}
    >
      <div className="w-full max-w-md bg-gray-50 rounded-2xl px-6 py-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">Complete Your Profile</h1>
        <p className="text-center text-gray-500 mb-6">
          Add your profile picture, name, and a short bio.
        </p>

        <ProfileForm />
      </div>
    </OnboardingLayout>
  );
}