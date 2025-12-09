'use client';

import Link from 'next/link';
import { Button, ThemeToggle } from '@portfolio/ui';


export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Theme toggle */}
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      {/* Offline Content */}
      <div className="flex flex-col items-center gap-8 text-center px-4">
        {/* Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <svg
            className="h-12 w-12 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            You're Offline
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            It looks like you've lost your internet connection. Please check your
            network and try again.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button onClick={() => window.location.reload()}>
            Try again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>

        {/* Tips */}
        <div className="mt-4 max-w-md rounded-lg bg-muted p-4 text-left">
          <h3 className="font-medium text-foreground">Things to try:</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>• Check your Wi-Fi or mobile data connection</li>
            <li>• Try restarting your router</li>
            <li>• Move closer to your Wi-Fi router</li>
            <li>• Disable airplane mode if enabled</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Portfolio
      </div>
    </div>
  );
}

