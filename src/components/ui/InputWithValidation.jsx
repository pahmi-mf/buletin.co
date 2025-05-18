import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function InputWithValidation({
  id,
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <div>
      <Label htmlFor={id} className={`mb-1 block text-sm font-medium ${error ? "text-red-600" : "text-gray-900"}`}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border px-4 py-2 ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-500"}`}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}