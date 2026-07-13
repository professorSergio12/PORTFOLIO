import portraitImg from '../assets/makeup-artist/gallery/optimized/1.jpg'
import gallery1 from '../assets/makeup-artist/gallery/thumbs/1.jpg'
import gallery2 from '../assets/makeup-artist/gallery/thumbs/2.jpg'
import gallery3 from '../assets/makeup-artist/gallery/thumbs/3.jpg'
import gallery4 from '../assets/makeup-artist/gallery/thumbs/4.jpg'
import gallery5 from '../assets/makeup-artist/gallery/thumbs/5.jpg'
import gallery1Full from '../assets/makeup-artist/gallery/optimized/1.jpg'
import gallery2Full from '../assets/makeup-artist/gallery/optimized/2.jpg'
import gallery3Full from '../assets/makeup-artist/gallery/optimized/3.jpg'
import gallery4Full from '../assets/makeup-artist/gallery/optimized/4.jpg'
import gallery5Full from '../assets/makeup-artist/gallery/optimized/5.jpg'
import muaReel from '../assets/makeup-artist/compressed/mua-reel.mp4'

export const makeupArtistData = {
  name: 'Priya Sharma',
  title: 'Bridal & Editorial Makeup Artist',
  tagline: 'Where artistry meets elegance',
  reel: muaReel,
  portrait: portraitImg,

  about: {
    left: {
      heading: 'Who am I?',
      paragraphs: [
        'I am a passionate bridal and editorial makeup artist with over 6 years of experience transforming faces into timeless works of art.',
        'From intimate mehendi mornings to grand wedding receptions, every look I create tells a story — yours.',
      ],
    },
    right: {
      heading: 'My Artistry',
      paragraphs: [
        'Specializing in soft glam, traditional bridal, and contemporary editorial looks that photograph beautifully and last all day.',
        'I believe makeup should enhance your natural beauty, not mask it. Every brushstroke is intentional, every detail perfected.',
      ],
      cta: 'Work With Me',
    },
  },

  gallery: [
    { id: 1, image: gallery1, imageFull: gallery1Full, label: 'Bridal Glam' },
    { id: 2, image: gallery2, imageFull: gallery2Full, label: 'Soft Romance' },
    { id: 3, image: gallery3, imageFull: gallery3Full, label: 'Editorial Look' },
    { id: 4, image: gallery4, imageFull: gallery4Full, label: 'Reception Ready' },
    { id: 5, image: gallery5, imageFull: gallery5Full, label: 'Traditional Elegance' },
  ],

  services: [
    {
      name: 'Bridal Makeup',
      price: '₹25,000',
      description: 'Full bridal look with trial session, HD makeup, and touch-up kit.',
    },
    {
      name: 'Engagement / Roka',
      price: '₹12,000',
      description: 'Camera-ready glam for your special pre-wedding celebration.',
    },
    {
      name: 'Party / Reception',
      price: '₹8,000',
      description: 'Long-lasting party makeup with lashes and setting spray.',
    },
    {
      name: 'Mehendi / Haldi',
      price: '₹6,000',
      description: 'Fresh, dewy looks perfect for daytime ceremonies.',
    },
    {
      name: 'Bridesmaid Package',
      price: '₹5,000',
      description: 'Per person — coordinated looks for the entire squad.',
    },
    {
      name: 'Editorial / Shoot',
      price: '₹15,000',
      description: 'Creative, high-fashion looks for photoshoots and campaigns.',
    },
  ],

  process: [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your vision, skin type, outfit colors, and event timeline.',
    },
    {
      step: '02',
      title: 'Trial Session',
      description: 'A dedicated trial to perfect your look before the big day.',
    },
    {
      step: '03',
      title: 'The Big Day',
      description: 'Flawless application with premium products — you shine, stress-free.',
    },
  ],

  contact: {
    email: 'hello@priyasharma.com',
    phone: '+91 98765 43210',
    instagram: '@priyasharma.mua',
  },
}
