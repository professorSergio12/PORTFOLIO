import { loadBirthdayPlannerAssets } from './birthdayPlannerAssets'

const assets = loadBirthdayPlannerAssets()

export const birthdayPlannerData = {
  brand: 'Party Blowers',
  heroLabel: 'Party Blowers',
  heroTitle: 'Celebrate Every Moment',
  tagline: 'Birthdays, weddings, and every celebration crafted with love.',

  about: {
    heading: 'About Us',
    paragraphs: [
      'We turn your special moments into unforgettable memories — from intimate birthday parties to grand wedding celebrations.',
      'Every detail is thoughtfully planned: décor, themes, coordination, and that magical touch that makes your event truly yours.',
    ],
  },

  services: [
    {
      name: 'Birthday Parties',
      description: 'Kids & adults — themed décor, cake tables, and picture-perfect setups for every age.',
    },
    {
      name: 'Wedding Planning',
      description: 'Engagements, receptions, and full wedding coordination with elegant styling.',
    },
    {
      name: 'Themed Celebrations',
      description: 'Baby showers, anniversaries, and custom theme parties tailored to your vision.',
    },
    {
      name: 'Décor & Styling',
      description: 'Balloons, florals, backdrops, and venue transformation from start to finish.',
    },
  ],

  gallerySection: {
    label: 'Gallery',
    title: 'Our Celebrations',
    subtitle: 'A glimpse into the parties and events we have brought to life.',
  },

  reelsSection: {
    label: 'Reels',
    title: 'Watch the Magic',
    subtitle: 'See our setups come alive — swipe to explore.',
  },

  heroVideo: assets.heroVideo,
  images: assets.images,
  videos: assets.videos,

  contact: {
    cta: 'Plan Your Event',
    footer: '© 2026 — Party Blowers',
  },
}
