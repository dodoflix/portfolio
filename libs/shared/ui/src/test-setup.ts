import '@testing-library/jest-dom/vitest';

// Mock ResizeObserver for Radix components
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock hasPointerCapture for Select component
if (typeof Element !== 'undefined') {
  Element.prototype.hasPointerCapture = () => false;
  Element.prototype.setPointerCapture = () => {};
  Element.prototype.releasePointerCapture = () => {};
}

// Mock scrollIntoView
if (typeof Element !== 'undefined') {
  Element.prototype.scrollIntoView = () => {};
}
