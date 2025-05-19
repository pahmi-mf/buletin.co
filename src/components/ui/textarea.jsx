import { baseInputStyle } from './inputStyle';
import { Label } from '@/components/ui/label';

export default function Textarea({
  id,
  label,
  error,
  className = '',
  ...props
}) {
  return (
    <div>
      {label && (
        <Label
          htmlFor={id}
          className={`mb-1 block text-sm font-medium ${error ? 'text-red-600' : 'text-gray-900'}`}
        >
          {label}
        </Label>
      )}

      <textarea
        id={id}
        className={`${baseInputStyle} ${className}`}
        rows="4"
        {...props}
      />

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}