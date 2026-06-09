import React, { useEffect } from 'react';

export type Era = 'tng' | 'voy' | 'ds9';

/* --- Sub-components (compound pattern) --- */

export interface FrameSlotProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Topbar: React.FC<FrameSlotProps> = ({ className = '', style, children }) => (
  <div className={`lcars-topbar ${className}`.trim()} style={style}>
    {children}
  </div>
);

const Bottombar: React.FC<FrameSlotProps> = ({ className = '', style, children }) => (
  <div className={`lcars-bottombar ${className}`.trim()} style={style}>
    {children}
  </div>
);

const Sidebar: React.FC<FrameSlotProps> = ({ className = '', style, children }) => (
  <div className={`lcars-sidebar ${className}`.trim()} style={style}>
    {children}
  </div>
);

const Content: React.FC<FrameSlotProps> = ({ className = '', style, children }) => (
  <div className={`lcars-content ${className}`.trim()} style={style}>
    {children}
  </div>
);

/* --- Main Frame Component --- */

export interface LcarsFrameProps {
  /** Color era: tng (default), voy, ds9 */
  era?: Era;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Top-level LCARS frame that provides the grid layout.
 *
 * Renders children directly — use LcarsFrame.Topbar, LcarsFrame.Sidebar,
 * LcarsFrame.Content, and LcarsFrame.Bottombar sub-components along with
 * LcarsElbow components to compose the full frame.
 *
 * The `era` prop controls the data-era attribute on the html element,
 * switching color palettes globally.
 */
export const LcarsFrame: React.FC<LcarsFrameProps> & {
  Topbar: typeof Topbar;
  Bottombar: typeof Bottombar;
  Sidebar: typeof Sidebar;
  Content: typeof Content;
} = ({ era = 'tng', className = '', style, children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-era', era);
    return () => {
      document.documentElement.removeAttribute('data-era');
    };
  }, [era]);

  return (
    <div className={`lcars-frame ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};

LcarsFrame.Topbar = Topbar;
LcarsFrame.Bottombar = Bottombar;
LcarsFrame.Sidebar = Sidebar;
LcarsFrame.Content = Content;
