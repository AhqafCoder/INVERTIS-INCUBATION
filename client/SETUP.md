# Invertis Innovation & Incubation Website

A modern, professional website built with Next.js 16, React 19, TypeScript, and shadcn/ui components.

## 🚀 Features

- **Responsive Navbar** with dropdown menus
- **Hero Section** with video background support
- **Professional Footer** with contact information and social links
- **Light Theme** optimized design
- **Mobile-First** responsive layout
- **shadcn/ui** components for consistent design
- **TypeScript** for type safety

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd client
npm install
```

### 2. Add Assets

Create the following directory structure in the `public` folder:

```
public/
  assets/
    incub-logo.png          # Your incubation center logo
    main logo.png           # Powered by logo
    Incvid.mp4             # Hero section video (optional)
```

**Note**: Copy your images and video from the root project to the `client/public/assets/` folder.

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🎨 Components

### Navbar (`components/navbar.tsx`)
- Sticky navigation with gradient background
- Dropdown menus for: About, Programs, Scheme, Events, Impact
- "Join Our Community" button with external form links
- Mobile-responsive sidebar menu

### Hero (`components/hero.tsx`)
- Full-screen hero section
- Video background support (currently using gradient placeholder)
- Call-to-action buttons
- Responsive text sizing

### Footer (`components/footer.tsx`)
- Three-column layout (desktop)
- Contact information
- Social media links
- Responsive mobile layout

## 🔧 Customization

### Update Colors

The theme uses a light blue color scheme. To customize, edit:
- Navbar gradient: `from-blue-50 to-blue-100`
- Buttons: `bg-blue-600 hover:bg-blue-700`
- Text accents: `text-blue-600`, `text-blue-900`

### Add Video Background

Uncomment the video element in `components/hero.tsx` and ensure your video file is at `public/assets/Incvid.mp4`:

```tsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/assets/Incvid.mp4" type="video/mp4" />
</video>
```

### Modify Menu Items

Edit the menu arrays in `components/navbar.tsx`:
- `aboutMenuItems`
- `programsMenuItems`
- `schemeMenuItems`
- `eventsMenuItems`
- `impactMenuItems`
- `communityMenuItems`

## 📱 Responsive Breakpoints

- Mobile: < 1024px (sidebar menu)
- Desktop: ≥ 1024px (full navigation)

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📦 Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Radix UI** - Headless components
- **Lucide React** - Icons

## 📝 Next Steps

1. Copy assets from root project to `client/public/assets/`
2. Add remaining page components (About, Team, etc.)
3. Create content sections for the homepage
4. Set up routing for other pages
5. Add animations and transitions
6. Optimize images and videos

## 🤝 Support

For issues or questions, contact the development team.

---

Built with ❤️ for Invertis Innovation & Incubation
