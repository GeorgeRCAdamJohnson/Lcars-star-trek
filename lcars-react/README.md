# @lcars/react

A React component library for building LCARS-style interfaces inspired by Star Trek TNG/VOY/DS9.

Built on top of the [LCARS Open-Source CSS Framework](../lcars-opensource/), this library provides typed, composable React components that map directly to the CSS class system.

## Installation

```bash
# No build step needed yet — use as a local package or copy into your project
npm install react react-dom
```

## Setup

Import the token stylesheet at your app's entry point:

```tsx
import '@lcars/react/src/LcarsTokens.css';
```

Add the Google Fonts link to your HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
```

## Quick Start

```tsx
import {
  LcarsFrame,
  LcarsElbow,
  LcarsBar,
  LcarsSidebarSeg,
  LcarsScreen,
  LcarsPanel,
  LcarsButton,
  LcarsTextBar,
  LcarsDataRow,
  LcarsAlert,
  LcarsClock,
  useAutoMode,
  useEra,
} from '@lcars/react';

function App() {
  const { era, setEra } = useEra('tng');
  const { activeScreen, isAutoMode, setScreen } = useAutoMode({
    screens: ['conn', 'ops', 'tactical', 'science', 'engineering', 'medical'],
  });

  return (
    <LcarsFrame era={era}>
      <LcarsElbow position="tl" color="orange" />

      <LcarsFrame.Topbar>
        <LcarsBar color="orange" flex right>93 1853 24109</LcarsBar>
        <LcarsBar color="gold" width={200} center>LCARS 47</LcarsBar>
        <LcarsBar color="african-violet" width={180} center>UFP</LcarsBar>
        <LcarsBar color="blue" width={100} end center>05</LcarsBar>
      </LcarsFrame.Topbar>

      <LcarsFrame.Sidebar>
        <LcarsSidebarSeg color="orange" flex active={activeScreen === 'conn'} onClick={() => setScreen('conn')}>
          CONN
        </LcarsSidebarSeg>
        <LcarsSidebarSeg color="tan" height={60} justify="center" active={activeScreen === 'ops'} onClick={() => setScreen('ops')}>
          OPS
        </LcarsSidebarSeg>
        <LcarsSidebarSeg color="gold" height={80} justify="center" active={activeScreen === 'tactical'} onClick={() => setScreen('tactical')}>
          TACTICAL
        </LcarsSidebarSeg>
        <LcarsSidebarSeg color="african-violet" height={60} justify="center" active={activeScreen === 'science'} onClick={() => setScreen('science')}>
          SCIENCE
        </LcarsSidebarSeg>
        <LcarsSidebarSeg color="lavender" height={100} justify="center" active={activeScreen === 'engineering'} onClick={() => setScreen('engineering')}>
          ENGINEERING
        </LcarsSidebarSeg>
        <LcarsSidebarSeg color="blue" flex justify="flex-start" active={activeScreen === 'medical'} onClick={() => setScreen('medical')}>
          MEDICAL
        </LcarsSidebarSeg>
      </LcarsFrame.Sidebar>

      <LcarsFrame.Content>
        <LcarsScreen active={activeScreen === 'conn'}>
          <h1 className="lcars-title lcars-title--xl">LCARS Interface</h1>
          <LcarsClock />

          <div style={{ display: 'flex', gap: '4px' }}>
            <LcarsButton color="orange" size="sm" onClick={() => setEra('tng')}>NCC-1701-D</LcarsButton>
            <LcarsButton color="blue" size="sm" onClick={() => setEra('voy')}>NCC-74656</LcarsButton>
            <LcarsButton color="lavender" size="sm" onClick={() => setEra('ds9')}>NX-74205</LcarsButton>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <LcarsPanel title="Sensor Array" value="47.293" status="NOMINAL" statusType="ok" />
            <LcarsPanel title="Warp Core" value="1,247.8" status="STABLE" statusType="ok" />
            <LcarsPanel title="Shields" value="98.7%" status="OPTIMAL" statusType="ok" />
          </div>

          <LcarsTextBar color="gold">
            USS ENTERPRISE NCC-1701-D • GALAXY CLASS • CREW: 1,014
          </LcarsTextBar>

          <div style={{ display: 'flex', gap: '12px' }}>
            <LcarsButton color="red" blink="blink-fast">Red Alert</LcarsButton>
            <LcarsButton color="gold">Yellow Alert</LcarsButton>
            <LcarsButton color="orange">Engage</LcarsButton>
            <LcarsButton color="blue">Hail</LcarsButton>
          </div>
        </LcarsScreen>

        <LcarsScreen active={activeScreen === 'ops'}>
          <h1 className="lcars-title lcars-title--lg">Operations</h1>
          <LcarsPanel title="System Status">
            <LcarsDataRow label="Life Support" value="NOMINAL" valueColor="green" />
            <LcarsDataRow label="Structural Integrity" value="99.8%" valueColor="green" />
            <LcarsDataRow label="Deflector Array" value="STANDBY" valueColor="gold" />
          </LcarsPanel>
          <LcarsAlert variant="blue">All stations report ready.</LcarsAlert>
        </LcarsScreen>
      </LcarsFrame.Content>

      <LcarsElbow position="bl" color="blue" />

      <LcarsFrame.Bottombar>
        <LcarsBar color="blue" flex>STARFLEET COMMAND</LcarsBar>
        <LcarsBar color="lavender" width={200} center>22-4786</LcarsBar>
        <LcarsBar color="african-violet" width={160} center>SEC 31</LcarsBar>
        <LcarsBar color="salmon" width={100} end center>09</LcarsBar>
      </LcarsFrame.Bottombar>
    </LcarsFrame>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `LcarsFrame` | Top-level grid layout wrapper |
| `LcarsFrame.Topbar` | Top bar slot |
| `LcarsFrame.Bottombar` | Bottom bar slot |
| `LcarsFrame.Sidebar` | Sidebar slot |
| `LcarsFrame.Content` | Main content slot |
| `LcarsElbow` | Corner elbow (tl, tr, bl, br) |
| `LcarsBar` | Horizontal bar segment |
| `LcarsSidebarSeg` | Sidebar segment button |
| `LcarsPanel` | Data panel with title/value/status |
| `LcarsButton` | Pill button with blink support |
| `LcarsTextBar` | Colored text bar |
| `LcarsAlert` | Alert message (red/gold/blue) |
| `LcarsScreen` | Hideable screen content |
| `LcarsDataRow` | Key/value data row |
| `LcarsClock` | Live stardate clock |

## Hooks

| Hook | Description |
|------|-------------|
| `useAutoMode` | Cycles screens on idle, resets on interaction |
| `useEra` | Manages era state (`tng`/`voy`/`ds9`), syncs to `data-era` |

## Color Props

All components accept LCARS color names:

`orange` · `gold` · `tan` · `salmon` · `red` · `blue` · `lavender` · `african-violet` · `green` · `violet-creme` · `magenta` · `bluey` · `sky` · `ice` · `sunflower` · `honey` · `wheat` · `peach` · `butterscotch` · `tomato` · `lilac` · `mars` · `cardinal` · `almond`

## Era System

The era controls the color palette via the `data-era` HTML attribute:

- **tng** — The Next Generation (warm oranges and golds)
- **voy** — Voyager (brighter, shifted palette)
- **ds9** — Deep Space Nine (darker, muted tones)

```tsx
const { era, setEra, nextEra } = useEra('tng');
// or use the LcarsFrame era prop directly
<LcarsFrame era="ds9">...</LcarsFrame>
```

## Architecture

This library uses the existing LCARS CSS class system directly. Components simply compose the correct class names based on props. No CSS-in-JS, no styled-components — just the token stylesheet + React.

- `LcarsTokens.css` — The complete CSS framework (tokens, layout, utilities)
- Components — Typed wrappers that apply CSS classes via props
- Hooks — State management for era switching and auto-mode cycling

## License

MIT
