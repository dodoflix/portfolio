import * as React from 'react';

// Mock useTranslations hook
export function useTranslations(namespace?: string) {
  return (key: string, values?: Record<string, string | number>) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    if (values) {
      let result = fullKey;
      Object.entries(values).forEach(([k, v]) => {
        result = result.replace(`{${k}}`, String(v));
      });
      return result;
    }
    return fullKey;
  };
}

// Mock useLocale hook
export const useLocale = () => 'en';

// Mock useMessages hook
export const useMessages = () => ({});

// Mock useNow hook
export const useNow = () => new Date();

// Mock useTimeZone hook
export const useTimeZone = () => 'UTC';

// Mock useFormatter hook
export const useFormatter = () => ({
  number: (value: number) => String(value),
  dateTime: (value: Date) => value.toISOString(),
  relativeTime: (value: Date) => 'some time ago',
  list: (value: string[]) => value.join(', '),
});

// Mock NextIntlClientProvider
export const NextIntlClientProvider = ({
  children,
}: {
  children: React.ReactNode;
  locale?: string;
  messages?: Record<string, unknown>;
}) => {
  return <>{children}</>;
};

// Mock IntlProvider (from use-intl)
export const IntlProvider = NextIntlClientProvider;

export default {
  useTranslations,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
  useFormatter,
  NextIntlClientProvider,
  IntlProvider,
};

