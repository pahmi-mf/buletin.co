import { useState } from 'react';
import AvatarUploader from '@/components/AvatarUploader';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    avatar: null,
    name: '',
    username: '',
    bio: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <AvatarUploader onChange={handleAvatarChange} />

      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input
          type="text"
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          name="bio"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows="3"
          value={formData.bio}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
      >
        Selanjutnya
      </button>
    </form>
  );
}