import {
  Film, Wand2, Palette, Music, Youtube, Instagram,
  Video, Mic, Sparkles, MonitorPlay, Clock, Award,
  Users, Star, Scissors, Layers, Clapperboard, TrendingUp
} from 'lucide-react';

// ===== Navigation Links =====
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

// ===== Stats =====
export const stats = [
  { number: '100+', label: 'Videos Edited', icon: Film },
  { number: '50+', label: 'Happy Clients', icon: Users },
  { number: '3+', label: 'Years Experience', icon: Clock },
  { number: '15+', label: 'Awards Won', icon: Award },
];

// ===== Skills =====
export const skills = [
  { name: 'Video Editing', icon: Scissors, level: 95, color: '#ef4444' },
  { name: 'Motion Graphics', icon: Sparkles, level: 90, color: '#f97316' },
  { name: 'Color Grading', icon: Palette, level: 92, color: '#eab308' },
  { name: 'Sound Design', icon: Music, level: 85, color: '#22c55e' },
  { name: 'YouTube Editing', icon: Youtube, level: 96, color: '#ef4444' },
  { name: 'Instagram Reels', icon: Instagram, level: 93, color: '#a855f7' },
  { name: 'TikTok Content', icon: TrendingUp, level: 91, color: '#06b6d4' },
  { name: 'Premiere Pro', icon: Film, level: 95, color: '#9333ea' },
  { name: 'After Effects', icon: Wand2, level: 88, color: '#3b82f6' },
  { name: 'CapCut', icon: MonitorPlay, level: 90, color: '#ec4899' },
];

// ===== Portfolio Projects =====
export const categories = ['All', 'YouTube', 'Reels', 'Commercial Ads', 'Motion Graphics'];

export const projects = [
  {
    id: 1,
    title: 'Tech Review Series',
    category: 'YouTube',
    description: 'Complete editing for a tech review YouTube channel with 500K+ subscribers.',
    gradient: 'from-red-500/20 to-orange-500/20',
  },
  {
    id: 2,
    title: 'Fashion Brand Reels',
    category: 'Reels',
    description: 'Trendy Instagram Reels for a luxury fashion brand launch campaign.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'Car Dealership Ad',
    category: 'Commercial Ads',
    description: 'High-energy commercial for premium car dealership with cinematic transitions.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 4,
    title: 'Logo Reveal Animation',
    category: 'Motion Graphics',
    description: 'Stunning 3D logo reveal animation with particle effects and sound design.',
    gradient: 'from-yellow-500/20 to-red-500/20',
  },
  {
    id: 5,
    title: 'Travel Vlog Edit',
    category: 'YouTube',
    description: 'Cinematic travel vlog editing with color grading and smooth transitions.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 6,
    title: 'Food Brand Campaign',
    category: 'Reels',
    description: 'Mouth-watering food reels with slow-motion shots and engaging captions.',
    gradient: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 7,
    title: 'Real Estate Promo',
    category: 'Commercial Ads',
    description: 'Luxury real estate walkthrough with drone footage integration and voiceover.',
    gradient: 'from-slate-500/20 to-zinc-500/20',
  },
  {
    id: 8,
    title: 'Title Sequence Design',
    category: 'Motion Graphics',
    description: 'Custom animated title sequence for a documentary series.',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 9,
    title: 'Gaming Channel Edits',
    category: 'YouTube',
    description: 'Fast-paced gaming edits with meme integration and dynamic zoom effects.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 10,
    title: 'Fitness Transformation',
    category: 'Reels',
    description: 'Before & after fitness transformation reels with motivational text overlays.',
    gradient: 'from-red-500/20 to-rose-500/20',
  },
  {
    id: 11,
    title: 'Restaurant Ad',
    category: 'Commercial Ads',
    description: 'Premium restaurant commercial with ambient lighting and food close-ups.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 12,
    title: 'Infographic Animation',
    category: 'Motion Graphics',
    description: 'Data-driven animated infographic for corporate presentation.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
];

// ===== Services =====
export const services = [
  {
    title: 'YouTube Video Editing',
    description: 'Professional editing for vlogs, tutorials, reviews, and long-form YouTube content with engaging transitions and effects.',
    icon: Youtube,
    price: 'From $50',
    features: ['Color Correction', 'Sound Mixing', 'Thumbnails', 'Subtitles'],
  },
  {
    title: 'Instagram Reels Editing',
    description: 'Eye-catching, trend-driven reels optimized for maximum engagement and viral potential.',
    icon: Instagram,
    price: 'From $25',
    features: ['Trending Audio', 'Captions', 'Effects', 'Optimization'],
  },
  {
    title: 'TikTok Editing',
    description: 'Fast-paced, attention-grabbing TikTok videos with trending effects and seamless cuts.',
    icon: TrendingUp,
    price: 'From $20',
    features: ['Trend Integration', 'Fast Cuts', 'Text Effects', 'Sound Sync'],
  },
  {
    title: 'Podcast Editing',
    description: 'Clean audio editing, noise removal, and visual enhancement for podcast episodes.',
    icon: Mic,
    price: 'From $40',
    features: ['Audio Cleanup', 'Noise Removal', 'Intros/Outros', 'Audiograms'],
  },
  {
    title: 'Motion Graphics',
    description: 'Custom animated graphics, logo reveals, lower thirds, and visual effects.',
    icon: Sparkles,
    price: 'From $75',
    features: ['Logo Animation', 'Lower Thirds', 'Transitions', 'VFX'],
  },
  {
    title: 'Promotional Videos',
    description: 'High-impact promotional and commercial videos for brands and businesses.',
    icon: Clapperboard,
    price: 'From $100',
    features: ['Scriptwriting', 'Voiceover', 'Music', 'Brand Identity'],
  },
];

// ===== Testimonials =====
export const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'YouTube Creator',
    review: 'Syed completely transformed my channel! His editing style is cinematic and engaging. My watch time increased by 40% after working with him.',
    rating: 5,
    initials: 'AJ',
  },
  {
    name: 'Sarah Williams',
    role: 'Brand Manager',
    review: 'Outstanding work on our promotional campaign. The motion graphics and color grading were beyond our expectations. Highly professional!',
    rating: 5,
    initials: 'SW',
  },
  {
    name: 'Marcus Chen',
    role: 'Podcast Host',
    review: 'Best podcast editor I\'ve worked with. Crystal clear audio, perfect timing, and the visual clips he creates are fantastic for social media.',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Instagram Influencer',
    review: 'My Reels went viral after Syed started editing them! He understands trends and knows exactly how to hook viewers in the first second.',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'David Park',
    role: 'Business Owner',
    review: 'The commercial video Syed created for our restaurant brought in so many new customers. Professional quality that rivals big agencies.',
    rating: 4,
    initials: 'DP',
  },
  {
    name: 'Lisa Thompson',
    role: 'Fitness Coach',
    review: 'Syed captures the energy of my workouts perfectly. The transformation reels he edits always get amazing engagement. True professional!',
    rating: 5,
    initials: 'LT',
  },
];

// ===== Before & After Comparisons =====
export const comparisons = [
  {
    title: 'Color Grading Transformation',
    before: 'Raw, flat footage with muted colors',
    after: 'Cinematic color grade with rich tones',
    beforeColor: 'from-gray-500/30 to-gray-700/30',
    afterColor: 'from-red-500/30 to-orange-500/30',
  },
  {
    title: 'Motion Graphics Enhancement',
    before: 'Static title card with basic text',
    after: 'Animated title with particle effects',
    beforeColor: 'from-zinc-500/30 to-zinc-700/30',
    afterColor: 'from-purple-500/30 to-blue-500/30',
  },
  {
    title: 'Sound Design & Mixing',
    before: 'Raw audio with background noise',
    after: 'Clean, balanced audio with SFX',
    beforeColor: 'from-stone-500/30 to-stone-700/30',
    afterColor: 'from-emerald-500/30 to-teal-500/30',
  },
];
