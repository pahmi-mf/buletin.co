export default function OnboardingLayout({ centerContent, rightContent, children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-6 py-4 relative">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <svg
            className="size-10 p-1 text-blue-600"
            viewBox="0 0 41 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5002 -0.000213623C31.5382 -0.000213623 40.5 8.9616 40.5 19.9999C40.5 31.0384 31.5382 40.0002 20.5002 40.0002C9.46167 40.0002 0.5 31.0384 0.5 19.9999V1.99981C0.5 0.895967 1.39618 -0.000213623 2.50003 -0.000213623H10.5008V2.67853C13.4431 0.975048 16.8586 -0.000213623 20.5002 -0.000213623ZM20.5002 12.1975C16.1939 12.1975 12.6977 15.6937 12.6977 19.9999C12.6977 24.3063 16.1939 27.8025 20.5002 27.8025C24.8064 27.8025 28.3026 24.3063 28.3026 19.9999C28.3026 15.6937 24.8064 12.1975 20.5002 12.1975Z"
            />
          </svg>
        </div>

        {/* Center - Stepper or Title */}
        <div className="flex-1 flex justify-center px-4">
          <div className="max-w-sm w-full">{centerContent}</div>
        </div>

        {/* Right - Action (e.g. Close button) */}
        <div className="flex-shrink-0">
          {rightContent}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-1">
        {children}
      </main>
    </div>
  );
}