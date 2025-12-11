'use client';

import { useState, useEffect, useCallback } from 'react';

export interface ScrollSpyOptions {
  /** Section IDs to watch */
  sectionIds: string[];
  /** Offset from top of viewport (0-1, as percentage) */
  offset?: number;
  /** Root element (defaults to window) */
  root?: HTMLElement | null;
}

export interface ScrollSpyReturn {
  /** Currently active section ID */
  activeId: string;
  /** Check if a specific section is active */
  isActive: (id: string) => boolean;
  /** Manually set active section */
  setActiveId: (id: string) => void;
  /** Scroll to a section */
  scrollTo: (id: string, behavior?: ScrollBehavior) => void;
}

/**
 * Hook for tracking scroll position and determining active section
 */
export function useScrollSpy({
  sectionIds,
  offset = 0.4,
  root = null,
}: ScrollSpyOptions): ScrollSpyReturn {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollContainer = root || window;
    const viewportHeight = root?.clientHeight || window.innerHeight;
    const triggerPoint = viewportHeight * offset;

    let currentActiveId = '';
    let closestDistance = Infinity;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        
        // Check if section top has passed the trigger point
        if (rect.top <= triggerPoint) {
          const distance = triggerPoint - rect.top;
          if (distance < closestDistance) {
            closestDistance = distance;
            currentActiveId = id;
          }
        }
      }
    }

    // If no section found (at very top), activate the first visible one
    if (!currentActiveId && sectionIds.length > 0) {
      const firstElement = document.getElementById(sectionIds[0]);
      if (firstElement) {
        const rect = firstElement.getBoundingClientRect();
        if (rect.top < viewportHeight) {
          currentActiveId = sectionIds[0];
        }
      }
    }

    setActiveId(currentActiveId);
  }, [sectionIds, offset, root]);

  useEffect(() => {
    handleScroll();
    
    const scrollTarget = root || window;
    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      scrollTarget.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, root]);

  const isActive = useCallback((id: string) => activeId === id, [activeId]);

  const scrollTo = useCallback((id: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior });
  }, []);

  return {
    activeId,
    isActive,
    setActiveId,
    scrollTo,
  };
}

