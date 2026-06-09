import React from 'react';

export type StatusType = 'ok' | 'warn' | 'error';

export interface LcarsPanelProps {
  title?: string;
  value?: string | number;
  status?: string;
  statusType?: StatusType;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const LcarsPanel: React.FC<LcarsPanelProps> = ({
  title,
  value,
  status,
  statusType = 'ok',
  className = '',
  style,
  children,
}) => {
  return (
    <div className={`lcars-panel ${className}`.trim()} style={style}>
      {title && <h3 className="lcars-panel__title">{title}</h3>}
      {value !== undefined && <p className="lcars-panel__value">{value}</p>}
      {status && (
        <p className={`lcars-panel__status lcars-panel__status--${statusType}`}>
          {status}
        </p>
      )}
      {children}
    </div>
  );
};
