import { Skeleton, FullCenter, VStack } from '@portfolio/ui';

export default function Loading() {
  return (
    <FullCenter className="min-h-screen bg-background">
      <VStack gap={6} align="center">
        {/* Spinner */}
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-muted border-t-primary" />
        </div>

        {/* Loading text */}
        <VStack gap={2} align="center">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
        </VStack>
      </VStack>
    </FullCenter>
  );
}
