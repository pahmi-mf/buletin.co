import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@/components/ui/Button';
import InputWithValidation from '@/components/ui/InputWithValidation';
import SelectWithValidation from '@/components/ui/SelectWithValidation';
import InfoNote from '@/components/ui/InfoNote';
import { BANKS } from '@/constants/banks';

export default function BankForm() {
  const navigate = useNavigate();
  const [form, setFormData] = useState({
    bank: "",
    accountName: "",
    accountNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value = e?.target?.value ?? e;
    setFormData({ ...form, [field]: String(value) });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (typeof form.bank !== "string" || !form.bank.trim()) {
      newErrors.bank = "Please select a bank name";
    }
    if (!form.accountName.trim()) newErrors.accountName = "Account name is required";
    if (!form.accountNumber.trim()) newErrors.accountNumber = "Account number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted", form);
    navigate("/publisher/post");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Bank */}
      <SelectWithValidation
        label="Bank Name"
        value={form.bank}
        onChange={handleChange("bank")}
        error={errors.bank}
        placeholder="Choose bank"
        options={BANKS}
      />

      {/* Account Name */}
      <InputWithValidation
        id="accountName"
        name="accountName"
        label="Account Name"
        value={form.accountName}
        onChange={handleChange("accountName")}
        error={errors.accountName}
        placeholder=""
      />

      {/* Account Number */}
      <InputWithValidation
        id="accountNumber"
        name="accountNumber"
        label="Account Number"
        value={form.accountNumber}
        onChange={handleChange("accountNumber")}
        error={errors.accountNumber}
        placeholder=""
      />

      {/* Info note */}
      <InfoNote text={"You can add, edit, or manage your bank accounts later anytime."}/>

      {/* Submit button */}
      <div className="pt-4 flex justify-center">
        <Button type="submit" variant="primary">
          Start Writting
        </Button>
      </div>

    </form>
  );
}