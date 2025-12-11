'use client';

import Link from 'next/link';
import {
  Button,
  ThemeToggle,
  Card,
  CardContent,
  VStack,
  // Compositions
  StatusPage,
} from '@portfolio/ui';
import { WifiOff, CheckCircle2 } from 'lucide-react';

const tips = [
  'Check your Wi-Fi or mobile data connection',
  'Try restarting your router',
  'Move closer to your Wi-Fi router',
  'Disable airplane mode if enabled',
];

export default function OfflinePage() {
  return (
    <div className="relative">
      {/* Top right actions */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <StatusPage
        icon={<WifiOff className="h-16 w-16 text-muted-foreground" />}
        title="You're Offline"
        description="It looks like you've lost your internet connection. Please check your network and try again."
        actions={
          <>
            <Button onClick={() => window.location.reload()}>Try again</Button>
            <Button variant="outline" asChild>
              <Link href="/">Go home</Link>
            </Button>
          </>
        }
      >
        <Card className="mt-8 max-w-md text-left">
          <CardContent className="pt-6">
            <VStack gap={4} align="start">
              <p className="text-sm font-medium">Things to try:</p>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </VStack>
          </CardContent>
        </Card>
      </StatusPage>
    </div>
  );
}
