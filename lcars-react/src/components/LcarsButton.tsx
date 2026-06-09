import React from 'react';
import { LcarsColor } from './LcarsElbow';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type BlinkSpeed = 'blink' | 'blink-slow' | 'blink-fast';

export interface LcarsButtonProps {
  color?: LcarsColor;
  size?: ButtonSize;
  blink?: BlinkSpeed;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const LcarsButton: React.FC<LcarsButtonProps> = ({
  color = 'orange',
  size = 'md',
  blink,
  className = '',
  style,
  onClick,
  disabled,
  children,
}) => {
  const sizeClass = size !== 'md' ? `lcars-btn--${size}` : '';
  const blinkClass = blink ? `lcars-${blink}` : '';

  const classes = [
    'lcars-btn',
    `lcars-${color}`,
    sizeClass,
    blinkClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
