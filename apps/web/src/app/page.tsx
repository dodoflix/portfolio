import { ThemeToggle } from '@portfolio/ui';

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Theme toggle in top right */}
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      {/* Coming Soon content */}
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter text-foreground sm:text-8xl">
            Coming Soon
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Something amazing is in the works. Stay tuned!
          </p>
        </div>

        {/* Decorative element */}
        <div className="flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-primary/20" />
          <div className="h-1 w-8 rounded-full bg-primary/40" />
          <div className="h-1 w-4 rounded-full bg-primary" />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Portfolio
      </div>
    </div>
  );
}
