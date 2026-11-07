export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'motores' | 'conserto' | 'pecas' | 'eletronica' | 'serralheria' | 'hardware' | 'acessorios';
  image: string;
  highlights: string[];
  brands?: string[];
  ctaText: string;
}

export interface PostComment {
  id: string;
  author: string;
  location: string;
  text: string;
  timeAgo: string;
  reply?: {
    author: string;
    text: string;
    timeAgo: string;
  };
}

export interface FanpagePost {
  id: string;
  author: string;
  avatar: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  image: string;
  likes: number;
  commentsCount: number;
  sharesCount: number;
  pinned?: boolean;
  serviceCategory: string;
  whatsappMessage: string;
  commentsList: PostComment[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
  source: 'google';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'motores' | 'portoes' | 'centrais' | 'hardware' | 'acessorios';
  image: string;
  description: string;
  tag: string;
}
