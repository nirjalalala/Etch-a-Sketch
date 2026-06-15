# Etch-a-Sketch

A browser-based drawing pad inspired by the classic Etch-a-Sketch toy. You draw by moving your mouse over a grid of squares — each square picks up color and gets darker the more you hover over it.

---

## Project Description

This is a beginner-friendly frontend project built with plain HTML, CSS, and JavaScript — no libraries, no frameworks. The goal is to understand how the browser renders elements, how CSS controls layout, and how JavaScript responds to user actions (mouse events, button clicks, prompts).

The project follows a **waterfall development model**: each phase is fully planned and understood before any code is written. Every phase is committed to git so the history shows the progression clearly.

---

## Features

### Grid
- Displays a square grid of divs inside a fixed 750×750 container.
- Default grid size is 16×16 (256 squares total).
- Each square fills an equal share of the container using flexbox.
- Grid lines are visible via a thin border on each square.

### Drawing (Mouse Hover)
- When the mouse moves over a square for the first time, it is assigned a random RGB color.
- Each subsequent hover over the same square increases its darkness level by 1.
- Darkness goes from level 0 (original color) up to level 10 (completely black).
- Darkness is applied using the CSS `brightness` filter, reducing it by 10% per level.
- Once a square reaches maximum darkness (level 10), further hovers have no effect.

### Size Button
- A button labeled "Enter Size" is displayed above the grid.
- Clicking it prompts the user to type a number between 1 and 100.
- If the input is valid, the existing grid is cleared and a new grid of that size is created.
- If the input is invalid (not a number, or outside 1–100), an alert is shown and no change is made.

---

## Requirements

| # | Requirement | Type |
|---|---|---|
| R1 | Page must display a heading "Etch-a-Sketch" | UI |
| R2 | Page must display a button labeled "Enter Size" | UI |
| R3 | Page must display a 750×750 grid container with a black border | UI |
| R4 | On page load, a 16×16 grid must be generated inside the container | Functional |
| R5 | Each square must have a visible border to show the grid lines | UI |
| R6 | Hovering the mouse over a square must trigger a color change | Functional |
| R7 | First hover assigns a random RGB color to the square | Functional |
| R8 | Each hover after the first darkens the square by one level (10% brightness reduction) | Functional |
| R9 | Darkening stops at level 10 (0% brightness — fully black) | Functional |
| R10 | Clicking "Enter Size" must prompt the user for a grid size | Functional |
| R11 | Valid input (integer 1–100) rebuilds the grid at the new size | Functional |
| R12 | Invalid input shows an alert and leaves the grid unchanged | Functional |
| R13 | The new grid must fill the same 750×750 container regardless of size | Functional |
| R14 | The page layout must be centered vertically and horizontally | UI |
| R15 | No external libraries or frameworks — only HTML, CSS, and JavaScript | Technical |

---

## File Structure

```
Etch-a-Sketch/
├── index.html     # Page structure: heading, button, grid container
├── style.css      # Layout, colors, grid and square styling
├── script.js      # Grid creation, mouse events, button logic
└── README.md      # This file
```

---

## Technology

| Technology | Purpose |
|---|---|
| HTML | Defines the structure of the page |
| CSS Flexbox | Centers the page layout and arranges squares inside the grid |
| CSS `brightness` filter | Applies progressive darkening to each square |
| JavaScript DOM API | Creates squares dynamically and attaches mouse event listeners |
| JavaScript `prompt()` | Captures user input for grid size |
| `box-sizing: border-box` | Ensures borders don't push squares outside their calculated size |

---

## Development Phases (Waterfall Model)

| Phase | Description | Status |
|---|---|---|
| 1 — Requirements | Analyze the reference site, list all features and rules | Done |
| 2 — System Design | Plan HTML structure, CSS approach, JS logic before coding | Done |
| 3a — HTML | Write the page skeleton | Pending |
| 3b — CSS | Write all styles | Pending |
| 3c — JS: Grid | Write `createGrid()` and initialize on load | Pending |
| 3d — JS: Drawing | Write the hover color and darkening logic | Pending |
| 3e — JS: Button | Write the size prompt, validation, and grid rebuild | Pending |
| 4 — Testing | Manually test all requirements | Pending |
| 5 — Final commit | Working, clean, fully understood codebase | Pending |

---

## How to Run

No build step needed. Open `index.html` directly in any modern browser.

```
# From the project folder:
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```
