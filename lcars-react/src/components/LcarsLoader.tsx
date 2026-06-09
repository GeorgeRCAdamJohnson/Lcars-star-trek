import React from 'react';
import { LcarsColor } from './LcarsElbow';

/* === LCARS Loading Bar === */
export interface LcarsLoadingBarProps {
  /** Progress 0-100. Omit for indeterminate. */
  progress?: number;
  color?: LcarsColor;
  height?: number;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LcarsLoadingBar: React.FC<LcarsLoadingBarProps> = ({
  progress,
  color = 'orange',
  height = 12,
  label,
  className = '',
  style,
}) => {
  const isIndeterminate = progress === undefined;
  return (
    <div className={`lcars-loading-bar ${className}`} style={style}>
      {label && <span className="lcars-loading-bar__label">{label}</span>}
      <div className="lcars-loading-bar__track" style={{ height }}>
        <div
          className={`lcars-loading-bar__fill lcars-${color} ${isIndeterminate ? 'lcars-loading-bar__fill--indeterminate' : ''}`}
          style={isIndeterminate ? {} : { width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

/* === LCARS Spinner === */
export type SpinnerVariant = 'ring' | 'pulse' | 'scan';

export interface LcarsSpinnerProps {
  variant?: SpinnerVariant;
  color?: LcarsColor;
  size?: number;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LcarsSpinner: React.FC<LcarsSpinnerProps> = ({
  variant = 'ring',
  color = 'orange',
  size = 48,
  label,
  className = '',
  style,
}) => (
  <div className={`lcars-spinner lcars-spinner--${variant} ${className}`} style={{ ...style, width: size, height: size }}>
    <div className={`lcars-spinner__element lcars-spinner__element--${variant}`} style={{ borderColor: `var(--lcars-${color})` }} />
    {label && <span className="lcars-spinner__label">{label}</span>}
  </div>
);

/* === LCARS Scanner === */
export type ScannerVariant = 'horizontal' | 'vertical' | 'radar';

export interface LcarsScannerProps {
  variant?: ScannerVariant;
  color?: LcarsColor;
  speed?: 'slow' | 'normal' | 'fast';
  width?: number | string;
  height?: number | string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LcarsScanner: React.FC<LcarsScannerProps> = ({
  variant = 'horizontal',
  color = 'blue',
  speed = 'normal',
  width = '100%',
  height = 120,
  label,
  className = '',
  style,
}) => (
  <div
    className={`lcars-scanner lcars-scanner--${variant} lcars-scanner--${speed} ${className}`}
    style={{ ...style, width, height }}
  >
    <div className="lcars-scanner__beam" style={{ background: `var(--lcars-${color})` }} />
    {variant === 'radar' && <div className="lcars-scanner__grid" />}
    {label && <span className="lcars-scanner__label">{label}</span>}
  </div>
);

/* === LCARS Waveform === */
export interface LcarsWaveformProps {
  color?: LcarsColor;
  bars?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const LcarsWaveform: React.FC<LcarsWaveformProps> = ({
  color = 'blue',
  bars = 24,
  height = 48,
  className = '',
  style,
}) => (
  <div className={`lcars-waveform ${className}`} style={{ ...style, height }}>
    {Array.from({ length: bars }, (_, i) => (
      <div
        key={i}
        className="lcars-waveform__bar"
        style={{
          background: `var(--lcars-${color})`,
          animationDelay: `${i * 0.08}s`,
        }}
      />
    ))}
  </div>
);
