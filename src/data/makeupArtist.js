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
    label: 'Course Highlights',
    title: 'Everything You Need to Succeed',
  },

  process: [
    {
      step: '01',
      title: 'Certificate Included',
      description: 'Receive a certificate of completion when you finish the course.',
    },
    {
      step: '02',
      title: 'Course Notes & Product Guide',
      description: 'Digital course notes, product guide, and brush guide included with your enrollment.',
    },
    {
      step: '03',
      title: 'Learn Anytime, Anywhere',
      description: 'Flexible learning designed to fit your schedule — study at your own pace.',
    },
  ],

  contact: {
    email: 'mishtyvig@gmail.com',
    phone: '+91 6283682424',
    cta: 'Enroll Now',
    footer: '© 2026 — Beauty Maison by Mannat Vig',
    sideImages: assets.contactImages,
  },
}
