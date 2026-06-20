---
target: full shopping flow (homepage + PLP + PDP)
total_score: 16
p0_count: 2
p1_count: 1
timestamp: 2026-06-20T08-14-38Z
slug: src-app-page-tsx
---
# Design Critique — PawHaven Shopping Flow

**Source**: `src/app/page.tsx` → `src/app/products/page.tsx` → `src/app/products/[slug]/page.tsx`

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No loading skeletons on PLP/PDP; search errors swallowed silently |
| 2 | Match System / Real World | 2 | Search placeholder says "jewelry, stones, apparel" — wrong domain entirely |
| 3 | User Control and Freedom | 3 | Escape-to-close on drawer/search; clear filters in empty states; no undo on cart remove |
| 4 | Consistency and Standards | 2 | Hardcoded colors breaking theming; duplicate section headings; dead code from prior project |
| 5 | Error Prevention | 1 | No confirmation on remove; no quantity cap; silent fetch failures |
| 6 | Recognition Rather Than Recall | 2 | Category pills help, but CTA promises aren't kept ("Find Your Pet's Calm" → unfiltered /products) |
| 7 | Flexibility and Efficiency | 1 | No sort, no price filter, no URL-synced state, no quick-add from PLP |
| 8 | Aesthetic and Minimalist Design | 2 | Coherent palette but hero is a SaaS template; duplicate content; dead code present |
| 9 | Error Recovery | 0 | No visible error handling anywhere; silent catch blocks; no fallback images |
| 10 | Help and Documentation | 1 | FAQ exists in footer only; no tooltips; no size guide; no product education |
| **Total** | | **16/40** | **Poor — major UX overhaul needed** |

## Anti-Patterns Verdict

**LLM Assessment: IMMEDIATELY recognizable as AI-generated.** The hero section is a paint-by-numbers SaaS landing page template. The search overlay contains dead code from another project. The "You May Also Like" eyebrow is the classic tracked-uppercase reflex. Product grids are uniform and algorithmic.

**Deterministic Scan:** Zero findings across all 8 source files. No gradient text, side-stripe borders, glassmorphism, or numbered section markers detected. Issues are in the design layer, not pattern-level code violations.

## Overall Impression

The warm paper palette and "Because they give us everything." headline are genuinely good. The cart drawer is polished. Everything else reads as a v0.1 AI scaffold: SaaS template hero, dead code, emotionally absent memorial category, zero error handling. Foundation is salvageable. Execution needs warmth, distinctiveness, and emotional design.

## Priority Issues

**P0 — Search overlay contains another project's data.** Dead code with mythological creatures, placeholder says "Search for jewelry, stones, apparel..." Fix: remove dead code, change placeholder, audit all user-visible strings.

**P0 — No focus indicators (WCAG 2.4.7).** Search removes outline, filter pills and pagination have no focus ring. Keyboard-only users cannot shop. Fix: replace focus:outline-none with visible focus rings, add skip-to-content link.

**P1 — Memorial category has zero emotional design.** Same grid and copy tone as feeding bowls. No warmth for grieving pet parents. Fix: distinct memorial experience with slower copy, softer visuals, testimonials.

**P2 — Homepage hero is a SaaS template.** Pill tag + headline + social proof + trust bar — every startup's landing page. Fix: lead with lifestyle photography, make headline the hero, move trust bar below products.

**P3 — No sort or filter beyond category pills.** 30 products, $19-$149 range, no sort by price/rating/newness. URL state not synced. Fix: add sort dropdown, tag chips, URL param syncing.

## Persona Red Flags

**Jordan (First-Timer):** "Smart Pet Wellness" is insider jargon. CTA promises aren't kept. No product education. No post-add reassurance. Will abandon after confused clicks.

**Casey (Mobile):** Category quick-nav uses literal dash as icons. Header has 10+ tap targets in 72px. Email popup interrupts at 15 seconds. Must navigate to PDP for every purchase.

**Riley (Stress Tester):** Rapid Add to Cart clicks register as separate items. Quantity 0 removes silently. Image 404s have zero fallback. Search sends raw special characters to API.

## Minor Observations

- Category quick-nav uses literal `-` as icons — placeholder that shipped
- "Smart Products, Happier Pets" duplicated as section heading and banner heading
- Email popup fires at 15 seconds regardless of user activity
- Theme toggle always shows Sun icon, never reflects current state
- Dark mode copper shifts to gold — different personality
- Footer links to `/about` which has no route
- Add to Cart button puts price inside commitment text — adds anxiety

## Questions to Consider

- What if the memorial category had no "Add to Cart" — only "Begin a Keepsake" leading to a guided customization flow?
- What if the product grid featured one hero product at 2x size, breaking the uniform grid?
- What if the hero led with lifestyle photography instead of a product-on-white render?
- What if dark mode didn't exist yet and engineering effort went into a proper memorial browsing experience instead?
