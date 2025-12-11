import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useIntersection } from './use-intersection';

describe('useIntersection', () => {
  beforeEach(() => {
    const mockIntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns ref object', () => {
    const { result } = renderHook(() => useIntersection());
    expect(result.current.ref).toBeDefined();
    expect(result.current.ref.current).toBeNull();
  });

  it('returns inView state as false initially', () => {
    const { result } = renderHook(() => useIntersection());
    expect(result.current.inView).toBe(false);
  });

  it('returns entry state as null initially', () => {
    const { result } = renderHook(() => useIntersection());
    expect(result.current.entry).toBeNull();
  });

  it('accepts threshold option', () => {
    const { result } = renderHook(() =>
      useIntersection({ threshold: 0.5 })
    );
    expect(result.current.ref).toBeDefined();
  });

  it('accepts rootMargin option', () => {
    const { result } = renderHook(() =>
      useIntersection({ rootMargin: '10px' })
    );
    expect(result.current.ref).toBeDefined();
  });

  it('accepts triggerOnce option', () => {
    const { result } = renderHook(() =>
      useIntersection({ triggerOnce: true })
    );
    expect(result.current.ref).toBeDefined();
  });

  it('ref can be assigned to element', () => {
    const { result } = renderHook(() => useIntersection());
    const element = document.createElement('div');
    
    // Manually assign to test ref works
    (result.current.ref as React.MutableRefObject<HTMLDivElement | null>).current = element;
    expect(result.current.ref.current).toBe(element);
  });
});
