import React from 'react';
import { LcarsColor } from './LcarsElbow';

export interface LcarsBarProps {
  color?: LcarsColor;
  /** Fill remaining space */
  flex?: boolean;
  /** Rounded end (right side) */
  end?: boolean;
  /** Rounded start (left side) */
  start?: boolean;
  /** Fully rounded (pill) */
  pill?: boolean;
  /** Align text right */
  right?: boolean;
  /** Align text center */
  center?: boolean;
  /** Fixed width in px */
  width?: number;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const LcarsBar: React.FC<LcarsBarProps> = ({
  color = 'orange',
  flex,
  end,
  start,
  pill,
  right,
  center,
  width,
  className = '',
  style,
  children,
  onClick,
}) => {
  const classes = [
    'lcars-bar',
    `lcars-${color}`,
    flex && 'lcars-bar--flex',
    end && 'lcars-bar--end',
    start && 'lcars-bar--start',
    pill && 'lcars-bar--pill',
    right && 'lcars-bar--right',
    center && 'lcars-bar--center',
    className,
  ].filter(Boolean).join(' ');

  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(width ? { width: `${width}px` } : {}),
  };

  return (
    <div className={classes} style={mergedStyle} onClick={onClick}>
      {children}
    </div>
  );
};
