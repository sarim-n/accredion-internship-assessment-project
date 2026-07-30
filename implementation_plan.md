# Frontend Performance Optimization Plan

## Diagnosis Summary

After a thorough review of all components, here are the identified root causes of scrolling lag:

---

## Root Causes Identified

### 🔴 HIGH Impact Issues

**1. Lenis smooth-scroll RAF loop is uncapped (lenis-provider.tsx)**
- `requestAnimationFrame(raf)` re-registers itself every frame but is never properly throttled or synchronized with the display refresh via Lenis's built-in RAF integration. The current pattern uses `cancelAnimationFrame(rafId)` only on the first ID — but inner `requestAnimationFrame(raf)` calls inside `raf()` are never tracked, creating a memory leak and potentially multiple running RAF loops if the component re-mounts.
- **Impact**: Continuous JS work on every frame even when user is not scrolling.

**2. Scroll listener in Navbar is not throttled (navbar.tsx)**
- `handleScroll` fires on every `scroll` event (60+ times/second). Inside it calls `document.getElementById()` and reads `el.offsetTop` / `el.offsetHeight` (layout reads) on every tick — these force **synchronous layout recalculations (layout thrashing)**.
- **Impact**: Every scroll event reads layout → reflow → lag.

**3. All section components are `'use client'` unnecessarily**
- The majority of sections are purely static (no hooks, no interactivity): `StatsSection`, `PartnersSection`, `AccredianEdgeSection`, `DomainExpertiseSection` (except openLeadModal), `CATFrameworkSection`, `HowItWorksSection`, `TestimonialsSection`, `WhoShouldJoinSection`, `CourseSegmentationSection`. Marking all as `'use client'` forces them to ship JavaScript, hydrate, and participate in the React client tree — increasing bundle size and Time-to-Interactive.
- **Impact**: Larger JS bundle, slower hydration, unnecessary React re-renders.

**4. `ModalProvider` context triggers full re-render on every open/close (modal-context.tsx)**
- The `ModalProvider` provides `isLeadModalOpen`, `openLeadModal`, `closeLeadModal`, and `selectedProgram` all in one value object created inline on every render. Any state change (open/close modal) creates a new context value object, causing ALL consumers (`Navbar`, `Footer`, `HeroSection`, `DomainExpertiseSection`, `FAQsSection`, `PreFooterCTA`, `TopBanner`) to re-render — even while scrolling, since the Navbar is a consumer.
- **Impact**: Chain re-renders on modal open/close; Navbar re-renders affect sticky header paint.

**5. Unsplash images are raw `<img>` tags with no lazy loading or sizing (multiple sections)**
- `CourseSegmentationSection`, `WhoShouldJoinSection`, `LeadCaptureModal` all use `<img src="https://images.unsplash.com/...">` — these are not lazy loaded, not sized, block the main thread on decode, and cause **Cumulative Layout Shift (CLS)** since no dimensions are specified. They also trigger full reflow during scroll when they load in.
- **Impact**: CLS, main thread blocking, no lazy loading = images load eagerly during scroll-in.

**6. Hero image is a raw `<img>` (hero-section.tsx)**
- `/hero.png` is loaded as a plain `<img>` tag. No preload hint, no size declarations, no `next/image` optimization (auto WebP conversion, responsive srcsets, lazy/eager priority control).

---

### 🟡 MEDIUM Impact Issues

**7. `iconMap` objects in `AccredianEdgeSection` and `DomainExpertiseSection` are re-created on every render**
- `const iconMap: Record<string, React.ReactNode> = { ... }` at module level in `accredian-edge-section.tsx` is fine (module-level const, created once). But in `domain-expertise-section.tsx` it's also at module level — OK. However these are JSX nodes, not stable references. If the component re-renders (due to modal context), the icon nodes are new objects.

**8. `stats` and `steps` arrays defined inside component render functions**
- In `StatsSection`, `CATFrameworkSection`, and `HowItWorksSection`, arrays with objects (including JSX icon nodes) are declared **inside the component body**, so they are recreated on every render.
- **Impact**: Unnecessary GC pressure; JSX re-creation on every render.

**9. `animate-pulse` on TopBanner Sparkles icon**
- CSS `animation: pulse` runs continuously on the page load. The `transform: translateZ(0)` on all images globally (in globals.css) creates a new stacking context and compositing layer for every image — including ones that don't need it, adding GPU memory pressure.

**10. `will-change: transform` on `.accredian-card` applied to many elements**
- `.accredian-card:hover` is not the card class used in most sections (they use inline Tailwind classes). But even if it were, `will-change: transform` should only be set during hover, not statically on all cards. Static `will-change` on many elements forces the GPU to maintain separate compositing layers for all of them simultaneously, increasing GPU memory and potentially causing jank.

**11. `scroll-behavior: smooth` in both `globals.css` (html element) AND `layout.tsx` (`scroll-smooth` Tailwind class)**
- Duplicate `scroll-behavior: smooth` declarations. More importantly, having native CSS smooth scroll AND Lenis simultaneously causes conflict — Lenis intercepts scroll events and applies its own easing, but the CSS scroll-behavior then applies a second animation on top of anchor navigation.

**12. `backdrop-blur-md` on sticky Navbar**
- `backdrop-filter: blur()` is expensive during scroll because it needs to re-blur the content behind the fixed element on every frame.

---

### 🟢 LOW Impact Issues

**13. `transition-all` used in many hover effects**
- `transition-all` transitions every CSS property, including layout-affecting ones like `width`, `height`, `padding`. Should be `transition-[transform,box-shadow,opacity,border-color]` or specific properties.

**14. `hover:scale-105` on partner logo divs**
- Scale transforms on hover trigger repaint. This is fine but should use `will-change: transform` only on hover (via CSS), not statically.

**15. Footer `new Date().getFullYear()` runs every render**
- Minor but avoidable.

---

## Proposed Changes

### Component: `lenis-provider.tsx`
#### [MODIFY] [lenis-provider.tsx](file:///c:/Users/sarim/accredian/components/providers/lenis-provider.tsx)
- Fix the RAF loop memory leak: store the inner RAF IDs and cancel them properly, or use Lenis's `requestAnimationFrame` callback pattern correctly.
- Increase `lerp` from `0.1` to `0.12` for slightly snappier feel (less accumulated lag).

---

### Component: `navbar.tsx`
#### [MODIFY] [navbar.tsx](file:///c:/Users/sarim/accredian/components/layout/navbar.tsx)
- Throttle the `handleScroll` handler using `requestAnimationFrame` debouncing (schedule one check per frame, not one per event).
- Cache `el.offsetTop` and `el.offsetHeight` in a ref outside the scroll handler (computed once on mount / resize, not on every scroll event).
- Use `{ passive: true }` on the scroll event listener.

---

### Component: `modal-context.tsx`
#### [MODIFY] [modal-context.tsx](file:///c:/Users/sarim/accredian/context/modal-context.tsx)
- Memoize `openLeadModal` and `closeLeadModal` with `useCallback`.
- Memoize the context value object with `useMemo` to prevent re-renders on unrelated state.

---

### Sections: Remove unnecessary `'use client'`
#### [MODIFY] Multiple section files
- `StatsSection` — remove `'use client'`, convert to Server Component (pure static).
- `PartnersSection` — remove `'use client'`, convert to Server Component (pure static).
- `AccredianEdgeSection` — remove `'use client'`, convert to Server Component (pure static).
- `WhoShouldJoinSection` — remove `'use client'`, convert to Server Component (pure static).
- `HowItWorksSection` — remove `'use client'`, convert to Server Component (pure static).
- `TestimonialsSection` — remove `'use client'`, convert to Server Component (pure static).
- `CATFrameworkSection` — remove `'use client'`, move static arrays out of component body to module scope.
- `CourseSegmentationSection` — remove `'use client'`, move `SEGMENTS` array to module scope (it's already there), convert to Server Component. Replace `<img>` with `next/image`.

---

### Components: Replace `<img>` with `next/image`
#### [MODIFY] [hero-section.tsx](file:///c:/Users/sarim/accredian/components/sections/hero-section.tsx)
- Replace `<img src="/hero.png">` with `<Image>` from `next/image` with `priority` (LCP image).

#### [MODIFY] [course-segmentation-section.tsx](file:///c:/Users/sarim/accredian/components/sections/course-segmentation-section.tsx)
- Replace 4 `<img>` tags with `<Image>` from `next/image` with `loading="lazy"`.

#### [MODIFY] [who-should-join-section.tsx](file:///c:/Users/sarim/accredian/components/sections/who-should-join-section.tsx)
- Replace `<img>` with `<Image>` from `next/image` with `loading="lazy"`.

#### [MODIFY] [lead-capture-modal.tsx](file:///c:/Users/sarim/accredian/components/forms/lead-capture-modal.tsx)
- Replace `<img>` with `<Image>` from `next/image`.

---

### CSS: globals.css
#### [MODIFY] [globals.css](file:///c:/Users/sarim/accredian/app/globals.css)
- Remove `transform: translateZ(0)` from global `img` rule (GPU-promoting all images is wasteful).
- Change `will-change: auto` to nothing on global `img`.
- Remove `will-change: transform` from `.accredian-card` (static `will-change` on many elements wastes GPU memory). Will-change should only be set on hover.
- Fix `transition` on `.accredian-card` to only transition `transform, box-shadow, border-color` (not `all`).
- Remove duplicate `scroll-behavior: smooth` from html (keep only one — Lenis controls scrolling; CSS smooth scroll conflicts).

---

### Component: `top-banner.tsx`
#### [MODIFY] [top-banner.tsx](file:///c:/Users/sarim/accredian/components/layout/top-banner.tsx)
- Remove `animate-pulse` from Sparkles icon (continuous animation = continuous repaint).

---

### Component: `stats-section.tsx`
#### [MODIFY] [stats-section.tsx](file:///c:/Users/sarim/accredian/components/sections/stats-section.tsx)
- Move the `stats` array to module scope (outside component body).

---

### Component: `cat-framework-section.tsx`  
#### [MODIFY] [cat-framework-section.tsx](file:///c:/Users/sarim/accredian/components/sections/cat-framework-section.tsx)
- Move the `steps` array to module scope.

---

### Component: `how-it-works-section.tsx`
#### [MODIFY] [how-it-works-section.tsx](file:///c:/Users/sarim/accredian/components/sections/how-it-works-section.tsx)
- Move the `steps` array to module scope.

---

### Component: `next.config.ts`
#### [MODIFY] [next.config.ts](file:///c:/Users/sarim/accredian/next.config.ts)
- Add `upload.wikimedia.org` to `remotePatterns` (IBM logo in partners-section loads from wikimedia).
- Add `images.unsplash.com` already present — keep it.

---

## Impact Summary Table

| # | Issue | Fix | Impact |
|---|-------|-----|--------|
| 1 | Lenis RAF memory leak | Fix RAF cancellation | **High** |
| 2 | Scroll handler layout thrashing | Throttle + cache offsets | **High** |
| 3 | Unnecessary `'use client'` on 8 sections | Convert to Server Components | **High** |
| 4 | ModalContext re-renders all consumers | `useCallback` + `useMemo` | **High** |
| 5 | Raw `<img>` no lazy load (Unsplash) | Replace with `next/image` | **High** |
| 6 | Hero image not priority-loaded | `next/image` with `priority` | **Medium** |
| 7 | Static arrays recreated in render | Move to module scope | **Medium** |
| 8 | `will-change: transform` on all cards | Remove static will-change | **Medium** |
| 9 | `scroll-behavior: smooth` conflict | Remove duplicate | **Medium** |
| 10 | Global `transform: translateZ(0)` on imgs | Remove | **Medium** |
| 11 | `animate-pulse` continuous repaint | Remove animation | **Low** |
| 12 | `transition-all` in hover effects | Narrow to specific props | **Low** |

## Verification Plan

### Manual Verification
- Scroll through the full page and confirm it feels smooth at 60 FPS.
- Open DevTools → Performance → Record while scrolling; confirm no layout trashing (no purple "Layout" blocks in the flame graph).
- Confirm UI is visually identical to before.
- Confirm modal still opens/closes from all CTA buttons.
- Verify images lazy-load (check Network tab — below-fold images should not load until scrolled to).
