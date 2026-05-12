# Assaqf Technical Services LLC - Premium Website

This is a premium, modern, and responsive website built for Assaqf Technical Services LLC using React, Tailwind CSS, and Framer Motion.

## Features
- **Premium Aesthetics**: Luxury gold, black, and beige color palette.
- **Smooth Animations**: Framer Motion for scroll reveals and page transitions.
- **Fully Responsive**: Mobile-friendly design across all devices.
- **Dynamic Routing**: React Router for seamless navigation.
- **Lightbox Gallery**: Interactive project gallery with category filtering.
- **WhatsApp Integration**: Floating action button for quick communication.

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## Adding Your Own Images
The website currently uses high-quality Unsplash placeholders. To add your own project photos:
1. Place your images in `src/assets/images/projects/` (create this folder).
2. Go to `src/pages/Gallery.jsx` and update the `img` paths in the `projects` array to import your local images. Example:
   ```jsx
   import myProject1 from '../assets/images/projects/project1.jpg';
   // In the array: { img: myProject1, ... }
   ```
3. Do the same for the hero section background in `src/pages/Home.jsx` and service images in `src/pages/Services.jsx`.

## Deployment
This Vite + React app can be easily deployed to Vercel, Netlify, or your own hosting:
1. Create an account on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Connect your GitHub repository.
3. The build command is `npm run build` and the output directory is `dist`.
4. Deploy!
