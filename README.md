# NI MBAYA

NI MBAYA is a Kenyan-inspired accountability app prototype built as an interactive landing page. The design combines bold local voice, motivational copy, streak tracking, savings planning, and a soft gamified experience to keep users engaged.

## What this project includes

- A polished landing page layout powered by HTML, CSS, and vanilla JavaScript
- A responsive navigation system with a mobile dropdown menu
- A hero section with high-impact call-to-action buttons and streak highlights
- A savings calculator that updates totals dynamically
- A panic button modal for dramatic accountability interaction
- A visual mascot area that uses Kenyan-themed graphics and styling
- A community / testimonial section to reinforce social motivation

## Core code features

### `index.html`

- Contains the page structure and content for the full landing experience
- Defines key sections: hero, how it works, chat, mascot, savings calculator, panic modal, squad, testimonials, and final CTA
- Includes accessible navigation and hero buttons

### `styles.css`

- Defines a dark, high-contrast theme with Kenyan colors and gradients
- Uses CSS custom properties for consistent colors and shadows
- Includes responsive styling for mobile and desktop layouts
- Implements polished UI components like floating cards, glassy buttons, and visual gradients
- Contains updated stat card styling for a modern dark system look

### `script.js`

- Handles the savings calculator logic and updates the displayed total in real time
- Saves daily amount input to `localStorage` so the value persists on refresh
- Toggles the panic modal open and closed with click handlers
- Toggles the mobile nav menu state and updates accessibility attributes
- Includes a simple UI state manager for motivational messaging and interactions

## How to use

1. Open `index.html` in your browser.
2. Use the mobile menu or desktop nav to move between sections.
3. Enter a number in the savings input to see projected savings for 30 days.
4. Click the panic button to open the accountability modal.
5. Use the CTA buttons to keep the page experience active.

## Important behavior in the code

- `localStorage` is used to remember the `dailyAmount` input.
- The savings total is recalculated every time the amount changes.
- The mobile nav uses JavaScript to toggle the `open` class and update `aria-expanded`.
- The panic modal uses a `hidden` utility class for show/hide state.
- Buttons include responsive hover and focus styling for better interaction.

## File summary

- `index.html` — page content and layout
- `styles.css` — all visual design, theme, responsiveness, and component styling
- `script.js` — app logic for calculator, nav toggle, modal interactions, and UI state

## Notes for development

- This repo is a static front-end prototype, not a full application backend.
- If you want to extend it, add an actual state widget or build a backend to track streaks.
- Keep the color tokens and shared design tokens in `:root` for easy theming.
