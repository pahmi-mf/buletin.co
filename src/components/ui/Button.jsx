import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;