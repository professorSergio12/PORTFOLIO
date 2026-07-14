import portraitImg from '../assets/makeup-artist/gallery/optimized/about-portrait-ring.jpg'
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
import gallery0679 from '../assets/makeup-artist/gallery/thumbs/0679.jpg'
import gallery0719 from '../assets/makeup-artist/gallery/thumbs/0719.jpg'
import gallery0904 from '../assets/makeup-artist/gallery/thumbs/0904.jpg'
import gallery8906 from '../assets/makeup-artist/gallery/thumbs/8906.jpg'
import gallery9083 from '../assets/makeup-artist/gallery/thumbs/9083.jpg'
import gallery9518 from '../assets/makeup-artist/gallery/thumbs/9518.jpg'
import gallery9157 from '../assets/makeup-artist/gallery/thumbs/9157.jpg'
import gallery0679Full from '../assets/makeup-artist/gallery/optimized/0679.jpg'
import gallery0719Full from '../assets/makeup-artist/gallery/optimized/0719.jpg'
import gallery0904Full from '../assets/makeup-artist/gallery/optimized/0904.jpg'
import gallery8906Full from '../assets/makeup-artist/gallery/optimized/8906.jpg'
import gallery9083Full from '../assets/makeup-artist/gallery/optimized/9083.jpg'
import gallery9518Full from '../assets/makeup-artist/gallery/optimized/9518.jpg'
import gallery9157Full from '../assets/makeup-artist/gallery/optimized/9157.jpg'
import muaReel from '../assets/makeup-artist/compressed/mua-reel.mp4'
import reel0671 from '../assets/makeup-artist/compressed/reels/img_0671.mp4'
import reel0933 from '../assets/makeup-artist/compressed/reels/img_0933.mp4'

export const makeupArtistData = {
  brand: 'Beauty Maison by Mannat Vig',
  heroLabel: 'Beauty Maison by Mannat Vig',
  heroTitle: 'Makeup',
  tagline: 'Where Beauty Finds Its Home',
  reel: muaReel,
  portrait: portraitImg,

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

  gallery: [
    { id: 1, image: gallery0679, imageFull: gallery0679Full, label: 'Bridal Portrait' },
    { id: 2, image: gallery0719, imageFull: gallery0719Full, label: 'Soft Glam' },
    { id: 3, image: gallery0904, imageFull: gallery0904Full, label: 'Celebration Ready' },
    { id: 4, image: gallery8906, imageFull: gallery8906Full, label: 'Evening Elegance' },
    { id: 5, image: gallery9083, imageFull: gallery9083Full, label: 'Classic Beauty' },
    { id: 6, image: gallery9518, imageFull: gallery9518Full, label: 'Radiant Glow' },
    { id: 7, image: gallery9157, imageFull: gallery9157Full, label: 'Timeless Glam' },
    { id: 8, image: gallery1, imageFull: gallery1Full, label: 'Bridal Glam' },
    { id: 9, image: gallery3, imageFull: gallery3Full, label: 'Editorial Look' },
  ],

  reelsSection: {
    label: 'Reels',
    title: 'Watch & Explore',
    subtitle: 'Swipe sideways to browse our latest makeup reels.',
  },

  reels: [
    { id: 1, video: muaReel, label: 'Beauty Maison' },
    { id: 2, video: reel0671, label: 'Bridal Moments' },
    { id: 3, video: reel0933, label: 'Glam Session' },
  ],

  portfolioDetail: {
    featured: {
      id: 'detail-1',
      image: gallery1,
      imageFull: gallery1Full,
      label: 'Bridal Glam',
    },
    grid: [
      { id: 'detail-2', image: gallery2, imageFull: gallery2Full, label: 'Soft Romance' },
      { id: 'detail-3', image: gallery3, imageFull: gallery3Full, label: 'Editorial Look' },
      { id: 'detail-4', image: gallery4, imageFull: gallery4Full, label: 'Reception Ready' },
      { id: 'detail-5', image: gallery5, imageFull: gallery5Full, label: 'Traditional Elegance' },
    ],
  },

  servicesSection: {
    verticalTitle: 'Classes',
    label: 'Pricing',
    title: 'Invest in your skills. Elevate your artistry.',
  },

  services: [
    {
      name: 'Demo 1: Party Makeup Look',
      price: '$129 USD',
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
      price: '$139 USD',
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
      price: '$149 USD',
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
      price: '$199 USD',
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
    price: '$500 USD',
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
  },
}
