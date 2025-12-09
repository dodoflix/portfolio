import { Skeleton } from '@portfolio/ui';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-muted border-t-primary" />
        </div>

        {/* Loading text */}
        <div className="space-y-2 text-center">
          <Skeleton className="mx-auto h-6 w-32" />
          <Skeleton className="mx-auto h-4 w-48" />
        </div>
      </div>
    </div>
  );
}

