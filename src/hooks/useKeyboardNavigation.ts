import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onEscape?: () => void;
  onEnter?: () => void;
  isEnabled?: boolean;
}

export function useKeyboardNavigation({
  onArrowLeft,
  onArrowRight,
  onEscape,
  onEnter,
  isEnabled = true,
}: UseKeyboardNavigationProps): void {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't intercept typing in inputs/textareas
      const target = event.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) && event.key !== 'Escape') {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          if (onArrowLeft) {
            event.preventDefault();
            onArrowLeft();
          }
          break;
        case 'ArrowRight':
          if (onArrowRight) {
            event.preventDefault();
            onArrowRight();
          }
          break;
        case 'Escape':
          if (onEscape) {
            event.preventDefault();
            onEscape();
          }
          break;
        case 'Enter':
          if (onEnter) {
            onEnter();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onArrowLeft, onArrowRight, onEscape, onEnter, isEnabled]);
}
