import { useState } from "react";
import AvatarUploader from '@/components/ui/AvatarUploader';
import InputWithValidation from '@/components/ui/InputWithValidation';
import SelectWithValidation from '@/components/ui/SelectWithValidation';
import Textarea from '@/components/ui/textarea';
import { INTEREST_CATEGORIES } from '@/constants/interests';
import Button from '@/components/ui/Button';
import { useNavigate } from "react-router-dom";

export default function PublicationForm() {
  const navigate = useNavigate();
  const [form, setFormData] = useState({
    image: null,
    avatar: null,
    name: "",
    description: "",
    category: "",
    url: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    const value = e?.target?.value ?? e;
    setFormData({ ...form, [field]: String(value) });
    setErrors({ ...errors, [field]: "" });
  };

  const handleAvatarChange = (file) => {
    setFormData((prev) => ({ ...prev, avatar: file }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};
  if (!form.name.trim()) newErrors.name = "Bulletin name is required";
  if (typeof form.category !== "string" || !form.category.trim()) {
    newErrors.category = "Please select a category";
  }
  if (!form.url.trim()) newErrors.url = "Bulletin URL is required";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  localStorage.setItem("hasBulletin", true);
  console.log("Form submitted", form);
  navigate("/onboarding-publisher-service-plan");
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Avatar Uploader */}
      <div className="flex justify-center">
        <AvatarUploader onChange={handleAvatarChange} />
      </div>

      {/* Name */}
      <InputWithValidation
        id="name"
        name="name"
        label="Bulletin Name"
        value={form.name}
        onChange={handleChange("name")}
        error={errors.name}
        placeholder="e.g. The Weekly Journal"
      />

      {/* Description */}
      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-900">
          Description (optional)
        </label>
        <Textarea
          id="description"
          value={form.description}
          onChange={handleChange("description")}
          placeholder="Tell readers what your bulletin is about"
        />
      </div>

      {/* Category */}
      <SelectWithValidation
        label="Category"
        value={form.category}
        onChange={handleChange("category")}
        error={errors.category}
        placeholder="Choose category"
        options={INTEREST_CATEGORIES}
      />

      {/* URL */}
      <InputWithValidation
        id="url"
        name="url"
        label="Bulletin URL"
        value={form.url}
        onChange={handleChange("url")}
        error={errors.url}
        placeholder="e.g. theweeklyjournal"
      />

      {/* Submit button */}
      <div className="pt-4 flex justify-center">
        <Button type="submit" variant="primary">
          Save & Continue
        </Button>
      </div>

    </form>
  );
}