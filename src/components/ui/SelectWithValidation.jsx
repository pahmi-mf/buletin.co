import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem } from '@/components/ui/select';

export default function SelectWithValidation({
  label,
  value,
  onChange,
  error,
  options = [],
  placeholder = "Choose...",
}) {
  return (
    <div>
      <Label className={`mb-1 block text-sm font-medium ${error ? "text-red-600" : "text-gray-900"}`}>
        {label}
      </Label>
      <Select
        value={value}
        onChange={onChange}
        className={`w-full rounded-md border px-4 py-2 ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-500"}`}
      >
        <SelectContent>
          <SelectItem value="">{placeholder}</SelectItem>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}