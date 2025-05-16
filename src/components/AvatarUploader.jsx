import { useState } from 'react';

export default function AvatarUploader({ onChange }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange(file);
  };

  return (
    <div className="flex flex-col items-center">
      <label className="cursor-pointer">
        <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100 overflow-hidden">
          {preview ? (
            <img src={preview} alt="Avatar Preview" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-sm text-gray-500">Upload</span>
          )}
        </div>
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>
    </div>
  );
}