# Accredian Enterprise — Engineering Implementation & Performance Optimization

An enterprise-grade, high-performance visual replication and architecture of the **[Accredian Enterprise](https://enterprise.accredian.com/)** platform built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Lenis Smooth Scroll**, and **Lucide React**.

---

## 🎯 Internship Assessment Highlights & Key Features

This project was built to fulfill every assessment criterion with senior-level frontend engineering rigor:

### 1. 🎨 UI/UX Excellence & Seamless Image Blending
- **Pixel-Faithful Replication**: Recreated all 12+ sections of `https://enterprise.accredian.com/` using exact brand colors (`#1D61E7`), typography hierarchy (`Inter`), card padding, ambient drop shadows, and responsive layout.
- **Seamless Hero Image Integration**: Integrated `download.png` in the Hero section using Next.js `<Image>` with `mix-blend-multiply`, priority loading, and responsive grid layout—blending the corporate image seamlessly into the light blue hero container (`#EBF3FF`).
- **Custom Vector Graphics**: Handcrafted SVG vector graphics for **The CAT Framework** (continuous open-arc wave loops), **The Accredian Edge** (7-node timeline wave path), and official brand logos (**IBM 8-Stripe**, **Reliance Industries**, **Bayer**, **HCL**, **ADP**, **CRIF**).

### 2. ⚡ Senior Performance Engineering Optimizations
- **Server Components by Default**: Converted static sections (`StatsSection`, `PartnersSection`, `AccredianEdgeSection`, `WhoShouldJoinSection`, `HowItWorksSection`, `TestimonialsSection`, `CATFrameworkSection`, `CourseSegmentationSection`) into React Server Components (RSC), eliminating JS hydration overhead.
- **Eliminated Layout Thrashing**: Cached section `offsetTop` and `offsetHeight` values in `Navbar` to execute scroll position checks without triggering forced synchronous reflows on scroll events.
- **Throttled RAF Scroll Handler**: Scheduled scroll checks via `requestAnimationFrame` with `{ passive: true }` listeners for 60 FPS compositor-thread scrolling.
- **Fixed Lenis RAF Loop Memory Leak**: Added cleanup flag controls (`running = true`) to prevent unmounted RAF accumulation.
- **Context Memoization**: Optimized `ModalProvider` with `useCallback` and `useMemo` to eliminate cascading re-renders across header/footer consumers.
- **Image Optimization**: Implemented `next/image` with `priority` for LCP elements and `loading="lazy"` with responsive `sizes` attributes for below-fold images.

### 3. 🏗️ Type-Safe Architecture & Code Cleanliness
- **Next.js App Router Structure**: Modular isolation of concerns between routes (`app/`), UI components (`components/`), context state (`context/`), static configurations (`config/`), and domain types (`types/`).
- **Strict TypeScript**: 100% type safety across components, form structures, and section data. Zero `any` suppressions.
- **Clean Form Validation & Lead Capture Modal**: Split-modal layout with interactive state management and API route handler integration (`/api/leads`).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Smooth Scroll**: Lenis Smooth Scroll
- **Icons**: Lucide React & Custom SVG Vectors
- **State Management**: React Context (`ModalProvider`)
- **API Layer**: Next.js App Router Route Handlers (`app/api/leads/route.ts`)

---

## 📂 Project Structure

```text
accredian/
├── app/
│   ├── api/leads/route.ts        # POST route handler for lead capture
│   ├── globals.css               # Tailwind directives & design system tokens
│   ├── layout.tsx                # Root layout with fonts, metadata, Lenis provider
│   ├── page.tsx                  # Landing page entry point
│   ├── robots.ts                 # SEO robots configuration
│   └── sitemap.ts                # SEO sitemap generator
├── components/
│   ├── forms/                    # Interactive Form & Modal components
│   │   ├── lead-capture-form.tsx
│   │   └── lead-capture-modal.tsx
│   ├── layout/                   # Layout Shell (Navbar, Footer, Top Banner)
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── top-banner.tsx
│   ├── providers/                # Lenis provider wrapper
│   │   └── lenis-provider.tsx
│   └── sections/                 # Page Sections (RSC & Client Components)
│       ├── hero-section.tsx
│       ├── stats-section.tsx
│       ├── partners-section.tsx
│       ├── accredian-edge-section.tsx
│       ├── domain-expertise-section.tsx
│       ├── course-segmentation-section.tsx
│       ├── who-should-join-section.tsx
│       ├── cat-framework-section.tsx
│       ├── how-it-works-section.tsx
│       ├── faqs-section.tsx
│       ├── testimonials-section.tsx
│       └── pre-footer-cta.tsx
├── config/                       # Data & site configuration
│   ├── site.ts
│   └── landing-data.ts
├── context/                      # Global Modal trigger context
│   └── modal-context.tsx
├── public/                       # Static public assets & images
│   ├── download.png              # Blended Hero section image
│   └── hero.png
└── types/                        # TypeScript interfaces & declarations
    ├── landing.ts
    └── lead.ts
```

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
   cd accredian
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build & Verification**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚀 Deployment Instructions (Vercel)

### Method 1: Push to GitHub & Deploy via Vercel Dashboard (Recommended)

1. **Create a GitHub Repository**:
   Create a new public or private repository on [GitHub](https://github.com/new).

2. **Connect Remote & Push**:
   ```bash
   git add .
   git commit -m "feat: complete internship assessment implementation & performance optimizations"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [Vercel](https://vercel.com/new) and log in.
   - Click **Import Project** and select your GitHub repository.
   - Keep default settings (Framework Preset: **Next.js**).
   - Click **Deploy**. Vercel will automatically build and publish your project!

### Method 2: Vercel CLI Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run deployment command in project root:
   ```bash
   vercel
   ```
3. Follow the prompts to deploy instantly to a `.vercel.app` production URL!

