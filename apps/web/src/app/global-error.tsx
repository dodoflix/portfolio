'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8 text-center px-4">
            {/* Icon */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
              <svg
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                Something went wrong
              </h1>
              <p className="max-w-md text-lg text-neutral-600 dark:text-neutral-400">
                A critical error has occurred. Please try again.
              </p>
            </div>

            {/* Actions */}
            <button
              onClick={reset}
              className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Try again
            </button>
          </div>

          {/* Footer */}
          <div className="absolute bottom-6 text-sm text-neutral-500">
            © {new Date().getFullYear()} Portfolio
          </div>
        </div>
      </body>
    </html>
  );
}

