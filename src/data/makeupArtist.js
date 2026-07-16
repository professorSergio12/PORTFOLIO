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
        'At Beauty Maison By Mannat, we believe makeup is more than application — it\'s an art form that enhances your natural beauty and celebrates every occasion.',
        'Creating timeless looks, one face at a time.',
      ],
    },
    right: {
      heading: 'Mission',
      paragraphs: [
        'Our mission is to deliver flawless, personalized makeup experiences — from bridal to party glam — using premium products, refined techniques, and a calm, professional touch.',
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
    cta: 'Book Now',
    footer: '© 2026 — Beauty Maison by Mannat Vig',
    sideImages: assets.contactImages,
  },
}
