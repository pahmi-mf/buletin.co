export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      rows="4"
      {...props}
    />
  );
}