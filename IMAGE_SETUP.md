# 📸 Image Setup Guide

## Quick Start

Your portfolio is ready with **advanced animations, 3D tilt effects, and image support**!

### Add Your Photos

Place your images in the `public/` folder:

```
portfolio/
├── public/
│   ├── profile.jpg       ← Your main profile photo (Hero + About)
│   └── projects/         ← Optional: project screenshots
└── ...
```

### Image Requirements

**Profile Photo (`profile.jpg`)**
- **Recommended size:** 800×800px (square) or 800×1000px (portrait)
- **Format:** JPG or PNG
- **Max file size:** 500KB (optimize with TinyPNG or Squoosh)
- **Aspect ratio:** 1:1 or 4:5 works best

**Project Images**
- Already using Unsplash placeholders
- Replace with your own: `public/projects/project1.jpg`, etc.
- Update `src/components/Projects.jsx` image URLs

---

## ✨ Features Implemented

### 🎨 Visual Enhancements
- ✅ **3D Tilt Effect** on mouse movement (Hero avatar, About photo, Project cards)
- ✅ **Smooth Hover Animations** (scale, brightness, overlay)
- ✅ **Glassmorphism** cards with blur + gradient borders
- ✅ **Gradient Overlays** with text reveal on hover
- ✅ **Parallax Effect** on Hero section
- ✅ **Blur-up Loading** skeleton for images
- ✅ **Lazy Loading** for performance

### 🚀 Animations (Framer Motion)
- ✅ **Scroll Reveal** (fade-in, slide-up)
- ✅ **Stagger Children** animations
- ✅ **Spring Physics** for natural motion
- ✅ **Hover/Tap** micro-interactions
- ✅ **Floating Badges** with infinite loop

### 📱 Responsive Design
- ✅ Mobile-first Tailwind CSS
- ✅ Aspect ratio maintained on all screens
- ✅ Touch-friendly interactions

### ⚡ Performance
- ✅ Lazy loading images
- ✅ Optimized bundle size
- ✅ Smooth 60fps animations
- ✅ Proper alt tags for accessibility

---

## 🎯 Component Breakdown

### `ImageCard.jsx` (Reusable)
```jsx
<ImageCard
  src="/profile.jpg"
  alt="Priyanka Patel"
  title="Frontend Developer"
  subtitle="React · Tailwind · UI/UX"
  aspectRatio="aspect-square"
  rounded="rounded-2xl"
/>
```

**Props:**
- `src` — Image URL
- `alt` — Accessibility text
- `title` — Overlay title (optional)
- `subtitle` — Overlay subtitle (optional)
- `aspectRatio` — Tailwind class (aspect-square, aspect-video, etc.)
- `rounded` — Border radius class
- `overlayContent` — Custom JSX for overlay

**Features:**
- 3D tilt on mouse move
- Scale + brightness on hover
- Gradient overlay with smooth fade
- Skeleton loader
- Glassmorphism border

---

## 🖼️ Where Images Are Used

### 1. **Hero Section** (`Hero.jsx`)
- **Avatar:** `/profile.jpg`
- **Features:**
  - 3D tilt effect
  - Spinning gradient ring
  - Glow pulse animation
  - Floating "Available for work" badge
  - Fallback to "PP" initials if image fails

### 2. **About Section** (`About.jsx`)
- **Photo:** `/profile.jpg`
- **Features:**
  - 3D tilt on hover
  - Overlay with name + tags
  - Floating stat cards (Experience, Projects)
  - Decorative blur blob behind

### 3. **Projects Section** (`Projects.jsx`)
- **Images:** Unsplash placeholders (replace with your own)
- **Features:**
  - Hover scale + brightness
  - Overlay with links (Code, Live Demo)
  - Stagger animation on scroll
  - Gradient accent bar

---

## 🎨 Customization

### Change Colors
Edit `src/index.css`:
```css
/* Primary gradient */
.gradient-text {
  background: linear-gradient(135deg, #a855f7, #ec4899, #f97316);
}

/* Adjust to your brand colors */
```

### Adjust Animation Speed
In components:
```jsx
transition={{ duration: 0.7 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

### Disable 3D Tilt
Remove `onMouseMove` handlers in `ImageCard.jsx`, `Hero.jsx`, `About.jsx`

---

## 🚀 Run Your Portfolio

```bash
cd "D:\react project\portfolio"
npm run dev
```

Open: http://localhost:5173

---

## 📦 Build for Production

```bash
npm run build
npm run preview  # Test production build
```

Deploy `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static host

---

## 🎓 Code Quality

✅ **Clean, modular components**
✅ **Reusable `ImageCard` with props**
✅ **Accessibility (alt tags, aria-labels)**
✅ **Performance optimized**
✅ **Mobile-first responsive**
✅ **TypeScript-ready structure**

---

## 🔧 Tech Stack

- **React 18** — Functional components + hooks
- **Vite** — Lightning-fast dev server
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Advanced animations
- **Lucide React** — Icon library

---

## 📝 Next Steps

1. **Add your photo:** `public/profile.jpg`
2. **Replace project images** in `Projects.jsx`
3. **Update social links** in `Hero.jsx`, `Contact.jsx`, `Footer.jsx`
4. **Customize colors** in `index.css`
5. **Deploy!** 🚀

---

## 💡 Tips

- **Optimize images:** Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Test on mobile:** Chrome DevTools responsive mode
- **Check accessibility:** Lighthouse audit in Chrome
- **Add more projects:** Copy-paste project objects in `Projects.jsx`

---

**Built with ❤️ by a Senior React Developer**

Need help? Check the code comments in each component!
