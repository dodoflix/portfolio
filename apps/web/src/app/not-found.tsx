'use client';

import Link from 'next/link';
import { Button, ThemeToggle } from '@portfolio/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Theme toggle */}
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      {/* 404 Content */}
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Large 404 */}
        <div className="relative">
          <span className="text-[12rem] font-bold leading-none text-muted-foreground/10 sm:text-[16rem]">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Page not found
            </h1>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-md text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been
          moved or doesn't exist.
        </p>

        {/* Actions */}
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go back
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Portfolio
      </div>
    </div>
  );
}

