# Task 004 — Home Page

## Goal
Build the home page with the hacode.solutions brand and a clear entry point to the admin tool.

## Depends On
- Task 003 (Tailwind + design system must be ready)

## Content

**Logo:** `hacode.solutions` — text only, Inter weight `500`

**Description:**
> We build software with AI, operate it, and sell it.

**CTA:** Button linking to `/admin`

## Layout
- Full viewport height, content centered vertically and horizontally
- Logo at top, description below, CTA button below that
- Tight spacing, generous padding from edges

## Steps

- [ ] Create `public/index.html`
- [ ] Link `Inter` font and `output.css`
- [ ] Build the centered layout using Tailwind utility classes and the design system colors
- [ ] Add the logo text styled with `text-primary` and `font-medium`
- [ ] Add the description paragraph styled with `text-muted`
- [ ] Add a `btn-primary` CTA button that links to `/admin`
- [ ] Serve `index.html` from Express at route `GET /`

## Acceptance Criteria
- `http://localhost:3000` shows the home page
- Logo, description, and CTA button are visible and correctly styled
- CTA navigates to `/admin` (page does not need to exist yet)
- Design matches the minimalist system: dark bg, no shadows, no gradients
