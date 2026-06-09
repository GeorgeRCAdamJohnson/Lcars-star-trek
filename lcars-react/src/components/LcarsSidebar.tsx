import React from 'react';
import { LcarsColor } from './LcarsElbow';

export interface LcarsSidebarSegProps {
  color?: LcarsColor;
  /** Fill remaining vertical space */
  flex?: boolean;
  /** Fixed height in px */
  height?: number;
  /** Whether this segment is currently active */
  active?: boolean;
  /** Vertical content alignment */
  justify?: 'flex-start' | 'center' | 'flex-end';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const LcarsSidebarSeg: React.FC<LcarsSidebarSegProps> = ({
  color = 'orange',
  flex,
  height,
  active,
  justify,
  className = '',
  style,
  onClick,
  children,
}) => {
  const classes = [
    'lcars-sidebar-seg',
    `lcars-${color}`,
    flex && 'lcars-sidebar-seg--flex',
    active && 'active',
    className,
  ].filter(Boolean).join(' ');

  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(height ? { height: `${height}px` } : {}),
    ...(justify ? { justifyContent: justify } : {}),
  };

  return (
    <div className={classes} style={mergedStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export interface LcarsSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export const LcarsSidebar: React.FC<LcarsSidebarProps> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`lcars-sidebar ${className}`.trim()}>
      {children}
    </div>
  );
};
