# [Etch-a-Sketch](https://nirjalalala.github.io/Etch-a-Sketch/) 

A browser-based drawing pad inspired by the classic Etch-a-Sketch toy. You draw by moving your mouse over a grid of squares — each square picks up color and gets darker the more you hover over it.

---

## Project Description

This is a beginner-friendly frontend project built with plain HTML, CSS, and JavaScript — no libraries, no frameworks. The goal is to understand how the browser renders elements, how CSS controls layout, and how JavaScript responds to user actions (mouse events, button clicks, input fields).

The project follows a **waterfall development model**: each phase is fully planned and understood before any code is written. Every phase is committed to git so the history shows the progression clearly.

---

## Features

### Grid
- Displays a square grid of divs inside a responsive container (max 750×750).
- Default grid size is 16×16 (256 squares total).
- Each square fills an equal percentage of the container using flexbox.
- Grid lines are visible via a thin border on each square.
- Works correctly at any size from 1×1 to 100×100.

### Drawing (Mouse Hover)
- When the mouse moves over a square for the first time, it is assigned a random RGB color.
- Each subsequent hover over the same square increases its darkness level by 1.
- Darkness goes from level 0 (original color) up to level 10 (completely black).
- Darkness is applied using the CSS `brightness` filter, reducing it by 10% per level.
- Once a square reaches maximum darkness (level 10), further hovers have no effect.

### Size Control
- A number input field pre-filled with `16` sits next to a "Set Size" button.
- Typing a number and clicking the button rebuilds the grid at that size.
- Valid input: any whole number between 1 and 100.
- Invalid input clears the field and shows a placeholder hint — no disruptive dialog.

### Responsive Layout
- The grid container scales down on small screens using `min(750px, 90vmin)`.
- The heading scales fluidly using `clamp(32px, 8vw, 64px)`.
- Works on desktop, tablet, and mobile without horizontal scrolling.

---

## Requirements

| # | Requirement | Type | Status |
|---|---|---|---|
| R1 | Page must display a heading "Etch-a-Sketch" | UI | Passed |
| R2 | Page must display a "Set Size" button next to a number input | UI | Passed |
| R3 | Page must display a grid container with a black border | UI | Passed |
| R4 | On page load, a 16×16 grid must be generated inside the container | Functional | Passed |
| R5 | Each square must have a visible border to show the grid lines | UI | Passed |
| R6 | Hovering the mouse over a square must trigger a color change | Functional | Passed |
| R7 | First hover assigns a random RGB color to the square | Functional | Passed |
| R8 | Each hover after the first darkens the square by one level (10% brightness reduction) | Functional | Passed |
| R9 | Darkening stops at level 10 (0% brightness — fully black) | Functional | Passed |
| R10 | Typing a number and clicking "Set Size" rebuilds the grid | Functional | Passed |
| R11 | Valid input (integer 1–100) rebuilds the grid at the new size | Functional | Passed |
| R12 | Invalid input clears the field and leaves the grid unchanged | Functional | Passed |
| R13 | The new grid must fill the container perfectly regardless of size | Functional | Passed |
| R14 | The page layout must be centered on all screen sizes | UI | Passed |
| R15 | No external libraries or frameworks — only HTML, CSS, and JavaScript | Technical | Passed |

---

## File Structure

```
Etch-a-Sketch/
├── index.html     # Page structure: heading, controls, grid container
├── style.css      # Layout, responsive sizing, grid and square styling
├── script.js      # Grid creation, mouse events, input validation
└── README.md      # This file
```

---

## Technology

| Technology | Purpose |
|---|---|
| HTML | Defines the structure of the page |
| CSS Flexbox | Centers the page layout and arranges squares inside the grid |
| CSS `min()` | Makes the container responsive — caps at 750px, shrinks on small screens |
| CSS `clamp()` | Scales the heading size fluidly between a min and max |
| CSS `brightness` filter | Applies progressive darkening to each square |
| JavaScript DOM API | Creates squares dynamically and attaches mouse event listeners |
| `box-sizing: border-box` | Ensures borders don't push squares outside their calculated size |
| Percentage-based sizing | Square dimensions use `%` so the browser distributes rounding error evenly |

---

## Development Phases (Waterfall Model)

| Phase | Description | Status |
|---|---|---|
| 1 — Requirements | Analyze the reference site, list all features and rules | Done |
| 2 — System Design | Plan HTML structure, CSS approach, JS logic before coding | Done |
| 3a — HTML | Write the page skeleton | Done |
| 3b — CSS | Write all styles | Done |
| 3c — JS: Grid | Write `createGrid()` and initialize on load | Done |
| 3d — JS: Drawing | Write the hover color and darkening logic | Done |
| 3e — JS: Button | Write the size input, validation, and grid rebuild | Done |
| 4 — Testing | All 15 requirements verified manually and via automated checks | Done |
| 5 — Final commit | Working, clean, fully understood codebase | Done |

---

## How to Run

No build step needed. Open `index.html` directly in any modern browser.

```
# From the project folder:
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```
---

[Click here to play](https://nirjalalala.github.io/Etch-a-Sketch/)
