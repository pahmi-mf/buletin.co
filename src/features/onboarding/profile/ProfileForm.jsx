import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarUploader from '@/components/ui/AvatarUploader';
import Button from '@/components/ui/Button';

export default function ProfileForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    avatar: null,
    name: "",
    bio: "",
    url: "",
  });

  const [errors, setErrors] = useState({
    name: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleAvatarChange = (file) => {
    setFormData((prev) => ({ ...prev, avatar: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi fullname wajib diisi
    if (!formData.name.trim()) {
      setErrors({ name: true });
      return;
    }

    console.log("Form submitted", formData);
    navigate("/onboarding-interest"); // lanjut ke screen 2
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Avatar */}
      <div className="flex justify-center">
        <AvatarUploader onChange={handleAvatarChange} />
      </div>

      {/* Full Name */}
      <div>
        <label
          className={`block text-sm font-semibold mb-1 ${
            errors.name ? "text-red-600" : "text-gray-800"
          }`}
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-md border bg-white px-4 py-2 text-gray-900 placeholder-gray-400
            focus:ring focus:ring-opacity-50 dark:bg-gray-100
            ${errors.name
              ? "border-red-500 focus:border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            }`}
        />
        {errors.name && (
          <p className="text-sm text-red-600 mt-1">Please fill out this field.</p>
        )}
      </div>

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
      <p className="text-xs text-gray-500 flex justify-center gap-1">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Don’t worry! You can edit this later.
      </p>

      {/* Submit button */}
      <Button type="submit" className="w-full" variant="primary">
        Save & Continue
      </Button>
    </form>
  );
}