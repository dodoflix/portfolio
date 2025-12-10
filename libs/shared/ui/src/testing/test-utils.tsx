/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

/**
 * Custom render function that wraps components with necessary providers
 */
type CustomRenderOptions = Omit<RenderOptions, 'wrapper'>;

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="test-wrapper">{children}</div>;
};

export const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
) => render(ui, { wrapper: AllProviders, ...options });

// Re-export everything from testing-library
export * from '@testing-library/react';
export { customRender as render };

// Simple no-op function for mocks when jest isn't available
const noop = (): void => {
  // intentionally empty for mocking
};

/**
 * Mock for ResizeObserver - commonly needed for Radix UI components
 */
export const mockResizeObserver = () => {
  (global as any).ResizeObserver = class ResizeObserver {
    observe = noop;
    unobserve = noop;
    disconnect = noop;
  };
};

/**
 * Mock for window.matchMedia - needed for theme/responsive testing
 */
export const mockMatchMedia = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: noop,
      removeListener: noop,
      addEventListener: noop,
      removeEventListener: noop,
      dispatchEvent: () => false,
    }),
  });
};

/**
 * Mock for window.location
 */
export const mockWindowLocation = () => {
  const loc = window.location;
  // @ts-expect-error - delete for mocking purposes
  delete window.location;
  window.location = {
    href: loc?.href || 'http://localhost/',
    origin: loc?.origin || 'http://localhost',
    protocol: loc?.protocol || 'http:',
    host: loc?.host || 'localhost',
    hostname: loc?.hostname || 'localhost',
    port: loc?.port || '',
    pathname: loc?.pathname || '/',
    search: loc?.search || '',
    hash: loc?.hash || '',
    reload: noop as any,
    assign: noop as any,
    replace: noop as any,
    toString: () => 'http://localhost/',
  } as unknown as Location;
};

/**
 * Mock for window.history
 */
export const mockWindowHistory = () => {
  Object.defineProperty(window, 'history', {
    value: {
      back: noop,
      forward: noop,
      go: noop,
      pushState: noop,
      replaceState: noop,
      length: 0,
      state: null,
      scrollRestoration: 'auto',
    },
    writable: true,
  });
};

/**
 * Setup all common mocks - call this in your test setup file
 */
export const setupTestEnvironment = () => {
  mockResizeObserver();
  mockMatchMedia();
  mockWindowLocation();
  mockWindowHistory();
};
