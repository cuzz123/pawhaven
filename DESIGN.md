---
name: PawHaven
description: Premium smart pet wellness for modern pet parents
colors:
  primary: "#4A7A49"
  primary-hover: "#3D613C"
  accent: "#C8956C"
  accent-hover: "#B07D54"
  neutral-bg: "#FDF8F4"
  neutral-surface: "#FFFFFF"
  neutral-ink: "#2D2420"
  neutral-secondary: "#6B5E58"
  neutral-muted: "#7A6E68"
  neutral-border: "#E8E0D8"
  neutral-border-light: "#F5F0EB"
  semantic-sale: "#D4726A"
  semantic-sale-bg: "#FDF0EE"
  semantic-success: "#4A7A49"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  2xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-secondary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
---

# Design System: PawHaven

## 1. Overview

**Creative North Star: "The Curated Boutique"**

PawHaven's visual system is a well-lit independent pet boutique rendered in code: natural materials, soft lighting, curated shelves. Products are displayed like objects in a design store, not a warehouse. The system feels handmade — sage and copper, warm wood tones, generous breathing room — without ever feeling rustic or craftsy.

The boutique isn't minimalist for its own sake. It's edited: every element earns its place. The restraint leaves room for the products and the pets to be the heroes. Browse feels calm, not clinical. Purchase feels considered, not pressured.

This system explicitly rejects corporate sterility (no blue-and-gray SaaS palettes), discount-aggression (no countdown timers, no fake urgency, no blinking sale badges), and overdesign (no gradient text, no glassmorphism, no animation for animation's sake). Warmth comes from materiality — color, type, shadow — not from decoration.

**Key Characteristics:**
- Warm, earthy palette anchored by muted sage green and aged copper
- Serif display (Cormorant Garamond) for brand voice; system sans for reading comfort
- Flat at rest, lifting gently on hover — depth as interaction signal
- Generous whitespace and edited density; products breathe
- Dark mode as a first-class alternate, not an afterthought
- Tactile, confident interactive elements — pill-shaped buttons, soft shadows, visible states

## 2. Colors

The palette reads as garden and patina: muted sage green (living, grounded) paired with warm copper (aged, not shiny). Together they evoke natural wellness without the apothecary cliché. The neutral ramp is warmed just enough to feel human, never enough to read as "cream default."

### Primary
- **Muted Sage** (`#4A7A49`, hover `#3D613C`): Primary action color — buttons, links, active states, success indicators. Used on ~10-15% of any given screen. Grounded and calm; never shouts.
- **Aged Copper** (`#C8956C`, hover `#B07D54`): Brand accent — hero highlights, icon accents, decorative strokes, wishlist hearts. The warmth carrier. Used sparingly; its rarity is the point.

### Neutral
- **Warm Paper** (`#FDF8F4`): Page background. An off-white with the faintest warmth. Not cream, not gray.
- **White** (`#FFFFFF`): Card and surface background in light mode. Crisp contrast against the tinted page.
- **Dark Bark** (`#2D2420`): Primary text. A warm near-black that's softer than pure black. Also used as dark surface background in CTAs and the footer.
- **Warm Stone** (`#6B5E58`): Secondary text. Body copy, descriptions, metadata. Meets WCAG AA against both the page background and white surfaces.
- **Driftwood** (`#7A6E68`): Muted text. Captions, placeholders, tertiary information. Use sparingly; on tinted backgrounds, verify contrast.
- **Linen** (`#E8E0D8`): Borders and dividers. Visible but soft.
- **Chalk** (`#F5F0EB`): Subtle background tint for info sections, hover states, skeleton loaders.

### Semantic
- **Coral Red** (`#D4726A`, background `#FDF0EE`): Sale badges, wishlist active hearts, destructive actions, error states.
- **Sage Green** (`#4A7A49`): Success confirmations, in-stock indicators, order complete. Shares the primary token; semantic alignment is deliberate.

### Dark Mode
Dark mode shifts to a warm near-black base with amber-gold accents. The green brightens; the copper becomes honey. All neutrals invert while preserving the warm undertone. Background: `#1A1816`, Surface: `#24211E`, Text: `#E8E0D5`, Accent: `#D4A84B`, Primary: `#5A9E6F`.

### Named Rules
**The One Accent Rule.** Aged Copper is used on ≤10% of any given screen. It marks the emotional beats — a hero highlight, a wishlist heart, a decorative detail. Its restraint is what makes it feel premium.

**The Warmth Carries Through Rule.** In dark mode, every neutral preserves the warm undertone. The background is brown-black, not blue-black. The accent shifts to amber-gold, not electric yellow. The system doesn't go cold after sunset.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** System UI (-apple-system, system-ui, sans-serif; Inter loaded as an available variable font)

**Character:** A classic serif for brand moments paired with the platform's native sans for reading comfort. Cormorant Garamond carries warmth and refinement without feeling fragile; system-ui is sharp, legible, and zero-latency. The pairing is editorial restraint meets digital pragmatism.

### Hierarchy
- **Display** (600 weight, `clamp(2.4rem, 5vw, 3.6rem)`, 1.12 line-height): Hero headlines only. Used once per page. Cormorant Garamond. Always `text-wrap: balance`.
- **Headline** (700 weight, `1.875rem` / 30px, 1.25 line-height): Section titles, page headings. System sans in bold. Carries the page structure.
- **Title** (600 weight, `1rem` / 16px, 1.4 line-height): Product names, card headings, feature labels. Semibold system sans.
- **Body** (400 weight, `0.9375rem` / 15px, 1.7 line-height): All running text. Max width 65-75ch. Secondary color (`#6B5E58`) on light backgrounds; `text-wrap: pretty` on prose blocks.
- **Label** (600 weight, `0.75rem` / 12px, normal line-height): Category tags, badges, metadata. Often uppercase on badges, sentence-case on metadata.

### Named Rules
**The Platform Body Rule.** Body text uses the operating system's native sans-serif (`system-ui`), not a web font. This gives every visitor the sharpest rendering their device can produce and eliminates the FOUT/latency tax on reading. The brand voice lives in the display font; reading comfort lives in the platform.

**The One Serif Moment Rule.** Cormorant Garamond appears in exactly two places: the hero headline and the brand wordmark. Nowhere else. Its scarcity is the voice.

## 4. Elevation

**Flat at rest, lift on hover.** Surfaces sit flush against the page by default. Shadows are an interaction signal, not an ambient decorative layer. A card gains a subtle lift shadow on hover; a button lifts slightly. The effect is tactile without being heavy — objects rest on a table, not float in space.

### Shadow Vocabulary
- **sm** (`0 1px 2px rgba(45,36,32,0.06)`): Subtle lift. Button hover, dropdown border.
- **md** (`0 4px 12px rgba(45,36,32,0.08)`): Card hover, active drawer edge.
- **lg** (`0 8px 30px rgba(45,36,32,0.10)`): Modal backdrop, search overlay, expanded card.
- **xl** (`0 20px 60px rgba(45,36,32,0.12)`): Hero image shadow, featured product spotlight.

All shadows use the warm brown ink (`#2D2420`) as their base, not pure black. In dark mode, shadows shift to pure black with proportionally higher opacity.

### Named Rules
**The Lift-Is-Interaction Rule.** Shadows appear only as a response to state (hover, focus, active drawer). A static card has no shadow. If it casts a shadow, it's clickable.

**The Warm Shadow Rule.** Every shadow in light mode is tinted warm (`rgba(45,36,32,...)`) rather than neutral black. Cool gray drop-shadows on a warm page read as muddy; warm shadows read as natural depth.

## 5. Components

### Buttons
- **Shape:** Fully rounded pills (`9999px`) for primary CTAs and hero actions; medium radius (`10px`) for standard buttons. The pill is the brand's signature shape — confident, tactile, unmistakable.
- **Primary:** Sage green background (`{colors.primary}`), white text, medium weight. Padding `10px 20px` (md) to `14px 28px` (lg). Hover darkens to `{colors.primary-hover}`. Focus ring uses accent copper at 2px offset.
- **Accent:** Aged copper background (`{colors.accent}`), white text. Used for emotional CTAs ("Find Your Pet's Calm") and hero actions. Same shape and padding as primary.
- **Outline:** Transparent background, dark bark border and text. Hover fills with chalk (`{colors.neutral-border-light}`). Used for secondary actions, "View All", filter toggles.
- **Ghost:** Transparent, warm stone text. Hover fills with chalk and text shifts to dark bark. Used for icon buttons, header actions, minimal chrome.
- **Add to Cart:** A dedicated variant — full-width pill, dark bark background (`{colors.neutral-ink}`), white text, large (`18px`). Confirms to a checkmark for 2 seconds on success.

### Cards / Product Containers
- **Corner Style:** Extra-large radius (`16px` / `{rounded.lg}`). Soft and approachable.
- **Background:** Warm Paper (`{colors.neutral-bg}`) on the homepage; White (`{colors.neutral-surface}`) in product grids.
- **Shadow Strategy:** Flat at rest. Gains a `md` shadow on hover with a subtle `-translate-y-1` lift (2px).
- **Border:** None at rest. A soft linen border (`{colors.neutral-border}`) appears on the wishlist page and in checkout summaries for visual separation.
- **Internal Padding:** `20px` (p-5). Image fills the top edge flush; content sits below with consistent spacing.

### Inputs / Fields
- **Style:** White background, linen border (`{colors.neutral-border}`), medium radius (`{rounded.md}`). Height 44-48px.
- **Focus:** Border shifts to sage green (`{colors.primary}`) with a 2px copper ring (`{colors.accent}` at 50% opacity). No inner shadow.
- **Error:** Border shifts to coral red (`{colors.semantic-sale}`), with a coral-tinted background (`{colors.semantic-sale-bg}`). Error text appears below in coral at `12px`.
- **Disabled:** Reduced opacity (50%), muted background, no pointer events.

### Navigation
- **Header:** Sticky (`position: sticky, top: 0, z-index: 40`), 72px height. White surface background, linen bottom border. Desktop: logo left, nav links center, icon buttons right. Mobile: hamburger toggles a full-width dropdown panel.
- **Nav Links:** Warm stone text by default; aged copper with a copper-tinted background when active. Hover fills with chalk.
- **Icon Buttons:** 36×36px touch targets, ghost style, warm stone icons (Lucide, 20px, 1.8px stroke). Badge dots use sage green for cart count, coral red for wishlist.
- **Mobile Menu:** Slides in from the top below the header. Full-width, border-bottom. Links stack vertically at full tap height (48px).
- **Footer:** Dark bark background (`{colors.neutral-ink}`), warm announcement text. 4-column grid collapsing to 2 on mobile. Column headings in white, links in muted warm tone with white hover.

### Chips / Tags
- **Category Pills (mobile quick-nav):** White background, linen border, medium radius. Hover shifts border to copper and adds a subtle shadow.
- **Product Tags:** White pill with sage green text, small shadow. Positioned top-left on product images. Variants: "Bestseller", "New", "Tech", "Popular", "Emotional".
- **Active Filters:** Dark bark background with white text, full radius. Include an X icon for removal.

### Cart Drawer
- **Style:** Fixed-position panel sliding in from the right. White surface, full height, 400px max-width. Backdrop overlay at 40% opacity.
- **Header:** Cormorant Garamond title ("Your Cart"), item count, close button.
- **Items:** Horizontal layout — image left (80px, rounded), details right. Quantity controls flanked by minus/plus buttons.
- **Footer:** Sticky bottom. Subtotal, shipping progress bar ("$15 away from free shipping"), checkout CTA (full-width primary button).

### Signature: Announcement Bar
- **Style:** Full-width, sage green background (`{colors.primary}`), white text. 36px height, dismissible with an X button.
- **Content:** Single line of centered text, often a promotion or the "1% for Paws" message. Links are underlined in white.
- **Behavior:** Dismissed state persists in `sessionStorage`. Reappears on next session.

## 6. Do's and Don'ts

### Do:
- **Do** use the display font (Cormorant Garamond) only for the hero headline and the brand wordmark. Its scarcity is its power.
- **Do** use the system sans for all body text, labels, navigation, and UI chrome. It renders sharpest on every device.
- **Do** keep shadows flat at rest. Apply lift (shadow + translate-y) only on hover or focus — it's an interaction signal.
- **Do** use the aged copper accent on ≤10% of any screen. A hero highlight, a decorative detail, a wishlist heart. Rarity = premium.
- **Do** use the fully rounded pill shape for primary CTAs. It's the brand's signature interactive shape.
- **Do** verify that `{colors.neutral-muted}` hits ≥4.5:1 contrast against its background. On tinted surfaces, bump to `{colors.neutral-secondary}`.
- **Do** use warm shadows (`rgba(45,36,32,...)`) in light mode, black shadows in dark mode.
- **Do** maintain generous whitespace — products breathe, sections are distinct, nothing feels crowded.

### Don't:
- **Don't** make it feel like a vet clinic or insurance portal. No blue-and-gray, no sterile whites, no institutional typography.
- **Don't** manufacture urgency. No countdown timers, no "only 3 left" badges, no blinking sale indicators. PawHaven is premium; it doesn't pressure.
- **Don't** use gradient text, glassmorphism, or side-stripe borders. None of these have a role in a warm, material, tactile system.
- **Don't** let any heading word overflow its container at any breakpoint. Test clamp values against real copy on tablet and mobile.
- **Don't** nest cards inside cards. If a layout feels like it needs nesting, it needs a different layout.
- **Don't** use Cormorant Garamond at small sizes (below 18px). Below that threshold it loses its display character and reads as fragile.
- **Don't** add more than one animation entrance per scroll-triggered section. The boutique is calm, not performative.
- **Don't** default to warm-tinted gray for text on colored backgrounds. Use a darker shade of the background's own hue instead.
