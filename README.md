# Technical PM Portfolio

A high-performance portfolio site built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript** — featuring a dual-theme glassmorphism UI, modular project showcase system, and a structured credentials archive.

---

## ✨ Features

- **Dual Theme System** — Light ("Nordic Slate") and Dark ("Cyber Indigo") modes with a persistent Sun/Moon toggle
- **Glassmorphism UI** — Frosted-glass cards, backdrop blur, and layered depth throughout the interface
- **Modular Project Cards** — Reusable `ProjectCard` component with three variants:
  - `featured` — Full-width deep-dive with inline sprint panels, formulas, and metric chips
  - `standard` — Compact card for grid layouts
  - `placeholder` — Animated empty-state with a pulsing "Processing..." indicator
- **BentoGrid Layout** — CSS Grid system supporting `1x1`, `2x2`, and `full`-width spans for project display
- **Professional Archive** — Timeline-based credentials page with sections for professional experience, academics, entrepreneurship, and a skills matrix
- **Responsive Design** — Fluid typography, mobile hamburger menu, and adaptive layouts from 375px to 1440px+
- **SEO Optimized** — Proper meta tags, semantic HTML, and static page generation

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 (CSS-first config, `oklch` color space) |
| Language | TypeScript |
| Theming | `next-themes` |
| Icons | `lucide-react` |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, glassmorphism utilities, animations
│   ├── layout.tsx           # Root layout with ThemeProvider, fonts, navbar, footer
│   ├── page.tsx             # Home — Hero section + featured project + BentoGrid
│   └── about/
│       └── page.tsx         # Credentials — Timeline + skills matrix
├── components/
│   ├── ThemeProvider.tsx     # next-themes wrapper (light/dark toggle)
│   ├── Navbar.tsx           # Persistent header with responsive mobile menu
│   ├── ProjectCard.tsx      # Modular card component (featured/standard/placeholder)
│   └── BentoGrid.tsx        # CSS Grid layout with configurable cell spans
public/
├── resume.pdf               # Downloadable resume (linked from navbar)
└── [profile image]          # Profile photo displayed on the About page
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

---

## ⚙️ Customization

### Adding Your Resume
Place your resume file at `public/resume.pdf` — the navbar "Resume" link will serve it automatically.

### Adding New Projects
The `ProjectCard` component accepts a `sprints` array for detailed breakdowns:

```tsx
<ProjectCard
  title="Your Project Name"
  subtitle="Category"
  description="Project description..."
  sprints={[
    {
      id: "sprint-1",
      subtitle: "Sprint 1",
      title: "Feature Name",
      description: "What this sprint delivers...",
      formula: "Optional formula notation",
      metrics: [{ label: "Metric", value: "Value" }],
      status: "complete", // "complete" | "active" | "upcoming"
    },
  ]}
  tags={["Tag1", "Tag2"]}
  variant="featured"
/>
```

### Theme Colors
All design tokens are defined in `src/app/globals.css` using CSS custom properties with `oklch` values. Modify `:root` for light mode and `.dark` for dark mode.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
