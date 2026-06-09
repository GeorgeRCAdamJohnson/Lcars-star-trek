import React, { useState, useEffect } from 'react';

export interface LcarsClockProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Computes a TNG-style stardate from a JS Date. */
function computeStardate(date: Date): string {
  const year = date.getFullYear();
  const start = new Date(year, 0, 0);
  const diff = date.getTime() - start.getTime();
  const day = diff / 86400000;
  const stardate = (year - 2323) * 1000 + (day * 1000) / 365.25;
  return stardate.toFixed(1);
}

export const LcarsClock: React.FC<LcarsClockProps> = ({
  className = '',
  style,
}) => {
  const [stardate, setStardate] = useState(() => computeStardate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setStardate(computeStardate(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`lcars-clock ${className}`.trim()} style={style}>
      {stardate}
    </span>
  );
};
