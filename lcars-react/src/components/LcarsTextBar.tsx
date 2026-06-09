import React from 'react';
import { LcarsColor } from './LcarsElbow';

export interface LcarsTextBarProps {
  color?: LcarsColor;
  /** Align text to the end */
  end?: boolean;
  /** Full border radius (both sides) */
  full?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const LcarsTextBar: React.FC<LcarsTextBarProps> = ({
  color = 'african-violet',
  end,
  full,
  className = '',
  style,
  children,
}) => {
  const classes = [
    'lcars-text-bar',
    `lcars-${color}`,
    end && 'lcars-text-bar--end',
    full && 'lcars-text-bar--full',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
