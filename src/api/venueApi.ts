import { apiClient } from './apiClient';
import type { VenueResponse, SingleVenueResponse } from '../types/venue';

export async function getVenues() {
  return apiClient<VenueResponse>('/holidaze/venues');
}

export async function getVenueById(id: string) {
  return apiClient<SingleVenueResponse>(`/holidaze/venues/${id}?_bookings=true&_owner=true`);
}