import { Service, ClientStory, ClientReview, JourneyEvent, NavLink, BlogPost, FeaturedMedia } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Astrology Consultation',
    description: "Delve deep into your birth charts (Kundli) and planetary alignments to unlock clarity, direction, and gentle remedies for your career, relationships, health, and personal growth.",
    image: 'https://picsum.photos/400/300?random=45',
    link: 'https://wa.me/971505706587?text=Hi!%20I%20am%20interested%20in%20an%20Astrology%20Consultation.'
  },
  {
    id: 2,
    title: 'Vastu Consultation',
    description: "Harmonize the elements and spatial directions within your home or workplace using non-destructive, natural remedies to invite health, wealth, peace, and abundance.",
    image: 'https://picsum.photos/400/300?random=47',
    link: 'https://wa.me/971505706587?text=Hi!%20I%20am%20interested%20in%20a%20Vastu%20Consultation.'
  },
];

export const JOURNEY_EVENTS: JourneyEvent[] = [
  {
    id: 1,
    date: '2014',
    title: 'Most Prominent Wedding Astrologer',
    description: 'Awarded by Ravishing.'
  },
  {
    id: 2,
    date: '2015',
    title: 'Lady of Fortune of India',
    description: 'Known for magical Astrological skills.'
  },
  {
    id: 3,
    date: '2016',
    title: 'Gem of India & Indian Icon',
    description: 'By All India Achievers Conference. Excellence in Vastu by Indian Council for UN Relation.'
  },
  {
    id: 4,
    date: '2017',
    title: 'Indian Hall Of Fame Award',
    description: 'By All India Achiever Conference. The Golden Globe Tigers Award.'
  },
  {
    id: 5,
    date: '2018',
    title: 'Guest of Honour',
    description: "Times Ascent’s World HRD Congress, Mumbai."
  },
  {
    id: 6,
    date: '2019',
    title: 'Guest Speaker',
    description: 'Indian Medical Association, East Delhi (IMAEDB).'
  }
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 1,
    name: 'Anita',
    content: 'Dear Smriti, ❤️ I want to express my heartfelt gratitude for all the guidance and support you have given me over the last few years. When I was going through health challenges, your Vastu and astrology guidance, along with the remedies you suggested, gave me hope and positivity. I sincerely felt a positive difference in my health and overall well-being after following your advice. Your patience, dedication, and genuine concern for helping others are truly admirable. 🌷 Thank you for always being there, listening, and guiding me with such kindness. I am grateful for your support and wish you continued success in helping many more people through your knowledge and expertise. 🙏✨ With gratitude, Anita 🌹'
  },
  {
    id: 2,
    name: 'Harshita',
    content: 'I had a wonderful experience consulting with Smriti for Vastu guidance. She patiently analyzed every aspect of our property and provided remedies that were simple, logical, and easy to implement. What impressed me most was her ability to explain how Vastu principles and planetary changes creates impact in our life. I highly recommend her services to anyone looking for genuine, knowledgeable, and professional Vastu consultation. Thank you for your guidance and support.'
  },
  {
    id: 3,
    name: 'Shubh',
    content: 'Amazing experience with Smriti. The guidance was practical, personalized, and easy to follow. The combination of Vastu and astrology provided valuable clarity and positive direction.'
  },
  {
    id: 4,
    name: 'Anonymous',
    content: 'My experience with Smriti has been very nice, and your guidance is helpful. I really appreciate the way you explain things with patience and clarity. Thank you for your support and positive approach.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Impact of Vastu on Mental Health',
    excerpt: 'Discover how the arrangement of your living space can significantly influence your mental peace and emotional stability.',
    date: 'October 15, 2023',
    image: 'https://picsum.photos/600/400?random=30'
  },
  {
    id: 2,
    title: 'Astrology and Career Choices',
    excerpt: 'Uncover the connection between planetary positions and your professional path. Can the stars guide your career?',
    date: 'September 22, 2023',
    image: 'https://picsum.photos/600/400?random=31'
  },
  {
    id: 3,
    title: 'The Power of Positive Affirmations',
    excerpt: 'Learn how daily affirmations can rewire your brain and help you manifest your deepest desires and goals.',
    date: 'August 10, 2023',
    image: 'https://picsum.photos/600/400?random=32'
  }
];

// To add your own YouTube videos or Instagram posts, update the array below:
// - YouTube: { type: 'youtube', id: 'video_id' }
// - Instagram: { type: 'instagram', id: 'post_id_from_url' } (e.g. DUCnTQbEYfe from https://www.instagram.com/p/DUCnTQbEYfe/)
export const FEATURED_VIDEOS: FeaturedMedia[] = [
  { type: 'youtube', id: 'n-lpYZwweog' },
  { type: 'instagram', id: 'DUCnTQbEYfe' },
  { type: 'instagram', id: 'DaFgs_LxEx4' },
  { type: 'instagram', id: 'DZHS-CIR_Dj' }
];

export const YOUTUBE_IDS: string[] = ['n-lpYZwweog'];