// LCARS React Component Library
// Import the token stylesheet in your app entry: import '@lcars/react/src/LcarsTokens.css'

export { LcarsFrame } from './components/LcarsFrame';
export type { LcarsFrameProps, Era, FrameSlotProps } from './components/LcarsFrame';

export { LcarsElbow } from './components/LcarsElbow';
export type { LcarsElbowProps, ElbowPosition, LcarsColor } from './components/LcarsElbow';

export { LcarsBar } from './components/LcarsBar';
export type { LcarsBarProps } from './components/LcarsBar';

export { LcarsSidebar, LcarsSidebarSeg } from './components/LcarsSidebar';
export type { LcarsSidebarProps, LcarsSidebarSegProps } from './components/LcarsSidebar';

export { LcarsPanel } from './components/LcarsPanel';
export type { LcarsPanelProps, StatusType } from './components/LcarsPanel';

export { LcarsButton } from './components/LcarsButton';
export type { LcarsButtonProps, ButtonSize, BlinkSpeed } from './components/LcarsButton';

export { LcarsTextBar } from './components/LcarsTextBar';
export type { LcarsTextBarProps } from './components/LcarsTextBar';

export { LcarsAlert } from './components/LcarsAlert';
export type { LcarsAlertProps, AlertVariant } from './components/LcarsAlert';

export { LcarsScreen } from './components/LcarsScreen';
export type { LcarsScreenProps } from './components/LcarsScreen';

export { LcarsDataRow } from './components/LcarsDataRow';
export type { LcarsDataRowProps, ValueColor } from './components/LcarsDataRow';

export { LcarsClock } from './components/LcarsClock';
export type { LcarsClockProps } from './components/LcarsClock';

export { useAutoMode } from './hooks/useAutoMode';
export type { UseAutoModeOptions, UseAutoModeReturn } from './hooks/useAutoMode';

export { useEra } from './hooks/useEra';
export type { UseEraReturn } from './hooks/useEra';
