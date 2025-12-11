import {
  ThemeToggle,
  Badge,
  HStack,
  // Compositions
  StatusPage,
} from '@portfolio/ui';
import { Settings } from 'lucide-react';

export const metadata = {
  title: 'Maintenance - Portfolio',
  description: 'Site is under maintenance',
};

export default function MaintenancePage() {
  return (
    <div className="relative">
      {/* Top right actions */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <StatusPage
        icon={<Settings className="h-16 w-16 text-primary animate-spin-slow" />}
        title="Under Maintenance"
        description="We're currently performing scheduled maintenance to improve your experience. We'll be back shortly."
      >
        <HStack gap={2} justify="center" className="mt-4">
          <Badge variant="secondary" className="animate-pulse">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-yellow-500" />
            Maintenance in progress
          </Badge>
        </HStack>

        <p className="mt-4 text-sm text-muted-foreground">
          Estimated completion: Soon™
        </p>
      </StatusPage>
    </div>
  );
}
