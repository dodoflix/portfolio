import '@testing-library/jest-dom/vitest';

// No-op function to satisfy eslint
const noop = (): void => {
  // intentionally empty
};

// Mock ResizeObserver for Radix components
global.ResizeObserver = class ResizeObserver {
  observe = noop;
  unobserve = noop;
  disconnect = noop;
};

// Mock hasPointerCapture for Select component
if (typeof Element !== 'undefined') {
  Element.prototype.hasPointerCapture = () => false;
  Element.prototype.setPointerCapture = noop;
  Element.prototype.releasePointerCapture = noop;
}

// Mock scrollIntoView
if (typeof Element !== 'undefined') {
  Element.prototype.scrollIntoView = noop;
}

// Mock matchMedia for next-themes
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
