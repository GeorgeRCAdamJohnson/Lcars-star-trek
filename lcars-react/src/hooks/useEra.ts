import { useState, useCallback, useEffect } from 'react';
import { Era } from '../components/LcarsFrame';

export interface UseEraReturn {
  /** Current era */
  era: Era;
  /** Set the era */
  setEra: (era: Era) => void;
  /** Cycle to the next era */
  nextEra: () => void;
}

const ERA_ORDER: Era[] = ['tng', 'voy', 'ds9'];

/**
 * Hook for managing the LCARS era state.
 * Updates the data-era attribute on the html element.
 */
export function useEra(initialEra: Era = 'tng'): UseEraReturn {
  const [era, setEraState] = useState<Era>(initialEra);

  useEffect(() => {
    document.documentElement.setAttribute('data-era', era);
  }, [era]);

  const setEra = useCallback((newEra: Era) => {
    setEraState(newEra);
  }, []);

  const nextEra = useCallback(() => {
    setEraState((current) => {
      const idx = ERA_ORDER.indexOf(current);
      return ERA_ORDER[(idx + 1) % ERA_ORDER.length];
    });
  }, []);

  return { era, setEra, nextEra };
}
