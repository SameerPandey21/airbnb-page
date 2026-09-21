export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  section: string;
  galleryIndex: number;
  caption?: string;
  isHero?: boolean;
  heroPosition?: number; // 0 = main, 1 = top-left, 2 = top-right, etc.
  localFallback?: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description?: string;
  isHighlighted?: boolean;
}

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  beds: string;
}

export interface ReviewCategory {
  name: string;
  rating: number;
  iconName: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  durationStay: string;
  rating: number;
  comment: string;
}

export interface Host {
  name: string;
  avatar: string;
  badge?: string;
  joinedDate: string;
  rating: number;
  reviewCount: number;
  responseRate: string;
  responseTime: string;
  bio?: string;
  coHosts?: Array<{
    name: string;
    avatar: string;
  }>;
}

export interface NearbyStay {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewCount?: number;
  pricePerNight: string;
  totalPrice?: string;
  image: string;
  dates?: string;
  localFallback?: string;
}

export interface ThingsToKnow {
  cancellationPolicy: {
    title: string;
    summary: string;
    fullText: string;
  };
  houseRules: {
    checkIn: string;
    checkOut: string;
    maxGuests: number;
    rules: string[];
  };
  safetyAndProperty: {
    items: string[];
  };
}

export interface Property {
  id: string;
  title: string;
  tagline: string;
  location: string;
  guestCount: number;
  bedroomCount: number;
  bedCount: number;
  bathroomCount: number;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  pricePerNight: number;
  currency: string;
  discountBadge?: string;
  host: Host;
  description: string[];
  features: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  amenities: Amenity[];
  images: GalleryImage[];
  rooms: Room[];
  reviews: Review[];
  reviewCategories: ReviewCategory[];
  ratingTags: Array<{
    name: string;
    count: number;
    icon?: string;
  }>;
  thingsToKnow: ThingsToKnow;
  nearbyStays: NearbyStay[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export interface DateRange {
  checkIn: Date | null;
  checkOut: Date | null;
}
