# 📋 Quick Setup Checklist

Your Invertis Innovation & Incubation website is almost ready! Follow these steps:

## ✅ Completed

- ✓ Next.js 16 project setup
- ✓ Professional Navbar with dropdown menus
- ✓ Hero section component
- ✓ Footer with contact info and social links
- ✓ Responsive design (mobile & desktop)
- ✓ shadcn/ui components integrated
- ✓ Light theme styling

## 📥 Next Steps

### 1. Copy Assets (REQUIRED)

Copy these files from your root project to `client/public/assets/`:

```bash
# From the root project directory
copy assets\incub-logo.png client\public\assets\
copy "assets\main logo.png" client\public\assets\
copy assets\Incvid.mp4 client\public\assets\
```

Or manually:
- Copy `assets/incub-logo.png` → `client/public/assets/incub-logo.png`
- Copy `assets/main logo.png` → `client/public/assets/main logo.png`
- Copy `assets/Incvid.mp4` → `client/public/assets/Incvid.mp4` (optional)

### 2. View Your Website

The development server should be running at:
**http://localhost:3000**

If not running, start it with:
```bash
cd client
npm run dev
```

### 3. What You'll See

✨ **Navbar**
- Logo on the left
- Dropdown menus for About, Programs, Scheme, Events, Impact
- "Join Our Community" button
- Mobile hamburger menu for small screens

✨ **Hero Section**
- Large heading with your center's name
- Tagline
- Call-to-action buttons
- Gradient background (video will appear once you add Incvid.mp4)

✨ **Content Section**
- Welcome message
- Three feature cards (Mentoring, Funding, Partnerships)

✨ **Footer**
- Contact information (phone & email)
- Campus and city office addresses
- Social media links (Instagram, Twitter, Facebook, WhatsApp)

### 4. Customize Your Content

Edit these files to add more content:

**Homepage**: `client/app/page.tsx`
```tsx
// Add more sections here
```

**Navbar Links**: `client/components/navbar.tsx`
```tsx
// Update menu items
const aboutMenuItems = [...]
```

**Colors**: Search and replace in components
- Blue theme: `blue-600`, `blue-700`, `blue-900`
- Change to your brand colors

### 5. Add More Pages

Create new pages in the `app` directory:
```bash
client/app/about/page.tsx
client/app/team/page.tsx
client/app/programs/page.tsx
```

### 6. Enable Video Background

In `client/components/hero.tsx`, uncomment the video element (line ~12-20) once you've added the video file.

## 🎨 Customization Tips

### Change Colors
Replace `blue-` classes with your preferred color:
- `blue-50` → light background
- `blue-600` → primary buttons
- `blue-900` → dark text

### Add Animations
Install additional packages:
```bash
npm install framer-motion
```

### SEO & Metadata
Update `client/app/layout.tsx` to customize:
- Page title
- Meta description
- Keywords
- Open Graph tags

## 🚀 Deploy to Production

When ready to deploy:

```bash
npm run build
npm start
```

Or deploy to Vercel:
```bash
vercel
```

## 📞 Need Help?

- Documentation: See `SETUP.md` for detailed info
- Assets: Check `public/assets/README.md` for asset requirements
- Issues: Make sure all dependencies are installed with `npm install`

---

**Current Status**: Website structure is complete! Just add your assets and you're ready to go! 🎉
