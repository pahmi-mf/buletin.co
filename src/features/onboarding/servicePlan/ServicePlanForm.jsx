import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@/components/ui/Button';
import InfoNote from '@/components/ui/InfoNote';

export default function ServicePlanForm() {
  const navigate = useNavigate();
  const [form, setFormData] = useState({

  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value = e?.target?.value ?? e;
    setFormData({ ...form, [field]: String(value) });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted", form);
    navigate("/onboarding-bank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Info note */}
      <InfoNote/>

      {/* Submit button */}
      <div className="pt-4 flex justify-center">
        <Button type="submit" variant="primary">
          Start Writting
        </Button>
      </div>

    </form>
  );
}