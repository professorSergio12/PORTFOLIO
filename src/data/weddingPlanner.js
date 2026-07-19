import { loadWeddingPlannerAssets } from './weddingPlannerAssets'
import { loadMakeupArtistAssets } from './makeupArtistAssets'
import { contactInfo } from './contactInfo'

const assets = loadWeddingPlannerAssets()
const makeupAssets = loadMakeupArtistAssets()

export const weddingPlannerData = {
  brand: 'Miva Planners',
  heroLabel: 'Miva Planners',
  heroTitle: 'Miva Planners',
  tagline:
    'Blending Milan (union) and Viva (life) — short, sharp, and full of energy for celebrations that feel unmistakably yours.',
  heroVideo: assets.heroVideo,

  journey: {
    label: 'My Journey',
    title: 'From Tech to Timeless Celebrations',
    intro:
      'My path didn\'t begin at a wedding venue — it began with discipline, deadlines, and doing the work right. That same mindset is what I bring to every celebration I plan: structured, reliable, and completely in control on your big day.',
    quote: 'The precision I learned in tech and my career — now dedicated to making your wedding run flawlessly.',
    portrait: assets.portrait,
    secondaryPortrait: assets.secondaryPortrait,
    steps: [
      {
        year: '01',
        title: 'Who I Am',
        description:
          'Someone who has always been drawn to tradition, colour, and the feeling of a space when every detail is in place — long before planning became my profession.',
      },
      {
        year: '02',
        title: 'Tech Foundation',
        description:
          'A background in technology taught me to think in systems — break complex days into clear steps, manage timelines, and stay calm when pressure builds.',
      },
      {
        year: '03',
        title: 'Internship & Career',
        description:
          'Professional internships and a full-time role shaped how I work today — accountable, punctual, and trusted to deliver under real deadlines with real responsibility.',
      },
      {
        year: '04',
        title: 'Wedding Planning Today',
        description:
          'I chose to channel that same rigour into celebrations — coordinating vendors, directing setup, and executing day-of with the confidence that only comes from years of professional practice.',
      },
    ],
  },

  firstImpression: {
    label: 'First Impression',
    title: 'Where Your Wedding Begins',
    intro:
      'The welcome moment sets the tone — elegant signage, thoughtful entry décor, and photobooth experiences guests remember long after the night ends.',
    hero: assets.firstImpression.hero,
    items: assets.firstImpression.items,
  },

  dogriWedding: {
    label: 'Featured Celebration',
    title: 'A Dogri Wedding',
    intro:
      'A traditional Dogri celebration — rich colours, joyful rituals, and décor that honours culture while feeling fresh and personal.',
    featured: assets.dogriWedding.featured,
    gallery: assets.dogriWedding.gallery,
    videos: assets.dogriWedding.videos,
    reelsSection: {
      label: 'Moments',
      title: 'In Motion',
      subtitle: 'Swipe to watch highlights from the celebration.',
    },
  },

  decorSection: {
    label: 'Décor & Staging',
    title: 'Spaces That Feel Like Magic',
    intro:
      'Stage design, draping, florals, and lighting — every element composed to photograph beautifully and feel unforgettable in person.',
    items: assets.decor,
  },

  services: [
    {
      name: 'Full Wedding Planning',
      description:
        'End-to-end planning — concept, vendors, timeline, décor direction, and flawless day-of coordination.',
    },
    {
      name: 'Partial Planning',
      description:
        'Décor design, setup supervision, and vendor coordination for couples who want expert guidance without full planning.',
    },
    {
      name: 'Day-of Coordination',
      description:
        'You planned the vision — we execute it. Timeline management, vendor liaison, and calm leadership on your wedding day.',
    },
    {
      name: 'Photobooth & Signage',
      description:
        'Custom welcome mirrors, entry tables, signage, and photobooth styling that wows guests from the first step in.',
    },
  ],

  processSection: {
    label: 'How It Works',
    title: 'From Dream to I Do',
    intro:
      'A clear, calm process so you always know what\'s next — and enjoy the journey as much as the celebration.',
  },

  process: [
    {
      step: '01',
      title: 'Consultation',
      description:
        'We discuss your vision, guest count, venue, budget, and cultural traditions — building a plan that feels truly yours.',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description:
        'Mood boards, décor concepts, vendor shortlists, and a detailed timeline — refined until every detail feels right.',
    },
    {
      step: '03',
      title: 'Setup & Celebration',
      description:
        'On-site styling, coordination, and execution — so you stay present while your wedding unfolds beautifully.',
    },
  ],

  processImage: assets.dogriWedding.featured?.imageFull ?? assets.portrait,

  photoMarquee: {
    label: 'Every Detail',
    title: 'Captured Moments',
    intro: 'Celebrations and décor — the moments and spaces we create together.',
    photos: assets.marqueePhotos,
  },

  contact: {
    ...contactInfo,
    cta: 'Plan Your Wedding',
    footer: '© 2026 — Miva Planners',
    sideImages: [
      assets.homeImages.me ?? assets.contactImages[0],
      makeupAssets.homeImages['8906'],
    ].filter(Boolean),
  },
}
