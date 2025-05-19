import { baseInputStyle } from './inputStyle';

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`${baseInputStyle}  ${className}`}
      {...props}
    />
  );
}