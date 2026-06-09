import React from 'react';

export type ValueColor = 'green' | 'gold' | 'red' | 'blue' | 'orange' | 'salmon' | 'lavender' | 'muted';

export interface LcarsDataRowProps {
  label: string;
  value: string | number;
  /** Text color variant for the value */
  valueColor?: ValueColor;
  className?: string;
  style?: React.CSSProperties;
}

export const LcarsDataRow: React.FC<LcarsDataRowProps> = ({
  label,
  value,
  valueColor = 'green',
  className = '',
  style,
}) => {
  return (
    <div className={`lcars-data-row ${className}`.trim()} style={style}>
      <span className="lcars-data-row__label">{label}</span>
      <span className={`lcars-data-row__value lcars-text-${valueColor}`}>
        {value}
      </span>
    </div>
  );
};
