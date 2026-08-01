# Task 003 — Tailwind CSS + Design System

## Goal
Install and configure Tailwind CSS and define the visual design system used across all pages.

## Depends On
- Task 001 (project structure must exist)

## Style Direction
Minimalist, dark, professional. Reference: Linear, Vercel dashboard, Raycast.
No gradients, no shadows, no rounded pill buttons. Feels like a tool, not a template.

## Color Palette (add to `tailwind.config.js`)

```js
colors: {
  bg:       '#0a0a0a',
  surface:  '#111111',
  border:   '#1f1f1f',
  primary:  '#ededed',
  muted:    '#666666',
  accent:   '#ffffff',
  danger:   '#ef4444',
  success:  '#22c55e',
}
```

## Typography
- Font: `Inter` via Google Fonts
- Base size: `14px`
- Line height: `1.6`
- Headings: weight `500` (not bold)
- Labels: uppercase, `10px`, letter-spacing `0.08em`, muted color

## Steps

- [ ] Run `npx tailwindcss init` to generate `tailwind.config.js`
- [ ] Configure `content` in `tailwind.config.js` to scan `./public/**/*.html` and `./public/**/*.js`
- [ ] Add custom colors above to the Tailwind theme
- [ ] Create `public/styles/input.css` with Tailwind directives
- [ ] Add Inter font import to a shared HTML head snippet
- [ ] In `public/styles/input.css`, add `@layer components` with reusable classes:

  ```css
  @layer components {
    .btn-primary {
      @apply bg-accent text-bg text-sm px-4 py-2 rounded-sm hover:opacity-80 transition-opacity;
    }
    .btn-ghost {
      @apply border border-accent text-accent text-sm px-4 py-2 rounded-sm hover:opacity-80 transition-opacity;
    }
    .input-field {
      @apply bg-surface border border-border text-primary text-sm px-3 py-2 rounded-sm
             placeholder:text-muted focus:outline-none focus:border-accent w-full;
    }
    .nav-bar {
      @apply bg-bg border-b border-border px-6 py-3 flex items-center justify-between;
    }
  }
  ```

- [ ] Run `npm run build:css` and confirm `output.css` compiles without errors

## Acceptance Criteria
- `output.css` compiles successfully
- Custom colors are available as Tailwind utilities (e.g. `bg-surface`, `text-muted`)
- Component classes (`.btn-primary`, `.input-field`, `.nav-bar`) are usable in HTML
- No default browser blue links or white backgrounds when classes are applied
