import OnboardingLayout from '@/components/layouts/OnboardingLayout';
import Stepper from '@/components/ui/Stepper';
import { X } from 'lucide-react';
import PublicationForm from './PublicationForm';
import usePageTitle from '@/hooks/usePageTitle';

export default function OnboardingPublicationPage() {
  usePageTitle("Set Up Your Publication");

  return (
    <OnboardingLayout 
      centerContent={<Stepper currentStep={1} totalSteps={3} />} 
      rightContent={
        <a href='/home'
          className="text-rose-500 hover:text-rose-600 transition"
        >
          <X size={20} />
        </a>
      }
    >
      <div className="w-full max-w-md bg-gray-50 rounded-2xl px-6 py-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">Create Your Buletin</h1>
        <p className="text-center text-gray-500 mb-6">
          Start by adding details about your buletin.
        </p>

        <PublicationForm />
      </div>
    </OnboardingLayout>
  );
}