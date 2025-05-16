import { useState } from "react";
import AvatarUploader from '@/components/AvatarUploader';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    avatar: null,
    name: "",
    bio: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (file) => {
    setFormData((prev) => ({ ...prev, avatar: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Form submitted! Check console.");
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="p-8 w-full"
      >

        <AvatarUploader onChange={handleAvatarChange} />

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black
              placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50
              dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Tell us about yourself</span>
          <textarea
            name="bio"
            placeholder="Share a brief bio or introduce yourself"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black
              placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50
              dark:bg-gray-700 dark:text-white dark:border-gray-600 resize-none"
            rows={4}
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 dark:text-gray-300 font-medium">URL</span>
          <input
            type="url"
            name="url"
            placeholder="https://instagram.com/username"
            value={formData.url}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black
              placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50
              dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </label>
        <p className="text-xs text-gray-400 mb-4 text-center flex items-center justify-center gap-1">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Don’t worry! You can edit this later.
        </p>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Save & Continue
        </button>
      </form>
  );
}