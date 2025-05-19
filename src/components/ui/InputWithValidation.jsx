import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function InputWithValidation({
  id,
  name,
  label,
  value,
  onChange,
  error = null,
  placeholder,
  type = 'text',
  required = false,
  className = '',
  ...props
}) {
  return (
    <div>
      {label && (
        <Label
          htmlFor={id}
          className={`mb-1 block text-sm font-medium ${error ? "text-red-600" : "text-gray-900"}`}
        >
          {label}
        </Label>
      )}

      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${
          error ? "ring-1 ring-red-500" : ""
        } ${className}`}
        {...props}
      />

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}