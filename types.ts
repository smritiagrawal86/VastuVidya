import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ClientStory {
  id: number;
  name: string;
  content: string;
}

export interface ClientReview {
  id: string;
  name: string;
  rating: number; // 1-5
  service: string;
  content: string;
  date: string;
  location?: string;
}

export interface JourneyEvent {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeaturedMedia {
  type: 'youtube' | 'instagram';
  id: string;
}