import { loadMakeupArtistAssets } from './makeupArtistAssets'

const assets = loadMakeupArtistAssets()

export const makeupArtistData = {
  brand: 'Beauty Maison by Mannat Vig',
  heroLabel: 'Beauty Maison by Mannat Vig',
  heroTitle: 'Makeup',
  tagline: 'Where Beauty Finds Its Home',
  reel: assets.heroVideo,
  portrait: assets.portrait,

  about: {
    left: {
      heading: 'Our Vision',
      paragraphs: [
        'At Beauty Maison By Mannat, we believe makeup is more than application—it\'s an art. Our goal is to provide an immersive learning experience that empowers aspiring artists with the skills, confidence, and creativity to excel in the beauty industry.',
        'Cultivating artists, inspiring confidence.',
      ],
    },
    right: {
      heading: 'Mission',
      paragraphs: [
        'At BeautyMaisonByMannat, our mission is to empower aspiring artists through quality education, refined techniques, and creative excellence. We are committed to nurturing confidence, inspiring individuality, and helping every student master the art of timeless beauty.',
      ],
      cta: 'Get In Touch',
    },
  },

  gallery: assets.gallery,

  reelsSection: {
    label: 'Reels',
    title: 'Watch & Explore',
    subtitle: 'Swipe sideways to browse our latest makeup reels.',
  },

  reels: assets.reels,

  portfolioDetail: assets.portfolioDetail,

  servicesSection: {
    verticalTitle: 'Classes',
    label: 'Pricing',
    title: 'Invest in your skills. Elevate your artistry.',
  },

  services: [
    {
      name: 'Demo 1: Party Makeup Look',
      price: '₹129',
      highlights: [
        'Understanding skin preparation for flawless makeup',
        'Product knowledge and correct application techniques',
        'Creating a long-lasting party makeup look',
        'Soft contouring, blush and highlighting',
        'Professional finishing techniques',
      ],
    },
    {
      name: 'Demo 2: Engagement Glam Look',
      price: '₹139',
      highlights: [
        'Creating a luxurious glam makeup look',
        'Glitter and shimmer application techniques',
        'Soft sculpting and facial balancing',
        'Statement eye makeup',
        'Luxury skin finish',
      ],
    },
    {
      name: 'Demo 3: Soft Glam Makeup Look',
      price: '₹149',
      highlights: [
        'Mastering seamless eyeshadow blending',
        'Neutral eye makeup techniques',
        'Soft glowing complexion',
        'Perfect nude lips',
        'Achieving the signature Soft Glam finish',
      ],
    },
    {
      name: 'Demo 4: Self Makeup Masterclass',
      price: '₹199',
      badge: 'Most Popular',
      highlights: [
        'Everyday makeup made easy',
        'Selecting products according to your skin type',
        'Quick day-to-night transformation',
        'Natural contour and blush placement',
        'Long-lasting self makeup techniques',
      ],
    },
  ],

  courseBundle: {
    badge: 'Best Value',
    name: 'Complete Professional Makeup Course',
    price: '₹500',
    includes: [
      'All 4 Makeup Classes',
      'Makeup Theory & Product Knowledge',
      'Digital Course Notes',
      'Product Guide',
      'Brush Guide',
      'Certificate of Completion',
      'Future Course Updates',
    ],
  },

  processSection: {
    label: 'How It Works',
    title: 'From First Call to Final Glow',
    intro:
      'Every booking follows a calm, structured journey — from understanding your vision to delivering makeup that lasts from ceremony to celebration.',
  },

  process: [
    {
      step: '01',
      title: 'Consultation',
      description:
        'Share your event date, outfit palette, and skin concerns. We discuss your preferred look, venue lighting, and timeline so your makeup plan feels personal and stress-free.',
    },
    {
      step: '02',
      title: 'Trial Session',
      description:
        'A dedicated trial with photography-friendly checks under natural and flash light. We refine shades, textures, and longevity until you feel fully confident and camera-ready.',
    },
    {
      step: '03',
      title: 'Your Perfect Day',
      description:
        'Flawless, long-lasting makeup with premium products and careful skin prep — at your location or our studio, with touch-ups through your most important moments.',
    },
  ],

  whyUsSection: {
    label: 'Why Us',
    title: 'The Beauty Maison Difference',
    intro:
      'We combine professional technique, luxury products, and personal attention so every client feels heard, prepared, and beautifully confident.',
  },

  whyUs: [
    {
      step: '01',
      title: 'Skin-First Approach',
      description:
        'Prep and base tailored to your skin type — hydration, colour correction, and seamless blending for a natural, radiant finish that photographs beautifully in every light.',
    },
    {
      step: '02',
      title: 'Premium Products Only',
      description:
        'A curated, hygienic kit of high-end foundations, pigments, and tools. No shortcuts on quality, wear-time, or comfort — makeup that stays fresh from getting-ready to the last dance.',
    },
    {
      step: '03',
      title: 'Bridal to Party Ready',
      description:
        'Bridal, engagement, reception, sangeet, and editorial looks — one artist who adapts to every occasion while keeping your style cohesive, elegant, and true to you.',
    },
  ],

  processImage: assets.processImage,
  whyUsImage: assets.whyUsImage,

  contact: {
    email: 'mishtyvig@gmail.com',
    phone: '+91 6283682424',
    cta: 'Enroll Now',
    footer: '© 2026 — Beauty Maison by Mannat Vig',
    sideImages: assets.contactImages,
  },
}
