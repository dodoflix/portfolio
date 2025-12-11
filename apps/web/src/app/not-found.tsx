'use client';

import Link from 'next/link';
import {
  Button,
  ThemeToggle,
  // Compositions
  StatusPage,
} from '@portfolio/ui';

export default function RootNotFound() {
  return (
    <div className="relative">
      {/* Top right actions - LanguageSwitcher excluded as this page is outside i18n context */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <StatusPage
        code="404"
        title="Page not found"
        description="The page you're looking for doesn't exist or has been moved."
        actions={
          <>
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go back
            </Button>
          </>
        }
      />
    </div>
  );
}
