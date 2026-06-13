---
name: VANTAM
description: A contemporary Dutch support brand with civic clarity, human warmth, and documentary credibility.
colors:
  ink: "#13252f"
  ink-soft: "#27404b"
  muted: "#526772"
  line: "#d7e0e2"
  page: "#f7f9f8"
  surface: "#ffffff"
  surface-soft: "#eef3f1"
  brand: "#0f766e"
  brand-strong: "#0b5f59"
  brand-soft: "#dff1ed"
  success: "#168268"
  risk: "#be4258"
  warning: "#a86113"
  dark-surface: "#13252f"
  dark-raised: "#1b333e"
  dark-border: "#36505b"
typography:
  display:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: "clamp(2.45rem, 5vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Inter, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 750
    lineHeight: 1.3
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.045em"
rounded:
  nav: "10px"
  control: "12px"
  button: "12px"
  card: "16px"
  panel: "16px"
  pill: "999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
  3xl: "56px"
  section: "88px"
  section-wide: "120px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
    height: "48px"
  button-service:
    backgroundColor: "transparent"
    textColor: "{colors.brand-strong}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "10px 14px"
    height: "44px"
  card-offer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
  editorial-section:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "clamp(64px, 9vw, 112px) 0"
  focused-panel:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(24px, 4vw, 40px)"
  input-dark:
    backgroundColor: "{colors.dark-raised}"
    textColor: "{colors.surface}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: VANTAM

## 1. Overview

**Creative North Star: "Local Guide, Not Institution"**

VANTAM should feel like a capable person in the Netherlands who makes unfamiliar processes understandable. The brand combines Dutch civic clarity with human warmth: direct language, open layouts, visible service boundaries, and practical next steps. It must not resemble a government portal, administrative dashboard, generic SaaS template, or prestige consultancy.

The page is predominantly light. Editorial sections use whitespace, rules, and changes in surface tone instead of rounded shells around every content group. Commercial offers receive the strongest card treatment; informational sections remain open. Tools are useful planning aids, not scientific scoring systems. Dark slate is reserved for the final high-intent contact area and small moments of contrast.

**Key Characteristics:**

- Clear, calm reading hierarchy with body copy sized for normal laptop use.
- One recognisable VANTAM teal supported by deep slate and paper-like neutrals.
- Documentary credibility through transparent scope, limits, prices, and process.
- Human support language without institutional signals or unsupported proof claims.
- Varied page rhythm: editorial sections, ruled lists, category navigation, comparison cards, a focused tools area, proof, and one final conversion zone.
- Equal legibility and functional parity in Ukrainian, Russian, and English.

## 2. Colors

The palette is deliberately narrow. Deep slate carries authority, VANTAM teal carries identity and action, and neutral surfaces carry most of the page.

### Primary

- **VANTAM Teal** (`brand`): Primary actions, selected states, checkmarks, and small brand accents.
- **Deep Teal** (`brand-strong`): Hover states and high-contrast teal text.
- **Deep Slate** (`ink`): Headlines, navigation, body emphasis, and the final conversion surface.

### Supporting

- **Soft Teal** (`brand-soft`): Selected rows, quiet process highlights, and supportive backgrounds.
- **Paper White** (`surface`): Reading and commercial surfaces.
- **Cool Paper** (`page`) and **Soft Field** (`surface-soft`): Alternating section rhythm without decorative gradients.
- **Measured Slate** (`muted`): Secondary text at accessible contrast.
- **Fine Line** (`line`): One-pixel rules and borders.

### Semantic Only

- **Risk Rose** (`risk`): Calculator exposure, form errors, and genuine risk states only.
- **Caution Amber** (`warning`): Limits, exclusions, and warnings only.
- **Success Teal-Green** (`success`): Completion and successful submission.

No teal-to-sky gradients, decorative rainbow accents, or competing accent colors. Color always carries a stable meaning.

## 3. Typography

**Display and section headings:** Manrope.  
**Body, controls, labels, metadata:** Inter.

Manrope provides a confident but approachable editorial voice. Inter supports long multilingual explanations and compact service information without becoming technical.

### Hierarchy

- **Display:** 800, fluid 39-77px, line-height 0.98. Used only for the hero.
- **Section headline:** 800, fluid 32-52px, line-height 1.05. One clear heading per major section.
- **Offer title:** 700-800, 19-24px. Sentence case with natural wrapping.
- **Body:** 16-18px, line-height 1.65-1.72. Primary paragraphs stay near 65-75 characters.
- **Metadata:** 13-14px, medium or semibold. Used for format, duration, limits, and category cues.
- **Label:** 12-13px, semibold, modest tracking. Uppercase is optional only for very short labels.

Long service names, warnings, and explanatory copy never use uppercase, monospace, wide tracking, or tiny text. Numeric prices may use tabular figures, but tools should otherwise read like normal language.

## 4. Elevation

VANTAM uses a mostly flat depth system. Structure comes from spacing, contrast, and one-pixel dividers.

- **Commercial Rest:** `0 12px 34px rgb(19 37 47 / 7%)` for package cards and the contact form.
- **Commercial Hover:** `0 18px 44px rgb(19 37 47 / 11%)` with a maximum 2px lift.
- **Menu Float:** `0 18px 48px rgb(19 37 47 / 16%)` for temporary navigation menus.
- **No shadow:** Editorial sections, service category lists, FAQ rows, calculator inputs, and proof content.

Do not use shadows to make every object feel interactive. A border or tonal change is enough for most controls.

## 5. Components

### Navigation

Keep the grouped desktop navigation and complete mobile menu. Primary destinations remain visible; tools and secondary sections stay inside clearly named menus. Controls use 44px minimum targets. Mobile links close the menu after selection. The language switcher remains first-class and readable.

### Buttons

- **Primary:** VANTAM teal fill, white text, 48px minimum height.
- **Secondary:** White or transparent fill, slate border, slate text.
- **Service action:** Compact teal text action with an arrow; avoid repeating full-width outlined rectangles.
- **Download:** Secondary treatment with a download icon.
- **State:** Hover changes color or lifts at most 1px. Focus uses a visible teal ring. Disabled states retain legible labels.

### Commercial Cards

Consultations and packages use 14-16px radii, 24-28px padding, visible prices, and restrained shadows. Package comparison shows all three prices and purposes at once. Detailed inclusions and exclusions remain available without hiding essential information.

### Service Lists

Service pillars and individual services use category navigation, ruled rows, and compact metadata. They do not repeat a large bordered card for every item. Each row preserves its service name, price, format, description, limits, and contact-form prefill action.

### Tools

The calculator and planner use light or soft-neutral surfaces, clear inputs, normal typography, and strong result hierarchy. Rose appears only on financial risk. Results are estimates, not official statistics or guarantees. Planner completion is communicated by icon, text treatment, and percentage, not color alone.

### Proof and FAQ

Testimonials use text attribution without unauthentic portraits or verified badges. FAQ items are flat ruled disclosures rather than separate cards. Claims are presented as customer stories, not independent verification.

### Contact and Footer

The contact form and footer form one continuous deep-slate conversion area. Labels stay visible, inputs use 12px radii and 48px minimum height, and error/success states remain semantic. No guaranteed response time is presented unless the business can substantiate it.

## 6. Page Composition

1. Compact service notice and grouped navigation.
2. Open hero with a plain-language value proposition and a documentary support-path composition.
3. Three early ways to start: consultation, package, or focused service.
4. Open trust and service-scope sections.
5. Consultation rows as the lowest-friction entry point.
6. Categorised individual-service list with compact comparison.
7. Focused planning tools with credible language.
8. Three-package comparison followed by complete selected-package detail.
9. Text-led customer proof and flat FAQ.
10. One integrated contact and footer conversion zone.

At 1280-1440px, avoid four-column content grids. At tablet widths, preserve hierarchy rather than shrinking text. At 390px, keep the hero concise, use horizontal category navigation where useful, stack commercial content intentionally, and prevent horizontal page overflow.
