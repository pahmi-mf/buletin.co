import OnboardingLayout from '@/components/layouts/OnboardingLayout';
import Stepper from '@/components/ui/Stepper';
import BankForm from './BankForm';
import usePageTitle from '@/hooks/usePageTitle';

export default function OnboardingBankPage() {
  usePageTitle("Bank Account");

  return (
    <OnboardingLayout centerContent={<Stepper currentStep={3} totalSteps={3} />} >
      <div className="w-full max-w-md bg-gray-50 rounded-2xl px-6 py-8 shadow-sm">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">Add Bank Account</h1>
        <p className="text-center text-gray-500 mb-6">
          Enter your bank details to enable withdrawals.
        </p>

        <BankForm />
      </div>
    </OnboardingLayout>
  );
}