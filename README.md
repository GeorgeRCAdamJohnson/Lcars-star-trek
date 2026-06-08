# LCARS Open-Source UI Framework

A pure CSS/HTML implementation of the LCARS (Library Computer Access/Retrieval System) interface design language, originally created by Michael Okuda for Star Trek: The Next Generation.

## Features

- **Token-driven** — All colors, spacing, and typography controlled via CSS custom properties
- **Era variants** — TNG (default), VOY, and DS9 color palettes via `data-era` attribute
- **Structural components** — Elbows, bars, sidebar segments, pill buttons, data panels
- **Responsive** — Collapses to mobile-friendly layout at 768px
- **Accessible** — Semantic HTML, proper ARIA roles, keyboard-friendly
- **Zero dependencies** — Pure CSS, no JavaScript framework required

## Quick Start

```html
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="lcars.css">
```

Set era variant on the `<html>` tag:
```html
<html data-era="tng">  <!-- tng | voy | ds9 -->
```

## Structure

The LCARS frame uses CSS Grid:

```
┌──────────┬─────────────────────────────────┐
│ Elbow TL │ Top Bar (segmented)             │
├──────────┼─────────────────────────────────┤
│ Sidebar  │ Content Area                    │
│ (segs)   │                                 │
├──────────┼─────────────────────────────────┤
│ Elbow BL │ Bottom Bar (segmented)          │
└──────────┴─────────────────────────────────┘
```

## Component Classes

| Class | Description |
|-------|-------------|
| `.lcars-frame` | Main grid container |
| `.lcars-elbow` | SVG corner piece |
| `.lcars-topbar` / `.lcars-bottombar` | Horizontal bar rows |
| `.lcars-bar` | Individual bar segment |
| `.lcars-sidebar` | Vertical sidebar container |
| `.lcars-sidebar-seg` | Sidebar segment |
| `.lcars-content` | Main content area |
| `.lcars-panel` | Data display panel |
| `.lcars-btn` | Pill-shaped button |
| `.lcars-title` | Heading typography |
| `.lcars-data-row` | Key/value data row |

## Color Palette

24+ canonical LCARS colors available as utility classes:

- `.lcars-orange` / `.lcars-text-orange`
- `.lcars-gold` / `.lcars-text-gold`
- `.lcars-blue` / `.lcars-text-blue`
- `.lcars-lavender` / `.lcars-text-lavender`
- `.lcars-african-violet`
- `.lcars-salmon` / `.lcars-text-salmon`
- `.lcars-tan`, `.lcars-wheat`, `.lcars-honey`
- `.lcars-red`, `.lcars-mars`, `.lcars-cardinal`, `.lcars-tomato`
- `.lcars-green`
- `.lcars-sky`, `.lcars-ice`, `.lcars-bluey`
- `.lcars-lilac`, `.lcars-magenta`, `.lcars-violet-creme`
- `.lcars-peach`, `.lcars-butterscotch`, `.lcars-almond`

## Typography

- **UI Font**: Antonio (headings, labels, buttons)
- **Data Font**: Rajdhani (values, body text, readouts)

## Files

- `lcars.css` — Complete framework
- `index.html` — TNG main screen demo
- `ops.html` — Operations panel (dual sidebar)
- `padd.html` — Mobile PADD layout

## Design Source

The Pencil MCP design file (`pencil-shadcn.pen`) contains:
- 4 reusable elbow components (TL, TR, BL, BR)
- Pill button and bar segment components
- 3 reference screens (Main, Ops, PADD)
- Full token system with TNG/VOY/DS9 theme variants

## Acknowledgments

- **Michael Okuda** — Original LCARS graphic designer for Star Trek: The Next Generation
- **Jim Robertus / [TheLCARS.com](https://www.thelcars.com/)** — Outstanding reference implementation. His pure HTML/CSS template inspired several patterns here (Antonio font choice, text bars, blink animations, panel numbering aesthetic). Note: TheLCARS.com has its own EULA; this framework is independently written.
- **[pkchallenge/neocities](https://pkchallenge.neocities.org/Lcars/colors)** — LCARS color reference
- **hmt3design/LCARS_CSS_Grid** — CSS Grid + SVG approach reference

## Key Differences from TheLCARS.com

| Feature | TheLCARS.com | This Framework |
|---------|-------------|----------------|
| License | Custom EULA (non-commercial, attribution required) | MIT (fully open) |
| Approach | CSS border-radius shapes | SVG path elbows + CSS grid |
| Themes | Classic, Nemesis Blue, Lower Decks | TNG, VOY, DS9 via `data-era` |
| Framework | Standalone CSS | CSS custom properties + utility classes |
| Components | Template-based | Composable component system |
| Sounds | Built-in beep audio | Bring-your-own (hook-ready) |

## License

MIT — Free to use, modify, and distribute.

Star Trek, LCARS, and associated trademarks are property of CBS/Paramount.
This is a fan-created open-source UI framework for educational and creative use.
