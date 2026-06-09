import React from 'react';

export type ElbowPosition = 'tl' | 'tr' | 'bl' | 'br';

export type LcarsColor =
  | 'orange' | 'gold' | 'tan' | 'salmon' | 'red'
  | 'blue' | 'lavender' | 'african-violet' | 'green'
  | 'violet-creme' | 'magenta' | 'bluey' | 'sky' | 'ice'
  | 'sunflower' | 'honey' | 'wheat' | 'peach' | 'butterscotch'
  | 'tomato' | 'lilac' | 'mars' | 'cardinal' | 'almond';

export interface LcarsElbowProps {
  position: ElbowPosition;
  color?: LcarsColor;
  className?: string;
}

export const LcarsElbow: React.FC<LcarsElbowProps> = ({
  position,
  color = 'orange',
  className = '',
}) => {
  const classes = [
    'lcars-elbow',
    `lcars-elbow-${position}`,
    `lcars-${color}`,
    className,
  ].filter(Boolean).join(' ');

  return <div className={classes} />;
};
