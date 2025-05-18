import OnboardingLayout from '@/components/layouts/OnboardingLayout';
import Stepper from '@/components/ui/Stepper';
import ServicePlanForm from './ServicePlanForm';
import usePageTitle from '@/hooks/usePageTitle';

export default function OnboardingServicePlanPage() {
  usePageTitle("Service Plan");

  return (
    <OnboardingLayout centerContent={<Stepper currentStep={2} totalSteps={3} />} >
      <div className="w-full max-w-md bg-gray-50 rounded-2xl px-6 py-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">Set Your Access Plans</h1>
        <p className="text-center text-gray-500 mb-6">
          Create pricing options for subscribers to unlock your paid posts.
        </p>

        <ServicePlanForm />
      </div>
    </OnboardingLayout>
  );
}