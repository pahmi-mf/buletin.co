import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarUploader from '@/components/ui/AvatarUploader';
import Button from '@/components/ui/Button';
import InputWithValidation from '@/components/ui/InputWithValidation';
import InfoNote from '@/components/ui/InfoNote';

export default function ProfileForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    avatar: null,
    name: "",
    bio: "",
    url: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAvatarChange = (file) => {
    setFormData((prev) => ({ ...prev, avatar: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrors({ name: "Please fill out this field." });
      return;
    }

    localStorage.setItem("userFullName", formData.name);
    console.log("Form submitted", formData);
    navigate("/onboarding-interest");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Avatar */}
      <div className="flex justify-center">
        <AvatarUploader onChange={handleAvatarChange} />
      </div>

      {/* Full Name */}
      <InputWithValidation
        id="name"
        name="name"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter your full name"
      />

      {/* Bio */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-1">
          Tell us about yourself
        </label>
        <textarea
          name="bio"
          placeholder="Share a brief bio or introduce yourself"
          value={formData.bio}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900
            placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50
            dark:bg-gray-100 dark:border-gray-300 resize-none"
          rows={4}
        />
      </div>

      {/* URL */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-1">URL</label>
        <input
          type="url"
          name="url"
          placeholder="https://instagram.com/username"
          value={formData.url}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900
            placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50
            dark:bg-gray-100 dark:border-gray-300"
        />
      </div>

      {/* Info note */}
      <InfoNote />

      {/* Submit button */}
      <div className="pt-4 flex justify-center">
      <Button type="submit" variant="primary">
        Save & Continue
      </Button>
      </div>

    </form>
  );
}
