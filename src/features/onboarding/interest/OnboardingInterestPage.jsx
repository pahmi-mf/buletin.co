import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import OnboardingLayout from '@/components/layouts/OnboardingLayout';
import StepperProgressBar from '@/components/ui/StepperProgressBar';
import TopicSelector from "./TopicSelector";
import Button from '@/components/ui/Button';
import usePageTitle from "@/hooks/usePageTitle";

const OnboardingInterestPage = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigate = useNavigate();

  const handleToggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const handleStartReading = () => {
    console.log("Selected topics:", selectedTopics); // nanti bisa simpan ke backend/global state
    navigate("/home");
  };

  usePageTitle("Reading Interests");


  return (
    <OnboardingLayout centerContent={<StepperProgressBar currentStep={2} totalSteps={2} />} >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-1 mt-6">Discover Content You Love</h1>
        <p className="text-center text-gray-500 mb-6">
          Select your favorite topics, and we’ll tailor your reading experience just for you.
        </p>

        <TopicSelector selected={selectedTopics} onToggle={handleToggleTopic} />

        <div className="mt-10">
          <Button
            onClick={handleStartReading} 
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Start reading
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingInterestPage;