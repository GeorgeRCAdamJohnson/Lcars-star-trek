import React from 'react';

export interface LcarsScreenProps {
  /** Whether this screen is currently visible */
  active?: boolean;
  /** Screen identifier */
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const LcarsScreen: React.FC<LcarsScreenProps> = ({
  active = false,
  id,
  className = '',
  style,
  children,
}) => {
  const classes = [
    'lcars-screen',
    active && 'active',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} id={id} style={style}>
      {children}
    </div>
  );
};
