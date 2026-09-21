import { useEffect } from 'react';

/**
 * Custom hook to lock body scrolling when a modal is open.
 * Prevents layout shifts caused by scrollbar disappearing.
 */
export function useLockBodyScroll(isLocked: boolean = true): void {
  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Apply lock
    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
}
