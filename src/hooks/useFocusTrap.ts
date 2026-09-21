import { useEffect, useRef } from 'react';

/**
 * Traps keyboard focus within a modal container and restores focus upon closing.
 */
export function useFocusTrap<T extends HTMLElement = HTMLDivElement>(isActive: boolean) {
  const containerRef = useRef<T>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Store element that was focused before modal opened
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    // Focus the first focusable element inside modal, or the container itself
    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelector);

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      container.focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const currentFocusables = container.querySelectorAll<HTMLElement>(focusableSelector);
      if (currentFocusables.length === 0) return;

      const firstElement = currentFocusables[0];
      const lastElement = currentFocusables[currentFocusables.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);

    return () => {
      window.removeEventListener('keydown', handleTabKey);
      // Restore focus to previous element
      if (previouslyFocusedElementRef.current && typeof previouslyFocusedElementRef.current.focus === 'function') {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
}
