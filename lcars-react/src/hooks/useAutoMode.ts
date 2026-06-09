import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseAutoModeOptions {
  /** List of screen identifiers to cycle through */
  screens: string[];
  /** Idle timeout in ms before auto-mode activates (default: 30000) */
  idleTimeout?: number;
  /** Interval between screen changes in ms (default: 5000) */
  cycleInterval?: number;
}

export interface UseAutoModeReturn {
  /** Currently active screen id */
  activeScreen: string;
  /** Whether auto-mode is currently cycling */
  isAutoMode: boolean;
  /** Manually set the active screen (resets idle timer) */
  setScreen: (screen: string) => void;
}

/**
 * Hook that automatically cycles through screens after a period of user inactivity.
 * Resets to manual mode on any user interaction (mouse, keyboard, click).
 */
export function useAutoMode({
  screens,
  idleTimeout = 30000,
  cycleInterval = 5000,
}: UseAutoModeOptions): UseAutoModeReturn {
  const [activeScreen, setActiveScreen] = useState(screens[0] ?? '');
  const [isAutoMode, setIsAutoMode] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

  const stopAutoMode = useCallback(() => {
    setIsAutoMode(false);
    if (cycleTimerRef.current) {
      clearInterval(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }
  }, []);

  const startAutoMode = useCallback(() => {
    setIsAutoMode(true);
    cycleTimerRef.current = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % screens.length;
      setActiveScreen(screens[indexRef.current]);
    }, cycleInterval);
  }, [screens, cycleInterval]);

  const resetIdle = useCallback(() => {
    stopAutoMode();
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = setTimeout(startAutoMode, idleTimeout);
  }, [stopAutoMode, startAutoMode, idleTimeout]);

  const setScreen = useCallback(
    (screen: string) => {
      const idx = screens.indexOf(screen);
      if (idx >= 0) {
        indexRef.current = idx;
        setActiveScreen(screen);
      }
      resetIdle();
    },
    [screens, resetIdle]
  );

  useEffect(() => {
    const events: Array<keyof DocumentEventMap> = ['mousemove', 'keydown', 'click', 'touchstart'];
    events.forEach((evt) => document.addEventListener(evt, resetIdle));
    // Start initial idle timer
    idleTimerRef.current = setTimeout(startAutoMode, idleTimeout);

    return () => {
      events.forEach((evt) => document.removeEventListener(evt, resetIdle));
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    };
  }, [resetIdle, startAutoMode, idleTimeout]);

  return { activeScreen, isAutoMode, setScreen };
}
