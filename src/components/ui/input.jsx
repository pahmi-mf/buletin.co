export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-md border bg-white px-4 py-2 text-gray-900 placeholder-gray-400
            focus:ring focus:ring-opacity-50 dark:bg-gray-100 ${className}`}
      {...props}
    />
  );
}