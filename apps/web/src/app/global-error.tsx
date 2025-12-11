'use client';

/**
 * Global Error Boundary
 * 
 * This is a special Next.js error page that catches errors at the root level,
 * including errors in the root layout. It must:
 * - Include its own <html> and <body> tags
 * - Not rely on providers (ThemeProvider, etc.) as they might be the cause of the error
 * - Import CSS directly to ensure styles work
 * - Keep dependencies minimal for reliability
 */

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn, Button } from '@portfolio/ui';
import './global.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background text-foreground antialiased')}>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-2xl">
            {/* Icon */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <AlertTriangle className="h-12 w-12" />
            </div>

            {/* Message */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Something went wrong
              </h1>
              <p className="max-w-md text-lg text-muted-foreground">
                A critical error has occurred. Please try again.
              </p>
            </div>

            {/* Actions */}
            <Button onClick={reset} size="lg">
              Try again
            </Button>
          </div>

          {/* Footer */}
          <div className="absolute bottom-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio
          </div>
        </div>
      </body>
    </html>
  );
}

