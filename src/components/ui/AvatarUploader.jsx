import { useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function AvatarUploader({ onChange }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onChange(file);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-24 h-24">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div
        onClick={triggerFileSelect}
        className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer bg-white hover:bg-gray-100 transition relative overflow-hidden"
      >
        {preview ? (
          <img
            src={preview}
            alt="Avatar preview"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <CameraIcon className="w-6 h-6 text-gray-400" />
        )}
      </div>
    </div>
  );
}