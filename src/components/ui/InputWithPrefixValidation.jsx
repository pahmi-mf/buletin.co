import { useRef, useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';

export default function InputWithPrefix({
  id,
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  prefix = '',
}) {
  const spanRef = useRef(null);
  const [prefixWidth, setPrefixWidth] = useState(0);

  useEffect(() => {
    if (spanRef.current) {
      setPrefixWidth(spanRef.current.offsetWidth);
    }
  }, [prefix]);

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

      <div className="relative">
        <span
          ref={spanRef}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none"
        >
          {prefix}
        </span>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full py-2 pr-4 rounded-md border text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500 ring-red-300' : 'border-gray-300'
          }`}
          style={{ paddingLeft: `${prefixWidth + 12}px` }} // 12px padding after prefix
        />
      </div>

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}