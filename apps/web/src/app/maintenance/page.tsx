import { ThemeToggle } from '@portfolio/ui';

export const metadata = {
  title: 'Maintenance - Portfolio',
  description: 'Site is under maintenance',
};

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Theme toggle */}
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      {/* Maintenance Content */}
      <div className="flex flex-col items-center gap-8 text-center px-4">
        {/* Icon */}
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-12 w-12 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          {/* Animated pulse ring */}
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Under Maintenance
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            We're currently performing scheduled maintenance to improve your
            experience. We'll be back shortly.
          </p>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Maintenance in progress
          </span>
        </div>

        {/* Estimated time */}
        <div className="text-sm text-muted-foreground">
          <p>Estimated completion: Soon™</p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Portfolio
      </div>
    </div>
  );
}

