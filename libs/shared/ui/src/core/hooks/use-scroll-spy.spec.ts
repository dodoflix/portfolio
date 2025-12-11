import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useScrollSpy } from './use-scroll-spy';

describe('useScrollSpy', () => {
  beforeEach(() => {
    // Mock getElementById
    vi.spyOn(document, 'getElementById').mockImplementation((id) => {
      const element = document.createElement('div');
      element.id = id;
      element.getBoundingClientRect = vi.fn().mockReturnValue({
        top: id === 'section1' ? 100 : 500,
      });
      return element;
    });

    // Mock window properties
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns activeId', () => {
    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ['section1', 'section2'] })
    );
    expect(result.current.activeId).toBeDefined();
  });

  it('returns isActive function', () => {
    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ['section1', 'section2'] })
    );
    expect(typeof result.current.isActive).toBe('function');
  });

  it('returns scrollTo function', () => {
    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ['section1', 'section2'] })
    );
    expect(typeof result.current.scrollTo).toBe('function');
  });

  it('isActive returns true for active section', () => {
    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ['section1', 'section2'] })
    );
    // section1 has top: 100, which is within viewport
    expect(result.current.isActive('section1')).toBe(true);
  });

  it('scrollTo calls scrollIntoView on element', () => {
    const mockScrollIntoView = vi.fn();
    vi.spyOn(document, 'getElementById').mockImplementation((id) => {
      const element = document.createElement('div');
      element.id = id;
      element.scrollIntoView = mockScrollIntoView;
      element.getBoundingClientRect = vi.fn().mockReturnValue({ top: 100 });
      return element;
    });

    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ['section1', 'section2'] })
    );

    act(() => {
      result.current.scrollTo('section1');
    });

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
