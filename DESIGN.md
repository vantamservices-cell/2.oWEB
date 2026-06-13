---
name: VANTAM
description: A Dutch civic-editorial support brand softened by neighbourhood hospitality.
colors:
  ink: "#102d34"
  ink-soft: "#29474d"
  muted: "#506970"
  page: "#f5f8f7"
  surface: "#ffffff"
  surface-soft: "#eaf1ef"
  surface-teal: "#dceee9"
  line: "#cad8d5"
  line-strong: "#9fb5b1"
  brand: "#0f766e"
  brand-strong: "#095e58"
  brand-dark: "#0b4d49"
  risk: "#a5374d"
  warning: "#9a5b11"
  focus: "#22a89b"
typography:
  family: "Manrope, sans-serif"
  bodySize: "17px"
  bodyLineHeight: 1.62
  displaySize: "clamp(3.2rem, 6.4vw, 6.7rem)"
  sectionSize: "clamp(2.25rem, 4vw, 3.8rem)"
  displayTracking: "-0.05em"
rounded:
  control: "10-11px"
  panel: "14px"
spacing:
  container: "1320px"
  section: "clamp(4.8rem, 7vw, 6.5rem)"
motion:
  easeOut: "cubic-bezier(0.23, 1, 0.32, 1)"
  controlDuration: "140-220ms"
---

# Design System: VANTAM

## Direction

**Creative north star: Local guide, not institution.**

The implemented experience combines Dutch civic clarity with the warmth of a knowledgeable person nearby. It is predominantly light, editorial, spatial, and direct. Premium quality comes from typography, visible scope, careful rhythm, precise states, and useful information rather than luxury cues, ornamental effects, or unsupported proof.

The page avoids administrative-dashboard styling, generic SaaS gradients, equal card grids, excessive pills, and repeated rounded shells. Deep slate is reserved for the service-scope band and the final contact area. Teal is the sole brand accent.

## Typography

Manrope is used throughout for consistent Latin and Cyrillic rendering. Weight, scale, and spacing create hierarchy without a second typeface.

- Hero display: compact, sentence case, up to two lines on desktop.
- Section headings: fluid 36-61px with tight tracking and balanced wrapping.
- Body: 17px base, 1.62 line-height, readable measure.
- Supporting copy: generally 13-16px with `ink-soft` contrast.
- Prices use tabular numerals.
- Important content never uses condensed, monospace, or tiny uppercase treatments.

## Color And Surfaces

Paper-like cool neutrals carry most of the page. White and soft teal separate reading fields without visual noise. One-pixel rules provide structure. Risk rose is limited to calculator exposure and errors; amber is limited to boundaries and exclusions.

Light mode is the primary art direction. The user-controlled dark theme maps every core token to a coordinated deep teal system rather than inverting isolated components.

## Layout Rhythm

The page alternates composition families rather than repeating cards:

1. Compact service notice and sticky navigation.
2. Asymmetric hero with real Amsterdam documentary photography.
3. Three open entry routes.
4. Editorial trust statement and explicit boundaries.
5. Asymmetric consultation composition.
6. Service-scope band and categorized ruled service rows.
7. Three-package comparison with complete selected-package detail.
8. Integrated calculator and adaptation planner.
9. Text-led customer proof and flat FAQ.
10. Deep-slate contact and footer conclusion.

Desktop uses controlled asymmetry. Tablet simplifies grids without shrinking type. At 390px, commercial content stacks fully, service category controls scroll within their own region, and the document itself never overflows horizontally.

## Components

- **Navigation:** 44px or larger controls, first-class language switcher, compact contact CTA, native mobile disclosure.
- **Buttons:** softened rectangles, 10-11px radius, restrained 1px lift or press scale only on capable pointer devices.
- **Consultations:** the featured orientation call receives the strongest teal field; other calls use quiet bordered surfaces.
- **Services:** category tabs and ruled rows preserve name, mode, description, limits, price, and prefill action without a card wall.
- **Packages:** all three tiers are simultaneously visible on desktop and fully stacked on mobile. Selected state is conveyed by color and text.
- **Tools:** calculator and planner use strong result hierarchy, fixed geometry, and semantic pressed states.
- **FAQ:** flat ruled disclosures with `aria-expanded`, `aria-controls`, and assistive-technology visibility state.
- **Contact:** one continuous high-intent area with visible labels, semantic feedback, and preserved request context.
- **Prospectus dialog:** keyboard focus trap, Escape/backdrop close, scroll lock, and focus restoration.

## Imagery

Use only authentic, rights-cleared documentary imagery. The implemented hero uses a credited Amsterdam residential street photograph by Haberdoedas on Unsplash. Do not add generated people, staged handshakes, landmarks, flags, fake clients, institutional buildings, or decorative pseudo-photography.

## Interaction

Motion communicates state and hierarchy only. Standard transitions use 140-220ms ease-out timing. Testimonial changes use a short crossfade, tool rows avoid layout-changing padding animation, and hover treatments are gated away from coarse pointers. `prefers-reduced-motion` removes positional Motion animation, scripted smooth scrolling, and nonessential CSS movement.

Focus uses a visible 3px teal ring. Disabled controls do not lift or scale. Mobile navigation closes by link selection, outside click, or Escape. The form announces error, sending, and success states and retains meaningful focus.
