export interface HostInfo {
  name: string;
  avatarUrl: string;
  yearsHosting: number;
}

export interface PropertyDetails {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export interface HighlightItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface SleepingArrangement {
  id: string;
  roomName: string;
  bedType: string;
  imageUrl: string;
}

export interface AmenityItem {
  id: string;
  category: string;
  name: string;
  icon: string;
  available: boolean;
}

export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  category: string;
  categoryDetails?: string;
  order: number;
}

export interface ListingData {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  pricePerPackage: number;
  nightsCount: number;
  initialCheckIn: string;
  initialCheckOut: string;
  maxGuests: number;
  host: HostInfo;
  details: PropertyDetails;
  highlights: HighlightItem[];
  sleepingArrangements: SleepingArrangement[];
  amenities: AmenityItem[];
  photos: PhotoItem[];
  description?: string;
}
