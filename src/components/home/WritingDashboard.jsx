import { useEffect, useState } from "react";

export function WritingDashboard() {
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("userFullName");
    if (storedName) {
      setFullName(storedName);
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-black">{fullName ? `${fullName}` : "Hello"}</h2>
      <p className="mt-2 text-sm text-gray-500">Your posts take center stage here. Dive in and make an impact.</p>
    </div>
  );
}