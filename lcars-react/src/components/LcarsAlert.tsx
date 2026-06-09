import React from 'react';

export type AlertVariant = 'red' | 'gold' | 'blue';

export interface LcarsAlertProps {
  variant?: AlertVariant;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const LcarsAlert: React.FC<LcarsAlertProps> = ({
  variant = 'blue',
  className = '',
  style,
  children,
}) => {
  return (
    <div
      className={`lcars-alert lcars-alert--${variant} ${className}`.trim()}
      style={style}
      role="alert"
    >
      {children}
    </div>
  );
};
