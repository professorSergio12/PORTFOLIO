import { loadWeddingPlannerAssets } from './weddingPlannerAssets'
import { loadMakeupArtistAssets } from './makeupArtistAssets'
import { loadBirthdayPlannerAssets } from './birthdayPlannerAssets'

const weddingAssets = loadWeddingPlannerAssets()
const makeupAssets = loadMakeupArtistAssets()
const birthdayAssets = loadBirthdayPlannerAssets()

const weddingPhoto =
  weddingAssets.homeImages.dogri2916 ??
  weddingAssets.marqueePhotos[0]?.image ??
  weddingAssets.decor[0]?.image
const makeupPhoto = makeupAssets.homeImages['8906'] ?? makeupAssets.gallery[0]?.image ?? makeupAssets.portrait
const birthdayPhoto =
  birthdayAssets.featuredImages.birthdayHall ??
  birthdayAssets.images[0]?.image
const partyStagePhoto = birthdayAssets.featuredImages.luxuryStage

export const homeData = {
  hero: {
    label: 'Welcome',
    title: 'Where Celebrations Come to Life',
    tagline: 'Makeup artistry, wedding planning, and party experiences — all under one roof.',
    collage: [
      { image: weddingAssets.homeImages.dogri2916, layout: 'primary' },
      { image: makeupAssets.homeImages['8906'], layout: 'stacked' },
      { image: weddingAssets.homeImages.gurudawara, layout: 'side-bottom' },
      { image: partyStagePhoto ?? makeupAssets.homeImages['9157'], layout: 'side-wide' },
      { image: birthdayPhoto, layout: 'side-tall' },
    ].filter((item) => item.image),
    highlights: [
      { value: '3', label: 'Specialties' },
      { value: '100+', label: 'Events Styled' },
      { value: '1', label: 'Roof for All' },
    ],
  },

  photoStrip: [
    weddingAssets.homeImages.dogri2916,
    makeupAssets.homeImages['8906'],
    makeupAssets.homeImages['9157'],
    weddingAssets.homeImages.gurudawara,
    partyStagePhoto,
    birthdayPhoto,
    ...makeupAssets.gallery.slice(0, 2).map((item) => item.image),
  ].filter(Boolean),

  portals: [
    {
      id: 'wedding',
      to: '/wedding-planner',
      label: 'Miva Planners',
      title: 'Crafting Timeless Celebrations',
      teaser: 'Personal, stress-free weddings — from haldi to the last dance.',
      accent: 'wp',
      image: weddingPhoto,
    },
    {
      id: 'makeup',
      to: '/makeup-artist',
      label: 'Beauty Maison',
      title: 'Makeup Artistry',
      teaser: 'Bridal, party, and editorial looks that feel like you.',
      accent: 'mua',
      image: makeupPhoto,
    },
    {
      id: 'birthday',
      to: '/birthday-planner',
      label: 'Party Blowers',
      title: 'Celebrate Every Moment',
      teaser: 'Birthdays and events with thoughtful décor and detail.',
      accent: 'bp',
      image: birthdayPhoto,
    },
  ],

  weddingSpotlight: {
    label: 'Miva Planners',
    title: 'About Me',
    portrait: weddingAssets.portrait,
    photos: weddingAssets.marqueePhotos.slice(0, 6).map((item) => item.image),
    paragraphs: [
      'I\'ve always believed that the most beautiful weddings are not the biggest ones — they\'re the ones that truly feel personal.',
      'Coming from a BTech CSE background, I developed a strong eye for organization, planning, and detail — alongside a deep love for creativity, décor, colours, and meaningful celebrations. Wedding planning became the perfect combination of both worlds for me.',
      'Whether it\'s an intimate family function, a vibrant haldi setup, or a grand celebration, my goal is to create experiences that feel beautiful, stress-free, and genuinely memorable — from basic to luxury, with designs that feel elegant and emotionally connected to your story.',
    ],
    cta: { label: 'View Wedding Portfolio', to: '/wedding-planner' },
  },

  makeupSpotlight: {
    label: 'Makeup Artist',
    title: 'Beauty Maison by Mannat Vig',
    portrait: makeupAssets.portrait,
    photos: makeupAssets.gallery.slice(0, 6).map((item) => item.image),
    paragraphs: [
      'At Beauty Maison, makeup is more than application — it\'s an art form that enhances your natural beauty and celebrates every occasion.',
      'From bridal glam to party looks, we deliver flawless, personalised experiences with premium products, refined technique, and a calm, professional touch.',
    ],
    cta: { label: 'View Makeup Portfolio', to: '/makeup-artist' },
  },

  footer: {
    copyright: '© 2026 — Celebrations · Miva Planners · Beauty Maison · Events',
  },
}
