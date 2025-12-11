'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

export interface UseIntersectionOptions {
  /** Threshold(s) for triggering the callback */
  threshold?: number | number[];
  /** Root element for intersection */
  root?: Element | null;
  /** Root margin */
  rootMargin?: string;
  /** Trigger only once */
  triggerOnce?: boolean;
}

export interface UseIntersectionReturn {
  /** Ref to attach to the element */
  ref: RefObject<HTMLDivElement | null>;
  /** Whether the element is in view */
  inView: boolean;
  /** The intersection entry */
  entry: IntersectionObserverEntry | null;
}

/**
 * Hook for detecting when an element enters the viewport
 */
export function useIntersection({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  triggerOnce = false,
}: UseIntersectionOptions = {}): UseIntersectionReturn {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        setEntry(observerEntry);
        setInView(observerEntry.isIntersecting);

        if (triggerOnce && observerEntry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, inView, entry };
}

