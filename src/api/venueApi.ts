import { apiClient } from './apiClient';
import type {
  VenueResponse,
  SingleVenueResponse,
  CreateVenueData,
} from '../types/venue';

export async function getVenues() {
  return apiClient<VenueResponse>(
    '/holidaze/venues?sort=created&sortOrder=desc',
  );
}

export async function getVenueById(id: string) {
  return apiClient<SingleVenueResponse>(`/holidaze/venues/${id}?_bookings=true&_owner=true`);
}

export async function createVenue(venueData: CreateVenueData) {
  return apiClient('/holidaze/venues', {
    method: 'POST',
    body: venueData,
    requiresAuth: true,
  });
}

export async function getVenuesByProfile(name: string) {
  return apiClient<VenueResponse>(
    `/holidaze/profiles/${name}/venues`,
    {
      requiresAuth: true,
    },
  );
}