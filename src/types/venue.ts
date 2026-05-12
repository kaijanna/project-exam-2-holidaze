export type Venue = {
  id: string;
  name: string;
  description: string;
  media: {
    url: string;
    alt: string;
  }[];
  price: number;
  maxGuests: number;
  rating: number;
  meta: {
    wifi: boolean;
    parking: boolean;
    breakfast: boolean;
    pets: boolean;
  };
  location: {
    address: string | null;
    city: string | null;
    zip: string | null;
    country: string | null;
    continent: string | null;
    lat: number;
    lng: number;
  };
};

export type VenueResponse = {
  data: Venue[];
  meta: {
    currentPage: number;
    isLastPage: boolean;
    totalCount: number;
  };
};