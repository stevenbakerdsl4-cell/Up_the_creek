export type SiteType = 'small_tent' | 'large_tent';

export type BookingStatus = 'pending' | 'confirmed' | 'declined';

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  site_type: SiteType;
  num_people: number;
  check_in: string;
  check_out: string;
  notes: string | null;
  status: BookingStatus;
  created_at: string;
}

export interface NewBooking {
  name: string;
  email: string;
  phone: string;
  site_type: SiteType;
  num_people: number;
  check_in: string;
  check_out: string;
  notes?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface NewContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface Review {
  id: string;
  author_name: string;
  source: string;
  rating: number;
  quote: string;
  created_at: string;
}
